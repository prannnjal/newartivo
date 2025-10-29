import React from 'react';
import Image from 'next/image';

export const OurSpecialitiesSection = () => {
  return (
    <section className="py-16 bg-white" style={{ height: '280px' }}>
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Text Content */}
           <div className="space-y-8" style={{ width: '889px', marginTop: '-40px' }}>
            <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
              Our Specialities
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Every idea deserves the right team to bring it to life. At Artivo, we bridge the gap between imagination and execution helping businesses design, develop, and deliver a vision that truly stand out.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                From early-stage concepts to full-scale production, our multidisciplinary team handles everything under one roof. We understand the pressure to move fast, stay efficient, and keep costs in check; that's why our process is built to make innovation seamless, practical, and profitable.
              </p>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="relative" style={{ marginLeft: '40px', height: '280px' }}>
            <div className="absolute top-[-125px] left-0 w-full" style={{ height: '400px' }}>
              <Image
                src="/New folder/2 13.png"
                alt="Our Specialities Visual"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
