import React from "react";
import Navbar from "./navbar1";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";
import Head from "next/head";

const SustainButton = styled(Button)({
  background: "#3E7EEE !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  width: "100%  ",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 30px",
  },
});

const StartSuccess = () => {
  return (
    <div>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `fbq('track', 'Lead');`,
          }}
        />
      </Head>
      <div className="max-w-m mx-5 sm:mx-auto mt-[25px]">
        <p className=" leading-tight md:pr-14 md:text-3xl text-1xl md:text-start font-bold text-[#3E7EEE] ">
          Payment link sent
        </p>
        <p className="mt-4 text-base md:text-lg font-normal md:pr-8 md:text-start text-[#111111] mb-7">
          A payment link has been sent to your phone number. Check your WhatsApp
          to complete your membership!
        </p>
        <Link href="https://t.me/+gtiqLBOz-WxiOTVk">
          <SustainButton
            className="self-center text-sm md:text-base font-medium"
            type="submit"
          >
            Join our Telegram community
          </SustainButton>
        </Link>
      </div>
    </div>
  );
};

export default StartSuccess;
