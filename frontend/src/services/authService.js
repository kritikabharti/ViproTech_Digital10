import axios from "axios";

// ✅ Import API_URL from your config
import { API_URL } from '../services/api';

const API = axios.create({
  baseURL: `${API_URL}/auth`, // ✅ Uses dynamic URL
});

export const register = (data) => API.post("/register", data);

export const login = (data) => API.post("/login", data);

export default API;