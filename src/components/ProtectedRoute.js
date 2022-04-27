import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const token = localStorage.getItem("token");
  return isAuthenticated && token ? children : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
