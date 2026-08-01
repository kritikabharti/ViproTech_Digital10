import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Users, GraduationCap, Rocket, Award, TrendingUp, Star } from 'lucide-react';
import bgabout from '../../assets/premin.png';
import "./AboutSection.css";

const leftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stats = [
  { number: "2020", label: "Founded", icon: Calendar },
  { number: "50+", label: "Projects Delivered", icon: Briefcase },
  { number: "30+", label: "Happy Clients", icon: Users },
  { number: "6+", label: "Training Programs", icon: GraduationCap },
];

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-bg-dots"></div>
      <div className="about-bg-orb orb-1"></div>
      <div className="about-bg-orb orb-2"></div>

      <div className="about-container">
        {/* ===== LEFT CONTENT ===== */}
        <motion.div
          className="about-left"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Building <span className="highlight">Tomorrow's</span> Technology Today
          </motion.h2>

          <motion.p
            className="about-description"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Founded in 2020 in Mohali, Punjab, VProtech Digital operates as a multifaceted IT solutions 
            firm and technical vocational training institute.
          </motion.p>

          <motion.p
            className="about-description"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ marginTop: '12px' }}
          >
            The company delivers commercial digital services including custom website development, 
            mobile application design, and targeted search engine optimization. Simultaneously, they 
            offer intensive six-week and six-month industrial training programs focused on live-project 
            experience in web development, Python, and digital marketing.
          </motion.p>

          <motion.div 
            className="about-stats"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div key={i} className="stat-item" variants={itemVariants}>
                <stat.icon size={22} className="stat-icon" />
                <div>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ===== RIGHT CONTENT ===== */}
        <motion.div
          className="about-right"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main Image - Increased Size */}
          <motion.div
            className="about-image-header"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="about-image-overlay-wrapper">
              <img 
                src={bgabout} 
                alt="About VProTech" 
                className="about-hero-image"
                loading="lazy"
                width="800"
                height="500"
                style={{ 
                  width: '100%',
                  height: 'auto',
                  maxHeight: '560px',
                  objectFit: 'cover',
                
                }}
              />
            </div>
          </motion.div>

          {/* Floating Elements */}
          <div className="about-image-wrapper">
            <motion.div
              className="about-image-container"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="about-image-placeholder">
                <div className="image-content">
                  <Rocket size={48} color="#F59E0B" />
                  <span>VProTech Digital</span>
                  <p>Innovating since 2020</p>
                </div>
              </div>
              <div className="about-image-ring"></div>
            </motion.div>

            <motion.div
              className="floating-card card-1"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Award size={20} color="#F59E0B" />
              <span>5+ Years</span>
            </motion.div>

            <motion.div
              className="floating-card card-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrendingUp size={20} color="#F59E0B" />
              <span>Growing</span>
            </motion.div>

            <motion.div
              className="floating-card card-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star size={20} color="#F59E0B" />
              <span>Trusted</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



