import React from "react";
import { motion } from "framer-motion";
import "./CareerHero.css";

import customImage from "../../assets/career.jpg";

export default function CareerHero() {
  return (
    <section className="career-hero">

      {/* =====================================================
          BACKGROUND IMAGE
          NO DARK OVERLAY
      ===================================================== */}
      <motion.div
        className="career-hero-bg"
        style={{
          backgroundImage: `url(${customImage})`,
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <div className="career-hero-container">

        <motion.div
          className="career-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >

          

          <motion.h1
            className="career-hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            Build Your Career With{" "}
            <span>VProTech Digital</span>
          </motion.h1>

          <motion.p
            className="career-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
          >
            Discover exciting opportunities, work on innovative projects,
            develop your skills, and grow with a team that believes in
            technology, creativity, and people.
          </motion.p>

         

        </motion.div>
      </div>

    </section>
  );
}