import { useAuth } from "./useAuth";

export default function useHasPlan() {
  const { user } = useAuth();
  const expiryDate = new Date(user?.plan?.expiry || Date.now());
  const now = new Date();
  const hasPlan = now < expiryDate && (user?.plan?.type ?? "free") !== "free";

  return { hasPlan };
}
