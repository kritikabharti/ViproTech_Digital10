// models/Team.js
import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter team member name"],
      trim: true,
      maxlength: [100, "Name cannot be more than 100 characters"],
    },
    designation: {
      type: String,
      required: [true, "Please enter designation"],
      trim: true,
      enum: [
        "Founder & CEO",
        "Co-Founder",
        "HR Manager",
        "HR Executive",
        "Senior Developer",
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "UI/UX Designer",
        "Graphic Designer",
        "Digital Marketing Manager",
        "SEO Specialist",
        "Social Media Manager",
        "Content Writer",
        "Mechanical Engineer",
        "CAD Designer",
        "Project Manager",
        "Intern",
        "Team Lead",
        "Other",
      ],
    },
    department: {
      type: String,
      required: [true, "Please select department"],
      enum: [
        "Leadership",
        "Development",
        "Marketing & Design",
        "Mechanical Team",
        "HR",
        "Management",
      ],
    },
    email: {
      type: String,
      required: [true, "Please enter email address"],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
    phone: {
      type: String,
      trim: true,
      match: [
        /^[0-9]{10}$/,
        "Please enter a valid 10-digit phone number",
      ],
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      trim: true,
      maxlength: [500, "Bio cannot be more than 500 characters"],
      default: "",
    },
    experience: {
      type: String,
      default: "",
    },
    skills: {
      type: [String],
      default: [],
    },
    socialLinks: {
      linkedin: { type: String, default: "" },
      github: { type: String, default: "" },
      twitter: { type: String, default: "" },
      portfolio: { type: String, default: "" },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    joinedDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Add index for faster queries
teamSchema.index({ department: 1 });
teamSchema.index({ designation: 1 });
teamSchema.index({ isActive: 1 });

const Team = mongoose.model("Team", teamSchema);

export default Team;