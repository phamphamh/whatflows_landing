
import * as React from "react";
import Landing from "./Landing";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

function LandingPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="flex flex-col w-full">
        <main className="mx-auto my-0 w-full max-w-screen-xl max-md:max-w-[991px] max-sm:max-w-screen-sm">
          <Landing />
          <section id="features" className="px-5 py-12 scroll-mt-16">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-semibold text-center mb-4 max-sm:text-3xl">
                <span className="text-emerald-500">Save few hours/week</span> with Whatflows
              </h2>
              <p className="text-base font-medium text-center text-zinc-700 max-w-2xl mx-auto max-sm:text-sm">
                Drastically reduce time spent managing customer emails and focus on
                scaling your e-commerce business.
              </p>
            </div>

            <FeatureSection
              title="Smarter Replies with Store Setup"
              description="Before launching, fill in your store details—like delivery times, return policy links, and carrier names. This info powers the AI to craft ultra-relevant, brand-aligned replies instantly."
              benefits={[
                "Fine-tune AI responses to match your store's exact policies",
                "Avoid generic answers with contextual precision",
                "Deliver answers that sound like your own support team"
              ]}
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5105ffc1393e2591ec02e95ef3452044968e9c95?placeholderIfAbsent=true"
              imagePosition="right"
            />

            <FeatureSection
              title="Automate to 80% of Customer Tickets"
              description="Save time with AI that handles most support tickets. It detects each message's intent and context, then replies with personalized answers using Gmail and Shopify data."
              benefits={[
                "Automatically detects each email's topic and context",
                "Generates coherent, personalized responses",
                "Integrates with Shopify and Gmail for smooth order and return handling"
              ]}
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7ed277b9f6def1a3eed1ce212f33b35962fa8ecf?placeholderIfAbsent=true"
              imagePosition="left"
            />

            <FeatureSection
              title="Multicanal Customer Support"
              description="Whatflows automatically centralizes customer support by analyzing, classifying, and instantly responding to messages from Gmail, Instagram, Facebook, TikTok, and more."
              benefits={[
                "Consolidate all conversations in one tool",
                "Maintain a consistent service quality across every channel",
                "Stay responsive wherever your customers are"
              ]}
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0ef653e2ff905a3065156782dc286dcf2a714c7c?placeholderIfAbsent=true"
              imagePosition="right"
            />
          </section>

          <div id="pricing" className="scroll-mt-16 mt-8">
            <PricingSection />
          </div>
          <div id="contact" className="scroll-mt-16">
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
