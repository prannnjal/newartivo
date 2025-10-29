import React from 'react';
import Image from 'next/image';

export const VisionsMissionsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Technical Drawing */}
          <div className="relative">
            <Image
              src="/Wave LED Light - Wireframe Drawings-02.png"
              alt="Technical Engineering Drawing"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Right Side - Text Content */}
          <div className="relative bg-white p-8 rounded-lg">
            {/* Decorative Arrow Icon - Top Right */}
            <div className="absolute top-4 right-4">
              <Image
                src="/New folder/Next Arrow.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            
            <div className="space-y-6">
              {/* Heading */}
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                <span className="text-black">Visions</span>{' '}
                <span className="text-blue-600">make meaningful</span>{' '}
                <span className="text-black">missions.</span>
              </h2>
              
              {/* First Paragraph */}
              <p className="text-lg text-gray-700 leading-relaxed">
                At Artivo, we believe every great idea deserves the chance to become a reality. Your vision is the starting point and our mission is to shape it into a precise, functional, and market-ready solution.
              </p>
              
              {/* Second Paragraph */}
              <p className="text-lg text-gray-700 leading-relaxed">
                By combining creativity with engineering excellence, we bridge the gap between concept and execution, ensuring your goals are met with innovation, efficiency, and impact.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
