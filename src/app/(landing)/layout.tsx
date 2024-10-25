"use client";
import NewsLetter from "@/components/landing/newsletter";
import NewsLetterPopUp from "@/components/landing/newsletter-pop-up";
import PopUp from "@/components/landing/popup";
import QuickLinks from "@/components/landing/quicklinks";
import ScrollToTop from "@/components/landing/scroll-to-top";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import PremiumPopUp from "@/components/ui/premium-popup";
import { useAuth } from "@/hooks/useAuth";
import usePopUp from "@/hooks/usePopUp";

interface ILandingLayout {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: ILandingLayout) {
  const { user } = useAuth();
  const { popUp } = usePopUp();

  const isPopUp = popUp === "popUp";

  return (
    <div className="relative bg-light min-h-screen transition-colors overflow-x-hidden dark:bg-dark">
      <Navbar />
      {children}
      <NewsLetter />
      <Footer />

      <ScrollToTop />
      {isPopUp && <PopUp />}
      <NewsLetterPopUp />
      {popUp === "premium" && <PremiumPopUp user={user} />}

      <QuickLinks />
    </div>
  );
}
