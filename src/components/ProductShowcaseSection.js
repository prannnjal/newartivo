import React from 'react';
import Image from 'next/image';
import { ReadMoreButton } from './ReadMoreButton';

export const ProductShowcaseSection = () => {
  return (
    <section className="pt-2 pb-1 bg-white">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 min-h-screen">
          
          {/* Left Side - Two Panels */}
          <div className="grid grid-rows-2 gap-0 min-h-screen lg:min-h-[1136px]" style={{ gap: '-8px' }}>
            
            {/* Top-Left Panel - Device Detail 1 */}
            <div className="bg-gray-100 overflow-hidden relative w-full h-[50vh] lg:h-[572px]">
              <Image
                src="/New folder/15.png"
                alt="Device Detail - Fingerprint Sensor"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Bottom-Left Panel - Device Detail 2 */}
            <div className="bg-gray-100 overflow-hidden relative w-full h-[50vh] lg:h-[613px]" style={{ marginTop: '-18px' }}>
              <Image
                src="/New folder/12.png"
                alt="Device Detail - Connectors"
                fill
                className="object-cover"
              />
            </div>
            
          </div>
          
          {/* Right Side - 3rd Card + Read More Button */}
          <div className="flex flex-col h-full min-h-screen lg:min-h-[1136px]">
            {/* Right Panel - Hero Section */}
            <div className="relative overflow-hidden w-full h-full">
               <Image
                 src="/New folder/13.png"
                 alt="Burning Bike Concept"
                 fill
                 className="object-cover"
               />
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <div className="absolute bottom-16 left-6 right-6 z-20">
                <div className="p-5">
                  <h2 
                    className="text-white mb-3"
                    style={{
                      fontWeight: 700,
                      fontSize: '36px',
                      lineHeight: '100%',
                      letterSpacing: '-0.04em'
                    }}
                  >
                    Tested to Succeed.
                  </h2>
                  <p 
                    className="text-white mb-4"
                    style={{ 
                      width: '338px',
                      fontWeight: 200,
                      fontSize: '20px',
                      lineHeight: '100%',
                      letterSpacing: '-0.04em'
                    }}
                  >
                    Our R&D process is built on precision, experimentation, and collaboration, helping businesses transform bold ideas into market-ready products faster, smarter, and more sustainably.
                  </p>
                </div>
              </div>
              
              {/* Right Side - Bottom Right Content - Desktop */}
              <div className="hidden lg:block absolute bottom-0 right-0 z-20">
                <div className="relative flex items-center gap-2 md:gap-4">
                  {/* Intersect Background Image */}
                  <div className="relative">
                    <Image
                      src="/why-artivo/Intersect (1).png"
                      alt="Intersect Background"
                      width={400}
                      height={100}
                      className="object-contain"
                    />
                    {/* Text and Arrow Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-2 px-6">
                      <span className="text-black font-bold text-sm whitespace-nowrap">
                      CLICK HERE TO BOOK A FREE CONSULTATION
                      </span>
                      <Image
                        src="/why-artivo/Group 18.svg"
                        alt="Arrow"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile - Right Side Content */}
              <div className="w-full lg:hidden absolute bottom-0 left-0 right-0 z-20">
                <div className="relative flex items-center gap-2 md:gap-4">
                  {/* Intersect Background Image */}
                  <div className="relative">
                    <Image
                      src="/why-artivo/Intersect (1).png"
                      alt="Intersect Background"
                      width={400}
                      height={80}
                      className="object-contain w-full h-auto lg:w-[400px]"
                    />
                    {/* Text and Arrow Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-2 px-4 md:px-6">
                      <span className="text-black font-bold text-xs sm:text-xs md:text-sm whitespace-normal sm:whitespace-nowrap">
                      CLICK HERE TO BOOK A FREE CONSULTATION
                      </span>
                      <Image
                        src="/why-artivo/Group 18.svg"
                        alt="Arrow"
                        width={16}
                        height={16}
                        className="object-contain w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Read More Button - Below 3rd Card Only */}
           
          </div>
          
        </div>
      </div>
    </section>
  );
};
