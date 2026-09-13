import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ShellHeader } from "@shared/shell-header";
import CalendarScreen from "./screens/CalendarScreen";
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
      <BrowserRouter basename="/calendar">
        <ShellHeader />
        <Routes>
          <Route path="/" element={<CalendarScreen />} />
          <Route path="today" element={<CalendarScreen />} />
          <Route path="week" element={<CalendarScreen />} />
          <Route path="month" element={<CalendarScreen />} />
          <Route path="year" element={<CalendarScreen />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Root;
