// Analytics API query functions
// Fetches dashboard, reports, audience, conversions, and chart data.

import apiClient from "../api-client";

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

export default analyticsAPI;
