"use client";

import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "@/hooks/useAuth";
import { HTTPRequest } from "@/api";
import { auth } from "@/firebase/config";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [userId, setUserId] = useState<string>();
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [user, setUser] = useState<TAuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
      }
    });

    return unsubscribe;
  }, []);

  const { data, isPending: userLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => HTTPRequest.Get("users/me"),
    enabled: !!userId,
  });

  useEffect(() => {
    if (firebaseUser && !userLoading) {
      setUser({
        ...firebaseUser,
        ...(data?.user || {}),
      });
      setIsLoading(false);
    }

    if (!firebaseUser && !userLoading) {
      setUser(null);
      setIsLoading(false);
    }
  }, [firebaseUser, data, userLoading]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
