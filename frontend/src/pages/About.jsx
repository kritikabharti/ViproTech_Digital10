import React, { useState } from "react";
import aboutBg from "../assets/about.jpg";
import { motion } from "framer-motion";
import "./About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import officeImg from "../assets/vvv.png";
import modern from "../assets/modern.jpg";
import aiml from "../assets/ai&image.jpg";
import marketing from "../assets/markting.jpg";
import devops from "../assets/devops.jpg";
import cyber from "../assets/cyber.jpg";

import teamImg from "../assets/ourteam.jpg";
import visionImg from "../assets/ourvalues.jpg";
import bottomImg from "../assets/photo.jpg";
import TeamSection from '../components/TeamSection';

// pages/About.jsx
import { 
  Quote, 
  Award, 
  Target, 
  Users, 
  TrendingUp,
  Calendar,
  MapPin,
  Briefcase,
  ChevronRight,
  Sparkles,
  Star,
  Zap,
  Crown,
  Gem,
  Shield,
  Rocket,
  Code,
  Smartphone,
  Globe,
  Cpu,
  Layers,
  Play,
  CheckCircle,
  ArrowRight,
   Handshake 
} from 'lucide-react';


import founderImage from '../assets/Rajat Vprotech.png';

export default function About() {

 const [isGoldenMode, setIsGoldenMode] = useState(false);


  // Golden services data
  const goldenServices = [
    {
      icon: <Code size={28} />,
      title: "Custom Software Development",
      description: "Tailored solutions built with cutting-edge technology to streamline your business operations.",
      color: "#D4AF37"
    },
    {
      icon: <Smartphone size={28} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications with intuitive user experiences.",
      color: "#C9A832"
    },
    {
      icon: <Globe size={28} />,
      title: "Web Development",
      description: "Responsive, high-performance websites that captivate audiences and drive conversions.",
      color: "#B8960F"
    },
    {
      icon: <Cpu size={28} />,
      title: "AI & Machine Learning",
      description: "Intelligent automation and data-driven solutions that transform business processes.",
      color: "#A8850C"
    },
    {
      icon: <Layers size={28} />,
      title: "Digital Marketing",
      description: "Strategic campaigns across SEO, social media, and content marketing for measurable growth.",
      color: "#D4AF37"
    },
    {
      icon: <Shield size={28} />,
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions protecting your digital assets and customer data.",
      color: "#C9A832"
    }
  ];

  const goldenStats = [
    { value: "150+", label: "Projects Delivered", icon: <CheckCircle size={24} /> },
    { value: "98%", label: "Client Satisfaction", icon: <Star size={24} /> },
    { value: "200+", label: "Students Trained", icon: <Users size={24} /> },
    { value: "50+", label: "Business Partners", icon: <Handshake size={24} /> },
  ];







  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -80, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1,
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1,
        delay: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { number: "5+", label: "Years of Excellence", icon: <Award size={20} /> },
    { number: "20+", label: "Team Members", icon: <Users size={20} /> },
    
  ];



   const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };


  return (
    
    <>
      <Navbar />

{/* ===== NEW GOLDEN SECTION ===== */}
<section className={`golden-section ${isGoldenMode ? 'golden-active' : ''}`}>
  {/* Wavy Background Animation */}
  <div className="golden-wavy-bg">
    <svg className="wavy-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <motion.path
        fill="rgba(79, 70, 229, 0.05)"
        d="M0,192L48,186.7C96,181,192,171,288,160C384,149,480,139,576,144C672,149,768,171,864,176C960,181,1056,171,1152,160C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        animate={{
          d: [
            "M0,192L48,186.7C96,181,192,171,288,160C384,149,480,139,576,144C672,149,768,171,864,176C960,181,1056,171,1152,160C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,160L48,165.3C96,171,192,181,288,186.7C384,192,480,192,576,181.3C672,171,768,149,864,138.7C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,208C672,203,768,181,864,176C960,171,1056,181,1152,192C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,192L48,186.7C96,181,192,171,288,160C384,149,480,139,576,144C672,149,768,171,864,176C960,181,1056,171,1152,160C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>

    <svg className="wavy-svg wavy-2" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <motion.path
        fill="rgba(212, 175, 55, 0.08)"
        d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,245.3C672,256,768,256,864,245.3C960,235,1056,213,1152,202.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        animate={{
          d: [
            "M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,245.3C672,256,768,256,864,245.3C960,235,1056,213,1152,202.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,181.3C672,171,768,149,864,149.3C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,288L48,277.3C96,267,192,245,288,234.7C384,224,480,224,576,234.7C672,245,768,267,864,277.3C960,288,1056,288,1152,277.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,245.3C672,256,768,256,864,245.3C960,235,1056,213,1152,202.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>

    <svg className="wavy-svg wavy-3" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <motion.path
        fill="rgba(79, 70, 229, 0.03)"
        d="M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,149.3C672,139,768,117,864,106.7C960,96,1056,96,1152,106.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        animate={{
          d: [
            "M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,149.3C672,139,768,117,864,106.7C960,96,1056,96,1152,106.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,170.7C672,181,768,203,864,213.3C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,117.3C672,107,768,85,864,74.7C960,64,1056,64,1152,74.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,96L48,106.7C96,117,192,139,288,149.3C384,160,480,160,576,149.3C672,139,768,117,864,106.7C960,96,1056,96,1152,106.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  </div>

  <div className="golden-container">
    {/* Section Header */}
    <motion.div
      className="golden-header"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="golden-badge"
        animate={{
          scale: isGoldenMode ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles size={20} />
        <span>About Us</span>
      </motion.div>

      <motion.h2 className="golden-title">
        <span className="golden-text">Golden</span> Standard of
        <span className="golden-highlight"> Digital Excellence</span>
      </motion.h2>

      <motion.p className="golden-subtitle">
        Discover our comprehensive suite of premium digital services designed
        to elevate your business to new heights of success. We combine 
        innovation, expertise, and cutting-edge technology to deliver 
        exceptional results that drive growth and transformation.
      </motion.p>

      <motion.p className="golden-subtitle-2">
        From custom software development to AI-powered solutions, our team 
        of experts is dedicated to helping you achieve your digital goals 
        with precision and excellence.
      </motion.p>
    </motion.div>

    {/* Floating Golden Orbs */}
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
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3), rgba(79, 70, 229, 0.1))',
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
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.3), rgba(212, 175, 55, 0.1))',
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
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2), rgba(79, 70, 229, 0.15))',
        }}
      />
    </div>
  </div>
