import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useAuth } from "./useAuth";

export default function useHandleLogout() {
  const { setUser } = useAuth();

  async function handleLogout() {
    console.log("Logging out");

    await signOut(auth);
    localStorage.removeItem("user");
    setUser(null);
    window.location.replace("/auth/login");
  }

  return {
    handleLogout,
  };
}
