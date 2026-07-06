import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import blogHero  from "../assets/blog.jpg";

import featuredBlog from "../assets/featureblog.jpg";

export default function Blog() {
  return (
    <>
      <Navbar />

      <Navbar />

<section
  style={{
    ...styles.hero,
    backgroundImage: `url(${blogHero})`,
  }}
>
  <div style={styles.overlay}></div>

  <motion.div
    style={styles.heroContent}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
  >
    <p style={styles.smallTitle}>
      KNOWLEDGE • TECHNOLOGY • INNOVATION
    </p>

    <h1 style={styles.title}>
      Our <span style={styles.highlight}>Blogs</span> &
      <br />
      Insights
    </h1>

    <p style={styles.description}>
      Discover expert articles, technology trends, software development
      guides, AI innovations, cybersecurity insights, and professional
      career resources written by the VProTech Digital team.
    </p>

    <div style={styles.searchBox}>
      <input
        type="text"
        placeholder="Search articles..."
        style={styles.searchInput}
      />

      <button style={styles.searchBtn}>
        Search
      </button>
    </div>
  </motion.div>
</section>


<section style={styles.featuredSection}>
  <motion.div
    style={styles.featuredContainer}
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Left Image */}

    <motion.div
      style={styles.featuredImageWrapper}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={featuredBlog}
        alt="Featured Blog"
        style={styles.featuredImage}
      />
    </motion.div>

    {/* Right Content */}

    <div style={styles.featuredContent}>

      <span style={styles.category}>
        Technology
      </span>

      <h2 style={styles.featuredTitle}>
        The Future of Artificial Intelligence
        in Modern Business
      </h2>

      <p style={styles.featuredDescription}>
        Artificial Intelligence is transforming industries faster than ever.
        From intelligent automation to predictive analytics and smart
        customer experiences, discover how AI is reshaping modern businesses
        and creating new opportunities for innovation.
      </p>

      <div style={styles.meta}>
        January 12, 2026
        <span style={{ margin: "0 15px" }}>•</span>
        8 min read
      </div>

      <button style={styles.readButton}>
        Read Full Article →
      </button>

    </div>
  </motion.div>
</section>




<section style={styles.blogSection}>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    style={styles.blogHeading}
  >
    <p style={styles.blogSmallTitle}>LATEST ARTICLES</p>

    <h2 style={styles.blogTitle}>
      Explore Our <span style={{ color: "#4F46E5" }}>Recent Blogs</span>
    </h2>

    <p style={styles.blogDescription}>
      Stay updated with the latest trends in software development,
      AI, cloud computing, digital marketing, cybersecurity and
      career growth.
    </p>
  </motion.div>

  <div style={styles.blogGrid}>

    {[1,2,3,4,5,6].map((item,index)=>(
      <motion.div
        key={index}
        style={styles.blogCard}
        initial={{ opacity:0, y:60 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:.6, delay:index*0.1 }}
        viewport={{ once:true }}
        whileHover={{
          y:-12
        }}
      >

        <div style={styles.imageWrapper}>
          <img
            src={featuredBlog}
            alt=""
            style={styles.blogImage}
          />
        </div>

        <div style={styles.blogContent}>

          <span style={styles.blogCategory}>
            Technology
          </span>

          <h3 style={styles.blogCardTitle}>
            Future of Artificial Intelligence
          </h3>

          <p style={styles.blogCardText}>
            Discover how AI is transforming businesses,
            improving productivity and creating smarter
            digital experiences.
          </p>

          <div style={styles.blogFooter}>

            <span style={styles.blogDate}>
              Jan 15, 2026
            </span>

            <button style={styles.readMore}>
              Read More →
            </button>

          </div>

        </div>

      </motion.div>
    ))}

  </div>

</section>



<section style={styles.categorySection}>

  <motion.div
    style={styles.categoryHeading}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <p style={styles.smallTitle}>
      DISCOVER MORE
    </p>

    <h2 style={styles.categoryTitle}>
      Browse by <span style={{ color: "#4F46E5" }}>Category</span>
    </h2>

    <p style={styles.categoryDescription}>
      Explore articles tailored to your interests in technology,
      software engineering, artificial intelligence and career growth.
    </p>
  </motion.div>

  <div style={styles.categoryGrid}>

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
        style={styles.categoryCard}
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
        <h3 style={styles.categoryName}>
          {item}
        </h3>

      </motion.div>

    ))}

  </div>

