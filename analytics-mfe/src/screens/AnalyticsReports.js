import React from "react";
import { StatCard } from "../components/StatCard";
import { useReportsData } from "@shared/hooks/useAnalytics";
import {
  ChartBarIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

export const AnalyticsReports = () => {
  const { data: reports = [], isLoading, error } = useReportsData();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Analytics Reports
          </h1>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            disabled
          >
            Generate New Report
          </button>
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

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Analytics Reports
          </h1>
        </div>
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-red-200 p-6 text-red-600">
          Failed to load reports data. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Reports</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Generate New Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reports.map((report, index) => (
          <StatCard key={index} {...report} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Report Distribution
          </h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <DocumentTextIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Report Distribution Chart</p>
              <p className="text-sm text-gray-400">
                Pie chart showing report types and categories
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Download Trends
          </h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <ArrowDownTrayIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Download Trends Chart</p>
              <p className="text-sm text-gray-400">
                Line chart showing export download patterns
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Reports
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-500">
                  Report Name
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">
                  Type
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">
                  Date
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">
                  Downloads
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Q3 2024 Performance",
                  type: "Financial",
                  date: "Oct 15, 2024",
                  downloads: 234,
                },
                {
                  name: "User Analytics Report",
                  type: "User",
                  date: "Oct 12, 2024",
                  downloads: 567,
                },
                {
                  name: "Marketing Campaign",
                  type: "Marketing",
                  date: "Oct 10, 2024",
                  downloads: 123,
                },
                {
                  name: "System Security Audit",
                  type: "Security",
                  date: "Oct 8, 2024",
                  downloads: 89,
                },
              ].map((report, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {report.name}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-500">
                    {report.type}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-500">
                    {report.date}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {report.downloads}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
