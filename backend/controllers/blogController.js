// controllers/blogController.js
import asyncHandler from "express-async-handler";
import Blog from "../models/Blog.js";

// ============ GET ALL PUBLISHED BLOGS ============
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ isPublished: true })
    .sort({ createdAt: -1 })
    .select("-__v");

  res.json({
    success: true,
    count: blogs.length,
    blogs,
  });
});

// ============ GET ALL BLOGS (ADMIN) ============
const getAllBlogsAdmin = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({})
    .sort({ createdAt: -1 })
    .populate("authorId", "name email")
    .select("-__v");

  res.json({
    success: true,
    count: blogs.length,
    blogs,
  });
});

// ============ GET BLOG BY ID ============
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id).select("-__v");

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  // Increment views
  blog.views += 1;
  await blog.save();

  res.json({
    success: true,
    blog,
  });
});

// ============ CREATE BLOG ============
const createBlog = asyncHandler(async (req, res) => {
  const { title, category, description, content, image, readTime, author, tags } = req.body;

  if (!title || !category || !description || !content) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const blog = await Blog.create({
    title,
    category,
    description,
    content,
    image: image || "",
    readTime: readTime || "5 min read",
    author: author || "VProTech Digital",
    authorId: req.user.id,
    tags: tags || [],
  });

  res.status(201).json({
    success: true,
    message: "Blog created successfully",
    blog,
  });
});

// ============ UPDATE BLOG ============
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  const { title, category, description, content, image, readTime, author, tags, isPublished } = req.body;

  if (title) blog.title = title;
  if (category) blog.category = category;
  if (description) blog.description = description;
  if (content) blog.content = content;
  if (image !== undefined) blog.image = image;
  if (readTime) blog.readTime = readTime;
  if (author) blog.author = author;
  if (tags) blog.tags = tags;
  if (isPublished !== undefined) blog.isPublished = isPublished;

  const updatedBlog = await blog.save();

  res.json({
    success: true,
    message: "Blog updated successfully",
    blog: updatedBlog,
  });
});

// ============ DELETE BLOG ============
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  await blog.deleteOne();

  res.json({
    success: true,
    message: "Blog deleted successfully",
  });
});

// ============ TOGGLE PUBLISH STATUS ============
const togglePublish = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  blog.isPublished = !blog.isPublished;
  await blog.save();

  res.json({
    success: true,
    message: `Blog ${blog.isPublished ? "published" : "unpublished"} successfully`,
    blog,
  });
});

// ============ LIKE BLOG ============
const likeBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  blog.likes += 1;
  await blog.save();

  res.json({
    success: true,
    message: "Blog liked successfully",
    likes: blog.likes,
  });
});

// ============ GET BLOG STATS ============
const getBlogStats = asyncHandler(async (req, res) => {
  const totalBlogs = await Blog.countDocuments();
  const totalPublished = await Blog.countDocuments({ isPublished: true });
  const totalViews = await Blog.aggregate([
    { $group: { _id: null, total: { $sum: "$views" } } },
  ]);
  
  const categoryStats = await Blog.aggregate([
    { $group: { _id: "$category", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);

  const mostViewed = await Blog.find({})
    .sort({ views: -1 })
    .limit(5)
    .select("title views");

  res.json({
    success: true,
    stats: {
      totalBlogs,
      totalPublished,
      totalViews: totalViews[0]?.total || 0,
      categoryStats,
      mostViewed,
    },
  });
});

export {
  getBlogs,
  getAllBlogsAdmin,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  togglePublish,
  likeBlog,
  getBlogStats,
};