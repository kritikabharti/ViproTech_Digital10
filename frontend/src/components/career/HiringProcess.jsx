import React from "react";
import { motion } from "framer-motion";

const process = [
  {
    number: "01",
    title: "Apply Online",
    description:
      "Submit your application through our career portal with your latest resume and portfolio.",
  },
  {
    number: "02",
    title: "Resume Screening",
    description:
      "Our recruitment team carefully evaluates your skills, experience, and qualifications.",
  },
  {
    number: "03",
    title: "Technical Interview",
    description:
      "Showcase your technical knowledge, coding ability, and problem-solving skills.",
  },
  {
    number: "04",
    title: "HR Interview",
    description:
      "Discuss your goals, culture fit, communication skills, and career aspirations.",
  },
  {
    number: "05",
    title: "Offer & Onboarding",
    description:
      "Receive your offer letter and begin your journey with VProTech Digital.",
  },
];

export default function HiringProcess() {
  return (
    <section style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
        style={styles.headingContainer}
      >
        <p style={styles.small}>HIRING PROCESS</p>

        <h2 style={styles.heading}>
          Our Recruitment Process
        </h2>

        <p style={styles.desc}>
          A transparent hiring process focused on finding passionate,
          innovative and talented professionals.
        </p>
      </motion.div>

      <div style={styles.timeline}>

        <div style={styles.centerLine}></div>

        {process.map((step, index) => (
          <motion.div
            key={index}
            style={{
              ...styles.row,
              justifyContent:
                index % 2 === 0 ? "flex-start" : "flex-end",
            }}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .7,
              delay: index * .15,
            }}
            viewport={{ once: true }}
          >
            <div style={styles.card}>

              <div style={styles.number}>
                {step.number}
              </div>

              <h3 style={styles.title}>
                {step.title}
              </h3>

              <p style={styles.text}>
                {step.description}
              </p>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

const isMobile = window.innerWidth <= 768;

const styles = {

section:{
  padding: isMobile ? "70px 20px" : "90px 8%",
  background:"#F9FAFB",
},

headingContainer:{
  textAlign:"center",
  marginBottom:isMobile ? "50px" : "80px",
},

small:{
  color:"#4F46E5",
  fontWeight:"700",
  letterSpacing:"3px",
  marginBottom:"15px",
  fontSize:isMobile ? "13px" : "15px",
},

heading:{
  fontSize:isMobile ? "34px" : "54px",
  fontWeight:"800",
  marginBottom:"20px",
  color:"#111827",
  lineHeight:1.2,
},

desc:{
  fontSize:isMobile ? "16px" : "18px",
  color:"#6B7280",
  maxWidth:"700px",
  margin:"auto",
  lineHeight:"1.8",
},

timeline:{
  position:"relative",
  maxWidth:"1100px",
  margin:"60px auto 0",
},

centerLine:{
  position:"absolute",
  left:isMobile ? "30px" : "50%",
  top:0,
  bottom:0,
  width:"4px",
  background:"#4F46E5",
  transform:isMobile ? "none" : "translateX(-50%)",
},

row:{
  display:"flex",
  justifyContent:isMobile ? "flex-start" : undefined,
  marginBottom:isMobile ? "35px" : "70px",
  position:"relative",
},

card:{
  width:isMobile ? "calc(100% - 60px)" : "43%",
  marginLeft:isMobile ? "60px" : "0",
  background:"#fff",
  padding:isMobile ? "22px" : "35px",
  borderRadius:"20px",
  boxShadow:"0 15px 35px rgba(0,0,0,.08)",
  border:"1px solid #E5E7EB",
},

number:{
  width:isMobile ? "55px" : "70px",
  height:isMobile ? "55px" : "70px",
  borderRadius:"50%",
  background:"#4F46E5",
  color:"#fff",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  fontWeight:"700",
  fontSize:isMobile ? "18px" : "24px",
  marginBottom:"18px",

  position:isMobile ? "absolute" : "relative",
  left:isMobile ? "-88px" : "0",
  top:isMobile ? "18px" : "0",
},

title:{
  fontSize:isMobile ? "22px" : "28px",
  fontWeight:"700",
  marginBottom:"15px",
  color:"#111827",
},

text:{
  fontSize:isMobile ? "15px" : "16px",
  lineHeight:"1.8",
  color:"#6B7280",
},

};