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
  const { user, isLoading } = useAuth();
  const { hasPlan } = useHasPlan();
  const hasAnsweredSurvery = (user?.answeredSurvey ?? true) || isLoading;

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

    if (hasAnsweredSurvery) {
      const popUpTimeout = setTimeout(() => setPopUp("popUp"), 40000);
      timeouts.push(popUpTimeout);
    } else {
      const surveyTimeout = setTimeout(() => setPopUp("survey"), 40000);
      timeouts.push(surveyTimeout);
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [hasAnsweredSurvery, hasPlan, isLoading, user?.subscribed]);

  return (
    <PopUpContext.Provider value={{ popUp, setPopUp }}>
      {children}
    </PopUpContext.Provider>
  );
}
