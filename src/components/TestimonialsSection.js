"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

export const TestimonialsSection = () => {
  const testimonials = useMemo(
    () => [
      {
        quote:
          "Artivo designed and launched our trailer latching system with utmost precision and creativity. Their team understood our vision from day one and delivered beyond expectations. Professional, reliable, and deeply passionate about innovation — truly impressive!",
        author: "James",
        role: "Business Development Manager, Powertorque Electronics",
      },
      {
        quote:
          "Working with Artivo was seamless from start to finish. They transformed our ideas into market-ready solutions that exceeded expectations. Their attention to detail, design thinking, and commitment make them our go-to partner.",
        author: "Fiona",
        role: "Product Specialist, Derwent Tools",
      },
      {
        quote:
          "Honestly, the Artivo team blew us away. They turned our napkin sketch into a fully working prototype in no time. Super easy to work with and always a step ahead.",
        author: "Eric",
        role: "Head of Sales (APAC), Staedtler Tools",
      },
      {
        quote:
          "Honest approach, honest results. Artivo has surely given us the product our business needed. Their 2x product design strategy has grown our sales since last quarter. Great work!",
        author: "Peter",
        role: "Head of Hydromechanics, Grizzley Pumps",
      },
      {
        quote:
          "Artivo just gets it. We didn’t have to over-explain — they understood our vision instantly. The final service launched looked stunning and worked flawlessly. Can’t wait to collaborate again!",
        author: "Saviaul",
        role: "Chief Operations Officer, Ezmo Industries",
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 2;

  const visibleTestimonials = useMemo(() => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i += 1) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  }, [currentIndex, testimonials]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - itemsPerView + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerView) % testimonials.length);
  };

  return (
    <section className="bg-white" style={{ marginTop: 'clamp(2rem, 4vw, 4rem)', paddingBottom: 'clamp(2rem, 4vw, 4rem)' }}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title and Navigation */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Testimonials...
          </h2>
          
          {/* Navigation Controls */}
          <div className="flex space-x-3">
            <button
              type="button"
              className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-300"
              onClick={handlePrev}
              aria-label="Show previous testimonials"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              className="w-12 h-12 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors duration-300"
              onClick={handleNext}
              aria-label="Show next testimonials"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch" style={{ gap: 'clamp(0.75rem, 2vw, 1.5rem)' }}>
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.author}-${(currentIndex + index) % testimonials.length}`}
              className="testimonial-card bg-white border border-gray-200 rounded-lg p-8 relative h-full flex flex-col"
            >
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
              <div className="pt-6 flex-1">
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {testimonial.quote}
                </p>

                {/* Separator Line */}
                <div className="w-3/4 h-px bg-gray-200 mb-4"></div>

                {/* Author Information */}
                <div className="mb-4">
                  <h3 className="text-gray-800 font-semibold text-lg mb-1">{testimonial.author}</h3>
                  <p className="text-gray-600 text-base">{testimonial.role}</p>
                </div>
              </div>

              {/* Avatar Placeholder */}
              <div className="absolute bottom-2 right-2 w-12 h-12 bg-black rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .testimonial-card {
          opacity: 0;
          transform: translateY(12px);
          animation: fadeInUp 0.5s ease forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
