import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export const PublicRoute = ({ children }) => {

  const context = useContext(AuthContext);

  return context.state.isAuthenticated
    ? <Navigate to="/marvel" />
    : children
}
