// AuthRoutes.js
import { Routes, Route } from "react-router-dom";
import Login from "../components/login/login";
import Signup from "../components/signup/Signup";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AuthRoutes;
