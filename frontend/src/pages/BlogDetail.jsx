// src/pages/BlogDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User,
  Heart,
  Eye,
  Share2,
  Tag,
  ChevronRight,
  TrendingUp,
  MessageCircle
} from "lucide-react";
import { blogService } from "../services/api";
import "./BlogDetail.css";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    fetchBlog();
    window.scrollTo(0, 0);
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await blogService.getBlogById(id);
      setBlog(response.blog);
      
      // Fetch latest blogs for sidebar
      if (response.blog) {
        const allBlogs = await blogService.getBlogs();
        const latest = allBlogs.blogs?.filter(b => b._id !== response.blog._id) || [];
        setLatestBlogs(latest.slice(0, 5));
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
      toast.error("Blog not found");
      navigate("/blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async () => {
    if (liked) return;
    try {
      await blogService.likeBlog(id);
      setBlog(prev => ({ ...prev, likes: (prev.likes || 0) + 1 }));
      setLiked(true);
      toast.success("Liked!");
    } catch (error) {
      toast.error("Failed to like");
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title,
        text: blog?.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadingTime = (content) => {
    if (!content) return "5 min read";
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return minutes > 1 ? `${minutes} min read` : "1 min read";
  };

  if (loading) {
    return (
      <div className="blog-detail-loading">
        <div className="spinner"></div>
        <p>Loading blog...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog-detail-not-found">
        <h2>Blog not found</h2>
        <Link to="/blogs" className="back-link">
          <ArrowLeft size={20} />
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <Toaster position="top-right" />

      <div className="blog-detail-wrapper">
        {/* Back Button */}
        <div className="blog-detail-back">
          <Link to="/blogs" className="back-link">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
        </div>

        {/* Main Content + Sidebar */}
        <div className="blog-detail-layout">
          {/* ===== MAIN CONTENT ===== */}
          <motion.article 
            className="blog-detail-main"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="blog-detail-header">
              <span className="blog-detail-category">{blog.category}</span>
              <h1>{blog.title}</h1>
              
              <div className="blog-detail-meta">
                <span>
                  <User size={16} />
                  {blog.author || "VProTech Digital"}
                </span>
                <span>
                  <Calendar size={16} />
                  {formatDate(blog.createdAt)}
                </span>
                <span>
                  <Clock size={16} />
                  {blog.readTime || getReadingTime(blog.content)}
                </span>
                <span>
                  <Eye size={16} />
                  {blog.views || 0} views
                </span>
              </div>
            </div>

            {/* Featured Image */}
            {blog.image && (
              <div className="blog-detail-image">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/1200x600/1e293b/4F46E5?text=VProTech";
                  }}
                />
              </div>
            )}

            {/* Content */}
            <div className="blog-detail-body">
              <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="blog-detail-tags">
                <div className="tags-list">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="tag">
                      <Tag size={14} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Actions */}
            <div className="blog-detail-footer">
              <div className="blog-detail-actions">
                <button 
                  onClick={handleLike} 
                  className={`like-btn ${liked ? "liked" : ""}`}
                  disabled={liked}
                >
                  <Heart size={20} fill={liked ? "#ef4444" : "none"} />
                  <span>{blog.likes || 0}</span>
                </button>
                <button onClick={handleShare} className="share-btn">
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </div>
          </motion.article>

          {/* ===== SIDEBAR ===== */}
          <aside className="blog-detail-sidebar">
            {/* Latest News */}
            <div className="sidebar-card">
              <div className="sidebar-header">
                <TrendingUp size={20} />
                <h3>Latest News</h3>
              </div>
              <div className="latest-blogs">
                {latestBlogs.map((latestBlog, index) => (
                  <Link 
                    to={`/blog/${latestBlog._id}`} 
                    key={latestBlog._id}
                    className="latest-blog-item"
                  >
                    <span className="latest-number">{index + 1}</span>
                    <div className="latest-content">
                      <h4>{latestBlog.title}</h4>
                      <div className="latest-meta">
                        <span>
                          <User size={12} />
                          {latestBlog.author || "VProTech"}
                        </span>
                        <span>
                          <Calendar size={12} />
                          {formatDate(latestBlog.createdAt)}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="sidebar-card">
              <div className="sidebar-header">
                <Tag size={20} />
                <h3>Categories</h3>
              </div>
              <div className="category-list">
                <Link to="/blogs?category=Artificial Intelligence" className="category-item">
                  <span>🤖 Artificial Intelligence</span>
                  <span className="category-count"></span>
                </Link>
                <Link to="/blogs?category=Web Development" className="category-item">
                  <span>💻 Web Development</span>
                  <span className="category-count"></span>
                </Link>
                <Link to="/blogs?category=Cloud Computing" className="category-item">
                  <span>☁️ Cloud Computing</span>
                  <span className="category-count"></span>
                </Link>
                <Link to="/blogs?category=Cyber Security" className="category-item">
                  <span>🔒 Cyber Security</span>
                  <span className="category-count"></span>
                </Link>
                <Link to="/blogs?category=Digital Marketing" className="category-item">
                  <span>📊 Digital Marketing</span>
                  <span className="category-count"></span>
                </Link>
              </div>
            </div>

            {/* Newsletter */}
           
          </aside>
        </div>
      </div>
    </div>
  );
}