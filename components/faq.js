import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="lg:pb-10 border-b-2 border-gray-700 flex items-center justify-start w-full px-4 py-4 text-lg text-left text-gray-800 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-900 dark:text-gray-200 font-['inter'] font-bold lg:text-[24px]">
                    <span className="">{item.question}</span>
                    {/* <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    /> */}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300 font-['inter'] lg:text-[20px]">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Innovation Consulting",
    answer: "Make your digital transformation journey super simple, safe, and aligned with your specific business needs. We're good at strategy planning for both enterprises and SMBs, IT audit, business process analysis, and more.",
  },
  {
    question: "Digital Transformation",
    answer: "Yes, this you can.",
  },
  {
    question: "Software Engineering",
    answer:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    question: "Big Data & Analytics",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
  {
    question: "Artificial Intelligence",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },

  {
    question: "Extended Reality",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },

];
