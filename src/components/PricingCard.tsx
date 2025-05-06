
import * as React from "react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  ctaText
}) => {
  return (
    <article className="p-5 text-center bg-white rounded-3xl border border-black border-solid shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[266px] max-md:w-[90%] max-sm:w-full">
      <h3 className="text-2xl font-semibold text-black">{title}</h3>
      <p className="mt-2.5 text-3xl font-semibold text-black">
        {price} /month
      </p>
      <p className="mt-2.5 text-xs text-stone-500">
        {description}
      </p>
      <div className="mt-2.5 text-xs font-medium text-left text-black">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <span>✔️ {feature}</span>
            {index < features.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
      <button className="px-5 py-2.5 mt-5 text-sm font-semibold text-white bg-black rounded-xl cursor-pointer w-full">
        {ctaText}
      </button>
    </article>
  );
};

export default PricingCard;
