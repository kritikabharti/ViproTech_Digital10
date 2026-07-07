import React from "react";
import { motion } from "framer-motion";

import growth from "../../assets/growth.jpg";
import learning from "../../assets/learning.jpg";
import culture from "../../assets/culture.jpg";
import innovation from "../../assets/growth.jpg";
import internship from "../../assets/learning.jpg";
import technology from "../../assets/about.jpg";

const benefits = [
  {
    title: "Career Growth",
    image: growth,
    description:
      "Grow with structured career paths, mentorship, and continuous opportunities to enhance your professional journey.",
  },
  {
    title: "Continuous Learning",
    image: learning,
    description:
      "Access workshops, live projects, certifications, and the latest technologies to keep your skills ahead of the industry.",
  },
  {
    title: "Friendly Culture",
    image: culture,
    description:
      "Collaborate with supportive teammates in a workplace that values creativity, innovation, and mutual respect.",
  },
  {
    title: "Innovation First",
    image: innovation,
    description:
      "Work on AI, cloud computing, modern web applications, and innovative digital solutions for global clients.",
  },
  {
    title: "Internship Programs",
    image: internship,
    description:
      "Gain practical experience through industry-oriented internships guided by experienced professionals.",
  },
  {
    title: "Modern Technologies",
    image: technology,
    description:
      "Build solutions using React, Node.js, MERN Stack, AI, DevOps, Cloud, and emerging technologies.",
  },
];

export default function Benefits() {
  return (
    <section style={styles.section}>
      <motion.div
        style={styles.headingContainer}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p style={styles.smallHeading}>WHY JOIN US</p>

        <h2 style={styles.heading}>
          Benefits of Working at{" "}
          <span style={{ color: "#4F46E5" }}>VProTech Digital</span>
        </h2>

        <p style={styles.description}>
          We believe great people build great companies. Our culture promotes
          continuous learning, innovation, collaboration, and long-term career
          growth.
        </p>
      </motion.div>

      <div style={styles.grid}>
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={styles.image}
            />

            <div style={styles.overlay}>
              <h3 style={styles.cardTitle}>{item.title}</h3>

              <p style={styles.cardText}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
const isMobile = window.innerWidth <= 768;

const styles = {

section: {
  padding: isMobile ? "60px 20px" : "90px 5%",
  background: "#fff",
},

headingContainer: {
  textAlign: "center",
  marginBottom: isMobile ? "45px" : "70px",
},

smallHeading: {
  color: "#4F46E5",
  fontWeight: "700",
  letterSpacing: "3px",
  marginBottom: "15px",
  fontSize: isMobile ? "13px" : "15px",
},

heading: {
  fontSize: isMobile ? "34px" : "52px",
  fontWeight: "800",
  color: "#111827",
  marginBottom: "20px",
  lineHeight: "1.2",
},

description: {
  maxWidth: "760px",
  margin: "auto",
  fontSize: isMobile ? "16px" : "18px",
  lineHeight: "1.8",
  color: "#6B7280",
},

grid: {
  display: "grid",
  gridTemplateColumns: isMobile
    ? "1fr"
    : "repeat(3,1fr)",
  gap: isMobile ? "22px" : "30px",
},

card: {
  position: "relative",
  overflow: "hidden",
  height: isMobile ? "300px" : "360px",
  borderRadius: "20px",
  cursor: "pointer",
  boxShadow: "0 20px 45px rgba(0,0,0,.1)",
},

image: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: ".5s",
},

overlay: {
  position: "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: isMobile ? "20px" : "30px",
  background:
    "linear-gradient(to top, rgba(0,0,0,.92), rgba(0,0,0,.25), transparent)",
  color: "#fff",
},

cardTitle: {
  fontSize: isMobile ? "22px" : "28px",
  fontWeight: "700",
  marginBottom: "12px",
},

cardText: {
  fontSize: isMobile ? "14px" : "16px",
  lineHeight: "1.7",
  color: "#E5E7EB",
},

};