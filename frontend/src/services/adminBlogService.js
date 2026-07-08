import axios from "axios";

const API = "http://localhost:5000/api/admin/blogs";

export const createBlog = (data) =>
  axios.post(API, data);

export const getAllBlogs = () =>
  axios.get(API);

export const getBlog = (id) =>
  axios.get(`${API}/${id}`);

export const updateBlog = (id, data) =>
  axios.put(`${API}/${id}`, data);

export const deleteBlog = (id) =>
  axios.delete(`${API}/${id}`);