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
          <source src="/ORAEVEN GP Bike - Intro video.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Gradients */}
      {/* Left side gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10"></div>
      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
      
      {/* Hero content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="ml-20 max-w-2xl">
          <blockquote className="text-white text-6xl font-light leading-tight tracking-tight">
            "Good design is<br /><span className="font-bold">good business</span>"
          </blockquote>
          <cite className="text-white text-xl font-light mt-6 block not-italic text-right">
            - Thomas John Watson Jr.
          </cite>
        </div>
      </div>
    </section>
  );
};
