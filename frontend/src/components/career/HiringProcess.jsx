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


const styles = {

section:{
padding:"50px 8%",
background:"#F9FAFB",
},

headingContainer:{
textAlign:"center",
marginBottom:"80px",
},

small:{
color:"#4F46E5",
fontWeight:"700",
letterSpacing:"3px",
marginBottom:"15px",
},

heading:{
fontSize:"54px",
fontWeight:"800",
marginBottom:"20px",
color:"#111827",
},

desc:{
fontSize:"18px",
color:"#6B7280",
maxWidth:"700px",
margin:"auto",
lineHeight:"1.8",
},

timeline:{
position:"relative",
maxWidth:"1100px",
margin:"80px auto 0",
},

centerLine:{
position:"absolute",
left:"50%",
top:0,
bottom:0,
width:"4px",
background:"#4F46E5",
transform:"translateX(-50%)",
},

row:{
display:"flex",
marginBottom:"70px",
position:"relative",
},

card:{
width:"43%",
background:"#fff",
padding:"35px",
borderRadius:"22px",
boxShadow:"0 15px 35px rgba(0,0,0,.08)",
border:"1px solid #E5E7EB",
position:"relative",
},

number:{
width:"70px",
height:"70px",
borderRadius:"50%",
background:"#4F46E5",
color:"#fff",
display:"flex",
justifyContent:"center",
alignItems:"center",
fontWeight:"700",
fontSize:"24px",
marginBottom:"20px",
},

title:{
fontSize:"28px",
fontWeight:"700",
marginBottom:"18px",
color:"#111827",
},

text:{
fontSize:"16px",
lineHeight:"1.8",
color:"#6B7280",
},
};