import { useTranslations } from "next-intl";
import KeywordListItem from "../ui/keyword-list-item";
import AuthedLink from "../ui/authed-link";

export default function CallToAction() {
  const { t, tips } = useCallToAction();
  return (
    <div className="px-4 md:px-10 xl:px-20 lg:mb-20 dark:text-white">
      <div className="flex flex-col lg:items-center justify-between w-full gap-8 px-4 py-20 text-white call_to_action_bg lg:flex-row md:px-10 lg:px-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-bold">{t("TITLE")}</h3>
            <p>{t("DESCRIPTION")}</p>
          </div>
          <ul className="flex flex-col gap-2">
            {tips.map((tip, index) => (
              <KeywordListItem
                key={index}
                keyword={tip.title}
                value={tip.description}
              />
            ))}
          </ul>
          <p>{t("CTA")}</p>
        </div>
        <AuthedLink
          href="/dashboard"
          className="bg-cyan px-4 py-3 text-center font-medium rounded"
          name={t("CTA_TITLE")}
        />
      </div>
    </div>
  );
}

function useCallToAction() {
  const t = useTranslations("CALL_TO_ACTION");
  const tips = [
    {
      title: t("TIP_ONE"),
      description: t("TIP_ONE_DESC"),
    },
    {
      title: t("TIP_TWO"),
      description: t("TIP_TWO_DESC"),
    },
    {
      title: t("TIP_THREE"),
      description: t("TIP_THREE_DESC"),
    },
  ];
  return {
    t,
    tips,
  };
}
