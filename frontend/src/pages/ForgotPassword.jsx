// src/pages/ForgotPassword.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import "./Auth.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);
    try {
      console.log("📧 Sending request to:", "http://localhost:5000/api/auth/forgot-password");
      console.log("📧 Email:", email);
      
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      console.log("📧 Response status:", response.status);
      
      const data = await response.json();
      console.log("📧 Response data:", data);
      
      if (response.ok && data.success) {
        setSent(true);
        toast.success("Password reset link sent to your email!");
      } else {
        toast.error(data.message || "Failed to send reset link");
      }
    } catch (error) {
      console.error("❌ Network error:", error);
      toast.error("Network error. Please make sure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <Toaster position="top-right" />
      
      <motion.div 
        className="auth-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="auth-title">Forgot Password</h2>
        <p className="auth-subtitle">
          {sent 
            ? "Check your email for the reset link" 
            : "Enter your email to receive a password reset link"
          }
        </p>

        {sent ? (
          <div className="success-message">
            <p>✅ We've sent a password reset link to:</p>
            <p className="email-highlight">{email}</p>
            <p className="small-text">Please check your inbox and spam folder.</p>
            <Link to="/login" className="back-to-login">
              ← Back to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
                required
              />
            </div>

            <button 
              type="submit" 
              className="auth-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

            <p className="auth-switch">
              Remember your password? <Link to="/login">Login</Link>
            </p>
          </form>
        )}
      </motion.div>
    </div>
  );
}