import { FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import MenuBar from "../landing/menu-bar";
import HomeHeroSwiper from "./home-hero-swiper";
import AuthedLink from "../ui/authed-link";

export default function HomeHero() {
  const t = useTranslations("HOME_HERO");

  return (
    <HomeHeroSwiper>
      <MenuBar />
      <div className="max-w-lg lg:ml-16 flex flex-col gap-6 items-start">
        <div className="rounded-lg bg-[#FF6F6F] px-8 py-2 text-white mt-8">
          <p className="text-sm">{t("FREE_BET_PREDICTIONS")}</p>
        </div>
        <h1 className="text-white font-bold text-3xl">
          {t("FREE_BET_PREDICTIONS_DESC")}
        </h1>
        <p className="text-sm text-white font-semibold max-w-[300px]">
          {t("TOP_OF_THE_LINE")}
        </p>
        <div className="flex flex-col gap-4">
          <AuthedLink
            href={"/dashboard/football-predictions"}
            className="flex items-center gap-2 rounded-lg bg-cyan py-3 px-8 text-xs text-white"
            title={
              <>
                {t("VIEW_PREDICTIONS")}
                <span className="w-6 h-6 rounded-full bg-yellow flex items-center justify-center">
                  <FaArrowRight />
                </span>
              </>
            }
          />
          <a
            href="#convert-bet-code"
            className="bg-cyan py-3 px-8 rounded-lg text-[12px] text-white leading-6 animate-pulse"
          >
            {t("CONVERT_BET_CODES")}
            <sup className="text-red-500 ml-1">{t("NEW")}</sup>
          </a>
        </div>
      </div>
    </HomeHeroSwiper>
  );
}
