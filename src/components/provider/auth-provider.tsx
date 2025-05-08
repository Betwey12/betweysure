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
  const [userId, setUserId] = useState<string | undefined>();
  const { data, isPending: userLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => HTTPRequest.Get(`users/me`),
    enabled: !!userId,
  });

  const [user, setUser] = useState<TAuthUser | null>(null);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setIsLoading(false);

      if (firebaseUser) {
        setUserId(firebaseUser.uid);
        setLoggedInUser(firebaseUser);
        setIsLoading(true);
        localStorage.setItem("token", await firebaseUser.getIdToken());
      }
    });

    return () => {
      // Unsubscribe to avoid memory leaks
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!userLoading) {
      setIsLoading(false);
      setUser({
        ...loggedInUser,
        ...data?.user,
      });
    }
  }, [loggedInUser, userLoading, userId, data]);

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
