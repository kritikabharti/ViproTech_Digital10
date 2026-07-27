import React from 'react';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaUsers, FaAward } from 'react-icons/fa';
import { HiArrowLongRight } from 'react-icons/hi2';

export default function ProcessSection() {
  const steps = [
    { 
      icon: FaCloudUploadAlt, 
      title: "Share Your Requirements", 
      desc: "Tell us about your business goals, website requirements, application needs, or digital challenges." 
    },
    { 
      icon: FaUsers, 
      title: "Strategy & Planning", 
      desc: "We prepare the perfect roadmap including design, development, timeline and execution plan." 
    },
    { 
      icon: FaAward, 
      title: "Design, Launch & Growth", 
      desc: "Our experts build, test and launch your project while providing continuous support." 
    }
  ];

  return (
    <section className="process-section">
      <motion.h4
        className="small-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        WORKING PROCESS
      </motion.h4>

      <motion.h2
        className="main-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        How Can You Start?
      </motion.h2>

      <div className="process-container">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="step"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon-circle">
                <step.icon size={52} color="#111" />
                <div className="step-number">0{index + 1}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </motion.div>
            {index < steps.length - 1 && (
              <HiArrowLongRight size={120} color="white" className="process-arrow" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}