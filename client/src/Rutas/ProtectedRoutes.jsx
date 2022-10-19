import React from "react";

import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAllowed, children, redirectTo = "/" }) {
  if (!isAllowed) return <Navigate to={redirectTo} />;

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
