// Centralized Axios API client for all Micro Frontends
// This file provides a single, consistent way to call the backend API
// from any MFE in the single-spa application.

import axios from "axios";

// API base URL - can be overridden via environment variable
const API_BASE_URL =
  typeof process !== "undefined" && process.env?.REACT_APP_API_URL
    ? process.env.REACT_APP_API_URL
    : "http://localhost:3001";

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - adds auth token if available
apiClient.interceptors.request.use(
  (config) => {
    // Try to get token from localStorage (works across MFEs since they share origin)
    try {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      // localStorage may not be available in some contexts
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor - handles common errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      const { status } = error.response;

      if (status === 401) {
        // Unauthorized - could trigger a redirect to login
        console.warn("Unauthorized request - token may be expired");
      } else if (status === 404) {
        console.warn("API endpoint not found:", error.config?.url);
      } else if (status >= 500) {
        console.error("Server error:", error.response.data);
      }
    } else if (error.request) {
      // No response received (network error)
      console.error("Network error - is the API server running?");
    }

    return Promise.reject(error);
  },
);

export default apiClient;
