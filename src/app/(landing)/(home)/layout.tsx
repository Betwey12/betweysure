"use client";

import {
  AboutBetWeySure,
  BlogAndNews,
  CallToAction,
  FrequentlyAskedQuestions,
  HomeHero,
  MediaAndTurotials,
  WhyBetWeySure,
} from "@/components/home";
import ReferralClientWapper from "@/components/home/referral-client";
import SelectedGames from "@/components/ui/selected-games";
import { useSearchParams } from "next/navigation";
import sportsbetGif from "@/assets/images/sportsbet-gif.gif";
import cryptoBanner from "@/assets/images/crypto-banner.webp";
import Image from "next/image";
import SportMenuBar from "@/components/home/sport-menu-bar";
import PredictionSelect from "@/components/ui/prediction-select";
import HomeFreeTips from "@/components/home/home-free-tips";
import LivePredictConvert from "@/components/home/live-predict-convert";

interface IHomeLayout {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: IHomeLayout) {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get("referralCode") || null;

  return (
    <ReferralClientWapper referralCode={referralCode}>
      <HomeHero />
      <SportMenuBar />

      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 px-4 lg:px-20 md:px-10">
        <div className="flex flex-col gap-8 lg:w-[70%] text-blue-two dark:text-white">
          <div className="lg:hidden">
            <PredictionSelect />
          </div>
          {children}
          <HomeFreeTips />
        </div>
        <LivePredictConvert />
      </div>

      <div className="my-10 lg:my-20 px-4 md:px-10 lg:px-20">
        <Image
          width={1200}
          height="150"
          src={cryptoBanner}
          alt="betway-banner"
          className="w-full"
        />
      </div>
      <WhyBetWeySure />

      <a
        href="https://aff.partners.io/visit/?bta=45585&nci=5689"
        target="_top"
        className="mt-10 block"
      >
        <Image
          alt="banner"
          src={sportsbetGif}
          width="970"
          height="90"
          className="w-full"
        />
      </a>
      <AboutBetWeySure />
      <CallToAction />
      <FrequentlyAskedQuestions />
      <BlogAndNews />
      <MediaAndTurotials />
      <SelectedGames />
    </ReferralClientWapper>
  );
}
