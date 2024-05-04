import mongoose from "mongoose";
import bcrypt from 'bcryptjs'; // Import bcrypt

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ["admin", "organisation", "user", "hospital"],
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


// Apply bcrypt for password hashing
userSchema.pre('save', async function(next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  try {
    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    
    // Set the hashed password
    user.password = hashedPassword;
    next();
  } catch (err) {
    next(err);
  }
});


const User = mongoose.model("User", userSchema);

export default User;