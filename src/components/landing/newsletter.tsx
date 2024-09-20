"use client";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import usePopUp from "@/hooks/usePopUp";

export default function NewsLetter() {
  const t = useTranslations("NEWSLETTER");
  const { setPopUp } = usePopUp();

  return (
    <div className="mt-10 lg:mt-20 flex flex-col justify-between w-full gap-8 px-4 py-20 text-white newsletter_bg lg:flex-row md:px-10 lg:px-20">
      <div className="max-w-[400px]">
        <h3 className="text-3xl font-bold">
          {t("SUBSCRIBE_TO_OUR_NEWSLETTER")}
        </h3>
        <p className="mt-2 text-sm font-medium">
          {t("SUBSCRIBE_TO_OUR_NEWSLETTER_DESC")}
        </p>
      </div>
      <form className="lg:self-end">
        <fieldset className="flex">
          <input
            type="text"
            placeholder="Enter your email address"
            className="flex-1 bg-white px-4 rounded-[4px_0_0_4px] focus:outline-none text-gray-one md:max-w-[220px]"
          />
          <Button
            className="text-white bg-cyan py-3 font-semibold rounded-[0_4px_4px_0]"
            type="button"
            onClick={() => setPopUp("newsletter")}
          >
            {t("SUBMIT")}
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
