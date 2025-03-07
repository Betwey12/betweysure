import { useTranslations } from "next-intl";
import OtherPagesHero from "../shared/other-pages-hero";
import AccumulatorBuilderForm from "../acca/acca-builder";
import AccumulatorBuilderExplained from "../acca/accumulator-builder-explained";
import FAQDropdown from "../faq/faq-dropdown";

export default function BettingPage() {
  const t = useTranslations("ACCA_BUILDER");

  return (
    <>
      <OtherPagesHero />
      <div className="py-10 mt-8 mb-10 px-4 lg:px-20 md:px-10 flex flex-col items-center">
        <div className="flex flex-col gap-2 mb-10 max-w-3xl">
          <h1 className="text-2xl text-center">{t("TITLE")}</h1>
          <p className="text-center">{t("DESCRIPTION")}</p>
        </div>
        <AccumulatorBuilderForm bookie={"1xbet"} />
        <AccumulatorBuilderExplained />

        <div className="w-full my-10 lg:my-20 dark:text-white">
          <h1 className="lg:text-2xl text-xl font-semibold">
            Frequently Asked Questions
          </h1>
          <FAQDropdown faqs={faqs} />
        </div>
      </div>
    </>
  );
}

const faqs = [
  {
    question: "What is an  1xbet?",
    answer:
      "1xbet is a popular online betting platform known for its user-friendly interface and wide selection of sports events.",
  },
  {
    question: "How do i use 1xbet?",
    answer:
      "To use 1xbet, you need to create an account, deposit funds, and place your bets on the available sports events. You can also take advantage of the platform’s bonuses and promotions to maximize your winnings.",
  },
];
