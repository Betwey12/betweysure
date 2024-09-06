import RadixSelect from "./radix-select";
import { leagueList, period } from "@/assets/data/data";
import { SelectGroup, SelectItem, SelectLabel } from "./select";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export default function PredictionSelect() {
  const router = useRouter();
  const leagues = Object.keys(leagueList);

  const leaguesList = leagues.map((option) => (
    <Fragment key={option}>
      <SelectLabel className="text-gray-one">{option}</SelectLabel>
      {leagueList[option].map((league) => (
        <SelectItem
          className={
            "hover:bg-cyan/10 w-full cursor-pointer px-2 py-2 min-w-fit"
          }
          value={league.name}
          key={league.name}
        >
          {league.name}
        </SelectItem>
      ))}
    </Fragment>
  ));

  const periodList = period.map((option) => (
    <SelectItem
      className={"hover:bg-cyan/10 w-full cursor-pointer px-2 py-2 min-w-fit"}
      value={option}
      key={option}
    >
      Predictions for {option?.toLowerCase()}
    </SelectItem>
  ));

  return (
    <RadixSelect
      handleValueChange={(v) => router.push(`/popular/${v}/predictions`)}
      selectItems={
        <>
          <SelectGroup>
            <SelectLabel className="text-gray-one">By Date</SelectLabel>
            {periodList}
          </SelectGroup>
          <SelectGroup>{leaguesList}</SelectGroup>
        </>
      }
      placeholder="Select a league to view predictions"
      className="border-gray-one border"
    />
  );
}
