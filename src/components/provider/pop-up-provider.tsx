"use client";
import { useEffect, useState } from "react";
import { PopUpContext, TPopUp } from "../../hooks/usePopUp";
import { useAuth } from "@/hooks/useAuth";
import useHasPlan from "@/hooks/useHasPlan";
import { isDue } from "@/lib/utils";

interface IPopUpProvider {
  children: React.ReactNode;
}

export default function PopUpProvider({ children }: IPopUpProvider) {
  const [popUp, setPopUp] = useState<TPopUp>(null);
  const [showAny, setShowAny] = useState(false);
  const { user, isLoading } = useAuth();
  const { hasPlan } = useHasPlan();

  useEffect(() => {
    if (isLoading) return;

    const lastShown = Number(localStorage.getItem("popUpShown"));
    if (!isDue({ last: lastShown, dur: 1 })) return;

    const timeouts: NodeJS.Timeout[] = [];

    // Show any visual indicator
    const thoughtsTimeout = setTimeout(() => setShowAny(true), 10000);
    timeouts.push(thoughtsTimeout);

    // Schedule popups based on conditions
    const now = Date.now();

    if (!user?.subscribed) {
      const newsletterTimeout = setTimeout(() => {
        setPopUp("newsletter");
        localStorage.setItem("popUpShown", now.toString());
      }, 10000);
      timeouts.push(newsletterTimeout);
    } else if (!hasPlan) {
      const premiumTimeout = setTimeout(() => {
        setPopUp("premium");
        localStorage.setItem("popUpShown", now.toString());
      }, 20000);
      timeouts.push(premiumTimeout);
    } else {
      const popUpTimeout = setTimeout(() => {
        setPopUp("popUp");
        localStorage.setItem("popUpShown", now.toString());
      }, 40000);
      timeouts.push(popUpTimeout);
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [hasPlan, isLoading, user?.subscribed]);

  return (
    <PopUpContext.Provider value={{ popUp, setPopUp, showAny, setShowAny }}>
      {children}
    </PopUpContext.Provider>
  );
}
