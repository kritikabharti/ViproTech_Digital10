import axios from "axios";
import { API_URL } from '../services/api';

const API = `${API_URL}/blogs`;
export const getBlogs = () => axios.get(API);

export const getFeaturedBlog = () =>
  axios.get(`${API}/featured`);

export const getPopularBlogs = () =>
  axios.get(`${API}/popular`);

export const getBlogById = (id) =>
  axios.get(`${API}/${id}`);

export const createBlog = (data) =>
  axios.post(API, data);

export const updateBlog = (id, data) =>
  axios.put(`${API}/${id}`, data);

export const deleteBlog = (id) =>
  axios.delete(`${API}/${id}`);