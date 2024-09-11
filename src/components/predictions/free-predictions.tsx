"use client";
import { FaSpinner } from "react-icons/fa";
import SelectedGames from "../ui/selected-games";
import LivePredictions from "./live-predictions";
import PredictionsFilter from "./predictions-filter";
import FootballPredictionTable from "./football-predictions-table";
import { Pagination } from "@mui/material";
import useControlFootballPredictions from "@/hooks/useControlFootballPredictions";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { footballFreeTabs, popularTags } from "@/assets/data/data";
import { useRouter } from "next/navigation";
import Freetabs from "./free-tabs";

export default function FreePredictions() {
  const router = useRouter();
  const {
    from,
    handlePagination,
    handlePrediction,
    isLoading,
    livePredictions,
    showLive,
    predictionsPerPage,
    tableData,
    to,
    setShowDate,
    handlDateChange,
    showDate,
    fullDate,
    periodIndex,
    setFullDate,
    setPeriodIndex,
    activeTab,
    isLoadingLive,
  } = useControlFootballPredictions();
  const searchParams = useSearchParams();
  const country = searchParams.get("country") ?? "all";
  const options = ["England", "Spain", "Italy", "Germany", "France", "Europe"];
  const [searchValue, setSearchValue] = useState("");

  const filteredPredictions = tableData?.filter((prediction) => {
    const filter =
      country.toLowerCase() === "all"
        ? true
        : prediction.country?.toLowerCase() === country.toLowerCase();
    const newSearchValue = searchValue.toLowerCase();
    const hasSearchValue =
      prediction.competition_full.toLowerCase().includes(newSearchValue) ||
      prediction.country.toLowerCase().includes(newSearchValue) ||
      prediction.awayTeam.toLowerCase().includes(newSearchValue) ||
      prediction.homeTeam.toLowerCase().includes(newSearchValue);

    return filter && hasSearchValue;
  });
  const unPopularPredictions = filteredPredictions?.filter(
    (prediction) =>
      !popularTags.some((tag) =>
        prediction.competition_full.toLowerCase().includes(tag)
      )
  );
  const count = Math.ceil(
    (unPopularPredictions?.length ?? 0) / predictionsPerPage
  );

  const handleSelectOption = (option: string) => {
    router.push(`/dashboard/free-predictions?country=${option}`);
  };

  return (
    <>
      <div className="flex flex-col gap-6 mb-10">
        <PredictionsFilter
          title="Free Football Predictions"
          options={options}
          setShowDate={setShowDate}
          handlDateChange={handlDateChange}
          showDate={showDate}
          fullDate={fullDate}
          periodIndex={periodIndex}
          setFullDate={setFullDate}
          setPeriodIndex={setPeriodIndex}
          setSearchValue={setSearchValue}
          selectedOption={country}
          handleSelectOption={handleSelectOption}
          handlePagination={handlePagination}
        />
      </div>

      <Freetabs
        handlePrediction={handlePrediction}
        activeTab={activeTab}
        freeTabs={footballFreeTabs}
      />

      <div className="overflow-x-scroll">
        {showLive ? (
          <LivePredictions
            livePredictions={livePredictions}
            isLoading={isLoadingLive}
          />
        ) : (
          <div className="mt-10">
            <div className="lg:hidden grid grid-cols-2 text-center">
              {mobileHeading.map((heading) => (
                <h3 key={heading}>{heading}</h3>
              ))}
            </div>
            <div className="hidden lg:grid grid-cols-6 items-center">
              {heading.map((heading) => (
                <h3 key={heading}>{heading}</h3>
              ))}
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center my-6">
                <span className="animate-spin">
                  <FaSpinner />
                </span>
              </div>
            ) : (
              <div className="border border-gray-two bg-white py-4 mt-4 lg:mt-6 lg:py-6 dark:bg-blue-two dark:border-0">
                <div className="flex flex-col">
                  <FootballPredictionTable
                    from={from}
                    isLoading={isLoading}
                    predictions={unPopularPredictions ?? []}
                    to={to}
                  />
                </div>

                {(unPopularPredictions?.length ?? 0) > 0 && (
                  <div className="flex items-center lg:justify-end">
                    <Pagination
                      count={count}
                      shape="rounded"
                      onChange={handlePagination}
                      className=""
                      page={Math.ceil(from / predictionsPerPage) + 1}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <SelectedGames />
    </>
  );
}

const heading = [
  "League",
  "Home",
  "Away",
  "Predicted Score",
  "Prediction",
  "Result",
];

const mobileHeading = ["Matches", "Prediction"];
