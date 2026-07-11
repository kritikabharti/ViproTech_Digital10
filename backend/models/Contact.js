// models/Contact.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Please enter your full name"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [100, "Name cannot be more than 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
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
    subject: {
      type: String,
      required: [true, "Please enter a subject"],
      trim: true,
      maxlength: [200, "Subject cannot be more than 200 characters"],
    },
    message: {
      type: String,
      required: [true, "Please enter your message"],
      trim: true,
      minlength: [10, "Message must be at least 10 characters long"],
      maxlength: [5000, "Message cannot be more than 5000 characters"],
    },
    status: {
      type: String,
      enum: ["pending", "read", "replied", "archived"],
      default: "pending",
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    readAt: {
      type: Date,
    },
    repliedAt: {
      type: Date,
    },
    reply: {
      type: String,
      default: "",
    },
    ipAddress: {
      type: String,
      default: "",
    },
    userAgent: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1 });
contactSchema.index({ createdAt: -1 });

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;