import React from 'react';
import Image from 'next/image';

export const ProductFeaturesSection = () => {
  return (
    <section className="pt-0 pb-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-5 gap-3">
          
          {/* Image 1 - Left Column (Full Height - Spans 2 rows) */}
          <div className="row-span-2">
            <div className="relative h-full w-full">
              <Image
                src="/New folder/Rectangle 61.png"
                alt="Product Feature 1"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Image 2 - Middle Top - Takes 2 columns */}
          <div className="col-span-2">
            <div className="relative h-96 w-full">
              <Image
                src="/New folder/Rectangle 56.png"
                alt="Product Feature 2"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Image 3 - Right Top */}
          <div className="col-span-2">
            <div className="relative h-96 w-full">
              <Image
                src="/New folder/Rectangle 58.png"
                alt="Product Feature 4"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Image 4 - Middle Bottom - Takes 2 columns */}
          <div className="col-span-2">
            <div className="relative h-96 w-full">
              <Image
                src="/New folder/Rectangle 57.png"
                alt="Product Feature 3"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Image 5 - Right Bottom */}
          <div className="col-span-2">
            <div className="relative h-96 w-full">
              <Image
                src="/New folder/Rectangle 60.png"
                alt="Product Feature 5"
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

