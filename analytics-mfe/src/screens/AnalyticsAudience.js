import React from "react";
import { StatCard } from "../components/StatCard";
import { useAudienceData } from "@shared/hooks/useAnalytics";
import {
  UsersIcon,
  MapIcon,
  DevicePhoneMobileIcon as DeviceMobileIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export const AnalyticsAudience = () => {
  const { data: audienceData = [], isLoading, error } = useAudienceData();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Audience Analytics
          </h1>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
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

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Audience Analytics
          </h1>
        </div>
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-red-200 p-6 text-red-600">
          Failed to load audience data. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Audience Analytics</h1>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {audienceData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            User Demographics
          </h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <UsersIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Demographics Chart</p>
              <p className="text-sm text-gray-400">
                Pie chart showing user age groups and locations
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Device Breakdown
          </h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <DeviceMobileIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Device Usage Chart</p>
              <p className="text-sm text-gray-400">
                Bar chart showing desktop, mobile, and tablet usage
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Top User Segments
        </h2>
        <div className="space-y-4">
          {[
            { segment: "Premium Users", count: "3,456", percentage: "27.7%" },
            { segment: "Regular Users", count: "5,678", percentage: "45.5%" },
            { segment: "New Users", count: "2,341", percentage: "18.8%" },
            { segment: "Guest Users", count: "1,234", percentage: "9.9%" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">
                  {index + 1}
                </span>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {item.segment}
                </p>
                <p className="text-xs text-gray-500">{item.count} users</p>
              </div>
              <div className="text-sm font-semibold text-indigo-600">
                {item.percentage}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
