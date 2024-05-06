import User from '../models/User.mjs';
import createSecretToken from "../util/SecretToken.mjs"
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'; // Import bcrypt


const Signup = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    // validation
    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: "User already exists",
      });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    // create new user
    const user = new User(req.body);
    await user.save();
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};

export default Signup;
