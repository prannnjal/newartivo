import React from "react";
import Image from "next/image";

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title and Navigation */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Testimonials...
          </h2>
          
          {/* Navigation Controls */}
          <div className="flex space-x-3">
            <button className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-300">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-12 h-12 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors duration-300">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4">
              <Image
                src="/why-artivo/Frame 122.svg"
                alt="Quote Icon"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            
            {/* Testimonial Text */}
            <div className="pt-6">
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                At Artivo, we believe every great idea deserves the chance to become a reality. Your vision is the starting point – our mission is to shape it into a precise, functional, and market-ready solution. By combining creativity with engineering excellence, we bridge the gap between concept and execution, ensuring your goals are met with innovation, efficiency, and impact.
              </p>
              
              {/* Separator Line */}
              <div className="w-3/4 h-px bg-gray-200 mb-4"></div>
              
              {/* Author Information */}
              <div className="mb-4">
                <h3 className="text-gray-800 font-semibold text-lg mb-1">Osvaldo Vallati</h3>
                <p className="text-gray-600 text-base">Research & Development Engineer, Sandvik</p>
              </div>
            </div>
            
            {/* Avatar Placeholder */}
            <div className="absolute bottom-2 right-2 w-12 h-12 bg-black rounded-full"></div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4">
              <Image
                src="/why-artivo/Frame 122.svg"
                alt="Quote Icon"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            
            {/* Testimonial Text */}
            <div className="pt-6">
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                At Artivo, we believe every great idea deserves the chance to become a reality. Your vision is the starting point – our mission is to shape it into a precise, functional, and market-ready solution. By combining creativity with engineering excellence, we bridge the gap between concept and execution, ensuring your goals are met with innovation, efficiency, and impact.
              </p>
              
              {/* Separator Line */}
              <div className="w-3/4 h-px bg-gray-200 mb-4"></div>
              
              {/* Author Information */}
              <div className="mb-4">
                <h3 className="text-gray-800 font-semibold text-lg mb-1">Osvaldo Vallati</h3>
                <p className="text-gray-600 text-base">Research & Development Engineer, Sandvik</p>
              </div>
            </div>
            
            {/* Avatar Placeholder */}
            <div className="absolute bottom-2 right-2 w-12 h-12 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
