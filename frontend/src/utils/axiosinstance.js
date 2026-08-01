import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Inceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Status:", error.response.status);
        console.error("Response:", error.response.data);

        if (!error.config.url.includes("/login")) {
          window.location.href = "/login";
        }
      }

      if (error.response.status === 500) {
        console.error("Status:", error.response.status);
        console.error("Response:", error.response.data);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
