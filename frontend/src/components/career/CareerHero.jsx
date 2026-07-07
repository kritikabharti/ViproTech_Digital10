import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import careerBg from "../../assets/itand custom.jpg";
import teamImage from "../../assets/career.jpg";

export default function CareerHero() {
  return (
    <section
      style={{
        ...styles.hero,
        backgroundImage: `url(${careerBg})`,
      }}
    >
      <div style={styles.overlay}></div>

      <div style={styles.container}>

        {/* LEFT */}

        <motion.div
          style={styles.left}
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            style={styles.smallHeading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
          >
            JOIN OUR TEAM
          </motion.p>

          <motion.h1
            style={styles.heading}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: .4,
              duration: .9,
            }}
          >
            Build Your Career
            <br />

            With
            <span style={styles.highlight}>
              {" "}VProTech Digital
            </span>
          </motion.h1>

          <motion.p
            style={styles.description}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: .8,
              duration: .9,
            }}
          >
            Join a passionate team of developers,
            designers, marketers and innovators who
            build cutting-edge digital solutions,
            work with modern technologies and grow
            together every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,
            }}
          >
        
          </motion.div>

        </motion.div>

       

      </div>
    </section>
  );
}

const isMobile = window.innerWidth <= 768;

const styles = {
  hero: {
    minHeight: isMobile ? "70vh" : "90vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: isMobile ? "80px 20px" : "120px 40px",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,.68)",
  },

  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  },

  left: {
    width: "100%",
    maxWidth: "900px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  smallHeading: {
    color: "#FFD700",
    letterSpacing: "3px",
    fontWeight: "700",
    marginBottom: "16px",
    fontSize: isMobile ? "13px" : "15px",
  },

  heading: {
    fontSize: isMobile ? "42px" : "82px",
    fontWeight: "700",
    lineHeight: "1.15",
    marginBottom: "25px",
  },

  highlight: {
    color: "#4F46E5",
  },

  description: {
    fontSize: isMobile ? "16px" : "22px",
    lineHeight: "1.8",
    color: "#E5E7EB",
    maxWidth: "760px",
    marginBottom: "45px",
    padding: isMobile ? "0 10px" : "0",
  },

  button: {
    padding: isMobile ? "14px 28px" : "17px 38px",
    borderRadius: "50px",
    border: "none",
    background: "#4F46E5",
    color: "#fff",
    fontWeight: "700",
    fontSize: isMobile ? "15px" : "17px",
    cursor: "pointer",
  },

  image: {
    width: "100%",
    maxWidth: "700px",
    height: "auto",
    objectFit: "contain",
  },
};