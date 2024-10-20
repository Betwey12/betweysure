import AccumulatorBuilderForm from "@/components/acca/acca-builder";
import AccumulatorBuilderExplained from "@/components/acca/accumulator-builder-explained";
import FAQDropdown from "@/components/faq/faq-dropdown";
import OtherPagesHero from "@/components/shared/other-pages-hero";
import { acca } from "@/constants";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: acca.title,
  description: acca.description,
  keywords: acca.keywords,
};

export default function OneXBet() {
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
    question: "What is an Accumulator Bet?",
    answer:
      "An accumulator bet, or acca, is a single bet that combines multiple selections into one. All selections must win for the bet to pay out, offering higher potential returns.",
  },
  {
    question: "How does the Betweysure Acca Builder work?",
    answer:
      "The Acca Builder allows you to select multiple games, customize your accumulator, and generate a bet with AI-driven tips. It’s designed to make the process faster and more efficient.",
  },
  {
    question: "What are AI-driven tips, and how do they help?",
    answer:
      "AI-driven tips are betting suggestions generated by our advanced algorithms. These tips analyze data, statistics, and trends to provide you with the best possible selections, increasing your chances of winning.",
  },
  {
    question: "Can I customize my accumulator?",
    answer:
      "Absolutely! You can choose the number of games, adjust the bet types, and even review AI-driven tips to create a personalized accumulator that suits your strategy.",
  },
  {
    question: "How are the odds calculated in an accumulator?",
    answer:
      "The odds in an accumulator are calculated by multiplying the odds of each selection. Since all selections must win, the combined odds can offer higher returns.",
  },
  {
    question: "What happens if one selection in my accumulator loses?",
    answer:
      "If one selection in your accumulator loses, the entire bet loses. This is why it’s important to use the Acca Builder and AI-driven tips to make informed selections.",
  },
  {
    question: "Is there a minimum or maximum number of selections I can make?",
    answer:
      "The Acca Builder typically allows a minimum of 2 selections and a maximum that varies depending on the sport and event. Check the tool for specific limits.",
  },
];