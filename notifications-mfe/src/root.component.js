import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ShellHeader } from "@shared/shell-header";
import NotificationScreen from "./screens/NotificationScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/notifications">
        <ShellHeader />
        <Routes>
          <Route path="/" element={<NotificationScreen />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Root;
