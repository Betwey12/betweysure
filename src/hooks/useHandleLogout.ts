import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useAuth } from "./useAuth";

export default function useHandleLogout() {
  const { setUser } = useAuth();

  async function handleLogout() {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      setUser(null);
      window.location.href = "/auth/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return {
    handleLogout,
  };
}
