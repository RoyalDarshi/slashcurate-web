import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">
              Enterprise Data & AI Solutions
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
            Build Systems That{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Actually Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl" />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 animate-fade-in-up animation-delay-100">
            We help enterprises modernize data platforms, implement business
            intelligence, and build AI-driven systems that scale—without the
            overhead.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up animation-delay-200">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5"
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-4 border-2 border-white/10 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-300"
            >
              View Services
            </Link>
          </div>

          {/* Social proof / stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 animate-fade-in-up animation-delay-300">
            {[
              { label: "Cloud Platforms", value: "3+" },
              { label: "Enterprise Clients", value: "50+" },
              { label: "Success Rate", value: "99%" },
              { label: "Avg. Response", value: "24h" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
