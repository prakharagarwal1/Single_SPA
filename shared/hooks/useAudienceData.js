import { useQuery } from "@tanstack/react-query";
import { analyticsAPI } from "../api";

const QUERY_KEY = ["audienceData"];
const STALE_TIME = 5 * 60 * 1000;

export const useAudienceData = () => {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      const response = await analyticsAPI.getAudienceData();
      return response.data;
    },
    staleTime: STALE_TIME,
  });
};
