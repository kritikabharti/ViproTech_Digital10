import React from "react";
import { motion } from "framer-motion";
import "./HiringProcess.css"; // ✅ Import CSS file

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
    <section className="hiring-process-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="hiring-process-heading-container"
      >
        <p className="hiring-process-small">HIRING PROCESS</p>
        <h2 className="hiring-process-heading">Our Recruitment Process</h2>
        <p className="hiring-process-desc">
          A transparent hiring process focused on finding passionate,
          innovative and talented professionals.
        </p>
      </motion.div>

      <div className="hiring-process-timeline">
        <div className="hiring-process-center-line"></div>

        {process.map((step, index) => (
          <motion.div
            key={index}
            className={`hiring-process-row ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <div className="hiring-process-card">
              <div className="hiring-process-number">{step.number}</div>
              <h3 className="hiring-process-title">{step.title}</h3>
              <p className="hiring-process-text">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}