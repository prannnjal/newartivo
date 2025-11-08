import React from 'react';
import Image from 'next/image';

export const OurWorkSection = () => {
  return (
    <section 
        className="relative overflow-visible lg:h-[400px]"
        style={{ 
          background: 'linear-gradient(to right, rgba(11, 25, 47, 1), rgba(8, 181, 255, 1))',
          minHeight: 'clamp(250px, 14vw, 400px)',
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
        <div className="relative flex items-end " style={{ marginBottom: 0, paddingBottom: 0 }}>
          {/* Intersect Background Image */}
          <div
            className="relative overflow-hidden"
            style={{
              width: 'clamp(400px, 31.25vw, 600px)',
              height: 'clamp(40px, 3.2vw, 64px)',
              background: '#FFED00',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)',
              transform: 'scaleY(-1)'
            }}
          >
            {/* Text and Arrow Overlay - Centered in the image */}
            <div
              className="absolute inset-0 flex items-center justify-center gap-3 px-4 md:px-6"
              style={{ transform: 'scaleY(-1)' }}
            >
              <span 
                className="text-black font-bold text-center"
                style={{ fontSize: 'clamp(0.875rem, 0.938vw, 1.125rem)', letterSpacing: '-0.02em' }}
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

      {/* Left Side - Testimonial Content - Independent from left edge */}
      <div className="relative z-10" style={{ 
        minHeight: 'clamp(250px, 14vw, 271px)',
        paddingTop: 'clamp(2rem, 3vw, 4rem)',
        paddingBottom: 'clamp(2rem, 3vw, 4rem)'
      }}>
        {/* Desktop View */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 flex flex-col justify-center text-white" style={{ 
          paddingLeft: 'clamp(1rem, 4.68vw, 4rem)',
          transform: 'translateY(110px)'
        }}>
          <div className="space-y-4" style={{ maxWidth: 'clamp(280px, 50vw, 967px)' }}>
            <p 
              className="text-white"
              style={{
                fontWeight: 400,
                fontSize: 'clamp(1rem, 2.64vw, 2.25rem)',
                lineHeight: '100%',
                letterSpacing: '-0.04em'
              }}
            >
              "With Artivo, you don't have to worry about in-house development. Skip the overheads and let them bring your ideas to life."
            </p>
            
            <div className="space-y-1">
              <p 
                className="text-white font-medium"
                style={{ 
                  fontSize: 'clamp(0.875rem, 1.46vw, 1.25rem)',
                  lineHeight: '100%',
                  letterSpacing: '-0.04em'
                }}
              >
                Paula
              </p>
              
              <p 
                className="text-white"
                style={{ 
                  fontSize: 'clamp(0.875rem, 1.46vw, 1.25rem)',
                  lineHeight: '100%',
                  letterSpacing: '-0.04em'
                }}
              >
                Product Strategy, LAMY
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden px-4 sm:px-6 md:px-8 text-white" style={{ 
          paddingTop: 'clamp(2rem, 3vw, 4rem)'
        }}>
          <div className="space-y-4">
            <p 
              className="text-white text-xl md:text-2xl"
              style={{
                fontWeight: 400,
                lineHeight: '100%',
                letterSpacing: '-0.04em'
              }}
            >
              "With Artivo, you don't have to worry about in-house development. Skip the overheads and let them bring your ideas to life."
            </p>
            
            <div className="space-y-1">
              <p className="text-sm sm:text-base md:text-lg text-white font-medium">
                Paula
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-white">
                Product Strategy, LAMY
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile - Bottom Right Content - Outside container to reach edge */}
      <div className="lg:hidden absolute bottom-0 right-0 z-20" style={{ bottom: 0, marginBottom: 0, paddingBottom: 0 }}>
        <div
          className="relative overflow-hidden"
          style={{
            width: 'clamp(300px, 80vw, 400px)',
            height: 'clamp(30px, 7vw, 46px)',
            background: '#FFED00',
            clipPath: 'polygon(0 0, 100% 0, 10% 100%, 0% 100%)',
            transform: 'scaleX(-1)'
          }}
        >
          {/* Text and Arrow Overlay - Centered in the image */}
          <div
            className="absolute inset-0 flex items-center justify-center gap-2 px-4 md:px-6"
            style={{ transform: 'scaleX(-1)' }}
          >
            <span className="text-black font-bold text-xs sm:text-sm md:text-base text-center">
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
    </section>
  );
};
