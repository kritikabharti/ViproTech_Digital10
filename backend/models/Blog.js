// models/Blog.js
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter blog title"],
      trim: true,
      maxlength: [200, "Title cannot be more than 200 characters"],
    },
    category: {
      type: String,
      required: [true, "Please select a category"],
      enum: [
        "Artificial Intelligence",
        "Web Development",
        "Mobile Apps",
        "Cloud Computing",
        "Cyber Security",
        "Digital Marketing",
        "Career Tips",
        "Internships",
      ],
    },
    description: {
      type: String,
      required: [true, "Please enter blog description"],
      trim: true,
      maxlength: [500, "Description cannot be more than 500 characters"],
    },
    content: {
      type: String,
      required: [true, "Please enter blog content"],
    },
    image: {
      type: String,
      default: "",
    },
    readTime: {
      type: String,
      default: "5 min read",
    },
    author: {
      type: String,
      default: "VProTech Digital",
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Add index for search
blogSchema.index({ title: "text", description: "text", content: "text" });

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;