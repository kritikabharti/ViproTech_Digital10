import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Blogs.css";
import blogHero  from "../assets/blog.jpg";

import featuredBlog from "../assets/featureblog.jpg";

export default function Blog() {
  return (
    <>
      <Navbar />

   
<section
  className="blog-hero"
  style={{
    backgroundImage: `url(${blogHero})`,
  }}
>
  <div className="blog-overlay"></div>

  <motion.div
    className="blog-hero-content"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
  >
    <p className="blog-small-title">
      KNOWLEDGE • TECHNOLOGY • INNOVATION
    </p>

    <h1 className="blog-title">
      Our <span className="highlight">Blogs</span> &
      <br />
      Insights
    </h1>

    <p className="blog-description">
      Discover expert articles, technology trends, software development
      guides, AI innovations, cybersecurity insights, and professional
      career resources written by the VProTech Digital team.
    </p>

    <div className="search-box">
      <input
        type="text"
        placeholder="Search articles..."
        className="search-input"
      />

      <button className="search-btn">
        Search
      </button>
    </div>
  </motion.div>
</section>



<section className="featured-section">
  <motion.div
    className="featured-container"
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Left Image */}
    <motion.div
      className="featured-image-wrapper"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={featuredBlog}
        alt="Featured Blog"
        className="featured-image"
      />
    </motion.div>

    {/* Right Content */}
    <div className="featured-content">

      <span className="featured-category">
        Technology
      </span>

      <h2 className="featured-title">
        The Future of Artificial Intelligence
        in Modern Business
      </h2>

      <p className="featured-description">
        Artificial Intelligence is transforming industries faster than ever.
        From intelligent automation to predictive analytics and smart
        customer experiences, discover how AI is reshaping modern businesses
        and creating new opportunities for innovation.
      </p>

      <div className="featured-meta">
        January 12, 2026
        <span className="featured-dot">•</span>
        8 min read
      </div>

      <button className="featured-btn">
        Read Full Article →
      </button>

    </div>
  </motion.div>
</section>



<section className="category-section">

  <motion.div
    className="category-heading"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <p className="category-small-title">
      DISCOVER MORE
    </p>

    <h2 className="category-title">
      Browse by <span className="text-primary">Category</span>
    </h2>

    <p className="category-description">
      Explore articles tailored to your interests in technology,
      software engineering, artificial intelligence and career growth.
    </p>
  </motion.div>

  <div className="category-grid">

    {[
      "Artificial Intelligence",
      "Web Development",
      "Mobile Apps",
      "Cloud Computing",
      "Cyber Security",
      "Digital Marketing",
      "Career Tips",
      "Internships"
    ].map((item, index) => (

      <motion.div
        key={index}
        className="category-card"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
        }}
        viewport={{ once: true }}
        whileHover={{
          y: -10,
          scale: 1.05,
        }}
      >
        <h3 className="category-name">
          {item}
        </h3>

      </motion.div>

    ))}

  </div>

</section>



<section className="popular-section">

  <motion.div
    className="popular-heading"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >

    <p className="popular-small-title">
      TRENDING
    </p>

    <h2 className="popular-title">
      Popular <span>Articles</span>
    </h2>

    <p className="popular-text">
      Discover the articles our readers love the most.
    </p>

  </motion.div>

  <div className="popular-grid">

    {[1, 2, 3].map((item, index) => (

      <motion.div
        key={index}
        className="popular-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
        }}
        viewport={{ once: true }}
        whileHover={{
          y: -10,
        }}
      >

        <div className="popular-image-wrapper">

          <img
            src={featuredBlog}
            alt="Popular Blog"
            className="popular-image"
          />

        </div>

        <div className="popular-content">

          <span className="read-time">
            8 min read
          </span>

          <h3 className="popular-card-title">
            AI is Revolutionizing Modern Business
          </h3>

          <button className="read-btn">
            Read Article →
          </button>

        </div>

      </motion.div>

    ))}

  </div>

</section>


<section style={styles.newsletterSection}>

  <motion.div
    style={styles.newsletterCard}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >

    <p style={styles.newsletterSmall}>
      JOIN OUR COMMUNITY
    </p>

    <h2 style={styles.newsletterTitle}>
      Stay Updated with
      <span style={{ color: "#FFD700" }}>
        {" "}Technology Trends
      </span>
    </h2>

    <p style={styles.newsletterText}>
      Subscribe to receive the latest blogs, AI insights,
      software engineering tips, internship opportunities,
      digital marketing strategies, and technology news
      directly in your inbox.
    </p>

    <div style={styles.subscribeBox}>

      <input
        type="email"
        placeholder="Enter your email address"
        style={styles.subscribeInput}
      />

      <motion.button
        style={styles.subscribeButton}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        Subscribe
      </motion.button>

    </div>

    <div style={styles.bottomText}>

      <span>✓ Weekly Updates</span>

      <span>✓ No Spam</span>

      <span>✓ Cancel Anytime</span>

    </div>

  </motion.div>

</section>


      <Footer />
    </>
  );
}



const styles = {

newsletterSection: {
  padding: "120px 8%",
  background: "#F8FAFC",
},

newsletterCard: {
  maxWidth: "1100px",
  margin: "auto",
  padding: "80px 60px",
  borderRadius: "30px",
  textAlign: "center",
  background: "linear-gradient(135deg,#4F46E5,#1E3A8A)",
  color: "#fff",
  boxShadow: "0 35px 80px rgba(79,70,229,.25)",
},

newsletterSmall: {
  letterSpacing: "4px",
  fontWeight: "600",
  color: "#FFD700",
  marginBottom: "20px",
},

newsletterTitle: {
  fontSize: "54px",
  fontWeight: "800",
  marginBottom: "25px",
},

newsletterText: {
  maxWidth: "700px",
  margin: "auto",
  color: "#E5E7EB",
  lineHeight: "1.8",
  fontSize: "18px",
},

subscribeBox: {
  marginTop: "50px",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
},

subscribeInput: {
  width: "500px",
  padding: "18px 24px",
  borderRadius: "50px",
  border: "none",
  outline: "none",
  fontSize: "16px",
},

subscribeButton: {
  padding: "18px 35px",
  borderRadius: "50px",
  border: "none",
  background: "#FFD700",
  color: "#111827",
  fontWeight: "700",
  fontSize: "16px",
  cursor: "pointer",
},

bottomText: {
  marginTop: "35px",
  display: "flex",
  justifyContent: "center",
  gap: "35px",
  color: "#E5E7EB",
  flexWrap: "wrap",
},

}