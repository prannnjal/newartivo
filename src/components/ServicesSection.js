import React from 'react';
import Image from 'next/image';

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "INDUSTRIAL DESIGN",
      description: "Transforming bold ideas into functional, market-ready products with timeless aesthetics.",
      image: "/services/industrial-design.jpg"
    },
    {
      id: 2,
      title: "ELECTRONIC DESIGN",
      description: "Crafting intelligent systems that power modern, reliable, and efficient innovations.",
      image: "/services/electronic-design.jpg"
    },
    {
      id: 3,
      title: "SUSTAINABLE DESIGN",
      description: "Building future-focused solutions using eco-friendly materials and conscious engineering.",
      image: "/services/sustainable-design.jpg"
    },
    {
      id: 4,
      title: "PROTOTYPE DESIGNING",
      description: "Turning concepts into tangible prototypes to validate design, performance, and usability.",
      image: "/services/prototype-designing.jpg"
    },
    {
      id: 5,
      title: "INDUSTRIAL TESTING + VALIDATION",
      description: "Ensuring your product meets every benchmark through precision testing and feedback.",
      image: "/services/testing-validation.jpg"
    },
    {
      id: 6,
      title: "MANUFACTURING OPTIMISATION",
      description: "Streamlining production for cost efficiency, quality, and scalable manufacturing success.",
      image: "/services/manufacturing-optimisation.jpg"
    },
    {
      id: 7,
      title: "PRODUCT PACKAGING",
      description: "Designing sustainable, premium packaging that enhances the product and brand experience.",
      image: "/services/product-packaging.jpg"
    },
    {
      id: 8,
      title: "START-UP SERVICES",
      description: "Empowering innovators with full R&D support to launch their next big idea.",
      image: "/services/startup-services.jpg"
    },
    {
      id: 9,
      title: "LAUNCH + EXPANSION",
      description: "We can help you showcase your vision to the world with powerful strategies and lasting impact.",
      image: "/services/launch-expansion.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative h-[400px]">
              {/* Service Image */}
              <div className="relative h-56 bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                {/* Service Number - Top Right */}
                <div className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-800 shadow-sm">
                  {service.id}
                </div>
              </div>
              
              {/* Service Content */}
              <div className="p-6 relative h-[144px] flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                
                {/* Arrow - Bottom Right */}
                <div className="absolute bottom-6 right-6">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
