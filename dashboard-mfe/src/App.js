import { useEffect } from "react";
import DashboardScreen from "./screens/DashboardScreen";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@shared/hooks/useAuth";

const App = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated && <DashboardScreen />;
};

export default App;
