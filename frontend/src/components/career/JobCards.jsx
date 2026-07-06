import React from "react";
import { motion } from "framer-motion";

const jobs = [
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Noida, India",
    experience: "1 - 3 Years",
    description:
      "Build responsive and modern web applications using React, JavaScript, and modern frontend technologies.",
  },
  {
    title: "Backend Developer",
    type: "Full Time",
    location: "Noida, India",
    experience: "2 - 4 Years",
    description:
      "Develop scalable APIs and backend services using Node.js, Express, MongoDB, and cloud technologies.",
  },
  {
    title: "UI / UX Designer",
    type: "Internship",
    location: "Hybrid",
    experience: "Freshers",
    description:
      "Design engaging user experiences, wireframes, and modern interfaces for web and mobile applications.",
  },
  {
    title: "Digital Marketing Executive",
    type: "Full Time",
    location: "Remote",
    experience: "1+ Years",
    description:
      "Drive business growth through SEO, social media marketing, paid campaigns, and content strategies.",
  },
];

export default function JobCards() {
  return (
    <section style={styles.section}>
      <motion.div
        style={styles.headingContainer}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p style={styles.smallHeading}>OPEN POSITIONS</p>

        <h2 style={styles.heading}>
          Explore Career Opportunities at{" "}
          <span style={{ color: "#4F46E5" }}>VProTech Digital</span>
        </h2>

        <p style={styles.description}>
          Join our growing team of innovators and work on impactful projects
          using modern technologies while advancing your professional career.
        </p>
      </motion.div>

      <div style={styles.grid}>
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
          >
            <div style={styles.badge}>
              {job.type}
            </div>

            <h3 style={styles.jobTitle}>{job.title}</h3>

            <div style={styles.info}>
              <span>📍 {job.location}</span>
              <span>💼 {job.experience}</span>
            </div>

            <p style={styles.jobDescription}>
              {job.description}
            </p>

            <button style={styles.button}>
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {

section:{
padding:"110px 7%",
background:"#fff",
},

headingContainer:{
textAlign:"center",
marginBottom:"70px",
},

smallHeading:{
color:"#4F46E5",
fontWeight:"700",
letterSpacing:"3px",
marginBottom:"15px",
},

heading:{
fontSize:"52px",
fontWeight:"800",
color:"#111827",
marginBottom:"20px",
},

description:{
maxWidth:"760px",
margin:"auto",
fontSize:"18px",
lineHeight:"1.8",
color:"#6B7280",
},

grid:{
display:"grid",
gridTemplateColumns:"repeat(2,1fr)",
gap:"35px",
},

card:{
background:"rgba(255,255,255,.85)",
backdropFilter:"blur(12px)",
border:"1px solid #E5E7EB",
borderRadius:"24px",
padding:"35px",
boxShadow:"0 15px 40px rgba(0,0,0,.08)",
transition:".35s",
},

badge:{
display:"inline-block",
padding:"8px 18px",
background:"#EEF2FF",
color:"#4F46E5",
borderRadius:"30px",
fontWeight:"600",
fontSize:"14px",
marginBottom:"20px",
},

jobTitle:{
fontSize:"28px",
fontWeight:"700",
color:"#111827",
marginBottom:"20px",
},

info:{
display:"flex",
justifyContent:"space-between",
fontSize:"15px",
color:"#6B7280",
marginBottom:"20px",
},

jobDescription:{
fontSize:"16px",
lineHeight:"1.8",
color:"#6B7280",
marginBottom:"30px",
},

button:{
padding:"14px 32px",
background:"#4F46E5",
color:"#fff",
border:"none",
borderRadius:"40px",
fontSize:"16px",
fontWeight:"600",
cursor:"pointer",
transition:".3s",
},

};