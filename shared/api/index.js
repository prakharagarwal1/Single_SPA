// Centralized API query functions
// All API calls are defined here so they can be used by React Query
// hooks across any Micro Frontend in the application.

import apiClient from "../api-client";

// ===== Analytics API =====

export const analyticsAPI = {
  /**
   * Fetch dashboard statistics
   * @returns {Promise<Array>} Dashboard stat cards
   */
  getDashboardStats: () => apiClient.get("/api/analytics/dashboard"),

  /**
   * Fetch reports statistics
   * @returns {Promise<Array>} Reports stat cards
   */
  getReportsData: () => apiClient.get("/api/analytics/reports"),

  /**
   * Fetch audience statistics
   * @returns {Promise<Array>} Audience stat cards
   */
  getAudienceData: () => apiClient.get("/api/analytics/audience"),

  /**
   * Fetch conversions statistics
   * @returns {Promise<Array>} Conversions stat cards
   */
  getConversionsData: () => apiClient.get("/api/analytics/conversions"),

  /**
   * Fetch chart data by type
   * @param {string} chartType - Type of chart (area, bar, pie)
   * @param {string} timeRange - Time range filter (7d, 30d, etc.)
   * @returns {Promise<Object>} Chart data with values, labels, colors
   */
  getChartData: (chartType, timeRange = "7d") =>
    apiClient.get(`/api/analytics/charts/${chartType}`, {
      params: { range: timeRange },
    }),
};

// ===== Dashboard API =====

export const dashboardAPI = {
  /**
   * Fetch dashboard calendar data
   * @returns {Promise<Object>} Calendar events and tasks
   */
  getCalendarData: () => apiClient.get("/api/dashboard/calendar"),

  /**
   * Fetch dashboard team data
   * @returns {Promise<Array>} Team member information
   */
  getTeamData: () => apiClient.get("/api/dashboard/team"),

  /**
   * Fetch dashboard projects data
   * @returns {Promise<Array>} Project information
   */
  getProjectsData: () => apiClient.get("/api/dashboard/projects"),

  /**
   * Fetch dashboard documents data
   * @returns {Promise<Array>} Document information
   */
  getDocumentsData: () => apiClient.get("/api/dashboard/documents"),

  /**
   * Fetch dashboard notifications data
   * @returns {Promise<Array>} Notification information
   */
  getNotificationsData: () => apiClient.get("/api/dashboard/notifications"),

  /**
   * Fetch dashboard profile data
   * @returns {Promise<Object>} Profile information
   */
  getProfileData: () => apiClient.get("/api/dashboard/profile"),
};

// ===== Auth API =====

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

// ===== Unified API export =====

export const api = {
  analytics: analyticsAPI,
  dashboard: dashboardAPI,
  auth: authAPI,
};

export default api;
