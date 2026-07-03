import aboutBg from "../assets/about.jpg";
import { motion } from "framer-motion";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import officeImg from "../assets/vvv.png";
import modern from "../assets/modern.jpg";
import aiml from "../assets/ai&image.jpg";
import marketing from "../assets/markting.jpg";
import devops from "../assets/devops.jpg";
import cyber from "../assets/cyber.jpg";


export default function About() {
  return (
    <>
      <Navbar />

      <section style={styles.hero}>
        {/* Animated Background */}
        <motion.div
          style={{
            ...styles.bg,
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

        {/* Dark Overlay */}
        <div style={styles.overlay}></div>

        {/* Content */}
       
<motion.div
  style={styles.content}
  initial={{ opacity: 0, x: -120 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
>
  <motion.h1
    style={styles.title}
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    About <span style={{ color: "#4F46E5" }}>VProTech Digital</span>
  </motion.h1>

  <motion.p
    style={styles.text}
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
  >
    Empowering businesses and students with innovative software,
    website development, AI solutions, digital marketing, and
    industry-leading IT training.
  </motion.p>
</motion.div>
      </section>


<section style={styles.aboutSection}>
  <div style={styles.aboutContainer}>

    {/* Left Side */}
    <motion.div
      style={styles.leftContent}
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h5 style={styles.aboutSmall}>WHO WE ARE</h5>

      <h2 style={styles.aboutHeading}>
        Building the Future with
        <span style={{ color: "#4F46E5" }}> Innovation & Technology</span>
      </h2>

      <p style={styles.aboutText}>
        VProTech Digital is a technology-driven company dedicated to helping
        businesses and aspiring professionals succeed in today's digital world.
        We combine creativity, technical expertise, and strategic thinking to
        deliver solutions that solve real business challenges while creating
        meaningful digital experiences.
      </p>

      <p style={styles.aboutText}>
        Since our inception, we have focused on developing modern websites,
        enterprise software, mobile applications, cloud-based systems, AI
        solutions, and digital marketing strategies that help organizations
        increase productivity, improve customer engagement, and accelerate
        business growth.
      </p>

      <p style={styles.aboutText}>
        Alongside software development, we are committed to preparing students
        for successful careers through practical internship programs, live
        industry projects, and professional mentoring. Our learning approach
        bridges the gap between academic knowledge and real-world experience,
        enabling students to become confident technology professionals.
      </p>


    </motion.div>

    {/* Right Side */}
    <motion.div
      style={styles.rightImage}
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
     <motion.img
  src={officeImg}
  alt="VProTech Digital Office"
  style={styles.aboutImage}
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



<section

  style={{
    ...styles.whySection,
    background: "#fff",
  }}

>
  

  <div style={styles.whyContent}>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h5 style={styles.smallHeading}>WHY CHOOSE US</h5>

      <h2 style={styles.mainHeading}>
        Empowering Businesses Through
        <span style={{ color: "rgba(79,70,229,0.95)" }}> Technology & Innovation</span>
      </h2>

      <p style={styles.sectionDesc}>
        At VProTech Digital, we combine innovation, expertise, and cutting-edge
        technology to deliver software solutions that help businesses grow,
        automate operations, and stay ahead in today's digital world.
      </p>
    </motion.div>


    

    <div style={styles.featureGrid}>
<motion.div
  style={styles.featureCard}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  whileHover="hover"
>
  <img
    src={aboutBg}
    alt="Web Development"
    style={styles.cardImage}
  />

  <motion.div
    variants={{
      hover: {
        backgroundColor: "rgba(0,0,0,0.55)",
      },
    }}
    transition={{ duration: 0.4 }}
    style={styles.overlay}
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
      style={styles.cardContent}
    >
      <h3 style={styles.cardTitle}>Custom Software & Development</h3>

      <p style={styles.cardText}>
       We build secure, scalable custom software solutions designed
        to streamline your business operations and drive digital growth.
      </p>
    </motion.div>
  </motion.div>
</motion.div>







<motion.div
  style={styles.featureCard}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  whileHover="hover"
>
  <img
    src={modern}
    alt="Web Development"
    style={styles.cardImage}
  />

  <motion.div
    variants={{
      hover: {
        backgroundColor: "rgba(0,0,0,0.55)",
      },
    }}
    transition={{ duration: 0.4 }}
    style={styles.overlay}
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
      style={styles.cardContent}
    >
      <h3 style={styles.cardTitle}>Modern Web & Mobile Apps</h3>

      <p style={styles.cardText}>
        We create responsive websites and high-performance mobile applications
        using the latest technologies for exceptional user experiences.
      </p>
    </motion.div>
  </motion.div>
</motion.div>





  <motion.div
  style={styles.featureCard}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  whileHover="hover"
>
  <img
    src={aiml}
    alt="Web Development"
    style={styles.cardImage}
  />

  <motion.div
    variants={{
      hover: {
        backgroundColor: "rgba(0,0,0,0.55)",
      },
    }}
    transition={{ duration: 0.4 }}
    style={styles.overlay}
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
      style={styles.cardContent}
    >
      <h3 style={styles.cardTitle}>Internship & Training</h3>

      <p style={styles.cardText}>
       We provide custom software development services alongside industry-aligned
        internship and professional training programs.
      </p>
    </motion.div>
  </motion.div>
</motion.div>





  <motion.div
  style={styles.featureCard}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  whileHover="hover"
>
  <img
    src={marketing}
    alt="Web Development"
    style={styles.cardImage}
  />

  <motion.div
    variants={{
      hover: {
        backgroundColor: "rgba(0,0,0,0.55)",
      },
    }}
    transition={{ duration: 0.4 }}
    style={styles.overlay}
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
      style={styles.cardContent}
    >
      <h3 style={styles.cardTitle}>AI & Digital Marketing</h3>

      <p style={styles.cardText}>
       From AI-powered automation to SEO, social media marketing and branding,
      we help businesses achieve sustainable digital growth.
      </p>
    </motion.div>
  </motion.div>
</motion.div>






  
  <motion.div
  style={styles.featureCard}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  whileHover="hover"
>
  <img
    src={devops}
    alt="Web Development"
    style={styles.cardImage}
  />

  <motion.div
    variants={{
      hover: {
        backgroundColor: "rgba(0,0,0,0.55)",
      },
    }}
    transition={{ duration: 0.4 }}
    style={styles.overlay}
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
      style={styles.cardContent}
    >
      <h3 style={styles.cardTitle}>Cloud & DevOps Solutions</h3>

      <p style={styles.cardText}>
       We implement secure cloud infrastructure, CI/CD pipelines, and DevOps
    practices that improve deployment speed, reliability, and business
    scalability.
      </p>
    </motion.div>
  </motion.div>
</motion.div>



<motion.div
  style={styles.featureCard}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  whileHover="hover"
>
  <img
    src={cyber}
    alt="Web Development"
    style={styles.cardImage}
  />

  <motion.div
    variants={{
      hover: {
        backgroundColor: "rgba(0,0,0,0.55)",
      },
    }}
    transition={{ duration: 0.4 }}
    style={styles.overlay}
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
      style={styles.cardContent}
    >
      <h3 style={styles.cardTitle}>Cyber Security Services</h3>

      <p style={styles.cardText}>
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



      <Footer />
    </>
  );
}



const styles = {
  hero: {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  bg: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -2,
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,.60)",
    zIndex: -1,
  },

content: {
  position: "absolute",
  left: "6%",
  top: "25%", // Move content towards the top
  transform: "translateY(0)",
  maxWidth: "650px",
  color: "#fff",
  textAlign: "left",
  zIndex: 2,
},

  smallTitle: {
    color: "#FFD700",
    letterSpacing: "6px",
    marginBottom: "20px",
    fontWeight: 600,
  },

  title: {
    fontSize: "72px",
    fontWeight: "800",
    marginBottom: "25px",
    lineHeight: "1.1",
  },

  text: {
    fontSize: "22px",
    lineHeight: "1.5",
    color: "#ddd",
    marginBottom: "40px",
  },

  button: {
    background: "#4F46E5",
    color: "#fff",
    border: "none",
    borderRadius: "40px",
    padding: "16px 42px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    transition: ".3s",
  },


  aboutSection: {
  padding: "90px 8%",
  background: "#fff",
},

aboutContainer: {
  maxWidth: "1400px",
  height:"600px",
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "1.2fr 1fr",
  gap: "70px",
  alignItems: "center",
},

leftContent: {
  display: "flex",
  flexDirection: "column",
},

aboutSmall: {
  color: "#4F46E5",
  fontSize: "20px",
  fontWeight: "700",
  letterSpacing: "3px",
  marginBottom: "15px",
},

aboutHeading: {
  fontSize: "48px",
  color: "#0F172A",
  lineHeight: "1.2",
  marginBottom: "30px",
},

aboutText: {
  fontSize: "18px",
  color: "#555",
  lineHeight: "1.9",
  marginBottom: "24px",
},

aboutBtn: {
  width: "180px",
  padding: "16px 30px",
  border: "none",
  borderRadius: "40px",
  background: "#4F46E5",
  color: "#fff",
  fontWeight: "600",
  fontSize: "16px",
  cursor: "pointer",
  transition: ".3s",
},

rightImage: {
  display: "flex",
  justifyContent: "center",
},

aboutImage: {
  width: "100%",
   height: "600px", 
  maxWidth: "600px",
  borderRadius: "20px",
  objectFit: "cover",
  boxShadow: "0 25px 60px rgba(0,0,0,.15)",
},

whySection: {
  padding: "100px 8%",
  background: "#fff",
},

whyOverlay: {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(6,18,40,0.82)",
  zIndex: 1,
},

whyContent: {
  position: "relative",
  zIndex: 2,
},

smallHeading: {
  color: "#4F46E5",
  textAlign: "center",
  letterSpacing: "3px",
  fontSize:"20px",
  fontWeight: "700",
  marginBottom: "15px",
},

mainHeading: {
  color: "#121010",
  textAlign: "center",
  fontSize: "48px",
  lineHeight: "1.2",
  marginBottom: "25px",
},

sectionDesc: {
  color: "#121313",
  textAlign: "center",
  maxWidth: "850px",
  margin: "0 auto 70px",
  fontSize: "18px",
  lineHeight: "1.9",
},

featureGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
  marginTop: "60px",
},

cardImage: {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "14px",
  marginBottom: "20px",
  transition: "0.4s ease",
},

featureCard: {
  position: "relative",
  overflow: "hidden",
  borderRadius: "18px",
  cursor: "pointer",
  height: "360px",
},

cardImage: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
},

overlay: {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "flex-end",
  padding: "30px",
  transition: "0.4s",
},

cardContent: {
  color: "#fff",
},

cardTitle: {
  fontSize: "30px",
  fontWeight: "700",
  marginBottom: "15px",
},

cardText: {
  fontSize: "17px",
  lineHeight: "1.7",
},

};