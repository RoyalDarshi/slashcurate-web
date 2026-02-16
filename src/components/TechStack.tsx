export default function TechStack() {
  const categories = [
    {
      name: "Cloud Platforms",
      technologies: [
        { name: "AWS", logo: "☁️" },
        { name: "Azure", logo: "☁️" },
        { name: "Google Cloud", logo: "☁️" },
        { name: "Kubernetes", logo: "⚙️" },
      ],
    },
    {
      name: "Data & Analytics",
      technologies: [
        { name: "Snowflake", logo: "❄️" },
        { name: "Databricks", logo: "🔷" },
        { name: "Apache Spark", logo: "⚡" },
        { name: "dbt", logo: "🔧" },
      ],
    },
    {
      name: "BI & Visualization",
      technologies: [
        { name: "Power BI", logo: "📊" },
        { name: "Tableau", logo: "📈" },
        { name: "Looker", logo: "🔍" },
        { name: "Metabase", logo: "📉" },
      ],
    },
    {
      name: "AI & Machine Learning",
      technologies: [
        { name: "TensorFlow", logo: "🧠" },
        { name: "PyTorch", logo: "🔥" },
        { name: "OpenAI", logo: "🤖" },
        { name: "MLflow", logo: "📦" },
      ],
    },
    {
      name: "Data Engineering",
      technologies: [
        { name: "Apache Airflow", logo: "🌊" },
        { name: "Apache Kafka", logo: "📡" },
        { name: "PostgreSQL", logo: "🐘" },
        { name: "MongoDB", logo: "🍃" },
      ],
    },
    {
      name: "DevOps & Tools",
      technologies: [
        { name: "Docker", logo: "🐳" },
        { name: "Terraform", logo: "🏗️" },
        { name: "GitHub Actions", logo: "⚙️" },
        { name: "Jenkins", logo: "🔄" },
      ],
    },
  ];

  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology Stack
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            We work with industry-leading technologies to build scalable, 
            production-grade solutions.
          </p>
        </div>

        {/* Technology categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-6">
                {category.name}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/5 hover:border-blue-500/30 transition-all group"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                      {tech.logo}
                    </div>
                    <div className="text-xs font-medium text-slate-300">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-sm text-blue-300">
              + Many more tools and frameworks based on your specific needs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
