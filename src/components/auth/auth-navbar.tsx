"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { cn } from "../../lib/utils";
import { IoMdLogOut, IoMdMenu } from "react-icons/io";
import useHandleLogout from "@/hooks/useHandleLogout";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { Button } from "../ui/button";
import SelectLanguage from "../ui/select-language";
import ToggleTheme from "../ui/toggle-theme";
import { useTranslations } from "next-intl";

export default function AuthNavBar() {
  const t = useTranslations("NAVBAR");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleLogout } = useHandleLogout();
  const { user } = useAuth();
  const links = [
    {
      name: t("ABOUT_US"),
      link: "/about-us",
    },
    {
      name: t("CONTACT_US"),
      link: "/contact-us",
    },
  ];

  return (
    <nav className="absolute top-0 flex lg:items-center justify-between w-full px-4 md:px-10 lg:px-20 py-4 md:py-6 text-blue-three lg:text-white z-50">
      <Link href="/?category=trending">
        <Image
          width={160}
          height={40}
          src="/logo.png"
          alt="logo"
          className="w-[120px] lg:w-[160px]"
        />
      </Link>
      <div
        className={cn(
          "lg:flex lg:items-center lg:gap-20 hidden text-cyan dark:bg-blue-two dark:text-white dark:border-0 lg:dark:bg-transparent",
          {
            "absolute flex z-50 flex-col gap-4 bg-white lg:bg-transparent text-blue-three w-[90%] border border-gray-two top-20 rounded-lg shadow p-4 ":
              isMenuOpen,
          }
        )}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.link}
            className="text-inherit font-semibold"
          >
            {link.name}
          </Link>
        ))}
        {user && (
          <Button
            className="text-center gap-2 font-semibold text-white"
            onClick={handleLogout}
          >
            <IoMdLogOut className="" />
            Logout
          </Button>
        )}
        <SelectLanguage />
        <ToggleTheme />
      </div>
      <Button
        className="lg:hidden bg-transparent text-inherit p-0 text-2xl dark:text-white hover:bg-transparent"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <FaTimes /> : <IoMdMenu />}
      </Button>
    </nav>
  );
}
