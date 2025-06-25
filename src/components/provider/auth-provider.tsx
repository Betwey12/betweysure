"use client";

import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "@/hooks/useAuth";
import { HTTPRequest } from "@/api";
import { auth, googleProvider } from "@/firebase/config";
import { useSocialSignup } from "@/hooks/useSocialSignup";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [userId, setUserId] = useState<string>();
  const [firebaseUser, setFirebaseUser] = useState<User | null | undefined>(
    undefined,
  );
  const [user, setUser] = useState<TAuthUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { signInWithSocial, isPending, setIsPending } =
    useSocialSignup(googleProvider);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const token = await firebaseUser.getIdToken();
        localStorage.setItem("token", token);
        setFirebaseUser(firebaseUser);
        setUserId(firebaseUser.uid);
      } else {
        localStorage.removeItem("token");
        setFirebaseUser(null);
        setUserId(undefined);
        setUser(null);
        setIsLoading(false);
        setIsPending(false);
      }
    });

    return unsubscribe;
  }, []);

  const { data, isFetching } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => HTTPRequest.Get("users/me"),
    enabled: !!userId,
  });
  const userLoading = isFetching;

  useEffect(() => {
    if (firebaseUser && !userLoading) {
      setUser({
        ...firebaseUser,
        ...(data?.user || {}),
      });
      setIsPending(false);
      setIsLoading(false);
    }

    if (!firebaseUser && !userLoading && firebaseUser !== undefined) {
      setUser(null);
      setIsPending(false);
      setIsLoading(false);
    }
  }, [firebaseUser, data, userLoading]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoading: isPending || userLoading || isLoading,
        signInWithSocial,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
