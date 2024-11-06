import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AuthRoutes from "./superAdminPortal/authRoutes/Login";
import MainRoute from "./superAdminPortal/mainRoutes/MainRoute";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <Provider store={store}>
      {isAuthPage ? <AuthRoutes /> : <MainRoute />}
    </Provider>
  );
};

const MainApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default MainApp;
