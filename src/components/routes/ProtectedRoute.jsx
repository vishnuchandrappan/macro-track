import { Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../services/AuthService";
import { Login } from "../auth/Login";

export const ProtectedRoute = ({ path, component: Component, ...rest }) => {
  const { username } = useContext(AuthContext);

  return (
    <Route path={path} {...rest}>
      {username ? <Component /> : <Login />}
    </Route>
  );
};
