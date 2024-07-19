import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

const baseURL = import.meta.env.VITE_API_HOST;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
  },
});

axiosInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem("TOKEN");
  req.headers = {
    ...req.headers,
    Authorization: `Bearer ${token}`,
  };
  return req;
});

export default axiosInstance;
