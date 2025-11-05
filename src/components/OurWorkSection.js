import React from 'react';
import Image from 'next/image';

export const OurWorkSection = () => {
  return (
    <>
      {/* White Gap from Upper Section */}
      <div className="w-full bg-white h-0.5 md:h-1 lg:h-2"></div>
      
      <section 
        className="relative overflow-visible min-h-[271px]"
        style={{ 
          background: 'linear-gradient(to right, rgba(11, 25, 47, 1), rgba(8, 181, 255, 1))',
          minHeight: 'clamp(250px, 14vw, 271px)',
          paddingBottom: 0,
          marginBottom: 0
        }}
      >
        {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/2 11.png"
          alt="Background Pattern"
          fill
          className="object-cover "
          priority
        />
      </div>
      
      {/* Right Side - Bottom Right Content - Outside container to reach edge */}
      <div className="hidden lg:block absolute right-0 z-20" style={{ bottom: 0, marginBottom: 0, paddingBottom: 0 }}>
        <div className="relative flex items-end gap-2" style={{ marginBottom: 0, paddingBottom: 0 }}>
          {/* Intersect Background Image */}
          <div className="relative" style={{ 
            width: 'clamp(400px, 31.25vw, 600px)',
            height: 'clamp(80px, 6.25vw, 120px)',
            marginBottom: 0,
            paddingBottom: 0,
            display: 'flex',
            alignItems: 'flex-end'
          }}>
            <Image
              src="/why-artivo/Intersect (1).png"
              alt="Intersect Background"
              fill
              className="object-contain"
              style={{ objectPosition: 'bottom' }}
            />
            {/* Text and Arrow Overlay */}
            <div className="absolute inset-0 flex items-end justify-center gap-2" style={{ paddingLeft: 'clamp(1rem, 0.417vw, 2rem)', paddingRight: 'clamp(1rem, 0.417vw, 2rem)', paddingBottom: 0, bottom: 0 }}>
              <span 
                className="text-black font-bold whitespace-nowrap"
                style={{ fontSize: 'clamp(0.875rem, 0.938vw, 1.125rem)' }}
              >
                HAVE AN IDEA? LET'S MAKE IT PROFITABLE
              </span>
              <Image
                src="/why-artivo/Group 18.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="object-contain"
                style={{ 
                  width: 'clamp(16px, 1.25vw, 20px)',
                  height: 'clamp(16px, 1.25vw, 20px)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 overflow-visible" style={{ 
        paddingTop: 'clamp(2rem, 3vw, 4rem)',
        paddingBottom: 'clamp(2rem, 3vw, 4rem)',
        minHeight: 'clamp(250px, 14vw, 271px)'
      }}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="space-y-4 flex-1 absolute left-4 sm:left-6 md:left-8 lg:left-8 xl:left-12 right-4 sm:right-6 md:right-8 lg:right-auto top-8 md:top-12 lg:top-[57px]">
            <div className="w-full max-w-full lg:max-w-[967px]">
              <p 
                className="text-white text-xl md:text-2xl lg:text-[36px]"
                style={{
                  fontWeight: 400,
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
          
          {/* Mobile - Right Side Content - Removed from container, will be positioned at bottom */}
        </div>
      </div>
      
      {/* Mobile - Bottom Right Content - Outside container to reach edge */}
      <div className="lg:hidden absolute bottom-0 right-0 z-20" style={{ bottom: 0, marginBottom: 0, paddingBottom: 0 }}>
        <div className="relative flex items-end gap-2" style={{ marginBottom: 0, paddingBottom: 0 }}>
          {/* Intersect Background Image */}
          <div className="relative" style={{ 
            width: 'clamp(300px, 80vw, 400px)',
            height: 'clamp(60px, 15vw, 80px)',
            marginBottom: 0,
            paddingBottom: 0,
            display: 'flex',
            alignItems: 'flex-end'
          }}>
            <Image
              src="/why-artivo/Intersect (1).png"
              alt="Intersect Background"
              fill
              className="object-contain"
              style={{ objectPosition: 'bottom' }}
            />
            {/* Text and Arrow Overlay */}
            <div className="absolute inset-0 flex items-end justify-center gap-2 px-4 md:px-6" style={{ paddingBottom: 0, bottom: 0 }}>
              <span className="text-black font-bold text-xs sm:text-xs md:text-sm whitespace-normal sm:whitespace-nowrap">
                HAVE AN IDEA? LET'S MAKE IT PROFITABLE
              </span>
              <Image
                src="/why-artivo/Group 18.svg"
                alt="Arrow"
                width={16}
                height={16}
                className="object-contain w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
