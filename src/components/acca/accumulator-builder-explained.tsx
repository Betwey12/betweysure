import { useTranslations } from "next-intl";

export default function AccumulatorBuilderExplained() {
  const t = useTranslations("ACCA_BUILDER_EXPLAINED");
  return (
    <div className="mt-10 dark:bg-blue-one rounded p-4 dark:text-white">
      <h2 className="text-xl font-bold">{t("WHAT_IS_ACCA_BUILDER")}</h2>
      <p className="mt-4">{t("WHAT_IS_ACCA_BUILDER_DESC")}</p>

      <h2 className="text-xl font-bold mt-4">{t("HOW_IT_WORKS")}</h2>

      <p className="mt-4">{t("HOW_IT_WORKS_DESC")}</p>
      <ul className="mt-4 list-disc pl-5 flex flex-col gap-2">
        <li>
          <strong>{t("HOW_IT_WORKS_STEP_ONE")}</strong>{" "}
          {t("HOW_IT_WORKS_STEP_ONE_DESC")}
        </li>
        <li>
          <strong>{t("HOW_IT_WORKS_STEP_TWO")}</strong>{" "}
          {t("HOW_IT_WORKS_STEP_TWO_DESC")}
        </li>
        <li>
          <strong>{t("HOW_IT_WORKS_STEP_THREE")}</strong>{" "}
          {t("HOW_IT_WORKS_STEP_THREE_DESC")}
        </li>
        <li>
          <strong>{t("HOW_IT_WORKS_STEP_FOUR")}</strong>{" "}
          {t("HOW_IT_WORKS_STEP_FOUR_DESC")}
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-4">{t("WHY_ACCA_BUILDER")}</h2>
      <ul className="list-disc pl-5 mt-4 flex flex-col gap-2">
        <li>
          <strong>{t("WHY_ACCA_BUILDER_ONE")}</strong>{" "}
          {t("WHY_ACCA_BUILDER_ONE_DESC")}
        </li>
        <li>
          <strong>{t("WHY_ACCA_BUILDER_TWO")}</strong>{" "}
          {t("WHY_ACCA_BUILDER_TWO_DESC")}
        </li>
        <li>
          <strong>{t("WHY_ACCA_BUILDER_THREE")}</strong>{" "}
          {t("WHY_ACCA_BUILDER_THREE_DESC")}
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-4">{t("HOW_TO_USE_ACCA_BUILDER")}</h2>
      <p className="mt-4">{t("HOW_TO_USE_ACCA_BUILDER_DESC")}</p>

      <ol className="mt-4 list-decimal pl-5 flex flex-col gap-4">
        <li>
          <strong>{t("HOW_TO_USE_ACCA_BUILDER_STEP_ONE")}</strong>

          <ul className="mt-4">
            <li>{t("HOW_TO_USE_ACCA_BUILDER_STEP_ONE_DESC")}</li>
          </ul>
        </li>

        <li>
          <strong>{t("HOW_TO_USE_ACCA_BUILDER_STEP_TWO")}</strong>
          <ul className="mt-4">
            <li>
              {t("HOW_TO_USE_ACCA_BUILDER_STEP_TWO_DESC")}

              <ul className="list-disc pl-5 flex flex-col gap-2 mt-4">
                <li>{t("POPULAR_MARKET_ONE")}</li>
                <li>{t("POPULAR_MARKET_TWO")}</li>
                <li>{t("POPULAR_MARKET_THREE")}</li>
                <li>{t("POPULAR_MARKET_FOUR")}</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>{t("HOW_TO_USE_ACCA_BUILDER_STEP_THREE")}</strong>
          <ul className="mt-2">
            <li>
              {t("HOW_TO_USE_ACCA_BUILDER_STEP_THREE_DESC")}
              <ul className="list-disc pl-5 flex flex-col gap-2 mt-4">
                <li>{t("TIME_FRAME_ONE")}</li>
                <li>{t("TIME_FRAME_TWO")}</li>
                <li>{t("TIME_FRAME_THREE")}</li>
                <li>{t("TIME_FRAME_THREE")}</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>{t("HOW_TO_USE_ACCA_BUILDER_STEP_FOUR")}</strong>
          <ul className="mt-2">
            <li>{t("HOW_TO_USE_ACCA_BUILDER_STEP_FOUR_DESC")}</li>
          </ul>
        </li>

        <li>
          <strong>{t("HOW_TO_USE_ACCA_BUILDER_STEP_FIVE")}</strong>
          <ul className="mt-2">
            <li>{t("HOW_TO_USE_ACCA_BUILDER_STEP_FIVE_DESC")}</li>
          </ul>
        </li>
      </ol>

      <h2 className="text-xl font-bold mt-4">
        {t("BENEFITS_OF_ACCA_BUILDER")}
      </h2>
      <p className="mt-4">{t("BENEFITS_OF_ACCA_BUILDER_DESC")}</p>

      <ul className="mt-4 list-disc pl-5 flex flex-col gap-2">
        <li>
          <strong>{t("BENEFITS_ONE")}</strong> {t("BENEFITS_ONE_DESC")}
        </li>
        <li>
          <strong>{t("BENEFITS_TWO")}</strong> {t("BENEFITS_TWO_DESC")}
        </li>
        <li>
          <strong>{t("BENEFITS_THREE")}</strong> {t("BENEFITS_THREE_DESC")}
        </li>
        <li>
          <strong>{t("BENEFITS_FOUR")}</strong> {t("BENEFITS_FOUR_DESC")}
        </li>
        <li>
          <strong>{t("BENEFITS_FIVE")}</strong> {t("BENEFITS_FIVE_DESC")}
        </li>
      </ul>
    </div>
  );
}
