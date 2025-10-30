import React from 'react';
import Image from 'next/image';

export const ProductFeaturesSection = () => {
  return (
    <section className="pt-1 pb-20 bg-white">
      <div className="w-full px-0">
        <div className="grid grid-cols-2 gap-0">
          
          {/* Image 56 - Left 50% */}
          <div className="relative w-full h-[500px]">
            <Image
              src="/New folder/Rectangle 56.png"
              alt="Product Feature 1"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Image 57 - Right 50% */}
          <div className="relative w-full h-[500px]">
            <Image
              src="/New folder/Rectangle 57.png"
              alt="Product Feature 2"
              fill
              className="object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

