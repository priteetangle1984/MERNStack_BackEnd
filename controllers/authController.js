const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { role, name, email, password, address, phone } = req.body;

    // Check if required fields are provided
    if (!role || !name || !email || !password || !address || !phone) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: "User already exists",
      });
    }

    // Create a new user instance
    const newUser = new userModel({
      role,
      name,
      email,
      password,
      address,
      phone
    });

    // Save the user to the database
    await newUser.save();

    // Send a response indicating successful registration
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = { registerController };