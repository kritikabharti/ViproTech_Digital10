// routes/teamRoutes.js
import express from "express";
import {
  getTeamMembers,
  getAllTeamMembersAdmin,
  getTeamMemberById,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
  toggleTeamMemberStatus,
  getTeamStats,
  uploadTeamImage,
  deleteTeamImage,
} from "../controllers/teamController.js";
import { protect, admin } from "../middleware/auth.js";
import { uploadSingle } from "../middleware/upload.js";

const router = express.Router();

// ============ PUBLIC ROUTES ============
router.get("/", getTeamMembers);
router.get("/:id", getTeamMemberById);

// ============ ADMIN ROUTES ============
router.get("/admin/all", protect, admin, getAllTeamMembersAdmin);
router.get("/admin/stats", protect, admin, getTeamStats);
router.post("/", protect, admin, uploadSingle, createTeamMember);
router.put("/:id", protect, admin, uploadSingle, updateTeamMember);
router.delete("/:id", protect, admin, deleteTeamMember);
router.put("/:id/toggle-status", protect, admin, toggleTeamMemberStatus);

// Image management routes
router.post("/upload", protect, admin, uploadSingle, uploadTeamImage);
router.delete("/image", protect, admin, deleteTeamImage);

export default router;