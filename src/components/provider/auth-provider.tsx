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

  const [user, setUser] = useState<TUser | null>(null); // Set an initial value for user
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

  useEffect(() => {
    // @ts-expect-error - This is a global variable
    window.ztUserData = {
      za_email_id: user?.email,
      user_unique_id: user?._id,
      thrive_digest: user?.zohoHMACDigest, // Replace with actual dynamic data
      signUpPage: `${window.location.origin}/auth/register`,
      signInPage: `${window.location.origin}/auth/login`,
      ztWidgetDelay: 5,
    };
  }, [user?._id, user?.email, user?.zohoHMACDigest]);

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
