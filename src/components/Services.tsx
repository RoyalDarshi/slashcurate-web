import { Database, Brain, Cloud, BarChart3, Code2, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    icon: BarChart3,
    title: "BI & Analytics",
    description: "Custom dashboards, reporting systems, and real-time analytics that turn raw data into confident decisions.",
    features: ["Power BI", "Tableau", "Custom Solutions"],
    color: "#2563eb",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Production-grade ML pipelines, predictive models, and intelligent automation built to run at scale.",
    features: ["MLOps", "Model Deployment", "AI Integration"],
    color: "#06d6a0",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Scalable data pipelines, warehouses, and ETL systems engineered for enterprise throughput.",
    features: ["ETL/ELT", "Data Lakes", "Real-time Processing"],
    color: "#7c3aed",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamless migration to AWS, Azure, or GCP with zero-downtime deployment strategies.",
    features: ["AWS", "Azure", "GCP"],
    color: "#0ea5e9",
  },
  {
    icon: Code2,
    title: "App Modernization",
    description: "Legacy system modernization, microservices architecture, and cloud-native development.",
    features: ["Microservices", "API Design", "DevOps"],
    color: "#f59e0b",
  },
  {
    icon: Briefcase,
    title: "Enterprise Consulting",
    description: "Strategic technology consulting, architecture reviews, and digital transformation roadmaps.",
    features: ["Strategy", "Architecture", "Governance"],
    color: "#ec4899",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return { ref, v };
}

function ServiceCard({ s, index }: { s: typeof SERVICES[0]; index: number }) {
  const { ref, v } = useReveal();
  const Icon = s.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--surface-3)" : "var(--surface-2)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.1)" : "var(--border)"}`,
        borderRadius: 20,
        padding: "36px 32px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        transform: v ? (hovered ? "translateY(-6px)" : "translateY(0)") : "translateY(28px)",
        opacity: v ? 1 : 0,
        transitionDelay: `${index * 0.08}s`,
        boxShadow: hovered ? `0 24px 56px rgba(0,0,0,0.5), 0 0 0 1px ${s.color}20` : "none",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Color accent top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${s.color}, transparent)`,
        opacity: hovered ? 0.8 : 0,
        transition: "opacity 0.3s",
      }} />

      {/* Icon */}
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: `${s.color}15`,
        border: `1px solid ${s.color}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.3s",
        transform: hovered ? "scale(1.1)" : "scale(1)",
      }}>
        <Icon style={{ width: 22, height: 22, color: s.color }} />
      </div>

      {/* Title */}
      <div>
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.1rem",
          letterSpacing: "-0.02em",
          color: "var(--text-1)",
          marginBottom: 10,
        }}>
          {s.title}
        </h3>
        <p style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: "0.9rem",
          color: "var(--text-2)",
          lineHeight: 1.7,
        }}>
          {s.description}
        </p>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
        {s.features.map((f, i) => (
          <span key={i} style={{
            padding: "4px 12px",
            borderRadius: 100,
            background: `${s.color}10`,
            border: `1px solid ${s.color}25`,
            fontFamily: "var(--font-display)",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
            color: s.color,
          }}>
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [hv, setHv] = useState(false);
  useEffect(() => {
    const el = headerRef.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHv(true); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <section id="services" style={{ padding: "120px 0", position: "relative", background: "var(--black)" }}>
      {/* BG */}
      <div className="bg-grid-fine" style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div ref={headerRef} style={{
          maxWidth: 640,
          marginBottom: 72,
          transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
          opacity: hv ? 1 : 0,
          transform: hv ? "none" : "translateY(24px)",
        }}>
          <div className="section-line" style={{ marginBottom: 20 }} />
          <div className="badge" style={{ marginBottom: 20 }}>What We Build</div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            letterSpacing: "-0.04em", color: "var(--text-1)", marginBottom: 16,
          }}>
            End-to-End <span className="gradient-text">Data Solutions</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 300,
            fontSize: "1.05rem", color: "var(--text-2)", lineHeight: 1.7,
          }}>
            From raw infrastructure to intelligent applications — designed to scale with your business.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20,
          marginBottom: 64,
        }}>
          {SERVICES.map((s, i) => <ServiceCard key={i} s={s} index={i} />)}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 300,
            fontSize: "0.95rem", color: "var(--text-3)", marginBottom: 20,
          }}>
            Need something custom? We build exactly what enterprises need.
          </p>
          <Link to="/contact" className="btn-ghost">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
