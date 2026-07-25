import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Moon, Sun, Sparkles } from "lucide-react";

import careerBg from "../../assets/itand custom.jpg";
import teamImage from "../../assets/career.jpg";

export default function CareerHero() {
  const [isGoldenMode, setIsGoldenMode] = useState(false);

  const toggleMode = () => {
    setIsGoldenMode(!isGoldenMode);
  };

  return (
    <section className={`career-hero-section ${isGoldenMode ? "golden-mode" : ""}`}>
      {/* ===== ANIMATED GEOMETRIC BACKGROUND ===== */}
      <div className="career-bg">
        {/* Rotating Rings */}
        <motion.div
          className="ring ring-1"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="ring ring-2"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="ring ring-3"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          className="shape shape-square"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="shape shape-triangle"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="shape shape-circle"
          animate={{
            y: [0, -25, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="shape shape-diamond"
          animate={{
            y: [0, 25, 0],
            x: [0, 30, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Glowing Orbs */}
        <motion.div
          className="glow-orb glow-1"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="glow-orb glow-2"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="glow-orb glow-3"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Floating Lines */}
        <motion.div
          className="floating-line line-1"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="floating-line line-2"
          animate={{
            y: [0, 35, 0],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="floating-line line-3"
          animate={{
            y: [0, -30, 0],
            x: [0, -35, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* ===== TOGGLE BUTTON ===== */}
      <motion.button
        className={`mode-toggle-btn ${isGoldenMode ? "golden" : ""}`}
        onClick={toggleMode}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="toggle-icon">
          {isGoldenMode ? <Moon size={18} /> : <Sun size={18} />}
        </span>
        <span className="toggle-text">
          {isGoldenMode ? "Dark Mode" : "Golden Mode"}
        </span>
      </motion.button>

      {/* ===== CONTENT ===== */}
      <div className="career-content">
        <motion.div
          className="career-header"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="career-badge"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles size={16} />
            <span>JOIN OUR TEAM</span>
          </motion.div>

          <motion.h1 className="career-heading">
            Build Your <br />
            Career With{" "}
            <span className="highlight-text">VProTech Digital</span>
          </motion.h1>

          <motion.div className="heading-underline" />

          <motion.p className="career-description">
            Join a passionate team of developers, designers, marketers and innovators who
            build cutting-edge digital solutions, work with modern technologies and grow
            together every day.
          </motion.p>

          <motion.p className="career-description-secondary">
            We're always looking for creative, driven individuals ready to make an impact
            in a collaborative and innovative environment.
          </motion.p>
        </motion.div>
      </div>

      <style jsx>{`
        /* ========================================
           CAREER HERO SECTION
           ======================================== */
        .career-hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 40px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(165deg, #070b15 0%, #0f1629 40%, #141b2d 70%, #0a0f1e 100%);
          transition: all 0.6s ease;
        }

        .career-hero-section.golden-mode {
          background: linear-gradient(165deg, #1a1205 0%, #2d1f0a 40%, #3d2b10 70%, #1a1205 100%);
        }

        /* ===== BACKGROUND ===== */
        .career-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        /* Rotating Rings */
        .ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(212, 175, 55, 0.1);
          pointer-events: none;
        }

        .ring-1 {
          width: 500px;
          height: 500px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-color: rgba(212, 175, 55, 0.08);
        }

        .golden-mode .ring-1 {
          border-color: rgba(212, 175, 55, 0.2);
        }

        .ring-2 {
          width: 700px;
          height: 700px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-color: rgba(79, 70, 229, 0.08);
        }

        .golden-mode .ring-2 {
          border-color: rgba(212, 175, 55, 0.15);
        }

        .ring-3 {
          width: 350px;
          height: 350px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-color: rgba(212, 175, 55, 0.06);
          border-width: 1px;
        }

        .golden-mode .ring-3 {
          border-color: rgba(212, 175, 55, 0.15);
        }

        /* Geometric Shapes */
        .shape {
          position: absolute;
          pointer-events: none;
          opacity: 0.15;
        }

        .golden-mode .shape {
          opacity: 0.25;
        }

        .shape-square {
          width: 40px;
          height: 40px;
          border: 2px solid #D4AF37;
          top: 15%;
          left: 10%;
          border-radius: 4px;
        }

        .shape-triangle {
          width: 0;
          height: 0;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 40px solid #4F46E5;
          top: 20%;
          right: 12%;
        }

        .golden-mode .shape-triangle {
          border-bottom-color: #D4AF37;
        }

        .shape-circle {
          width: 30px;
          height: 30px;
          border: 2px solid #D4AF37;
          border-radius: 50%;
          bottom: 25%;
          left: 15%;
        }

        .shape-diamond {
          width: 35px;
          height: 35px;
          border: 2px solid #4F46E5;
          transform: rotate(45deg);
          bottom: 20%;
          right: 15%;
        }

        .golden-mode .shape-diamond {
          border-color: #D4AF37;
        }

        /* Glowing Orbs */
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .glow-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.15), transparent 70%);
          top: -100px;
          right: -100px;
        }

        .golden-mode .glow-1 {
          background: radial-gradient(circle, rgba(212, 175, 55, 0.3), transparent 70%);
        }

        .glow-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.12), transparent 70%);
          bottom: -150px;
          left: -150px;
        }

        .golden-mode .glow-2 {
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2), transparent 70%);
        }

        .glow-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .golden-mode .glow-3 {
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2), transparent 70%);
        }

        /* Floating Lines */
        .floating-line {
          position: absolute;
          height: 2px;
          pointer-events: none;
          opacity: 0.1;
        }

        .golden-mode .floating-line {
          opacity: 0.2;
        }

        .line-1 {
          width: 150px;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
          top: 30%;
          left: 5%;
        }

        .line-2 {
          width: 120px;
          background: linear-gradient(90deg, transparent, #4F46E5, transparent);
          bottom: 35%;
          right: 8%;
        }

        .golden-mode .line-2 {
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
        }

        .line-3 {
          width: 100px;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
          top: 60%;
          left: 20%;
        }

        /* ===== TOGGLE BUTTON ===== */
        .mode-toggle-btn {
          position: fixed;
          top: 90px;
          right: 20px;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 30px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.4s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .mode-toggle-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(212, 175, 55, 0.4);
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.15);
        }

        .mode-toggle-btn.golden {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(184, 134, 11, 0.2));
          border-color: #D4AF37;
          color: #D4AF37;
          box-shadow: 0 4px 30px rgba(212, 175, 55, 0.2);
        }

        .toggle-icon {
          display: flex;
          align-items: center;
        }

        .toggle-text {
          font-size: 13px;
        }

        /* ===== CONTENT ===== */
        .career-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .career-header {
          margin-bottom: 0;
        }

        .career-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 30px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .golden-mode .career-badge {
          background: rgba(212, 175, 55, 0.08);
          border-color: rgba(212, 175, 55, 0.3);
          color: #D4AF37;
        }

        .career-badge svg {
          color: #D4AF37;
        }

        .career-heading {
          font-size: 64px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 16px 0;
          line-height: 1.15;
        }

        .career-heading .highlight-text {
          background: linear-gradient(135deg, #D4AF37, #fbbf24, #B8860B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: headingShine 4s ease-in-out infinite;
        }

        .golden-mode .career-heading .highlight-text {
          background: linear-gradient(135deg, #fbbf24, #D4AF37, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes headingShine {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .heading-underline {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #D4AF37, #4F46E5, #D4AF37);
          border-radius: 3px;
          margin: 0 auto 24px;
          background-size: 200% 100%;
          animation: underlineMove 3s ease-in-out infinite;
        }

        .golden-mode .heading-underline {
          background: linear-gradient(90deg, #D4AF37, #fbbf24, #D4AF37);
        }

        @keyframes underlineMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .career-description {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.75);
          max-width: 750px;
          margin: 0 auto 16px;
          line-height: 1.8;
          font-weight: 300;
        }

        .golden-mode .career-description {
          color: rgba(255, 255, 255, 0.85);
        }

        .career-description-secondary {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.45);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 300;
        }

        .golden-mode .career-description-secondary {
          color: rgba(255, 255, 255, 0.6);
        }

        /* ========================================
           RESPONSIVE
           ======================================== */
        @media (max-width: 1024px) {
          .career-hero-section {
            min-height: 80vh;
            padding: 100px 30px;
          }

          .career-heading {
            font-size: 52px;
          }

          .career-description {
            font-size: 18px;
          }

          .ring-1 {
            width: 400px;
            height: 400px;
          }

          .ring-2 {
            width: 550px;
            height: 550px;
          }

          .ring-3 {
            width: 300px;
            height: 300px;
          }

          .glow-1 {
            width: 300px;
            height: 300px;
          }

          .glow-2 {
            width: 350px;
            height: 350px;
          }
        }

        @media (max-width: 768px) {
          .career-hero-section {
            min-height: 70vh;
            padding: 80px 16px 100px;
          }

          .career-heading {
            font-size: 38px;
          }

          .career-description {
            font-size: 16px;
          }

          .career-description-secondary {
            font-size: 15px;
          }

          .career-badge {
            font-size: 11px;
            padding: 8px 18px;
            letter-spacing: 1.5px;
          }

          .mode-toggle-btn {
            top: 80px;
            right: 10px;
            padding: 8px 14px;
            font-size: 12px;
          }

          .toggle-text {
            font-size: 11px;
          }

          .ring-1 {
            width: 300px;
            height: 300px;
          }

          .ring-2 {
            width: 400px;
            height: 400px;
          }

          .ring-3 {
            width: 200px;
            height: 200px;
          }

          .glow-1 {
            width: 200px;
            height: 200px;
            filter: blur(60px);
          }

          .glow-2 {
            width: 250px;
            height: 250px;
            filter: blur(60px);
          }

          .glow-3 {
            width: 200px;
            height: 200px;
            filter: blur(60px);
          }

          .shape-square,
          .shape-circle,
          .shape-diamond {
            width: 25px;
            height: 25px;
          }

          .shape-triangle {
            border-left-width: 18px;
            border-right-width: 18px;
            border-bottom-width: 30px;
          }

          .floating-line {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .career-hero-section {
            min-height: 60vh;
            padding: 60px 12px 80px;
          }

          .career-heading {
            font-size: 28px;
          }

          .career-description {
            font-size: 14px;
          }

          .career-description-secondary {
            font-size: 13px;
          }

          .career-badge {
            font-size: 10px;
            padding: 6px 14px;
            letter-spacing: 1px;
          }

          .career-badge svg {
            width: 16px;
            height: 16px;
          }

          .mode-toggle-btn {
            top: 75px;
            right: 8px;
            padding: 6px 12px;
            font-size: 11px;
          }

          .toggle-text {
            font-size: 10px;
          }

          .heading-underline {
            width: 60px;
            height: 2px;
          }

          .ring-1 {
            width: 200px;
            height: 200px;
          }

          .ring-2 {
            width: 280px;
            height: 280px;
          }

          .ring-3 {
            width: 150px;
            height: 150px;
          }

          .glow-1 {
            width: 150px;
            height: 150px;
            filter: blur(50px);
          }

          .glow-2 {
            width: 180px;
            height: 180px;
            filter: blur(50px);
          }

          .glow-3 {
            width: 150px;
            height: 150px;
            filter: blur(50px);
          }

          .shape-square,
          .shape-circle,
          .shape-diamond {
            width: 20px;
            height: 20px;
            border-width: 1.5px;
          }

          .shape-triangle {
            border-left-width: 15px;
            border-right-width: 15px;
            border-bottom-width: 25px;
          }
        }
      `}</style>
    </section>
  );
}