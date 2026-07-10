// routes/authRoutes.js
import express from "express";
import {
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
} from "../controllers/authController.js";
import { protect, admin } from "../middleware/auth.js";

const router = express.Router();

// ============ PUBLIC ROUTES ============
router.post("/register", register);
router.post("/login", login);

// ============ PROTECTED ROUTES ============
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

// ============ ADMIN ROUTES ============
router.get("/users", protect, admin, getAllUsers);
router.get("/users/stats", protect, admin, getUserStats);
router.get("/users/:id", protect, admin, getUserById);
router.put("/users/:id", protect, admin, updateUserByAdmin);
router.delete("/users/:id", protect, admin, deleteUser);
router.put("/users/:id/toggle-status", protect, admin, toggleUserStatus);

// Test route
router.get("/test", (req, res) => {
  res.json({ 
    success: true, 
    message: "✅ Auth routes are working!" 
  });
});

export default router;