import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const sections = [
  {
    title: "Information We Collect",
    body: [
      "We collect information that you provide directly through project inquiries, consultations, or contact forms, such as your name, company details, email address, and project requirements.",
      "We also gather technical data (including IP address, browser type, and device information) to improve website performance and user experience.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To respond to inquiries, deliver requested services, and maintain project communication.",
      "To improve our offerings, enhance user experience, and ensure website security.",
      "We do not sell or rent personal information to third parties. Data is shared only with trusted partners as required to deliver our services.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We implement industry-standard safeguards and NDAs to protect confidential project data.",
      "Access to personal and project information is restricted to authorised team members.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request to access, update, or delete your personal information at any time by contacting us at hello@artivo.design.",
      "If you have concerns about data handling, please reach out so we can assist promptly.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-24 space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600 leading-relaxed">
            At Artivo, we prioritise the confidentiality and security of every project. This Privacy Policy explains how we
            collect, use, and protect your information when you interact with our website and services.
          </p>
        </header>
        <section className="space-y-10">
          {sections.map((section) => (
            <article key={section.title} className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
                {section.body.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
        <footer className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            For any privacy-related questions, please contact us at{" "}
            <a href="mailto:hello@artivo.design" className="text-blue-600 hover:underline">
              hello@artivo.design
            </a>
            .
          </p>
          <p>This policy was last updated on 11 November 2025.</p>
        </footer>
      </main>
      <Footer />
    </div>
  );
}

