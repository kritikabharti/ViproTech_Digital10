import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cloud,
  Database,
  Layers3,
  LockKeyhole,
  Globe2,
  Activity,
  CheckCircle2,
  Zap,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import technologyCore from "../../assets/technology-core.png";
import "./AboutSection.css";

export default function AboutSection() {
  const technologyNodes = [
    {
      title: "Cloud",
      subtitle: "Infrastructure",
      icon: Cloud,
      className: "node-cloud",
    },
    {
      title: "Data",
      subtitle: "Intelligence",
      icon: Database,
      className: "node-data",
    },
    {
      title: "Applications",
      subtitle: "Digital Products",
      icon: Layers3,
      className: "node-app",
    },
    {
      title: "Security",
      subtitle: "Protection",
      icon: LockKeyhole,
      className: "node-security",
    },
    {
      title: "Users",
      subtitle: "Connected Experience",
      icon: Globe2,
      className: "node-users",
    },
  ];

  return (
    <section className="technology-visual-section">

      {/* HEADER */}
      <div className="technology-heading">

        <motion.span
          className="technology-eyebrow"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          TRUSTED DIGITAL ECOSYSTEM
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technology That
          <span> Works Together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We connect digital products, applications, data, cloud
          infrastructure and users into one reliable technology ecosystem.
        </motion.p>

      </div>

      {/* MAIN VISUAL */}
      <motion.div
        className="technology-ecosystem"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        {/* GRID BACKGROUND */}
        <div className="ecosystem-grid" />

        {/* CONNECTION LINES */}
        <div className="connection-lines">
          <span className="line line-one" />
          <span className="line line-two" />
          <span className="line line-three" />
          <span className="line line-four" />
          <span className="line line-five" />
        </div>

        {/* CENTER CORE */}
        <motion.div
          className="technology-core"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <div className="core-ring ring-one" />
          <div className="core-ring ring-two" />

          <div className="core-icon">
            <ShieldCheck size={38} strokeWidth={1.7} />
          </div>

          <div className="core-content">
            <strong>VPROTECH</strong>
            <span>Technology Core</span>
          </div>

          <div className="core-status">
            <span />
            SYSTEM ACTIVE
          </div>

            <div className="core-visual">
    <img
  src={technologyCore}
  alt="VProTech Digital Technology"
/>
  </div>

        </motion.div>

        {/* TECHNOLOGY NODES */}
        {technologyNodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <motion.div
              key={node.title}
              className={`technology-node ${node.className}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                scale: 1.06,
                y: -5,
              }}
            >
              <div className="node-icon">
                <Icon size={22} />
              </div>

              <div>
                <strong>{node.title}</strong>
                <span>{node.subtitle}</span>
              </div>

              <div className="node-active">
                <span />
                Connected
              </div>
            </motion.div>
          );
        })}

        {/* PERFORMANCE PANEL */}
        <motion.div
          className="technology-status-panel"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >

          <div className="status-panel-header">
            <div>
              <span>TECHNOLOGY HEALTH</span>
              <strong>System Performance</strong>
            </div>

            <Activity size={21} />
          </div>

          <div className="status-item">
            <div>
              <span>Security</span>
              <strong>98%</strong>
            </div>

            <div className="status-bar">
              <span style={{ width: "98%" }} />
            </div>
          </div>

          <div className="status-item">
            <div>
              <span>Performance</span>
              <strong>94%</strong>
            </div>

            <div className="status-bar">
              <span style={{ width: "94%" }} />
            </div>
          </div>

          <div className="status-item">
            <div>
              <span>Scalability</span>
              <strong>96%</strong>
            </div>

            <div className="status-bar">
              <span style={{ width: "96%" }} />
            </div>
          </div>

        </motion.div>

        {/* FLOATING CARDS */}

        <motion.div
          className="floating-tech-card card-protected"
          animate={{ y: [0, -7, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <CheckCircle2 size={18} />
          <div>
            <strong>Protected</strong>
            <span>Secure Systems</span>
          </div>
        </motion.div>

        <motion.div
          className="floating-tech-card card-optimized"
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Zap size={18} />
          <div>
            <strong>Optimized</strong>
            <span>High Performance</span>
          </div>
        </motion.div>

        <motion.div
          className="floating-tech-card card-scalable"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <TrendingUp size={18} />
          <div>
            <strong>Scalable</strong>
            <span>Built to Grow</span>
          </div>
        </motion.div>

      </motion.div>

      {/* FEATURE ROW */}
      <div className="technology-feature-row">

        <div className="technology-feature">
          <div className="feature-icon">
            <ShieldCheck size={20} />
          </div>

          <div>
            <strong>Secure by Design</strong>
            <span>Security integrated into every layer.</span>
          </div>
        </div>

        <div className="technology-feature">
          <div className="feature-icon">
            <RefreshCw size={20} />
          </div>

          <div>
            <strong>Reliable Performance</strong>
            <span>Systems designed for consistent operation.</span>
          </div>
        </div>

        <div className="technology-feature">
          <div className="feature-icon">
            <TrendingUp size={20} />
          </div>

          <div>
            <strong>Ready to Scale</strong>
            <span>Technology that grows with your business.</span>
          </div>
        </div>

      </div>

    </section>
  );
}