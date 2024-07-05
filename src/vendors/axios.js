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

// axiosInstance.interceptors.request((req)=>{
// const token = localStorage.getItem("TOKEN")
// })

export default axiosInstance;
