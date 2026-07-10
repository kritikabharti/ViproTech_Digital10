// controllers/authController.js
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// ============ REGISTER ============
const register = asyncHandler(async (req, res) => {
  const { name, email, phone, domain, password } = req.body;

  console.log("📝 Register:", email);

  if (!name || !email || !phone || !domain || !password) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists with this email");
  }

  const phoneExists = await User.findOne({ phone });
  if (phoneExists) {
    res.status(400);
    throw new Error("Phone number already registered");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    phone,
    domain,
    password: hashedPassword,
  });

  console.log("✅ User created:", user.email);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      domain: user.domain,
      role: user.role,
    },
    token: generateToken(user._id),
  });
});

// ============ LOGIN ============
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  console.log("🔐 Login:", email);

  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide email and password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  if (!user.isActive) {
    res.status(401);
    throw new Error("Your account has been deactivated");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  console.log("✅ Password match:", isPasswordMatch);

  if (!isPasswordMatch) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  user.lastLogin = new Date();
  await user.save();

  res.status(200).json({
    success: true,
    message: "Login successful",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      domain: user.domain,
      role: user.role,
    },
    token: generateToken(user._id),
  });
});

// ============ GET PROFILE ============
const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password -__v");
  
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.json({
    success: true,
    user,
  });
});

// ============ UPDATE PROFILE ============
const updateProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const { name, email, phone, domain, password, bio, profileImage } = req.body;

  if (name) user.name = name;
  if (email) {
    const emailExists = await User.findOne({ email, _id: { $ne: req.user.id } });
    if (emailExists) {
      res.status(400);
      throw new Error("Email already in use");
    }
    user.email = email;
  }
  if (phone) {
    const phoneExists = await User.findOne({ phone, _id: { $ne: req.user.id } });
    if (phoneExists) {
      res.status(400);
      throw new Error("Phone number already in use");
    }
    user.phone = phone;
  }
  if (domain) user.domain = domain;
  if (bio) user.bio = bio;
  if (profileImage) user.profileImage = profileImage;
  if (password) {
    if (password.length < 6) {
      res.status(400);
      throw new Error("Password must be at least 6 characters long");
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
  }

  const updatedUser = await user.save();

  res.json({
    success: true,
    message: "Profile updated successfully",
    user: {
      id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      domain: updatedUser.domain,
      role: updatedUser.role,
      bio: updatedUser.bio,
      profileImage: updatedUser.profileImage,
    },
  });
});

// ============ GET ALL USERS (ADMIN) ============
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password -__v").sort({ createdAt: -1 });
  res.json({
    success: true,
    count: users.length,
    users,
  });
});

// ============ GET USER BY ID (ADMIN) ============
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password -__v");

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.json({
    success: true,
    user,
  });
});

// ============ UPDATE USER BY ADMIN ============
const updateUserByAdmin = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const { name, email, phone, domain, role, isActive, isVerified } = req.body;

  if (name) user.name = name;
  if (email) {
    const emailExists = await User.findOne({ email, _id: { $ne: req.params.id } });
    if (emailExists) {
      res.status(400);
      throw new Error("Email already in use");
    }
    user.email = email;
  }
  if (phone) {
    const phoneExists = await User.findOne({ phone, _id: { $ne: req.params.id } });
    if (phoneExists) {
      res.status(400);
      throw new Error("Phone number already in use");
    }
    user.phone = phone;
  }
  if (domain) user.domain = domain;
  if (role) user.role = role;
  if (isActive !== undefined) user.isActive = isActive;
  if (isVerified !== undefined) user.isVerified = isVerified;

  const updatedUser = await user.save();

  res.json({
    success: true,
    message: "User updated successfully",
    user: updatedUser,
  });
});

// ============ DELETE USER (ADMIN) ============
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  await user.deleteOne();

  res.json({
    success: true,
    message: "User deleted successfully",
  });
});

// ============ TOGGLE USER STATUS (ADMIN) ============
const toggleUserStatus = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  user.isActive = !user.isActive;
  await user.save();

  res.json({
    success: true,
    message: `User ${user.isActive ? "activated" : "deactivated"} successfully`,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      isActive: user.isActive,
    },
  });
});

// ============ GET USER STATS (ADMIN) ============
const getUserStats = asyncHandler(async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalActive = await User.countDocuments({ isActive: true });
  const totalAdmins = await User.countDocuments({ role: "admin" });
  const totalStudents = await User.countDocuments({ role: "user" });
  const totalVerified = await User.countDocuments({ isVerified: true });

  const domainStats = await User.aggregate([
    { $group: { _id: "$domain", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);

  res.json({
    success: true,
    stats: {
      totalUsers,
      totalActive,
      totalAdmins,
      totalStudents,
      totalVerified,
      domainStats,
    },
  });
});

// ============ EXPORT ALL ============
export {
  register,
  login,
  getProfile,
  updateProfile,
  getAllUsers,
  getUserById,
  updateUserByAdmin,
  deleteUser,
  toggleUserStatus,
  getUserStats,
};