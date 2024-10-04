import WhyBetWeySure from "@/components/home/why-betweysure";
import banner from "../../assets/images/banner.webp";
import {
  AboutBetWeySure,
  BlogAndNews,
  CallToAction,
  FrequentlyAskedQuestions,
  HomeHero,
  TrendingSports,
} from "../../components/home";
import Image from "next/image";
import SelectedGames from "@/components/ui/selected-games";
import ReferralClientWapper from "@/components/home/referral-client";

export default function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const sport = searchParams["sport"] as string | null;
  const referralCode = searchParams["referralCode"] as string | null;

  return (
    <ReferralClientWapper referralCode={referralCode}>
      <HomeHero />
      <TrendingSports sport={sport} />

      <div className="my-10 lg:my-20 px-4 md:px-10 lg:px-20">
        <Image
          width={1200}
          height={300}
          src={banner}
          alt="betway-banner"
          className="w-full"
        />
      </div>
      <WhyBetWeySure />
      <AboutBetWeySure />
      <CallToAction />
      <FrequentlyAskedQuestions />
      <BlogAndNews />
      <SelectedGames />
    </ReferralClientWapper>
  );
}
