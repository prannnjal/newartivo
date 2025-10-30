import React from 'react';
import Image from 'next/image';

export const OurWorkSection = () => {
  return (
    <section 
      className="relative overflow-visible"
      style={{ background: 'rgba(10, 25, 47, 1)' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/2 11.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      
      <div className="container mx-auto px-0 relative z-10 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          
          {/* Left Side - Text Content */}
          <div className="space-y-2 px-8 py-4 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white leading-tight">
              Our Work
            </h2>
            
            <p className="text-sm text-white/90 leading-snug">
              Every project we take on is more than a design; it's a story of innovation, precision, and purpose.
            </p>
            
            <p className="text-sm text-white/90 leading-snug">
              From first sketches to full production, our work reflects a balance of creativity and engineering excellence.
            </p>
          </div>
          
          {/* Right Side - Artivo GP Line Drawing - Full Height */}
          <div className="relative h-full min-h-[200px] max-h-[300px] overflow-visible">
            <Image
              src="/New folder/Artivo - GP Line Drawings (3) 1.png"
              alt="Artivo GP Line Drawing"
              fill
              className="object-contain object-right"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};



