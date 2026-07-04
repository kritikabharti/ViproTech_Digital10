import React from "react";
import {motion} from "framer-motion";
import {
  FaCloudUploadAlt,
  FaUsers,
  FaAward,
} from "react-icons/fa";

import { HiArrowLongRight } from "react-icons/hi2";

import Footer from "../components/Footer";
import "../App.css";
import image from "../assets/viprotech.mp4";
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
{/* <section style={styles.contactBar}>
  <motion.div
    style={styles.track}
    animate={{
      x: ["100%", "-100%"],
    }}
    transition={{
      repeat: Infinity,
      duration: 50,
      ease: "linear",
    }}
  >
    <span style={styles.item}>📞 +91 88941 10026</span>
    <span style={styles.item}>📞 +91 81467 59797</span>
    <span style={styles.item}>✉️ Vprotechdigitalmohali@gmail.com</span>
    <span style={styles.item}>📍  SCF-116 A, Second Floor, Phase 5, Industrial Area, Sector 58, Sahibzada Ajit Singh Nagar, Punjab 160055</span>

  </motion.div>
</section> */}



<motion.section
  style={{
    ...styles.hero,
    backgroundImage: `url(${heroBg})`,
  }}
  initial={{ scale: 1 }}
  animate={{
    scale: [1, 1.08, 1],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  {/* Overlay */}
  <motion.div
    style={styles.overlay}
    animate={{
      opacity: [0.82, 0.9, 0.82],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <div style={styles.heroContent}>
    {/* LEFT SIDE */}
    <motion.div
      style={styles.left}
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        style={styles.heading}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.9 }}
      >
        Transform Your
        <br />
        <span style={{ color: "#4F46E5" }}>
          Digital Future
        </span>
      </motion.h1>

      <motion.p
        style={styles.subHeading}
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.9 }}
      >
        VProTech Digital empowers startups, enterprises and
        students with innovative software development,
        AI solutions, cloud technologies, web applications,
        mobile apps, digital marketing and industry-focused
        internship programs that drive measurable growth.
      </motion.p>

      <motion.div
        style={styles.buttons}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {/* Buttons */}
      </motion.div>
    </motion.div>

    {/* RIGHT SIDE IMAGE */}
   {/* <div style={styles.right}>
  <img
    src={heroImage}
    alt="Team"
    style={styles.image}
  />
</div> */}
  </div>
</motion.section>



 {/* ================= OUR SERVICES ================= */}

<section
  style={{
    ...styles.servicesSection,
    backgroundImage: `url(${bgaImge})`,
  }}
>
  <div style={styles.servicesOverlay}></div>

  <div style={styles.sectionContent}>
   <motion.h5
  style={styles.smallTitle}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  WHAT WE OFFER
</motion.h5>

<motion.h2
  style={styles.sectionTitle}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  viewport={{ once: true }}
>
  Services & Training{" "}
  <span style={{ color: "#4F46E5" }}>Solutions</span>
</motion.h2>

<motion.p
  style={styles.sectionText}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  viewport={{ once: true }}
>
  Empowering businesses with innovative digital solutions while preparing
  students with industry-ready practical training.
</motion.p>

    <div style={styles.cardGrid}>

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
  style={{
    ...styles.processSection,
    backgroundImage: `
      linear-gradient(
        rgba(60, 59, 75, 0.88),
        rgba(120,70,180,.88)
      ),
      url(${custom})
    `,
  }}
