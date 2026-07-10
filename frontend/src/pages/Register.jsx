// src/pages/Register.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    domain: "",
    password: "",
    confirmPassword: "",
  });

  const domains = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Data Analytics",
    "Cloud Computing",
    "Cyber Security",
    "Artificial Intelligence",
    "Full Stack Development",
    "Python Development",
    "Java Development",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.domain || !formData.password) {
      toast.error("Please fill all required fields");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    const { confirmPassword, ...registerData } = formData;
    const result = await register(registerData);
    setLoading(false);

    if (result.success) {
      toast.success("🎉 Registration successful! Please login.");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      toast.error(result.error || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <Toaster position="top-right" />
      
      <motion.div 
        className="auth-card register-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="auth-title">Student Registration</h2>
        <p className="auth-subtitle">Create your account and start learning today</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="auth-input"
              required
            />
          </div>

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
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="auth-input"
              required
            />
          </div>

          <div className="form-group">
            <select
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              className="auth-select"
              required
            >
              <option value="">Select Your Domain</option>
              {domains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password (min 6 characters)"
              value={formData.password}
              onChange={handleChange}
              className="auth-input"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
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
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </motion.div>
    </div>
  );
}