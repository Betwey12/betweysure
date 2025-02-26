import { Metadata } from "next";

import SignUpForm from "@/components/auth/sign-up-form";
import SlideBenefits from "@/components/auth/slide-benefits";
import { useTranslations } from "next-intl";
import { register } from "@/constants";

export const metadata: Metadata = {
  title: register.title,
  description: register.description,
};

export default function RegisterPage() {
  const t = useTranslations("AUTH");

  return (
    <div className="relative flex min-h-screen h-max">
      <div className="bg-white text-blue-two w-full lg:w-[50%] flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 py-20 lg:py-32 dark:bg-blue-two dark:text-white">
        <div className="flex flex-col border border-gray-two items-start w-full bg-white px-4 lg:px-10 py-8 lg:py-12 rounded-lg shadow-md dark:bg-blue-one dark:border-0">
          <h1 className="text-3xl text-left lg:text-4xl">
            {t("CREATE_AN_ACCOUNT")} <br />
            {t("GAIN_ACCESS")}
          </h1>
          <p className="mt-2 text-xs font-medium">{t("SIGNUP_TITLE")}</p>

          <SignUpForm />
        </div>
        <p className="absolute text-xs bottom-4 left-4">{t("COPYRIGHT")}</p>
      </div>
      <div className="signup_bg w-[50%] lg:block relative hidden">
        <div className="flex flex-col items-center justify-center w-full h-full py-10 bg-black/60">
          <h3 className="text-3xl text-white">{t("WHAT_YOU_GET")}</h3>
          <div className="w-[300px] bg-white h-[1px] mt-4" />
          <SlideBenefits />
        </div>
      </div>
    </div>
  );
}
