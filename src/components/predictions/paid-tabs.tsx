import { FaLock } from "react-icons/fa";
PaidTabs;
import useGetUser from "@/hooks/useGetUser";
import { capitalize, cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import Link from "next/link";

interface PaidTabsProps {
  handlePrediction: (option: string) => void;
  activeTab: string;
  paidTabs: string[][];
  sport?: string;
}

export default function PaidTabs({
  handlePrediction,
  activeTab,
  paidTabs,
  sport = "Football",
}: PaidTabsProps) {
  const t = useTranslations("PAID_TABS");
  const { user: fetchedUser } = useGetUser();
  const isExpired =
    (fetchedUser?.plan?.expiry ?? 0) < Date.now() ||
    fetchedUser?.plan?.type === "free";

  const hasPremium = fetchedUser?.plan?.type === "premium" && !isExpired;
  const hasStandard = fetchedUser?.plan?.type === "standard" && !isExpired;

  return (
    <div className="flex gap-4 flex-col">
      <h1 className="font-bold min-w-max">
        {t("TITLE", { sport: capitalize(sport) })}
      </h1>
      {paidTabs.map((section, i) => {
        const condition = i === 0 ? !hasPremium && !hasStandard : !hasPremium;
        return (
          <div className="grid grid-cols-3 lg:flex flex-wrap gap-2" key={i}>
            {section.map((option) => {
              const splitOption = option.split(" ");
              return (
                <Button
                  key={option}
                  className={cn(
                    "bg-[#fdd2bf] h-auto text-blue-three flex flex-col items-center justify-center text-xs disabled:cursor-not-allowed",
                    {
                      "bg-cyan": i === 0,
                      "bg-green-500 text-white": activeTab === option,
                    }
                  )}
                  disabled={condition}
                  onClick={() => handlePrediction(option)}
                  title={
                    condition
                      ? "You need to subscribe to access this feature"
                      : ""
                  }
                >
                  <span className="flex items-center gap-2">
                    {option !== "Inplay Live" ? (
                      option.replace("ice hockey", "")
                    ) : (
                      <>
                        {splitOption[0]}
                        <sup className="animate-pulse text-xs text-red-500">
                          {splitOption[1]}
                        </sup>
                      </>
                    )}
                  </span>
                  {condition && (
                    <>
                      <FaLock className="text-xs text-red-500" />
                      <Link
                        href="/dashboard/buy-plan"
                        className="text-[10px] text-red-500"
                      >
                        {t("UPGRADE")}
                      </Link>
                    </>
                  )}
                </Button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
