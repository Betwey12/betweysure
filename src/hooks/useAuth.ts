import { createContext, useContext } from "react";

interface AuthContext {
  user: TAuthUser | null;
  setUser: (user: TAuthUser | null) => void;
  isLoading: boolean;
  signInWithSocial: () => void;
}

export const AuthContext = createContext<AuthContext | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
