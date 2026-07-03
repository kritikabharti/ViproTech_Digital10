import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import serviceBg from "../assets/services.jpg";
import heroImage from "../assets/top.jpg";


export default function Services() {
  return (
    <>
      <Navbar />

      <section
        style={{
          ...styles.hero,
          backgroundImage: `url(${serviceBg})`,
        }}
      >
        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>

  {/* Left Image */}
  <motion.div
    style={styles.imageContainer}
    animate={{
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <img
      src={heroImage}
      alt="Courses"
      style={styles.heroImage}
    />
  </motion.div>

  {/* Right Content */}
  <motion.div
    style={styles.content}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <motion.h1
      style={styles.title}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      Our <span style={{ color: "rgba(79,70,229,0.95)" }}>Top Courses</span>
    </motion.h1>

    <motion.p
      style={styles.text}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      We deliver innovative digital solutions including custom software,
      websites, mobile applications, AI, cloud computing, cybersecurity,
      and digital marketing to help businesses grow faster.
    </motion.p>
  </motion.div>

</div>
      </section>









      <Footer />
    </>
  );
}


const styles = {
  hero: {
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,.60)",
  },

  content: {
    position: "relative",
    zIndex: 2,
    marginLeft: "4%",
    maxWidth: "650px",
    color: "#fff",
  },

  title: {
    fontSize: "72px",
    fontWeight: "800",
    lineHeight: "1.1",
    marginBottom: "25px",
  },

  text: {
    fontSize: "20px",
    lineHeight: "1.8",
    color: "#E5E7EB",
    marginBottom: "40px",
  },

  button: {
    background: "#4F46E5",
    color: "#fff",
    border: "none",
    padding: "16px 40px",
    borderRadius: "50px",
    fontSize: "17px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },


  heroContent: {
  position: "relative",
  zIndex: 2,
  width: "90%",
  maxWidth: "1400px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "70px",
},

imageContainer: {
  flex: 1,
  display: "flex",
  justifyContent: "center",
},

heroImage: {
  width: "100%",
  maxWidth: "550px",
  borderRadius: "20px",
  objectFit: "cover",
},

content: {
  flex: 1,
  color: "#fff",
},
};