import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bg from "../assets/digital.jpg";

import {
  login as loginUser,
  register,
} from "../services/authService";

// Custom notification styles
const toastStyles = {
  success: {
    style: {
      background: '#10b981',
      color: '#fff',
      padding: '16px 24px',
      borderRadius: '12px',
      fontSize: '15px',
      fontWeight: '600',
      boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)',
    },
    icon: '✅',
    duration: 4000,
  },
  error: {
    style: {
      background: '#ef4444',
      color: '#fff',
      padding: '16px 24px',
      borderRadius: '12px',
      fontSize: '15px',
      fontWeight: '600',
      boxShadow: '0 8px 25px rgba(239, 68, 68, 0.3)',
    },
    icon: '❌',
    duration: 5000,
  },
  loading: {
    style: {
      background: '#3b82f6',
      color: '#fff',
      padding: '16px 24px',
      borderRadius: '12px',
      fontSize: '15px',
      fontWeight: '600',
    },
  },
  info: {
    style: {
      background: '#8b5cf6',
      color: '#fff',
      padding: '16px 24px',
      borderRadius: '12px',
      fontSize: '15px',
      fontWeight: '600',
      boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)',
    },
    icon: 'ℹ️',
    duration: 3000,
  }
};

export default function Auth() {
  const navigate = useNavigate();

  const [login, setLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Show notification helper functions
  const showSuccess = (message) => {
    toast.success(message, {
      style: toastStyles.success.style,
      icon: toastStyles.success.icon,
      duration: toastStyles.success.duration,
    });
  };

  const showError = (message) => {
    toast.error(message, {
      style: toastStyles.error.style,
      icon: toastStyles.error.icon,
      duration: toastStyles.error.duration,
    });
  };

  const showLoading = (message) => {
    return toast.loading(message, {
      style: toastStyles.loading.style,
    });
  };

  const showInfo = (message) => {
    toast(message, {
      style: toastStyles.info.style,
      icon: toastStyles.info.icon,
      duration: toastStyles.info.duration,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      showError("Please fill all required fields.");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showError("Please enter a valid email address.");
      return false;
    }

    // Password validation (minimum 6 characters)
    if (formData.password.length < 6) {
      showError("Password must be at least 6 characters long.");
      return false;
    }

    if (!login && !formData.name) {
      showError("Please enter your full name.");
      return false;
    }

    if (!login && formData.name.length < 2) {
      showError("Name must be at least 2 characters long.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const loadingToast = showLoading(login ? "Logging in..." : "Creating account...");

    try {
      setLoading(true);

      if (login) {
        const res = await loginUser({
          email: formData.email,
          password: formData.password,
        });

        localStorage.setItem("token", res.data.token);

        // Dismiss loading toast
        toast.dismiss(loadingToast);

        // Show success
        showSuccess("🎉 Login Successful! Welcome back!");

        setFormData({
          name: "",
          email: "",
          password: "",
        });

        // Redirect after a short delay
        setTimeout(() => {
          navigate("/");
        }, 1500);
        
      } else {
        await register(formData);

        // Dismiss loading toast
        toast.dismiss(loadingToast);

        // Show success
        showSuccess("🎉 Registration Successful! Please login.");

        setFormData({
          name: "",
          email: "",
          password: "",
        });

        // Switch to login after successful registration
        setTimeout(() => {
          setLogin(true);
          showInfo("Please login with your credentials.");
        }, 1500);
      }
    } catch (err) {
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      
      // Show error
      const errorMessage = err.response?.data?.message || "Something went wrong. Please try again.";
      showError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Handle switch between login and register
  const handleSwitch = () => {
    setLogin(!login);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
    showInfo(login ? "Switch to Registration" : "Switch to Login");
  };

  return (
    <>
      <Navbar />

      {/* Toaster Component with custom position */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            maxWidth: '450px',
          },
        }}
      />

      <section
        style={{
          ...styles.container,
          backgroundImage: `url(${bg})`,
        }}
      >
        <div style={styles.overlay}></div>

        <motion.div
          style={styles.card}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={styles.heading}>
            {login
              ? "Welcome Back"
              : "Student Registration"}
          </h2>

          <p style={styles.subHeading}>
            {login
              ? "Login to continue your learning journey."
              : "Create your account and start learning today."}
          </p>

          <form
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            {!login && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />

            {login && (
              <div style={styles.forgot}>
                <Link
                  to="/forgot-password"
                  style={styles.link}
                >
                  Forgot Password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              style={{
                ...styles.button,
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
              disabled={loading}
            >
              {loading
                ? "Processing..."
                : login
                ? "Login"
                : "Register"}
            </button>
          </form>

          <p style={styles.switchText}>
            {login
              ? "Don't have an account?"
              : "Already have an account?"}

            <span
              style={styles.switchBtn}
              onClick={handleSwitch}
            >
              {login ? " Register" : " Login"}
            </span>
          </p>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: "90px",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,.65)",
  },

  card: {
    position: "relative",
    zIndex: 2,
    width: "420px",
    background: "rgba(255,255,255,.12)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    borderRadius: "20px",
    padding: "45px",
    border: "1px solid rgba(255,255,255,.2)",
    boxShadow: "0 20px 50px rgba(0,0,0,.3)",
  },

  heading: {
    color: "#fff",
    fontSize: "34px",
    fontWeight: "700",
    marginBottom: "10px",
    textAlign: "center",
  },

  subHeading: {
    color: "#ddd",
    textAlign: "center",
    marginBottom: "35px",
    lineHeight: "1.6",
  },

  input: {
    width: "100%",
    padding: "16px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,.3)",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    outline: "none",
    fontSize: "15px",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  },

  inputFocus: {
    borderColor: "#4F46E5",
    background: "rgba(255,255,255,.15)",
    boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.2)",
  },

  forgot: {
    textAlign: "right",
    marginBottom: "20px",
  },

  link: {
    color: "#4F46E5",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s ease",
  },

  button: {
    width: "100%",
    padding: "16px",
    background: "#4F46E5",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "17px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  switchText: {
    color: "#fff",
    textAlign: "center",
    marginTop: "25px",
  },

  switchBtn: {
    color: "#4F46E5",
    cursor: "pointer",
    fontWeight: "600",
    transition: "color 0.3s ease",
  },
};