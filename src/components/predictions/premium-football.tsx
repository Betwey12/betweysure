"use client";
import { Pagination } from "@mui/material";
import { FaInfoCircle } from "react-icons/fa";
import SelectedGames from "../ui/selected-games";
import FootballPremiumTable from "./football-premium-table";
import usePredictions from "@/hooks/usePredictions";
import useChangeDate from "@/hooks/useChangeDate";
import PredictionsFilter from "./predictions-filter";
import { period } from "@/assets/data/data";
import { useState } from "react";
import useFilterPredictions from "@/hooks/useFilterPredictions";

export default function PremiumFootball() {
  const [periodIndex, setPeriodIndex] = useState(1);
  const [country, setCountry] = useState("all");
  const currentPeriod = period[periodIndex] as TPeriod;

  const { fullDate, handlDateChange, setShowDate, showDate, setFullDate } =
    useChangeDate(currentPeriod);

  const predictionsPerPage = 10;
  const { data, handlePagination, from, to } = usePredictions({
    endpoint: `tips/football-premium/${fullDate}/${fullDate}`,
    queryKey: ["premium-football", fullDate],
    predictionsPerPage,
  });
  const premiumPredictions = (
    (data?.data as unknown as TPremiumPrediction[]) ?? []
  ).map((pred) => ({
    ...pred,
    competition_full: pred.competitionFull,
  }));

  const {
    filteredPredictions: filteredData,
    setSearchValue,
    options,
  } = useFilterPredictions({ predictions: premiumPredictions ?? [], country });
  const filteredPredictions = filteredData as TPremiumPrediction[];

  const handleSelectOption = (option: string) => {
    handlePagination(undefined, 1);
    setCountry(option.toLowerCase());
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
          title="Premium Football Predictions"
          selectedOption={country}
          setSearchValue={setSearchValue}
          handleSelectOption={handleSelectOption}
          handlePagination={handlePagination}
        />
      </div>

      <div className="overflow-x-scroll">
        <div className="mt-10">
          <div className="lg:hidden grid grid-cols-2 text-center">
            {mobileHeading.map((heading) => (
              <h3 key={heading}>{heading}</h3>
            ))}
          </div>
          <div className="hidden lg:grid grid-cols-5 items-center px-6">
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
              {filteredPredictions.slice(from, to).map((predictionObj) => (
                <FootballPremiumTable
                  key={predictionObj._id}
                  awayGoals={predictionObj.awayGoals}
                  awayLogo={predictionObj.awayLogo}
                  awayTeam={predictionObj.awayTeam}
                  competitionName={predictionObj.competitionFull}
                  homeGoals={predictionObj.homeGoals}
                  homeLogo={predictionObj.homeLogo}
                  homeTeam={predictionObj.awayTeam}
                  leagueLogo={predictionObj.competitionLogo}
                  matchStatus={predictionObj.status}
                  tip={predictionObj.tip}
                />
              ))}
            </div>

            {([]?.length ?? 0) > 0 && (
              <div className="flex items-center lg:justify-end">
                <Pagination
                  count={3}
                  shape="rounded"
                  onChange={handlePagination}
                  className=""
                  page={Math.ceil(from / predictionsPerPage) + 1}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <SelectedGames />
    </>
  );
}
const heading = ["League", "Home", "Away", "Prediction", "Result"];

const mobileHeading = ["Matches", "Prediction"];
