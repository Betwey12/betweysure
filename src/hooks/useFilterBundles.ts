import { useState } from "react";
import useGetUser from "./useGetUser";

type useFilterBundles = {
  data?: TMatchPredictionAndPrediction[];
  handlePagination: (e: any, value: number) => void;
};

const useFilterBundles = ({ data, handlePagination }: useFilterBundles) => {
  const { user } = useGetUser();
  const plan =
    (user?.plan?.expiry ?? 0) < Date.now() ? "free" : user?.plan?.type;

  const [activeTab, setActiveTab] = useState("All");
  const [showLive, setShowLive] = useState(false);

  const allFree: Record<string, TMatchPredictionAndPrediction[] | undefined> = {
    "1X": assignByMatch({
      key: "1x2",
      value: "1X",
    }),
    "2X": assignByMatch({
      key: "1x2",
      value: "2X",
    }),
    "12": assignByMatch({
      key: "1x2",
      value: "12",
    }),

    "Correct Score": assignByKey("correctscore"),

    "Draw Tips": assignByThreshold({
      key: "draw",
      threshold: 50,
      option: "Draw Tips",
    }),

    "HT Home": assignByThreshold({
      key: "hthome",
      threshold: 50,
      option: "HT Home",
    }),

    "HT Away": assignByThreshold({
      key: "htaway",
      threshold: 50,
      option: "HT Away",
    }),

    "HT Draw": assignByThreshold({
      key: "htdraw",
      threshold: 50,
      option: "HT Draw",
    }),

    "Over 0.5 FHG": assignByThreshold({
      key: "fhover0",
      threshold: 60,
      option: "Over 0.5 FHG",
    }),

    "Over 1.5 FHG": assignByThreshold({
      key: "fhover1",
      threshold: 50,
      option: "Over 1.5 FHG",
    }),

    "Win to Nil Tips": assignByWinAndTreshold({
      key: "home_win",
      threshold: 60,
      option: "Win to Nil Tips",
    }),
  };

  const allPremium: Record<
    string,
    TMatchPredictionAndPrediction[] | undefined
  > = {
    ...allFree,
    Corners: assignByKey("corners"),
    "Over 1.5": assignByThreshold({
      key: "over15goals",
      threshold: 85,
      option: "Over 1.5",
    }),
    Cards: assignByKey("bookings"),
    "HT/FT": assignByKey("hftfpred"),

    "Over 2.5": assignByThreshold({
      key: "over25goals",
      threshold: 70,
      option: "Over 2.5",
    }),

    "Over 3.5": assignByThreshold({
      key: "over35goals",
      threshold: 50,
      option: "Over 3.5",
    }),

    "BTTS HT&FT": assignByThreshold({
      key: "btsibh",
      threshold: 50,
      option: "BTTS HT&FT",
    }),

    "Home win": assignByThreshold({
      key: "home_win",
      threshold: 60,
      option: "Home Win",
    }),

    "Away win": assignByThreshold({
      key: "away_win",
      threshold: 60,
      option: "Away Win",
    }),

    BTTS: assignByThreshold({
      key: "both_teams_to_score",
      threshold: 70,
      option: "BTTS",
    }),

    "Win & Over 2.5": assignByWinAndTreshold({
      key: "over25goals",
      threshold: 70,
      option: "Win & Over 2.5",
    }),

    "BTTS & Win": assignByWinAndTreshold({
      key: "both_teams_to_score",
      threshold: 60,
      option: "BTTS & Win",
    }),
  };

  const allMixed: Record<string, TMatchPredictionAndPrediction[] | undefined> =
    {
      ...allPremium,
    };

  const planPredictions: Record<
    TUserResponse["user"]["plan"]["type"],
    Record<string, TMatchPredictionAndPrediction[] | undefined>
  > = {
    free: allFree,
    mixed: allMixed,
    premium: allPremium,
  };
  const allPredictions = plan ? planPredictions[plan] : planPredictions.free;

  const all = Object.values(allPredictions).flat();

  const betOfTheDay = all.filter((obj) => {
    return obj?.bet_of_the_day;
  });

  function assignByKey(key: string) {
    return data
      ?.filter((obj) => {
        // @ts-expect-error do not type
        return obj[key];
      })
      .map((obj) => {
        const newObj = { ...obj }; // Create a shallow copy of each object
        // @ts-expect-error do not type
        newObj.prediction = obj[key];
        // @ts-expect-error do not type
        newObj.resultKey = obj[key];
        return newObj;
      });
  }

  function assignByMatch({ key, value }: { key: string; value: string }) {
    return data
      ?.filter((obj) => {
        // @ts-expect-error do not type
        return obj[key] === value;
      })
      .map((obj) => {
        const newObj = { ...obj }; // Create a shallow copy of each object

        // @ts-expect-error do not type
        newObj.prediction = newObj[key] === value ? value : undefined;
        newObj.resultKey = value;
        return newObj;
      });
  }

  function assignByThreshold({
    key,
    threshold,
    option,
  }: {
    key: string;
    option: string;
    threshold: number;
  }) {
    return data
      ?.filter((obj) => {
        // @ts-expect-error do not type
        return +obj[key] >= threshold;
      })
      .map((obj) => {
        const newObj = { ...obj };
        newObj.prediction =
          // @ts-expect-error do not type
          +newObj[key] >= threshold
            ? // @ts-expect-error do not type
              `${option} ${newObj[key]}%`
            : undefined;
        newObj.resultKey = key;
        newObj.bet_of_the_day =
          // @ts-expect-error do not type
          +newObj[key] >= (key === "over15goals" || key === "over0" ? 90 : 80);
        return newObj;
      });
  }

  function assignByWinAndTreshold({
    key,
    threshold,
    option,
  }: {
    key: string;
    threshold: number;
    option: string;
  }) {
    return data
      ?.filter((obj) => {
        // @ts-expect-error do not type
        return +obj[key] >= threshold;
      })
      .map((obj) => {
        const newObj = { ...obj }; // Create a shallow copy of each object
        const winningPercent =
          +newObj.home_win >= +newObj.away_win
            ? +newObj.home_win
            : +newObj.away_win;
        const winningTeam =
          +newObj.home_win >= +newObj.away_win ? "home" : "away";

        const totalPercent = Math.floor(
          // @ts-expect-error do not type
          (winningPercent + +newObj[key]) / 2
        );

        newObj.prediction =
          // @ts-expect-error do not type
          newObj[key] >= threshold
            ? `${option} ${winningTeam} win ${totalPercent}%`
            : undefined;
        newObj.resultKey = `${winningTeam}_${key}`;
        newObj.bet_of_the_day = totalPercent >= 80;

        return newObj;
      });
  }

  const keyMap: {
    [key: string]: (TMatchPredictionAndPrediction | undefined)[];
  } = {
    "Bet of the Day": betOfTheDay,
    All: all,
  };

  const tableData = (
    keyMap[activeTab] ? keyMap[activeTab] : allPredictions[activeTab]
  ) as Prediction[];

  const handlePrediction = (option: string) => {
    setShowLive(false);
    handlePagination(undefined, 1);
    setActiveTab(option);
    setShowLive(option === "Inplay Live");
  };

  return {
    handlePrediction,
    tableData,
    activeTab,
    showLive,
  };
};

export default useFilterBundles;
