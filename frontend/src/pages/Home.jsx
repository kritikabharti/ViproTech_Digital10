import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';
import {motion} from "framer-motion";
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

import {
  FaCloudUploadAlt,
  FaUsers,
  FaAward,
} from "react-icons/fa";
import "./Home.css";
import { ArrowRight, Users, ChevronRight, Briefcase } from 'lucide-react';
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

import aboutImage from '../assets/prooo.jpg';
import teamImage from '../assets/unnn.jpg';
import digital from "../assets/digi.jpg";
import fullstack from "../assets/full.jpg";
import mechanical from "../assets/design.jpg";
import internship from "../assets/interior.jpg";


import { Sparkles, Rocket, Target, Globe } from 'lucide-react';
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
      <div className="home-container">
        {/* LEFT CONTENT */}
        <motion.div 
          className="home-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          {/* Heading with character animation - using existing container */}
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

          {/* Subtitle with character animation */}
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
              whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(79, 70, 229, 0.4)" }}
              whileTap={{ scale: 0.95 }}
               onClick={scrollToServices} 
            >
              <span>Services</span>
              <ArrowRight size={18} />
            </motion.button>

           <motion.button
  className="btn-secondary"
  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
  whileTap={{ scale: 0.95 }}
  onClick={scrollToCourses} // Add this
>
  <span>Courses</span>
  <Sparkles size={18} />
</motion.button>
          </motion.div>

        
          
        </motion.div>

        {/* RIGHT CONTENT - Circular Image */}
        <motion.div 
          className="home-right"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
        >
          <div className="circle-image-wrapper">
            <div className="circle-image-container">
              <img 
                src={herImage}
                alt="VProTech Digital" 
                className="circle-image"
              />
              <div className="circle-ring ring-1"></div>
              <div className="circle-ring ring-2"></div>
              <div className="circle-ring ring-3"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="float-element float-1"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles size={20} color="#4F46E5" />
            </motion.div>
            <motion.div 
              className="float-element float-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket size={20} color="#4F46E5" />
            </motion.div>
            <motion.div 
              className="float-element float-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Target size={20} color="#4F46E5" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>


{/* <section className="tech-hero">
  <div className="tech-overlay" />
  <div className="tech-content">
   <motion.h2 
                  className="content-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  VProTech <span className="highlight">Digital</span>
                </motion.h2>
  </div>
</section> */}
  


<section className="two-image-section">
  
  {/* Wave Divider at Top - White */}
   <div className="wave-divider-top">
    <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
      <path 
        d="M0,50 C300,130 600,30 900,100 C1200,170 1350,80 1440,120 L1440,0 L0,0 Z" 
        fill="#ffffff"
      />
    </svg>
  </div>

      <div className="two-image-container">
        
        {/* LEFT - Image with Motion */}
        <motion.div 
          className="left-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="left-image-container"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img 
              src={aboutImage} 
              alt="VProTech Digital Team"
              className="left-image"
            />
           
          </motion.div>
        </motion.div>

        {/* RIGHT - Still Image with Content */}
        <div className="right-image-wrapper">
          <div className="right-image-container">
            <img 
              src={teamImage} 
              alt="VProTech Digital Work"
              className="right-image"
            />
            
            {/* Content Overlay on Right Image */}
            <div className="right-image-content">
              <motion.div 
                className="content-inner"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay:
                   0.3 }}
                viewport={{ once: true }}
              >
                <motion.p 
                  className="content-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                 Founded in 2020 in Mohali, Punjab, VProtech Digital operates as a multifaceted IT solutions firm and technical vocational training institute. The company delivers commercial digital services including custom website development, mobile application design, and targeted search engine optimization. 
                 Simultaneously, they offer intensive six-week and six-month industrial training programs focused on live-project experience in web development, Python, and digital marketing. 
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>



 {/* ================= OUR SERVICES ================= */}

<section
   ref={servicesRef} 
className="services-section"
style={{
backgroundImage:`url(${bgaImge})`
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
  <span style={{ color: "#4F46E5" }}>ices</span>
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
            <h3>Web Development</h3>
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
            <h3>Android App Development</h3>
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
            <h3>Digital Marketing</h3>
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
            <h3>Logo Designing</h3>
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
            <h3>Website Design</h3>
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
            <h3>Interior Designing</h3>
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
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(60,59,75,.88),
        rgba(90,85,95,.88)
      ),
      url(${process})
    `,
  }}
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
  className="gallery-section"
  style={{
    backgroundImage: `url(${sectionBg})`,
  }}
>
  <div className="gallery-overlay"></div>

  <div className="gallery-content">
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
      <motion.div
        className="slider"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[img1, img2, img3, img4, img1, img2, img3, img4].map(
          (img, index) => (
            <div className="image-card" key={index}>
              <img src={img} alt="" className="gallery-image" />
            </div>
          )
        )}
      </motion.div>
    </div>
  </div>
</section>


 {/* <Footer /> */}

</>
    
  );

}

