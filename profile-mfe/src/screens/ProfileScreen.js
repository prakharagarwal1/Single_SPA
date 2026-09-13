import React, { useEffect } from "react";
import { useState } from "react";
import { useProfileData } from "@shared/hooks/useProfileData";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";

export const ProfileScreen = () => {
  // Fetch profile data from API using React Query
  const {
    data: profileData,
    isLoading: profileLoading,
    error: profileError,
  } = useProfileData();

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Product designer and frontend developer with 5+ years of experience building user interfaces for web applications.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });

  // Update profile state when API data arrives
  useEffect(() => {
    if (profileData) {
      setProfile({
        name: profileData.name || profile.name,
        email: profileData.email || profile.email,
        phone: profileData.phone || profile.phone,
        bio: profileData.bio || profile.bio,
        avatar: profileData.avatar || profile.avatar,
      });
    }
  }, [profileData]);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        <div className="flex items-center space-x-6 mb-8">
          <div className="relative">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-24 w-24 rounded-full object-cover"
            />
            {isEditing && (
              <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                <CameraIcon className="h-4 w-4 text-gray-600" />
              </button>
            )}
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {profile.name}
            </h2>
            <p className="text-gray-500">Product Designer</p>
          </div>
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <div className="relative">
                <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-3" />
              <span className="text-sm text-gray-600">{profile.email}</span>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <PhoneIcon className="h-5 w-5 text-gray-400 mr-3" />
              <span className="text-sm text-gray-600">{profile.phone}</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">{profile.bio}</p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-3">
            {[
              {
                action: "Updated profile information",
                time: "2 hours ago",
                type: "profile",
              },
              {
                action: "Changed password",
                time: "1 day ago",
                type: "security",
              },
              {
                action: "Logged in from new device",
                time: "3 days ago",
                type: "security",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-gray-50 rounded-lg"
              >
                <div
                  className={`w-2 h-2 rounded-full mr-3 ${
                    activity.type === "profile"
                      ? "bg-blue-500"
                      : activity.type === "security"
                      ? "bg-green-500"
                      : "bg-purple-500"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Account Statistics
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Member since</span>
              <span className="text-sm font-medium text-gray-900">
                January 2023
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Projects completed</span>
              <span className="text-sm font-medium text-gray-900">24</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Team members</span>
              <span className="text-sm font-medium text-gray-900">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Last login</span>
              <span className="text-sm font-medium text-gray-900">Today</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
