import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of projects do you typically work on?",
      answer:
        "We specialize in data platform modernization, business intelligence implementations, AI/ML solutions, and cloud migrations. Our projects range from building custom data warehouses and ETL pipelines to developing production ML systems and enterprise dashboards. We work with organizations across finance, healthcare, retail, and technology sectors.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. A BI dashboard implementation might take 6-8 weeks, while a complete data platform modernization could take 3-6 months. We work in agile sprints with regular deliverables, so you see progress throughout the project rather than waiting until the end.",
    },
    {
      question: "Do you provide ongoing support after deployment?",
      answer:
        "Yes, we offer comprehensive post-deployment support including 24/7 monitoring for critical systems, regular maintenance, performance optimization, and feature enhancements. We also provide training for your team and documentation to ensure long-term success.",
    },
    {
      question: "What cloud platforms do you work with?",
      answer:
        "We're platform-agnostic and work with all major cloud providers: AWS, Azure, and Google Cloud Platform. Our team has deep expertise across these platforms and can recommend the best fit based on your existing infrastructure, team skills, and specific requirements.",
    },
    {
      question: "How do you ensure data security and compliance?",
      answer:
        "Security is built into every layer of our solutions. We follow industry best practices including encryption at rest and in transit, role-based access control, audit logging, and compliance with standards like GDPR, HIPAA, and SOC 2. We also conduct security reviews and penetration testing before deployment.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Absolutely. We specialize in integrating with legacy systems, third-party APIs, and existing data sources. We've worked with everything from mainframe systems to modern SaaS applications, and we design integration strategies that minimize disruption to your current operations.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible engagement models including fixed-price projects, time-and-materials contracts, and dedicated team arrangements. Pricing depends on project scope, timeline, and resource requirements. We provide detailed proposals with transparent pricing after understanding your specific needs.",
    },
    {
      question: "Do you work with startups or only enterprises?",
      answer:
        "While we specialize in enterprise solutions, we also work with growth-stage startups that need scalable data infrastructure. We adjust our approach and pricing based on your stage and budget while maintaining the same quality standards.",
    },
  ];

  return (
    <section className="py-28 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Common questions about our services, process, and approach.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between gap-4 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-slate-300 leading-relaxed border-t border-white/10 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
          <h3 className="text-xl font-bold text-white mb-3">
            Still Have Questions?
          </h3>
          <p className="text-slate-300 mb-6">
            We're happy to discuss your specific requirements and answer any questions.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-blue-50 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
