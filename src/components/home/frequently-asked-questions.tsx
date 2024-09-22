import { useTranslations } from "next-intl";
import FAQDropdown from "../faq/faq-dropdown";

export default function FrequentlyAskedQuestions() {
  const { t, faqs } = useFrequentlyAskedQuestions();

  return (
    <div className="px-4 md:px-10 xl:px-20 my-10 lg:mb-20 dark:text-white">
      <h1 className="lg:text-2xl text-xl font-semibold">
        {t("FREQ_ASKED_QUESTIONS")}
      </h1>

      <FAQDropdown faqs={faqs} />
    </div>
  );
}

function useFrequentlyAskedQuestions() {
  const t = useTranslations("FREQ_ASKED_QUESTIONS");

  const faqs = [
    {
      question: t("QUESTION_ONE"),
      answer: t("ANSWER_ONE"),
    },
    {
      question: t("QUESTION_TWO"),
      answer: t("ANSWER_TWO"),
    },
    {
      question: t("QUESTION_THREE"),
      answer: t("ANSWER_THREE"),
    },
    {
      question: t("QUESTION_FOUR"),
      answer: t("ANSWER_FOUR"),
    },
    {
      question: t("QUESTION_FIVE"),
      answer: t("ANSWER_FIVE"),
    },
    {
      question: t("QUESTION_SIX"),
      answer: t("ANSWER_SIX"),
    },
  ];

  return {
    t,
    faqs,
  };
}
