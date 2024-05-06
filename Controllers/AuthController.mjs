// import createSecretToken from "../util/SecretToken.mjs"
import User from '../models/User.mjs';
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'; // Import bcrypt


const registerController = async (req, res) => {
  try {
    const exisitingUser = await User.findOne({ email: req.body.email });
    //validation
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "User ALready exists",
      });
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    //rest data
    const user = new User(req.body);
    await user.save();
    return res.status(201).send({
      success: true,
      message: "User Registerd Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
  }
};

//login call back
const loginController = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid Credentials",
      });
    }

    //check role
    if (user.role !== req.body.role) {
      return res.status(500).send({
        success: false,
        message: "role dosent match",
      });
    }
    //compare password
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparePassword) {
      return res.status(500).send({
        success: false,
        message: "Invalid Credentials",
      });
    }


    try {
      // Decode the token to see its contents
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.decode(token);
      console.log('Decoded Token:', decodedToken);
    } catch (error) {
      console.error('Token Decoding Error:', error);
    }

    
    // Sign JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    
    return res.status(200).send({
      success: true,
      message: "Login Successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Login API",
      error,
    });
  }
};

// Define the currentUserController function
export const currentUserController = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.userId }); // Use req.userId instead of req.body.userId
    console.log(user)
    return res.status(200).send({
      success: true,
      message: "User Fetched Successfully",
      user: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Unable to get current user",
      error,
    });
  }
};


export default  { registerController, loginController, currentUserController };

