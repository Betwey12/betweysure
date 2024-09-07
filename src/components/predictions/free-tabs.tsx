import { capitalize, cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

interface FreetabsProps {
  handlePrediction: (option: string) => void;
  activeTab: string;
  freeTabs: string[];
  sport?: string;
}

export default function Freetabs({
  handlePrediction,
  activeTab,
  freeTabs,
  sport = "Football",
}: FreetabsProps) {
  const t = useTranslations("FREE_TABS");
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold min-w-max">
        {t("TITLE", {
          sport: capitalize(sport),
        })}
      </h1>
      <div className="grid grid-cols-3 lg:flex flex-wrap gap-2 ">
        {freeTabs.map((option) => {
          const splitOption = option.split(" ");
          return (
            <Button
              key={option}
              className={cn(
                "bg-[#74e8cb] h-auto text-blue-three text-xs justify-center",
                {
                  "bg-green-500 text-white": activeTab === option,
                }
              )}
              onClick={() => handlePrediction(option)}
            >
              {option !== "Inplay Live" ? (
                option.replace("ice hockey", "")
              ) : (
                <>
                  <span>{splitOption[0]}</span>
                  <sup className="animate-pulse text-xs text-red-500">
                    {splitOption[1]}
                  </sup>
                </>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
