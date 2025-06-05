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
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<string>();
  const [user, setUser] = useState<TAuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Subscribe to Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const token = await currentUser.getIdToken();
        localStorage.setItem("token", token);
        setFirebaseUser(currentUser);
        setUserId(currentUser.uid);
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

  // Fetch user data from your API
  const { data, isPending: userLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => HTTPRequest.Get("users/me"),
    enabled: !!userId,
  });

  // Merge Firebase + API user data
  useEffect(() => {
    if (firebaseUser && data?.user && !userLoading) {
      setUser({
        ...firebaseUser,
        ...data.user,
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
