import React from "react";
import { ReactQueryProvider } from "@shared/react-query-provider";
import { ShellHeader } from "@shared/shell-header";
import { AnalyticsDashboard } from "./screens/AnalyticsDashboard";
import { AnalyticsReports } from "./screens/AnalyticsReports";
import { AnalyticsAudience } from "./screens/AnalyticsAudience";
import { AnalyticsConversions } from "./screens/AnalyticsConversions";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Root = () => {
  return (
    <ReactQueryProvider>
      <BrowserRouter basename="/analytics">
        <ShellHeader />
        <Routes>
          <Route path="/" element={<AnalyticsDashboard />} />
          <Route path="reports" element={<AnalyticsReports />} />
          <Route path="audience" element={<AnalyticsAudience />} />
          <Route path="conversions" element={<AnalyticsConversions />} />
        </Routes>
      </BrowserRouter>
    </ReactQueryProvider>
  );
};
