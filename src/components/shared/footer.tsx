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
  const t = useTranslations("FOOTER");
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
              <span>+234 913 7158 913</span>
            </p>
            <Link
              href="https://wa.me/+2349137158913"
              className="flex items-center gap-2 text-green-500"
              target="_blank"
              aria-label="chat with us on whatsapp"
            >
              <FaWhatsapp />
              Chat with us on whatsapp
            </Link>

            <Link
              href="mailto:general@betweysure.com"
              className="flex items-center gap-2 text-sm lg:text-base"
              aria-label="send us a mail"
            >
              <FaEnvelope />
              <span>general@betweysure.com</span>
            </Link>

            <div className="flex items-center gap-8">
              <p>Follow Us: </p>
              <div className="flex items-center gap-2 text-cyan">
                <Link
                  href="https://wa.me/+2349137158913"
                  aria-label="chat with us on whatsapp"
                >
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
                <Link
                  href="https://t.me/betweysure"
                  aria-label="chat with us on telegram"
                >
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

const footerLinks = [
  {
    title: "About Us",
    links: [
      { title: "Blog", link: "/sports-news" },

      {
        title: "FAQ",
        link: "/faq",
      },
      {
        title: "About Us",
        link: "/about-us",
      },
      {
        title: "Contact Us",
        link: "/contact-us",
      },
    ],
  },
  {
    title: "Predictions",
    links: [
      {
        title: "Home Win",
        link: "/dashboard/football-predictions?country=all",
      },
      {
        title: "Away Win",
        link: "/dashboard/football-predictions?country=all",
      },
      {
        title: "Correct Score",
        link: "/dashboard/football-predictions?country=all",
      },
      { title: "GG", link: "/dashboard/football-predictions?country=all" },
      {
        title: "Over 2.5",
        link: "/dashboard/football-predictions?country=all",
      },
      {
        title: "Under 2.5",
        link: "/dashboard/football-predictions?country=all",
      },
    ],
  },
  {
    title: "Information",
    links: [
      { title: "How to play", link: "/faq" },
      { title: "Pricing", link: "/pricing" },
      { title: "Paid Bundle", link: "/pricing" },
      { title: "Results", link: "/results" },
      { title: "Privacy Policy", link: "/privacy" },
      { title: "Terms & Conditions", link: "/t&c" },
    ],
  },
  {
    title: "Tips",
    links: [
      { title: "Todays Tips", link: "/popular/today/predictions" },
      { title: "Tomorrow's Tips", link: "/popular/tomorrow/predictions" },
      { title: "Laliga's Tips", link: "/popular/la-liga/predictions" },
      {
        title: "EPL's Tips",
        link: "/popular/england-premier-league/predictions",
      },
      { title: "Serie A's Tips", link: "/popular/serie-a/predictions" },
      { title: "Bundesliga's Tips", link: "/popular/bundesliga/predictions" },
      { title: "Ligue 1's Tips", link: "/popular/ligue-1/predictions" },
    ],
  },
];