</section>









{/* Next section */}

<section className="founder-section">
      <div className="founder-container">
        {/* LEFT - Founder Image */}
        <motion.div
          className="founder-left"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="founder-image-wrapper">
            <div className="founder-image-container">
              <img
                src={founderImage}
                alt="Founder - VProTech Digital"
                className="founder-image"
              />
              <div className="founder-image-overlay">
                <div className="founder-name-tag">
                  <h3>VProTech Digital</h3>
                  <p>Founded in 2020</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div
              className="floating-badge badge-1"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Award size={20} color="#4F46E5" />
              <span>5+ Years</span>
            </motion.div>
            
           
          </div>
        </motion.div>

        {/* RIGHT - Founder Information */}
        <motion.div
          className="founder-right"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="founder-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span className="founder-tag" variants={itemVariants}>
              <span className="tag-dot"></span>
              MEET THE FOUNDER
            </motion.span>

            <motion.h2 className="founder-title" variants={itemVariants}>
              The Vision Behind{' '}
              <span className="highlight-text">VProTech Digital</span>
            </motion.h2>

            <motion.div className="founder-quote" variants={itemVariants}>
              <Quote size={28} className="quote-icon" />
              <p>
                "Technology is not just about code and machines — it's about 
                empowering people, solving real problems, and creating a 
                future where innovation serves humanity."
              </p>
            </motion.div>

            <motion.div className="founder-bio" variants={itemVariants}>
              <p>
                Founded in 2020, VProTech Digital was born from a vision to 
                bridge the gap between technology and practical application. 
                What started as a small team of passionate developers has 
                grown into a comprehensive digital solutions provider, 
                serving clients across India and globally.
              </p>
              <p>
                Our founder believed that technology should be accessible, 
                innovative, and impactful. This philosophy drives everything 
                we do — from web development to digital marketing, from 
                training programs to internship opportunities.
              </p>
            </motion.div>

            <motion.div className="founder-stats" variants={itemVariants}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-info">
                    <h4>{stat.number}</h4>
                    <p>{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div className="founder-meta" variants={itemVariants}>
              <div className="meta-item">
                <Calendar size={18} />
                <span>Founded: 2020</span>
              </div>
              <div className="meta-item">
                <MapPin size={18} />
                <span>Mohali, Punjab</span>
              </div>
              <div className="meta-item">
                <Briefcase size={18} />
                <span>IT Solutions & Training</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>


{/* Our team */}

 <TeamSection />



<section className="about-section ">
  <div className="about-container">

    {/* Left Side */}
    <motion.div
      className="left-content"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h5 className="about-small">WHO WE ARE</h5>

      <h2 className="about-heading">
        Building the Future with
        <span style={{ color: "#4F46E5" }}> Innovation & Technology</span>
      </h2>

      <p className="about-text">
        Founded in march, 2020 by Rajat Kumar, VProtech Digital has come a long way from its beginning. When Rajat Kumar first started out, his passion for "making technically strong professional out of students" drove him to start his own business. We provide Industrial Training to students in Chandigarh for Btech, Diploma, BCA and MCA students. Our team of professional trainers train students in web development, web design, Android applications, SEO, social media marketing (SMM), digital marketing and other courses under our six (6) months / 6 weeks industrial training program in Mohali, Chandigarh.

      </p>

      <p className="about-text">
     Under the 9001:2015 ISO Certification, we offer you standardize trainings and 
personality development sessions that helps building the mindset and vision of the 
students for their bright future.
      </p>

      <p className="about-text">
        VProTech Digital is a technology-driven company dedicated to helping
        businesses and aspiring professionals succeed in today's digital world.
        We combine creativity, technical expertise, and strategic thinking to
        deliver solutions that solve real business challenges while creating
        meaningful digital experiences.
      </p>

       <p className="about-text">
        Since our inception, we have focused on developing modern websites,
        enterprise software, mobile applications, cloud-based systems, AI
        solutions, and digital marketing strategies that help organizations
        increase productivity, improve customer engagement, and accelerate
        business growth.
      </p>

      


    </motion.div>

    {/* Right Side */}
    <motion.div
     className="right-image"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
     <motion.img
  src={officeImg}
  alt="VProTech Digital Office"
  className="about-image "
  initial={{ opacity: 0, x: 80, scale: 0.9 }}
  whileInView={{ opacity: 1, x: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  whileHover={{
    scale: 1.05,
    rotate: 1,
  }}
/>
    </motion.div>

  </div>
</section>



{/* ================= OUR TEAM & VISION ================= */}

<section className="team-vision-section">

  {/* Team */}
  <div className="team-row">

    <motion.div
      className="team-image-box"
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <img src={teamImg} alt="Our Team" className="team-image" />
    </motion.div>

    <motion.div
      className="team-content"
      variants={fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className="section-tag">OUR TEAM</span>

      <h2 className="team-heading">
        Passionate Professionals Delivering
        <span className="highlight"> Excellence</span>
      </h2>

      <p className="team-text">
        At VProTech Digital, our team is made up of experienced developers,
        designers, digital marketers, AI specialists, and business consultants.
        We work together with one mission—to create innovative digital
        solutions that help businesses succeed.
      </p>

      <p className="team-text">
        Every project is driven by collaboration, creativity, and a commitment
        to delivering outstanding results for our clients.
      </p>
    </motion.div>

  </div>

  {/* Vision */}

  <div className="team-row reverse">

    <motion.div
      className="team-content"
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className="section-tag">OUR VISION</span>

      <h2 className="team-heading">
        Building a
        <span className="highlight"> Smarter Digital Future</span>
      </h2>

      <p className="team-text">
        Our vision is to become one of India's leading technology companies by
        delivering world-class software, AI, cloud, cybersecurity, and digital
        transformation solutions.
      </p>

      <p className="team-text">
        We believe technology should simplify business, inspire innovation, and
        create opportunities for everyone.
      </p>

    </motion.div>

    <motion.div
      className="team-image-box"
      variants={fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <img src={visionImg} alt="Vision" className="team-image" />
    </motion.div>

  </div>

  {/* Bottom Image */}

  <motion.div
    className="bottom-image-box"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <img src={bottomImg} alt="" className="bottom-image" />
  </motion.div>

</section>





<section className="why-section">
   <div className="why-content">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h5 className="small-heading">WHY CHOOSE US</h5>

      <h2 className="main-heading">
        Empowering Businesses Through
        <span style={{ color: "rgba(79,70,229,0.95)" }}> Technology & Innovation</span>
      </h2>

      <p className="section-desc">
        At VProTech Digital, we combine innovation, expertise, and cutting-edge
        technology to deliver software solutions that help businesses grow,
        automate operations, and stay ahead in today's digital world.
      </p>
    </motion.div>

    <div className="feature-grid">

<motion.div
className="feature-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  whileHover="hover"
>
  <img
    src={aboutBg}
    alt="Web Development"
    className="card-image"
  />

  <motion.div
    variants={{
      hover: {
        backgroundColor: "rgba(0,0,0,0.55)",
      },
    }}
    transition={{ duration: 0.4 }}
    className="card-overlay"
  >
    <motion.div
      variants={{
        hover: {
          y: 0,
          opacity: 1,
        },
      }}
      initial={{
        y: 80,
        opacity: 0,
      }}
      transition={{ duration: 0.4 }}
      className="card-content"
    >
      <h3 className="card-title">Custom Software & Development</h3>

      <p className="card-text">
       We build secure, scalable custom software solutions designed
        to streamline your business operations and drive digital growth.
      </p>
    </motion.div>
  </motion.div>
</motion.div>






<motion.div
  className="feature-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  whileHover="hover"
>
  <img
    src={modern}
    alt="Modern Web & Mobile Apps"
    className="card-image"
  />

  <motion.div
    className="card-overlay"
    variants={{
      hover: {
        backgroundColor: "rgba(0,0,0,0.55)",
      },
    }}
    transition={{ duration: 0.4 }}
  >
    <motion.div
      className="card-content"
      variants={{
        hover: {
          y: 0,
          opacity: 1,
        },
      }}
      initial={{
        y: 80,
        opacity: 0,
      }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="card-title">
        Modern Web & Mobile Apps
      </h3>

      <p className="card-text">
        We create responsive websites and high-performance mobile
        applications using the latest technologies for exceptional user
        experiences.
      </p>
    </motion.div>
  </motion.div>
</motion.div>



<motion.div
  className="feature-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  whileHover="hover"
>
  <img
    src={aiml}
    alt="Internship & Training"
    className="card-image"
  />

  <motion.div
    className="card-overlay"
    variants={{
      hover: {
        backgroundColor: "rgba(0,0,0,0.55)",
      },
    }}
    transition={{ duration: 0.4 }}
  >
    <motion.div
      className="card-content"
      variants={{
        hover: {
          y: 0,
          opacity: 1,
        },
      }}
      initial={{
        y: 80,
        opacity: 0,
      }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="card-title">
        Internship & Training
      </h3>

      <p className="card-text">
        We provide custom software development services alongside
        industry-aligned internship and professional training programs.
      </p>
    </motion.div>
  </motion.div>
</motion.div>




  <motion.div
  className="feature-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  whileHover="hover"
>
  <img
    src={marketing}
    alt="AI & Digital Marketing"
    className="card-image"
  />

  <motion.div
    className="card-overlay"
    variants={{
      hover: {
        backgroundColor: "rgba(0,0,0,0.55)",
      },
    }}
    transition={{ duration: 0.4 }}
  >
    <motion.div
      className="card-content"
      variants={{
        hover: {
          y: 0,
          opacity: 1,
        },
      }}
      initial={{
        y: 80,
        opacity: 0,
      }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="card-title">
        AI & Digital Marketing
      </h3>

      <p className="card-text">
        From AI-powered automation to SEO, social media marketing and branding,
        we help businesses achieve sustainable digital growth.
      </p>
    </motion.div>
  </motion.div>
</motion.div>





  
  <motion.div
  className="feature-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  whileHover="hover"
>
  <img
    src={devops}
    alt="Cloud & DevOps Solutions"
    className="card-image"
  />

  <motion.div
    className="card-overlay"
    variants={{
      hover: {
        backgroundColor: "rgba(0,0,0,0.55)",
      },
    }}
    transition={{ duration: 0.4 }}
  >
    <motion.div
      className="card-content"
      variants={{
        hover: {
          y: 0,
          opacity: 1,
        },
      }}
      initial={{
        y: 80,
        opacity: 0,
      }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="card-title">
        Cloud & DevOps Solutions
      </h3>

      <p className="card-text">
        We implement secure cloud infrastructure, CI/CD pipelines, and DevOps
        practices that improve deployment speed, reliability, and business
        scalability.
      </p>
    </motion.div>
  </motion.div>
</motion.div>


<motion.div
  className="feature-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  whileHover="hover"
>
  <img
    src={cyber}
    alt="Cyber Security Services"
    className="card-image"
  />

  <motion.div
    className="card-overlay"
    variants={{
      hover: {
        backgroundColor: "rgba(0,0,0,0.55)",
      },
    }}
    transition={{ duration: 0.4 }}
  >
    <motion.div
      className="card-content"
      variants={{
        hover: {
          y: 0,
          opacity: 1,
        },
      }}
      initial={{
        y: 80,
        opacity: 0,
      }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="card-title">
        Cyber Security Services
      </h3>

      <p className="card-text">
        Protect your business with advanced cybersecurity solutions including
        network protection, data security, threat monitoring, and secure
        application development.
      </p>
    </motion.div>
  </motion.div>
</motion.div>


</div>
  </div>
</section>



      {/* <Footer /> */}
    </>
  );
}


