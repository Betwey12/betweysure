"use client";
import { Pagination } from "@mui/material";
import PredictionsFilter from "./predictions-filter";
import Freetabs from "./free-tabs";
import PaidTabs from "./paid-tabs";
import LivePredictions from "./live-predictions";
import { FaInfoCircle } from "react-icons/fa";
import FootballPredictionTable from "./football-predictions-table";
import SelectedGames from "../ui/selected-games";
import useControlFootballPredictions from "@/hooks/useControlFootballPredictions";
import { footballFreeTabs, footballPaidTabs } from "@/assets/data/data";
import { useRouter } from "next/navigation";
import useFilterPredictions from "@/hooks/useFilterPredictions";

interface FootballPredictionsProps {
  country: string;
}
export default function FootballPredictions({
  country,
}: FootballPredictionsProps) {
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

  const {
    filteredPredictions: filteredData,
    setSearchValue,
    options,
  } = useFilterPredictions({ predictions: tableData ?? [], country });

  const filteredPredictions = filteredData as Prediction[];
  const count = Math.ceil(
    (filteredPredictions?.length ?? 0) / predictionsPerPage
  );

  const handleSelectOption = (option: string) => {
    handlePagination(undefined, 1);
    router.push(`/football-predictions?country=${option}`);
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <PredictionsFilter
          options={options}
          setShowDate={setShowDate}
          handlDateChange={handlDateChange}
          showDate={showDate}
          fullDate={fullDate}
          periodIndex={periodIndex}
          setFullDate={setFullDate}
          setPeriodIndex={setPeriodIndex}
          title="Football Predictions"
          selectedOption={country}
          setSearchValue={setSearchValue}
          handleSelectOption={handleSelectOption}
          handlePagination={handlePagination}
        />
      </div>

      <div className="flex flex-col gap-8 mt-10">
        <Freetabs
          handlePrediction={handlePrediction}
          activeTab={activeTab}
          freeTabs={footballFreeTabs}
        />

        <PaidTabs
          handlePrediction={handlePrediction}
          activeTab={activeTab}
          paidTabs={footballPaidTabs}
        />
      </div>

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
            <div className="hidden lg:grid grid-cols-6 items-center px-6">
              {heading.map((heading) => (
                <h3 key={heading}>{heading}</h3>
              ))}
            </div>
            <div className="border border-gray-two bg-white py-4 mt-4 lg:mt-6 lg:py-6 dark:bg-blue-two dark:border-0">
              <div className="flex items-center justify-between px-4 lg:justify-center mb-4 gap-4">
                <FaInfoCircle className="text-yellow-500 text-lg" />

                <p className="text-center text-sm w-[80%] lg:w-auto">
                  Click on a prediction to view more options, details, and tips
                  for free
                </p>
              </div>
              <div className="flex flex-col">
                <FootballPredictionTable
                  from={from}
                  isLoading={isLoading}
                  predictions={filteredPredictions}
                  to={to}
                />
              </div>

              {(filteredPredictions?.length ?? 0) > 0 && (
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
