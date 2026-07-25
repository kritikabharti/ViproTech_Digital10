// src/pages/Blogs.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import blogsBg from "../assets/blog.jpg";
import { 
  Search, 
  Calendar, 
  Clock, 
  User,
  ChevronRight,
  Eye,
   Sparkles,
   BookOpen,
   Users,
   TrendingUp,
   Star
   
} from "lucide-react";
import { blogService } from "../services/api";
import "./Blogs.css";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Artificial Intelligence",
    "Web Development",
    "Mobile Apps",
    "Cloud Computing",
    "Cyber Security",
    "Digital Marketing",
    "Career Tips",
    "Internships",
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await blogService.getBlogs();
      setBlogs(response.blogs || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = 
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "All" || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get featured blog (first one or most viewed)
  const featuredBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const remainingBlogs = filteredBlogs.length > 1 ? filteredBlogs.slice(1) : [];

    const blogStats = [
    { icon: <BookOpen size={24} />, value: "50+", label: "Articles Published" },
    { icon: <Users size={24} />, value: "10K+", label: "Readers" },
    { icon: <TrendingUp size={24} />, value: "30+", label: "Categories" },
    { icon: <Star size={24} />, value: "4.8", label: "Reader Rating" },
  ];

  if (loading) {
    return (
      <div className="blogs-loading">
        <div className="spinner"></div>
        <p>Loading blogs...</p>
      </div>
    );
  }

  return (

    <div className="blogs-container">
      <Toaster position="top-right" />
{/* ===== DREAMLIKE ANIMATED BACKGROUND SECTION ===== */}
<section className="blog-dream-section">
  {/* Animated Dreamscape Background */}
  <div className="dream-bg">
    {/* Soft Gradient Orbs */}
    <motion.div
      className="dream-orb orb-1"
      animate={{
        x: ["0%", "10%", "-5%", "0%"],
        y: ["0%", "-10%", "5%", "0%"],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="dream-orb orb-2"
      animate={{
        x: ["0%", "-8%", "12%", "0%"],
        y: ["0%", "15%", "-5%", "0%"],
        scale: [1, 0.9, 1.1, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
    />
    <motion.div
      className="dream-orb orb-3"
      animate={{
        x: ["0%", "15%", "-10%", "0%"],
        y: ["0%", "-5%", "15%", "0%"],
        scale: [1, 0.8, 1.2, 1],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 4,
      }}
    />
    <motion.div
      className="dream-orb orb-4"
      animate={{
        x: ["0%", "-12%", "8%", "0%"],
        y: ["0%", "10%", "-10%", "0%"],
        scale: [1, 1.15, 0.85, 1],
      }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    />

    {/* Floating Particles - More Visible */}
    <div className="dream-particles">
      {[...Array(40)].map((_, i) => {
        const size = 4 + Math.random() * 8;
        const colors = [
          'rgba(212, 175, 55, 0.8)',
          'rgba(251, 191, 36, 0.7)',
          'rgba(79, 70, 229, 0.7)',
          'rgba(255, 255, 255, 0.6)',
          'rgba(212, 175, 55, 0.5)',
        ];
        const color = colors[i % colors.length];
        
        return (
          <motion.div
            key={i}
            className="dream-particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight + 100,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              y: [null, -150, -300],
              x: [null, Math.random() * 200 - 100, Math.random() * 200 - 100],
              opacity: [0, 0.8, 0],
              scale: [0, 1.2, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 12,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeOut",
            }}
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle at 30% 30%, ${color}, transparent)`,
              borderRadius: '50%',
              position: 'absolute',
              boxShadow: `0 0 ${size * 3}px ${color}`,
              border: `1px solid ${color.replace('0.8', '0.3').replace('0.7', '0.2')}`,
            }}
          />
        );
      })}
    </div>

    {/* Additional Glowing Stars - Static but with glow */}
    <div className="dream-stars">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="dream-star"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            width: 2 + Math.random() * 3,
            height: 2 + Math.random() * 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, 
              ${['#D4AF37', '#fbbf24', '#4F46E5', '#ffffff'][i % 4]}, 
              transparent)`,
            borderRadius: '50%',
            position: 'absolute',
            boxShadow: `0 0 ${10 + Math.random() * 20}px rgba(212, 175, 55, 0.3)`,
          }}
        />
      ))}
    </div>
  </div>

  {/* Content */}
  <div className="dream-content">
    <motion.div
      className="dream-header"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="dream-badge"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>✦</span>
        <span>Knowledge Hub</span>
      </motion.div>

      <motion.h1 className="dream-heading">
        Our <span className="dream-highlight">Blogs</span>
      </motion.h1>

      <motion.p className="dream-description">
        Explore expert insights, latest technology trends, and in-depth articles 
        curated by our team of industry professionals. Stay ahead with our 
        comprehensive knowledge base.
      </motion.p>

      <motion.p className="dream-description-2">
        From AI and Web Development to Digital Marketing and Career Growth — 
        discover content that inspires, educates, and transforms.
      </motion.p>
    </motion.div>
  </div>
</section>




      {/* Search and Filter */}
      <section className="blogs-filters">
        <div className="container">
          <div className="filter-row">
           
            <div className="category-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
                
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="blogs-grid-section">
        <div className="container">
          {filteredBlogs.length === 0 ? (
            <div className="no-blogs">
              <div className="no-blogs-icon">📝</div>
              <h3>No blogs found</h3>
              <p>
                {searchTerm || selectedCategory !== "All"
                  ? "Try adjusting your search or filter"
                  : "Check back later for new articles"}
              </p>
            </div>
          ) : (
            <>
              {/* Featured Blog */}
              {featuredBlog && (
                <motion.div 
                  className="featured-blog"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="featured-blog-image">
                    <img
                      src={featuredBlog.image || "https://via.placeholder.com/800x400/1e293b/4F46E5?text=VProTech"}
                      alt={featuredBlog.title}
                    />
                    <span className="featured-badge">Featured</span>
                  </div>
                  <div className="featured-blog-content">
                    <span className="blog-category">{featuredBlog.category}</span>
                    <h2>{featuredBlog.title}</h2>
                    <p>{featuredBlog.description}</p>
                    <div className="blog-meta">
                      <span>
                        <Calendar size={16} />
                        {formatDate(featuredBlog.createdAt)}
                      </span>
                      <span>
                        <Clock size={16} />
                        {featuredBlog.readTime || "5 min read"}
                      </span>
                      <span>
                        <User size={16} />
                        {featuredBlog.author || "VProTech Digital"}
                      </span>
                    </div>
                    <Link to={`/blog/${featuredBlog._id}`} className="read-more-btn">
                      Read Full Article
                      <ChevronRight size={28} />
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* Blog Grid */}
              <div className="blog-grid">
                {remainingBlogs.map((blog, index) => (
                  <motion.div
                    key={blog._id}
                    className="blog-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="blog-card-image">
                      <img
                        src={blog.image || "https://via.placeholder.com/400x250/1e293b/4F46E5?text=VProTech"}
                        alt={blog.title}
                      />
                      <span className="blog-card-category">{blog.category}</span>
                    </div>
                    <div className="blog-card-body">
                      <h3>{blog.title}</h3>
                      <p>{blog.description?.substring(0, 120)}...</p>
                      <div className="blog-card-meta">
                        <span>
                          <Calendar size={14} />
                          {formatDate(blog.createdAt)}
                        </span>
                        <span>
                          <Clock size={14} />
                          {blog.readTime || "5 min read"}
                        </span>
                      </div>
                      <Link to={`/blog/${blog._id}`} className="blog-card-link">
                        Read More
                        <ChevronRight size={26} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}