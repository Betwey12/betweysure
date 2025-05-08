import { useTranslations } from "next-intl";
import KeywordListItem from "../ui/keyword-list-item";

export default function AccumulatorBuilderExplained() {
  const { t, howItWorks, whyItWorks, howToUse, benefits } =
    useAccaBuilderExplained();
  return (
    <div className="mt-10 dark:bg-blue-one rounded p-4 dark:text-white">
      <h2 className="text-xl font-bold">{t("WHAT_IS_ACCA_BUILDER")}</h2>
      <p className="mt-4">{t("WHAT_IS_ACCA_BUILDER_DESC")}</p>

      <h2 className="text-xl font-bold mt-4">{t("HOW_IT_WORKS")}</h2>
      <p className="mt-4">{t("HOW_IT_WORKS_DESC")}</p>

      <ul className="mt-4 list-disc pl-5 flex flex-col gap-2">
        {howItWorks.map((step, index) => (
          <KeywordListItem
            key={index}
            keyword={step.title}
            value={step.description}
          />
        ))}
      </ul>

      <h2 className="text-xl font-bold mt-4">{t("WHY_ACCA_BUILDER")}</h2>
      <ul className="list-disc pl-5 mt-4 flex flex-col gap-2">
        {whyItWorks.map((step, index) => (
          <KeywordListItem
            key={index}
            keyword={step.title}
            value={step.description}
          />
        ))}
      </ul>

      <h2 className="text-xl font-bold mt-4">{t("HOW_TO_USE_ACCA_BUILDER")}</h2>
      <p className="mt-4">{t("HOW_TO_USE_ACCA_BUILDER_DESC")}</p>

      <ol className="mt-4 list-decimal pl-5 flex flex-col gap-4">
        {howToUse.map((step, index) => {
          const paragraphs = step.description.split("\t");
          const description = paragraphs[0];
          const list = paragraphs.slice(1);

          return (
            <li key={index}>
              <strong>{step.title}</strong>
              <p className="mt-2">{description}</p>
              {list.map((item, index) => {
                return (
                  <ul
                    className="list-disc pl-5 flex flex-col gap-2 mt-4"
                    key={index}
                  >
                    <li>{item}</li>
                  </ul>
                );
              })}
            </li>
          );
        })}
      </ol>

      <h2 className="text-xl font-bold mt-4">
        {t("BENEFITS_OF_ACCA_BUILDER")}
      </h2>
      <p className="mt-4">{t("BENEFITS_OF_ACCA_BUILDER_DESC")}</p>

      <ul className="mt-4 list-disc pl-5 flex flex-col gap-2">
        {benefits.map((benefit, index) => (
          <KeywordListItem
            key={index}
            keyword={benefit.title}
            value={benefit.description}
          />
        ))}
      </ul>
    </div>
  );
}

function useAccaBuilderExplained() {
  const t = useTranslations("ACCA_BUILDER_EXPLAINED");
  const howItWorksTitles = t("HOW_IT_WORKS_STEP_TITLE_LIST").split("\n");
  const howItWorksDesc = t("HOW_IT_WORKS_STEP_DESC_LIST").split("\n");

  const howItWorks = howItWorksTitles.map((title, index) => ({
    title,
    description: howItWorksDesc[index],
  }));

  const whyItWorksTitles = t("WHY_ACCA_BUILDER_TITLES").split("\n");
  const whyItWorksDesc = t("WHY_ACCA_BUILDER_DESCS").split("\n");

  const whyItWorks = whyItWorksTitles.map((title, index) => ({
    title,
    description: whyItWorksDesc[index],
  }));

  const howToUseTitles = t("HOW_TO_USE_ACCA_BUILDER_TITLES").split("\n");
  const howToUseDesc = t("HOW_TO_USE_ACCA_BUILDER_DESCS").split("\n");

  const howToUse = howToUseTitles.map((title, index) => ({
    title,
    description: howToUseDesc[index],
  }));

  const benefitsTitles = t("BENEFITS_OF_ACCA_BUILDER_TITLES").split("\n");
  const benefitsDesc = t("BENEFITS_OF_ACCA_BUILDER_DESCS").split("\n");

  const benefits = benefitsTitles.map((title, index) => ({
    title,
    description: benefitsDesc[index],
  }));

  return { t, howItWorks, whyItWorks, howToUse, benefits };
}
