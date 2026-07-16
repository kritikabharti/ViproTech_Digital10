import aboutBg from "../assets/about.jpg";
import { motion } from "framer-motion";
import React from "react";
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

export default function About() {

  
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

     <section className="about-hero">
  {/* Animated Background */}
  <motion.div
    className="about-bg"
    style={{
      backgroundImage: `url(${aboutBg})`,
    }}
    animate={{
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Overlay */}
  <div className="about-overlay"></div>

  {/* Content */}
  <motion.div
    className="about-content"
    initial={{ opacity: 0, x: -120 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 1,
      ease: "easeOut",
    }}
  >
    <motion.h1
      className="about-title"
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
      }}
    >
      About <span>VProTech Digital</span>
    </motion.h1>

    <motion.p
      className="about-description"
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
      }}
    >
      Empowering businesses and students with innovative software,
      website development, AI solutions, digital marketing, and
      industry-leading IT training.
    </motion.p>
  </motion.div>
</section>





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


