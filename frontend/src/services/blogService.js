import axios from "axios";

const API = "http://localhost:5000/api/blogs";

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