import { email, phone, telegram, whatsapp } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
  const { t, footerLinks } = useFooter();
  return (
    <footer className="footer_bg w-full  px-4 md:px-10 lg:px-20 py-20 text-white mt-10 lg:mt-20">
      <div className="flex flex-col lg:flex-row justify-between lg:gap-0 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/?category=trending" aria-label="betweysure home page">
            <Image
              width={160}
              height={40}
              src="/logo.png"
              alt="logo"
              className="w-[120px] lg:w-[160px]"
            />
          </Link>{" "}
          <div className="flex flex-col gap-2 max-w-[400px]">
            {t("DISCLAIMER")
              .split("\n")
              .map((text, i) => (
                <p key={i} className="text-xs">
                  {text}
                </p>
              ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-sm lg:text-base">
              <FaPhone />
              <span>{phone}</span>
            </p>
            <Link
              href={whatsapp}
              className="flex items-center gap-2 text-green-500"
              target="_blank"
              aria-label="chat with us on whatsapp"
            >
              <FaWhatsapp />
              {t("CHAT_ON_WHATSAPP")}
            </Link>

            <Link
              href="mailto:general@betweysure.com"
              className="flex items-center gap-2 text-sm lg:text-base"
              aria-label="send us a mail"
            >
              <FaEnvelope />
              <span>{email}</span>
            </Link>

            <div className="flex items-center gap-8">
              <p>{t("FOLLOW_US:")} </p>
              <div className="flex items-center gap-2 text-cyan">
                <Link href={whatsapp} aria-label={t("CHAT_ON_WHATSAPP")}>
                  <FaWhatsapp />
                </Link>

                <Link href="#facebook" aria-label="follow us on facebook">
                  <FaFacebook />
                </Link>
                <Link href="#twitter" aria-label="follow us on twitter">
                  <FaTwitter />
                </Link>
                <Link href="#instagram" aria-label="follow us on instagram">
                  <FaInstagram />
                </Link>
                <Link href={telegram} aria-label={t("CHAT_ON_TELEGRAM")}>
                  <FaTelegram />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {footerLinks.map(({ title, links }, i) => (
          <div className="flex flex-col gap-6" key={i}>
            <h4 className="text-lg font-bold">{title}</h4>
            <div className="flex flex-col gap-2">
              {links.map(({ title, link }, i) => (
                <Link
                  href={link}
                  key={i}
                  className="text-xs"
                  aria-label={title}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-10 text-xs text-gray-two">
        {t("COPYRIGHT")}
      </p>
    </footer>
  );
}

function useFooter() {
  const t = useTranslations("FOOTER");

  const footerLinks = [
    {
      title: t("ABOUT_US"),
      links: [
        { title: t("BLOG"), link: "/sports-news" },
        {
          title: t("FAQ"),
          link: "/faq",
        },
        {
          title: t("ABOUT_US"),
          link: "/about-us",
        },
        {
          title: t("CONTACT_US"),
          link: "/contact-us",
        },
      ],
    },
    {
      title: t("PREDICTIONS"),
      links: [
        {
          title: t("HOME_WIN"),
          link: "/dashboard/football-predictions?country=all",
        },
        {
          title: t("AWAY_WIN"),
          link: "/dashboard/football-predictions?country=all",
        },
        {
          title: t("CORRECT_SCORE"),
          link: "/dashboard/football-predictions?country=all",
        },
        { title: t("GG"), link: "/dashboard/football-predictions?country=all" },
        {
          title: t("OVER_2"),
          link: "/dashboard/football-predictions?country=all",
        },
        {
          title: t("UNDER_2"),
          link: "/dashboard/football-predictions?country=all",
        },
      ],
    },
    {
      title: t("INFORMATION"),
      links: [
        { title: t("HOW_TO_PLAY"), link: "/faq" },
        { title: t("PRICING"), link: "/pricing" },
        { title: t("RESULTS"), link: "/results" },
        { title: t("PRIVACY_POLICY"), link: "/privacy" },
        { title: t("TERMS_AMP_CONDITIONS"), link: "/t&c" },
      ],
    },
    {
      title: t("TIPS"),
      links: [
        { title: t("TODAYS_TIPS"), link: "/popular/today/predictions" },
        { title: t("TOMORROWS_TIPS"), link: "/popular/tomorrow/predictions" },
        { title: t("LALIGA_TIPS"), link: "/popular/la-liga/predictions" },
        {
          title: t("EPL_TIPS"),
          link: "/popular/england-premier-league/predictions",
        },
        { title: t("SERIE_A_TIPS"), link: "/popular/serie-a/predictions" },
        {
          title: t("BUNDESLIGA_TIPS"),
          link: "/popular/bundesliga/predictions",
        },
        { title: t("LIGUE_1_TIPS"), link: "/popular/ligue-1/predictions" },
      ],
    },
  ];
  return { t, footerLinks };
}
