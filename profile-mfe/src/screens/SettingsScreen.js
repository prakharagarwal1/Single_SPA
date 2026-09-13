import React from "react";
import { useState } from "react";
import {
  BellIcon,
  LockClosedIcon,
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export const SettingsScreen = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      marketing: false,
    },
    theme: "system",
    privacy: "private",
    language: "en",
  });

  const handleSettingChange = (category, key, value) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value,
      },
    }));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Notifications
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BellIcon className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Email Notifications
                </p>
                <p className="text-xs text-gray-500">Receive email updates</p>
              </div>
            </div>
            <button
              onClick={() =>
                handleSettingChange(
                  "notifications",
                  "email",
                  !settings.notifications.email,
                )
              }
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.email ? "bg-indigo-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications.email
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BellIcon className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Push Notifications
                </p>
                <p className="text-xs text-gray-500">
                  Receive browser push notifications
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                handleSettingChange(
                  "notifications",
                  "push",
                  !settings.notifications.push,
                )
              }
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.push ? "bg-indigo-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications.push
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BellIcon className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Marketing Emails
                </p>
                <p className="text-xs text-gray-500">
                  Receive promotional emails
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                handleSettingChange(
                  "notifications",
                  "marketing",
                  !settings.notifications.marketing,
                )
              }
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications.marketing
                  ? "bg-indigo-600"
                  : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications.marketing
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Appearance</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MoonIcon className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">Theme</p>
                <p className="text-xs text-gray-500">
                  Choose your preferred theme
                </p>
              </div>
            </div>
            <select
              value={settings.theme}
              onChange={(e) => handleSettingChange("theme", "", e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Privacy</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <LockClosedIcon className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Profile Privacy
                </p>
                <p className="text-xs text-gray-500">
                  Control who can see your profile
                </p>
              </div>
            </div>
            <select
              value={settings.privacy}
              onChange={(e) =>
                handleSettingChange("privacy", "", e.target.value)
              }
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="public">Public</option>
              <option value="friends">Friends Only</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Language</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GlobeAltIcon className="h-5 w-5 text-gray-400 mr-3" />
            <div>
              <p className="text-sm font-medium text-gray-900">Language</p>
              <p className="text-xs text-gray-500">
                Choose your preferred language
              </p>
            </div>
          </div>
          <select
            value={settings.language}
            onChange={(e) =>
              handleSettingChange("language", "", e.target.value)
            }
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Save Settings
        </button>
        <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SettingsScreen;