</section>



<section style={styles.popularSection}>

  <motion.div
    style={styles.popularHeading}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: .8 }}
    viewport={{ once: true }}
  >

    <p style={styles.smallTitle}>
      TRENDING
    </p>

    <h2 style={styles.popularTitle}>
      Popular <span style={{ color:"#4F46E5" }}>Articles</span>
    </h2>

    <p style={styles.popularText}>
      Discover the articles our readers love the most.
    </p>

  </motion.div>

  <div style={styles.popularGrid}>

    {[1,2,3].map((item,index)=>(

      <motion.div
        key={index}
        style={styles.popularCard}
        initial={{ opacity:0,y:50 }}
        whileInView={{ opacity:1,y:0 }}
        transition={{
          duration:.6,
          delay:index*.15
        }}
        viewport={{ once:true }}
        whileHover={{
          y:-10
        }}
      >

        <div style={styles.popularImageWrapper}>

          <img
            src={featuredBlog}
            alt=""
            style={styles.popularImage}
          />

        </div>

        <div style={styles.popularContent}>

          <span style={styles.readTime}>
            8 min read
          </span>

          <h3 style={styles.popularCardTitle}>
            AI is Revolutionizing Modern Business
          </h3>

          <button style={styles.readBtn}>
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

hero: {
  height: "115vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},

overlay: {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(rgba(5,10,25,.75), rgba(5,10,25,.75))",
},

heroContent: {
  position: "relative",
  zIndex: 2,
  width: "90%",
  maxWidth: "900px",
  textAlign: "center",
  color: "#fff",
},

smallTitle: {
  color: "#FFD700",
  letterSpacing: "4px",
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "20px",
},

title: {
  fontSize: "72px",
  fontWeight: "800",
  lineHeight: "1.1",
  marginBottom: "25px",
},

highlight: {
  color: "#4F46E5",
},

description: {
  color: "#ddd",
  fontSize: "20px",
  lineHeight: "1.8",
  maxWidth: "760px",
  margin: "0 auto 50px",
},

searchBox: {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap",
},

searchInput: {
  width: "500px",
  maxWidth: "90%",
  padding: "18px 25px",
  borderRadius: "50px",
  border: "none",
  outline: "none",
  fontSize: "16px",
},

searchBtn: {
  padding: "18px 35px",
  background: "#4F46E5",
  color: "#fff",
  border: "none",
  borderRadius: "50px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
},


featuredSection: {
  padding: "120px 8%",
  background: "#fff",
},

featuredContainer: {
  maxWidth: "1400px",
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "1.2fr 1fr",
  gap: "70px",
  alignItems: "center",
},

featuredImageWrapper: {
  overflow: "hidden",
  borderRadius: "25px",
  boxShadow: "0 25px 60px rgba(0,0,0,.12)",
},

featuredImage: {
  width: "100%",
  height: "600px",
  objectFit: "cover",
  display: "block",
},

featuredContent: {
  display: "flex",
  flexDirection: "column",
},

category: {
  display: "inline-block",
  width: "fit-content",
  padding: "8px 18px",
  background: "#EEF2FF",
  color: "#4F46E5",
  borderRadius: "30px",
  fontWeight: "600",
  marginBottom: "25px",
},

featuredTitle: {
  fontSize: "48px",
  fontWeight: "800",
  lineHeight: "1.2",
  color: "#111827",
  marginBottom: "25px",
},

featuredDescription: {
  fontSize: "18px",
  color: "#6B7280",
  lineHeight: "1.9",
  marginBottom: "35px",
},

meta: {
  color: "#9CA3AF",
  fontSize: "15px",
  marginBottom: "40px",
},

readButton: {
  width: "220px",
  padding: "16px",
  background: "#4F46E5",
  color: "#fff",
  border: "none",
  borderRadius: "40px",
  fontWeight: "600",
  fontSize: "16px",
  cursor: "pointer",
  transition: "0.3s",
},


blogSection:{
  padding:"110px 8%",
  background:"#F8FAFC",
},

blogHeading:{
  textAlign:"center",
  marginBottom:"70px",
},

blogSmallTitle:{
  color:"#4F46E5",
  fontWeight:"700",
  letterSpacing:"3px",
  marginBottom:"18px",
},

blogTitle:{
  fontSize:"54px",
  fontWeight:"800",
  color:"#111827",
},

blogDescription:{
  margin:"25px auto 0",
  maxWidth:"700px",
  color:"#6B7280",
  lineHeight:"1.8",
  fontSize:"18px",
},

blogGrid:{
  display:"grid",
  gridTemplateColumns:"repeat(3,1fr)",
  gap:"35px",
},

blogCard:{
  background:"#fff",
  borderRadius:"22px",
  overflow:"hidden",
  boxShadow:"0 15px 40px rgba(0,0,0,.08)",
  cursor:"pointer",
  transition:"0.4s",
},

imageWrapper:{
  overflow:"hidden",
},

blogImage:{
  width:"100%",
  height:"250px",
  objectFit:"cover",
  transition:"0.5s",
},

blogContent:{
  padding:"28px",
},

blogCategory:{
  background:"#EEF2FF",
  color:"#4F46E5",
  padding:"8px 16px",
  borderRadius:"30px",
  fontWeight:"600",
  fontSize:"13px",
},

blogCardTitle:{
  fontSize:"26px",
  marginTop:"22px",
  marginBottom:"18px",
  color:"#111827",
  lineHeight:"1.4",
},

blogCardText:{
  color:"#6B7280",
  lineHeight:"1.8",
  marginBottom:"30px",
},

blogFooter:{
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
},

blogDate:{
  color:"#9CA3AF",
  fontSize:"14px",
},

readMore:{
  border:"none",
  background:"transparent",
  color:"#4F46E5",
  fontWeight:"700",
  cursor:"pointer",
},

categorySection: {
  padding: "110px 8%",
  background: "#fff",
},

categoryHeading: {
  textAlign: "center",
  marginBottom: "70px",
},

categoryTitle: {
  fontSize: "52px",
  fontWeight: "800",
  color: "#111827",
},

categoryDescription: {
  maxWidth: "700px",
  margin: "20px auto 0",
  color: "#6B7280",
  fontSize: "18px",
  lineHeight: "1.8",
},

categoryGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "25px",
},

categoryCard: {
  background: "#F8FAFC",
  borderRadius: "20px",
  padding: "45px 20px",
  textAlign: "center",
  cursor: "pointer",
  transition: ".3s",
  border: "1px solid #E5E7EB",
},

categoryName: {
  fontSize: "20px",
  fontWeight: "700",
  color: "#111827",
},


popularSection:{
  padding:"120px 8%",
  background:"#F8FAFC",
},

popularHeading:{
  textAlign:"center",
  marginBottom:"60px",
},

popularTitle:{
  fontSize:"54px",
  fontWeight:"800",
  color:"#111827",
},

popularText:{
  color:"#6B7280",
  fontSize:"18px",
  marginTop:"20px",
},

popularGrid:{
  display:"grid",
  gridTemplateColumns:"repeat(3,1fr)",
  gap:"35px",
},

popularCard:{
  background:"#fff",
  borderRadius:"22px",
  overflow:"hidden",
  boxShadow:"0 20px 40px rgba(0,0,0,.08)",
  cursor:"pointer",
},

popularImageWrapper:{
  overflow:"hidden",
},

popularImage:{
  width:"100%",
  height:"240px",
  objectFit:"cover",
},

popularContent:{
  padding:"25px",
},

readTime:{
  color:"#4F46E5",
  fontWeight:"600",
},

popularCardTitle:{
  fontSize:"26px",
  fontWeight:"700",
  margin:"18px 0 30px",
  color:"#111827",
  lineHeight:"1.4",
},

readBtn:{
  border:"none",
  background:"transparent",
  color:"#4F46E5",
  fontWeight:"700",
  cursor:"pointer",
},

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