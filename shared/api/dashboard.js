// Dashboard API query functions
// Fetches calendar, team, projects, documents, notifications, and profile data.

import apiClient from "../api-client";

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

export default dashboardAPI;
