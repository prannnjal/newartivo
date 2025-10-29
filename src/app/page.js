import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { DesignSection } from "@/components/DesignSection";
import { YellowStrip } from "@/components/YellowStrip";
import { ProductShowcaseSection } from "@/components/ProductShowcaseSection";
import { OurSpecialitiesSection } from "@/components/OurSpecialitiesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { VisionsMissionsSection } from "@/components/VisionsMissionsSection";
import { OurWorkSection } from "@/components/OurWorkSection";
import { ProductFeaturesSection } from "@/components/ProductFeaturesSection";
import { ViewAllProjectsStrip } from "@/components/ViewAllProjectsStrip";
import { InnovativeAffiliationsSection } from "@/components/InnovativeAffiliationsSection";
import { ContactForm } from "@/components/ContactForm";
import { GearIcon, DocumentIcon, UserIcon, AwardIcon, QuoteIcon } from "@/components/Icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Design Section */}
      <DesignSection />

      {/* Yellow Strip */}
      <YellowStrip />

      {/* Product Showcase Section */}
      <ProductShowcaseSection />

      {/* Our Specialities Section */}
          <OurSpecialitiesSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Visions & Missions Section */}
          <VisionsMissionsSection />

      {/* Our Work Section */}
          <OurWorkSection />

          {/* Product Features Section */}
          <ProductFeaturesSection />

          {/* View All Projects Strip */}
          <ViewAllProjectsStrip />

          {/* Innovative Affiliations Section */}
          <InnovativeAffiliationsSection />

    </div>
  );
}
