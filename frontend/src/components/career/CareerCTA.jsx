import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CareerCTA() {
  return (
    <section style={styles.section}>
      {/* Background Blur Circles */}
      <div style={styles.circle1}></div>
      <div style={styles.circle2}></div>

      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p
          style={styles.smallHeading}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          START YOUR JOURNEY
        </motion.p>

        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Build Your
          <br />
          Future With
          <span style={{ color: "#FFD700" }}>
            {" "}VProTech Digital?
          </span>
        </motion.h2>

        <motion.p
          style={styles.description}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          Join a passionate team of innovators, developers, designers,
          and technology enthusiasts. Whether you're an experienced
          professional or a student beginning your career, exciting
          opportunities await you at VProTech Digital.
        </motion.p>

        <motion.div
          style={styles.buttons}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </motion.div>
    </section>
  );
}

const styles = {

section:{
position:"relative",
overflow:"hidden",
padding:"50px 7%",
background:"linear-gradient(135deg,#312E81,#4338CA,#6366F1)",
textAlign:"center",
},

container:{
maxWidth:"900px",
margin:"auto",
position:"relative",
zIndex:2,
},

smallHeading:{
letterSpacing:"3px",
fontWeight:"700",
color:"#FFD700",
marginBottom:"20px",
},

heading:{
fontSize:"60px",
fontWeight:"800",
lineHeight:"1.2",
color:"#fff",
marginBottom:"30px",
},

description:{
fontSize:"20px",
lineHeight:"1.9",
color:"rgba(255,255,255,.9)",
marginBottom:"50px",
},

buttons:{
display:"flex",
justifyContent:"center",
gap:"25px",
flexWrap:"wrap",
},

primaryBtn:{
padding:"18px 42px",
border:"none",
borderRadius:"50px",
background:"#FFD700",
color:"#111827",
fontSize:"17px",
fontWeight:"700",
cursor:"pointer",
transition:".35s",
},

secondaryBtn:{
padding:"18px 42px",
borderRadius:"50px",
border:"2px solid rgba(255,255,255,.5)",
background:"transparent",
color:"#fff",
fontSize:"17px",
fontWeight:"700",
cursor:"pointer",
transition:".35s",
},

circle1:{
position:"absolute",
width:"350px",
height:"350px",
borderRadius:"50%",
background:"rgba(255,255,255,.08)",
top:"-120px",
left:"-100px",
filter:"blur(20px)",
},

circle2:{
position:"absolute",
width:"450px",
height:"450px",
borderRadius:"50%",
background:"rgba(255,215,0,.08)",
bottom:"-180px",
right:"-120px",
filter:"blur(20px)",
},

};