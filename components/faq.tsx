import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { useState } from "react";
import FAQ from "./faqsection";
import Link from "next/link";

const SkeenButton = styled(Button)({
  background: "#3E7EEE !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 38px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
  },
});

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Who is Skeen for?",
      answer:
        "Skeen is a teledermatology service for people with skin issues or want to improve their skin and prefer to do so from the comfort of their homes",
      open: true,
    },
    {
      question: "How does Skeen work?",
      answer:
        "First, book a consultation and with one of our skin cosultants. The consultati will review your information and recommend a personalised treatment. Skeen will ship your treatment if prescribed.",
      open: false,
    },
    {
      question: "How much does it cost to consult on Skeen?",
      answer: "Right now, the cost of our initial consultation is NGN 10,000 — this is significantly less than what most dermatology practices charge for a consultation. You also get free follow up consultations.",
      open: false,
    },
    {
      question: "Are your skincare consultants licensed?",
      answer:
        "Yes! All Skeen consultants are skin experts and have gone through a thorough background check.",
      open: false,
    },
    {
      question: "Are my consultations private?",
      answer:
        "All consultations on Skeen are carried out in the strictest respect of medical secrecy.",
      open: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
    console.log("click " + index);
  };

  return (
    <div className="px-5 md:px-[125px] md:pt-[120px] pt-20 md:pb-36 pb-[90px]">
      <p className=" text-[28px] leading-[35px] md:text-start md:text-[38px] md:leading-[48px] md:max-w-xl font-bold text-[#3E7EEE]  mb-[60px] md:mb-[80px] pr-8">
        Frequently asked questions
      </p>
      <div className="">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
        {/* <hr className="h-[0.5px] border-t-[0.5px] my-6 md:my-8 mb-6 md:mb-12 " /> */}
      </div>
      <div className="mt-[40px] md:mt-[60px]">
        <Link href="/book-consultation">
          <SkeenButton className="text-sm leading-[17px] md:text-base md:leading-5 font-medium">
            See all FAQs
          </SkeenButton>
        </Link>
      </div>
    </div>
  );
};

export default Faq;
