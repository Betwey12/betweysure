import { useTranslations } from "next-intl";
import neymer from "../../assets/images/neymar.webp";
import Image from "next/image";

export default function OurExpertise() {
  const t = useTranslations("OUR_EXPERTISE");
  return (
    <div className="px-4 lg:px-20 md:px-10 py-10 mt-8 mb-10 relative">
      <div className="expertise_bg lg:p-14 rounded-3xl p-4">
        <div className="max-w-[800px] text-white">
          <h1 className="text-3xl lg:text-4xl max-w-[500px] mb-4">
            <span className="text-cyan">{t("BETWEYSURE")}</span>
            {t("TITLE")}
          </h1>
          <p className="text-sm mb-2">{t("DESCRIPTION")}</p>
          <p className="text-sm">{t("MORE_DESCRIPTION")}</p>
        </div>
      </div>
      <Image
        src={neymer}
        width={300}
        height={500}
        alt="neymer"
        className="absolute bottom-0 w-[20%] right-[10%]"
      />
    </div>
  );
}
