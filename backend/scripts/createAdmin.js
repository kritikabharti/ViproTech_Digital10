// scripts/createAdmin.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB\n");

    // Check if admin already exists
    const adminExists = await User.findOne({ email: "kritikabharti577@gmail.com" });
    if (adminExists) {
      console.log("⚠️ Admin already exists!");
      console.log("📧 Email:", adminExists.email);
      console.log("👤 Name:", adminExists.name);
      console.log("🔑 Role:", adminExists.role);
      process.exit(0);
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("admin123", salt);

    // Create admin user
    const admin = await User.create({
      name: "Admin User",
      email: "kritikabharti577@gmail.com",
      phone: "9876543210",
      domain: "Web Development",
      password: hashedPassword,
      role: "admin",
      isActive: true,
      isVerified: true,
    });

    console.log("✅ Admin created successfully!");
    console.log("\n📋 Admin Credentials:");
    console.log("   📧 Email: kritikabharti577@gmail.com");
    console.log("   🔑 Password: admin123");
    console.log("   👤 Role: admin");
    console.log("   🆔 ID:", admin._id);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating admin:", error.message);
    process.exit(1);
  }
};

createAdmin();