
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Partners = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="mt-14 max-md:mt-10 px-4 w-full">
      <h2 className="text-2xl text-black font-[530] text-center max-sm:text-xl">
        Our trusted partners
      </h2>
      <div className="mt-5 mx-auto max-w-[616px] overflow-hidden">
        <div className={`flex items-center ${isMobile ? 'gap-5' : 'gap-10'} animate-marquee`}>
          {/* Logos */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4d8d4de7786c4aa6ae8bc9154d63ed56/d872bc812c55f6fd78266cb33a13cc1efa798967?placeholderIfAbsent=true"
            alt="Partner logo 1"
            className="object-contain shrink-0 aspect-[5.15] w-[98px] max-sm:w-[80px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4d8d4de7786c4aa6ae8bc9154d63ed56/7560559957f11447e1e51bf13285224ae5a68dba?placeholderIfAbsent=true"
            alt="Partner logo 2"
            className="object-contain shrink-0 max-w-full aspect-[4] w-[100px] max-sm:w-[80px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4d8d4de7786c4aa6ae8bc9154d63ed56/3e6d01bd8364c57caf3faff547b128527ed1202b?placeholderIfAbsent=true"
            alt="Partner logo 3"
            className="object-contain shrink-0 aspect-[3.53] w-[99px] max-sm:w-[80px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4d8d4de7786c4aa6ae8bc9154d63ed56/ef7afd723e158938ca341615b7fa61ceb3e786f1?placeholderIfAbsent=true"
            alt="Partner logo 4"
            className="object-contain shrink-0 max-w-full aspect-[3.85] w-[100px] max-sm:w-[80px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4d8d4de7786c4aa6ae8bc9154d63ed56/5f0499cd1cf3544113c7adee112388d176abe9b8?placeholderIfAbsent=true"
            alt="Partner logo 5"
            className="object-contain shrink-0 aspect-[3.41] w-[99px] max-sm:w-[80px]"
          />
          
          {/* Duplicate logos for seamless scrolling */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4d8d4de7786c4aa6ae8bc9154d63ed56/d872bc812c55f6fd78266cb33a13cc1efa798967?placeholderIfAbsent=true"
            alt="Partner logo 1"
            className="object-contain shrink-0 aspect-[5.15] w-[98px] max-sm:w-[80px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4d8d4de7786c4aa6ae8bc9154d63ed56/7560559957f11447e1e51bf13285224ae5a68dba?placeholderIfAbsent=true"
            alt="Partner logo 2"
            className="object-contain shrink-0 max-w-full aspect-[4] w-[100px] max-sm:w-[80px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4d8d4de7786c4aa6ae8bc9154d63ed56/3e6d01bd8364c57caf3faff547b128527ed1202b?placeholderIfAbsent=true"
            alt="Partner logo 3"
            className="object-contain shrink-0 aspect-[3.53] w-[99px] max-sm:w-[80px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4d8d4de7786c4aa6ae8bc9154d63ed56/ef7afd723e158938ca341615b7fa61ceb3e786f1?placeholderIfAbsent=true"
            alt="Partner logo 4"
            className="object-contain shrink-0 max-w-full aspect-[3.85] w-[100px] max-sm:w-[80px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4d8d4de7786c4aa6ae8bc9154d63ed56/5f0499cd1cf3544113c7adee112388d176abe9b8?placeholderIfAbsent=true"
            alt="Partner logo 5"
            className="object-contain shrink-0 aspect-[3.41] w-[99px] max-sm:w-[80px]"
          />
        </div>
      </div>

      <style>
        {`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 15s linear infinite;
          min-width: 200%;
        }
        `}
      </style>
    </section>
  );
};

export default Partners;
