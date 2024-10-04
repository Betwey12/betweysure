"use client";
import { useEffect, useState } from "react";
import { PopUpContext, TPopUp } from "../../hooks/usePopUp";
import ScrollToTop from "../landing/scroll-to-top";
import QuickLinks from "../landing/quicklinks";
import PopUp from "../landing/popup";
import NewsLetterPopUp from "../landing/newsletter-pop-up";
import { useAuth } from "@/hooks/useAuth";
import { useSearchParams } from "next/navigation";

interface IPopUpProvider {
  children: React.ReactNode;
}

export default function PopUpProvider({ children }: IPopUpProvider) {
  const [popUp, setPopUp] = useState<TPopUp>(null);
  const { user, isLoading } = useAuth();
  const referralCode = useSearchParams().get("referralCode");

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

  useEffect(() => {
    if (typeof window !== "undefined" && referralCode) {
      // Save referral code to sessionStorage when the page is rendered
      sessionStorage.setItem("referralCode", referralCode);
      console.log("Referral code saved:", referralCode);
    }
  }, [referralCode]);

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
