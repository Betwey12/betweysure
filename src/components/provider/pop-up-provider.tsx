"use client";
import { useEffect, useState } from "react";
import { PopUpContext, TPopUp } from "../../hooks/usePopUp";
import ScrollToTop from "../landing/scroll-to-top";
import QuickLinks from "../landing/quicklinks";
import PopUp from "../landing/popup";
import NewsLetterPopUp from "../landing/newsletter-pop-up";
import { useAuth } from "@/hooks/useAuth";

interface IPopUpProvider {
  children: React.ReactNode;
}

export default function PopUpProvider({ children }: IPopUpProvider) {
  const [popUp, setPopUp] = useState<TPopUp>(null);
  const { user, isLoading } = useAuth();

  const isPopUp = popUp === "popUp";

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setPopUp("popUp");
    }, 60000);
    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setPopUp(!user?.subscribed && !isLoading ? "newsletter" : null);
    }, 120000);
    return () => clearTimeout(timeOut);
  }, [user?.subscribed, isLoading]);

  return (
    <PopUpContext.Provider value={{ popUp, setPopUp }}>
      {children}

      <ScrollToTop />
      {isPopUp && <PopUp />}
      <NewsLetterPopUp />
      <QuickLinks />
    </PopUpContext.Provider>
  );
}
