import { useQuery } from "@tanstack/react-query";
import { analyticsAPI } from "../api";

const QUERY_KEY = ["conversionsData"];
const STALE_TIME = 5 * 60 * 1000;

export const useConversionsData = () => {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      const response = await analyticsAPI.getConversionsData();
      return response.data;
    },
    staleTime: STALE_TIME,
  });
};
