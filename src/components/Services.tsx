import { Database, Brain, Cloud, BarChart3, Code2, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: BarChart3,
      title: "BI & Analytics",
      description:
        "Custom dashboards, reporting systems, and real-time analytics that drive business decisions.",
      features: ["Power BI", "Tableau", "Custom Solutions"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Production-grade ML pipelines, predictive models, and intelligent automation.",
      features: ["MLOps", "Model Deployment", "AI Integration"],
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Scalable data pipelines, warehouses, and ETL systems built for enterprise scale.",
      features: ["ETL/ELT", "Data Lakes", "Real-time Processing"],
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description:
        "Seamless migration to AWS, Azure, or GCP with zero-downtime deployment strategies.",
      features: ["AWS", "Azure", "GCP"],
    },
    {
      icon: Code2,
      title: "Application Modernization",
      description:
        "Legacy system modernization, microservices architecture, and cloud-native development.",
      features: ["Microservices", "API Design", "DevOps"],
    },
    {
      icon: Briefcase,
      title: "Enterprise Consulting",
      description:
        "Strategic technology consulting, architecture reviews, and digital transformation roadmaps.",
      features: ["Strategy", "Architecture", "Governance"],
    },
  ];

  return (
    <section id="services" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We Build
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            End-to-end solutions for data platforms, business intelligence, AI
            systems, and cloud infrastructure—designed to scale with your
            business.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">
            Need a custom solution? We work with enterprises to design and build
            exactly what they need.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/20 transition-all"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
