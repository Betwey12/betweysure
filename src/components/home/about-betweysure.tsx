import updates from "../../assets/images/updates.webp";
import { FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function AboutBetWeySure() {
  const t = useTranslations("HOME_ABOUT");
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-4 md:px-10 lg:px-20 py-10 lg:py-20 dark:text-white">
      <div className="lg:w-[60%] flex flex-col gap-4">
        <h3 className="text-3xl">{t("ABOUT_US")}</h3>
        {t("ABOUT_US_DESC")
          .split("\n")
          .map((desc) => (
            <p key={desc} className="lg:text-base text-sm text-justify">
              {desc}
            </p>
          ))}
        <Link
          href="/about-us"
          className="flex items-center gap-2 px-4 py-2 min-w-max border border-cyan rounded-lg self-start mt-4 lg:mt-8 text-cyan"
        >
          {t("LEARN_MORE")}
          <FaArrowRight />
        </Link>
      </div>
      <Image
        width={600}
        height={600}
        src={updates}
        alt="about-img"
        className="lg:w-[33%] rounded-[20px]"
        loading="lazy"
      />
    </div>
  );
}
