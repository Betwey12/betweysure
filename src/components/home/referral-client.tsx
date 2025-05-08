"use client";
import { useEffect } from "react";

interface ReferralClientProps {
  referralCode: string | null;
  children: React.ReactNode;
}

export default function ReferralClientWapper({
  referralCode,
  children,
}: ReferralClientProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && referralCode) {
      // Save referral code to sessionStorage when the page is rendered
      sessionStorage.setItem("referralCode", referralCode);
      console.log("Referral code saved:", referralCode);
    }
  }, [referralCode]);

  return <>{children}</>;
}
