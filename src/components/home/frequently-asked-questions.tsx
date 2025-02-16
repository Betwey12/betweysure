import { useTranslations } from "next-intl";
import FAQDropdown from "../faq/faq-dropdown";

export default function FrequentlyAskedQuestions() {
  const { t, faqs } = useFrequentlyAskedQuestions();

  return (
    <div className="px-4 md:px-10 xl:px-20 my-10 lg:mb-20 dark:text-white">
      <h3 className="lg:text-2xl text-xl font-semibold">
        {t("FREQ_ASKED_QUESTIONS")}
      </h3>
      <FAQDropdown faqs={faqs} />
    </div>
  );
}

function useFrequentlyAskedQuestions() {
  const t = useTranslations("FREQ_ASKED_QUESTIONS");
  const questions = t("QUESTIONS_LIST")?.split("\n");
  const answers = t("ANSWERS_LIST")?.split("\n");

  const faqs = questions.map((question, index) => ({
    question,
    answer: answers[index],
  }));

  return {
    t,
    faqs,
  };
}
