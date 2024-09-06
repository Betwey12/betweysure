import { Metadata } from "next";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { contact } from "@/constants";
import OtherPagesHero from "@/components/shared/other-pages-hero";
import ContactForm from "@/components/contact/contact-form";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const metadata: Metadata = {
  title: contact.title,
  description: contact.description,
};

export default function Contact() {
  const t = useTranslations("CONTACT");
  return (
    <>
      <OtherPagesHero />
      <div className="px-4 md:px-10 xl:px-20 my-10 lg:my-20 dark:text-white">
        <h1 className="lg:text-2xl text-xl">{t("TITLE")}</h1>
        <ContactForm />

        <div className="grid lg:grid-cols-2 mt-6">
          <div className="mt-6 flex flex-col gap-4 lg:gap-2">
            {/* <p className="flex items-center gap-2 text-sm lg:text-base"> */}
            {/*   <span>{t('HEAD_OFFICE:')} </span> */}
            {/*   <span>16a Trinity Avenue, Victoria Island, Lagos. Nigeria.</span> */}
            {/* </p> */}
            <p className="flex items-center gap-2 text-sm lg:text-base">
              <FaPhone />
              <span>{t("PHONE")}</span>
            </p>
            <Link
              href={t("WHATSAPP_LINK")}
              className="capitalize flex items-center gap-2 text-green-500"
              target="_blank"
            >
              <FaWhatsapp />
              {t("CHAT_ON_WHATSAPP")}
            </Link>

            <Link
              href="mailto:general@betweysure.com"
              className="flex items-center gap-2 text-sm lg:text-base"
            >
              <FaEnvelope />
              <span>{t("EMAIL")}</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <p> {t("FOLLOW_US:")} </p>
            <div className="flex items-center gap-2">
              <Link href={t("WHATSAPP_LINK")}>
                <FaWhatsapp />
              </Link>

              <Link href="#facebook">
                <FaFacebook />
              </Link>
              <Link href="#facebook">
                <FaTwitter />
              </Link>
              <Link href="#facebook">
                <FaInstagram />
              </Link>
              <Link href={t("TELEGRAM_LINK")}>
                <FaTelegram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
