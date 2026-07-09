// services/testimonialService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change to your API URL

// Get all active testimonials (public)
export const getTestimonials = async () => {
  try {
    const response = await axios.get(`${API_URL}/testimonials`);
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

// Get all testimonials including inactive (admin)
export const getAllTestimonialsAdmin = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/testimonials/admin/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching all testimonials:', error);
    throw error;
  }
};

// Create testimonial (admin)
export const createTestimonial = async (data) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/testimonials`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating testimonial:', error);
    throw error;
  }
};

// Update testimonial (admin)
export const updateTestimonial = async (id, data) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${API_URL}/testimonials/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating testimonial:', error);
    throw error;
  }
};

// Delete testimonial (admin)
export const deleteTestimonial = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${API_URL}/testimonials/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    throw error;
  }
};