import React from "react";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CurrencyDollarIcon,
  UsersIcon,
  ChartPieIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon,
  ArrowTrendingUpIcon as TrendingUpIcon,
  DevicePhoneMobileIcon as DeviceMobileIcon,
  ClockIcon,
  MapIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  TagIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

// Map icon names to actual icon components
const iconMap = {
  CurrencyDollarIcon,
  UsersIcon,
  ChartPieIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon,
  TrendingUpIcon,
  DeviceMobileIcon,
  ClockIcon,
  MapIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  TagIcon,
  GiftIcon,
};

export const StatCard = ({
  title,
  value,
  change,
  changeLabel,
  icon,
  color,
}) => {
  const isPositive = change >= 0;
  const colorClasses =
    {
      blue: "bg-blue-50 text-blue-600",
      emerald: "bg-emerald-50 text-emerald-600",
      violet: "bg-violet-50 text-violet-600",
      amber: "bg-amber-50 text-amber-600",
      rose: "bg-rose-50 text-rose-600",
      indigo: "bg-indigo-50 text-indigo-600",
    }[color] || "bg-gray-50 text-gray-600";

  // Get the actual icon component from the map
  const IconComponent = iconMap[icon] || CurrencyDollarIcon;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`rounded-xl p-3 ${colorClasses}`}>
          <IconComponent className="h-6 w-6" aria-hidden="true" />
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm">
        {isPositive ? (
          <ArrowTrendingUpIcon className="h-4 w-4 text-emerald-500" />
        ) : (
          <ArrowTrendingDownIcon className="h-4 w-4 text-rose-500" />
        )}
        <span
          className={
            isPositive ? "ml-1 text-emerald-600" : "ml-1 text-rose-600"
          }
        >
          {change}%
        </span>
        <span className="ml-2 text-gray-500">{changeLabel}</span>
      </div>
    </div>
  );
};
