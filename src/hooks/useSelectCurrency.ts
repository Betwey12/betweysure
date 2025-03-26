import { Country } from "country-state-city";
import { useState } from "react";
import { paymentSupportedCountryCodes } from "../assets/data/data";

export default function useSelectCurrency() {
  const countries = Country.getAllCountries();

  const supportedCountries = countries.filter((country) =>
    paymentSupportedCountryCodes.includes(country.isoCode),
  );
  const otherCountries = countries.filter(
    (country) => !paymentSupportedCountryCodes.includes(country.isoCode),
  );

  const allCountries = [...supportedCountries, ...otherCountries].map(
    (country) => ({
      flag: country.flag,
      name: country.name,
      currency: country.currency,
    }),
  );

  const [selectedCurrency, setSelectedCurrency] = useState<string>("");

  const currency = countries.find(
    (country) => country.name.toLowerCase() === selectedCurrency,
  )?.currency;

  return {
    selectedCurrency,
    setSelectedCurrency,
    currency,
    supportedCountries: allCountries,
  };
}
