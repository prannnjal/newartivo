import React from "react";
import Image from "next/image";

export const TestimonialFeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "100+ leading softwares",
      description:
        "We own more than 100 active licenses and subscriptions of industry-leading tools that help us give our clients get the best, for the best.",
    },
    {
      id: 2,
      title: "A team for every project",
      description:
        "We believe in complete project dedication which is why we allocate a team for every project. This has greatly increased our efficiency and reduced turn-around times by 44%.",
    },
    {
      id: 3,
      title: "Confidentiality is the key",
      description:
        "Artivo ensures complete data security with robust NDAs and confidentiality agreements that protect the interests of stakeholders in projects.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-2">
      {/* Backgrounds */}
      <div className="absolute inset-0 z-0">
        {/* Updated Linear Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,25,47,1) 0%, rgba(8,181,255,1) 100%)",
          }}
        ></div>

        {/* White wave pattern */}
        <Image
          src="/why-artivo/1 11.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Intersect image in top right corner */}
      <div className="absolute top-0 right-0 z-20">
        <Image
          src="/why-artivo/Intersect.png"
          alt="Intersect Pattern"
          width={450}
          height={350}
          className="object-contain"
        />
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="text-black font-semibold text-sm tracking-wide hover:opacity-90 transition-all duration-300 whitespace-nowrap flex items-center space-x-3">
            <span>CLICK HERE TO BOOK A FREE CONSULTATION</span>
            <Image
              src="/why-artivo/Group 18.svg"
              alt="Group 18 Pattern"
              width={24}
              height={24}
              className="object-contain"
            />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-8 gap-10">
          {/* Quote */}
          <div className="lg:w-1/2 mt-12">
            <blockquote className="text-white text-4xl font-bold leading-tight mb-6 whitespace-nowrap">
              "Artivo is where imagination meets precision."
            </blockquote>
            <cite className="text-white text-base sm:text-lg opacity-90 block">
              Jessica Wade<br />
              <span className="opacity-75">
                Innovation, DLR Hydraulic Tools
              </span>
            </cite>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className=" p-6 bg-transparent  duration-300 group cursor-pointer"
            >
              <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#ffed00] transition-colors">
                {feature.title}
              </h3>
              <p className="text-white text-sm opacity-90 leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className="flex justify-end">
                <svg
                  className="w-5 h-5 text-white group-hover:text-[#ffed00] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
