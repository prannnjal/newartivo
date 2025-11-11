import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const sections = [
  {
    title: "Acceptance of Terms",
    body: [
      "By engaging Artivo for design, engineering, or consultation services, you agree to abide by these Terms of Service.",
      "These terms, together with any executed proposal or statement of work, form the full agreement between Artivo and the client.",
    ],
  },
  {
    title: "Project Engagement",
    body: [
      "Work commences once both parties approve and sign the design brief or statement of work outlining deliverables, timelines, and commercial terms.",
      "Change requests are handled through mutual agreement and may require revised timelines or fees.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "Unless otherwise specified in writing, Artivo retains ownership of concept materials and working files until full project fees are settled.",
      "Final deliverables and associated IP are transferred to the client upon final payment, subject to the agreed scope.",
    ],
  },
  {
    title: "Confidentiality",
    body: [
      "Both parties agree to maintain confidentiality of shared information, including project details, proprietary data, and trade secrets.",
      "Non-disclosure agreements (NDAs) can be executed on request to provide additional protection.",
    ],
  },
  {
    title: "Liability",
    body: [
      "Artivo delivers services using best-practice design and engineering standards. However, we are not liable for indirect, incidental, or consequential damages.",
      "Clients are responsible for final validation, regulatory approvals, and manufacturing outcomes beyond Artivo’s deliverables.",
    ],
  },
  {
    title: "Payment Terms",
    body: [
      "Invoices are payable as per the agreed schedule in the proposal or statement of work.",
      "Late payments may result in paused work or additional charges as outlined in the engagement agreement.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about these terms can be directed to hello@artivo.design.",
    ],
  },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-24 space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          <p className="text-gray-600 leading-relaxed">
            These Terms of Service outline the conditions under which Artivo provides design, engineering, and innovation services.
            Please review them carefully before engaging with our team.
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
          <p>This policy was last updated on 11 November 2025.</p>
        </footer>
      </main>
      <Footer />
    </div>
  );
}

