// services/contactService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const sendContactMessage = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Admin services for contact management
export const contactAdminService = {
  getAllMessages: async (params = {}) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/contact`, {
      params,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  getMessageById: async (id) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/contact/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  updateStatus: async (id, data) => {
    const token = localStorage.getItem("token");
    const response = await axios.put(`${API_URL}/contact/${id}/status`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  deleteMessage: async (id) => {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${API_URL}/contact/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  getStats: async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/contact/stats`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },
};