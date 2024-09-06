import WhyBetWeySure from "@/components/home/why-betweysure";
import banner from "../../assets/images/banner.webp";
import { HomeHero, TrendingSports } from "../../components/home";
import Image from "next/image";
import AboutBetWeySure from "@/components/home/about-betweysure";
import BlogAndNews from "@/components/home/blog-and-news";
import FrequentlyAskedQuestions from "@/components/home/frequently-asked-questions";
import SelectedGames from "@/components/ui/selected-games";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(searchParams);
  const sport = searchParams["sport"] as string | null;

  return (
    <>
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
      <BlogAndNews />
      <FrequentlyAskedQuestions />
      <SelectedGames />
    </>
  );
}
