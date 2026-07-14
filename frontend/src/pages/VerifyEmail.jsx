// src/pages/VerifyEmail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import "./Auth.css";

export default function VerifyEmail() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("verifying"); // verifying, success, error

  useEffect(() => {
    verifyEmail();
  }, [token]);

  const verifyEmail = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/verify-email/${token}`
      );
      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        toast.success("Email verified successfully!");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        setStatus("error");
        toast.error(data.message || "Invalid or expired verification link");
      }
    } catch (error) {
      setStatus("error");
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resendVerification = async () => {
    // This would require the email, you could store it in state or get from URL
    toast.error("Please contact support or register again.");
  };

  if (loading) {
    return (
      <div className="auth-container">
        <div className="auth-card" style={{ textAlign: "center" }}>
          <div className="spinner"></div>
          <p style={{ color: "#e2e8f0", marginTop: "16px" }}>Verifying your email...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <Toaster position="top-right" />
      
      <motion.div 
        className="auth-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {status === "success" ? (
          <>
            <h2 className="auth-title">✅ Email Verified!</h2>
            <p className="auth-subtitle">Your email has been successfully verified.</p>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Link to="/login" className="auth-btn" style={{ textDecoration: "none", display: "inline-block" }}>
                Login Now
              </Link>
            </div>
          </>
        ) : (
          <>
            <h2 className="auth-title">❌ Verification Failed</h2>
            <p className="auth-subtitle">The verification link is invalid or has expired.</p>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Link to="/register" className="auth-btn" style={{ textDecoration: "none", display: "inline-block" }}>
                Register Again
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}