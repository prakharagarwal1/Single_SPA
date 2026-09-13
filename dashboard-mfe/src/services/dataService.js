import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/dashboard";
const ANALYTICS_API_URL = "http://localhost:3001/api/analytics";

export const dataService = {
  // Fetch analytics dashboard stat cards
  async getDashboardData() {
    try {
      const response = await axios.get(`${ANALYTICS_API_URL}/dashboard`);
      return response.data;
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
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

  // Fetch analytics reports stat cards
  async getReportsData() {
    try {
      const response = await axios.get(`${ANALYTICS_API_URL}/reports`);
      return response.data;
    } catch (error) {
      console.error("Error fetching reports data:", error);
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

  // Fetch audience stat cards
  async getAudienceData() {
    try {
      const response = await axios.get(`${ANALYTICS_API_URL}/audience`);
      return response.data;
    } catch (error) {
      console.error("Error fetching audience data:", error);
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

  // Fetch conversions stat cards
  async getConversionsData() {
    try {
      const response = await axios.get(`${ANALYTICS_API_URL}/conversions`);
      return response.data;
    } catch (error) {
      console.error("Error fetching conversions data:", error);
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

  // Fetch chart data by type
  async getChartData(chartType) {
    try {
      const response = await axios.get(
        `${ANALYTICS_API_URL}/charts/${chartType}`,
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${chartType} chart data:`, error);
      return {
        data: [30, 45, 35, 60, 40, 55, 70, 65, 50, 75, 80, 90],
        labels: [
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
        ],
        color: "#6366f1",
      };
    }
  },

  // Fetch calendar data
  async getCalendarData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/calendar`);
      return response.data;
    } catch (error) {
      console.error("Error fetching calendar data:", error);
      // Return fallback data for development
      return {
        upcomingEvents: [
          { title: "Team Standup", date: "Today, 9:00 AM", type: "Meeting" },
          { title: "Design Review", date: "Today, 2:00 PM", type: "Meeting" },
          {
            title: "Sprint Planning",
            date: "Tomorrow, 10:00 AM",
            type: "Meeting",
          },
          {
            title: "Client Demo",
            date: "Nov 10, 2024, 3:00 PM",
            type: "Client",
          },
          {
            title: "Team Lunch",
            date: "Nov 11, 2024, 12:30 PM",
            type: "Social",
          },
        ],
        tasks: [
          { title: "Complete Q4 roadmap", progress: 75 },
          { title: "Fix login bug", progress: 40 },
          { title: "Write API docs", progress: 90 },
          { title: "Refactor dashboard", progress: 60 },
        ],
      };
    }
  },

  // Fetch team data
  async getTeamData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/team`);
      return response.data;
    } catch (error) {
      console.error("Error fetching team data:", error);
      // Return fallback data for development
      return [
        {
          name: "Sarah Chen",
          role: "Frontend Engineer",
          avatar: "SC",
          status: "active",
          email: "sarah.chen@example.com",
        },
        {
          name: "Marcus Lee",
          role: "Backend Engineer",
          avatar: "ML",
          status: "active",
          email: "marcus.lee@example.com",
        },
        {
          name: "Aisha Patel",
          role: "Product Designer",
          avatar: "AP",
          status: "away",
          email: "aisha.patel@example.com",
        },
        {
          name: "Diego Ramos",
          role: "DevOps Engineer",
          avatar: "DR",
          status: "active",
          email: "diego.ramos@example.com",
        },
        {
          name: "Yuki Tanaka",
          role: "Data Analyst",
          avatar: "YT",
          status: "offline",
          email: "yuki.tanaka@example.com",
        },
      ];
    }
  },

  // Fetch projects data
  async getProjectsData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/projects`);
      return response.data;
    } catch (error) {
      console.error("Error fetching projects data:", error);
      // Return fallback data for development
      return [
        {
          title: "E-commerce Platform",
          progress: 78,
          status: "In Progress",
          team: 5,
          deadline: "Nov 30, 2024",
        },
        {
          title: "Mobile App Redesign",
          progress: 45,
          status: "In Progress",
          team: 3,
          deadline: "Dec 15, 2024",
        },
        {
          title: "Analytics Dashboard",
          progress: 90,
          status: "Review",
          team: 4,
          deadline: "Nov 20, 2024",
        },
        {
          title: "API Gateway",
          progress: 25,
          status: "Planning",
          team: 2,
          deadline: "Jan 5, 2025",
        },
      ];
    }
  },

  // Fetch documents data
  async getDocumentsData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/documents`);
      return response.data;
    } catch (error) {
      console.error("Error fetching documents data:", error);
      // Return fallback data for development
      return [
        {
          title: "Q4 Product Strategy",
          type: "PDF",
          size: "2.4 MB",
          modified: "Nov 5, 2024",
          owner: "Aisha Patel",
        },
        {
          title: "Engineering Handbook",
          type: "DOCX",
          size: "1.8 MB",
          modified: "Oct 28, 2024",
          owner: "Marcus Lee",
        },
        {
          title: "API Design Spec",
          type: "PDF",
          size: "3.1 MB",
          modified: "Nov 8, 2024",
          owner: "Diego Ramos",
        },
        {
          title: "Design System",
          type: "FIGMA",
          size: "12.5 MB",
          modified: "Nov 9, 2024",
          owner: "Aisha Patel",
        },
      ];
    }
  },

  // Fetch notifications data
  async getNotificationsData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/notifications`);
      return response.data;
    } catch (error) {
      console.error("Error fetching notifications data:", error);
      // Return fallback data for development
      return [
        {
          title: "New team member joined",
          description: "Welcome Yuki Tanaka to the team",
          time: "2 hours ago",
          type: "info",
          read: false,
        },
        {
          title: "Sprint review completed",
          description: "Sprint 14 review is now available",
          time: "5 hours ago",
          type: "success",
          read: false,
        },
        {
          title: "Deployment failed",
          description: "Build #247 failed on staging",
          time: "1 day ago",
          type: "error",
          read: true,
        },
        {
          title: "New comment on PR #12",
          description: "Marcus Lee commented on your pull request",
          time: "2 days ago",
          type: "info",
          read: true,
        },
      ];
    }
  },

  // Fetch profile data
  async getProfileData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/profile`);
      return response.data;
    } catch (error) {
      console.error("Error fetching profile data:", error);
      // Return fallback data for development
      return {
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Product Manager",
        department: "Product",
        location: "San Francisco, CA",
        avatar: "JD",
        bio: "Product manager with 8+ years of experience building data products.",
        stats: [
          { label: "Projects", value: "12" },
          { label: "Team Members", value: "24" },
          { label: "Sprints", value: "8" },
          { label: "Tasks Completed", value: "342" },
        ],
        recentActivity: [
          {
            action: "Created project",
            detail: "E-commerce Platform",
            time: "2 hours ago",
          },
          {
            action: "Updated roadmap",
            detail: "Q4 Product Strategy",
            time: "1 day ago",
          },
          {
            action: "Reviewed PR",
            detail: "#12 - Auth flow",
            time: "2 days ago",
          },
        ],
      };
    }
  },
};
