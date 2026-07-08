import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/contact", // Change after deployment
});

export const sendContactMessage = (data) =>
  API.post("/contact", data);