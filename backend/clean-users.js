// clean-users.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const cleanUsers = async () => {
  try {
    console.log("📡 Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB\n");

    // Delete all users
    const result = await User.deleteMany({});
    console.log(`🗑️  Deleted ${result.deletedCount} users`);

    // Verify no users left
    const count = await User.countDocuments();
    console.log(`📊 Users remaining: ${count}`);

    console.log("\n✅ Cleanup completed!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};

cleanUsers();