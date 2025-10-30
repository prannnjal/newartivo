import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { WhyArtivoContentSection } from '@/components/WhyArtivoContentSection';
import { TestimonialFeaturesSection } from '@/components/TestimonialFeaturesSection';
import { ContactSection } from '@/components/ContactSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';

export default function WhyArtivo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image
            src="/New folder/Frame 11.png"
            alt="Why Artivo Hero"
            fill
            className="object-cover"
          />
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Hero content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center max-w-4xl px-8">
            {/* Text content removed */}
          </div>
        </div>
      </section>

      {/* Why Artivo Content Section */}
      <WhyArtivoContentSection />

      {/* Testimonial and Features Section */}
      <TestimonialFeaturesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
