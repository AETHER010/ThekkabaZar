// ProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ path, element }) => {
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
