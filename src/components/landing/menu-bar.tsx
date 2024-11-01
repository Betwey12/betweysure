"use client";

import { useAuth } from "@/hooks/useAuth";
import NavLink from "../ui/nav-link";
import { useTranslations } from "next-intl";
import { useSlip } from "@/hooks/useSlip";
import { SlipIcon } from "../icons";
import PredictionSelect from "../ui/prediction-select";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const blogUrl = process.env.NEXT_PUBLIC_BLOG_URL ?? "";

export default function MenuBar() {
  const { t, navigations } = useMenu();
  const { theme } = useTheme();
  const { setSlip, slip } = useSlip();
  const slipAlert = slip?.predictions?.length ?? 0;

  const [isDark, setIsDark] = useState<boolean>();

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <div className="bg-white rounded-full lg:flex items-center justify-between pl-14 w-full pr-8 py-2 transition-colors hidden dark:bg-blue-one dark:text-white">
      <ul className="flex items-center gap-6">
        {navigations.map((nav, i) => (
          <li className="" key={i}>
            <NavLink
              target={nav?.link.includes("http") ? "_blank" : "_self"}
              href={nav.link}
            >
              {nav.name}
              {nav.name === t("FREE_TIPS") && (
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
          className="relative"
          aria-label="slip"
          onClick={() => {
            setSlip({
              ...slip,
              timedOut: false,
            });
          }}
        >
          <SlipIcon fill={isDark ? "#fff" : "#0D233E"} />
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
      name: t("HOME"),
      link: "/",
    },
    {
      name: t("FREE_TIPS"),
      link: user ? "/dashboard/football-predictions" : "/auth/login",
    },
    {
      name: t("PRICING"),
      link: "/pricing",
    },
    {
      name: t("ACCA_BUILDER"),
      link: "/acca-builder",
    },
    {
      name: t("LIVESCORES"),
      link: "/livescores",
    },
    {
      name: t("BLOG"),
      link: blogUrl,
    },
    {
      name: t("TRENDS"),
      link: "/football-trends",
    },
  ];

  return {
    navigations,
    t,
  };
}
