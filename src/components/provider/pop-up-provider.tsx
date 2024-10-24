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
  const hasPlan = user?.plan?.type?.toLowerCase() !== "free";

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setPopUp("popUp");
    }, 120000);
    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setPopUp(!user?.subscribed && !isLoading ? "newsletter" : null);
    }, 60000);
    return () => clearTimeout(timeOut);
  }, [user?.subscribed, isLoading]);

  useEffect(() => {
    if (isLoading) return;
    const timeOut = setTimeout(() => {
      setPopUp(!hasPlan ? "premium" : null);
    }, 90000);

    return () => clearTimeout(timeOut);
  }, [hasPlan, isLoading]);

  return (
    <PopUpContext.Provider value={{ popUp, setPopUp }}>
      {children}
    </PopUpContext.Provider>
  );
}
