import axios, { InternalAxiosRequestConfig } from "axios";
import store from "store";

const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiToken = import.meta.env.VITE_API_TOKEN;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    channel: "WEB",
  },
  params: {
    token: apiToken,  // Token sent as query parameter
  },
});

// Remove or keep the Authorization interceptor based on your needs
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = store.get("atk");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor remains unchanged
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && !error.config.url.includes('/auth')) {
      store.remove("atk");
      store.remove("rtk");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;