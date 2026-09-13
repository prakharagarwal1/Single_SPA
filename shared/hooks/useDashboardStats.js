import { useQuery } from "@tanstack/react-query";
import { analyticsAPI } from "../api";

const QUERY_KEY = ["dashboardStats"];
const STALE_TIME = 5 * 60 * 1000;

export const useDashboardStats = () => {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      const response = await analyticsAPI.getDashboardStats();
      return response.data;
    },
    staleTime: STALE_TIME,
  });
};
