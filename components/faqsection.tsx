import React from "react";
import minus from "../public/assets/minus.png";
import plus from "../public/assets/plus.png";

const FAQ = ({ faq, index, toggleFAQ }: any) => {
  return (
    <div>
      <div
        className=" inline-flex"
        onClick={() => toggleFAQ(index)}
        key={index}
      >
        <div className="self-start min-w-fit cursor-pointer h-4 md:h-5">
          {faq.open ? (
            <img
              className="mr-6 flex self-center w-4 md:w-5 md:mr-10 mt-3.5"
              src={minus.src}
              alt=""
            />
          ) : (
            <img
              className="mr-6 self-center w-4 md:w-5 md:mr-10 mt-1"
              src={plus.src}
              alt=""
            />
          )}
        </div>
        <div className="self-center">
          <p className="text-lg md:text-2xl text-[#333D47] md:leading-[30px] font-medium">
            {faq.question}
          </p>
          {faq.open ? (
            <p className="text-base md:text-xl md:leading-[30px] text-[#61616B] mt-2 md:mt-6">
              {faq.answer}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <hr className="my-6 md:my-[34px] " />
    </div>
  );
};

export default FAQ;
