import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { InnovativeAffiliationsSection } from '@/components/InnovativeAffiliationsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';

function FooterStyleSection() {
  return (
    <section
      className="py-12 relative"
      style={{ background: 'linear-gradient(to right, rgba(25, 88, 99, 1),rgba(11, 25, 47, 1))' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/2 11.png"
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Large decorative line drawing image - right side */}
      <div className="absolute right-0 top-1/2 -translate-y-[2%] z-10 pointer-events-none">
        <div className="relative w-[240px] sm:w-[300px] md:w-[340px] lg:w-[390px] h-[160px] sm:h-[200px] md:h-[240px] lg:h-[290px]">
          <Image
            src="/about/Artivo - GP Line Drawings 1.png"
            alt="Artivo Line Drawing Large Decorative"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-center">
          {/* Left-aligned Quote Content */}
          <div className="lg:col-span-3 text-left max-w-xl">
            <p className="text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-snug">
              “Design is not just what it looks like and feels like.<br />
              Design is how it works.”
            </p>
            <div className="mt-3">
              <span className="text-white text-base">Steve Jobs</span><br />
              <span className="text-gray-200 text-sm">Co-founder, Apple Inc.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/1.png"
            alt="About Hero"
            fill
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10" />
        {/* Hero Text Content */}
        <div className="absolute inset-0 z-20 flex items-end justify-start">
          <div>
            <blockquote className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold text-left max-w-3xl ml-32 mb-10 drop-shadow-lg">
              “There is good design, then there is better design.”<br />
              At Artivo, we aim for the best design.”
            </blockquote>
            <div className="ml-32 mb-16 mt-2 leading-tight">
              <span className="text-white text-base font-normal">Rudra</span><br />
              <span className="text-gray-200 text-sm font-light">Director of Design, Artivo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-2 gap-x-1 text-center">
          {/* Row 1 */}
          <div>
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-[#0074CB]">10+</div>
            <div className="text-xs text-gray-700 mt-1">Years of Experience</div>
          </div>
          <div>
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-[#0074CB]">1200+</div>
            <div className="text-xs text-gray-700 mt-1">Projects Completed</div>
          </div>
          <div>
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-[#0074CB]">$6.0m</div>
            <div className="text-xs text-gray-700 mt-1">Saved on R&D overheads</div>
          </div>
          <div>
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">12</div>
            <div className="text-xs text-gray-700 mt-1">Design Accreditations</div>
          </div>
          <div>
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">55</div>
            <div className="text-xs text-gray-700 mt-1">Team of experts</div>
          </div>
          <div>
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">45+</div>
            <div className="text-xs text-gray-700 mt-1">Industry-leading tools</div>
          </div>
          {/* Row 2 */}
          <div>
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">&lt; 24 wks</div>
            <div className="text-xs text-gray-700 mt-1">Average Project Duration</div>
          </div>
          <div>
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-[#0074CB]">98%</div>
            <div className="text-xs text-gray-700 mt-1">Efficiency Rating</div>
          </div>
          <div>
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-[#0074CB]">94%</div>
            <div className="text-xs text-gray-700 mt-1">Success Rate</div>
          </div>
          <div>
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-[#0074CB]">10+</div>
            <div className="text-xs text-gray-700 mt-1">Global Establishments</div>
          </div>
          <div>
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">11.2%</div>
            <div className="text-xs text-gray-700 mt-1">EBITDA Ratio</div>
          </div>
          <div>
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">7.25%</div>
            <div className="text-xs text-gray-700 mt-1">CAGR in ANZ Market</div>
          </div>
          {/* Row 3 */}
          <div>
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">18,000+</div>
            <div className="text-xs text-gray-700 mt-1">Social Members</div>
          </div>
          <div>
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">15,000 sqm</div>
            <div className="text-xs text-gray-700 mt-1">Prototyping Space</div>
          </div>
        </div>
      </section>

      {/* Footer-styled Section with your content goes here */}
      <FooterStyleSection />

      {/* Our Mission Section */}
      <section className="relative pt-16 pb-4 bg-white overflow-hidden">
        {/* Subtle right-side background pattern */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-10 z-0">
          <Image
            src="/about/Artivo - GP Line Drawings 1.png"
            alt="Background pattern"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mb-10">
            To transform ideas into market-ready products through exceptional design,
            engineering excellence, and manufacturing expertise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {/* Card 1 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white min-h-[220px] flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="text-gray-400 font-bold tracking-wider">/1</div>
                {/* two dots icon */}
                <div className="flex items-center space-x-2 text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />
                </div>
              </div>
              <h3 className="text-gray-800 font-semibold mb-3 text-lg">Motivation First</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pushing boundaries with cutting-edge technology and artificial intelligence tools.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white min-h-[220px] flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="text-gray-400 font-bold tracking-wider">/2</div>
                {/* clipboard icon */}
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5h6m2 0h1a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h1m2-2h6a2 2 0 012 2v0a2 2 0 01-2 2H9a2 2 0 01-2-2v0a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="text-gray-800 font-semibold mb-3 text-lg">Quality Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team is renowned for its commitment to ideation, ensuring growth and success.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white min-h-[220px] flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="text-gray-400 font-bold tracking-wider">/3</div>
                <span className="text-gray-800 font-semibold">ISO</span>
              </div>
              <h3 className="text-gray-800 font-semibold mb-3 text-lg">Industry Standards & ISOs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Maintaining the highest standards in every project to fulfil global supply chain.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white min-h-[220px] flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="text-gray-400 font-bold tracking-wider">/4</div>
                {/* growth arrow icon */}
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17l6-6 4 4 7-7" />
                </svg>
              </div>
              <h3 className="text-gray-800 font-semibold mb-3 text-lg">Organic Growth & Reach</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We want to reach maximum clients with proceeding reputation and market growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Collage Section */}
      <section className="pt-0 pb-12 bg-white">
        <div className="w-full px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 items-stretch">
            {/* Left column: two stacked images */}
            <div className="grid grid-rows-2 gap-1 lg:col-span-1">
              <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-[290px] overflow-hidden">
                <Image
                  src="/34.png"
                  alt="Showcase A"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-[290px] overflow-hidden">
                <Image
                  src="/16.png"
                  alt="Showcase B"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right column: one tall image spanning 2 columns */}
            <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[584px] lg:col-span-2 overflow-hidden">
              <Image
                src="/30.png"
                alt="Showcase Main"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Background + decorative image section (with text) */}
      <section
        className="pt-0 pb-12 relative -mt-11"
        style={{ background: 'linear-gradient(to right, rgba(25, 88, 99, 1),rgba(11, 25, 47, 1))' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/2 11.png"
            alt="Footer Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Decorative image (right) */}
        <div className="absolute right-0 top-1/2 -translate-y-[2%] z-10 pointer-events-none">

        </div>
        {/* Bottom-center intersect image with overlaid CTA text */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 sm:-bottom-20 pointer-events-none">
          <div className="relative w-[360px] sm:w-[440px] md:w-[520px] h-[120px] sm:h-[150px] md:h-[180px]">
            <Image
              src="/about/Intersect (1).png"
              alt="Intersect Decorative"
              fill
              className="object-contain"
              priority
            />
            {/* CTA overlay centered on the image */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="flex items-center gap-3 text-white font-semibold text-sm sm:text-base whitespace-nowrap">
                <span>CLICK HERE TO BOOK A FREE CONSULTATION</span>
                <Image
                  src="/why-artivo/Group 18.svg"
                  alt="CTA Arrow"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Text */}
        <div className="relative z-20 container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl">
            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-6">Our Values</h2>

            {/* Mobile: single column */}
            <div className="grid grid-cols-1 gap-6 md:hidden">
              {/* Value 1 */}
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">Client brief drives innovation</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  We start working on a project only when the client has officially signed & approved a comprehensive design brief that outlines their requirements, deliverables, expectations and vision.
                </p>
              </div>
              {/* Value 2 */}
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">Improvisation is necessary</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  Our team strongly believes that innovation must have multiple versions for best results. This is why our projects can have multiple iterations with running changes that surpass client expectations.
                </p>
              </div>
              {/* Value 3 */}
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">Innovation that leads</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  At Artivo, we believe that true innovation goes beyond just creativity. It requires a deep understanding of market needs and user-centric design, to fulfil market supply-demand.
                </p>
              </div>
            </div>

            {/* Desktop: three columns with '>' separators between */}
            <div className="hidden md:flex md:items-stretch md:gap-6">
              {/* Col 1 */}
              <div className="flex-1">
                <h3 className="text-white text-xl font-semibold mb-2">Client brief drives innovation</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  We start working on a project only when the client has officially signed & approved a comprehensive design brief that outlines their requirements, deliverables, expectations and vision.
                </p>
              </div>
              {/* Separator */}
              <div className="self-stretch flex items-center justify-center px-2 select-none">
                <span className="text-white text-2xl font-bold">&gt;</span>
              </div>
              {/* Col 2 */}
              <div className="flex-1">
                <h3 className="text-white text-xl font-semibold mb-2">Improvisation is necessary</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  Our team strongly believes that innovation must have multiple versions for best results. This is why our projects can have multiple iterations with running changes that surpass client expectations.
                </p>
              </div>
              {/* Separator */}
              <div className="self-stretch flex items-center justify-center px-2 select-none">
                <span className="text-white text-2xl font-bold">&gt;</span>
              </div>
              {/* Col 3 */}
              <div className="flex-1">
                <h3 className="text-white text-xl font-semibold mb-2">Innovation that leads</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  At Artivo, we believe that true innovation goes beyond just creativity. It requires a deep understanding of market needs and user-centric design, to fulfil market supply-demand.
                </p>
              </div>
              {/* Trailing Separator */}
              <div className="self-stretch flex items-center justify-center px-2 select-none">
                <span className="text-white text-2xl font-bold">&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-screen bicycle image section */}
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src="/about/freepik__make-render-of-the-bicycle-in-the-reference-image-__90791 1.png"
          alt="Bicycle Render"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        {/* Left-corner text */}
        <div className="absolute inset-0 z-10 flex items-end justify-start">
          <div className="pb-10 pl-8 pr-8 max-w-2xl">
            <h3 className="text-white text-3xl sm:text-4xl font-bold mb-4">Tested to Succeed.</h3>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              Our R&D process is built on precision, experimentation, and collaboration, helping businesses transform bold ideas into market-ready products faster, smarter, and more sustainably.
            </p>
          </div>
        </div>
        {/* Bottom-right decorative image with overlaid CTA */}
        <div className="absolute -bottom-4 sm:-bottom-19 right-0 z-10">
          <div className="relative w-[260px] sm:w-[320px] md:w-[380px] h-[120px] sm:h-[150px] md:h-[180px]">
            {/* Decorative image */}
            <Image
              src="/about/as.png"
              alt="Decorative Bottom Right"
              fill
              className="object-contain"
              priority
            />

            {/* CTA overlay centered on the image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto z-20">
              <div className="flex items-center gap-3 text-white font-semibold text-sm sm:text-base whitespace-nowrap  px-3 py-1 rounded-full">
                <span>CLICK HERE AND GET YOUR R&amp;D SCORE</span>
                <Image
                  src="/why-artivo/Group 18.svg"
                  alt="CTA Arrow"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>


      </section>

        {/* Innovative Affiliations Section */}
        <InnovativeAffiliationsSection />

      {/* Contact Section */}
      <ContactSection />

    

      {/* Testimonials Section */}
      <TestimonialsSection />

      <Footer />
    </div>
  );
}
