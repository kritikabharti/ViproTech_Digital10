import React from "react";
import { motion } from "framer-motion";
import contactBg from "../../assets/contact.jpg";

export default function ContactHero() {
  return (
    <section
      style={{
        ...styles.hero,
        backgroundImage: `url(${contactBg})`,
      }}
    >
      <div style={styles.overlay}></div>

      <motion.div
        style={styles.content}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          style={styles.tag}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          GET IN TOUCH
        </motion.p>

        <motion.h1
          style={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Let's Build Something
          <br />
          <span style={styles.highlight}>Amazing Together</span>
        </motion.h1>

        <motion.p
          style={styles.description}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Whether you're looking for custom software development,
          website design, digital marketing, AI solutions, or
          internship opportunities, our team is ready to help you
          achieve your goals.
        </motion.p>

      </motion.div>
    </section>
  );
}

const styles = {
  hero: {
    height: "85vh",
    minHeight: "650px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,.70)",
  },

  content: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "900px",
    padding: "0 30px",
    color: "#fff",
  },

  tag: {
    color: "#FFD700",
    letterSpacing: "4px",
    fontWeight: "700",
    fontSize: "15px",
    marginBottom: "20px",
  },

  title: {
    fontSize: "72px",
    fontWeight: "800",
    lineHeight: "1.1",
    marginBottom: "25px",
  },

  highlight: {
    color: "#4F46E5",
  },

  description: {
    fontSize: "20px",
    lineHeight: "1.8",
    color: "#E5E7EB",
    maxWidth: "760px",
    margin: "0 auto 35px",
  },

  breadcrumb: {
    fontSize: "17px",
    color: "#ffffff",
    fontWeight: "500",
  },
};