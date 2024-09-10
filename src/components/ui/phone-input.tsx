import React from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { cn } from "../../lib/utils";
import { Country } from "country-state-city";
import { SelectItem, SelectGroup } from "./select";
import RadixSelect from "./radix-select";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  phoneCodeClassName?: string;
  register: UseFormRegister<any>;
  name: string;
  phonecodeName: string;
  setValue: UseFormSetValue<any>;
}

const PhoneInput = ({
  className,
  register,
  phonecodeName,
  phoneCodeClassName,
  name,
  setValue,
  ...props
}: IInputProps) => {
  const countryNamesAndFlags = Country.getAllCountries().map((country) => {
    const phonecode = country.phonecode.includes("and")
      ? country.phonecode.split("and")[0]
      : country.phonecode;

    const code = (phonecode.includes("+") ? phonecode : `+${phonecode}`).trim();

    return {
      name: country.name,
      flag: country.flag,
      code,
    };
  });

  const nigeriaCode = countryNamesAndFlags.find(
    (country) => country.name.toLowerCase() === "nigeria"
  )?.code;

  function handleSelectCode(country: string) {
    const code = country.split("-")[1];

    setValue(phonecodeName, code);
  }

  const codeList = countryNamesAndFlags.map((country, i) => (
    <SelectItem
      className={"hover:bg-cyan/10 w-full cursor-pointer px-2 py-2 min-w-fit"}
      value={`${country.name.toLowerCase()}-${country.code}`}
      key={`${country.code}${i}`}
    >
      <span className="flex gap-2 items-center flex-row-reverse">
        <span className="flex items-center gap-2">
          <span>{country.name}</span>
          <span className={""}>({country.code})</span>
        </span>
        <span>{country.flag}</span>
      </span>
    </SelectItem>
  ));

  return (
    <div className="flex relative w-full items-stretch">
      <RadixSelect
        placeholder={nigeriaCode}
        handleValueChange={handleSelectCode}
        selectItems={<SelectGroup>{codeList}</SelectGroup>}
        className={cn(
          "px-1 bg-white h-auto border cursor-pointer text-center max-w-[60px] py-3 rounded-[4px_0_0_4px] focus:outline-none text-gray-neutral",
          phoneCodeClassName
        )}
      />
      <input
        id={name}
        {...(register && {
          ...register(name),
        })}
        className={cn(
          "px-4  w-full py-3 rounded-[0_4px_4px_0] focus:outline-none text-gray-neutral border",

          className
        )}
        {...props}
      />
    </div>
  );
};

export default PhoneInput;
