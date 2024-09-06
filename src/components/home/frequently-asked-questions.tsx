"use client";
import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function FrequentlyAskedQuestions() {
  const t = useTranslations("FREQ_ASKED_QUESTIONS");
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="px-4 md:px-10 xl:px-20 my-10 lg:my-20 dark:text-white">
      <h1 className="lg:text-2xl text-xl">{t("FREQ_ASKED_QUESTIONS")}</h1>

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

const faqs = [
  {
    question: "What is the best way to get started?",
    answer:
      "The best way to get started is to sign up for a free account. This will give you access to all of our free tips and help you decide if our product is right for you.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, including Visa, Mastercard, and Verve. We accept payment through paystack and flutterwave.",
  },
  {
    question: "Do you offer any discounts?",
    answer: "Contact us to find out if you qualify for any discounts.",
  },
  {
    question: "What if I have more questions?",
    answer:
      "If you have more questions, you can contact us by email or phone. We're here to help!",
  },
];
