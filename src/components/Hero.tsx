import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center px-4">
      <h1 className="mt-28 text-5xl font-semibold text-center text-black max-md:mt-10 max-md:max-w-full max-md:text-3xl max-sm:text-2xl">
        Automate 80% of Your Customer Support with AI
      </h1>
      <p className="mt-3.5 font-medium text-center text-zinc-700 w-full max-w-[614px] max-md:max-w-full max-sm:text-sm">
        Revamp your ecommerce support. Automate up to 90% of your customer
        service — saving time, reducing costs, and boosting satisfaction.
      </p>
      <div className="flex flex-row gap-3 mt-6 w-full max-w-md justify-center items-center font-semibold">
        <div className="flex-grow sm:flex-grow-0 text-white">
          <a href="https://tally.so/r/3jg85Q" aria-label="Get started with Whatflows">
            <button className="px-3 py-2 sm:px-3.5 sm:py-2.5 bg-black rounded-xl w-full text-sm sm:text-base">
              Get started
            </button>
          </a>
        </div>
        <div className="flex-grow sm:flex-grow-0 flex items-center justify-center text-black">
          <a href="#contact" aria-label="Book a demonstration of Whatflows">
            <button className="flex items-center px-3 py-2 sm:px-3.5 sm:py-2.5 text-sm sm:text-base">
              <span className="z-10 mr-1">
                Book a demo
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4d8d4de7786c4aa6ae8bc9154d63ed56/85541c5df4f95fcad3aa7df56084582535e86d64?placeholderIfAbsent=true"
                alt=""
                className="object-contain shrink-0 aspect-square w-[26px]"
                aria-hidden="true"
              />
            </button>
          </a>
        </div>
      </div>
      {/* The dashboard image has been moved to Landing.tsx */}
    </section>
  );
};

export default Hero;
