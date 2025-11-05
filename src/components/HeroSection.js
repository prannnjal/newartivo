import React from 'react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover min-w-full min-h-full"
        >
          <source src="/hero.webm" type="video/mp4" />
        </video>
      </div>
      
      {/* Gradients */}
      {/* Left side gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10"></div>
      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
      
      {/* Hero content */}
      <div className="absolute inset-0 z-20 flex items-center justify-start">
        <div className="px-4 sm:px-8 lg:px-16">
          <blockquote 
            className="text-white"
            style={{
              fontWeight: 400,
              fontStyle: 'italic',
              letterSpacing: '-4%'
            }}
          >
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-tight lg:leading-[40px] max-w-xs sm:max-w-sm md:max-w-md lg:w-[336px]">
              Your partners for innovation, bringing<br className="hidden lg:block" /><span className="font-bold"> Excellence in R&D</span><br className="hidden lg:block" /> <span className="whitespace-nowrap">without the overheads.</span>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
