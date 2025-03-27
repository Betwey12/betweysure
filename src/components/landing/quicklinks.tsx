import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function QuickLinks() {
  const { quickLinks, t } = useQuickLinks();
  const [showQuickLinks, setShowQuickLinks] = useState(false);

  return (
    <>
      <button
        className="fixed font-semibold bottom-1/2 z-[9000] bg-yellow-orange rotate-90 right-[-40px] text-white px-3 rounded"
        onClick={() => setShowQuickLinks(!showQuickLinks)}
      >
        {t("QUICK_LINKS")}
      </button>

      {showQuickLinks && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black/50 px-4 z-[90]">
          <div className="bg-white p-6 rounded-3xl flex flex-col items-center text-blue-three lg:min-w-[500px] max-w-lg text-sm relative">
            <h2 className="text-2xl font-bold">{t("QUICK_LINKS")}</h2>{" "}
            <ul className="mt-4 w-full flex-col gap-2 flex">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link
                    href={link.href}
                    className="font-semibold capitalize hover:text-cyan"
                    onClick={() => setShowQuickLinks(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="mb-2">
                <Link
                  href="https://t.me/betweysure"
                  className="capitalize font-semibold flex items-center gap-2 text-blue-500"
                  onClick={() => setShowQuickLinks(false)}
                  target="_blank"
                >
                  <FaTelegram />
                  {t("JOIN_TELEGRAM")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/+2349137158913"
                  className="capitalize flex font-semibold items-center gap-2 text-green-500"
                  onClick={() => setShowQuickLinks(false)}
                  target="_blank"
                >
                  <FaWhatsapp />
                  {t("JOIN_WHATSAPP")}
                </Link>
              </li>
            </ul>
            <button
              className="absolute top-4 right-4 text-2xl text-blue-three hover:text-red-500 transition-all"
              onClick={() => setShowQuickLinks(false)}
            >
              <IoClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function useQuickLinks() {
  const t = useTranslations("QUICK_LINKS");

  const quickLinks = [
    {
      title: t("TODAYS_PREDICTIONS"),
      href: "/dashboard/football-predictions?country=all",
    },
    {
      title: t("ACCA_BUILDER"),
      href: "/acca-builder",
    },
    {
      title: t("1XBET_PREDICTIONS"),
      href: "/1xbet-prediction",
    },
    {
      title: t("BET9JA_PREDICTIONS"),
      href: "/bet9ja-prediction",
    },
    {
      title: t("SPORTYBET_PREDICTIONS"),
      href: "/sportybet-prediction",
    },
    {
      title: "Predictz Betting Tips",
      href: "/predictz",
    },
    {
      title: "Jackpot Betting",
      href: "/jackpot-betting",
    },
    {
      title: t("LIVESCORES"),
      href: "/livescore",
    },
    {
      title: t("OVER/UNDER"),
      href: "/dashboard/football-predictions?country=all",
    },
    {
      title: t("OTHER_SPORTS"),
      href: "/dashboard/other-sports?sport=basketball",
    },
    {
      title: t("FREE_TIPS"),
      href: "/dashboard/football-predictions?country=all",
    },
  ];

  return {
    quickLinks,
    t,
  };
}
