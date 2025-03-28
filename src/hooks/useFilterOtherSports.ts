import { useState } from "react";

type TUseFilterOtherSportsProps = {
  payload: TOtherSportsResponse["data"];
  handlePagination: (e: any, value: number) => void;
};
export default function useFilterOtherSports({
  payload,
  handlePagination,
}: TUseFilterOtherSportsProps) {
  const [activeTab, setActiveTab] = useState("Home");

  const filterMap: Record<string, TOtherSPortsMatchData[]> = {
    "Bet of the day": payload
      .filter((obj) =>
        // @ts-expect-error do not type
        Object.keys(obj).some((key) => obj[key] >= 0.9 && obj[key] <= 1)
      )
      .map((obj) => ({
        ...obj,
        botd: true,
        percent:
          Math.max(
            ...Object.values(obj)
              .filter((val) => +val <= 1)
              .map(Number)
          ) * 100,
      })),
    Home: payload
      .filter((obj) => obj.rank_atw_ft < 0.4 || obj.rank_htw_nt > 0.6)
      .map((obj) => ({
        ...obj,
        rank_htw_ft: 1,
        percent: (1 - obj.rank_atw_ft || obj.rank_htw_nt) * 100,
      })),
    Away: payload
      .filter((obj) => obj.rank_atw_ft > 0.6 || obj.rank_atw_nt > 0.6)
      .map((obj) => ({
        ...obj,
        rank_atw_ft: 1,
        percent: (obj.rank_atw_ft || obj.rank_atw_nt) * 100,
      })),
    Draw: payload
      .filter((obj) => obj.rank_atw_ft === 0.5 || obj.rank_drw_nt > 0.5)
      .map((obj) => ({
        ...obj,
        rank_drw_ft: 1,
        percent: (obj.rank_atw_ft || obj.rank_drw_nt) * 100,
      })),
    "Handicap All Sets": payload
      .filter((obj) => obj.rank_ahc_p15_ft > 0.8 || obj.rank_hhc_p15_ft > 0.8)
      .map((obj) => ({
        ...obj,
        ...(obj.rank_ahc_p15_ft > obj.rank_hhc_p15_ft
          ? {
              rank_ahc_p15_ft: 1,
            }
          : {
              rank_hhc_p15_ft: 1,
            }),
        percent: (obj.rank_ahc_p15_ft || obj.rank_hhc_p15_ft) * 100,
      })),
    Set1: payload.map((obj) => ({
      ...obj,
      ...(obj.rank_atw_p1 > obj.rank_htw_p1
        ? {
            rank_atw_p1: 1,
          }
        : {
            rank_htw_p1: 1,
          }),
      percent: (obj.rank_atw_p1 || obj.rank_htw_p1) * 100,
    })),
    Set2: payload.map((obj) => ({
      ...obj,
      ...(obj.rank_atw_p2 > obj.rank_htw_p2
        ? {
            rank_atw_p2: 1,
          }
        : {
            rank_htw_p2: 1,
          }),
      percent: (obj.rank_atw_p2 || obj.rank_htw_p2) * 100,
    })),
    "Over 7.5": filterMapByThreshold(["rank_to_75_p1", "rank_to_75_p2"], 0.9),
    "Over 8.5": filterMapByThreshold(["rank_to_85_p1", "rank_to_85_p2"], 0.8),
    "Over 9.5": filterMapByThreshold(["rank_to_95_p1", "rank_to_95_p2"], 0.6),
    "Over 10.5": filterMapByThreshold(
      ["rank_to_105_p1", "rank_to_105_p2"],
      0.35
    ),
    "Over 12.5": filterMapByThreshold(
      ["rank_to_125_p1", "rank_to_125_p2"],
      0.3
    ),
    "Over 19.5": filterMapByThreshold(["rank_to_195_pall"], 0.7),
    "Over 20.5": filterMapByThreshold(["rank_to_205_pall"], 0.6),
    "Over 21.5": filterMapByThreshold(["rank_to_215_pall"], 0.6),
    "Over 22.5": filterMapByThreshold(["rank_to_225_pall"], 0.5),
    "Over 23.5": filterMapByThreshold(["rank_to_235_pall"], 0.4),
    "Over 24.5": filterMapByThreshold(["rank_to_245_pall"], 0.4),
    "Over 197.5 FT": filterMapByThreshold(["rank_to_lvl1_nt"], 0.9),
    "Over 205.5 FT": filterMapByThreshold(["rank_to_lvl2_nt"], 0.9),
    "Over 213.5 FT": filterMapByThreshold(["rank_to_lvl3_nt"], 0.8),
    "Over 221.5 FT": filterMapByThreshold(["rank_to_lvl4_nt"], 0.7),
    "Over 229.5 FT": filterMapByThreshold(["rank_to_lvl5_nt"], 0.6),
    "Home Over 100.5 FT": filterMapByThreshold(["rank_ho_lvl1_nt"], 0.9),
    "Home Over 108.5 FT": filterMapByThreshold(["rank_ho_lvl2_nt"], 0.8),
    "Home Over 116.5 FT": filterMapByThreshold(["rank_ho_lvl3_nt"], 0.6),
    "Away Over 97.5 FT": filterMapByThreshold(["rank_ao_lvl1_nt"], 0.9),
    "Away Over 105.5 FT": filterMapByThreshold(["rank_ao_lvl2_nt"], 0.8),
    "Away Over 113.5 FT": filterMapByThreshold(["rank_ao_lvl3_nt"], 0.7),
    "Over 47.5 Q": filterMapByThreshold(
      [
        "rank_to_lvl1_p4",
        "rank_to_lvl1_p3",
        "rank_to_lvl1_p2",
        "rank_to_lvl1_p1",
      ],
      0.9
    ),
    "Over 53.5 Q": filterMapByThreshold(
      [
        "rank_to_lvl2_p4",
        "rank_to_lvl2_p3",
        "rank_to_lvl2_p2",
        "rank_to_lvl2_p1",
      ],
      0.8
    ),
    "Over 59.5 Q": filterMapByThreshold(
      [
        "rank_to_lvl3_p4",
        "rank_to_lvl3_p3",
        "rank_to_lvl3_p2",
        "rank_to_lvl3_p1",
      ],
      0.7
    ),
    "Over 6.5": filterMapByThreshold(["rank_to_65_nt"], 0.9),
    "Over 7.5 baseball": filterMapByThreshold(["rank_to_75_nt"], 0.8),
    "Over 8.5 baseball": filterMapByThreshold(["rank_to_85_nt"], 0.7),
    "Over 9.5 baseball": filterMapByThreshold(["rank_to_95_nt"], 0.6),
    "Over 10.5 baseball": filterMapByThreshold(["rank_to_105_nt"], 0.5),
    "Home Over 2.5": filterMapByThreshold(["rank_ho_25_nt"], 0.9),
    "Home Over 4.5": filterMapByThreshold(["rank_ho_45_nt"], 0.8),
    "Home Over 6.5": filterMapByThreshold(["rank_ho_65_nt"], 0.4),
    "Away Over 2.5": filterMapByThreshold(["rank_ao_25_nt"], 0.9),
    "Away Over 4.5": filterMapByThreshold(["rank_ao_45_nt"], 0.5),
    "Away Over 6.5": filterMapByThreshold(["rank_ao_65_nt"], 0.4),
    "Over 3.5": filterMapByThreshold(["rank_to_35_nt"], 0.9),
    "Over 4.5": filterMapByThreshold(["rank_to_45_nt"], 0.8),
    "Over 5.5": filterMapByThreshold(["rank_to_55_nt"], 0.6),
    "Over 6.5 ice hockey": filterMapByThreshold(["rank_to_65_nt"], 0.5),
    "Over 7.5 ice hockey": filterMapByThreshold(["rank_to_35_nt"], 0.5),
    "Home Over 1.5": filterMapByThreshold(["rank_ho_15_nt"], 0.8),
    "Home Over 3.5": filterMapByThreshold(["rank_ho_35_nt"], 0.5),
    "Home Over 5.5": filterMapByThreshold(["rank_ho_55_nt"], 0.1),
    "Away Over 0.5": filterMapByThreshold(["rank_ao_05_nt"], 0.8),
    "Away Over 2.5 ice hockey": filterMapByThreshold(["rank_ao_25_nt"], 0.5),
    "Away Over 4.5 ice hockey": filterMapByThreshold(["rank_ao_45_nt"], 0.2),
    "Over 0.5": filterMapByThreshold(
      ["rank_to_05_p1", "rank_to_05_p2", "rank_to_05_p3"],
      0.9
    ),
    "Over 1.5": filterMapByThreshold(
      ["rank_to_15_p1", "rank_to_15_p2", "rank_to_15_p3"],
      0.6
    ),
    "Over 2.5": filterMapByThreshold(
      ["rank_to_25_p1", "rank_to_25_p2", "rank_to_25_p3"],
      0.4
    ),
    "Home OT": filterMapByThreshold(["rank_htw_ot"], 0.7),
    "Away OT": filterMapByThreshold(["rank_atw_ot"], 0.7),
    "Draw OT": filterMapByThreshold(["rank_drw_ot"], 0.7),
  };
  const tableData = filterMap[activeTab];

  function handleFilterPrediction(option: string) {
    setActiveTab(option);
    handlePagination(undefined, 1);
  }

  function filterMapByThreshold(
    keys: string[],
    threshold: number
  ): TOtherSPortsMatchData[] {
    return (
      payload
        // @ts-expect-error do not type
        .filter((obj) => keys.some((key) => obj[key] >= threshold))
        .map((obj) => ({
          ...obj,
          ...(() => {
            return keys.reduce((acc, key) => {
              // @ts-expect-error do not type
              if (obj[key] >= threshold) {
                // @ts-expect-error do not type
                acc[key] = 1;
                // @ts-expect-error do not type
                acc.percent = obj[key] * 100;
              }
              return acc;
            }, {});
          })(),
        }))
    );
  }

  return { handleFilterPrediction, tableData, activeTab };
}
