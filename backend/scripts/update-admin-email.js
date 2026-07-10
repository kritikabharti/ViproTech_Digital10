// scripts/update-admin-email.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

const updateAdminEmail = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB\n");

    // Find current admin
    const admin = await User.findOne({ role: "admin" });
    
    if (!admin) {
      console.log("❌ No admin user found!");
      console.log("Please create an admin first: node scripts/createAdmin.js");
      process.exit(1);
    }

    console.log("👤 Current Admin Details:");
    console.log("   Name:", admin.name);
    console.log("   Email:", admin.email);
    console.log("   Role:", admin.role);
    console.log("   ID:", admin._id);

    // New email - CHANGE THIS TO YOUR DESIRED EMAIL
    const newEmail = "kritikabharti577@gmail.com";

    // Check if new email already exists
    const emailExists = await User.findOne({ 
      email: newEmail,
      _id: { $ne: admin._id }
    });

    if (emailExists) {
      console.log(`❌ Email "${newEmail}" already exists in the system!`);
      process.exit(1);
    }

    // Update email
    admin.email = newEmail;
    await admin.save();

    console.log("\n✅ Admin email updated successfully!");
    console.log("\n📋 New Admin Credentials:");
    console.log("   📧 Email:", admin.email);
    console.log("   🔑 Password: admin123 (unchanged)");
    console.log("   👤 Role:", admin.role);

    console.log("\n🔐 You can now login with:");
    console.log(`   POST http://localhost:5000/api/auth/login`);
    console.log(`   Body: { "email": "${newEmail}", "password": "admin123" }`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error updating admin email:", error.message);
    process.exit(1);
  }
};

updateAdminEmail();