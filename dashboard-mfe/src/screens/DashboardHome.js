import { useDashboardStats } from "@shared/hooks/useAnalytics";
import { useProjectsData } from "@shared/hooks/useDashboard";
import {
  ArrowTrendingUpIcon,
  UsersIcon,
  FolderIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export const DashboardHome = () => {
  const {
    data: dashboardData = [],
    isLoading: dashboardLoading,
    error: dashboardError,
  } = useDashboardStats();

  const {
    data: projectsData = [],
    isLoading: projectsLoading,
    error: projectsError,
  } = useProjectsData();

  const isLoading = dashboardLoading || projectsLoading;
  const hasError = dashboardError || projectsError;

  const iconMap = {
    CurrencyDollarIcon,
    UsersIcon,
    ChartBarIcon,
    ArrowTrendingUpIcon,
  };

  const statusColors = {
    "In Progress": "bg-blue-100 text-blue-800",
    Review: "bg-yellow-100 text-yellow-800",
    Planning: "bg-gray-100 text-gray-800",
    Completed: "bg-green-100 text-green-800",
  };

  const totalProgress =
    projectsData.length > 0
      ? Math.round(
          projectsData.reduce((sum, p) => sum + p.progress, 0) /
            projectsData.length,
        )
      : 0;

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500">
            Overview of your business at a glance
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

  if (hasError) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-red-200 p-6 text-red-600">
          Failed to load dashboard data. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Overview of your business at a glance
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardData.map((stat, index) => {
          const Icon = iconMap[stat.icon] || ArrowTrendingUpIcon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{stat.subtitle}</p>
                </div>
                <div
                  className={`flex-shrink-0 w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}
                >
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span
                  className={`font-medium ${
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.changeType === "positive" ? "+" : ""}
                  {stat.change}%
                </span>
                <span className="text-gray-500 ml-2">vs last period</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projects overview */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Projects Overview
            </h2>
            <span className="text-sm text-gray-500">
              {projectsData.length} active
            </span>
          </div>
          <div className="space-y-4">
            {projectsData.slice(0, 4).map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FolderIcon className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="text-sm font-medium text-gray-900">
                      {project.title}
                    </span>
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                        statusColors[project.status] ||
                        statusColors["In Progress"]
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Stats
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Avg. Progress</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {totalProgress}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <UsersIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Total Team</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {projectsData.reduce((sum, p) => sum + p.team, 0)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FolderIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Active Projects</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {projectsData.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