>

  <motion.h4
    style={styles.smallHeading}
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: .6 }}
  >
    WORKING PROCESS
  </motion.h4>

  <motion.h2
    style={styles.mainHeading}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: .2 }}
  >
    How Can You Start?
  </motion.h2>

  <div style={styles.processContainer}>

    {/* STEP 1 */}

    <motion.div
      style={styles.step}
      whileHover={{ y: -10 }}
      transition={{ duration: .3 }}
    >

      <div style={styles.iconCircle}>
        <FaCloudUploadAlt size={52} color="#111" />

        <div style={styles.number}>01</div>
      </div>

      <h3 style={styles.title}>
        Share Your Requirements
      </h3>

      <p style={styles.desc}>
        Tell us about your business goals, website requirements,
        application needs, or digital challenges.
      </p>

    </motion.div>

    {/* Arrow */}

    <HiArrowLongRight
      size={120}
      color="white"
      style={styles.arrow}
    />

    {/* STEP 2 */}

    <motion.div
      style={styles.step}
      whileHover={{ y: -10 }}
    >

      <div style={styles.iconCircle}>
        <FaUsers size={48} color="#111" />

        <div style={styles.number}>02</div>
      </div>

      <h3 style={styles.title}>
        Strategy & Planning
      </h3>

      <p style={styles.desc}>
        We prepare the perfect roadmap including design,
        development, timeline and execution plan.
      </p>

    </motion.div>

    {/* Arrow */}

    <HiArrowLongRight
      size={120}
      color="white"
      style={styles.arrow}
    />

    {/* STEP 3 */}

    <motion.div
      style={styles.step}
      whileHover={{ y: -10 }}
    >

      <div style={styles.iconCircle}>
        <FaAward size={48} color="#111" />

        <div style={styles.number}>03</div>
      </div>

      <h3 style={styles.title}>
        Design, Launch & Growth
      </h3>

      <p style={styles.desc}>
        Our experts build, test and launch your project while
        providing continuous support.
      </p>

    </motion.div>

  </div>

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
  position: "relative",
  minHeight: "100vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
},

overlay: {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(5,15,40,.82), rgba(20,40,90,.68), rgba(0,0,0,.55))",
},

heroContent: {
  width: "100%",
  maxWidth: "1600px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "40px",
  height: "100%",
  paddingLeft: "70px",
  paddingRight: "0", // No right padding
  position: "relative",
  zIndex: 2,
},

left: {
  flex: 1,
},

right: {
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "stretch",
  height: "100%",          // <-- Fill parent
},


image: {
  width: "100%",
  maxWidth: "780px",
  height: "100%",
  minHeight: "650px",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "30px 0 0 30px", // Rounded only on left
  boxShadow: "0 30px 80px rgba(0,0,0,.45)",
},

heading: {
  color: "#fff",
  fontSize: "68px",
  fontWeight: 800,
  lineHeight: 1.1,
  marginBottom: "25px",
},

subHeading: {
  color: "rgba(255,255,255,.88)",
  fontSize: "22px",
  lineHeight: 1.9,
  maxWidth: "700px",
},

buttons: {
  marginTop: "40px",
  display: "flex",
  gap: "20px",
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

servicesSection: {
  position: "relative",
  padding: "120px 8%",
  backgroundSize: "cover",
  backgroundPosition: "center",
},

servicesOverlay: {
  position: "absolute",
  inset: 0,
  background: "rgba(5,15,40,.82)",
},

sectionContent: {
  position: "relative",
  zIndex: 2,
},

smallTitle: {
  color: "#4F46E5",
  letterSpacing: "3px",
  fontWeight: 700,
  marginBottom: 15,
},

sectionTitle: {
  color: "#fff",
  fontSize: "52px",
  fontWeight: 800,
  marginBottom: 20,
},

sectionText: {
  color: "#d1d5db",
  fontSize: "18px",
  maxWidth: "700px",
  lineHeight: 1.8,
  marginBottom: "60px",
},

cardGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "35px",
},

processSection: {
  padding: "110px 8%",
  background:
    "linear-gradient(#0B4A92)",
  textAlign: "center",
  color: "#fff",
},

smallHeading: {
  fontSize: 24,
  fontWeight: 300,
  marginBottom: 15,
  letterSpacing: 2,
},

mainHeading: {
  fontSize: 64,
  fontWeight: 800,
  marginBottom: 90,
},

processContainer: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 20,
},

step: {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
},

iconCircle: {
  width: 150,
  height: 150,
  borderRadius: "50%",
  background: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxShadow: "12px 12px 0 rgba(255,255,255,.18)",
},

number: {
  position: "absolute",
  top: -8,
  right: -8,
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "#5f0bde",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: 24,
  border: "6px solid rgba(255,255,255,.15)",
},

title: {
  marginTop: 35,
  fontSize: 38,
  fontWeight: 700,
},

desc: {
  marginTop: 20,
  color: "#f4f4f4",
  fontSize: 24,
  lineHeight: 1.8,
  maxWidth: 420,
},

arrow: {
  marginTop: -80,
},


};