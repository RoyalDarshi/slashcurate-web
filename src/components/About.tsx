import { Target, Zap, ShieldCheck, Users, CheckCircle2 } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Outcome Driven",
      description:
        "We design solutions that directly improve business performance, visibility, and decision-making.",
    },
    {
      icon: Zap,
      title: "Engineering Excellence",
      description:
        "Strong focus on scalable architecture, performance, and clean implementation.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Compliance",
      description:
        "Built with enterprise security standards, data privacy, and governance in mind.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description:
        "We work closely with stakeholders to ensure solutions actually get adopted.",
    },
  ];

  const capabilities = [
    "Cloud-native architecture (AWS, Azure, GCP)",
    "Real-time data processing & streaming",
    "Advanced analytics & machine learning",
    "Enterprise security & compliance",
    "API design & microservices",
    "DevOps & CI/CD automation",
  ];

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left column - About text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About SlashCurate
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                We're a technology consulting firm that helps enterprises modernize 
                their data infrastructure, implement business intelligence systems, 
                and build scalable cloud platforms.
              </p>

              <p>
                Our team combines deep technical expertise with product thinking—we 
                don't just build what you ask for, we help you figure out what you 
                actually need.
              </p>

              <p className="text-slate-400">
                We work across analytics, data engineering, AI/ML, and cloud 
                infrastructure to deliver systems that are secure, maintainable, 
                and built to scale.
              </p>
            </div>

            {/* Technical capabilities */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6">
                Technical Capabilities
              </h3>
              <div className="space-y-3">
                {capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-slate-400">Client Focused</div>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-slate-400">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right column - Values */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              How We Work
            </h3>
            
            <div className="space-y-6">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">
                          {value.title}
                        </h4>
                        <p className="text-slate-400 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
              <h4 className="text-lg font-bold text-white mb-2">
                Ready to Start?
              </h4>
              <p className="text-slate-300 mb-4">
                Let's discuss your project and how we can help.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
