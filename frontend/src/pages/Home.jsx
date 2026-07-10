import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
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







export default function Home() {

  return (
    <>
 


<section className="tech-hero">
  <div className="tech-overlay" />
  <div className="tech-content">
    <h1>Empowering Digital Innovation</h1>
    {/* <p>
      We build modern web, mobile, cloud, and cybersecurity solutions that
      help businesses grow and succeed.
    </p> */}
  </div>
</section>
  

<section className="two-image-section">
  
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
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
               

                <motion.h2 
                  className="content-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  VProTech <span className="highlight">Digital</span>
                </motion.h2>

                <motion.p 
                  className="content-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                 Founded in 2020 in Mohali, Punjab, VProtech Digital operates as a multifaceted IT solutions firm and technical vocational training institute. The company delivers commercial digital services including custom website development, mobile application design, and targeted search engine optimization. 
                 Simultaneously, they offer intensive six-week and six-month industrial training programs focused on live-project experience in web development, Python, and digital marketing. To bridge the gap between education and employment, they also provide graduating engineering and computer students with comprehensive job placement assistance.
                </motion.p>

                
                 <motion.div 
                  className="content-buttons"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Why Us Button - Navigates to /about */}
                 <div className="content-buttons">
  {/* Why Us Button - Navigates to /about */}
  <motion.div
    className="button-wrapper"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to="/about" className="content-cta primary">
      <Users size={18} />
      Why Us
      <ChevronRight size={16} />
    </Link>
  </motion.div>

  {/* Career Button - Navigates to /career */}
  <motion.div
    className="button-wrapper"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to="/careers" className="content-cta secondary">
      <Briefcase size={18} />
      Career
      <ChevronRight size={16} />
    </Link>
  </motion.div>
</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>




 {/* ================= OUR SERVICES ================= */}

<section
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
  Services & Training{" "}
  <span style={{ color: "#4F46E5" }}>Solutions</span>
</motion.h2>

<motion.p
 className="section-text"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  viewport={{ once: true }}
>
  Empowering businesses with innovative digital solutions while preparing
  students with industry-ready practical training.
</motion.p>

    <div className="card-grid">

      {/* CARD 1 */}
      <div className="flip-card">
        <div className="flip-card-inner">

          <div className="flip-card-front">
            <h3>Web Development</h3>
            <p>
              Responsive websites, React applications, Admin Panels &
              Enterprise Solutions.
            </p>
          </div>

          <div
            className="flip-card-back"
            style={{ backgroundImage: `url(${custom})` }}
          ></div>

        </div>
      </div>

      {/* CARD 2 */}
      <div className="flip-card">
        <div className="flip-card-inner">

          <div className="flip-card-front">
            <h3>Mobile Apps</h3>
            <p>
              Android & iOS apps with modern UI and scalable backend systems.
            </p>
          </div>

          <div
            className="flip-card-back"
            style={{ backgroundImage: `url(${expertiseBg})` }}
          ></div>

        </div>
      </div>

      {/* CARD 3 */}
      <div className="flip-card">
        <div className="flip-card-inner">

          <div className="flip-card-front">
            <h3>Digital Marketing</h3>
            <p>
              SEO, Social Media Marketing, Branding & Business Growth.
            </p>
          </div>

          <div
            className="flip-card-back"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>

        </div>
      </div>

      {/* CARD 4 */}
      <div className="flip-card">
        <div className="flip-card-inner">

          <div className="flip-card-front">
            <h3>Full Stack Training</h3>
            <p>
              MERN, Java Full Stack, Python, React & Node.js Industrial
              Training.
            </p>
          </div>

          <div
            className="flip-card-back"
            style={{ backgroundImage: `url(${custom})` }}
          ></div>

        </div>
      </div>

      {/* CARD 5 */}
      <div className="flip-card">
        <div className="flip-card-inner">

          <div className="flip-card-front">
            <h3>CAD & Mechanical</h3>
            <p>
              AutoCAD, SolidWorks, Primavera P6 & Industrial Projects.
            </p>
          </div>

          <div
            className="flip-card-back"
            style={{ backgroundImage: `url(${expertiseBg})` }}
          ></div>

        </div>
      </div>

      {/* CARD 6 */}
      <div className="flip-card">
        <div className="flip-card-inner">

          <div className="flip-card-front">
            <h3>Internship Programs</h3>
            <p>
              Live projects, mentorship, certifications & placement support.
            </p>
          </div>

          <div
            className="flip-card-back"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>

        </div>
      </div>

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
      url(${custom})
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

{/* next Section */}


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


 <Footer />

</>
    
  );

}

