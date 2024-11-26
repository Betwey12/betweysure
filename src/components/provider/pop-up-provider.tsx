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

  console.log(user?.subscribed, isLoading, hasPlan);
  useEffect(() => {
    if (isLoading) return;

    const timeouts: NodeJS.Timeout[] = [];

    if (!user?.subscribed) {
      const newsletterTimeout = setTimeout(() => setPopUp("newsletter"), 10000);
      timeouts.push(newsletterTimeout);
    }

    if (!hasPlan) {
      const premiumTimeout = setTimeout(() => setPopUp("premium"), 20000);
      timeouts.push(premiumTimeout);
    }

    const popUpTimeout = setTimeout(() => setPopUp("popUp"), 30000);
    timeouts.push(popUpTimeout);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [hasPlan, isLoading, user?.subscribed]);

  return (
    <PopUpContext.Provider value={{ popUp, setPopUp }}>
      {children}
    </PopUpContext.Provider>
  );
}
