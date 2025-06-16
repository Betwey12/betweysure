import { FaArrowRight, FaInfoCircle, FaLock } from "react-icons/fa";
import { cn } from "../../lib/utils";
import ResultIcon from "./result-icon";
import globeIcon from "../../assets/icons/globe.png";
import footballIcon from "../../assets/icons/solar-football.png";
import { useSlip } from "@/hooks/useSlip";
import { getLeague } from "@/assets/data/leagueApiF";
import Image from "next/image";
import AuthedLink from "./authed-link";

interface PredictionListProps {
  highestPrediction?: string;
  predictionObj?: Prediction;
  prediction?: string;
  topPredictions?: {
    label: string;
    value: string;
  }[];
  setClickedPredictionObj: React.Dispatch<
    React.SetStateAction<Prediction | undefined>
  >;
  setTopPredictions: React.Dispatch<
    React.SetStateAction<
      | {
          label: string;
          value: string;
        }[]
      | undefined
    >
  >;
  hidePrediction: boolean;
}

export function PredictionList({
  predictionObj,
  topPredictions,
  setClickedPredictionObj,
  setTopPredictions,
  prediction,
  hidePrediction,
  highestPrediction,
}: PredictionListProps) {
  const { slip, setSlip } = useSlip();
  const isClicked = slip?.predictions.some(
    (prediction) =>
      prediction.resultKey === predictionObj?.resultKey &&
      prediction.id === predictionObj?.id,
  );

  const predictedScore = predictionObj?.correctscore || "N/A";
  const leagueApiF = getLeague({
    name: predictionObj?.competition,
    country: predictionObj?.country,
  });
  const imgSource = leagueApiF
    ? leagueApiF.country.flag || leagueApiF.league.logo
    : globeIcon;

  console.log(predictionObj);

  const home = {
    name: predictionObj?.homeTeam,
    logo: predictionObj.homeLogo,
  };

  const away = {
    name: predictionObj?.awayTeam,
    logo: predictionObj.awayLogo,
  };

  function handleModal() {
    setClickedPredictionObj(predictionObj);
    setTopPredictions(topPredictions);
  }

  function handleAddToSlip() {
    setSlip({
      ...slip,
      timedOut: false,
      ...(predictionObj && {
        predictions: (() =>
          isClicked
            ? slip?.predictions.filter(
                (prediction) =>
                  !(
                    prediction.id === predictionObj.id &&
                    prediction.resultKey === predictionObj.resultKey
                  ),
              )
            : slip?.predictions.concat(predictionObj))(),
      }),
    });
  }

  return (
    <div className="grid grid-cols-[30px_minmax(100px,_1fr)_100px_30px] lg:grid-cols-6 text-xs py-2 px-4 lg:px-6 rounded-lg dark:text-white bg-white border-b border-gray-two dark:bg-blue-two dark:border-0">
      <button
        aria-label="click to view more"
        className="flex items-center gap-2 disabled:opacity-50 text-left"
        onClick={handleModal}
        disabled={hidePrediction}
      >
        <Image
          width={30}
          height={30}
          src={imgSource}
          alt="league logo"
          className="w-6 h-6 rounded-full bg-white"
          loading="lazy"
        />
        <p className="truncate w-[70%] lg:block hidden">
          {predictionObj?.competition_full}
        </p>
      </button>
      <button
        aria-label="click to view more"
        disabled={hidePrediction}
        className="lg:hidden flex justify-center flex-col items-center gap-2 disabled:opacity-50"
        onClick={handleModal}
      >
        <p className="truncate w-[70%]">{home.name}</p>
        <div className="flex items-center gap-2">
          <p className="truncate w-[70%]">VS</p>
          <FaInfoCircle className="text-yellow-500 text-base" />
        </div>
        <p className="truncate w-[70%]"> {away.name}</p>
      </button>

      <button
        className="hidden lg:flex items-center gap-2 disabled:opacity-50 text-left"
        aria-label="click to view more"
        onClick={handleModal}
        disabled={hidePrediction}
      >
        <Image
          width={30}
          height={30}
          src={home.logo}
          alt="home team logo"
          className="w-6 h-6 rounded-full bg-white"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = footballIcon.src;
          }}
        />
        <p className="truncate w-[70%] text-left">{home.name}</p>
      </button>

      <button
        aria-label="click to view more"
        className="hidden lg:flex items-center gap-2 disabled:opacity-50"
        onClick={handleModal}
        disabled={hidePrediction}
      >
        <Image
          width={30}
          height={30}
          src={away.logo}
          alt="away team logo"
          className="w-6 h-6 rounded-full bg-white"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = footballIcon.src;
          }}
        />
        <p className="truncate w-[70%] text-left">{away.name}</p>
        <FaInfoCircle className="text-yellow-500 text-lg" />
      </button>
      <button
        disabled={hidePrediction}
        aria-label={
          hidePrediction ? "Subscibe to view" : "click to add to betslip"
        }
        className={cn(
          "text-center flex border border-cyan px-2 py-1 rounded flex-col justify-center items-center place-self-center lg:hidden",
          {
            "border-red-300 text-red-300": hidePrediction,
            "bg-cyan text-white": isClicked,
          },
        )}
        onClick={handleAddToSlip}
      >
        {hidePrediction ? <FaLock /> : prediction}
        {!hidePrediction && (
          <span className="text-center place-self-center">
            / {predictedScore}
          </span>
        )}
      </button>

      <p className="text-center lg:block rounded hidden place-self-center">
        {hidePrediction ? <FaLock /> : predictedScore}
      </p>
      <button
        disabled={hidePrediction}
        title={hidePrediction ? "Subscibe to view" : "click to add to betslip"}
        className={cn(
          "text-center border border-cyan py-1 px-2 capitalize rounded place-self-center hidden lg:block",
          {
            "border-red-300 text-red-300": hidePrediction,
            "bg-cyan text-white": isClicked,
          },
        )}
        onClick={handleAddToSlip}
        aria-label={
          hidePrediction ? "Subscibe to view" : "click to show betslip"
        }
      >
        {hidePrediction ? <FaLock /> : prediction}
      </button>

      <div className="flex items-center justify-center">
        {hidePrediction ? (
          <AuthedLink
            href={"/pricing"}
            className="flex items-center gap-2 text-red-300"
            title={
              <>
                Show <FaArrowRight />
              </>
            }
          />
        ) : (
          <ResultIcon
            awayGoals={predictionObj?.away_goals ?? 0}
            homeGoals={predictionObj?.home_goals ?? 0}
            highestPrediction={highestPrediction}
            status={predictionObj?.status}
            resultKey={predictionObj?.resultKey}
          />
        )}
      </div>
    </div>
  );
}
