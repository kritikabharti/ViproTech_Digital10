import React from 'react';
import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./LogoSlider.css";

import logo1 from "../assets/allenagroup.png";
import logo2 from "../assets/CBL.png";
import logo3 from "../assets/greenlotus.png";
import logo4 from "../assets/gulmohar.png";
import logo5 from "../assets/IBM.png";
import logo6 from "../assets/Infotech.png";
import logo7 from "../assets/JLPL-Logo-white-2023.png";
import logo8 from "../assets/MGE.png";
import logo9 from "../assets/PJ.png";
import logo10 from "../assets/SEWlogo.png";
import logo11 from "../assets/shiv&sons.png";
import logo12 from "../assets/SK files&tools.png";
import logo13 from "../assets/tech mahindra.png";
import logo14 from "../assets/wiproapplying.png";
import process from "../assets/custom.jpg";
import bgabout from "../assets/premin.png";

import {
  FaCloudUploadAlt,
  FaUsers,
  FaAward,
} from "react-icons/fa";
import "./Home.css";
import { ArrowRight, Users, ChevronRight,  ChevronLeft, Briefcase, Calendar, GraduationCap, Search, Award, TrendingUp, ChevronDown, Code, Zap, Smartphone, Cpu, Star } from 'lucide-react';
import { HiArrowLongRight } from "react-icons/hi2";

import Footer from "../components/Footer";
import "../App.css";
import videos from "../assets/viprotech.mp4";
import bgaImge from "../assets/save.jpg";
import expertiseBg from "../assets/digital.jpg";
import custom from "../assets/itand custom.jpg";

import sectionBg from "../assets/imagee.jpg";
import heroBg from "../assets/bggg.jpg";
import heroImage from "../assets/team.jpg";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";

import aboutImage from '../assets/prooo.jpg';
import teamImage from '../assets/unnn.jpg';
import digital from "../assets/digi.jpg";
import fullstack from "../assets/full.jpg";
import mechanical from "../assets/design.jpg";
import internship from "../assets/interior.jpg";


import { Sparkles, Rocket, Target, Globe, } from 'lucide-react';
import herImage  from "../assets/herImage.jpg";
import DomainsCourses from './DomainsCourses';



const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.6,     // Wait before first character
      staggerChildren: 0.04,  // Characters appear one by one
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

 const leftVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };


const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

 const stats = [
    { number: "2020", label: "Founded", icon: Calendar },
    { number: "50+", label: "Projects Delivered", icon: Briefcase },
    { number: "30+", label: "Happy Clients", icon: Users },
    { number: "6+", label: "Training Programs", icon: GraduationCap },
  ];

  const services = [
    { icon: Code, title: "Web Development", desc: "Custom websites & applications" },
    { icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android solutions" },
    { icon: Search, title: "SEO Services", desc: "Targeted search optimization" },
    { icon: GraduationCap, title: "Industrial Training", desc: "6-week & 6-month programs" },
  ];



const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
];

export default function Home() {
  const navigate = useNavigate();
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


 const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  
  const images = [img1, img2, img3, img4, img5, img6, img7];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 1,
    }),
  };


 const titleText = "Shaping the Future Through Technology and Purpose";
  const subtitleText = "Innovation. Sustainability. Impact.";
  const descriptionText = "At VProTech Digital, success goes beyond profit — we focus on creating value through advanced digital capabilities, empowering businesses to scale with purpose.";

const coursesRef = useRef(null);

