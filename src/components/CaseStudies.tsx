import { ArrowRight, TrendingUp, Database, Zap } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      icon: TrendingUp,
      industry: "Financial Services",
      title: "Real-Time Risk Analytics Platform",
      challenge:
        "A leading investment firm needed to process millions of transactions daily and generate risk reports in real-time.",
      solution:
        "Built a streaming data pipeline using Apache Kafka and Databricks, with custom ML models for risk scoring.",
      results: [
        "85% reduction in processing time",
        "Real-time risk visibility across portfolios",
        "$2M+ annual cost savings",
      ],
      tags: ["Data Engineering", "ML", "Real-time Analytics"],
    },
    {
      icon: Database,
      industry: "Healthcare",
      title: "Enterprise Data Warehouse Migration",
      challenge:
        "A healthcare provider with 50+ hospitals needed to consolidate data from legacy systems into a modern cloud warehouse.",
      solution:
        "Designed and implemented a Snowflake-based data warehouse with automated ETL pipelines and HIPAA-compliant security.",
      results: [
        "Unified data from 12 different sources",
        "99.9% uptime since launch",
        "40% faster reporting capabilities",
      ],
      tags: ["Cloud Migration", "Data Warehousing", "Compliance"],
    },
    {
      icon: Zap,
      industry: "E-commerce",
      title: "AI-Powered Recommendation Engine",
      challenge:
        "A growing e-commerce platform wanted to increase conversion rates through personalized product recommendations.",
      solution:
        "Developed and deployed a production ML system using collaborative filtering and deep learning models on AWS.",
      results: [
        "32% increase in conversion rate",
        "Processing 50K+ predictions/second",
        "14% boost in average order value",
      ],
      tags: ["AI/ML", "AWS", "MLOps"],
    },
  ];

  return (
    <section className="py-28 relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Real-world examples of how we've helped organizations solve complex 
            data and infrastructure challenges.
          </p>
        </div>

        {/* Case studies */}
        <div className="space-y-8">
          {cases.map((study, i) => {
            const Icon = study.icon;
            return (
              <div
                key={i}
                className="group p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left column - Header */}
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <div className="text-sm text-blue-400 font-medium mb-2">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {study.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Middle column - Challenge & Solution */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Challenge
                      </h4>
                      <p className="text-slate-300 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Solution
                      </h4>
                      <p className="text-slate-300 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-slate-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
