import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';

import { ContactSection } from '@/components/ContactSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';

export default function GPHybridBike() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/New folder/Hero Image.png"
            alt="GP Hybrid Bike Hero"
            fill
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        {/* Testimonial Text - Bottom Left */}
        <div className="absolute bottom-10 left-8 z-20 max-w-2xl">
          <blockquote className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4 drop-shadow-lg">
            "The strength of any business lies in its ability to innovate. That's why we choose Artivo."
          </blockquote>
          <div className="text-white">
            <p className="font-semibold text-lg">Calvin Purdue</p>
            <p className="text-white/90 text-base">General Manager, ORAEVEN Bikes</p>
          </div>
        </div>
      </section>

      {/* GP Hybrid Bike Details Section */}
      <section 
        className="relative py-16 overflow-hidden"
        style={{ background: 'linear-gradient(to right, rgba(11, 25, 47, 1), rgba(205, 64, 11, 1))' }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/2 11.png"
            alt="Background Pattern"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Arrow Icon - Top Right */}
        <div className="absolute top-6 right-6 z-10">
          <Image
            src="/New folder/Next Arrow
            (1).svg"
            alt="Arrow Icon"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>

        <div className="container mx-auto px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Heading and Description */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-normal text-white leading-tight">
                <span className="font-bold">GP</span> Hybrid Electric Bike
              </h1>
              
              <p className="text-white/90 text-base leading-relaxed">
                Artivo was commissioned to design and develop a minimalistically powerful electric bike, ready to conquer most road conditions with comfort features, for first-user and end-user market.
              </p>
            </div>
            
            {/* Right Side - Project Details */}
            <div className="space-y-3">
              <div className="border-b border-white/30 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-xs uppercase tracking-wide">Brand</span>
                  <span className="text-white font-semibold text-sm">ORAEVEN Bikes</span>
                </div>
              </div>
              
              <div className="border-b border-white/30 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-xs uppercase tracking-wide">Specialisation</span>
                  <span className="text-white font-semibold text-sm">Full Development</span>
                </div>
              </div>
              
              <div className="border-b border-white/30 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-xs uppercase tracking-wide">Completion</span>
                  <span className="text-white font-semibold text-sm">6 months</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Product and Conceptualisation Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto pl-0 pr-8 lg:pr-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Product Images */}
            <div className="space-y-6">
              {/* Product Image a.png */}
              <div className="relative w-full h-[500px] z-10">
                <Image
                  src="/product/a.png"
                  alt="Product Design"
                  fill
                  className="object-contain object-left"
                />
                {/* Arrow Icon - Top Right */}
                <div className="absolute top-4 right-4 z-20">
                  <Image
                    src="/product/Next Arrow.svg"
                    alt="Arrow Icon"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Product Image d.png */}
              <div className="relative w-full h-[600px] lg:h-[800px] -mt-44">
                <Image
                  src="/product/d.png"
                  alt="Product Detail"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            
            {/* Right Column - Conceptualisation Text and Image Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Text Content */}
              <div className="space-y-2 mt-20">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Conceptualisation
                </h2>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our dedicated team of designers shared multiple strategies to begin this project and in-doing-so, we were able to define a creative theme that matched our client's brief.
                </p>
              </div>
              
              {/* Image b.png */}
              <div className="relative w-full h-[400px] -mt-20">
                <Image
                  src="/product/b.png"
                  alt="Conceptualisation Design"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Product Detail Section - c.png */}
      <section className="pt-0 pb-12 bg-white -mt-244 relative">
        <div className="container mx-auto pl-0 pr-0">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left - Empty space */}
            <div className="lg:col-span-2"></div>
            
            {/* Right - Images covering entire right section */}
            <div className="lg:col-span-3 space-y-0 flex flex-col">
              {/* c.png Image */}
              <div className="relative w-[650px] h-[506px]">
                <Image
                  src="/product/c.png"
                  alt="Product Detail"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Designer Sketching Image - Extends from d.png end to right edge */}
        <div className="relative w-[50vw] h-[400px] lg:h-[450px] ml-[50%]">
          <Image
            src="/product/freepik__show-an-industrial-designer-sketching-the-bicycle-__62156 1.png"
            alt="Industrial Designer Sketching"
            fill
            className="object-contain object-right"
          />
        </div>
      </section>

   

      {/* Contact Section */}
      <ContactSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

