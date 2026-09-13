import React from "react";
import { useState } from "react";
import { useCalendarData } from "@shared/hooks/useDashboard";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  CalendarIcon,
  ClockIcon,
  UsersIcon,
  CheckCircleIcon,
  PhoneIcon,
  ClipboardIcon,
  MapPinIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

export const CalendarScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("month");

  // Fetch calendar data from API using React Query
  const {
    data: calendarData,
    isLoading: calendarLoading,
    error: calendarError,
  } = useCalendarData();

  // Fallback events if API data is not available
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Team Meeting",
      date: new Date(2024, 8, 15, 10, 0),
      duration: "30 min",
      type: "meeting",
      attendees: ["John Doe", "Jane Smith", "Mike Johnson"],
      location: "Conference Room A",
    },
    {
      id: 2,
      title: "Product Launch Review",
      date: new Date(2024, 8, 16, 14, 0),
      duration: "45 min",
      type: "review",
      attendees: ["Sarah Wilson", "Tom Brown"],
      location: "Office 3rd Floor",
    },
    {
      id: 3,
      title: "Client Call",
      date: new Date(2024, 8, 17, 9, 0),
      duration: "60 min",
      type: "call",
      attendees: ["Alice Davis"],
      location: "Zoom",
    },
    {
      id: 4,
      title: "Quarterly Planning",
      date: new Date(2024, 8, 18, 15, 0),
      duration: "90 min",
      type: "planning",
      attendees: ["John Doe", "Jane Smith", "Mike Johnson", "Sarah Wilson"],
      location: "Board Room",
    },
    {
      id: 5,
      title: "Lunch with Team",
      date: new Date(2024, 8, 19, 12, 0),
      duration: "60 min",
      type: "lunch",
      attendees: ["John Doe", "Jane Smith", "Mike Johnson"],
      location: "Restaurant",
    },
  ]);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const getEventsForDate = (date) => {
    if (!date) return [];
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    );
  };

  const getEventTypeColor = (type) => {
    const colors = {
      meeting: "bg-blue-100 text-blue-800 border-blue-200",
      review: "bg-purple-100 text-purple-800 border-purple-200",
      call: "bg-green-100 text-green-800 border-green-200",
      planning: "bg-orange-100 text-orange-800 border-orange-200",
      lunch: "bg-pink-100 text-pink-800 border-pink-200",
    };
    return colors[type] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const monthDays = getDaysInMonth(currentDate);
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage your schedule and appointments
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setView("day")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                view === "day"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Day
            </button>
            <button
              onClick={() => setView("week")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                view === "week"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setView("month")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                view === "month"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Month
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
              <PlusIcon className="h-4 w-4" />
              New Event
            </button>
          </div>
        </div>

        {view === "month" && (
          <div>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-gray-500 py-2"
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {monthDays.map((day, index) => (
                <div
                  key={index}
                  className={`min-h-[100px] p-2 border border-gray-200 rounded-lg ${
                    day ? "bg-white hover:bg-gray-50" : "bg-gray-50"
                  } ${
                    day && day.getMonth() !== currentDate.getMonth()
                      ? "opacity-50"
                      : ""
                  }`}
                >
                  {day && (
                    <>
                      <div
                        className={`text-sm font-medium mb-2 ${
                          day.toDateString() === new Date().toDateString()
                            ? "text-indigo-600"
                            : "text-gray-900"
                        }`}
                      >
                        {day.getDate()}
                      </div>
                      {getEventsForDate(day)
                        .slice(0, 3)
                        .map((event) => (
                          <div
                            key={event.id}
                            className={`text-xs p-1 rounded mb-1 truncate border ${getEventTypeColor(
                              event.type,
                            )}`}
                          >
                            {event.title}
                          </div>
                        ))}
                      {getEventsForDate(day).length > 3 && (
                        <div className="text-xs text-gray-500">
                          +{getEventsForDate(day).length - 3} more
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {(view === "day" || view === "week") && (
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <h2 className="text-lg font-semibold text-gray-900">
                {monthName} {year}
              </h2>
              <button
                onClick={() => navigateMonth(1)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="text-sm font-semibold text-gray-900">
                      {event.date.getHours()}:
                      {event.date.getMinutes().toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs text-gray-500">
                      {event.duration}
                    </div>
                  </div>
                  <div className="flex-shrink-0 mr-4">
                    {event.type === "meeting" && (
                      <CalendarIcon className="h-5 w-5 text-blue-500" />
                    )}
                    {event.type === "review" && (
                      <CheckCircleIcon className="h-5 w-5 text-purple-500" />
                    )}
                    {event.type === "call" && (
                      <PhoneIcon className="h-5 w-5 text-green-500" />
                    )}
                    {event.type === "planning" && (
                      <ClipboardIcon className="h-5 w-5 text-orange-500" />
                    )}
                    {event.type === "lunch" && (
                      <GiftIcon className="h-5 w-5 text-pink-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <UsersIcon className="h-3 w-3" />
                        {event.attendees.length} attendees
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPinIcon className="h-3 w-3" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full border ${getEventTypeColor(
                        event.type,
                      )}`}
                    >
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <div className="space-y-3">
            {events.slice(0, 5).map((event) => (
              <div
                key={event.id}
                className="flex items-center p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0 mr-3">
                  <div className="text-xs font-semibold text-gray-900">
                    {event.date.getMonth() + 1}/{event.date.getDate()}
                  </div>
                  <div className="text-xs text-gray-500">
                    {event.date.getHours()}:
                    {event.date.getMinutes().toString().padStart(2, "0")}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {event.title}
                  </p>
                  <p className="text-xs text-gray-500">{event.location}</p>
                </div>
                <div className="flex-shrink-0">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full border ${getEventTypeColor(
                      event.type,
                    )}`}
                  >
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <button className="w-full flex items-center p-3 text-left bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors">
              <PlusIcon className="h-5 w-5 mr-3" />
              Create New Event
            </button>
            <button className="w-full flex items-center p-3 text-left bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              <CalendarIcon className="h-5 w-5 mr-3" />
              View Calendar
            </button>
            <button className="w-full flex items-center p-3 text-left bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              <UsersIcon className="h-5 w-5 mr-3" />
              Invite Team
            </button>
            <button className="w-full flex items-center p-3 text-left bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              <ClockIcon className="h-5 w-5 mr-3" />
              Set Reminders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarScreen;
