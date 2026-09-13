// Centralized API barrel
// Re-exports per-domain API modules so consumers can import
// from "@shared/api" without knowing the internal file layout.

export { analyticsAPI } from "./analytics";
export { dashboardAPI } from "./dashboard";
export { authAPI } from "./auth";

// Unified API export
import analyticsAPI from "./analytics";
import dashboardAPI from "./dashboard";
import authAPI from "./auth";

export const api = {
  analytics: analyticsAPI,
  dashboard: dashboardAPI,
  auth: authAPI,
};

export default api;
