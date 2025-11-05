"use client";

import React from "react";
import Image from "next/image";

export const InnovativeAffiliationsSection = () => {

  return (
    <section className="py-8 bg-white">
      {/* Content Section with Background */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="absolute w-full z-0" style={{ height: '100%', minHeight: '200px', top: '-40px', left: '0', right: '0' }}>
          <Image
            src="/2 13.png"
            alt="Background Pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-8 -mt-18">
          {/* Left Section */}
          <div className="space-y-6 flex flex-col">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ 
              background: 'linear-gradient(to right, rgba(12, 25, 48, 1), rgba(8, 176, 249, 1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginTop: '0',
              paddingTop: '0'
            }}>
            Innovative Affiliations
          </h2>
            <p className="text-black text-lg leading-relaxed">
              We work with all types and size of businesses across industries, becoming ideal R&D providers to turn their ideas into a profitable reality.
            </p>
          </div>

          {/* Right Section - Testimonial */}
          <div className="text-right flex flex-col justify-start" style={{ paddingTop: '0', marginTop: '0' }}>
            <blockquote 
              className="text-black text-xl sm:text-2xl lg:text-[36px] mb-4"
              style={{ 
                fontWeight: 700,
                lineHeight: '100%',
                letterSpacing: '-0.04em',
                marginTop: '0',
                paddingTop: '0'
              }}
            >
              "Artivo can make ideas turn real! They've always exceeded expectations. Great work!"
            </blockquote>
            <div className="space-y-1">
              <p 
                className="text-black text-base sm:text-lg lg:text-[20px]"
                style={{ 
                  fontWeight: 500,
                  lineHeight: '100%',
                  letterSpacing: '-0.04em'
                }}
              >
                Veronica
              </p>
              <p 
                className="text-black text-base sm:text-lg lg:text-[20px]"
                style={{ 
                  fontWeight: 500,
                  lineHeight: '100%',
                  letterSpacing: '-0.04em'
                }}
              >
                Software Accelerator, Keyshot
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};