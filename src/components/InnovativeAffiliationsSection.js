"use client";

import React from "react";
import Image from "next/image";

export const InnovativeAffiliationsSection = () => {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ 
              background: 'linear-gradient(to right, rgba(12, 25, 48, 1), rgba(8, 176, 249, 1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
            Innovative Affiliations
          </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We work with all types and size of businesses across industries, becoming ideal R&D providers to turn their ideas into a profitable reality.
            </p>
          </div>

          {/* Right Section - Testimonial */}
          <div className="text-right">
            <blockquote className="text-gray-800 text-2xl lg:text-3xl font-bold leading-tight mb-6">
              "Artivo can make ideas turn real!<br />
              They've always exceeded<br />
              expectations. Great work!"
            </blockquote>
            <div className="space-y-1">
              <p className="text-gray-800 font-semibold text-lg">Veronica</p>
              <p className="text-gray-600 text-base">Software Accelerator, Keyshot</p>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Carousel - Full Width */}
      <div className="w-full overflow-hidden">
        {/* First Row - Moving Right */}
        <div className="flex animate-scroll-right">
          {logos.map((logo, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0 mx-1">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={220}
                height={140}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate logos for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`row1-dup-${index}`} className="flex-shrink-0 mx-1">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={220}
                height={140}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Second Row - Moving Left */}
        <div className="flex animate-scroll-left mt-1">
          {logos.slice().reverse().map((logo, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0 mx-1">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={220}
                height={140}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate logos for seamless loop */}
          {logos.slice().reverse().map((logo, index) => (
            <div key={`row2-dup-${index}`} className="flex-shrink-0 mx-1">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={220}
                height={140}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
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
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </section>
  );
};