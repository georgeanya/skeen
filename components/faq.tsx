import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { useState } from "react";
import FAQ from "./faqsection";

const SustainButton = styled(Button)({
  background: "#3E7EEE !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 30px",
  },
});

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Who is Skeen for?",
      answer:
        "Skeen is a teledermatology service for people with skin issues or want to improve or support their health and prefer to do so from the comfort of their homes.",
      open: true,
    },
    {
      question: "How does Skeen work?",
      answer:
        "First, book a consultation and with one of our doctors. The doctor will review your information and recommend a personalised treatment. Skeen will ship your treatment in discreet packaging if prescribed.",
      open: false,
    },
    {
      question: "How much does it cost to consult a doctor on Skeen?",
      answer: "It cost 5,000 naira to consult a doctor on Skeen",
      open: false,
    },
    {
      question: "Are your dermatology providers licensed?",
      answer:
        "Our dermatology providers are experts licensed to practice in Nigeria",
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
    <div className="px-5 md:px-32 md:pt-28 pt-20 md:pb-36 pb-24">
      <p className=" text-3xl md:text-start md:text-4xl md:max-w-xl font-bold text-[#3E7EEE] mb-14 pr-8">
        Frequently asked questions
      </p>
      <div className="max-w-3xl">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
        {/* <hr className="my-6 md:my-8 mb-6 md:mb-12 " /> */}
      </div>
    </div>
  );
};

export default Faq;
