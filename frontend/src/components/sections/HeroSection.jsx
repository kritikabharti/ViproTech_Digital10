import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Rocket, Target } from 'lucide-react';
import { Code, Smartphone, Globe, Cpu } from 'lucide-react';

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function HeroSection({ scrollToServices, scrollToCourses }) {
  const services = [
    { icon: Code, title: "Web Development", description: "Modern responsive websites", color: "#6366f1" },
    { icon: Smartphone, title: "Mobile Apps", description: "iOS & Android solutions", color: "#8b5cf6" },
    { icon: Globe, title: "Digital Marketing", description: "Grow your online presence", color: "#ec4899" },
    { icon: Cpu, title: "AI Solutions", description: "Intelligent automation", color: "#06b6d4" }
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [enterDirection, setEnterDirection] = React.useState('left');

  const handleMouseEnter = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    setEnterDirection(x < width / 2 ? 'left' : 'right');
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => setHoveredIndex(null);

  const titleText = "Shaping the Future Through Technology and Purpose";
  const subtitleText = "Innovation. Sustainability. Impact.";
  const descriptionText = "At VProTech Digital, success goes beyond profit — we focus on creating value through advanced digital capabilities, empowering businesses to scale with purpose.";

  return (
    <section className="home-section">
      <div className="home-bg-pattern"></div>
      <div className="home-bg-orb orb-1"></div>
      <div className="home-bg-orb orb-2"></div>
      <div className="home-bg-orb orb-3"></div>

      <div className="home-container">
        <motion.div 
          className="home-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="home-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="tag-dot"></span>
            <span>VProTech Digital</span>
          </motion.div>

          <motion.h1 className="home-title" variants={container} initial="hidden" animate="visible">
            {titleText.split(" ").map((word, index) => (
              <motion.span key={index} variants={child} style={{ display: "inline-block", marginRight: "8px" }}>
                {word.split("").map((char, charIndex) => (
                  <motion.span key={charIndex} variants={child} style={{ display: "inline-block" }}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2 className="home-subtitle" variants={container} initial="hidden" animate="visible">
            {subtitleText.split(" ").map((word, index) => (
              <motion.span key={index} variants={child} style={{ display: "inline-block", marginRight: "6px" }}>
                {word.split("").map((char, charIndex) => (
                  <motion.span key={charIndex} variants={child} style={{ display: "inline-block" }}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="home-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {descriptionText}
          </motion.p>

          <motion.div 
            className="home-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(245, 158, 11, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
            >
              <span>Services</span>
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(245, 158, 11, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToCourses}
            >
              <span>Courses</span>
              <Sparkles size={18} />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="home-right"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card ${hoveredIndex === index ? 'hovered' : ''}`}
                onMouseEnter={(e) => handleMouseEnter(e, index)}
                onMouseLeave={handleMouseLeave}
                data-direction={enterDirection}
              >
                <div className="service-card-inner">
                  <div className="service-icon" style={{ backgroundColor: `${service.color}15` }}>
                    <service.icon size={22} style={{ color: service.color }} />
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
                <div className={`border-indicator ${enterDirection}`} />
              </div>
            ))}
          </div>

          <motion.div className="float-element float-1" animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <Star size={14} color="#F59E0B" />
          </motion.div>
          <motion.div className="float-element float-2" animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <Rocket size={14} color="#F59E0B" />
          </motion.div>
          <motion.div className="float-element float-3" animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
            <Target size={14} color="#F59E0B" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}