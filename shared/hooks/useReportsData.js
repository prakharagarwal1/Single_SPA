import { useQuery } from "@tanstack/react-query";
import { analyticsAPI } from "../api";

const QUERY_KEY = ["reportsData"];
const STALE_TIME = 5 * 60 * 1000;

export const useReportsData = () => {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      const response = await analyticsAPI.getReportsData();
      return response.data;
    },
    staleTime: STALE_TIME,
  });
};
