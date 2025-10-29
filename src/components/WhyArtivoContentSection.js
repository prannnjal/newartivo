import React from "react";
import Image from "next/image";

export const WhyArtivoContentSection = () => {
  const whyArtivoBlocks = [
    {
      id: 1,
      type: "text",
      title: "Expertise On-Demand",
      description:
        "Our clients come from diverse fields, which is why we have experienced designers, engineers, draftsmen and project managers - all on-board to help you succeed.",
    },
    {
      id: 2,
      type: "text",
      title: "IP & Ownership Security",
      description:
        "We like to make our processes as simple and seamless as possible. Hence why we believe in 'your project, your ownership'. We do not promote any ownership and/or endorsements for projects we cater.",
    },
    {
      id: 3,
      type: "text",
      title: "Global Manufacturing Network",
      description:
        "Artivo is proudly affiliated with manufacturers, suppliers and distributors across Australia, New Zealand, India, China, Middle East and Europe.",
    },
     {
       id: 7,
       type: "image",
       image: "/why-artivo/Rectangle 30.png",
       alt: "Expertise On-Demand",
     },
    {
      id: 4,
      type: "text",
      title: "100% Cost Transparency",
      description:
        "Every client is different, so is every project. Hence why Artivo believes in following a unique pricing matrix that ensures our clients are fully aware about the cost of their projects.",
    },
     
      {
        id: 5,
        type: "text",
        title: "AI-Enhanced Design Process",
        description:
          "The way present world is getting advanced using AI, we like to keep up-to-date by using the most sophisticated AI tools across initial stages of projects.",
      },
    
    {
      id: 6,
      type: "text",
      title: "Maximum efficiency, Minimum Turn-around",
      description:
        "We understand the importance of deadlines and deliverables. Which is why we use custom tools to keep you updated about your project status, deliverables and other important timelines.",
    },
    
     {
       id: 8,
       type: "image",
       image: "/why-artivo/Rectangle 31.png",
       alt: "IP & Ownership Security",
     },
    {
      id: 9,
      type: "image",
      image: "/why-artivo/Rectangle 32.png",
      alt: "Global Manufacturing Network",
    },
    {
      id: 10,
      type: "image",
      image: "/why-artivo/Rectangle 33.png",
      alt: "100% Cost Transparency",
    },
    {
      id: 11,
      type: "image",
      image: "/why-artivo/Rectangle 34.png",
      alt: "AI-Enhanced Design Process",
    },
    {
      id: 12,
      type: "image",
      image: "/why-artivo/Rectangle 35.png",
      alt: "Maximum efficiency, Minimum Turn-around",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 lg:gap-1 xl:gap-1.5">
          {whyArtivoBlocks.map((block) =>
            block.type === "text" ? (
               <div
                 key={block.id}
                 className="bg-white p-6 hover:shadow-md transition-shadow w-full max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[450px] h-[240px] lg:h-[280px] xl:h-[320px] 2xl:h-[360px] flex flex-col mx-auto"
                 style={{ border: '1px solid #D9D9D9' }}
               >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span
                      className="text-3xl font-bold text-transparent"
                      style={{ WebkitTextStroke: "1.5px #000" }}
                    >
                      /{block.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-4">
                    {block.title}
                  </h3>
                  <div className="flex-1 flex flex-col justify-end">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
               <div
                 key={block.id}
                 className="bg-white overflow-hidden hover:shadow-md transition-shadow w-full max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[450px] h-[240px] lg:h-[280px] xl:h-[320px] 2xl:h-[360px] mx-auto"
                 style={{ border: '1px solid #D9D9D9' }}
               >
                <div className="relative h-full w-full">
                  <Image
                    src={block.image}
                    alt={block.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
