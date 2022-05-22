import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export const PrivateRoute = ({ children }) => {

  const context = useContext(AuthContext);

  return context.state.isAuthenticated
    ? children
    : <Navigate to="/login" />
}
