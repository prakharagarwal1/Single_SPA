import { useEffect, useState } from "react";
import DashboardScreen from "./screens/DashboardScreen";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return isAuthenticated && <DashboardScreen />;
};

export default App;
