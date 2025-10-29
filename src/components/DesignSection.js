import React from 'react';
import Image from 'next/image';

export const DesignSection = () => {
  return (
    <section className="relative h-[280px] overflow-hidden">
      {/* Linear Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,25,47,1)] to-[rgba(205,64,11,1)] z-0"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-5">
        <Image
          src="/1 11.png"
          alt="Design section background"
          fill
          className="object-cover opacity-80"
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-8">
        <div className="flex items-center justify-between pt-8">
          
          {/* Design Column */}
          <div className="text-white flex-1">
            <h2 className="text-[30px] font-semibold mb-8 tracking-tight">Design.</h2>
            <p className="text-[16px] leading-relaxed font-light mb-8">
              Artivo is where bold ideas meet real-world design where sketches evolve into prototypes, and prototypes become products that people genuinely love. We thrive on curiosity, experimentation, and the drive to create designs that make life smarter and efficient.
            </p>
          </div>
          
          {/* Arrow between Design and Develop */}
          <div className="flex justify-center mx-8">
            <Image
              src="/Link Arrow.svg"
              alt="Arrow"
              width={24}
              height={24}
              className="text-white"
            />
          </div>
          
          {/* Develop Column */}
          <div className="text-white flex-1">
            <h2 className="text-[30px] font-semibold mb-8 tracking-tight">Develop.</h2>
            <p className="text-[16px] leading-relaxed font-light mb-8">
              From product design to full-scale manufacturing, we blend creativity with engineering precision to deliver solutions that are as functional as they are aesthetic. Whether it's a sleek consumer device or a futuristic concept, we turn your vision into reality.
            </p>
          </div>
          
          {/* Arrow between Develop and Succeed */}
          <div className="flex justify-center mx-8">
            <Image
              src="/Link Arrow.svg"
              alt="Arrow"
              width={24}
              height={24}
              className="text-white"
            />
          </div>
          
          {/* Succeed Column */}
          <div className="text-white flex-1">
            <h2 className="text-[30px] font-semibold mb-8 tracking-tight">Succeed.</h2>
            <p className="text-[16px] leading-relaxed font-light mb-8">
              At our core, we're a team of designers, innovators, and dreamers who believe great design should move the world forward. We collaborate with startups and global brands alike; creating meaningful products that stand out, perform exceptionally, and inspire the future.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};
