// React Query hooks for Dashboard MFE
// These hooks use useQuery to fetch dashboard data with caching and error handling

import { useQuery } from "@tanstack/react-query";
import { dashboardAPI } from "../api";

// Query keys for cache management
export const dashboardQueryKeys = {
  calendar: ["calendarData"],
  team: ["teamData"],
  projects: ["projectsData"],
  documents: ["documentsData"],
  notifications: ["notificationsData"],
  profile: ["profileData"],
};

// Default stale time (5 minutes)
const STALE_TIME = 5 * 60 * 1000;

/**
 * Hook to fetch calendar data
 * @returns {Object} Query result with data, isLoading, error
 */
export const useCalendarData = () => {
  return useQuery({
    queryKey: dashboardQueryKeys.calendar,
    queryFn: () => dashboardAPI.getCalendarData().then((res) => res.data),
    staleTime: STALE_TIME,
  });
};

/**
 * Hook to fetch team data
 * @returns {Object} Query result with data, isLoading, error
 */
export const useTeamData = () => {
  return useQuery({
    queryKey: dashboardQueryKeys.team,
    queryFn: () => dashboardAPI.getTeamData().then((res) => res.data),
    staleTime: STALE_TIME,
  });
};

/**
 * Hook to fetch projects data
 * @returns {Object} Query result with data, isLoading, error
 */
export const useProjectsData = () => {
  return useQuery({
    queryKey: dashboardQueryKeys.projects,
    queryFn: () => dashboardAPI.getProjectsData().then((res) => res.data),
    staleTime: STALE_TIME,
  });
};

/**
 * Hook to fetch documents data
 * @returns {Object} Query result with data, isLoading, error
 */
export const useDocumentsData = () => {
  return useQuery({
    queryKey: dashboardQueryKeys.documents,
    queryFn: () => dashboardAPI.getDocumentsData().then((res) => res.data),
    staleTime: STALE_TIME,
  });
};

/**
 * Hook to fetch notifications data
 * @returns {Object} Query result with data, isLoading, error
 */
export const useNotificationsData = () => {
  return useQuery({
    queryKey: dashboardQueryKeys.notifications,
    queryFn: () => dashboardAPI.getNotificationsData().then((res) => res.data),
    staleTime: STALE_TIME,
  });
};

/**
 * Hook to fetch profile data
 * @returns {Object} Query result with data, isLoading, error
 */
export const useProfileData = () => {
  return useQuery({
    queryKey: dashboardQueryKeys.profile,
    queryFn: () => dashboardAPI.getProfileData().then((res) => res.data),
    staleTime: STALE_TIME,
  });
};
