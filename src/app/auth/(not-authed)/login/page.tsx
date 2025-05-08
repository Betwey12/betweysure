import orangeGuy from "@/assets/images/orange-guy.webp";
import Image from "next/image";
import LoginForm from "@/components/auth/login-form";
import { useTranslations } from "next-intl";

import { Metadata } from "next";
import { login } from "@/constants";

export const metadata: Metadata = {
  title: login.title,
  description: login.description,
};

export default function Login() {
  const t = useTranslations("AUTH");
  return (
    <>
      <div className="relative flex min-h-screen login_bg h-max">
        <div className="bg-white text-blue-two w-full lg:w-[50%] flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 py-20 lg:py-32 dark:bg-blue-two dark:text-white">
          <div className="flex flex-col border border-gray-two items-start w-full bg-white px-4 lg:px-10 py-8 lg:py-12 rounded-lg shadow-md dark:bg-blue-one dark:border-0">
            <h1 className="text-3xl text-left lg:text-4xl">
              {t("WELCOME_BACK")} <br /> {t("SURE_GUY")}
            </h1>
            <p className="mt-2 text-xs">{t("TITLE")}</p>
            <LoginForm />
          </div>
          <p className="absolute text-xs bottom-4 left-4">{t("COPYRIGHT")}</p>
        </div>
        <div className="w-[50%] lg:flex flex-col items-center relative hidden">
          <p className="text-3xl text-yellow-one max-w-[500px] mt-40">
            {t("INFO")}
          </p>
          <div className="w-[300px] bg-white h-[1px] mt-4" />
          <Image
            width={500}
            height={500}
            src={orangeGuy}
            alt="orange-guy"
            className="absolute bottom-0 w-[50%]"
          />
        </div>
      </div>
    </>
  );
}
