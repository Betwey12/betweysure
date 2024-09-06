import { useTranslations } from "next-intl";

export default function PricingHeader() {
  const t = useTranslations("PRICING_HEADER");
  return (
    <div className="flex flex-col gap-6 items-center text-blue-three my-10 lg:my-20 px-4 dark:text-white">
      <h1 className="text-3xl lg:text-5xl text-center"> {t("TITLE")}</h1>
      <p className="text-center max-w-5xl">{t("DESCRIPTION")}</p>
    </div>
  );
}
