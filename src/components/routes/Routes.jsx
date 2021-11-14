import { Switch } from "react-router-dom";
import { Home } from "../../pages/Home";
import { ProtectedRoute } from "./ProtectedRoute";

export const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/" exact component={Home} />
    </Switch>
  );
};
