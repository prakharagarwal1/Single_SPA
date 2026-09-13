import { useQuery } from "@tanstack/react-query";
import { dashboardAPI } from "../api";

const QUERY_KEY = ["calendarData"];
const STALE_TIME = 5 * 60 * 1000;

export const useCalendarData = () => {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      const response = await dashboardAPI.getCalendarData();
      return response.data;
    },
    staleTime: STALE_TIME,
  });
};
