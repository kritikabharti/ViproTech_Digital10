import React from "react";
import { motion } from "framer-motion";
import officeImage from "../../assets/vvv.png";

export default function ContactForm() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* LEFT - FORM */}
        <motion.div
          style={styles.left}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p style={styles.tag}>SEND US A MESSAGE</p>

          <h2 style={styles.heading}>
            Let's Discuss Your
            <span style={styles.highlight}> Project</span>
          </h2>

          <p style={styles.description}>
            Fill out the form below and our team will get back to you
            within 24 hours.
          </p>

          <form
            autoComplete="off"
            style={styles.form}
          >
            <input
              type="text"
              name="fullname"
              autoComplete="off"
              placeholder="Full Name"
              style={styles.input}
            />

            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email Address"
              style={styles.input}
            />

            <input
              type="tel"
              name="phone"
              autoComplete="off"
              placeholder="Phone Number"
              style={styles.input}
            />

            <input
              type="text"
              name="subject"
              autoComplete="off"
              placeholder="Subject"
              style={styles.input}
            />

            <textarea
              rows="6"
              name="message"
              autoComplete="off"
              placeholder="Tell us about your project..."
              style={styles.textarea}
            />

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              style={styles.button}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          style={styles.right}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={officeImage}
            alt="Office"
            style={styles.image}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}


const isMobile = window.innerWidth <= 768;

const styles = {
  section: {
    background: "#081120",
    padding: isMobile ? "70px 20px" : "120px 8%",
  },

  container: {
    maxWidth: "1350px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: isMobile ? "50px" : "70px",
    alignItems: "center",
  },

  left: {
    order: isMobile ? 2 : 1,
    textAlign: isMobile ? "center" : "left",
  },

  right: {
    order: isMobile ? 1 : 2,
    display: "flex",
    justifyContent: "center",
  },

  tag: {
    color: "#FFD700",
    letterSpacing: "3px",
    fontWeight: "700",
    marginBottom: "15px",
    fontSize: isMobile ? "13px" : "15px",
  },

  heading: {
    color: "#fff",
    fontSize: isMobile ? "34px" : "50px",
    fontWeight: "800",
    marginBottom: "20px",
    lineHeight: "1.2",
  },

  highlight: {
    color: "#4F46E5",
  },

  description: {
    color: "#CBD5E1",
    lineHeight: "1.8",
    marginBottom: "35px",
    fontSize: isMobile ? "16px" : "18px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: isMobile ? "15px" : "18px",
  },

  input: {
    width: "100%",
    padding: isMobile ? "15px" : "18px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.05)",
    color: "#fff",
    fontSize: isMobile ? "15px" : "16px",
    outline: "none",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    padding: isMobile ? "15px" : "18px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.05)",
    color: "#fff",
    fontSize: isMobile ? "15px" : "16px",
    outline: "none",
    resize: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    marginTop: "10px",
    padding: isMobile ? "16px" : "18px",
    border: "none",
    borderRadius: "50px",
    background: "linear-gradient(135deg,#4F46E5,#6366F1)",
    color: "#fff",
    fontWeight: "700",
    fontSize: isMobile ? "16px" : "17px",
    cursor: "pointer",
    boxShadow: "0 12px 30px rgba(79,70,229,.35)",
  },

  image: {
    width: "100%",
    maxWidth: isMobile ? "320px" : "560px",
    borderRadius: "25px",
    objectFit: "cover",
    boxShadow: "0 25px 60px rgba(0,0,0,.35)",
  },
};