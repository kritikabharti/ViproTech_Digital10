// services/teamService.js
import api from './api';

const teamService = {
  // Public routes
  getTeamMembers: async (params) => {
    const response = await api.get('/team', { params });
    return response.data;
  },

  getTeamMemberById: async (id) => {
    const response = await api.get(`/team/${id}`);
    return response.data;
  },

  // Admin routes
  getAllTeamMembersAdmin: async () => {
    const response = await api.get('/team/admin/all');
    return response.data;
  },

  getTeamStats: async () => {
    const response = await api.get('/team/admin/stats');
    return response.data;
  },

  createTeamMember: async (formData) => {
    const response = await api.post('/team', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  updateTeamMember: async (id, formData) => {
    const response = await api.put(`/team/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  deleteTeamMember: async (id) => {
    const response = await api.delete(`/team/${id}`);
    return response.data;
  },

  toggleTeamMemberStatus: async (id) => {
    const response = await api.put(`/team/${id}/toggle-status`);
    return response.data;
  },

  uploadImage: async (formData) => {
    const response = await api.post('/team/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  deleteImage: async (publicId) => {
    const response = await api.delete('/team/image', { data: { publicId } });
    return response.data;
  },
};

export default teamService;