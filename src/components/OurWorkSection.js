import React from 'react';
import Image from 'next/image';

export const OurWorkSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Our Work
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Every project we take on is more than a design; it's a story of innovation, precision, and purpose.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              From first sketches to full production, our work reflects a balance of creativity and engineering excellence.
            </p>
          </div>
          
          {/* Right Side - Bicycle Rendering */}
          <div className="relative">
            <Image
              src="/New folder/Artivo - GP Line Drawings (3) 1.png"
              alt="Bicycle Technical Drawing"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};



