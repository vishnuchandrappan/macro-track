import { createContext } from "react";
import { usePersistedStore } from "../hooks/usePersistedStore";

export const AuthContext = createContext();

export const AuthService = ({ children }) => {
  const [auth, setAuth] = usePersistedStore(null, "auth");

  return (
    <AuthContext.Provider value={{ username: auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
