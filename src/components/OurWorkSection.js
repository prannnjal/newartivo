import React from 'react';
import Image from 'next/image';

export const OurWorkSection = () => {
  return (
    <>
      {/* White Gap from Upper Section */}
      <div className="w-full bg-white h-0.5 md:h-1 lg:h-2"></div>
      
      <section 
        className="relative overflow-visible"
        style={{ 
          background: 'linear-gradient(to right, rgba(11, 25, 47, 1), rgba(8, 181, 255, 1))'
        }}
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
      
      {/* Right Side - Bottom Right Content - Outside container to reach edge */}
      <div className="hidden lg:block absolute bottom-0 right-0 z-20">
        <div className="relative flex items-center gap-2 md:gap-4">
          {/* Intersect Background Image */}
          <div className="relative">
            <Image
              src="/why-artivo/Intersect (1).png"
              alt="Intersect Background"
              width={600}
              height={120}
              className="object-contain"
            />
            {/* Text and Arrow Overlay */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 px-8">
              <span className="text-white font-bold text-lg xl:text-xl whitespace-nowrap">
                HAVE AN IDEA? LET'S MAKE IT PROFITABLE
              </span>
              <Image
                src="/why-artivo/Group 18.svg"
                alt="Arrow"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 overflow-visible py-8 md:py-12 lg:py-16 min-h-[271px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="space-y-4 flex-1" style={{ position: 'absolute', top: '57px', left: '70px' }}>
            <div className="w-full max-w-full lg:max-w-[967px]">
              <p 
                className="text-white"
                style={{
                  fontWeight: 400,
                  fontSize: '36px',
                  lineHeight: '100%',
                  letterSpacing: '-0.04em'
                }}
              >
                "With Artivo, you don't have to worry about in-house development. Skip the overheads and let them bring your ideas to life."
              </p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm sm:text-base md:text-lg text-white font-medium">
                Paula
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-white">
                Product Strategy, LAMY
              </p>
            </div>
          </div>
          
          {/* Mobile - Right Side Content */}
          <div className="w-full lg:hidden">
            <div className="relative flex items-center gap-2 md:gap-4">
              {/* Intersect Background Image */}
              <div className="relative">
                <Image
                  src="/why-artivo/Intersect (1).png"
                  alt="Intersect Background"
                  width={600}
                  height={120}
                  className="object-contain w-full h-auto lg:w-[600px]"
                />
                {/* Text and Arrow Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-4 px-4 md:px-8">
                  <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-normal sm:whitespace-nowrap">
                    HAVE AN IDEA? LET'S MAKE IT PROFITABLE
                  </span>
                  <Image
                    src="/why-artivo/Group 18.svg"
                    alt="Arrow"
                    width={32}
                    height={32}
                    className="object-contain w-6 h-6 md:w-8 md:h-8 flex-shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
