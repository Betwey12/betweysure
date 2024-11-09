import { useTranslations } from "next-intl";
import onexbet from "../../assets/images/1xbet2.gif";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import AuthedLink from "../ui/authed-link";

export default function HomeFreeTips() {
  const t = useTranslations("HOME_FREE_TIPS");
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
        <Link
          href="https://refpa7921972.top/L?tag=d_2927467m_1573c_&site=2927467&ad=1573"
          className="h-[400px] overflow-hidden lg:w-[34%] rounded-[20px]"
        >
          <Image
            width={300}
            height={300}
            src={onexbet}
            alt="1xbet"
            className="rounded-[20px] w-[300px]"
          />
        </Link>
        <div className="flex flex-col gap-6 lg:w-[58%] text-blue-three dark:text-white">
          <h3 className="text-2xl font-semibold">{t("FREE_BETTING_TIPS")}</h3>
          {t("FREE_BETTING_TIPS_DESC")
            .split("\n")
            .map((desc, index) => (
              <p className="text-sm" key={index}>
                {desc}
              </p>
            ))}
          <AuthedLink
            href={"/dashboard/football-predictions"}
            className="flex items-center self-start gap-2 px-4 py-2 mt-8 border rounded-lg min-w-max border-cyan text-cyan"
            title={
              <>
                {t("SEE_ALL_TIPS")}
                <FaArrowRight />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
