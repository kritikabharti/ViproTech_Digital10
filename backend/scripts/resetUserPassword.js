// backend/scripts/resetUserPassword.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

dotenv.config();

const resetUserPassword = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    const email = "bkritika015@gmail.com";
    const newPassword = "Test@123";

    const user = await User.findOne({ email: email.toLowerCase() });
    
    if (!user) {
      console.log('❌ User not found!');
      process.exit(1);
    }

    console.log(`✅ User found: ${user.email}`);
    console.log(`👤 Name: ${user.name}`);
    console.log(`🔐 Old password hash: ${user.password.substring(0, 30)}...`);

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    console.log(`🔐 New password hash: ${hashedPassword.substring(0, 30)}...`);

    // Update password
    user.password = hashedPassword;
    await user.save();

    // Verify the new password
    const isMatch = await bcrypt.compare(newPassword, user.password);

    console.log(`\n✅ Password reset successfully!`);
    console.log(`📧 Email: ${user.email}`);
    console.log(`🔑 New Password: ${newPassword}`);
    console.log(`🔐 Password test: ${isMatch ? '✅ PASSED' : '❌ FAILED'}`);

    if (isMatch) {
      console.log(`\n🎉 Now test login with:`);
      console.log(`curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d "{\"email\":\"${email}\",\"password\":\"${newPassword}\""}`);
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

resetUserPassword();