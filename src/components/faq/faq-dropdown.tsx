"use client";
import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface FAQDropdownProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}
export default function FAQDropdown({ faqs }: FAQDropdownProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
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
  );
}
