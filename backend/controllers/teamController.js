// controllers/teamController.js
import asyncHandler from "express-async-handler";
import Team from "../models/Team.js";
import cloudinary from "../config/cloudinary.js";

// ============ GET ALL TEAM MEMBERS (PUBLIC) ============
const getTeamMembers = asyncHandler(async (req, res) => {
  const { department } = req.query;
  
  // Build filter
  const filter = { isActive: true };
  if (department) {
    filter.department = department;
  }

  const members = await Team.find(filter)
    .sort({ order: 1, createdAt: -1 })
    .select("-__v");

  // Group by department
  const grouped = members.reduce((acc, member) => {
    const dept = member.department;
    if (!acc[dept]) {
      acc[dept] = [];
    }
    acc[dept].push(member);
    return acc;
  }, {});

  res.json({
    success: true,
    count: members.length,
    members,
    grouped,
  });
});

// ============ GET ALL TEAM MEMBERS (ADMIN) ============
const getAllTeamMembersAdmin = asyncHandler(async (req, res) => {
  const members = await Team.find({})
    .sort({ department: 1, order: 1, createdAt: -1 })
    .select("-__v");

  // Group by department
  const grouped = members.reduce((acc, member) => {
    const dept = member.department;
    if (!acc[dept]) {
      acc[dept] = [];
    }
    acc[dept].push(member);
    return acc;
  }, {});

  res.json({
    success: true,
    count: members.length,
    members,
    grouped,
  });
});

// ============ GET SINGLE TEAM MEMBER ============
const getTeamMemberById = asyncHandler(async (req, res) => {
  const member = await Team.findById(req.params.id).select("-__v");

  if (!member) {
    res.status(404);
    throw new Error("Team member not found");
  }

  res.json({
    success: true,
    member,
  });
});

// ============ CREATE TEAM MEMBER ============
const createTeamMember = asyncHandler(async (req, res) => {
  const {
    name,
    designation,
    department,
    email,
    phone,
    image,
    bio,
    experience,
    skills,
    socialLinks,
    isActive,
    order,
    featured,
    joinedDate,
  } = req.body;

  if (!name || !designation || !department || !email) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  // Check if member with same email exists
  const memberExists = await Team.findOne({ email });
  if (memberExists) {
    res.status(400);
    throw new Error("Team member with this email already exists");
  }

  // If image is uploaded via Cloudinary (multer)
  let imageUrl = image || "";
  if (req.file) {
    imageUrl = req.file.path;
  }

  const member = await Team.create({
    name,
    designation,
    department,
    email,
    phone: phone || "",
    image: imageUrl,
    bio: bio || "",
    experience: experience || "",
    skills: skills || [],
    socialLinks: socialLinks || {},
    isActive: isActive !== undefined ? isActive : true,
    order: order || 0,
    featured: featured || false,
    joinedDate: joinedDate || Date.now(),
  });

  res.status(201).json({
    success: true,
    message: "Team member created successfully",
    member,
  });
});

// ============ UPDATE TEAM MEMBER ============
const updateTeamMember = asyncHandler(async (req, res) => {
  const member = await Team.findById(req.params.id);

  if (!member) {
    res.status(404);
    throw new Error("Team member not found");
  }

  const {
    name,
    designation,
    department,
    email,
    phone,
    image,
    bio,
    experience,
    skills,
    socialLinks,
    isActive,
    order,
    featured,
    joinedDate,
  } = req.body;

  // Check if email is taken by another member
  if (email && email !== member.email) {
    const emailExists = await Team.findOne({ email, _id: { $ne: req.params.id } });
    if (emailExists) {
      res.status(400);
      throw new Error("Email already in use by another team member");
    }
  }

  // If new image uploaded, delete old from Cloudinary
  if (req.file) {
    // Delete old image from Cloudinary if it exists
    if (member.image) {
      try {
        const publicId = member.image.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(`vprotech/team/${publicId}`);
      } catch (error) {
        console.error('Error deleting old image:', error);
      }
    }
    member.image = req.file.path;
  } else if (image !== undefined) {
    member.image = image;
  }

  // Update fields
  if (name) member.name = name;
  if (designation) member.designation = designation;
  if (department) member.department = department;
  if (email) member.email = email;
  if (phone !== undefined) member.phone = phone;
  if (bio !== undefined) member.bio = bio;
  if (experience !== undefined) member.experience = experience;
  if (skills) member.skills = skills;
  if (socialLinks) member.socialLinks = socialLinks;
  if (isActive !== undefined) member.isActive = isActive;
  if (order !== undefined) member.order = order;
  if (featured !== undefined) member.featured = featured;
  if (joinedDate) member.joinedDate = joinedDate;

  const updatedMember = await member.save();

  res.json({
    success: true,
    message: "Team member updated successfully",
    member: updatedMember,
  });
});

// ============ DELETE TEAM MEMBER ============
const deleteTeamMember = asyncHandler(async (req, res) => {
  const member = await Team.findById(req.params.id);

  if (!member) {
    res.status(404);
    throw new Error("Team member not found");
  }

  // Delete image from Cloudinary if exists
  if (member.image) {
    try {
      const publicId = member.image.split('/').pop().split('.')[0];
      await cloudinary.uploader.destroy(`vprotech/team/${publicId}`);
    } catch (error) {
      console.error('Error deleting image from Cloudinary:', error);
    }
  }

  await member.deleteOne();

  res.json({
    success: true,
    message: "Team member deleted successfully",
  });
});

// ============ TOGGLE TEAM MEMBER STATUS ============
const toggleTeamMemberStatus = asyncHandler(async (req, res) => {
  const member = await Team.findById(req.params.id);

  if (!member) {
    res.status(404);
    throw new Error("Team member not found");
  }

  member.isActive = !member.isActive;
  await member.save();

  res.json({
    success: true,
    message: `Team member ${member.isActive ? "activated" : "deactivated"} successfully`,
    member,
  });
});

// ============ GET TEAM STATS ============
const getTeamStats = asyncHandler(async (req, res) => {
  const totalMembers = await Team.countDocuments();
  const activeMembers = await Team.countDocuments({ isActive: true });
  const inactiveMembers = await Team.countDocuments({ isActive: false });

  const departmentStats = await Team.aggregate([
    { $group: { _id: "$department", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);

  const designationStats = await Team.aggregate([
    { $group: { _id: "$designation", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);

  const featuredMembers = await Team.find({ featured: true, isActive: true })
    .limit(6)
    .select("name designation department image");

  res.json({
    success: true,
    stats: {
      totalMembers,
      activeMembers,
      inactiveMembers,
      departmentStats,
      designationStats,
      featuredMembers,
    },
  });
});

// ============ UPLOAD IMAGE ============
const uploadTeamImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error("No image uploaded");
  }

  res.json({
    success: true,
    message: "Image uploaded successfully",
    url: req.file.path,
    publicId: req.file.filename,
  });
});

// ============ DELETE IMAGE ============
const deleteTeamImage = asyncHandler(async (req, res) => {
  const { publicId } = req.body;

  if (!publicId) {
    res.status(400);
    throw new Error("Public ID is required");
  }

  try {
    await cloudinary.uploader.destroy(`vprotech/team/${publicId}`);
    res.json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    res.status(500);
    throw new Error("Failed to delete image");
  }
});

export {
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
};