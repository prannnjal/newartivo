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
import { Footer } from "@/components/Footer";
import { GearIcon, DocumentIcon, UserIcon, AwardIcon, QuoteIcon } from "@/components/Icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* The R&D Lifecycle Banner */}
      <section className="relative w-full h-[72px] overflow-hidden">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(12, 25, 47, 1), rgba(10, 103, 151, 1), rgba(26, 27, 27, 1))'
          }}
        />
        
        {/* Subtle darker horizontal line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-50" />
        
        {/* Centered Text */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="font-light tracking-wide text-center px-4"
              style={{ 
                color: 'rgba(255, 255, 255, 1)',
                fontSize: '30px'
              }}>
            The R&D Lifecycle
          </h2>
        </div>
      </section>

      {/* Full Screen Gradient Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(11, 25, 47, 1), rgba(26, 26, 26, 1))'
          }}
        />
        {/* Curve Effect Overlay */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/Grids/Curve Effect.png"
            alt="Curve Effect"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        
        {/* R&D Lifecycle Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center h-full">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Central Symbols and Logo */}
            <div className="relative z-10">
              <Image
                src="/Grids/Artivo - Symbols (7) 1.png"
                alt="Artivo Symbols"
                width={220}
                height={220}
                className="object-contain"
              />
              {/* Logo Centered on Symbols */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/Grids/Artivo Logo - White (1) 1.png"
                  alt="Artivo Logo"
                  width={75}
                  height={75}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Process Steps - Arranged in Circle around the image */}
            {/* Step 1 - Top Center */}
            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 text-center max-w-[280px]">
              <div className="flex justify-center mb-2">
                <span className="text-4xl sm:text-5xl font-light" style={{ WebkitTextStroke: '1.5px white', color: 'transparent', textStroke: '1.5px white' }}>/1</span>
              </div>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-2">Ideation & Research</h3>
              <p className="text-white text-xs sm:text-sm font-normal">Building strong foundations with you through creative exploration</p>
            </div>

            {/* Step 2 - Right Middle */}
            <div className="absolute top-[42%] right-[15%] translate-y-[-50%] text-center max-w-[280px]">
              <div className="flex justify-center mb-2">
                <span className="text-4xl sm:text-5xl font-light" style={{ WebkitTextStroke: '1.5px white', color: 'transparent', textStroke: '1.5px white' }}>/2</span>
              </div>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-2">Design & Develop MVP</h3>
              <p className="text-white text-xs sm:text-sm font-normal">Transforming your ideas into viable products for pre-launch statistics and estimates</p>
            </div>

            {/* Step 3 - Bottom Right */}
            <div className="absolute bottom-[18%] right-[18%] text-center max-w-[280px]">
              <div className="flex justify-center mb-2">
                <span className="text-4xl sm:text-5xl font-light" style={{ WebkitTextStroke: '1.5px white', color: 'transparent', textStroke: '1.5px white' }}>/3</span>
              </div>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-2">Testing & Validations</h3>
              <p className="text-white text-xs sm:text-sm font-normal">Ensuring viable concepts perform under real conditions and scenarios</p>
            </div>

            {/* Step 4 - Bottom Left */}
            <div className="absolute bottom-[18%] left-[18%] text-center max-w-[280px]">
              <div className="flex justify-center mb-2">
                <span className="text-4xl sm:text-5xl font-light" style={{ WebkitTextStroke: '1.5px white', color: 'transparent', textStroke: '1.5px white' }}>/4</span>
              </div>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-2">Manufacture Ready</h3>
              <p className="text-white text-xs sm:text-sm font-normal">We prepare your product for mass production and get all processes defined for you</p>
            </div>

            {/* Step 5 - Left Middle */}
            <div className="absolute top-[42%] left-[15%] translate-y-[-50%] text-center max-w-[280px]">
              <div className="flex justify-center mb-2">
                <span className="text-4xl sm:text-5xl font-light" style={{ WebkitTextStroke: '1.5px white', color: 'transparent', textStroke: '1.5px white' }}>/5</span>
              </div>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-2">Bring it to world!</h3>
              <p className="text-white text-xs sm:text-sm font-normal">Based on your requirements, we help you launch your product successfully!</p>
            </div>
          </div>

          {/* Yellow Call-to-Action Button */}
          <div className="absolute bottom-0 left-0 right-0 z-30">
            <button className="relative w-full max-w-2xl mx-auto  text-black font-bold py-4 px-6 sm:px-8 flex items-center justify-center gap-3 transition-colors rounded-sm overflow-hidden">
              {/* Intersect Background */}
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <Image
                  src="/Intersect.png"
                  alt="Intersect Background"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="relative z-10 text-base sm:text-lg tracking-wide">CLICK HERE AND GET YOUR R&D SCORE</span>
              <Image
                src="/why-artivo/Group 18.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="relative z-10 object-contain"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Our Specialities Section */}
      <OurSpecialitiesSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Our Work Section */}
      <OurWorkSection />

     
      {/* Product Showcase Section */}
      <ProductShowcaseSection />

       {/* Design Section */}
       <DesignSection />

{/* Yellow Strip */}
<YellowStrip />


          {/* Visions & Missions Section */}
          <VisionsMissionsSection />

          {/* Product Features Section */}
          <ProductFeaturesSection />

          {/* View All Projects Strip */}
          <ViewAllProjectsStrip />

          {/* Innovative Affiliations Section */}
          <InnovativeAffiliationsSection />

          {/* Footer */}
          <Footer />
    </div>
  );
}
