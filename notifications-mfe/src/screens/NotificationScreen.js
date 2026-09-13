import React, { useEffect } from "react";
import { useState } from "react";
import { useNotificationsData } from "@shared/hooks/useDashboard";
import {
  BellIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export const NotificationScreen = () => {
  // Fetch notifications data from API using React Query
  const {
    data: notificationsData,
    isLoading: notificationsLoading,
    error: notificationsError,
  } = useNotificationsData();

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "success",
      title: "Payment Successful",
      message: "Your monthly subscription has been renewed successfully.",
      time: "2 minutes ago",
      read: false,
    },
    {
      id: 2,
      type: "warning",
      title: "Low Storage",
      message: "Your storage usage is at 85%. Consider upgrading your plan.",
      time: "15 minutes ago",
      read: false,
    },
    {
      id: 3,
      type: "info",
      title: "New Feature Available",
      message: "We've launched a new analytics dashboard. Check it out!",
      time: "1 hour ago",
      read: true,
    },
    {
      id: 4,
      type: "error",
      title: "Login Attempt Failed",
      message: "We detected an unusual login attempt from a new device.",
      time: "3 hours ago",
      read: false,
    },
    {
      id: 5,
      type: "success",
      title: "Project Completed",
      message:
        "Your project 'Q4 Marketing Campaign' has been completed and deployed.",
      time: "1 day ago",
      read: true,
    },
  ]);

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case "warning":
        return <ExclamationCircleIcon className="h-5 w-5 text-yellow-500" />;
      case "error":
        return <ExclamationCircleIcon className="h-5 w-5 text-red-500" />;
      default:
        return <InformationCircleIcon className="h-5 w-5 text-blue-500" />;
    }
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)),
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  const deleteAllRead = () => {
    setNotifications((prev) => prev.filter((notif) => !notif.read));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
            <p className="text-sm text-gray-500 mt-1">
              {unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={markAllAsRead}
              className="px-4 py-2 text-sm bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              Mark all as read
            </button>
            <button
              onClick={deleteAllRead}
              className="px-4 py-2 text-sm bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Clear read
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {notifications.length === 0 ? (
            <div className="text-center py-12">
              <BellIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No notifications</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`relative p-4 rounded-lg border transition-all ${
                  notification.read
                    ? "bg-white border-gray-200 hover:bg-gray-50"
                    : "bg-indigo-50 border-indigo-200 hover:bg-indigo-100"
                }`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-sm font-medium ${
                          notification.read
                            ? "text-gray-900"
                            : "text-indigo-900"
                        }`}
                      >
                        {notification.title}
                      </h3>
                      <span className="text-xs text-gray-500 ml-2">
                        {notification.time}
                      </span>
                    </div>
                    <p
                      className={`text-sm mt-1 ${
                        notification.read ? "text-gray-600" : "text-indigo-700"
                      }`}
                    >
                      {notification.message}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-4 flex gap-2">
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="p-1 text-indigo-600 hover:text-indigo-800"
                        title="Mark as read"
                      >
                        <CheckCircleIcon className="h-4 w-4" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="p-1 text-gray-400 hover:text-gray-600"
                      title="Delete"
                    >
                      <XMarkIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                {!notification.read && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-l-lg" />
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Notification Settings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Email Notifications
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Daily summary</span>
                <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-indigo-600">
                  <span className="inline-block h-3 w-3 transform rounded-full bg-white translate-x-5" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Weekly reports</span>
                <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-200">
                  <span className="inline-block h-3 w-3 transform rounded-full bg-white translate-x-1" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Marketing updates</span>
                <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-200">
                  <span className="inline-block h-3 w-3 transform rounded-full bg-white translate-x-1" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Push Notifications
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">System alerts</span>
                <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-indigo-600">
                  <span className="inline-block h-3 w-3 transform rounded-full bg-white translate-x-5" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Mentions</span>
                <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-200">
                  <span className="inline-block h-3 w-3 transform rounded-full bg-white translate-x-1" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Comments</span>
                <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-indigo-600">
                  <span className="inline-block h-3 w-3 transform rounded-full bg-white translate-x-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationScreen;
