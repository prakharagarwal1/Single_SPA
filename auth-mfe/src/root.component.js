import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export const Root = () => {
  return (
    // Importance : Keep UI sync with browser URLs
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LoginScreen />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Root;
