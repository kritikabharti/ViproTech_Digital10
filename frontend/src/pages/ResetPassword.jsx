// src/pages/ResetPassword.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetDone, setResetDone] = useState(false);

  console.log("🔑 Token from URL:", token); // Debug: Check token

  useEffect(() => {
    if (token) {
      validateToken();
    } else {
      toast.error("No reset token provided");
    }
  }, [token]);

  const validateToken = async () => {
    try {
      console.log("🔍 Validating token:", token);
      
      const response = await fetch(
        `http://localhost:5000/api/auth/validate-reset-token/${token}`
      );
      
      const data = await response.json();
      console.log("📝 Validation response:", data);
      
      if (data.success) {
        setValid(true);
        setEmail(data.email);
        toast.success("Valid reset token");
      } else {
        toast.error(data.message || "Invalid or expired reset token");
      }
    } catch (error) {
      console.error("❌ Validation error:", error);
      toast.error("Failed to validate token");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      console.log("🔐 Resetting password with token:", token);
      
      const response = await fetch(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password })
        }
      );
      
      const data = await response.json();
      console.log("📝 Reset response:", data);
      
      if (data.success) {
        setResetDone(true);
        toast.success("Password reset successfully!");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        toast.error(data.message || "Failed to reset password");
      }
    } catch (error) {
      console.error("❌ Reset error:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Debug: Show token info
  if (!token) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2>No Token Provided</h2>
          <p>The reset link is missing a token.</p>
          <Link to="/forgot-password" className="back-to-login">
            Request New Link
          </Link>
        </div>
      </div>
    );
  }

  if (!valid) {
    return (
      <div className="auth-container">
        <Toaster position="top-right" />
        <div className="auth-card">
          <h2>Invalid Token</h2>
          <p>This reset link is invalid or has expired.</p>
          <Link to="/forgot-password" className="back-to-login">
            Request New Link
          </Link>
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
        <h2 className="auth-title">Reset Password</h2>
        <p className="auth-subtitle">
          {resetDone 
            ? "Password reset successful!" 
            : `Create a new password for ${email}`
          }
        </p>

        {resetDone ? (
          <div className="success-message">
            <p>✅ Your password has been reset successfully!</p>
            <p className="small-text">You will be redirected to login...</p>
            <Link to="/login" className="back-to-login">
              ← Login Now
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <input
                type="password"
                placeholder="New Password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="auth-input"
                required
              />
            </div>

            <button 
              type="submit" 
              className="auth-btn"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>

            <p className="auth-switch">
              <Link to="/login">← Back to Login</Link>
            </p>
          </form>
        )}
      </motion.div>
    </div>
  );
}