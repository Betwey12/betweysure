"use client";
import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function FrequentlyAskedQuestions() {
  const { openIndex, setOpenIndex, t, faqs } = useFrequentlyAskedQuestions();

  return (
    <div className="px-4 md:px-10 xl:px-20 my-10 lg:my-20 dark:text-white">
      <h1 className="lg:text-2xl text-xl font-semibold">
        {t("FREQ_ASKED_QUESTIONS")}
      </h1>

      <div className="flex flex-col gap-4 mt-10">
        {faqs.map((faq, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div
              className="flex items-center justify-between border border-gray-two shadow-lg px-4 rounded lg:px-8 py-3 cursor-pointer dark:bg-blue-one dark:border-0"
              onClick={() => setOpenIndex(index)}
              role="button"
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              {openIndex !== index ? <FaCaretDown /> : <FaCaretUp />}
            </div>
            {openIndex === index && (
              <div className="p-4 lg:p-6 rounded shadow">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function useFrequentlyAskedQuestions() {
  const t = useTranslations("FREQ_ASKED_QUESTIONS");
  const [openIndex, setOpenIndex] = useState(0);

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
  ];

  return {
    openIndex,
    setOpenIndex,
    t,
    faqs,
  };
}
