// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth services
export const authService = {
  register: async (userData) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  },
  
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  },
  
  getProfile: async () => {
    const response = await api.get("/auth/profile");
    return response.data;
  },
  
  updateProfile: async (data) => {
    const response = await api.put("/auth/profile", data);
    return response.data;
  },
  
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
};

// User services (Admin only)
export const userService = {
  getAllUsers: async () => {
    const response = await api.get("/auth/users");
    return response.data;
  },
  
  getUserStats: async () => {
    const response = await api.get("/auth/users/stats");
    return response.data;
  },
  
  updateUser: async (id, data) => {
    const response = await api.put(`/auth/users/${id}`, data);
    return response.data;
  },
  
  deleteUser: async (id) => {
    const response = await api.delete(`/auth/users/${id}`);
    return response.data;
  },
  
  toggleUserStatus: async (id) => {
    const response = await api.put(`/auth/users/${id}/toggle-status`);
    return response.data;
  },
};

// ============ BLOG SERVICES ============
export const blogService = {
  // Get all published blogs (public)
  getBlogs: async () => {
    const response = await api.get("/blogs");
    return response.data;
  },
  
  // Get blog by ID (public)
  getBlogById: async (id) => {
    const response = await api.get(`/blogs/${id}`);
    return response.data;
  },
  
  // Get all blogs (admin only)
  getAdminBlogs: async () => {
    const response = await api.get("/blogs/admin/all");
    return response.data;
  },
  
  // Create blog (admin only)
  createBlog: async (data) => {
    const response = await api.post("/blogs", data);
    return response.data;
  },
  
  // Update blog (admin only)
  updateBlog: async (id, data) => {
    const response = await api.put(`/blogs/${id}`, data);
    return response.data;
  },
  
  // Delete blog (admin only)
  deleteBlog: async (id) => {
    const response = await api.delete(`/blogs/${id}`);
    return response.data;
  },
  
  // Toggle publish status (admin only)
  togglePublish: async (id) => {
    const response = await api.put(`/blogs/${id}/toggle-publish`);
    return response.data;
  },
  
  // Like a blog (public)
  likeBlog: async (id) => {
    const response = await api.put(`/blogs/${id}/like`);
    return response.data;
  },
  
  // Get blog statistics (admin only)
  getBlogStats: async () => {
    const response = await api.get("/blogs/admin/stats");
    return response.data;
  },
};


export default api;