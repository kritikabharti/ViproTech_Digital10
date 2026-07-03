import React from "react";
import {motion} from "framer-motion";
import Footer from "../components/Footer";
import "../App.css";
import image from "../assets/viprotech.mp4";
import bgaImge from "../assets/model.jpg";
import expertiseBg from "../assets/digital.jpg";
import custom from "../assets/itand custom.jpg";

import sectionBg from "../assets/imagee.jpg";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";




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
    <div style={styles.home}>

        {/* Video Background */}
      <video autoPlay loop muted playsInline style={styles.video}>
        <source src={image} type="video/mp4" />
      </video>
    </div>



{/* Sliding Contact Bar */}
<section style={styles.contactBar}>
  <motion.div
    style={styles.track}
    animate={{
      x: ["100%", "-100%"],
    }}
    transition={{
      repeat: Infinity,
      duration: 20,
      ease: "linear",
    }}
  >
    <span style={styles.item}>📞 +91 88941 10026</span>
    <span style={styles.item}>📞 +91 81467 59797</span>
    <span style={styles.item}>✉️ Vprotechdigitalmohali@gmail.com</span>
    <span style={styles.item}>📍  SCF-116 A, Second Floor, Phase 5, Industrial Area, Sector 58, Sahibzada Ajit Singh Nagar, Punjab 160055</span>

  </motion.div>
</section>



<motion.section
  style={styles.hero}
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <motion.h1
    style={styles.heading}
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8 }}
  >
    Welcome to VProTech Digital
  </motion.h1>

  <motion.p
    style={styles.subHeading}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.7, duration: 0.8 }}
  >
    We provide innovative digital solutions to help your business thrive in the
    modern world.
  </motion.p>

  <motion.div
    style={styles.buttonContainer}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1, duration: 0.6 }}
  >
    <motion.button
      style={styles.secondaryBtn}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      Learn More
    </motion.button>
  </motion.div>
</motion.section>





  {/* Next Section */}
     <section style={styles.section}
      style={{
    ...styles.section,
    backgroundImage: `url(${bgaImge})`,
  }}

     >

      
  <motion.div
  style={{
    ...styles.card,
    backgroundImage: `url(${custom})`,
  }}
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  whileHover={{
    scale: 1.04,
    y: -10,
    boxShadow: "0 20px 40px rgba(18,62,158,0.4)",
    transition: { duration: 0.3 },
  }}

>
  <motion.div
    style={styles.overlay}
    whileHover={{
      backgroundColor: "rgba(18, 62, 158, 0.75)", // Blue overlay
    }}
    transition={{ duration: 0.3 }}
  />

  <div style={styles.content}>
    <h2 style={styles.title}>IT & Digital Solutions</h2>

    <p style={styles.text}>
     VproTech Digital provides end-to-end IT and digital solutions tailored for startups and small-to-medium enterprises. Their core expertise includes custom software, web development, mobile applications, and strategic digital marketing like SEO and SMM.
    </p>
  </div>
</motion.div>





  <motion.div
  style={{
    ...styles.card,
    backgroundImage: `url(${expertiseBg})`,
  }}
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  whileHover={{
    scale: 1.04,
    y: -10,
    boxShadow: "0 20px 40px rgba(18,62,158,0.4)",
    transition: { duration: 0.3 },
  }}

>
  <motion.div
    style={styles.overlay}
    whileHover={{
      backgroundColor: "rgba(18, 62, 158, 0.75)", // Blue overlay
    }}
    transition={{ duration: 0.3 }}
  />

  <div style={styles.content}>
    <h2 style={styles.title}>Industrial & Corporate Training</h2>

    <p style={styles.text}>
      VproTech Digital is highly regarded for its intensive 6-week and 6-month hands-on industrial training programs tailored for CSE, IT, and mechanical engineering students. Their comprehensive curriculum spans core domains like full-stack development, Python, Java, CAD design software like AutoCAD and SolidWorks, and Oracle’s Primavera P6 project management.
    </p>

  </div>
</motion.div>

</section>


{/* next Section */}


<section
  style={{
    ...styles.gallerySection,
    backgroundImage: `url(${sectionBg})`,
  }}
