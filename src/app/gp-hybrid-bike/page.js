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
          <blockquote 
            className="text-white text-xl sm:text-2xl lg:text-[36px] mb-4 drop-shadow-lg"
            style={{ 
              fontWeight: 700,
              lineHeight: '100%',
              letterSpacing: '-0.04em'
            }}
          >
            "The strength of any business lies in its ability to innovate. That's why we choose Artivo."
          </blockquote>
          <div className="text-white space-y-1">
            <p 
              className="text-white text-base sm:text-lg lg:text-[20px]"
              style={{ 
                fontWeight: 500,
                lineHeight: '100%',
                letterSpacing: '-0.04em'
              }}
            >
              Calvin Purdue
            </p>
            <p 
              className="text-white text-base sm:text-lg lg:text-[20px]"
              style={{ 
                fontWeight: 500,
                lineHeight: '100%',
                letterSpacing: '-0.04em'
              }}
            >
              General Manager, ORAEVEN Bikes
            </p>
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

        <div className="container mx-auto px-8 lg:px-12 max-w-7xl xl:max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Heading and Description */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl xl:text-4xl font-normal text-white leading-tight">
                <span className="font-bold">GP</span> Hybrid Electric Bike
              </h1>
              
              <p className="text-white/90 text-base xl:text-base leading-relaxed">
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
      <section className="py-4 bg-white w-full overflow-visible">
        <div className="w-full max-w-none pl-0 pr-8 lg:pr-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Product Images */}
            <div className="space-y-4">
              {/* Product Image a.png */}
              <div className="relative w-full h-[480px] xl:h-[480px] z-10">
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
              <div className="relative w-[130%] h-[650px] lg:h-[800px] xl:h-[850px] -mt-16">
                <Image
                  src="/product/d.png"
                  alt="Product Detail"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            
            {/* Right Column - Conceptualisation Text and Image Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
              {/* Text Content */}
              <div className="space-y-2 mt-20">
                <h2 className="text-xl lg:text-2xl xl:text-2xl font-bold text-gray-900">
                  Conceptualisation
                </h2>
                
                <p className="text-gray-700 text-sm xl:text-sm leading-relaxed">
                  Our dedicated team of designers shared multiple strategies to begin this project and in-doing-so, we were able to define a creative theme that matched our client's brief.
                </p>
              </div>
              
              {/* Image b.png */}
              <div className="relative w-full h-[300px] xl:h-[320px] -mt-9">
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
      <section className="pt-0 pb-12 bg-white -mt-244 overflow-x-hidden overflow-y-visible">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl xl:max-w-[1400px] relative overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 overflow-visible">
            {/* Left - Empty space */}
            <div className="lg:col-span-2"></div>
            
            {/* Right - Images covering entire right section */}
            <div className="lg:col-span-3 space-y-0 flex flex-col items-start w-full overflow-visible -mt-4 lg:-mt-6 xl:-mt-8 relative">
              {/* c.png Image */}
              <div className="relative w-[145%] max-w-[145%] xl:max-w-[145%] h-[650px] lg:h-[850px] xl:h-[950px] -ml-[8%] -mt-16 lg:-mt-8 xl:-mt-2 overflow-visible">
                <Image
                  src="/product/c.png"
                  alt="Product Detail"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 150vw, 90vw"
                />
              </div>
               
               {/* Yellow Strip */}
               <div className="relative w-[calc(100vw-12vw)] -ml-[clamp(1rem,3vw,4rem)] mt-[clamp(0.5rem,3vh,3rem)]">
                 <Image
                   src="/why-artivo/Intersect (1).png"
                   alt="Intersect Background"
                   width={600}
                   height={120}
                   className="object-contain w-full h-auto"
                 />
                 {/* Text and Arrow Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center gap-2 px-6">
                   <span className="text-black font-bold text-sm whitespace-nowrap">
                     BRING YOUR IDEAS TO LIFE
                   </span>
                   <Image
                     src="/why-artivo/Group 18.svg"
                     alt="Arrow"
                     width={20}
                     height={20}
                     className="object-contain"
                   />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAD Modelling + Simulations Section */}
      <section className="pt-16 -mb-8 bg-white overflow-visible relative">
        <div className="container mx-auto px-0 lg:px-12 max-w-7xl xl:max-w-[1400px] relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Section - 50% width (1 column) */}
            <div className="space-y-6 pl-8 lg:pl-12">
              {/* Heading with Arrow */}
              <div className="flex items-center gap-3">
                <Image
                  src="/product/Frame 157.svg"
                  alt="Arrow Icon"
                  width={32}
                  height={32}
                  className="object-contain opacity-60"
                />
                <h2 className="text-2xl lg:text-3xl xl:text-3xl font-bold text-gray-900">
                  CAD Modelling + Simulations
                </h2>
              </div>
              
              {/* Paragraph Text */}
              <p className="text-gray-700 text-base xl:text-base leading-relaxed max-w-2xl">
                The GP Hybrid Electric Bike has been intricately assembled in 3D using componentry axis modelling, giving us{' '}
                <span className="text-[#FF7A00] font-semibold">accurate</span> Finite Element Analysis.
              </p>
              
              {/* Bike Image with Background */}
              <div className="relative h-[700px] lg:h-[800px] xl:h-[800px] overflow-visible">
                <div className="absolute w-[50vw] h-full left-[calc(-50vw+50%-2rem+12rem)] lg:left-[calc(-50vw+50%-3rem+19rem)] -top-28 lg:-top-32">
                  <Image
                    src="/product/CycleBG 1.png"
                    alt="GP Hybrid Electric Bike CAD Model"
                    fill
                    className="object-contain"
                    style={{ objectPosition: 'left center' }}
                  />
                </div>
              </div>
            </div>
            
            {/* Right Section - 50% width (1 column) */}
            <div className="space-y-6 relative">
              {/* Wireframe Image */}
              <div className="relative w-full h-[500px] lg:h-[600px] xl:h-[600px]">
                <Image
                  src="/product/1 12.png"
                  alt="Bike Wireframe Isometric View"
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Technical Specifications Block */}
              <div className="absolute bottom-0 right-0 bg-white/95 p-4 space-y-1 text-xs xl:text-xs font-medium text-gray-900">
                <div>SCALE: 1:15</div>
                <div>VIEW: ISOMETRIC</div>
                <div>ANGLE: TOP-DOWN</div>
                <div>DISPLAY: WIREFRAME</div>
                <div>TOOL: SOLIDWORKS</div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Aerodynamic Simulation Section */}
      <section className="-mt-68 pb-0 bg-white overflow-x-hidden">
  <div className="w-full max-w-none px-0">
    
    {/* Three Equal Panels */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-stretch">
      {[
        "/product/aq.png",
        "/product/freepik__show-aerodynamic-simulation-renders-of-the-bicycle__62164 2.png",
        "/product/freepik__show-aerodynamic-simulation-renders-of-the-bicycle__62164 1.png",
      ].map((src, index) => (
        <div key={index} className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[500px] flex items-center justify-center">
          <Image
            src={src}
            alt={`Aerodynamic Simulation ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>

    {/* Yellow Call-to-Action Strip */}
    <div className="w-full max-w-none bg-[#FFF208] py-3 px-6 lg:px-8 flex items-center justify-center gap-3 hover:bg-yellow-300 transition-colors duration-300 cursor-pointer">
      <span className="text-black font-bold text-base sm:text-lg lg:text-xl xl:text-xl tracking-wide text-center">
        GOT AN IDEA? LET'S INNOVATE!
      </span>
      <Image
        src="/why-artivo/Group 18.svg"
        alt="Arrow"
        width={28}
        height={28}
        className="object-contain"
      />
    </div>
  </div>
</section>

      {/* Full Screen Image Section */}
      <section className="relative w-full min-h-[400px] h-[60vh] md:h-[70vh] lg:h-screen xl:h-screen overflow-hidden">
        <div className="relative w-full h-full max-w-full xl:max-w-[2000px] mx-auto">
          <Image
            src="/product/ORAGPEB-BL - Field P1 2.png"
            alt="ORAGPEB-BL Field"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Wave Effect Overlay */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="relative w-full h-full scale-140 translate-y-12 lg:translate-y-16 xl:translate-y-16">
              <Image
                src="/product/WAVE EFFECT.png"
                alt="Wave Effect"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
          
          {/* Prototyping & Certification Content Overlay */}
          <div className="absolute top-0 left-0 z-20 p-8 lg:p-12 xl:p-12">
            <div className="max-w-4xl">
              {/* Icon and Heading */}
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/product/Frame 156.svg"
                  alt="Prototyping Icon"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <h2 className="text-2xl lg:text-3xl xl:text-3xl font-bold text-white drop-shadow-lg">
                  Prototyping & Certification
                </h2>
              </div>
              
              {/* Content */}
              <p className="text-white text-base lg:text-lg xl:text-lg leading-relaxed drop-shadow-md text-left">
                Artivo's global network of manufacturers, suppliers and distributors come to play at this stage.
                With an aim to get industrial certifications, the GP Hybrid Electric Bike passed all standards with{' '}
                <span className="text-[#FF7A00] font-semibold">accurate</span> prototyping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Collage Section */}
      <section className="h-[95vh] w-full bg-white relative z-10 flex items-center justify-center overflow-hidden mt-0.5 sm:mt-1 md:mt-1.5">
        <div className="w-full max-w-none px-0 h-full py-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0.5 sm:gap-1 md:gap-1 lg:gap-1.5 h-full w-full">
            {/* Panel 1 - Merged 1st and 2nd */}
            <div className="relative w-full h-full col-span-2 sm:col-span-2 md:col-span-2">
              <Image
                src="/Grids/Rectangle 46.png"
                alt="Merged Panel 1 and 2"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 66vw, 50vw"
              />
            </div>
            
            {/* Panel 3 - Handlebar Display Close-up */}
            <div className="relative w-full h-full">
              <Image
                src="/Grids/Rectangle 38.png"
                alt="Handlebar Display Close-up"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </div>
            
            {/* Panel 4 - Full Side Profile */}
            <div className="relative w-full h-full">
              <Image
                src="/Grids/Rectangle 47.png"
                alt="Full Side Profile"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </div>
            
            {/* Panel 5 - Handlebar Display Close-up Centered */}
            <div className="relative w-full h-full">
              <Image
                src="/Grids/Rectangle 51.png"
                alt="Handlebar Display Close-up Centered"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </div>
            
            {/* Panel 6 - Top-Down Frame/Handlebar View */}
            <div className="relative w-full h-full">
              <Image
                src="/Grids/Rectangle 50.png"
                alt="Top-Down Frame/Handlebar View"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </div>
            
            {/* Panel 7 - Merged 7th and 8th */}
            <div className="relative w-full h-full col-span-2 sm:col-span-2 md:col-span-2">
              <Image
                src="/Grids/Rectangle 52.png"
                alt="Merged Panel 7 and 8"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 66vw, 50vw"
              />
            </div>
            
            {/* Panel 9 - Merged 9th and 10th */}
            <div className="relative w-full h-full col-span-2 sm:col-span-2 md:col-span-2">
              <Image
                src="/Grids/Rectangle 53.png"
                alt="Merged Panel 9 and 10"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 66vw, 50vw"
              />
            </div>
            
            {/* Panel 11 - Merged 11th and 12th */}
            <div className="relative w-full h-full col-span-2 sm:col-span-2 md:col-span-2">
              <Image
                src="/Grids/Rectangle 49.png"
                alt="Merged Panel 11 and 12"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 66vw, 50vw"
              />
            </div>
          </div>
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

