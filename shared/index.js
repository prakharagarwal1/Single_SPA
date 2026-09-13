// Shared utilities for all Micro Frontends
// Re-exports the main API and React Query utilities

export { default as apiClient } from "./api-client";
export { queryClient, ReactQueryProvider } from "./react-query-provider";
export { api, analyticsAPI, dashboardAPI, authAPI } from "./api";
export {
  useDashboardStats,
  useReportsData,
  useAudienceData,
  useConversionsData,
  useChartData,
} from "./hooks/useAnalytics";
export {
  useCalendarData,
  useTeamData,
  useProjectsData,
  useDocumentsData,
  useNotificationsData,
  useProfileData,
} from "./hooks/useDashboard";
export { ShellHeader } from "./shell-header";
