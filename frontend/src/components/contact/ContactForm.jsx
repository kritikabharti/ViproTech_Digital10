
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { sendContactMessage } from "../../services/contactService";
import officeImage from "../../assets/vvv.png";

export default function ContactForm() {

const [loading, setLoading] = useState(false);

const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);


  const [formData, setFormData] = useState({
  fullname: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    await sendContactMessage(formData);

    alert("Message sent successfully!");

    setFormData({
      fullname: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    alert(error.response?.data?.message || "Something went wrong.");
  } finally {
    setLoading(false);
  }
};


const styles = {
  section: {
    background: "#081120",
    padding: isMobile ? "70px 20px" : "120px 8%",
  },

  container: {
  maxWidth: "1350px",
  margin: "auto",
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
  gap: isMobile ? "40px" : "70px",
  alignItems: "center",
},

left: {
  textAlign: isMobile ? "center" : "left",
},

right: {
  display: "flex",
  justifyContent: "center",
  
},

  tag: {
  color: "#FFD700",
  letterSpacing: "3px",
  fontWeight: "700",
  marginBottom: "15px",
  fontSize: isMobile ? "13px" : "15px",
  textAlign: isMobile ? "center" : "left",
},

  heading: {
    color: "#fff",
    fontSize: isMobile ? "34px" : "50px",
    fontWeight: "800",
    marginBottom: "20px",
    lineHeight: "1.2",
  },

  highlight: {
    color: "#4F46E5",
  },

  description: {
  color: "#CBD5E1",
  lineHeight: "1.8",
  marginBottom: "35px",
  fontSize: isMobile ? "16px" : "18px",
  textAlign: isMobile ? "center" : "left",
},

  form: {
    display: "flex",
    flexDirection: "column",
    gap: isMobile ? "15px" : "18px",
  },

  input: {
    width: "100%",
    padding: isMobile ? "15px" : "18px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.05)",
    color: "#fff",
    fontSize: isMobile ? "15px" : "16px",
    outline: "none",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    padding: isMobile ? "15px" : "18px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.05)",
    color: "#fff",
    fontSize: isMobile ? "15px" : "16px",
    outline: "none",
    resize: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    marginTop: "10px",
    padding: isMobile ? "16px" : "18px",
    border: "none",
    borderRadius: "50px",
    background: "linear-gradient(135deg,#4F46E5,#6366F1)",
    color: "#fff",
    fontWeight: "700",
    fontSize: isMobile ? "16px" : "17px",
    cursor: "pointer",
    boxShadow: "0 12px 30px rgba(79,70,229,.35)",
  },

 image: {
  width: "100%",
  maxWidth: isMobile ? "320px" : "600px",
  height: isMobile ? "350px" : "650px",
  objectFit: "cover",
  borderRadius: "25px",
  boxShadow: "0 25px 60px rgba(0,0,0,.35)",
},
};


  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* LEFT - FORM */}
        <motion.div
          style={styles.left}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p style={styles.tag}>SEND US A MESSAGE</p>

          <h2 style={styles.heading}>
            Let's Discuss Your
            <span style={styles.highlight}> Project</span>
          </h2>

          <p style={styles.description}>
            Fill out the form below and our team will get back to you
            within 24 hours.
          </p>

        <form
  autoComplete="off"
  style={styles.form}
  onSubmit={handleSubmit}
>
          <input
  type="text"
  name="fullname"
  placeholder="Full Name"
  value={formData.fullname}
  onChange={handleChange}
  style={styles.input}
/>

           <input
  type="email"
  name="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={handleChange}
  style={styles.input}
/>

           <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
  style={styles.input}
/>

<input
  type="text"
  name="subject"
  placeholder="Subject"
  value={formData.subject}
  onChange={handleChange}
  style={styles.input}
/>

            <textarea
  rows="6"
  name="message"
  placeholder="Tell us about your project..."
  value={formData.message}
  onChange={handleChange}
  style={styles.textarea}
/>

           <motion.button
  type="submit"
  style={styles.button}
  disabled={loading}
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.96 }}
>
  {loading ? "Sending..." : "Send Message"}
</motion.button>

          </form>
        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          style={styles.right}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={officeImage}
            alt="Office"
            style={styles.image}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}




