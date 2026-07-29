// backend/test-db.mjs
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const testConnection = async () => {
  try {
    console.log('🔄 Testing MongoDB connection...');
    console.log('📡 URI:', process.env.MONGODB_URI);
    
    // Add connection options
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    });
    
    console.log('✅ MongoDB connected successfully!');
    console.log('📊 Database:', mongoose.connection.db.databaseName);
    
    await mongoose.disconnect();
    console.log('🔌 Disconnected');
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    
    if (error.message.includes('ECONNREFUSED')) {
      console.log('\n💡 Possible fixes:');
      console.log('1. Check your internet connection');
      console.log('2. Whitelist your IP in MongoDB Atlas (Network Access)');
      console.log('3. Add database name to connection string');
      console.log('4. Check if MongoDB Atlas cluster is running');
    }
  }
};

testConnection();