"use client";

import React from "react";
import Image from "next/image";

export const LogoCarousel = () => {
  const logos = [
    "/logos/Frame 102.png",
    "/logos/Frame 103 (1).png",
    "/logos/Frame 103.png",
    "/logos/Frame 104 (1).png",
    "/logos/Frame 104.png",
    "/logos/Frame 99 (1).png",
    "/logos/Frame 99.png",
    "/logos/Frame 100 (1).png",
    "/logos/Frame 100.png",
    "/logos/Frame 101 (1).png",
    "/logos/Frame 101.png",
    "/logos/Frame 102 (1).png",
  ];

  return (
    <>
      {/* Logo Carousel - Full Width */}
      <div className="w-full overflow-hidden py-4 sm:py-6">
        {/* First Row - Moving Right */}
        <div className="flex animate-scroll-right gap-[clamp(0.5rem,2vw,1.75rem)]">
          {logos.map((logo, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={220}
                height={140}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 w-[clamp(110px,20vw,200px)] h-[clamp(56px,10vw,110px)]"
              />
            </div>
          ))}
          {/* Duplicate logos for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`row1-dup-${index}`} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={220}
                height={140}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 w-[clamp(110px,20vw,200px)] h-[clamp(56px,10vw,110px)]"
              />
            </div>
          ))}
        </div>

        {/* Second Row - Moving Left */}
        <div className="flex animate-scroll-left mt-3 gap-[clamp(0.5rem,2vw,1.75rem)]">
          {logos.slice().reverse().map((logo, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={220}
                height={140}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 w-[clamp(110px,20vw,200px)] h-[clamp(56px,10vw,110px)]"
              />
            </div>
          ))}
          {/* Duplicate logos for seamless loop */}
          {logos.slice().reverse().map((logo, index) => (
            <div key={`row2-dup-${index}`} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={220}
                height={140}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 w-[clamp(110px,20vw,200px)] h-[clamp(56px,10vw,110px)]"
              />
            </div>
          ))}
        </div>
      </div>
          
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll-right,
          .animate-scroll-left {
            animation-duration: 20s;
          }
        }

        @media (max-width: 480px) {
          .animate-scroll-right,
          .animate-scroll-left {
            animation-duration: 18s;
          }
        }
      `}</style>
    </>
  );
};


