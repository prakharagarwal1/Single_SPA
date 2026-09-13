// React Query provider wrapper for single-spa Micro Frontends
// Wrap any MFE root component with this provider to enable
// data fetching, caching, and synchronization across the app.

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Shared QueryClient configuration
// All MFEs share the same cache settings for consistency
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1,
      refetchOnMount: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

/**
 * Wraps a component with React Query provider
 * @param {React.Element} children - The component to wrap
 * @returns {React.Element} Wrapped component
 */
export const ReactQueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
