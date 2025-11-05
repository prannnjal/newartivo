import React from 'react';
import Image from 'next/image';

export const OurSpecialitiesSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-0 lg:h-[400px]">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch h-full">
          
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center px-4 sm:px-6 lg:pl-[clamp(1rem,3.33vw,4rem)]">
            <h2 
              className="text-gray-900 mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-[36px]"
              style={{
                fontWeight: 700,
                lineHeight: '100%',
                letterSpacing: '-0.04em'
              }}
            >
              Our Specialities
            </h2>
            
            <div 
              className="text-gray-900 text-base sm:text-lg lg:text-[20px]"
              style={{
                fontWeight: 400,
                lineHeight: '100%',
                letterSpacing: '-0.04em'
              }}
            >
              <p className="mb-4">
                Every idea deserves the right team to bring it to life.
              </p>
              <p>
                At Artivo, we bridge the gap between imagination and execution helping your business design, develop, and deliver a vision that truly stand out.
              </p>
            </div>
          </div>
          
          {/* Right Side - Image with Testimonial Overlay */}
          <div className="relative w-full h-[300px] sm:h-[350px] lg:h-full overflow-hidden rounded-lg">
            <Image
              src="/New folder/2 13.png"
              alt="Our Specialities Visual"
              width={942}
              height={325}
              className="hidden lg:block absolute object-cover w-full h-full"
              style={{ transform: 'translateX(20px) rotate(0deg)' }}
            />
            
            {/* Testimonial Text Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-end px-4 sm:px-6 lg:pr-[clamp(1rem,3.33vw,4rem)]">
              <div className="text-right max-w-full sm:max-w-lg lg:max-w-[558px]">
                <blockquote 
                  className="text-black mb-4 text-xl sm:text-2xl lg:text-[36px]"
                  style={{ 
                    fontWeight: 700,
                    lineHeight: '100%',
                    letterSpacing: '-0.04em'
                  }}
                >
                  "If you have an idea of a product or service, we can design, develop, test and launch it for you."
                </blockquote>
                
                <div className="space-y-1">
                  <p 
                    className="text-black text-base sm:text-lg lg:text-[20px]"
                    style={{ 
                      fontWeight: 500,
                      lineHeight: '100%',
                      letterSpacing: '-0.04em'
                    }}
                  >
                    Olivia Harris
                  </p>
                  <p 
                    className="text-black text-base sm:text-lg lg:text-[20px]"
                    style={{ 
                      fontWeight: 500,
                      lineHeight: '100%',
                      letterSpacing: '-0.04em'
                    }}
                  >
                    Business Manager, Artivo
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
