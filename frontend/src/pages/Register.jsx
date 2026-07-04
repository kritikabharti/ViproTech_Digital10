import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bg from "../assets/digital.jpg";

export default function Auth() {
  const [login, setLogin] = useState(true);

  return (
    <>
      <Navbar />

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
            {login ? "Welcome Back" : "Student Registration"}
          </h2>

          <p style={styles.subHeading}>
            {login
              ? "Login to continue your learning journey."
              : "Create your account and start learning today."}
          </p>

          {!login && (
            <input
              type="text"
              placeholder="Full Name"
              style={styles.input}
            />
          )}

          <input
  type="email"
  name="user_email"
  autoComplete="off"
  placeholder="Email Address"
  style={styles.input}
/>

<input
  type="password"
  name="user_password"
  autoComplete={login ? "current-password" : "new-password"}
  placeholder="Password"
  style={styles.input}
/>

          {login && (
            <div style={styles.forgot}>
              <a href="/" style={styles.link}>
                Forgot Password?
              </a>
            </div>
          )}

          <button style={styles.button}>
            {login ? "Login" : "Register"}
          </button>

          <p style={styles.switchText}>
            {login
              ? "Don't have an account?"
              : "Already have an account?"}

            <span
              style={styles.switchBtn}
              onClick={() => setLogin(!login)}
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
  },

  forgot: {
    textAlign: "right",
    marginBottom: "20px",
  },

  link: {
    color: "#4F46E5",
    textDecoration: "none",
    fontSize: "14px",
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
  },

  switchText: {
    color: "#fff",
    textAlign: "center",
    marginTop: "25px",
  },

  switchBtn: {
    color:  "#4F46E5",
    cursor: "pointer",
    fontWeight: "600",
  },
};
