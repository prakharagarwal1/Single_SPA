// Data service for fetching analytics data
import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/analytics";

export const dataService = {
  // Fetch dashboard stats
  async getDashboardStats() {
    try {
      const response = await axios.get(`${API_BASE_URL}/dashboard`);
      return response.data;
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      // Return fallback data for development
      return [
        {
          title: "Total Revenue",
          value: "$45,231.89",
          change: 20.1,
          changeType: "positive",
          icon: "CurrencyDollarIcon",
          color: "bg-green-500",
          subtitle: "Total revenue this period",
        },
        {
          title: "Active Users",
          value: "2,350",
          change: 12.5,
          changeType: "positive",
          icon: "UsersIcon",
          color: "bg-blue-500",
          subtitle: "New users this week",
        },
        {
          title: "Conversion Rate",
          value: "3.2%",
          change: 2.1,
          changeType: "positive",
          icon: "ChartPieIcon",
          color: "bg-purple-500",
          subtitle: "Conversion from visitors",
        },
        {
          title: "Growth",
          value: "15.3%",
          change: 8.2,
          changeType: "positive",
          icon: "ArrowTrendingUpIcon",
          color: "bg-orange-500",
          subtitle: "Monthly growth rate",
        },
      ];
    }
  },

  // Fetch reports data
  async getReportsData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/reports`);
      return response.data;
    } catch (error) {
      console.error("Error fetching reports data:", error);
      // Return fallback data for development
      return [
        {
          title: "Monthly Report",
          value: "12",
          change: 3,
          changeType: "positive",
          icon: "DocumentTextIcon",
          color: "bg-blue-500",
          subtitle: "Reports generated this month",
        },
        {
          title: "Export Downloads",
          value: "1,234",
          change: 15,
          changeType: "positive",
          icon: "DownloadIcon",
          color: "bg-green-500",
          subtitle: "PDF/CSV exports",
        },
        {
          title: "Page Views",
          value: "45.2K",
          change: 8,
          changeType: "positive",
          icon: "TrendingUpIcon",
          color: "bg-purple-500",
          subtitle: "Total page views",
        },
        {
          title: "Average Time",
          value: "4m 32s",
          change: -2,
          changeType: "negative",
          icon: "ChartBarIcon",
          color: "bg-orange-500",
          subtitle: "Average session duration",
        },
      ];
    }
  },

  // Fetch audience data
  async getAudienceData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/audience`);
      return response.data;
    } catch (error) {
      console.error("Error fetching audience data:", error);
      // Return fallback data for development
      return [
        {
          title: "Total Users",
          value: "12,456",
          change: 8.5,
          changeType: "positive",
          icon: "UsersIcon",
          color: "bg-blue-500",
          subtitle: "Total registered users",
        },
        {
          title: "New Users",
          value: "2,341",
          change: 15.2,
          changeType: "positive",
          icon: "DeviceMobileIcon",
          color: "bg-green-500",
          subtitle: "New signups this month",
        },
        {
          title: "Active Sessions",
          value: "8,923",
          change: 3.1,
          changeType: "positive",
          icon: "ClockIcon",
          color: "bg-purple-500",
          subtitle: "Currently active sessions",
        },
        {
          title: "Geographic Reach",
          value: "156",
          change: 12.8,
          changeType: "positive",
          icon: "MapIcon",
          color: "bg-orange-500",
          subtitle: "Countries with users",
        },
      ];
    }
  },

  // Fetch conversion data
  async getConversionData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/conversions`);
      return response.data;
    } catch (error) {
      console.error("Error fetching conversion data:", error);
      // Return fallback data for development
      return [
        {
          title: "Conversion Rate",
          value: "3.24%",
          change: 0.5,
          changeType: "positive",
          icon: "ShoppingCartIcon",
          color: "bg-blue-500",
          subtitle: "Overall conversion rate",
        },
        {
          title: "Total Orders",
          value: "1,234",
          change: 8.2,
          changeType: "positive",
          icon: "CreditCardIcon",
          color: "bg-green-500",
          subtitle: "Orders completed this period",
        },
        {
          title: "Average Order Value",
          value: "$89.50",
          change: 3.1,
          changeType: "positive",
          icon: "TagIcon",
          color: "bg-purple-500",
          subtitle: "Average transaction value",
        },
        {
          title: "Abandoned Cart",
          value: "234",
          change: -5.2,
          changeType: "negative",
          icon: "GiftIcon",
          color: "bg-orange-500",
          subtitle: "Carts abandoned",
        },
      ];
    }
  },

  // Fetch chart data
  async getChartData(chartType, timeRange = "7d") {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/charts/${chartType}?range=${timeRange}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching chart data:", error);
      // Return fallback data for development
      const baseData = [30, 45, 35, 60, 40, 55, 70, 65, 50, 75, 80, 90];
      const labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      switch (chartType) {
        case "area":
          return {
            data: baseData,
            labels: labels.slice(0, baseData.length),
            color: "#6366f1",
          };
        case "bar":
          return {
            data: baseData,
            labels: labels.slice(0, baseData.length),
            color: "#6366f1",
          };
        case "pie":
          return {
            data: [30, 25, 20, 15, 10],
            labels: [
              "Category A",
              "Category B",
              "Category C",
              "Category D",
              "Category E",
            ],
            colors: ["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"],
          };
        default:
          return { data: [], labels: [], color: "#6366f1" };
      }
    }
  },
};
