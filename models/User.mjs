import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ["admin", "organisation", "donar", "hospital"],
    },
    name: {
      type: String,
      required: function () {
        return this.role === "user" || this.role === "admin";
      },
    },
    organisationName: {
      type: String,
      required: function () {
        return this.role === "organisation";
      },
    },
    hospitalName: {
      type: String,
      required: function () {
        return this.role === "hospital";
      },
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: function () {
        return this.isNew; // Only required when creating a new user
      },
    },
    website: String,
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;




// import express from 'express';
// import User from "../models/userModel.mjs"; // Import the User model
// const router = express.Router();

// // Define route handler for POST requests to "/register"
// router.post("/register", async (req, res) => {
//   try {
//     // Extract data from the request body
//     const { role, name, email, password, address, phone } = req.body;
    

//     // Validate required fields
//     if (!role || !name || !email || !password || !address || !phone) {
//       return res.status(400).json({ success: false, message: 'All fields are required' });
//     }

//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(200).json({ success: false, message: 'User already exists' });
//     }

//     // Create a new user instance
//     const newUser = new User({
//       role,
//       name,
//       email,
//       password,
//       address,
//       phone
//     });

//     // Save the new user to the database
//     await newUser.save();

//     // Send a response indicating successful registration
//     res.status(201).json({ success: true, message: 'User registered successfully', user: newUser });

//     console.log('Received POST request to /register');
//     console.log('Request body:', req.body);

    
//   } catch (error) {
//     // Handle errors
//     console.error('Error registering user:', error);
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// });

// export default router;
