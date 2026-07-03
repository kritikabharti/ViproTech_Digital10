import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Company */}
        <div style={styles.footerColumn}>
          <h2 style={styles.logo}>VProTech Digital</h2>

          <p style={styles.footerText}>
            Empowering students and businesses with innovative IT training,
            software development, web solutions, AI, digital marketing, and
            industry-ready skills.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.footerColumn}>
          <h3 style={styles.heading}>Quick Links</h3>

          <a href="/" style={styles.link}>Home</a>
          <a href="/about" style={styles.link}>About</a>
          <a href="/courses" style={styles.link}>Courses</a>
          <a href="/services" style={styles.link}>Services</a>
          <a href="/contact" style={styles.link}>Contact</a>
        </div>

        {/* Contact */}
        <div style={styles.footerColumn}>
          <h3 style={styles.heading}>Contact Us</h3>

          <p style={styles.footerText}>📞 +91 88941 10026</p>
          <p style={styles.footerText}>📞 +91 81467 59497</p>
          <p style={styles.footerText}>✉️ vprotechdigitalmohali@gmail.com</p>
        </div>

        {/* Follow */}
        <div style={styles.footerColumn}>
          <h3 style={styles.heading}>Follow Us</h3>

          <a
            href="https://vprotechdigital.com"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            🌐 Official Website
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            📘 Facebook
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            📷 Instagram
          </a>
        </div>
      </div>

      <hr style={styles.line} />

      <div style={styles.bottom}>
        © {new Date().getFullYear()} VProTech Digital. All Rights Reserved.
      </div>
    </footer>
  );
}



const styles = {

    footer: {
  background: "#0B1220",
  color: "#fff",
  padding: "70px 8% 25px",
},

footerContainer: {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "50px",
},

footerColumn: {
  flex: "1",
  minWidth: "220px",
},

logo: {
  fontSize: "32px",
  fontWeight: "700",
  marginBottom: "20px",
  color: "#fff",
},

heading: {
  fontSize: "22px",
  marginBottom: "20px",
  color: "#fff",
},

footerText: {
  color: "#bfc8d6",
  lineHeight: "1.8",
  fontSize: "16px",
},

link: {
  display: "block",
  color: "#bfc8d6",
  textDecoration: "none",
  marginBottom: "14px",
  transition: "0.3s",
},

line: {
  border: "none",
  borderTop: "1px solid rgba(255,255,255,0.15)",
  margin: "40px 0 20px",
},

bottom: {
  textAlign: "center",
  color: "#9ca3af",
  fontSize: "15px",
},

}