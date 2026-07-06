import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How can I apply for a job at VProTech Digital?",
    answer:
      "You can apply through our Careers page by selecting a suitable position and clicking the 'Apply Now' button. Our recruitment team will review your application and contact shortlisted candidates.",
  },
  {
    question: "Do you offer internship programs?",
    answer:
      "Yes. We offer industry-oriented internships in MERN Stack, AI, UI/UX Design, Digital Marketing, Cloud Computing, Cyber Security, and other emerging technologies.",
  },
  {
    question: "Can freshers apply for jobs?",
    answer:
      "Absolutely. We encourage talented fresh graduates and students with strong technical skills to apply for entry-level positions and internship opportunities.",
  },
  {
    question: "Is remote work available?",
    answer:
      "Depending on the role and project requirements, we offer on-site, hybrid, and remote work opportunities to provide flexibility for our employees.",
  },
  {
    question: "How long does the hiring process take?",
    answer:
      "The hiring process generally takes one to three weeks, depending on the position and interview stages.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section style={styles.section}>
      <motion.div
        style={styles.headingContainer}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p style={styles.smallHeading}>FREQUENTLY ASKED QUESTIONS</p>

        <h2 style={styles.heading}>
          Everything You Need to{" "}
          <span style={{ color: "#4F46E5" }}>Know</span>
        </h2>

        <p style={styles.description}>
          Have questions about careers, internships, or our recruitment
          process? Find answers to the most common questions below.
        </p>
      </motion.div>

      <div style={styles.container}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            viewport={{ once: true }}
          >
            <div
              style={styles.questionRow}
              onClick={() => toggle(index)}
            >
              <h3 style={styles.question}>
                {faq.question}
              </h3>

              <motion.div
                animate={{
                  rotate: active === index ? 45 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={styles.icon}
              >
                +
              </motion.div>
            </div>

            <AnimatePresence>
              {active === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.35 }}
                  style={{ overflow: "hidden" }}
                >
                  <p style={styles.answer}>
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {

section:{
padding:"50px 7%",
background:"#fff",
},

headingContainer:{
textAlign:"center",
marginBottom:"60px",
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
marginBottom:"18px",
},

description:{
maxWidth:"700px",
margin:"auto",
fontSize:"18px",
lineHeight:"1.8",
color:"#6B7280",
},

container:{
maxWidth:"900px",
margin:"60px auto 0",
},

card:{
background:"#F8FAFC",
borderRadius:"18px",
padding:"24px 30px",
marginBottom:"20px",
border:"1px solid #E5E7EB",
cursor:"pointer",
transition:"0.3s",
},

questionRow:{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
},

question:{
fontSize:"22px",
fontWeight:"600",
color:"#111827",
margin:0,
},

icon:{
fontSize:"34px",
fontWeight:"300",
color:"#4F46E5",
},

answer:{
marginTop:"18px",
fontSize:"17px",
lineHeight:"1.8",
color:"#6B7280",
},
};