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
  ChevronRight
} from "lucide-react";
import { blogService } from "../services/api";
import "./BlogDetail.css";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    fetchBlog();
    window.scrollTo(0, 0);
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await blogService.getBlogById(id);
      setBlog(response.blog);
      
      // Fetch related blogs (same category)
      if (response.blog?.category) {
        const allBlogs = await blogService.getBlogs();
        const related = allBlogs.blogs?.filter(
          b => b.category === response.blog.category && b._id !== response.blog._id
        ) || [];
        setRelatedBlogs(related.slice(0, 3));
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
    <div className="blog-detail-container">
      <Toaster position="top-right" />

      {/* Back Button */}
      <div className="blog-detail-back">
        <Link to="/blogs" className="back-link">
          <ArrowLeft size={20} />
          Back to Blogs
        </Link>
      </div>

      {/* Main Content */}
      <motion.article 
        className="blog-detail-content"
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
              <User size={18} />
              {blog.author || "VProTech Digital"}
            </span>
            <span>
              <Calendar size={18} />
              {formatDate(blog.createdAt)}
            </span>
            <span>
              <Clock size={18} />
              {blog.readTime || "5 min read"}
            </span>
            <span>
              <Eye size={18} />
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

        {/* Description */}
        <div className="blog-detail-description">
          <p>{blog.description}</p>
        </div>

        {/* Content */}
        <div className="blog-detail-body">
          {blog.content?.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="blog-detail-tags">
            <h4>Tags</h4>
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
              <Heart size={22} fill={liked ? "#ef4444" : "none"} />
              <span>{blog.likes || 0}</span>
            </button>
            <button onClick={handleShare} className="share-btn">
              <Share2 size={20} />
              Share
            </button>
          </div>
        </div>
      </motion.article>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="related-blogs">
          <h2>Related Articles</h2>
          <div className="related-blogs-grid">
            {relatedBlogs.map((relatedBlog) => (
              <Link 
                to={`/blog/${relatedBlog._id}`} 
                key={relatedBlog._id}
                className="related-blog-card"
              >
                <div className="related-blog-image">
                  <img 
                    src={relatedBlog.image || "https://via.placeholder.com/400x250/1e293b/4F46E5?text=VProTech"}
                    alt={relatedBlog.title}
                  />
                </div>
                <div className="related-blog-info">
                  <span className="related-category">{relatedBlog.category}</span>
                  <h3>{relatedBlog.title}</h3>
                  <p>{relatedBlog.description?.substring(0, 80)}...</p>
                  <span className="related-read-more">
                    Read More <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}