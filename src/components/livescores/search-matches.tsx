import { useTranslations } from "next-intl";

interface SearchMatchesProps {
  noOfMatches: number;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchMatches({
  noOfMatches,
  setSearchValue,
}: SearchMatchesProps) {
  const t = useTranslations("SEARCH_MATCHES");

  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center justify-between mt-12 px-4 md:px-10 lg:px-20 dark:text-white">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">{t("MATCH_FIXTURES_TODAY")}</p>
        <div className="flex lg:items-center gap-2 lg:text-xl">
          <h1>{t("ALL_LEAGUES_AND_COUNTRIES")} </h1>
          <p>|</p>
          <p>
            {noOfMatches} {t("MATCHES")}
          </p>
        </div>
      </div>

      <input
        type="search"
        name="search"
        id="search"
        placeholder={`🔍  ${t("PLACEHOLDER", { noOfMatches })}`}
        className="py-2 bg-white px-4 rounded focus:outline-none text-gray-one border border-gray-one"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
