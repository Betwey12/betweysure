"use client";

import { useState } from "react";
import { getDate } from "../../lib/utils";
import SearchMatches from "./search-matches";
import { useQuery } from "@tanstack/react-query";
import { HTTPRequest } from "@/api";
import Sportstabs from "./sports-tab";
import Results from "./result";
import Filter from "./filter";

export type TSportsTab =
  | "football"
  | "basketball"
  | "handball"
  | "rugby"
  | "baseball"
  | "hockey";

export default function MatchResults() {
  const [activeTab, setActiveTab] = useState<TSportsTab>("football");
  const today = getDate("today");
  const endpoint = `tips/stats/${activeTab}/${today}`;

  const { data, isLoading } = useQuery({
    queryKey: ["results", activeTab],
    queryFn: async () => HTTPRequest.Get(endpoint),
  });

  const results: MatchResults[] = data?.data?.response;

  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
    "all"
  );
  const [searchValue, setSearchValue] = useState<string>("");
  const filterByCountry = (country?: string) =>
    country?.toLowerCase() === selectedCountry?.toLowerCase();

  const filteredResults = results?.filter((result) => {
    const country = result.league.country
      ? result.league.country
      : result?.country?.name;
    const filter = selectedCountry === "all" ? true : filterByCountry(country);

    return filter;
  });

  const searchedResults = filteredResults?.filter((result) => {
    const isMatch =
      result.league.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      result.teams.home.name
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      result.teams.away.name
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      result?.country?.name
        ?.toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      result?.league?.country
        ?.toLowerCase()
        .includes(searchValue.toLowerCase());
    return isMatch;
  });

  return (
    <>
      <Sportstabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <SearchMatches
        noOfMatches={results?.length}
        setSearchValue={setSearchValue}
      />

      <div className="px-4 lg:px-20 md:px-10 mt-20 relative lg:mt-10 flex flex-col lg:flex-row gap-8 items-start dark:text-white">
        <Filter
          results={results}
          isLoading={isLoading}
          setSelectedCountry={setSelectedCountry}
        />
        <Results isLoading={isLoading} results={searchedResults} />
      </div>
    </>
  );
}
