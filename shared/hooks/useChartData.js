import { useQuery } from "@tanstack/react-query";
import { analyticsAPI } from "../api";

const STALE_TIME = 5 * 60 * 1000;

export const useChartData = (chartType, timeRange = "7d") => {
  return useQuery({
    queryKey: ["chartData", chartType, timeRange],
    queryFn: async () => {
      const response = await analyticsAPI.getChartData(chartType, timeRange);
      return response.data;
    },
    staleTime: STALE_TIME,
  });
};
