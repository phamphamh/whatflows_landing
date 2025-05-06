import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "yearly">("monthly");

  // Base prices (monthly)
  const basePrices = {
    grow: 59,
    advanced: 119
  };

  // Function to calculate price with discount for yearly billing
  const calculatePrice = (basePrice: number | string): { display: string; savings?: number } => {
    // Handle special cases (Free, Custom)
    if (basePrice === "Free") return { display: "Free" };
    if (basePrice === "Custom") return { display: "Custom" };

    // If it's a number, apply the calculations
    if (typeof basePrice === 'number') {
      if (billingCycle === "monthly") {
        return { display: `${basePrice}€` };
      } else {
        // For yearly: apply 20% discount (monthly price)
        const discountedMonthly = Math.round(basePrice * 0.8);
        const yearlySavings = (basePrice - discountedMonthly) * 12;
        return { display: `${discountedMonthly}€`, savings: yearlySavings };
      }
    }

    return { display: String(basePrice) };
  };

  const pricingPlans = [
    {
      title: "Launch",
      description: "Launch your business with the foundational tools crafted for your early growth.",
      price: calculatePrice("Free"),
      features: [
        "Including 10 Tickets",
        "One Connected Store (Shopify)",
        "IA advanced",
        "Access to Gmail, TikTok, and Instagram",
        "Standard Customer Support"
      ],
      ctaText: "Sign up",
      ctaLink: "https://tally.so/r/3jg85Q"
    },
    {
      title: "Grow",
      description: "Accelerate your expansion with advanced features that drive business growth.",
      price: calculatePrice(basePrices.grow),
      features: [
        "Including 100 Tickets",
        "One Connected Store (Shopify)",
        "IA advanced",
        "Access to Gmail, TikTok, and Instagram",
        "Priority Support"
      ],
      ctaText: "Get started",
      ctaLink: "https://tally.so/r/3jg85Q"
    },
    {
      title: "Advanced",
      description: "Maximize your market impact with a complete suite of exclusive, enterprise-level features.",
      price: calculatePrice(basePrices.advanced),
      features: [
        "Including 250 Tickets",
        "One Connected Store (Shopify)",
        "IA advanced",
        "Access to Gmail, TikTok, and Instagram",
        "Priority Support"
      ],
      ctaText: "Get started",
      ctaLink: "https://tally.so/r/3jg85Q"
    },
    {
      title: "Plus",
      description: "This plan adapts to your business needs to be as suitable as possible.",
      price: calculatePrice("Custom"),
      features: [
        "More than 250 Tickets",
        "One Connected Store (Shopify)",
        "IA advanced",
        "Access to Gmail, TikTok, and Instagram",
        "Priority Support"
      ],
      ctaText: "Contact our team",
      ctaLink: "mailto:hello@whatflows.io"
    }
  ];

  return (
    <section className="px-5 py-0 mt-12">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-emerald-500 max-sm:text-3xl">
          Select Your Plan
        </h2>
        <p className="mt-2.5 text-base font-medium text-black max-sm:text-sm">
          Flexible plans that scale with your ecommerce.
        </p>

        <div className="flex justify-center mt-5">
          <div className="inline-flex items-center rounded-full bg-gray-100 p-1 shadow-md">
            <button
              className={cn(
                "px-5 py-2.5 text-sm rounded-full transition-all duration-200",
                billingCycle === "monthly" ? "bg-black text-white" : "text-gray-700"
              )}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={cn(
                "px-5 py-2.5 text-sm rounded-full transition-all duration-200",
                billingCycle === "yearly" ? "bg-black text-white" : "text-gray-700"
              )}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly -20% off
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 px-2">
        {pricingPlans.map((plan) => (
          <Card key={plan.title} className="rounded-3xl border border-gray-200">
            <div className="p-6 flex flex-col h-full">
              <div>
                <h3 className="text-2xl font-semibold text-black">{plan.title}</h3>
                <p className="text-sm mt-1 text-gray-600 h-16">
                  {plan.description}
                </p>
                <div className="mt-4 h-16 flex flex-col justify-center">
                  <div className="text-3xl font-semibold">
                    {plan.price.display}
                    <span className="text-gray-600 text-sm ml-1">
                      {billingCycle === "monthly" ? "/month" : "/month"}
                    </span>
                  </div>
                  {billingCycle === "yearly" && plan.price.savings && (
                    <div className="text-sm text-emerald-600 font-medium mt-1">
                      You save {plan.price.savings}€ per year
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-5 space-y-3 flex-grow">
                <p className="font-medium text-sm">What's included:</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <Check className="mr-2 h-4 w-4 text-black shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className="w-full mt-6 bg-black text-white hover:bg-black/80 rounded-xl py-6"
                onClick={() => window.location.href = plan.ctaLink}
              >
                {plan.ctaText}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
