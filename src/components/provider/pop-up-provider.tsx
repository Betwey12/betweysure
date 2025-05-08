"use client";
import { useEffect, useState } from "react";
import { PopUpContext, TPopUp } from "../../hooks/usePopUp";
import { useAuth } from "@/hooks/useAuth";
import useHasPlan from "@/hooks/useHasPlan";

interface IPopUpProvider {
  children: React.ReactNode;
}

export default function PopUpProvider({ children }: IPopUpProvider) {
  const [popUp, setPopUp] = useState<TPopUp>(null);
  const [showAny, setShowAny] = useState(false);
  const { user, isLoading } = useAuth();
  const { hasPlan } = useHasPlan();
  const hasAnsweredSurvery = (user?.answeredSurvey ?? true) || isLoading;

  useEffect(() => {
    if (isLoading) return;

    const timeouts: NodeJS.Timeout[] = [];
    const thoughtsTimeout = setTimeout(() => setShowAny(true), 10000);
    timeouts.push(thoughtsTimeout);

    if (!user?.subscribed) {
      const newsletterTimeout = setTimeout(() => setPopUp("newsletter"), 10000);
      timeouts.push(newsletterTimeout);
    }

    if (!hasPlan) {
      const premiumTimeout = setTimeout(() => setPopUp("premium"), 20000);
      timeouts.push(premiumTimeout);
    } else {
      const popUpTimeout = setTimeout(() => setPopUp("popUp"), 40000);
      timeouts.push(popUpTimeout);
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [hasAnsweredSurvery, hasPlan, isLoading, user?.subscribed]);

  return (
    <PopUpContext.Provider value={{ popUp, setPopUp, showAny, setShowAny }}>
      {children}
    </PopUpContext.Provider>
  );
}
