import React from 'react';
import Image from 'next/image';
import { ReadMoreButton } from './ReadMoreButton';

export const ProductShowcaseSection = () => {
  return (
    <section className="bg-white">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen" style={{ gap: '1px' }}>
          
          {/* Left Side - Two Panels */}
          <div className="grid grid-cols-2 lg:grid-cols-1 min-h-[50vh] lg:min-h-[1136px]" style={{ gap: '1px' }}>
            
            {/* Top-Left Panel - Device Detail 1 */}
            <div className="bg-gray-100 overflow-hidden relative w-full min-h-[220px] sm:min-h-[280px] lg:min-h-[560px]">
              <Image
                src="/New folder/15.png"
                alt="Device Detail - Fingerprint Sensor"
                fill
                className="object-cover scale-[1.04] lg:scale-[1.08]"
                style={{ transformOrigin: 'center' }}
              />
            </div>
            
            {/* Bottom-Left Panel - Device Detail 2 */}
            <div className="bg-gray-100 overflow-hidden relative w-full min-h-[220px] sm:min-h-[280px] lg:min-h-[560px]">
              <Image
                src="/New folder/12.png"
                alt="Device Detail - Connectors"
                fill
                className="object-cover scale-[1.04] lg:scale-[1.08]"
                style={{ transformOrigin: 'center' }}
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
              <div className="hidden lg:block absolute right-0 z-20" style={{ bottom: 0, marginBottom: 0, paddingBottom: 0 }}>
                <div className="relative flex items-end" style={{ marginBottom: 0, paddingBottom: 0 }}>
                  <div
                    className="relative overflow-hidden"
                    style={{
                      width: 'clamp(400px, 31.25vw, 600px)',
                      height: 'clamp(40px, 3.2vw, 64px)',
                      background: '#FFED00',
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)',
                      transform: 'scaleY(-1)'
                    }}
                  >
                    <div
                      className="absolute inset-0 flex items-center justify-center gap-3 px-4 md:px-6"
                      style={{ transform: 'scaleY(-1)' }}
                    >
                      <span
                        className="text-black font-bold text-center"
                        style={{ fontSize: 'clamp(0.875rem, 0.938vw, 1.125rem)', letterSpacing: '-0.02em' }}
                      >
                        CLICK HERE TO BOOK A FREE CONSULTATION
                    
                      </span>
                      <Image
                        src="/why-artivo/Group 18.svg"
                        alt="Arrow"
                        width={20}
                        height={20}
                        className="object-contain"
                        style={{ width: 'clamp(16px, 1.25vw, 20px)', height: 'clamp(16px, 1.25vw, 20px)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile - Right Side Content */}
              <div className="lg:hidden absolute bottom-0 right-0 z-20" style={{ marginBottom: 0, paddingBottom: 0 }}>
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: 'clamp(260px, 70vw, 340px)',
                    height: 'clamp(34px, 7.5vw, 50px)',
                    background: '#FFED00',
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)',
                    transform: 'scaleY(-1)'
                  }}
                >
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    style={{ transform: 'scaleY(-1) translateX(6px)' }}
                  >
                    <div className="flex items-center justify-center gap-2 px-4">
                      <span
                        className="text-black font-bold text-center"
                        style={{ fontSize: 'clamp(0.7rem, 2.6vw, 1rem)', letterSpacing: '-0.02em' }}
                      >
                        CLICK HERE TO BOOK A FREE CONSULTATION
                      </span>
                      <Image
                        src="/why-artivo/Group 18.svg"
                        alt="Arrow"
                        width={18}
                        height={18}
                        className="object-contain"
                        style={{ width: 'clamp(14px, 3vw, 18px)', height: 'clamp(14px, 3vw, 18px)' }}
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
