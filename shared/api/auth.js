// Auth API query functions
// Handles login and logout endpoints.

import apiClient from "../api-client";

export const authAPI = {
  /**
   * Login user
   * @param {Object} credentials - Email and password
   * @returns {Promise<Object>} Auth response with token
   */
  login: (credentials) => apiClient.post("/api/auth/login", credentials),

  /**
   * Logout user
   * @returns {Promise<Object>} Logout response
   */
  logout: () => apiClient.post("/api/auth/logout"),
};

export default authAPI;
