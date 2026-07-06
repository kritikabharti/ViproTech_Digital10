import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import careerBg from "../../assets/itand custom.jpg";
import teamImage from "../../assets/career.jpg";

export default function CareerHero() {
  return (
    <section
      style={{
        ...styles.hero,
        backgroundImage: `url(${careerBg})`,
      }}
    >
      <div style={styles.overlay}></div>

      <div style={styles.container}>

        {/* LEFT */}

        <motion.div
          style={styles.left}
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            style={styles.smallHeading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
          >
            JOIN OUR TEAM
          </motion.p>

          <motion.h1
            style={styles.heading}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: .4,
              duration: .9,
            }}
          >
            Build Your Career
            <br />

            With
            <span style={styles.highlight}>
              {" "}VProTech Digital
            </span>
          </motion.h1>

          <motion.p
            style={styles.description}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: .8,
              duration: .9,
            }}
          >
            Join a passionate team of developers,
            designers, marketers and innovators who
            build cutting-edge digital solutions,
            work with modern technologies and grow
            together every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,
            }}
          >
        
          </motion.div>

        </motion.div>

       

      </div>
    </section>
  );
}

const styles = {

hero:{
height:"120vh",
backgroundSize:"cover",
backgroundPosition:"center",
position:"relative",
display:"flex",
alignItems:"center",
},

overlay:{
position:"absolute",
inset:0,
background:"rgba(0,0,0,.68)",
},

container: {
  width: "100%",
  height: "90%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 40px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  position: "relative",
  zIndex: 2,
},

hero: {
  height: "90vh", // Change from 120vh
  minHeight: "500px", // Optional: prevents it from becoming too small
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  display: "flex",
  alignItems: "center",
},

left: {
  width: "100%",
  maxWidth: "950px",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
},

smallHeading: {
  color: "#FFD700",
  letterSpacing: "4px",
  fontWeight: "700",
  marginBottom: "18px",
  textAlign: "center",
},


heading: {
  fontSize: "82px",
  fontWeight: "500",
  lineHeight: "1.1",
  marginBottom: "28px",
  textAlign: "center",
},

highlight:{
color:"#4F46E5",
},

description: {
  fontSize: "22px",
  lineHeight: "1.9",
  color: "#E5E7EB",
  maxWidth: "820px",
  textAlign: "center",
  marginBottom: "60px",
},

button:{
padding:"17px 38px",
borderRadius:"50px",
border:"none",
background:"#4F46E5",
color:"#fff",
fontWeight:"700",
fontSize:"17px",
cursor:"pointer",
transition:".35s",
},

right:{
flex:1,
display:"flex",
justifyContent:"flex-end",
},

image:{
width:"100%",
maxWidth:"700px",
objectFit:"contain",
},
};