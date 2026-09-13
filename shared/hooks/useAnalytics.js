// React Query hooks for Analytics MFE
// These hooks use useQuery to fetch data with caching, loading, and error states

import { useQuery } from "@tanstack/react-query";
import { analyticsAPI } from "../api";

// Query keys for cache management
export const analyticsQueryKeys = {
  dashboardStats: ["dashboardStats"],
  reportsData: ["reportsData"],
  audienceData: ["audienceData"],
  conversionsData: ["conversionsData"],
  chartData: (chartType, timeRange) => ["chartData", chartType, timeRange],
};

// Default stale time (5 minutes)
const STALE_TIME = 5 * 60 * 1000;

/**
 * Hook to fetch dashboard statistics
 * @returns {Object} Query result with data, isLoading, error
 */
export const useDashboardStats = () => {
  return useQuery({
    queryKey: analyticsQueryKeys.dashboardStats,
    queryFn: () => analyticsAPI.getDashboardStats().then((res) => res.data),
    staleTime: STALE_TIME,
  });
};

/**
 * Hook to fetch reports data
 * @returns {Object} Query result with data, isLoading, error
 */
export const useReportsData = () => {
  return useQuery({
    queryKey: analyticsQueryKeys.reportsData,
    queryFn: () => analyticsAPI.getReportsData().then((res) => res.data),
    staleTime: STALE_TIME,
  });
};

/**
 * Hook to fetch audience data
 * @returns {Object} Query result with data, isLoading, error
 */
export const useAudienceData = () => {
  return useQuery({
    queryKey: analyticsQueryKeys.audienceData,
    queryFn: () => analyticsAPI.getAudienceData().then((res) => res.data),
    staleTime: STALE_TIME,
  });
};

/**
 * Hook to fetch conversions data
 * @returns {Object} Query result with data, isLoading, error
 */
export const useConversionsData = () => {
  return useQuery({
    queryKey: analyticsQueryKeys.conversionsData,
    queryFn: () => analyticsAPI.getConversionsData().then((res) => res.data),
    staleTime: STALE_TIME,
  });
};

/**
 * Hook to fetch chart data
 * @param {string} chartType - Type of chart (area, bar, pie)
 * @param {string} timeRange - Time range filter
 * @returns {Object} Query result with data, isLoading, error
 */
export const useChartData = (chartType, timeRange = "7d") => {
  return useQuery({
    queryKey: analyticsQueryKeys.chartData(chartType, timeRange),
    queryFn: () =>
      analyticsAPI.getChartData(chartType, timeRange).then((res) => res.data),
    staleTime: STALE_TIME,
  });
};
