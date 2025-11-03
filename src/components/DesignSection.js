import React from 'react';
import Image from 'next/image';

export const DesignSection = () => {
  return (
    <section className="relative h-[280px] overflow-hidden">
      {/* Linear Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,25,47,1)] to-[rgba(205,64,11,1)] z-0"></div>
      
      {/* Background Image with wavy patterns */}
      <div className="absolute inset-0 z-5">
        <Image
          src="/1 11.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-80"
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between pt-8 h-full">
          
          {/* Left Side - Case Studies Content */}
          <div className="text-white flex-1 mt-8">
            <h2 className="text-[30px] font-bold mb-4 tracking-tight">Case Studies</h2>
            <div style={{ width: '455px', height: '110px' }}>
              <p className="text-[16px] leading-relaxed font-normal mb-4">
                Every project we take on is more than a design; it's a story of innovation, precision, and purpose.
              </p>
              <p className="text-[16px] leading-relaxed font-normal">
                Some of the many projects we've brought to life, built with passion and dedication at Artivo.
              </p>
            </div>
          </div>
          
          {/* Right Side - Testimonial */}
          <div className="text-white flex-1 text-right mt-12">
            <div style={{ width: '651px', height: '86px' }} className="ml-auto mb-4">
              <p className="text-[18px] md:text-[20px] italic" style={{ fontWeight: 400, lineHeight: '1.8' }}>
                "We're thrilled to collaborate with them! They simply design successful products."
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-[14px] md:text-[16px] font-medium">
                Pirelli
              </p>
              <p className="text-[14px] md:text-[16px] font-normal">
                Exclusive Official Tyre Suppliers
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
