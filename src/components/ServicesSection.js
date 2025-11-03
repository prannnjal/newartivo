import React from 'react';
import Image from 'next/image';

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "INDUSTRIAL DESIGN",
      description: "Transforming bold ideas into functional, market-ready products with timeless aesthetics.",
      image: "/New folder (2)/1.png",
      showArrow: true
    },
    {
      id: 2,
      title: "ELECTRONIC DESIGN",
      description: "Crafting intelligent systems that power modern, reliable, and efficient innovations.",
      image: "/New folder (2)/2.png",
      showArrow: true
    },
    {
      id: 3,
      title: "SUSTAINABLE DESIGN",
      description: "Building future-focused solutions using eco-friendly materials and conscious engineering.",
      image: "/New folder (2)/Frame .png",
      showArrow: true
    },
    {
      id: 4,
      title: "PROTOTYPE DESIGNING",
      description: "Turning concepts into tangible prototypes to validate design, performance, and usability.",
      image: "/New folder (2)/4.png",
      showArrow: true
    },
    {
      id: 5,
      title: "INDUSTRIAL TESTING + VALIDATION",
      description: "Ensuring your product meets every benchmark through precision testing and feedback.",
      image: "/New folder (2)/5.png",
      showArrow: true
    },
    {
      id: 6,
      title: "MANUFACTURING OPTIMISATION",
      description: "Streamlining production for cost efficiency, quality, and scalable manufacturing success.",
      image: "/New folder (2)/Frame 198.png",
      showArrow: true
    },
    {
      id: 7,
      title: "PRODUCT PACKAGING",
      description: "Designing sustainable, premium packaging that enhances the product and brand experience.",
      image: "/New folder (2)/7.png",
      showArrow: true
    },
    {
      id: 8,
      title: "START-UP SERVICES",
      description: "Empowering innovators with full R&D support to launch their next big idea.",
      image: "/New folder (2)/8.png",
      showArrow: true
    },
    {
      id: 9,
      title: "LAUNCH + EXPANSION",
      description: "We can help you showcase your vision to the world with powerful strategies and lasting impact.",
      image: "/New folder (2)/Frame 41 (1).png",
      showArrow: true
    }
  ];

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 md:gap-1 lg:gap-1.5">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="relative aspect-[4/3] overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={service.id <= 3}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              
              {/* Section Number - Top Right */}
              <div className="absolute top-5 right-5 md:top-6 md:right-6 lg:top-7 lg:right-7 z-20">
                <span 
                  className="font-light leading-none text-white"
                  style={{ 
                    fontSize: 'clamp(48px, 6vw, 80px)',
                    WebkitTextStroke: '1.5px white',
                    color: 'transparent',
                    textStroke: '1.5px white'
                  }}
                >
                  /{service.id}
                </span>
              </div>

              {/* Right Edge Arrow - Only for specific services */}
              {service.showArrow && (
                <div className="absolute top-1/2 right-3 md:right-4 lg:right-5 -translate-y-1/2 z-20">
                  <svg 
                    className="text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    style={{ width: '32px', height: '32px' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
              
              {/* Content - Positioned */}
              <div className="absolute z-20" style={{ top: '20px', left: '26px' }}>
                <h3 
                  className="text-white"
                  style={{ 
                    width: '169px',
                    height: '72px',
                    fontWeight: 600,
                    fontSize: '30px',
                    lineHeight: '100%',
                    letterSpacing: '-0.04em'
                  }}
                >
                  {service.title}
                </h3>
              </div>
              
              <div className="absolute z-20" style={{ top: '102px', left: '26px' }}>
                <p 
                  className="text-white"
                  style={{ 
                    width: '384px',
                    height: '38px',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0'
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
