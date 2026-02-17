import { useEffect, useRef, useState } from "react";

const CATEGORIES = [
  {
    name: "Cloud Platforms",
    color: "#0ea5e9",
    techs: [
      { name: "AWS",        icon: "⬡" },
      { name: "Azure",      icon: "◈" },
      { name: "GCP",        icon: "◉" },
      { name: "Kubernetes", icon: "⎈" },
    ],
  },
  {
    name: "Data & Analytics",
    color: "#06d6a0",
    techs: [
      { name: "Snowflake",      icon: "❄" },
      { name: "Databricks",     icon: "◆" },
      { name: "Apache Spark",   icon: "⚡" },
      { name: "dbt",            icon: "⟳" },
    ],
  },
  {
    name: "BI & Visualization",
    color: "#f59e0b",
    techs: [
      { name: "Power BI",  icon: "▦" },
      { name: "Tableau",   icon: "▣" },
      { name: "Looker",    icon: "◎" },
      { name: "Metabase",  icon: "▩" },
    ],
  },
  {
    name: "AI & Machine Learning",
    color: "#7c3aed",
    techs: [
      { name: "TensorFlow", icon: "∿" },
      { name: "PyTorch",    icon: "⬟" },
      { name: "OpenAI",     icon: "◯" },
      { name: "MLflow",     icon: "⌬" },
    ],
  },
  {
    name: "Data Engineering",
    color: "#2563eb",
    techs: [
      { name: "Airflow",    icon: "↻" },
      { name: "Kafka",      icon: "⇌" },
      { name: "PostgreSQL", icon: "⬡" },
      { name: "MongoDB",    icon: "◉" },
    ],
  },
  {
    name: "DevOps & Tools",
    color: "#ec4899",
    techs: [
      { name: "Docker",    icon: "▢" },
      { name: "Terraform", icon: "⬠" },
      { name: "GitHub CI", icon: "⊙" },
      { name: "Jenkins",   icon: "⟳" },
    ],
  },
];

function CategoryCard({ cat, index }: { cat: typeof CATEGORIES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--surface-3)" : "var(--surface-2)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.1)" : "var(--border)"}`,
        borderRadius: 20,
        padding: "28px",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        opacity: v ? 1 : 0,
        transform: v ? (hovered ? "translateY(-4px)" : "translateY(0)") : "translateY(24px)",
        transitionDelay: `${index * 0.07}s`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top color bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${cat.color}, transparent)`,
        opacity: hovered ? 0.9 : 0.5,
        transition: "opacity 0.3s",
      }} />

      {/* Category header */}
      <div style={{
        display: "flex", alignItems: "center", gap: 10, marginBottom: 20,
      }}>
        <div style={{
          width: 8, height: 8, borderRadius: "50%",
          background: cat.color,
          boxShadow: `0 0 8px ${cat.color}80`,
        }} />
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "0.85rem", letterSpacing: "0.04em",
          textTransform: "uppercase", color: "var(--text-1)",
        }}>
          {cat.name}
        </h3>
      </div>

      {/* Tech chips grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 8,
      }}>
        {cat.techs.map((tech, i) => (
          <div key={i} style={{
            padding: "12px 14px",
            background: `${cat.color}08`,
            border: `1px solid ${cat.color}18`,
            borderRadius: 10,
            display: "flex", alignItems: "center", gap: 8,
            transition: "all 0.2s",
            cursor: "default",
          }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = `${cat.color}15`;
              (e.currentTarget as HTMLDivElement).style.borderColor = `${cat.color}35`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = `${cat.color}08`;
              (e.currentTarget as HTMLDivElement).style.borderColor = `${cat.color}18`;
            }}
          >
            <span style={{
              fontSize: "0.95rem",
              color: cat.color,
              lineHeight: 1,
              width: 18,
              textAlign: "center",
              flexShrink: 0,
            }}>
              {tech.icon}
            </span>
            <span style={{
              fontFamily: "var(--font-display)", fontWeight: 600,
              fontSize: "0.75rem", color: "var(--text-2)",
              letterSpacing: "-0.01em",
            }}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [hv, setHv] = useState(false);
  useEffect(() => {
    const el = headerRef.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHv(true); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <section style={{ padding: "120px 0", position: "relative", background: "var(--black)" }}>
      <div className="bg-grid-fine" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div ref={headerRef} style={{
          textAlign: "center", maxWidth: 640, margin: "0 auto 72px",
          transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
          opacity: hv ? 1 : 0, transform: hv ? "none" : "translateY(24px)",
        }}>
          <div className="section-line" style={{ margin: "0 auto 20px" }} />
          <div className="badge" style={{ marginBottom: 20 }}>Our Stack</div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            letterSpacing: "-0.04em", color: "var(--text-1)", marginBottom: 16,
          }}>
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 300,
            fontSize: "1.05rem", color: "var(--text-2)", lineHeight: 1.7,
          }}>
            Industry-leading tools and platforms — chosen for reliability, scalability, and enterprise-grade performance.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
          marginBottom: 48,
        }}>
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={i} cat={cat} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <div style={{ textAlign: "center" }}>
          <div className="badge">
            + Many more tools and frameworks based on your specific needs
          </div>
        </div>
      </div>
    </section>
  );
}
