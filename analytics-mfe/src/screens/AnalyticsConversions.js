import React from "react";
import { StatCard } from "../components/StatCard";
import { useConversionsData } from "@shared/hooks/useConversionsData";
import {
  CreditCardIcon,
  ShoppingCartIcon,
  TagIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

export const AnalyticsConversions = () => {
  const { data: conversionData = [], isLoading, error } = useConversionsData();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Conversion Analytics
          </h1>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            disabled
          >
            Export Data
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
            Conversion Analytics
          </h1>
        </div>
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-red-200 p-6 text-red-600">
          Failed to load conversion data. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Conversion Analytics
        </h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Export Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {conversionData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Conversion Funnel
          </h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <ShoppingCartIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Conversion Funnel Chart</p>
              <p className="text-sm text-gray-400">
                Visual representation of user conversion steps
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Payment Methods
          </h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <CreditCardIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Payment Methods Chart</p>
              <p className="text-sm text-gray-400">
                Breakdown of payment methods used
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Conversions
        </h2>
        <div className="space-y-4">
          {[
            {
              id: "ORD-001",
              customer: "John Doe",
              amount: "$125.00",
              time: "2 minutes ago",
              status: "Completed",
            },
            {
              id: "ORD-002",
              customer: "Jane Smith",
              amount: "$89.50",
              time: "15 minutes ago",
              status: "Completed",
            },
            {
              id: "ORD-003",
              customer: "Mike Johnson",
              amount: "$234.00",
              time: "1 hour ago",
              status: "Pending",
            },
            {
              id: "ORD-004",
              customer: "Sarah Wilson",
              amount: "$67.25",
              time: "2 hours ago",
              status: "Completed",
            },
          ].map((order, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">
                  ${order.id.split("-")[1]}
                </span>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {order.customer}
                </p>
                <p className="text-xs text-gray-500">{order.time}</p>
              </div>
              <div className="text-sm font-semibold text-gray-900">
                {order.amount}
              </div>
              <div
                className={`ml-4 px-2 py-1 rounded-full text-xs font-medium ${
                  order.status === "Completed"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {order.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
