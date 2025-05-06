import React from "react";
import { Button } from "./ui/button";
import Navbar from "./Navbar";

export function HeroSection() {
  return (
    <header className="relative w-full h-[774px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/69609eb6ee68fe213948949d3c57acb86cadee3d?placeholderIfAbsent=true"
        alt="Hero background"
        className="object-cover rounded-3xl size-full"
      />

      <div className="px-6 md:px-8">
        <Navbar />
      </div>

      <div className="absolute left-2/4 text-center -translate-x-2/4 top-[179px] w-[726px] max-md:w-[90%] max-sm:w-full">
        <h1 className="text-5xl font-semibold text-black max-sm:text-4xl">
          Automate 80% of Your Customer Support with AI
        </h1>
        <p className="mt-5 text-base font-medium text-zinc-700 max-sm:text-sm">
          Revamp your ecommerce support. Automate up to 90% of your customer
          service — saving time, reducing costs, and boosting satisfaction.
        </p>
        <div className="flex gap-5 justify-center mt-5 max-sm:flex-col">
          <a href="https://tally.so/r/3jg85Q">
            <Button variant="default" className="bg-black">Get started</Button>
          </a>
          <button className="flex gap-1.5 items-center text-base font-medium cursor-pointer">
            <span>Book a demo</span>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 8.66666L23.8333 13L19.5 17.3333"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.66669 13L23.8334 13"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Fallback image for dashboard UI. */}
      {/* <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90a9fefacd88094979e326a83a443de2cb839ee?placeholderIfAbsent=true"
        alt="Product screenshot"
        className="absolute left-2/4 -translate-x-2/4 h-[331px] rounded-[8px_8px_0_0] top-[462px] w-[1059px] max-md:w-[90%] max-sm:w-full"
      /> */}
    </header>
  );
}

export default HeroSection;
