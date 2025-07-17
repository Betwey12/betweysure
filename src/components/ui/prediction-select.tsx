"use client";
import { period } from "@/assets/data/data";
import { leagueList } from "@/assets/data/leagueApiF";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { capitalize } from "@/lib/utils";
import { Combobox } from "./combobox";
import { CommandGroup, CommandItem } from "@/components/ui/command";

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
      <CommandGroup
        key={option}
        heading={capitalize(option)}
        className="mt-2 text-gray-one text-sm"
      >
        {leagueOptions.map((league) => (
          <CommandItem
            key={league.value}
            value={league.value}
            className={
              "hover:bg-cyan/10 w-full cursor-pointer px-2 py-2 min-w-fit text-sm text-foreground"
            }
            onSelect={(v) => {
              router.push(`/popular/${v}/standings`);
            }}
          >
            {league.label}
          </CommandItem>
        ))}
      </CommandGroup>
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
        className="flex items-center hover:bg-cyan/10 w-full cursor-pointer px-2 py-2 min-w-fit text-sm text-foreground"
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
      <CommandGroup heading="By Date" className="text-gray-one text-sm">
        {periodList}
      </CommandGroup>
      {leaguesList}
    </Combobox>
  );
}
