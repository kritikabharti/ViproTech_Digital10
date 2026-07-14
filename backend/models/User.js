
// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your full name"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Please enter your phone number"],
      trim: true,
      match: [
        /^[0-9]{10}$/,
        "Please enter a valid 10-digit phone number",
      ],
    },
    domain: {
      type: String,
      required: [true, "Please select your domain"],
      enum: [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Digital Marketing",
        "Data Analytics",
        "Cloud Computing",
        "Cyber Security",
        "Artificial Intelligence",
        "Full Stack Development",
        "Python Development",
        "Java Development",
        "Other",
      ],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },

 // ============ EMAIL VERIFICATION FIELDS ============
    verificationToken: {
      type: String,
      default: "",
    },
    verificationTokenExpires: {
      type: Date,
    },
    verifiedAt: {
      type: Date,
    },

    profileImage: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    lastLogin: {
      type: Date,
    },
    // ============ FORGOT PASSWORD FIELDS ============
    resetPasswordToken: {
      type: String,
      default: "",
    },
    resetPasswordExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  delete user.__v;
  delete user.resetPasswordToken;
  delete user.resetPasswordExpires;
  return user;
};

const User = mongoose.model("User", userSchema);

export default User;