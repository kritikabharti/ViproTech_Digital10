import React from "react";
import { motion } from "framer-motion";
import "./Benefits.css"; // ✅ Import CSS file

import growth from "../../assets/growth.jpg";
import learning from "../../assets/continu.jpg";
import culture from "../../assets/culture.jpg";
import innovation from "../../assets/innovation.jpg";
import internship from "../../assets/intern.jpg";
import technology from "../../assets/modernn.jpg";

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
    <section className="benefits-section">
      <motion.div
        className="benefits-heading-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="benefits-small-heading">WHY JOIN US</p>

        <h2 className="benefits-heading">
          Benefits of Working at{" "}
          <span className="benefits-highlight">VProTech Digital</span>
        </h2>

        <p className="benefits-description">
          We believe great people build great companies. Our culture promotes
          continuous learning, innovation, collaboration, and long-term career
          growth.
        </p>
      </motion.div>

      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            className="benefits-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="benefits-card-image"
              loading="lazy"
            />

            <div className="benefits-card-overlay">
              <h3 className="benefits-card-title">{item.title}</h3>
              <p className="benefits-card-text">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}