>
  <div style={styles.galleryOverlay}></div>

  <div style={styles.galleryContent}>
    <h2 style={styles.galleryTitle}>Our Journey</h2>

    <motion.div
      style={styles.slider}
      animate={{
        x: ["0%", "-50%"],
      }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
    >
      {[img1, img2, img3, img4, img1, img2, img3, img4].map((img, index) => (
        <div key={index} style={styles.imageCard}>
          <img src={img} alt="" style={styles.image} />
        </div>
      ))}
    </motion.div>
  
  </div>
</section>

 <Footer />

</>
    
  );

}

const styles = {
  home: {
    width: "100%",
    marginTop: "70px",
    minHeight: "100vh",
    home: {
  position: "relative",
  overflow: "hidden",
  zIndex: 0,
}
  },

  

  video: {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "120%",
  objectFit: "cover",
  zIndex: -1,
},

  hero: {
    maxWidth: "1200px",
    maxHeight: "70vh",
    margin: "0 auto",
    padding: "120px 20px",
    textAlign: "center",
  },

  heading: {
    fontSize: "56px",
    fontWeight: "700",
    color: "#1E293B",
    lineHeight: "1.2",
    marginBottom: "20px",
  },

  subHeading: {
    fontSize: "18px",
    color: "#0d2a52",
    maxWidth: "700px",
    margin: "0 auto 40px",
    lineHeight: "1.7",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "#123e9e",
    color: "#fff",
    border: "none",
    padding: "14px 32px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },

  secondaryBtn: {
    background: "transparent",
    color: "#4F46E5",
    border: "2px solid #4F46E5",
    padding: "14px 32px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },

   /* Next Section */
  nextSection: {
    position: "relative",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  nextOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
  },

  content: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    color: "#fff",
    maxWidth: "900px",
    padding: "20px",
  },

  sectionTitle: {
    fontSize: "48px",
    marginBottom: "20px",
    fontWeight: "700",
  },

  sectionText: {
    fontSize: "18px",
    lineHeight: "1.8",
  },


  section: {
  display: "flex",
  gap: "30px",
  padding: "80px 60px",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",

  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
},

  card: {
    flex: "1 1 500px",
    minHeight: "650px",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "12px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
   transition: "all 0.3s ease",
   },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(25,35,45,.70)",
  },

  lightOverlay: {
    position: "absolute",
    inset: 0,
      background: "rgba(25,35,45,.70)",
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "800px",
    textAlign: "center",
    padding: "50px",
  },

  title: {
    fontSize: "52px",
    color: "#fff",
    marginBottom: "30px",
    fontWeight: "700",
  },

  text: {
    color: "#fff",
    fontSize: "22px",
    lineHeight: "1.5",
    marginBottom: "45px",
  },

  pinkBtn: {
    background: "#ff6b81",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    fontSize: "18px",
    fontWeight: "600",
    borderRadius: "2px",
    cursor: "pointer",
  },
  
  blueBtn: {
    background: "#0B4A92",
    color: "#fff",
    border: "none",
    padding: "16px 45px",
    fontSize: "18px",
    fontWeight: "700",
    borderRadius: "5px",
    cursor: "pointer",
  },


contactBar: {
  width: "200%",
  background: "#0B4A92",
  color: "#fff",
  padding: "18px 0",
  overflow: "hidden",
},

marquee: {
  overflow: "hidden",
  whiteSpace: "nowrap",
},

track: {
  display: "inline-flex",
  alignItems: "center",
  animation: "scroll 30s linear infinite",
},

item: {
  marginRight: "80px",
  fontSize: "18px",
  fontWeight: "600",
},


gallerySection: {
  position: "relative",
  padding: "100px 0",
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
},

galleryOverlay: {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.65)",
},

galleryContent: {
  position: "relative",
  zIndex: 2,
},

galleryTitle: {
  color: "#fff",
  fontSize: "48px",
  textAlign: "center",
  marginBottom: "60px",
  fontWeight: "700",
},

slider: {
  display: "flex",
  gap: "30px",
  width: "max-content",
  paddingLeft: "40px",
},

imageCard: {
  width: "350px",
  height: "450px",
  borderRadius: "18px",
  overflow: "hidden",
  flexShrink: 0,
  boxShadow: "0 15px 40px rgba(0,0,0,.35)",
  cursor: "pointer",
  transition: ".4s",
},

image: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: ".5s",
},



};