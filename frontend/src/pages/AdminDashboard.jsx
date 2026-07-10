// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { userService } from "../services/api";
import { 
  Users, 
  UserCheck, 
  UserX, 
  Shield, 
  LogOut,
  RefreshCw,
  Trash2,
  CheckCircle,
  XCircle,
  FileText,
  PlusCircle,
  Edit,
  Eye,
  LayoutDashboard,
  GraduationCap,
  Star,
  TrendingUp,
  Award,
  Calendar,
  Mail,
  Phone,
  Briefcase
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [usersRes, statsRes] = await Promise.all([
        userService.getAllUsers(),
        userService.getUserStats(),
      ]);
      setUsers(usersRes.users || []);
      setStats(statsRes.stats);
    } catch (error) {
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleToggleStatus = async (userId) => {
    try {
      await userService.toggleUserStatus(userId);
      toast.success("User status updated");
      fetchData();
    } catch (error) {
      toast.error("Failed to update user status");
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await userService.deleteUser(userId);
      toast.success("User deleted successfully");
      fetchData();
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  const navigateToAddBlog = () => {
    navigate("/admin/add-blog");
  };

  const navigateToManageBlogs = () => {
    navigate("/admin/blogs");
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <Toaster position="top-right" />
      
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">V</div>
          <div>
            <span className="brand-title">VproTech</span>
            <span className="brand-sub">Digital</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </button>
          <button 
            className={`nav-item ${activeTab === "users" ? "active" : ""}`}
            onClick={() => setActiveTab("users")}
          >
            <Users size={20} />
            <span>Users</span>
          </button>
          <button 
            className={`nav-item ${activeTab === "blogs" ? "active" : ""}`}
            onClick={() => setActiveTab("blogs")}
          >
            <FileText size={20} />
            <span>Blogs</span>
          </button>
        </nav>

        <button className="sidebar-logout" onClick={handleLogout}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="admin-main">
        {/* Header */}
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <div className="admin-actions">
            <button onClick={fetchData} className="refresh-btn">
              <RefreshCw size={18} />
              Refresh
            </button>
            <button onClick={handleLogout} className="logout-btn">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon blue">
              <Users size={24} />
            </div>
            <div className="stat-info">
              <h3>{stats?.totalUsers || 0}</h3>
              <p>Total Users</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon green">
              <UserCheck size={24} />
            </div>
            <div className="stat-info">
              <h3>{stats?.totalActive || 0}</h3>
              <p>Active Users</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon red">
              <UserX size={24} />
            </div>
            <div className="stat-info">
              <h3>{stats?.totalUsers - stats?.totalActive || 0}</h3>
              <p>Inactive Users</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon purple">
              <Shield size={24} />
            </div>
            <div className="stat-info">
              <h3>{stats?.totalAdmins || 0}</h3>
              <p>Admins</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="quick-actions-grid">
            <div className="quick-action-card" onClick={navigateToAddBlog}>
              <PlusCircle size={28} />
              <span>Add New Blog</span>
            </div>
            <div className="quick-action-card" onClick={navigateToManageBlogs}>
              <FileText size={28} />
              <span>Manage Blogs</span>
            </div>
            <div className="quick-action-card" onClick={() => setActiveTab("users")}>
              <Users size={28} />
              <span>Manage Users</span>
            </div>
          </div>
        </div>

        {/* Users Table */}
        {activeTab === "users" && (
          <div className="users-table-container">
            <h2>All Users</h2>
            <div className="table-wrapper">
              <table className="users-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Domain</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="no-users">No users found</td>
                    </tr>
                  ) : (
                    users.map((u) => (
                      <tr key={u._id}>
                        <td>
                          <div className="user-cell">
                            <div className="user-avatar">
                              {u.name?.charAt(0).toUpperCase()}
                            </div>
                            <span>{u.name}</span>
                          </div>
                        </td>
                        <td>{u.email}</td>
                        <td>{u.phone || "N/A"}</td>
                        <td>{u.domain || "N/A"}</td>
                        <td>
                          <span className={`role-badge ${u.role}`}>
                            {u.role === "admin" ? "Admin" : "User"}
                          </span>
                        </td>
                        <td>
                          <span className={`status-badge ${u.isActive ? "active" : "inactive"}`}>
                            {u.isActive ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button
                              onClick={() => handleToggleStatus(u._id)}
                              className={`action-btn ${u.isActive ? "deactivate" : "activate"}`}
                              title={u.isActive ? "Deactivate" : "Activate"}
                            >
                              {u.isActive ? (
                                <XCircle size={16} />
                              ) : (
                                <CheckCircle size={16} />
                              )}
                            </button>
                            <button
                              onClick={() => handleDeleteUser(u._id)}
                              className="action-btn delete"
                              title="Delete"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Blogs Section */}
        {activeTab === "blogs" && (
          <div className="blogs-section">
            <div className="section-header">
              <h2>Blog Management</h2>
              <button className="add-blog-btn" onClick={navigateToAddBlog}>
                <PlusCircle size={18} />
                Add New Blog
              </button>
            </div>
            <div className="blog-stats-grid">
              <div className="blog-stat-card">
                <div className="blog-stat-icon">
                  <FileText size={24} />
                </div>
                <div>
                  <h4>Total Blogs</h4>
                  <p>0</p>
                </div>
              </div>
              <div className="blog-stat-card">
                <div className="blog-stat-icon green">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4>Published</h4>
                  <p>0</p>
                </div>
              </div>
              <div className="blog-stat-card">
                <div className="blog-stat-icon yellow">
                  <Eye size={24} />
                </div>
                <div>
                  <h4>Total Views</h4>
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className="blog-placeholder">
              <FileText size={48} />
              <h3>No blogs yet</h3>
              <p>Create your first blog post</p>
              <button className="add-blog-btn" onClick={navigateToAddBlog}>
                <PlusCircle size={18} />
                Add New Blog
              </button>
            </div>
          </div>
        )}

        {/* Dashboard Overview */}
        {activeTab === "dashboard" && (
          <div className="dashboard-overview">
            <div className="welcome-section">
              <h2>Welcome back, {user?.name}!</h2>
              <p>Here's what's happening with your platform today.</p>
            </div>
            
            <div className="domain-stats">
              <h3>Users by Domain</h3>
              <div className="domain-grid">
                {stats?.domainStats?.map((item, index) => (
                  <div key={index} className="domain-item">
                    <span className="domain-name">{item._id || "Other"}</span>
                    <span className="domain-count">{item.count}</span>
                  </div>
                ))}
                {(!stats?.domainStats || stats.domainStats.length === 0) && (
                  <p className="no-data">No domain data available</p>
                )}
              </div>
            </div>

            <div className="recent-users">
              <h3>Recent Users</h3>
              <div className="recent-users-list">
                {users.slice(0, 5).map((u) => (
                  <div key={u._id} className="recent-user-item">
                    <div className="recent-user-avatar">
                      {u.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="recent-user-info">
                      <h4>{u.name}</h4>
                      <p>{u.email}</p>
                    </div>
                    <span className={`status-badge small ${u.isActive ? "active" : "inactive"}`}>
                      {u.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                ))}
                {users.length === 0 && (
                  <p className="no-data">No users registered yet</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}