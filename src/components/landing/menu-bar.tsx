"use client";

import { useAuth } from "@/hooks/useAuth";
import NavLink from "../ui/nav-link";
import { useTranslations } from "next-intl";
import { useSlip } from "@/hooks/useSlip";
import { SlipIcon } from "../icons";
import PredictionSelect from "../ui/prediction-select";

const blogUrl = `${process.env.NEXT_PUBLIC_BASE_URL ?? "#"}/blog`;
const forumUrl = process.env.NEXT_PUBLIC_FORUM_URL ?? "#";

export default function MenuBar() {
  const { t, navigations } = useMenu();
  const { setSlip, slip } = useSlip();
  const slipAlert = slip?.predictions?.length ?? 0;

  return (
    <div className="bg-white rounded-full lg:flex items-center justify-between pl-14 w-full pr-8 py-2 transition-colors hidden dark:bg-blue-one dark:text-white">
      <ul className="flex items-center gap-6">
        {navigations.map((nav, i) => (
          <li className="" key={i}>
            <NavLink
              target={nav?.link.includes("http") ? "_blank" : "_self"}
              href={nav.link}
            >
              {nav.title}
              {nav.title === t("FREE_TIPS") && (
                <sup className="text-red-500 text-xs ml-1 animate-pulse">
                  {t("ACCURACY")}
                </sup>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <div className="text-base font-normal w-[300px]">
          <PredictionSelect />
        </div>

        <button
          className="relative text-4xl"
          aria-label="slip"
          onClick={() => {
            setSlip({
              ...slip,
              timedOut: false,
            });
          }}
        >
          <SlipIcon />
          {slipAlert > 0 && (
            <div className="absolute top-0 right-0 rounded-full  w-3 h-3 bg-[#FF2626] flex items-center justify-center">
              <p className="text-[10px]">{slipAlert}</p>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

function useMenu() {
  const { user } = useAuth();
  const t = useTranslations("MENU_BAR");
  const navigations = [
    {
      title: t("HOME"),
      link: "/",
    },
    {
      title: t("FREE_TIPS"),
      link: user ? "/dashboard/football-predictions" : "/auth/login",
    },
    {
      title: t("PRICING"),
      link: "/pricing",
    },
    {
      title: t("ACCA_BUILDER"),
      link: "/acca-builder",
    },
    {
      title: t("LIVESCORES"),
      link: "/livescores",
    },
    {
      title: t("BLOG"),
      link: blogUrl,
    },
    {
      title: t("FORUM"),
      link: forumUrl,
    },

    {
      title: t("TRENDS"),
      link: "/football-trends",
    },
  ];

  return {
    navigations,
    t,
  };
}