// Scroll function for courses
const scrollToCourses = () => {
  coursesRef.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};



 const servicesRef = useRef(null);

  // Scroll function
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };


  


  return (
    <>
 <section className="home-section">
      {/* Background Pattern */}
      <div className="home-bg-pattern"></div>
      
      {/* Gradient Orbs */}
      <div className="home-bg-orb orb-1"></div>
      <div className="home-bg-orb orb-2"></div>
      <div className="home-bg-orb orb-3"></div>

      <div className="home-container">
        {/* ===== LEFT CONTENT ===== */}
        <motion.div 
          className="home-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tag */}
          <motion.div 
            className="home-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="tag-dot"></span>
            <span>VProTech Digital</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="home-title"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {titleText.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={child}
                style={{ display: "inline-block", marginRight: "8px" }}
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={child}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="home-subtitle"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {subtitleText.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={child}
                style={{ display: "inline-block", marginRight: "6px" }}
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={child}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="home-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {descriptionText}
          </motion.p>

          {/* Buttons */}
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

        {/* ===== RIGHT CONTENT - Services Grid ===== */}
        <motion.div 
          className="home-right"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Code size={22} />
              </div>
              <h4>Web Development</h4>
              <p>Modern responsive websites</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Smartphone size={22} />
              </div>
              <h4>Mobile Apps</h4>
              <p>iOS & Android solutions</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Globe size={22} />
              </div>
              <h4>Digital Marketing</h4>
              <p>Grow your online presence</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Cpu size={22} />
              </div>
              <h4>AI Solutions</h4>
              <p>Intelligent automation</p>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div 
            className="float-element float-1"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Star size={14} color="#F59E0B" />
          </motion.div>
          <motion.div 
            className="float-element float-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Rocket size={14} color="#F59E0B" />
          </motion.div>
          <motion.div 
            className="float-element float-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Target size={14} color="#F59E0B" />
          </motion.div>
        </motion.div>
      </div>
    </section>


<section className="about-section">
      {/* Background Decorations */}
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

          {/* Simple Title */}
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

          {/* Stats */}
          <motion.div 
            className="about-stats"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="stat-item"
                variants={itemVariants}
              >
                <stat.icon size={22} className="stat-icon" />
                <div>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
        </motion.div>

        {/* ===== RIGHT CONTENT ===== */}
        <motion.div
          className="about-right"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

{/* 👇 IMAGE WITH OVERLAY */}
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
      />
     
    </div>
  </motion.div>
            

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

            {/* Floating Cards */}
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

          {/* Services Mini Grid */}
          {/* <motion.div
            className="about-services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="about-service-card"
                custom={i}
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className="service-icon-wrapper">
                  <service.icon size={18} />
                </div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </section>






 {/* ================= OUR SERVICES ================= */}

<section
   ref={servicesRef} 
className="services-section"
style={{
background: '#ffffff'  
}}
>
  <div className="services-overlay"></div>

  <div className="section-content">
   <motion.h5
  className="small-title"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  WHAT WE OFFER
</motion.h5>

<motion.h2
 className="section-title"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  viewport={{ once: true }}
>
  Serv
  <span style={{ color: " #B8860B" }}>ices</span>
</motion.h2>

<motion.p
 className="section-text"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  viewport={{ once: true }}
>
  Empowering businesses with innovative digital solutions 
</motion.p>

    <div className="card-grid">

      {/* CARD 1 */}
      <div className="flip-card">
        <div className="flip-card-inner">

          <div className="flip-card-front">
           <h3 style={{ color: '#d5b156' }}>Web Development</h3>
            <p>
             Custom web applications,
E-commerce website development,
Real estate websites,
Hotel booking websites,
Business management systems
            </p>
            
          </div>

          <div
            className="flip-card-back"
            style={{ backgroundImage: `url(${custom})` }}
          >
            {/* Button on Image */}
        
          <button 
            className="explore-btn-image"
          onClick={() => navigate('/webdevelopment')}
          >
            Explore More →
          </button>
       
          </div>

        </div>
      </div>

      {/* CARD 2 */}
      <div className="flip-card">
        <div className="flip-card-inner">

          <div className="flip-card-front">
            <h3 style={{ color: '#d5b156' }}>Android App Development</h3>
            <p>
              Custom Android applications,
Business apps,
Mobile solutions for startups and enterprises.
            </p>
          </div>

          <div
            className="flip-card-back"
            style={{ backgroundImage: `url(${expertiseBg})` }}
          >
            
          <button 
            className="explore-btn-image"
            onClick={() => navigate('/mobile-apps')}
          >
            Explore More →
          </button>
          </div>

        </div>
      </div>

      {/* CARD 3 */}
      <div className="flip-card">
        <div className="flip-card-inner">

          <div className="flip-card-front">
            <h3 style={{ color: '#d5b156' }}>Digital Marketing</h3>
            <p>
             Search Engine Optimization (SEO),
Social Media Marketing (SMM),
Google Ads,
Online branding,
Business promotion and lead generation.
            </p>
          </div>

          <div
            className="flip-card-back"
            style={{ backgroundImage: `url(${digital})` }}
          >
            
          <button 
            className="explore-btn-image"
              onClick={() => navigate('/digital-marketing')}
          >
            Explore More →
          </button>
          </div>

        </div>
      </div>

      {/* CARD 4 */}
      <div className="flip-card">
        <div className="flip-card-inner">

          <div className="flip-card-front">
            <h3 style={{ color: '#d5b156' }}>Logo Designing</h3>
            <p>
             Custom logo creation,
       Brand identity design.
            </p>
          </div>

          <div
            className="flip-card-back"
            style={{ backgroundImage: `url(${fullstack})` }}
          >
            
          <button 
            className="explore-btn-image"
             onClick={() => navigate('/logo-designing')}
          >
            Explore More →
          </button>
          </div>

        </div>
      </div>

      {/* CARD 5 */}
      <div className="flip-card">
        <div className="flip-card-inner">

          <div className="flip-card-front">
            <h3 style={{ color: '#d5b156' }}>Website Design</h3>
            <p>
              Responsive website design,
UI/UX design,
Business and portfolio websites,
Corporate websites.
            </p>
          </div>

          <div
            className="flip-card-back"
            style={{ backgroundImage: `url(${mechanical})` }}
          >
            
          <button 
            className="explore-btn-image"
           onClick={() => navigate('/website-design')}
          >
            Explore More →
          </button>
          </div>

        </div>
      </div>

      {/* CARD 6 */}
      <div className="flip-card">
        <div className="flip-card-inner">

          <div className="flip-card-front">
            <h3 style={{ color: '#d5b156' }}>Interior Designing</h3>
            <p>
              Residential and commercial interior design services.
            </p>
          </div>

          <div
            className="flip-card-back"
            style={{ backgroundImage: `url(${internship})` }}
          >
            
          <button 
            className="explore-btn-image"
             onClick={() => navigate('/interior-designing')}
          >
            Explore More →
          </button>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


{/* next Section */}

 <section className="logo-section">
      <h2>Recruiters We Work With</h2>

      <div className="logo-slider">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo} alt={`Logo ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>



{/* ================= WORKING PROCESS ================= */}

<section
  className="process-section"
  
>
  <motion.h4
    className="small-heading"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    WORKING PROCESS
  </motion.h4>

  <motion.h2
    className="main-heading"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    viewport={{ once: true }}
  >
    How Can You Start?
  </motion.h2>

  <div className="process-container">

    {/* Step 1 */}

    <motion.div
      className="step"
      whileHover={{ y: -10 }}
      transition={{ duration: .3 }}
    >
      <div className="icon-circle">
        <FaCloudUploadAlt size={52} color="#111" />
        <div className="step-number">01</div>
      </div>

      <h3 className="step-title">
        Share Your Requirements
      </h3>

      <p className="step-desc">
        Tell us about your business goals, website requirements,
        application needs, or digital challenges.
      </p>
    </motion.div>

    <HiArrowLongRight
      size={120}
      color="white"
      className="process-arrow"
    />

    {/* Step 2 */}

    <motion.div
      className="step"
      whileHover={{ y: -10 }}
    >
      <div className="icon-circle">
        <FaUsers size={48} color="#111" />
        <div className="step-number">02</div>
      </div>

      <h3 className="step-title">
        Strategy & Planning
      </h3>

      <p className="step-desc">
        We prepare the perfect roadmap including design,
        development, timeline and execution plan.
      </p>
    </motion.div>

    <HiArrowLongRight
      size={120}
      color="white"
      className="process-arrow"
    />

    {/* Step 3 */}

    <motion.div
      className="step"
      whileHover={{ y: -10 }}
    >
      <div className="icon-circle">
        <FaAward size={48} color="#111" />
        <div className="step-number">03</div>
      </div>

      <h3 className="step-title">
        Design, Launch & Growth
      </h3>

      <p className="step-desc">
        Our experts build, test and launch your project while
        providing continuous support.
      </p>
    </motion.div>

  </div>
</section>


{/* ================= COURSES SECTION ================= */}
<section 
 ref={coursesRef} 
className="courses-section">
  <div className="courses-container">
    <DomainsCourses />
  </div>
</section>



{/* ================= OUR JOURNEY ================= */}
<section 
  className="sliding-gallery"
  style={{
    backgroundImage: `url(${sectionBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }}
>
  {/* Overlay */}
  <div className="gallery-overlay"></div>
  
  <div className="gallery-container">
    <motion.h2
      className="gallery-title"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      Our Journey
    </motion.h2>

    <div className="slider-wrapper">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'tween', duration: 0.6, ease: 'easeInOut' },
            opacity: { duration: 0.4 },
          }}
          className="slide-container"
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slide-image"
          />
          
          {/* Image Counter */}
          <div className="slide-counter">
            {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button className="slide-btn prev" onClick={goToPrevious}>
        <ChevronLeft size={28} />
      </button>
      <button className="slide-btn next" onClick={goToNext}>
        <ChevronRight size={28} />
      </button>

      {/* Dots Navigation */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  </div>
</section>

</>
    
  );

}

