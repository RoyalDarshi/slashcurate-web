import {
  Lightbulb,
  FileText,
  Code,
  Rocket,
  BarChart,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Process() {
  const steps = [
    {
      icon: Lightbulb,
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We start by understanding your business goals, technical requirements, and existing infrastructure. This phase includes stakeholder interviews, system audits, and requirements gathering.",
      timeline: "1-2 weeks",
    },
    {
      icon: FileText,
      number: "02",
      title: "Architecture & Design",
      description:
        "Our team designs a scalable solution architecture with detailed technical specifications, data models, and integration plans. We present options and recommend the best approach for your needs.",
      timeline: "2-3 weeks",
    },
    {
      icon: Code,
      number: "03",
      title: "Development & Implementation",
      description:
        "Agile development with regular check-ins and demos. We build in sprints, ensuring continuous feedback and the ability to adjust based on your evolving requirements.",
      timeline: "6-12 weeks",
    },
    {
      icon: BarChart,
      number: "04",
      title: "Testing & Quality Assurance",
      description:
        "Comprehensive testing including unit tests, integration tests, performance testing, and security audits. We ensure the solution meets all requirements before deployment.",
      timeline: "2-3 weeks",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Deployment & Launch",
      description:
        "Carefully planned rollout with zero-downtime deployment strategies. We handle data migration, user training, and provide documentation for your team.",
      timeline: "1-2 weeks",
    },
    {
      icon: Users,
      number: "06",
      title: "Support & Optimization",
      description:
        "Post-launch support, monitoring, and continuous optimization. We're available 24/7 for critical issues and provide regular maintenance and feature enhancements.",
      timeline: "Ongoing",
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            A proven process that delivers results—from initial discovery to
            ongoing support and optimization.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-cyan-500/20 to-blue-500/20" />

          <div className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`relative flex items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`lg:w-1/2 ${isEven ? "lg:pr-12" : "lg:pl-12"}`}
                  >
                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
                      {/* Number and icon */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <span className="text-5xl font-bold text-blue-500/20">
                          {step.number}
                        </span>
                      </div>

                      {/* Title and timeline */}
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          {step.title}
                        </h3>
                        <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20 whitespace-nowrap ml-4">
                          {step.timeline}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950" />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a customized plan
            that fits your timeline and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
