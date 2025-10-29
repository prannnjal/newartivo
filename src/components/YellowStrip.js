import React from 'react';
import Image from 'next/image';

export const YellowStrip = () => {
  return (
    <section className="h-[45px] flex items-center" style={{ backgroundColor: 'rgba(255, 242, 8, 1)' }}>
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-black text-[16px] font-bold tracking-wide">
            DISCOVER OUR PROCESS
          </h2>
          <Image
            src="/Group 17.svg"
            alt="Process Icon"
            width={20}
            height={20}
            className="text-black"
          />
        </div>
      </div>
    </section>
  );
};
