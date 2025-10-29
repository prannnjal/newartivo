import React from 'react';
import Image from 'next/image';
import { ReadMoreButton } from './ReadMoreButton';

export const ProductShowcaseSection = () => {
  return (
    <section className="pt-2 pb-16 bg-white">
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
          <div className="flex flex-col">
            {/* Right Panel - Hero Section */}
            <div className="relative overflow-hidden w-full h-[100vh] lg:h-[1136px]">
               <Image
                 src="/New folder/13.png"
                 alt="Burning Bike Concept"
                 fill
                 className="object-cover"
               />
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="p-5">
                  <h2 className="text-white text-[36px] font-bold mb-3">Excellence in R&D</h2>
                  <p className="text-white text-[20px] mb-4 leading-relaxed" style={{ width: '338px' }}>
                    Our R&D process is built on precision, experimentation, and collaboration, helping businesses transform bold ideas into market-ready products faster, smarter, and more sustainably.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Read More Button - Below 3rd Card Only */}
            <ReadMoreButton />
          </div>
          
        </div>
      </div>
    </section>
  );
};
