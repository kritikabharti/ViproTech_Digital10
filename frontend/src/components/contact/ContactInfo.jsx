import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Office Address",
    value: "SCF-116 A, Second Floor, Phase 5, Industrial Area, Sector 58, Sahibzada Ajit Singh Nagar, Punjab 160055",
  },
  {
     icon: <FaPhoneAlt />,
    title: "Call Us",
    value: ["+91 8894110026"   ,
        "+91 8146759497"],
    type: "phone",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Address",
    value: "vprotechdigitalmohali@gmail.com",
  },

];




export default function ContactInfo() {
  return (
    <section style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p style={styles.tag}>CONTACT INFORMATION</p>

        <h2 style={styles.heading}>
          Let's Start a <span style={styles.highlight}>Conversation</span>
        </h2>

        <p style={styles.subHeading}>
          Reach out to us for software development, internships,
          digital marketing, AI solutions, or any business inquiry.
        </p>
      </motion.div>

      <div style={styles.grid}>
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0,
              delay: 0,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.04,
            }}
          >
            <div style={styles.icon}>{item.icon}</div>

            <h3 style={styles.title}>{item.title}</h3>

           <div style={styles.value}>
  {Array.isArray(item.value) ? (
    item.value.map((val, i) => {
      if (item.type === "phone") {
        return (
          <a
            key={i}
            href={`tel:${val}`}
            style={styles.link}
          >
            {val}
          </a>
        );
      }

      if (item.type === "email") {
        return (
          <a
            key={i}
            href={`mailto:${val}`}
            style={styles.link}
          >
            {val}
          </a>
        );
      }

      return <p key={i}>{val}</p>;
    })
  ) : (
    <p>{item.value}</p>
  )}
</div>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
}

const styles = {
  section: {
    padding: "110px 8%",
    background: "#0F172A",
    color: "#fff",
    textAlign: "center",
  },

  tag: {
    color: "#FFD700",
    letterSpacing: "4px",
    fontWeight: "700",
    marginBottom: "18px",
  },

  heading: {
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "20px",
  },

  highlight: {
    color: "#4F46E5",
  },

  subHeading: {
    color: "#CBD5E1",
    fontSize: "18px",
    lineHeight: "1.8",
    maxWidth: "760px",
    margin: "0 auto 70px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
    gap: "30px",
  },

  card: {
    background: "rgba(255,255,255,.06)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "24px",
    padding: "40px 30px",
    transition: ".35s",
    cursor: "pointer",
  },

  icon: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    margin: "0 auto 25px",
    background: "linear-gradient(135deg,#4F46E5,#6366F1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "28px",
    color: "#fff",
    boxShadow: "0 12px 30px rgba(79,70,229,.35)",
  },

  title: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "15px",
  },

  value: {
    color: "#CBD5E1",
    lineHeight: "1.7",
    fontSize: "17px",
  },

  link: {
  display: "block",
  color: "#CBD5E1",
  textDecoration: "none",
  margin: "6px 0",
  transition: ".2s",
},
};