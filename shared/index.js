// Shared utilities for all Micro Frontends
// Re-exports the main API and React Query utilities

export { default as apiClient } from "./api-client";
export { queryClient, ReactQueryProvider } from "./react-query-provider";
export { api, analyticsAPI, dashboardAPI, authAPI } from "./api";
export { useDashboardStats } from "./hooks/useDashboardStats";
export { useReportsData } from "./hooks/useReportsData";
export { useAudienceData } from "./hooks/useAudienceData";
export { useConversionsData } from "./hooks/useConversionsData";
export { useChartData } from "./hooks/useChartData";
export { useCalendarData } from "./hooks/useCalendarData";
export { useTeamData } from "./hooks/useTeamData";
export { useProjectsData } from "./hooks/useProjectsData";
export { useDocumentsData } from "./hooks/useDocumentsData";
export { useNotificationsData } from "./hooks/useNotificationsData";
export { useProfileData } from "./hooks/useProfileData";
export { useAuth } from "./hooks/useAuth";
export { ShellHeader } from "./shell-header";
