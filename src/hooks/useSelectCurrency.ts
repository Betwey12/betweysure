import { Country } from "country-state-city";
import { paymentSupportedCountries } from "../assets/data/data";
import { useState } from "react";

type TSelectCurrency = {
  defaultCurrency: string;
};

export default function useSelectCurrency({
  defaultCurrency,
}: TSelectCurrency) {
  const availableCountries = Country.getAllCountries().filter(
    (country) =>
      paymentSupportedCountries.includes(country.currency) &&
      !(country.currency === "USD" && country.isoCode !== "US")
  );
  const supportedCountries = availableCountries.map(
    (country) => `${country.flag} ${country.name} ${country.currency}`
  );

  const defaultCountry =
    supportedCountries.find((country) => country.includes(defaultCurrency)) ??
    supportedCountries[2];
  const [selectedCurrency, setSelectedCurrency] =
    useState<string>(defaultCountry);
  const currency = availableCountries.find((country) =>
    country.name.includes(selectedCurrency.split(" ")[1])
  )?.currency;

  return {
    selectedCurrency,
    setSelectedCurrency,
    currency,
    supportedCountries,
  };
}
