import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";
import { FaSpinner } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface FilterProps {
  results: MatchResults[];
  isLoading: boolean;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function Filter({
  results,
  isLoading,
  setSelectedCountry,
}: FilterProps) {
  const t = useTranslations("FILTER");
  const [expanded, setExpanded] = useState(false);

  const allCountries = results?.map((result) =>
    result.league.country ? result.league.country : result?.country?.name
  );
  const countries = Array.from(new Set(allCountries)).sort();

  return (
    <div
      className={cn(
        "border-gray-two border bg-white absolute -top-16 cursor-pointer lg:static p-4 lg:p-6 lg:w-[20%] shadow rounded-xl max-h-[580px] overflow-y-scroll dark:bg-blue-one dark:border-0",
        {
          "max-h-[50px] lg:max-h-[580px] lg:overflow-scroll overflow-hidden":
            !expanded,
        }
      )}
      onClick={() => setExpanded(!expanded)}
    >
      <h3 className="text-lg lg:text-xl">{t("COUNTRIES")}</h3>
      <p className="capitalize mt-4">{t("POPULAR_COUNTRIES")}</p>
      <div className="flex flex-col gap-2 mt-2">
        {populatCountries.map((popularCountry) => {
          const noOfMatches = results?.filter((result) => {
            const country = result.league.country
              ? result.league.country
              : result?.country?.name;
            const filter =
              popularCountry === "All"
                ? true
                : country?.toLowerCase() === popularCountry?.toLowerCase();

            return filter;
          }).length;
          return (
            <Button
              key={popularCountry}
              className="flex items-center gap-2 bg-gray-one text-white"
              onClick={() => setSelectedCountry(popularCountry?.toLowerCase())}
            >
              <span>{popularCountry}</span>
              <span>({noOfMatches})</span>
            </Button>
          );
        })}
      </div>
      <p className="my-6">A - Z</p>
      <div className="flex flex-col gap-2 mt-2">
        {isLoading ? (
          <FaSpinner className="self-center" />
        ) : (
          countries.map((country) => {
            const noOfMatches = results?.filter((result) => {
              const matchCountry = result.league.country
                ? result?.league?.country
                : result?.country?.name;
              return matchCountry?.toLowerCase() === country?.toLowerCase();
            }).length;

            return (
              <Button
                key={country}
                className="flex items-center gap-2 bg-gray-one text-white"
                onClick={() => setSelectedCountry(country?.toLowerCase())}
              >
                <span>{country}</span>
                <span>({noOfMatches})</span>
              </Button>
            );
          })
        )}
      </div>
    </div>
  );
}
const populatCountries = ["All", "England", "France", "Germany", "Spain"];
