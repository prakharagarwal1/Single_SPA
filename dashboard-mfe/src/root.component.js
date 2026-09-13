import React from "react";
import { ReactQueryProvider } from "@shared/react-query-provider";
import { ShellHeader } from "@shared/shell-header";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export const Root = () => {
  return (
    <ReactQueryProvider>
      <BrowserRouter basename="dashboard">
        <ShellHeader />
        <App />
      </BrowserRouter>
    </ReactQueryProvider>
  );
};

export default Root;
