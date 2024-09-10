import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useEffect, useState } from "react";

type Provider = GoogleAuthProvider | TwitterAuthProvider;
export const useSocialSignup = (provider: Provider) => {
  // State variables to manage sign-up process
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  // Function to initiate the social sign-up process
  const signInWithSocial = async () => {
    setError(null);
    setIsPending(true);

    try {
      await signInWithPopup(auth, provider);

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err: any) {
      setError(err.message);
      setIsPending(false);
    }
  };

  // Effect hook to set isCancelled to true when component unmounts
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  // Return values and functions for component usage
  return { error, isPending, signInWithSocial };
};
