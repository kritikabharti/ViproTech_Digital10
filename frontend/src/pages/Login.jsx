// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showResendVerification, setShowResendVerification] = useState(false);
  const [unverifiedEmail, setUnverifiedEmail] = useState("");
  const [resending, setResending] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resendVerification = async () => {
    if (!unverifiedEmail) {
      toast.error("No email to resend verification to");
      return;
    }

    setResending(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/resend-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: unverifiedEmail }),
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success("Verification email resent! Please check your inbox.");
        setShowResendVerification(false);
      } else {
        toast.error(data.message || "Failed to resend verification email");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setResending(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);
    const result = await login(formData.email, formData.password);
    setLoading(false);

    if (result.success) {
      toast.success("🎉 Login successful! Welcome back!");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      // Check if error is about email verification
      if (result.error && result.error.toLowerCase().includes("verify your email")) {
        setUnverifiedEmail(formData.email);
        setShowResendVerification(true);
        toast.error("Please verify your email first. Check your inbox for the verification link.");
      } else {
        toast.error(result.error || "Login failed");
      }
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
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Login to continue your learning journey</p>

        {/* Resend Verification Message */}
        {showResendVerification && (
          <motion.div 
            className="verification-warning"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "rgba(245, 158, 11, 0.15)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              borderRadius: "10px",
              padding: "16px",
              marginBottom: "20px",
              textAlign: "center"
            }}
          >
            <p style={{ color: "#f59e0b", margin: "0 0 8px 0", fontWeight: "600" }}>
              ⚠️ Email not verified
            </p>
            <p style={{ color: "#e2e8f0", fontSize: "14px", margin: "0 0 12px 0" }}>
              We sent a verification link to <strong>{unverifiedEmail}</strong>
            </p>
            <button
              onClick={resendVerification}
              disabled={resending}
              style={{
                padding: "8px 20px",
                background: "rgba(79, 70, 229, 0.2)",
                color: "#4F46E5",
                border: "1px solid rgba(79, 70, 229, 0.3)",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "13px",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(79, 70, 229, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(79, 70, 229, 0.2)";
              }}
            >
              {resending ? "Sending..." : "Resend Verification Email"}
            </button>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="auth-input"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="auth-input"
              required
            />
          </div>

          <button 
            type="submit" 
            className="auth-btn"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div style={{ marginTop: "16px", textAlign: "center" }}>
          <Link to="/forgot-password" style={{ color: "#4F46E5", textDecoration: "none", fontSize: "14px" }}>
            Forgot Password?
          </Link>
        </div>

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </motion.div>
    </div>
  );
}