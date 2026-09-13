import React, { useState } from "react";
import { StatCard } from "../components/StatCard";
import { AreaChart } from "../components/AreaChart";
import { BarChart } from "../components/BarChart";
import { PieChart } from "../components/PieChart";
import { useDashboardStats } from "@shared/hooks/useDashboardStats";
import { useChartData } from "@shared/hooks/useChartData";
import {
  ChartPieIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

export const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState("7d");
  const [activeChart, setActiveChart] = useState("area");

  const {
    data: stats = [],
    isLoading: statsLoading,
    error: statsError,
  } = useDashboardStats();

  const {
    data: chartData = {
      data: [],
      labels: [],
      color: "#6366f1",
      colors: [],
    },
    isLoading: chartLoading,
    error: chartError,
  } = useChartData(activeChart, timeRange);

  const chartTabs = [
    { id: "area", label: "Revenue trend" },
    { id: "bar", label: "User growth" },
    { id: "pie", label: "Category mix" },
  ];

  const renderChart = () => {
    if (activeChart === "bar") {
      return (
        <BarChart
          data={chartData.data}
          labels={chartData.labels}
          color={chartData.color}
        />
      );
    }

    if (activeChart === "pie") {
      return (
        <PieChart
          data={chartData.data}
          labels={chartData.labels}
          colors={chartData.colors}
        />
      );
    }

    return <AreaChart data={chartData.data} labels={chartData.labels} />;
  };

  if (statsLoading || chartLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Analytics Dashboard
          </h1>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
              disabled
            >
              7 Days
            </button>
            <button
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
              disabled
            >
              30 Days
            </button>
            <button
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
              disabled
            >
              90 Days
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 animate-pulse"
            >
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-8 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (statsError || chartError) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Analytics Dashboard
          </h1>
        </div>
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-red-200 p-6 text-red-600">
          Failed to load dashboard data. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Analytics Dashboard
        </h1>
        <div className="flex gap-2">
          <button
            onClick={() => setTimeRange("7d")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              timeRange === "7d"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            7 Days
          </button>
          <button
            onClick={() => setTimeRange("30d")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              timeRange === "30d"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            30 Days
          </button>
          <button
            onClick={() => setTimeRange("90d")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              timeRange === "90d"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            90 Days
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Charts</h2>
            <p className="text-sm text-gray-500">
              Explore performance across the selected period.
            </p>
          </div>
          <div
            className="flex gap-1 rounded-lg bg-gray-100 p-1"
            role="tablist"
            aria-label="Analytics charts"
          >
            {chartTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeChart === tab.id}
                onClick={() => setActiveChart(tab.id)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  activeChart === tab.id
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 min-h-64 rounded-lg bg-gray-50 p-4">
          {chartData.data.length > 0 ? (
            renderChart()
          ) : (
            <div className="flex h-64 items-center justify-center text-sm text-gray-500">
              Loading chart data...
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex items-center p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">U{item}</span>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  User {item} completed purchase
                </p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
              <div className="text-sm font-semibold text-green-600">
                +$29.99
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
