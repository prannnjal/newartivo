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
      <div className="absolute inset-0 z-20">
        <blockquote 
          className="text-white"
          style={{
            position: 'absolute',
            width: '336px',
            height: '160px',
            top: '244px',
            left: '70px',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: '36px',
            lineHeight: '40px',
            letterSpacing: '-0.04em'
          }}
        >
          Your partners for innovation, bringing<br /><span className="font-bold">Excellence in R&D</span><br />without the overheads.
        </blockquote>
      </div>
    </section>
  );
};
