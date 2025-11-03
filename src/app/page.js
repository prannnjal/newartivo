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
import { ContactSection } from "@/components/ContactSection";
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
      <section className="relative w-full h-12 sm:h-16 md:h-[72px] overflow-hidden">
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
          <h2 className="font-light tracking-wide text-center px-4 text-lg sm:text-xl md:text-[30px]"
              style={{ 
                color: 'rgba(255, 255, 255, 1)'
              }}>
            The R&D Lifecycle
          </h2>
        </div>
      </section>

      {/* Full Screen Gradient Section */}
      <section className="relative w-full min-h-screen overflow-hidden py-20 lg:py-0 lg:h-screen">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(11, 25, 47, 1), rgba(26, 26, 26, 1))'
          }}
        />
        {/* Curve Effect Overlay */}
        <div className="absolute inset-0 z-10 hidden lg:block">
          <Image
            src="/Grids/Curve Effect.png"
            alt="Curve Effect"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        
        {/* R&D Lifecycle Content */}
        <div className="relative z-20 flex items-center justify-center min-h-screen lg:absolute lg:inset-0">
          {/* Desktop Layout - Circle Arrangement */}
          <div className="hidden lg:block relative w-full h-full flex items-center justify-center">
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
              <div className="absolute top-[8%] left-1/2 -translate-x-1/2 text-center">
                <div className="flex justify-center mb-2">
                  <span className="text-4xl sm:text-5xl font-light" style={{ WebkitTextStroke: '1.5px white', color: 'transparent', textStroke: '1.5px white' }}>/1</span>
                </div>
                <h3 
                  className="text-white mx-auto mb-2"
                  style={{
                    width: '278px',
                    height: '36px',
                    fontWeight: 600,
                    fontSize: '30px',
                    lineHeight: '100%',
                    letterSpacing: '-0.04em',
                    textAlign: 'center'
                  }}
                >
                  Ideation & Research
                </h3>
                <p 
                  className="text-white mx-auto"
                  style={{
                    width: '319px',
                    height: '44px',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '140%',
                    letterSpacing: '0',
                    textAlign: 'center'
                  }}
                >
                  Building strong foundations with you through creative exploration
                </p>
              </div>

              {/* Step 2 - Right Middle */}
              <div className="absolute top-[42%] right-[15%] translate-y-[-50%] text-center">
                <div className="flex justify-center mb-2">
                  <span className="text-4xl sm:text-5xl font-light" style={{ WebkitTextStroke: '1.5px white', color: 'transparent', textStroke: '1.5px white' }}>/2</span>
                </div>
                <h3 
                  className="text-white mx-auto mb-2"
                  style={{
                    width: '278px',
                    height: '36px',
                    fontWeight: 600,
                    fontSize: '30px',
                    lineHeight: '100%',
                    letterSpacing: '-0.04em',
                    textAlign: 'center'
                  }}
                >
                  Design & Develop MVP
                </h3>
                <p 
                  className="text-white mx-auto"
                  style={{
                    width: '319px',
                    height: '44px',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '140%',
                    letterSpacing: '0',
                    textAlign: 'center'
                  }}
                >
                  Transforming your ideas into viable products for pre-launch statistics and estimates
                </p>
              </div>

              {/* Step 3 - Bottom Right */}
              <div className="absolute bottom-[18%] right-[18%] text-center">
                <div className="flex justify-center mb-2">
                  <span className="text-4xl sm:text-5xl font-light" style={{ WebkitTextStroke: '1.5px white', color: 'transparent', textStroke: '1.5px white' }}>/3</span>
                </div>
                <h3 
                  className="text-white mx-auto mb-2"
                  style={{
                    width: '278px',
                    height: '36px',
                    fontWeight: 600,
                    fontSize: '30px',
                    lineHeight: '100%',
                    letterSpacing: '-0.04em',
                    textAlign: 'center'
                  }}
                >
                  Testing & Validations
                </h3>
                <p 
                  className="text-white mx-auto"
                  style={{
                    width: '319px',
                    height: '44px',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '140%',
                    letterSpacing: '0',
                    textAlign: 'center'
                  }}
                >
                  Ensuring viable concepts perform under real conditions and scenarios
                </p>
              </div>

              {/* Step 4 - Bottom Left */}
              <div className="absolute bottom-[18%] left-[18%] text-center">
                <div className="flex justify-center mb-2">
                  <span className="text-4xl sm:text-5xl font-light" style={{ WebkitTextStroke: '1.5px white', color: 'transparent', textStroke: '1.5px white' }}>/4</span>
                </div>
                <h3 
                  className="text-white mx-auto mb-2"
                  style={{
                    width: '278px',
                    height: '36px',
                    fontWeight: 600,
                    fontSize: '30px',
                    lineHeight: '100%',
                    letterSpacing: '-0.04em',
                    textAlign: 'center'
                  }}
                >
                  Manufacture Ready
                </h3>
                <p 
                  className="text-white mx-auto"
                  style={{
                    width: '319px',
                    height: '44px',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '140%',
                    letterSpacing: '0',
                    textAlign: 'center'
                  }}
                >
                  We prepare your product for mass production and get all processes defined for you
                </p>
              </div>

              {/* Step 5 - Left Middle */}
              <div className="absolute top-[42%] left-[15%] translate-y-[-50%] text-center">
                <div className="flex justify-center mb-2">
                  <span className="text-4xl sm:text-5xl font-light" style={{ WebkitTextStroke: '1.5px white', color: 'transparent', textStroke: '1.5px white' }}>/5</span>
                </div>
                <h3 
                  className="text-white mx-auto mb-2"
                  style={{
                    width: '278px',
                    height: '36px',
                    fontWeight: 600,
                    fontSize: '30px',
                    lineHeight: '100%',
                    letterSpacing: '-0.04em',
                    textAlign: 'center'
                  }}
                >
                  Bring it to world!
                </h3>
                <p 
                  className="text-white mx-auto"
                  style={{
                    width: '319px',
                    height: '44px',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '140%',
                    letterSpacing: '0',
                    textAlign: 'center'
                  }}
                >
                  Based on your requirements, we help you launch your product successfully!
                </p>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout - Vertical Stack */}
          <div className="lg:hidden w-full px-4 sm:px-6 pb-24 space-y-8 pt-8">
            {/* Central Symbols and Logo */}
            <div className="relative mx-auto" style={{ width: '120px', height: '120px' }}>
              <Image
                src="/Grids/Artivo - Symbols (7) 1.png"
                alt="Artivo Symbols"
                fill
                className="object-contain"
              />
              {/* Logo Centered on Symbols */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/Grids/Artivo Logo - White (1) 1.png"
                  alt="Artivo Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Process Steps - Vertical Stack */}
            {/* Step 1 */}
            <div className="text-center max-w-[280px] mx-auto">
              <div className="flex justify-center mb-2">
                <span className="text-3xl sm:text-4xl font-light" style={{ WebkitTextStroke: '1.5px white', color: 'transparent', textStroke: '1.5px white' }}>/1</span>
              </div>
              <h3 className="text-white text-base sm:text-lg font-bold mb-2">Ideation & Research</h3>
              <p className="text-white text-xs sm:text-sm font-normal">Building strong foundations with you through creative exploration</p>
            </div>

            {/* Step 2 */}
            <div className="text-center max-w-[280px] mx-auto">
              <div className="flex justify-center mb-2">
                <span className="text-3xl sm:text-4xl font-light" style={{ WebkitTextStroke: '1.5px white', color: 'transparent', textStroke: '1.5px white' }}>/2</span>
              </div>
              <h3 className="text-white text-base sm:text-lg font-bold mb-2">Design & Develop MVP</h3>
              <p className="text-white text-xs sm:text-sm font-normal">Transforming your ideas into viable products for pre-launch statistics and estimates</p>
            </div>

            {/* Step 3 */}
            <div className="text-center max-w-[280px] mx-auto">
              <div className="flex justify-center mb-2">
                <span className="text-3xl sm:text-4xl font-light" style={{ WebkitTextStroke: '1.5px white', color: 'transparent', textStroke: '1.5px white' }}>/3</span>
              </div>
              <h3 className="text-white text-base sm:text-lg font-bold mb-2">Testing & Validations</h3>
              <p className="text-white text-xs sm:text-sm font-normal">Ensuring viable concepts perform under real conditions and scenarios</p>
            </div>

            {/* Step 4 */}
            <div className="text-center max-w-[280px] mx-auto">
              <div className="flex justify-center mb-2">
                <span className="text-3xl sm:text-4xl font-light" style={{ WebkitTextStroke: '1.5px white', color: 'transparent', textStroke: '1.5px white' }}>/4</span>
              </div>
              <h3 className="text-white text-base sm:text-lg font-bold mb-2">Manufacture Ready</h3>
              <p className="text-white text-xs sm:text-sm font-normal">We prepare your product for mass production and get all processes defined for you</p>
            </div>

            {/* Step 5 */}
            <div className="text-center max-w-[280px] mx-auto">
              <div className="flex justify-center mb-2">
                <span className="text-3xl sm:text-4xl font-light" style={{ WebkitTextStroke: '1.5px white', color: 'transparent', textStroke: '1.5px white' }}>/5</span>
              </div>
              <h3 className="text-white text-base sm:text-lg font-bold mb-2">Bring it to world!</h3>
              <p className="text-white text-xs sm:text-sm font-normal">Based on your requirements, we help you launch your product successfully!</p>
            </div>
          </div>
        </div>

        {/* Yellow Call-to-Action Button - Responsive (Outside both layouts for consistent bottom placement) */}
        <div className="absolute bottom-0 left-0 right-0 z-30 sm:px-4 md:px-6">
          <button className="relative w-full sm:max-w-4xl sm:mx-auto text-black font-bold py-3 sm:py-4 px-4 sm:px-6 md:px-8 flex items-center justify-center gap-2 sm:gap-3 transition-colors rounded-sm overflow-hidden">
            {/* Intersect Background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <Image
                src="/Intersect.png"
                alt="Intersect Background"
                fill
                className="object-cover"
              />
            </div>
            <span className="relative z-10 text-xs sm:text-sm md:text-base lg:text-base tracking-wide whitespace-nowrap sm:whitespace-normal">CLICK HERE AND GET YOUR R&D SCORE</span>
            <Image
              src="/why-artivo/Group 18.svg"
              alt="Arrow"
              width={24}
              height={24}
              className="relative z-10 object-contain w-5 h-5 sm:w-6 sm:h-6"
            />
          </button>
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


          {/* Product Features Section */}
          <ProductFeaturesSection />

          {/* View All Projects Strip */}
          <ViewAllProjectsStrip />

          {/* Innovative Affiliations Section */}
          <InnovativeAffiliationsSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Footer */}
          <Footer />
    </div>
  );
}
