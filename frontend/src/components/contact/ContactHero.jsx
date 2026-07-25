import React, { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Sparkles } from "lucide-react";

export default function ContactHero() {
  const [isGoldenMode, setIsGoldenMode] = useState(false);

  const toggleMode = () => {
    setIsGoldenMode(!isGoldenMode);
  };

  return (
    <section className={`contact-hero-section ${isGoldenMode ? "golden-mode" : ""}`}>
      {/* ===== ANIMATED BACKGROUND ===== */}
      <div className="contact-bg">
        {/* Floating Gradient Orbs */}
        <motion.div
          className="floating-orb orb-1"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="floating-orb orb-2"
          animate={{
            y: [0, 45, 0],
            x: [0, -35, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="floating-orb orb-3"
          animate={{
            y: [0, -40, 0],
            x: [0, -45, 0],
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="floating-orb orb-4"
          animate={{
            y: [0, 35, 0],
            x: [0, 40, 0],
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Rotating Light Rings */}
        <motion.div
          className="light-ring ring-1"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="light-ring ring-2"
          animate={{
            rotate: -360,
            scale: [1, 1.15, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        />
        <motion.div
          className="light-ring ring-3"
          animate={{
            rotate: 360,
            scale: [1, 1.08, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 },
          }}
        />

        {/* Glowing Gradient Blobs */}
        <motion.div
          className="gradient-blob blob-1"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="gradient-blob blob-2"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="gradient-blob blob-3"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.12, 0.28, 0.12],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Ambient Glow Layer */}
        <div className="ambient-layer" />
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
      <div className="contact-content">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="contact-badge"
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
            <span>GET IN TOUCH</span>
          </motion.div>

          <motion.h1 className="contact-heading">
            <span className="heading-line1">Let's Build Something</span>
            <span className="heading-line2">
              <span className="highlight-text">Amazing Together</span>
            </span>
          </motion.h1>

          <motion.div className="heading-underline" />

          <motion.p className="contact-description">
            Whether you're looking for custom software development,
            website design, digital marketing, AI solutions, or
            internship opportunities, our team is ready to help you
            achieve your goals.
          </motion.p>

          <motion.p className="contact-description-secondary">
            Reach out to us today and let's start a conversation
            about turning your ideas into reality.
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        /* ========================================
           CONTACT HERO SECTION
           ======================================== */
        .contact-hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 40px 80px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(165deg, #070b15 0%, #0f1629 40%, #141b2d 70%, #0a0f1e 100%);
          transition: all 0.6s ease;
        }

        .contact-hero-section.golden-mode {
          background: linear-gradient(165deg, #1a1205 0%, #2d1f0a 40%, #3d2b10 70%, #1a1205 100%);
        }

        /* ===== BACKGROUND ===== */
        .contact-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        /* Floating Gradient Orbs */
        .floating-orb {
          position: absolute;
          border-radius: 60%;
          filter: blur(50px);
          pointer-events: none;
        }

        .orb-1 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(238, 236, 228, 0.25), rgba(216, 215, 240, 0.1) 70%);
          top: 15%;
          left: 8%;
        }

        .golden-mode .orb-1 {
          background: radial-gradient(circle, rgba(212, 175, 55, 0.4), rgba(184, 134, 11, 0.15) 70%);
        }

        .orb-2 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.2), rgba(212, 175, 55, 0.08) 70%);
          bottom: 20%;
          right: 10%;
        }

        .golden-mode .orb-2 {
          background: radial-gradient(circle, rgba(212, 175, 55, 0.35), rgba(184, 134, 11, 0.12) 70%);
        }

        .orb-3 {
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2), rgba(79, 70, 229, 0.08) 70%);
          top: 45%;
          left: 25%;
        }

        .golden-mode .orb-3 {
          background: radial-gradient(circle, rgba(251, 191, 36, 0.35), rgba(212, 175, 55, 0.12) 70%);
        }

        .orb-4 {
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.18), rgba(212, 175, 55, 0.08) 70%);
          bottom: 30%;
          right: 25%;
        }

        .golden-mode .orb-4 {
          background: radial-gradient(circle, rgba(212, 175, 55, 0.3), rgba(184, 134, 11, 0.1) 70%);
        }

        /* Rotating Light Rings */
        .light-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(217, 202, 155, 0.08);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .ring-1 {
          width: 500px;
          height: 500px;
          border-color: rgba(235, 219, 164, 0.06);
        }

        .golden-mode .ring-1 {
          border-color: rgba(229, 217, 177, 0.12);
        }

        .ring-2 {
          width: 700px;
          height: 700px;
          border-color: rgba(194, 192, 227, 0.05);
        }

        .golden-mode .ring-2 {
          border-color: rgba(235, 223, 183, 0.1);
        }

        .ring-3 {
          width: 350px;
          height: 350px;
          border-color: rgba(203, 192, 154, 0.04);
          border-width: 2px;
        }

        .golden-mode .ring-3 {
          border-color: rgba(216, 202, 156, 0.1);
        }

        /* Glowing Gradient Blobs */
        .gradient-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent 70%);
          top: -150px;
          right: -100px;
        }

        .golden-mode .blob-1 {
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2), transparent 70%);
        }

        .blob-2 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.08), transparent 70%);
          bottom: -200px;
          left: -150px;
        }

        .golden-mode .blob-2 {
          background: radial-gradient(circle, rgba(212, 175, 55, 0.15), transparent 70%);
        }

        .blob-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.07), transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .golden-mode .blob-3 {
          background: radial-gradient(circle, rgba(212, 175, 55, 0.12), transparent 70%);
        }

        /* Ambient Layer */
        .ambient-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, rgba(212, 175, 55, 0.02), transparent 70%);
          pointer-events: none;
        }

        .golden-mode .ambient-layer {
          background: radial-gradient(ellipse at center, rgba(212, 175, 55, 0.05), transparent 70%);
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
        .contact-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          text-align: center;
          width: 100%;
        }

        .contact-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .contact-badge {
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
          text-transform: uppercase;
        }

        .golden-mode .contact-badge {
          background: rgba(212, 175, 55, 0.08);
          border-color: rgba(212, 175, 55, 0.3);
          color: #D4AF37;
        }

        .contact-badge svg {
          color: #D4AF37;
        }

        .contact-heading {
          font-size: 64px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px 0;
          line-height: 1.15;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .heading-line1 {
          display: block;
        }

        .heading-line2 {
          display: block;
        }

        .contact-heading .highlight-text {
          background: linear-gradient(135deg, #D4AF37, #fbbf24, #B8860B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: headingShine 4s ease-in-out infinite;
        }

        .golden-mode .contact-heading .highlight-text {
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
          margin: 16px auto 24px;
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

        .contact-description {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.75);
          max-width: 750px;
          margin: 0 auto 16px;
          line-height: 1.8;
          font-weight: 300;
        }

        .golden-mode .contact-description {
          color: rgba(255, 255, 255, 0.85);
        }

        .contact-description-secondary {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.45);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 300;
        }

        .golden-mode .contact-description-secondary {
          color: rgba(255, 255, 255, 0.6);
        }

        /* ========================================
           RESPONSIVE
           ======================================== */
        @media (max-width: 1024px) {
          .contact-hero-section {
            min-height: 80vh;
            padding: 100px 30px 70px;
          }

          .contact-heading {
            font-size: 52px;
          }

          .contact-description {
            font-size: 18px;
          }

          .floating-orb {
            width: 150px;
            height: 150px;
            filter: blur(40px);
          }

          .orb-2 {
            width: 180px;
            height: 180px;
          }

          .light-ring {
            width: 400px;
            height: 400px;
          }

          .ring-2 {
            width: 550px;
            height: 550px;
          }

          .gradient-blob {
            width: 350px;
            height: 350px;
            filter: blur(60px);
          }

          .blob-2 {
            width: 400px;
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .contact-hero-section {
            min-height: 70vh;
            padding: 80px 16px 60px;
          }

          .contact-heading {
            font-size: 38px;
          }

          .contact-description {
            font-size: 16px;
          }

          .contact-description-secondary {
            font-size: 15px;
          }

          .contact-badge {
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

          .heading-underline {
            width: 60px;
            height: 2px;
            margin: 12px auto 20px;
          }

          .floating-orb {
            width: 120px;
            height: 120px;
            filter: blur(30px);
          }

          .orb-2 {
            width: 140px;
            height: 140px;
          }

          .light-ring {
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

          .gradient-blob {
            width: 250px;
            height: 250px;
            filter: blur(50px);
          }

          .blob-2 {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .contact-hero-section {
            min-height: 60vh;
            padding: 60px 12px 50px;
          }

          .contact-heading {
            font-size: 28px;
            gap: 2px;
          }

          .contact-description {
            font-size: 14px;
          }

          .contact-description-secondary {
            font-size: 13px;
          }

          .contact-badge {
            font-size: 10px;
            padding: 6px 14px;
            letter-spacing: 1px;
          }

          .contact-badge svg {
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
            width: 50px;
            height: 2px;
            margin: 10px auto 16px;
          }

          .floating-orb {
            width: 80px;
            height: 80px;
            filter: blur(20px);
          }

          .orb-2 {
            width: 100px;
            height: 100px;
          }

          .light-ring {
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

          .gradient-blob {
            width: 180px;
            height: 180px;
            filter: blur(40px);
          }

          .blob-2 {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}