import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechVentures Inc",
      company: "Fortune 500 Fintech",
      content:
        "SlashCurate transformed our data infrastructure from a bottleneck into a competitive advantage. Their team delivered a scalable data warehouse that reduced query times by 85% and enabled real-time analytics across the organization.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Engineering, RetailCo",
      company: "E-commerce Platform",
      content:
        "The BI dashboards they built gave us visibility we never had before. Decision-making that used to take days now happens in minutes. Their attention to our specific business needs was exceptional.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Head of Data, HealthTech Global",
      company: "Healthcare Analytics",
      content:
        "We needed a partner who understood both the technical complexity and compliance requirements of healthcare data. SlashCurate delivered a HIPAA-compliant ML platform that's been running flawlessly for 18 months.",
      rating: 5,
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Leading Teams
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            We've helped organizations across industries modernize their data infrastructure 
            and build systems that scale.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-blue-400/40 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 leading-relaxed mb-6 flex-grow">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-white/10">
                <div className="font-semibold text-white mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-slate-400">{testimonial.role}</div>
                <div className="text-xs text-blue-400 mt-1">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/10">
          {[
            { value: "50+", label: "Enterprise Clients" },
            { value: "200+", label: "Projects Delivered" },
            { value: "99%", label: "Client Retention" },
            { value: "4.9/5", label: "Average Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
