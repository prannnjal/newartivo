"use client";

import React from "react";
import Image from "next/image";

export const InnovativeAffiliationsSection = () => {

  return (
    <section className="bg-white">
      {/* Content Section with Background */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="absolute w-full z-0" style={{ height: '100%', minHeight: '200px', top: '0', left: '0', right: '0' }}>
          <Image
            src="/2 13.png"
            alt="Background Pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10" style={{ paddingTop: '2rem', paddingBottom: '2rem', minHeight: '200px' }}>
          {/* Mobile View */}
          <div className="lg:hidden px-6">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight" style={{ 
                background: 'linear-gradient(to right, rgba(12, 25, 48, 1), rgba(8, 176, 249, 1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Innovative Affiliations
              </h2>
              <p className="text-black text-lg leading-relaxed">
                We work with all types and size of businesses across industries, becoming ideal R&D providers to turn their ideas into a profitable reality.
              </p>
              <div className="text-right">
                <blockquote 
                  className="text-black text-xl sm:text-2xl mb-4"
                  style={{ 
                    fontWeight: 700,
                    lineHeight: '100%',
                    letterSpacing: '-0.04em'
                  }}
                >
                  "Artivo can make ideas turn real! They've always exceeded expectations. Great work!"
                </blockquote>
                <div className="space-y-1">
                  <p 
                    className="text-black text-base sm:text-lg"
                    style={{ 
                      fontWeight: 500,
                      lineHeight: '100%',
                      letterSpacing: '-0.04em'
                    }}
                  >
                    Veronica
                  </p>
                  <p 
                    className="text-black text-base sm:text-lg"
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

          {/* Desktop View */}
          <div className="hidden lg:block relative" style={{ minHeight: '200px' }}>
            {/* Left Section - Independent from left edge */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center" style={{ 
              paddingLeft: 'clamp(1rem, 4.68vw, 4rem)'
            }}>
              <div className="space-y-6 flex flex-col" style={{ maxWidth: 'clamp(300px, 40vw, 600px)' }}>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ 
                  background: 'linear-gradient(to right, rgba(12, 25, 48, 1), rgba(8, 176, 249, 1))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Innovative Affiliations
                </h2>
                <p className="text-black text-lg leading-relaxed">
                  We work with all types and size of businesses across industries, becoming ideal R&D providers to turn their ideas into a profitable reality.
                </p>
              </div>
            </div>

            {/* Right Section - Testimonial - Independent from right edge */}
            <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center text-right" style={{ 
              paddingRight: 'clamp(1rem, 4.68vw, 4rem)'
            }}>
              <div style={{ maxWidth: 'clamp(300px, 40vw, 600px)' }}>
                <blockquote 
                  className="text-black text-[36px] mb-4"
                  style={{ 
                    fontWeight: 700,
                    lineHeight: '100%',
                    letterSpacing: '-0.04em'
                  }}
                >
                  "Artivo can make ideas turn real! They've always exceeded expectations. Great work!"
                </blockquote>
                <div className="space-y-1">
                  <p 
                    className="text-black text-[20px]"
                    style={{ 
                      fontWeight: 500,
                      lineHeight: '100%',
                      letterSpacing: '-0.04em'
                    }}
                  >
                    Veronica
                  </p>
                  <p 
                    className="text-black text-[20px]"
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
      </div>
    </section>
  );
};