import React from "react";
import hero from "../public/assets/hero.png";
import { useState, useCallback, useEffect } from "react";

const Section3 = () => {
  return (
    <div className="px-5 lg:px-32 pb-[90px] md:pb-[162px] grid md:grid-cols-2 pt-20 md:pt-[120px] grid-cols-1 md:grid-rows-1 md:gap-[85px] gap-4 bg-[#F5F5F5]">
      <div className=" pb-9 md:pb-0 ">
        <p className="  text-[32px] leading-[40px] md:text-start md:text-5xl font-bold text-[#3E7EEE]  md:leading-[60px]">
          We are making skincare affordable, accessible, and convenient, the way
          it should be
        </p>
      </div>
      <div className="  text-[#333D47]">
        <div className="flex justify-between items-center">
          <p className="text-[16px] leading-[22px] md:text-[22px] md:leading-8">
            Your skin is unique so you need personalized skincare. We take the
            guessing and skin experiments away
          </p>
        </div>
        <hr className="my-6 md:my-6 text-[#C0C9D8]" />
        <div className="flex justify-between items-center">
          <p className="text-[16px] leading-[22px] md:text-[22px] md:leading-8">
            Access clinically proven treatments, supported by science and
            prescribed by our experienced dermatology providers
          </p>
        </div>
        <hr className="my-6 md:my-6 text-[#C0C9D8]" />
        <div className="flex justify-between items-center">
          <p className="text-[16px] leading-[22px] md:text-[22px] md:leading-8">
            Your treatment comes to you. Skip the trip to your doctor&apos;s office
            and the line at your local pharmacy. Access treatment online at your
            convenience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
