import axios from "axios";

const api = axios.create({
  baseURL: "https://solostack-amuhacks4-0-backend.onrender.com",
  withCredentials: true,
});

export default api;
