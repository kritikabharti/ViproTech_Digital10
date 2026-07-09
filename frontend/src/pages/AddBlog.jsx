import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Image,
  Tag,
  Calendar,
  Clock,
  Eye,
  ArrowLeft,
  Search,
  Filter,
  ChevronDown
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AddBlog.css";


export default function AddBlog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;

  // State Management
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [useMockData, setUseMockData] = useState(true);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    content: "",
    image: "",
    readTime: "",
    author: ""
  });

  // Categories list
  const categories = [
    "All",
    "Artificial Intelligence",
    "Web Development",
    "Mobile Apps",
    "Cloud Computing",
    "Cyber Security",
    "Digital Marketing",
    "Career Tips",
    "Internships"
  ];

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = 
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory === "All" || blog.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      
      if (useMockData) {
        setTimeout(() => {
          setBlogs(MOCK_BLOGS);
          setError("");
          setLoading(false);
        }, 500);
        return;
      }

      // Uncomment when API is ready
      // const res = await getBlogs();
      // setBlogs(res.data?.blogs || res.data || []);
      
    } catch (err) {
      setError("Failed to fetch blogs");
      console.error(err);
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: "",
      category: "",
      description: "",
      content: "",
      image: "",
      readTime: "",
      author: ""
    });
    setEditingBlog(null);
    setShowForm(false);
    setError("");
    setSuccess("");
  };

  // Load blog for editing
  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title || "",
      category: blog.category || "",
      description: blog.description || "",
      content: blog.content || "",
      image: blog.image || "",
      readTime: blog.readTime || "",
      author: blog.author || ""
    });
    setShowForm(true);
    setError("");
    setSuccess("");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle form submit (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const submitData = {
        ...formData,
        readTime: formData.readTime || "5 min read"
      };

      if (editingBlog) {
        // UPDATE: Update existing blog
        if (useMockData) {
          const updatedBlogs = blogs.map(blog => 
            blog._id === editingBlog._id 
              ? { 
                  ...blog, 
                  ...submitData,
                  updatedAt: new Date().toISOString()
                }
              : blog
          );
          setBlogs(updatedBlogs);
          setSuccess("✅ Blog updated successfully!");
        }
      } else {
        // CREATE: Create new blog
        if (useMockData) {
          const newBlog = {
            ...submitData,
            _id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          setBlogs([newBlog, ...blogs]);
          setSuccess("✅ Blog created successfully!");
        }
      }
      
      // Auto close form after success
      setTimeout(() => {
        resetForm();
        setSuccess("");
      }, 3000);
      
    } catch (err) {
      setError("Failed to save blog");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle delete blog
  const handleDelete = async (blogId) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    
    try {
      setLoading(true);
      
      if (useMockData) {
        const updatedBlogs = blogs.filter(blog => blog._id !== blogId);
        setBlogs(updatedBlogs);
        setSuccess("🗑️ Blog deleted successfully!");
        
        if (editingBlog?._id === blogId) {
          resetForm();
        }
        
        setTimeout(() => setSuccess(""), 3000);
      }
      
    } catch (err) {
      setError("Failed to delete blog");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      <Navbar />

      <div className="addblog-container">
        {/* Header */}
        <div className="addblog-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => navigate('/admin')}>
              <ArrowLeft size={20} />
              Back to Dashboard
            </button>
            <h1 className="addblog-title">📝 Manage Blogs</h1>
          </div>
          <button 
            className="add-new-btn"
            onClick={() => {
              resetForm();
              setShowForm(true);
            }}
          >
            <Plus size={20} />
            Add New Blog
          </button>
        </div>

        {/* Messages */}
        {success && (
          <motion.div 
            className="success-message"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {success}
          </motion.div>
        )}
        {error && (
          <motion.div 
            className="error-message"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.div>
        )}

        {/* Blog Form */}
        {showForm && (
          <motion.div 
            className="blog-form-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="form-header">
              <h2>
                {editingBlog ? (
                  <>✏️ Edit Blog</>
                ) : (
                  <>📝 Create New Blog</>
                )}
              </h2>
              <button className="close-form-btn" onClick={resetForm} title="Close form">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="blog-form">
              <div className="form-group">
                <label htmlFor="title">
                  <Tag size={16} />
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter blog title"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.filter(c => c !== "All").map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="readTime">
                    <Clock size={16} />
                    Read Time *
                  </label>
                  <input
                    type="text"
                    id="readTime"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleInputChange}
                    placeholder="e.g., 5 min read"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Brief description of the blog"
                  rows="3"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="content">Content *</label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Full blog content here..."
                  rows="8"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="image">
                    <Image size={16} />
                    Image URL
                  </label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="Enter image URL (optional)"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="author">Author</label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    placeholder="Enter author name (optional)"
                  />
                </div>
              </div>

              <div className="form-actions">
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={resetForm}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={loading}
                >
                  <Save size={18} />
                  {loading ? "Saving..." : (editingBlog ? "Update Blog" : "Create Blog")}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Search and Filter Bar */}
        <div className="search-filter-bar">
          <div className="search-box-admin">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search blogs by title, description, category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input-admin"
            />
          </div>
          <div className="filter-box">
            <Filter size={20} className="filter-icon" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Blog List */}
        <div className="blogs-list-container">
          <div className="list-header">
            <h2>📚 All Blogs</h2>
            <span className="blog-count">{filteredBlogs.length} blogs</span>
          </div>

          {loading && !showForm ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Loading blogs...</p>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="no-blogs">
              <div className="no-blogs-icon">📭</div>
              <h3>No blogs found</h3>
              <p>
                {searchTerm || filterCategory !== "All" 
                  ? "Try adjusting your search or filter criteria" 
                  : "Create your first blog by clicking the 'Add New Blog' button above"}
              </p>
            </div>
          ) : (
            <div className="blogs-grid">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog._id || index}
                  className="blog-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="blog-card-image">
                    <img 
                      src={blog.image || "https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=Blog"} 
                      alt={blog.title || "Blog post"}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=Blog";
                      }}
                    />
                    <span className="blog-card-category">{blog.category || "Uncategorized"}</span>
                  </div>
                  
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">{blog.title || "Untitled"}</h3>
                    <p className="blog-card-description">
                      {blog.description?.substring(0, 120) || "No description available"}...
                    </p>
                    
                    <div className="blog-card-meta">
                      <span>
                        <Calendar size={14} />
                        {formatDate(blog.createdAt)}
                      </span>
                      <span>
                        <Clock size={14} />
                        {blog.readTime || "5 min read"}
                      </span>
                      {blog.author && (
                        <span>
                          ✍️ {blog.author}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="blog-card-actions">
                    <button 
                      className="view-btn"
                      onClick={() => navigate(`/blog/${blog._id}`)}
                    >
                      <Eye size={16} />
                      View
                    </button>
                    <button 
                      className="edit-btn"
                      onClick={() => handleEdit(blog)}
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button 
                      className="delete-btn"
                      onClick={() => handleDelete(blog._id)}
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

