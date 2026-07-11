// routes/contactRoutes.js
import express from "express";
import {
  sendContactMessage,
  getAllMessages,
  getMessageById,
  updateMessageStatus,
  deleteMessage,
  getContactStats,
} from "../controllers/contactController.js";
import { protect, admin } from "../middleware/auth.js";

const router = express.Router();

// Public route
router.post("/", sendContactMessage);

// Admin routes
router.get("/", protect, admin, getAllMessages);
router.get("/stats", protect, admin, getContactStats);
router.get("/:id", protect, admin, getMessageById);
router.put("/:id/status", protect, admin, updateMessageStatus);
router.delete("/:id", protect, admin, deleteMessage);

export default router;