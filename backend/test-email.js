// test-email.js
import dotenv from "dotenv";
import { sendEmail } from "./services/emailService.js";

dotenv.config();

console.log("📧 Testing email...");
console.log("📧 EMAIL_USER:", process.env.EMAIL_USER);
console.log("📧 EMAIL_PASSWORD:", process.env.EMAIL_PASSWORD ? "SET ✓" : "NOT SET");

const testEmail = async () => {
  const result = await sendEmail(
    process.env.EMAIL_USER || "test@example.com",
    "Test Email",
    "<h1>✅ Test Email Working!</h1><p>This is a test email from VProTech Digital.</p>"
  );
  console.log("Result:", result);
};

testEmail();