"use client";
import { useEffect, useState } from "react";
import { PopUpContext, TPopUp } from "../../hooks/usePopUp";
import { useAuth } from "@/hooks/useAuth";

interface IPopUpProvider {
  children: React.ReactNode;
}

export default function PopUpProvider({ children }: IPopUpProvider) {
  const [popUp, setPopUp] = useState<TPopUp>(null);
  const { user, isLoading } = useAuth();
  const hasPlan = (user?.plan?.type?.toLowerCase() ?? "free") !== "free";

  console.log(user?.subscribed, isLoading);
  useEffect(() => {
    if (isLoading) return;

    if (!user?.subscribed) {
      const timeout = setTimeout(() => setPopUp("newsletter"), 10000);
      return () => clearTimeout(timeout);
    }

    if (!hasPlan) {
      const timeout = setTimeout(() => setPopUp("premium"), 20000);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => setPopUp("popUp"), 30000);
    return () => clearTimeout(timeout);
  }, [hasPlan, isLoading, user?.subscribed]);

  return (
    <PopUpContext.Provider value={{ popUp, setPopUp }}>
      {children}
    </PopUpContext.Provider>
  );
}
