import { FaSpinner } from "react-icons/fa";
import MatchList from "./match-list";
import { useTranslations } from "next-intl";

interface ResultsProps {
  isLoading: boolean;
  results: MatchResults[];
}

export default function Results({ isLoading, results }: ResultsProps) {
  const t = useTranslations("RESULTS");

  return (
    <div className="lg:w-[75%] max-h-[600px] lg:max-h-[700px] overflow-y-scroll w-full border border-gray-two min-h-[400px] shadow rounded-xl p-4 lg:p-6 dark:bg-blue-one dark:border-0">
      {isLoading ? (
        <div className="w-full py-4 flex items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-6 items-center">
            {headings.map((heading) => (
              <h3 className="lg:block place-self-center hidden" key={heading}>
                {heading}
              </h3>
            ))}
            {mobileHeadings.map((heading) => (
              <h3 className="lg:hidden place-self-center" key={heading}>
                {heading}
              </h3>
            ))}
          </div>
          <div className="flex flex-col mt-6 text-sm">
            {results?.length ? (
              results?.map((result, index) => (
                <MatchList key={index} result={result} />
              ))
            ) : (
              <p className="text-center">{t("NO_LIVESCORES")}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

const mobileHeadings = ["Country / League", "Match"];
const headings = ["Country", "League", "Home", "Score", "Away"];
