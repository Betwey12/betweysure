"use client";
import NewsLetter from "@/components/landing/newsletter";
import NewsLetterPopUp from "@/components/landing/newsletter-pop-up";
import PopUp from "@/components/landing/popup";
import QuickLinks from "@/components/landing/quicklinks";
import ScrollToTop from "@/components/landing/scroll-to-top";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import BottomPopUp from "@/components/ui/bottom-pop-up";
import PremiumPopUp from "@/components/ui/premium-popup";
import { DashboardSpinner } from "@/components/ui/spinner";
import ThoughtsPopup from "@/components/ui/thoughts-popup";
import { useAuth } from "@/hooks/useAuth";
import usePopUp from "@/hooks/usePopUp";
import { Suspense } from "react";

interface ILandingLayout {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: ILandingLayout) {
  const { user } = useAuth();
  const { popUp } = usePopUp();

  return (
    <Suspense fallback={<DashboardSpinner />}>
      <div className="relative bg-light min-h-screen transition-colors overflow-x-hidden dark:bg-dark">
        <Navbar />
        {children}
        <NewsLetter />
        <Footer />

        <ScrollToTop />
        <NewsLetterPopUp />
        {popUp === "popUp" && <PopUp />}
        {popUp === "premium" && <PremiumPopUp user={user} />}
        {popUp === "bottom" && <BottomPopUp />}
        <ThoughtsPopup link="/acca-builder" />
        <QuickLinks />
      </div>
    </Suspense>
  );
}
