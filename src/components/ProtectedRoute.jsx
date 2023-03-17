import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAllowed,
  redirectTo = "/landing",
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};
export default ProtectedRoute