import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export const PrivateRoute = ({ children }) => {

  const context = useContext(AuthContext);
  const location = useLocation();

  localStorage.setItem('lastPath', location.pathname + location.search);

  return context.state.isAuthenticated
    ? children
    : <Navigate to="/login" />
}
