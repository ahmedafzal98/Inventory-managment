import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AuthRoutes from "./superAdminPortal/authRoutes/Login";
import MainRoute from "./superAdminPortal/mainRoutes/MainRoute";

const App = () => {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return isAuthPage ? <AuthRoutes /> : <MainRoute />;
};

const MainApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default MainApp;
