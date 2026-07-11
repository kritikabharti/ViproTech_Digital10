// controllers/contactController.js
import asyncHandler from "express-async-handler";
import Contact from "../models/Contact.js";

// @desc    Send contact message
// @route   POST /api/contact
// @access  Public
const sendContactMessage = asyncHandler(async (req, res) => {
  const { fullname, email, phone, subject, message } = req.body;

  // Validate required fields
  if (!fullname || !email || !phone || !subject || !message) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400);
    throw new Error("Please enter a valid email address");
  }

  // Validate phone (10 digits)
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    res.status(400);
    throw new Error("Please enter a valid 10-digit phone number");
  }

  // Check for duplicate messages (prevent spam)
  const existingMessage = await Contact.findOne({
    email,
    message,
    createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }, // Last 24 hours
  });

  if (existingMessage) {
    res.status(400);
    throw new Error("You have already sent a similar message recently. Please wait 24 hours before sending again.");
  }

  // Create contact message
  const contact = await Contact.create({
    fullname,
    email,
    phone,
    subject,
    message,
    ipAddress: req.ip || req.connection.remoteAddress || "",
    userAgent: req.headers["user-agent"] || "",
  });

  res.status(201).json({
    success: true,
    message: "Message sent successfully! Our team will contact you within 24 hours.",
    data: {
      id: contact._id,
      fullname: contact.fullname,
      email: contact.email,
      subject: contact.subject,
      status: contact.status,
      createdAt: contact.createdAt,
    },
  });
});

// @desc    Get all contact messages (Admin only)
// @route   GET /api/contact
// @access  Private/Admin
const getAllMessages = asyncHandler(async (req, res) => {
  const { status, search, page = 1, limit = 20 } = req.query;

  // Build filter
  const filter = {};
  if (status) filter.status = status;

  if (search) {
    filter.$or = [
      { fullname: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { subject: { $regex: search, $options: "i" } },
      { message: { $regex: search, $options: "i" } },
    ];
  }

  const skip = (parseInt(page) - 1) * parseInt(limit);

  const messages = await Contact.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(parseInt(limit));

  const total = await Contact.countDocuments(filter);

  res.json({
    success: true,
    count: messages.length,
    total,
    totalPages: Math.ceil(total / parseInt(limit)),
    currentPage: parseInt(page),
    messages,
  });
});

// @desc    Get single contact message (Admin only)
// @route   GET /api/contact/:id
// @access  Private/Admin
const getMessageById = asyncHandler(async (req, res) => {
  const message = await Contact.findById(req.params.id);

  if (!message) {
    res.status(404);
    throw new Error("Message not found");
  }

  // Mark as read if not already
  if (!message.isRead) {
    message.isRead = true;
    message.readAt = new Date();
    message.status = "read";
    await message.save();
  }

  res.json({
    success: true,
    message,
  });
});

// @desc    Update message status (Admin only)
// @route   PUT /api/contact/:id/status
// @access  Private/Admin
const updateMessageStatus = asyncHandler(async (req, res) => {
  const { status, reply } = req.body;

  if (!status) {
    res.status(400);
    throw new Error("Please provide status");
  }

  const message = await Contact.findById(req.params.id);

  if (!message) {
    res.status(404);
    throw new Error("Message not found");
  }

  message.status = status;

  if (status === "read" && !message.isRead) {
    message.isRead = true;
    message.readAt = new Date();
  }

  if (status === "replied") {
    message.repliedAt = new Date();
    if (reply) message.reply = reply;
  }

  await message.save();

  res.json({
    success: true,
    message: "Message status updated successfully",
    data: message,
  });
});

// @desc    Delete message (Admin only)
// @route   DELETE /api/contact/:id
// @access  Private/Admin
const deleteMessage = asyncHandler(async (req, res) => {
  const message = await Contact.findById(req.params.id);

  if (!message) {
    res.status(404);
    throw new Error("Message not found");
  }

  await message.deleteOne();

  res.json({
    success: true,
    message: "Message deleted successfully",
  });
});

// @desc    Get contact statistics (Admin only)
// @route   GET /api/contact/stats
// @access  Private/Admin
const getContactStats = asyncHandler(async (req, res) => {
  const totalMessages = await Contact.countDocuments();
  const pending = await Contact.countDocuments({ status: "pending" });
  const read = await Contact.countDocuments({ status: "read" });
  const replied = await Contact.countDocuments({ status: "replied" });
  const archived = await Contact.countDocuments({ status: "archived" });

  // Messages from last 7 days
  const last7Days = await Contact.aggregate([
    {
      $match: {
        createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
      },
    },
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
  ]);

  res.json({
    success: true,
    stats: {
      totalMessages,
      pending,
      read,
      replied,
      archived,
      last7Days,
    },
  });
});

export {
  sendContactMessage,
  getAllMessages,
  getMessageById,
  updateMessageStatus,
  deleteMessage,
  getContactStats,
};