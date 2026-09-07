import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import aboutImage from "../../assets/aboutt.jpg";
import "./GoldenSection.css";

export default function GoldenSection() {
  const [isGoldenMode, setIsGoldenMode] = useState(false);

  return (
    <section
      className={`golden-section ${
        isGoldenMode ? "golden-active" : ""
      }`}
    >
      {/* =====================================================
          ANIMATED ABOUT BACKGROUND IMAGE
      ====================================================== */}
      <motion.div
        className="golden-background-image"
        style={{
          backgroundImage: `url(${aboutImage})`,
        }}
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />

      {/* Dark overlay so text remains readable */}
      <div className="golden-background-overlay" />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="golden-container">
        <motion.div
          className="golden-header"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          {/* =================================================
              ABOUT BADGE
          ================================================= */}
          <motion.div
            className="golden-badge"
            animate={{
              scale: isGoldenMode
                ? [1, 1.1, 1]
                : [1, 1.03, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles size={20} />
            <span>About Us</span>
          </motion.div>

          {/* =================================================
              TITLE
          ================================================= */}
          <motion.h1
            className="golden-title"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="golden-text">Golden</span> Standard of
            <span className="golden-highlight">
              {" "}
              Digital Excellence
            </span>
          </motion.h1>

          {/* =================================================
              FIRST PARAGRAPH
          ================================================= */}
          <motion.p
            className="golden-subtitle"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
            }}
          >
            Discover our comprehensive suite of premium digital services designed
            to elevate your business to new heights of success. We combine
            innovation, expertise, and cutting-edge technology to deliver
            exceptional results that drive growth and transformation.
          </motion.p>

          {/* =================================================
              SECOND PARAGRAPH
          ================================================= */}
          <motion.p
            className="golden-subtitle-2"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
            }}
          >
            From custom software development to AI-powered solutions, our team
            of experts is dedicated to helping you achieve your digital goals
            with precision and excellence.
          </motion.p>
        </motion.div>

        {/* =====================================================
            FLOATING GOLDEN ORBS
        ====================================================== */}
        <div className="golden-orbs">
          <motion.div
            className="golden-orb orb-1"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(circle, rgba(212, 175, 55, 0.3), rgba(79, 70, 229, 0.1))",
            }}
          />

          <motion.div
            className="golden-orb orb-2"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(circle, rgba(79, 70, 229, 0.3), rgba(212, 175, 55, 0.1))",
            }}
          />

          <motion.div
            className="golden-orb orb-3"
            animate={{
              y: [0, -20, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(circle, rgba(212, 175, 55, 0.2), rgba(79, 70, 229, 0.15))",
            }}
          />
        </div>
      </div>
    </section>
  );
}