import UkFlag from "../../assets/icons/Flag_of_the_United_Kingdom.png";
import flagOfFrance from "../../assets/icons/flag_of_france.png";
import flagOfPortugal from "../../assets/icons/flag_of_portugal.png";
import flagOfArabic from "../../assets/icons/arabic-language-flag.png";
import { useRef, useState, useTransition } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "../../lib/utils";
import Image, { StaticImageData } from "next/image";
import { useLocale } from "next-intl";
import { Button } from "./button";
import { setUserLocale } from "@/services/locale";
import { Locale } from "@/i18n/config";

export default function SelectLanguage() {
  const locale = useLocale();

  const ref = useRef(null);
  const languages: {
    code: TLanguage;
    label: string;
    flag: StaticImageData;
  }[] = [
    { code: "en", label: "ENG", flag: UkFlag },
    { code: "fr", label: "FRA", flag: flagOfFrance },
    { code: "ar", label: "ARA", flag: flagOfArabic },
    { code: "pt", label: "PRT", flag: flagOfPortugal },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === locale) ?? languages[0];
  const [isPending, startTransition] = useTransition();
  const [dropDown, setDropDown] = useState(false);
  useOnClickOutside(ref, () => setDropDown(false));

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
    setDropDown(false);
  }

  return (
    <div className="relative min-w-[130px]" ref={ref}>
      <Button
        className={cn(
          "px-0 border justify-around bg-transparent hover:bg-cyan/20 border-cyan text-base dark:border-white w-full"
        )}
        onClick={() => setDropDown((prev) => !prev)}
      >
        <Image
          width={20}
          height={20}
          src={currentLanguage.flag}
          alt={`${currentLanguage.label}-flag`}
          className="w-5 h-5 rounded-full"
        />
        <span>{currentLanguage.label}</span>
        <FaCaretDown />
      </Button>
      {dropDown && (
        <div className="absolute flex flex-col bg-white w-full border border-gray-two shadow rounded-lg top-[calc(100%+8px)] z-50 text-blue-three">
          {languages.map((language) => (
            <Button
              key={language.code}
              className="text-sm gap-4 justify-start disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => onChange(language.code)}
              disabled={locale === language.code}
            >
              <Image
                width={20}
                height={20}
                src={language.flag}
                alt={language.label}
                className="w-5 h-5 rounded-full"
              />
              <span>{language.label}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
