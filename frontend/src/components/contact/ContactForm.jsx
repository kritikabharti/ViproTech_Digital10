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

const styles = {
  section: {
    background: "#081120",
    padding: "120px 8%",
  },

  container: {
    maxWidth: "1350px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "70px",
    alignItems: "center",
  },

  left: {},

  tag: {
    color: "#FFD700",
    letterSpacing: "3px",
    fontWeight: "700",
    marginBottom: "15px",
  },

  heading: {
    color: "#fff",
    fontSize: "50px",
    fontWeight: "800",
    marginBottom: "20px",
  },

  highlight: {
    color: "#4F46E5",
  },

  description: {
    color: "#CBD5E1",
    lineHeight: "1.8",
    marginBottom: "40px",
    fontSize: "18px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  input: {
    padding: "18px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.05)",
    color: "#fff",
    fontSize: "16px",
    outline: "none",
  },

  textarea: {
    padding: "18px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.05)",
    color: "#fff",
    fontSize: "16px",
    outline: "none",
    resize: "none",
    fontFamily: "inherit",
  },

  button: {
    marginTop: "10px",
    padding: "18px",
    border: "none",
    borderRadius: "50px",
    background: "linear-gradient(135deg,#4F46E5,#6366F1)",
    color: "#fff",
    fontWeight: "700",
    fontSize: "17px",
    cursor: "pointer",
    boxShadow: "0 12px 30px rgba(79,70,229,.35)",
  },

  right: {
    display: "flex",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    maxWidth: "560px",
    borderRadius: "25px",
    objectFit: "cover",
    boxShadow: "0 25px 60px rgba(0,0,0,.35)",
  },
};