"use client";
import { period } from "@/assets/data/data";
import { leagueList } from "@/assets/data/leagueApiF";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { CommandItem } from "cmdk";
import { capitalize } from "@/lib/utils";
import { Combobox } from "./combobox";

export default function PredictionSelect() {
  const router = useRouter();
  const leagues = Object.keys(leagueList);
  const [open, setOpen] = useState(false);

  const leaguesList = leagues.map((option) => {
    const leagueOptions = leagueList[option].map((opt) => ({
      label: `${opt.country} ${opt.name}`,
      value: `${opt.name.toLowerCase().replace(/\s+/g, "-").replace(/-+/g, "-")}-${opt.apiFootballId}`,
    }));

    return (
      <Fragment key={option}>
        <p className="text-gray-one text-sm">{option}</p>
        {leagueOptions.map((league) => (
          <CommandItem
            key={league.value}
            value={league.value}
            className={
              "hover:bg-cyan/10 w-full  cursor-pointer px-2 py-2 min-w-fit text-sm"
            }
            onSelect={(v) => {
              router.push(`/popular/${v}/standings`);
            }}
          >
            {league.label}
          </CommandItem>
        ))}
      </Fragment>
    );
  });

  const options = period.map((p) => ({
    label: p,
    value: p,
  }));
  const periodList = options.map((option) => {
    return (
      <CommandItem
        key={option.value}
        value={option.value}
        onSelect={(v) => {
          router.push(`/popular/${v}/predictions`);
        }}
        className="flex items-center hover:bg-cyan/10 w-full cursor-pointer px-2 py-2 min-w-fit text-sm"
      >
        {capitalize(option.label)}
      </CommandItem>
    );
  });

  return (
    <Combobox
      placeholder="Select a league to view predictions"
      searchPlaceHolder="Search league by name"
      handleOpen={() => setOpen(!open)}
      open={open}
    >
      <p className="text-gray-one text-sm">By Date</p>
      {periodList}
      {leaguesList}
    </Combobox>
  );
}
