// test-password.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/User.js";

dotenv.config();

const testPassword = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB\n");

    const email = "test@example.com";
    const password = "password123";

    // Find the user
    const user = await User.findOne({ email });
    
    if (!user) {
      console.log("❌ User not found");
      process.exit(1);
    }

    console.log("👤 User found:", user.name);
    console.log("🔐 Stored hash:", user.password);
    
    // Test password comparison using bcrypt directly
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("✅ Password match (bcrypt):", isMatch);
    
    // Test using the model method if it exists
    if (typeof user.comparePassword === 'function') {
      const isMatchMethod = await user.comparePassword(password);
      console.log("✅ Password match (method):", isMatchMethod);
    } else {
      console.log("⚠️ comparePassword method not found on user object");
    }
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};

testPassword();