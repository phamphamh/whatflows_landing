import * as React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Partners from "./Partners";
import { Helmet } from "react-helmet-async";

function Landing() {
  return (
    <>
      <Helmet>
        <title>Whatflows - Automate 80% of Your Customer Support with AI</title>
        <meta name="description" content="Revamp your ecommerce support with Whatflows. Automate up to 90% of customer service — saving time, reducing costs, and boosting satisfaction." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Whatflows",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Automate 80% of Your Customer Support with AI"
            }
          `}
        </script>
      </Helmet>
      <main className="flex overflow-hidden flex-col items-center bg-white">
        <section className="flex relative flex-col items-center self-stretch mt-2 sm:mt-3 md:mt-5 lg:mt-8 pt-2.5 pb-0 text-base rounded-3xl min-h-[600px] sm:min-h-[650px] md:min-h-[790px] lg:min-h-[840px] w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4d8d4de7786c4aa6ae8bc9154d63ed56/c7baa79809529fb69264d7eb1738003abd54f0f6?placeholderIfAbsent=true"
            alt="Whatflows AI Customer Support Platform"
            className="object-cover absolute inset-0 size-full rounded-[10px]"
            style={{ maxWidth: '100%', height: '100%' }}
          />
          <div className="flex relative flex-col items-center mb-0 w-full max-w-[837px] max-md:mb-2.5 px-2.5 md:px-10 z-20">
            <Navbar />
            <Hero />
          </div>
          <img
            src="/dashboard_image.png"
            alt="Dashboard preview"
            className="absolute top-[380px] md:top-[470px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1059px] h-[220px] sm:h-[270px] md:h-[320px] lg:h-[370px] rounded-t-lg shadow-2xl z-10 object-cover object-top"
          />
        </section>
        <Partners />
      </main>
    </>
  );
}

export default Landing;
