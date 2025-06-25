import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useEffect, useState, useCallback } from "react";

type Provider = GoogleAuthProvider | TwitterAuthProvider;

export const useSocialSignup = (provider: Provider) => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  const signInWithSocial = useCallback(async () => {
    setError(null);
    setIsPending(true);

    try {
      await signInWithRedirect(auth, provider);
    } catch (err: any) {
      if (!isCancelled) {
        setError(err.message ?? "Redirect sign-in failed.");
        setIsPending(false);
      }
    }
  }, [provider, isCancelled]);

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, signInWithSocial };
};
