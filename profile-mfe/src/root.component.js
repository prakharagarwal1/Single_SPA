import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ShellHeader } from "@shared/shell-header";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
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
      <BrowserRouter basename="/profile">
        <ShellHeader />
        <Routes>
          <Route path="/" element={<ProfileScreen />} />
          <Route path="settings" element={<SettingsScreen />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Root;
