import CompleteProfileForm from "@/components/auth/complete-profile-form";
import { PhoneIcon } from "@/components/icons";
import { useTranslations } from "next-intl";

export default function CompleteProfile() {
  const t = useTranslations("AUTH");
  return (
    <div className="min-h-screen bg-white/50 text-blue-two w-full flex items-center justify-center px-4 md:px-10 lg:px-20 py-20 lg:py-32 dark:bg-blue-two dark:text-white">
      <div className="flex flex-col max-w-xl border border-gray-two items-center justify-center w-full gap-2 bg-white px-4 lg:px-10 py-8 lg:py-12 rounded-lg shadow-md dark:border-0 dark:bg-blue-one">
        <PhoneIcon className="text-6xl" />
        <h1 className="text-2xl lg:text-3xl">{t("WELCOME")}</h1>
        <p className="text-center">{t("COMPLETE_PROFILE_DESCRIPTION")}</p>
        <CompleteProfileForm />
      </div>
    </div>
  );
}
