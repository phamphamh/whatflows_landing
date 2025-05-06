
import * as React from "react";

interface FeatureSectionProps {
  title: string;
  description: string;
  benefits: string[];
  imageSrc: string;
  imagePosition: "left" | "right";
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  benefits,
  imageSrc,
  imagePosition
}) => {
  const ContentBlock = () => (
    <div className="flex flex-col justify-center w-5/12 px-4 max-md:w-full max-sm:w-full max-md:mt-6">
      <h3 className="text-3xl font-semibold text-black mb-4">
        {title}
      </h3>
      <p className="text-base font-normal text-zinc-600 mb-6">
        {description}
      </p>
      <div className="flex flex-col gap-2.5 text-base">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start">
            <span className="text-emerald-500 mr-2.5 font-bold">✓</span>
            <span className="font-medium text-zinc-800">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const ImageBlock = () => (
    <div className="w-6/12 max-md:w-full max-sm:w-full">
      <img
        src={imageSrc}
        alt={`${title} feature illustration`}
        className="w-full h-auto rounded-xl shadow-lg max-w-[90%] mx-auto"
      />
    </div>
  );

  return (
    <div className={`flex justify-between items-center my-16 gap-4 max-md:flex-col max-sm:flex-col max-md:my-12 max-sm:my-10 ${
      imagePosition === "right" ? "flex-row" : "flex-row-reverse"
    }`}>
      <ContentBlock />
      <ImageBlock />
    </div>
  );
};

export default FeatureSection;
