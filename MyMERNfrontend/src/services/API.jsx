import axios from "axios";

const baseURL = "http://localhost:5173";

const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("token")) {
//     req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//   }
//   return req;
// });

export default API;
