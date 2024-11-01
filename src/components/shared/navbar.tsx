import { FaPlus, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import NavLink from "../ui/nav-link";
import SelectLanguage from "../ui/select-language";
import ToggleTheme from "../ui/toggle-theme";
import { useAuth } from "@/hooks/useAuth";

const blogUrl = process.env.NEXT_PUBLIC_BLOG_URL as string;

export default function Navbar() {
  const { navLinks, t, user } = useNav();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 flex justify-between w-full px-4 py-4 lg:items-center md:px-10 lg:px-20 md:py-6 text-blue-three lg:text-white z-[90]">
      <Link href="/?category=trending">
        <Image
          src="/logo.png"
          alt="logo"
          width={160}
          height={40}
          className="w-[120px] lg:w-[160px]"
        />
      </Link>{" "}
      <div
        className={cn(
          "w-[90%] lg:w-auto top-16 absolute lg:static flex lg:items-center lg:gap-14 flex-col gap-4 lg:flex-row bg-white p-4 lg:p-0 rounded-lg z-50 dark:bg-blue-one dark:text-white lg:dark:bg-transparent lg:bg-transparent",
          {
            "hidden lg:flex": !isMenuOpen,
          }
        )}
      >
        <ul className="flex flex-col gap-4 lg:items-center lg:gap-14 lg:flex-row">
          {[t("RESULTS"), t("CONTACT_US")].map((item: string) => (
            <li className="hidden text-inherit lg:block" key={item}>
              <NavLink href={`/${item.toLowerCase().replace(" ", "-")}`}>
                {item}
              </NavLink>
            </li>
          ))}

          {navLinks.map((nav, i) => (
            <li
              className="capitalize text-inherit lg:hidden"
              key={i}
              onClick={() => setIsMenuOpen(false)}
            >
              <NavLink
                href={nav.link}
                className="block font-semibold"
                target={nav.link.includes("http") ? "_blank" : ""}
                rel="noreferrer"
              >
                {nav.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="w-[2px] h-6 bg-white hidden lg:block" />
        <div className="flex flex-col gap-4 lg:items-center lg:gap-9 lg:flex-row">
          {!user ? (
            <>
              <Link href="/auth/login" className="font-semibold">
                Login
              </Link>
              <Link
                href="/auth/register"
                className="flex font-semibold items-center justify-center gap-2 px-4 py-3 text-sm text-white rounded-lg bg-cyan lg:justify-start"
              >
                {t("REGISTER")} <FaPlus className="text-yellow-one" />
              </Link>
            </>
          ) : (
            <Link
              href="/dashboard"
              className="bg-cyan rounded-lg px-4 py-3 self-start text-sm text-white font-semibold"
            >
              {t("GO_TO_DASHBOARD")}
            </Link>
          )}
          <SelectLanguage />

          <ToggleTheme />
        </div>
      </div>
      <button
        type="button"
        aria-label="menu"
        className="text-white lg:hidden text-2xl font-normal"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <FaTimes /> : <IoMdMenu />}
      </button>
    </nav>
  );
}

function useNav() {
  const t = useTranslations("NAVBAR");
  const { user } = useAuth();

  const navLinks = [
    {
      name: t("HOME"),
      link: "/?category=trending",
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
      name: t("BLOG"),
      link: blogUrl,
    },
    {
      name: t("LIVESCORES"),
      link: "/livescores",
    },
    {
      name: t("TRENDS"),
      link: "/football-trends",
    },
    {
      name: t("RESULTS"),
      link: "/results",
    },
    {
      name: t("CONTACT_US"),
      link: "/contact-us",
    },
  ];

  return {
    navLinks,
    t,
    user,
  };
}
