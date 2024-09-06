import { createContext, useContext } from "react";

interface AuthContext {
  user: TUser | null;
  setUser: (user: TUser | null) => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContext | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
