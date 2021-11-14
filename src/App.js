import { Routes } from "./components/routes/Routes";
import { SuspenseWithPerf } from "reactfire";
import { LoadingPage } from "./components/layout/Loading";
import { AuthService } from "./services/AuthService";
import "./App.css";

export const App = () => {
  return (
    <div className="app-container">
      <SuspenseWithPerf fallback={<LoadingPage />}>
        <AuthService>
          <Routes />
        </AuthService>
      </SuspenseWithPerf>
    </div>
  );
};
