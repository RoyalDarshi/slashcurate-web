import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    name:    "Sarah Chen",
    role:    "CTO",
    company: "TechVentures Inc · Fortune 500 Fintech",
    content:
      "SlashCurate transformed our data infrastructure from a bottleneck into a competitive advantage. Their team delivered a scalable data warehouse that reduced query times by 85% and enabled real-time analytics across the organization.",
    metric: { value: "85%", label: "Faster queries" },
    avatar: "SC",
    color:  "#2563eb",
  },
  {
    name:    "Michael Rodriguez",
    role:    "VP of Engineering",
    company: "RetailCo · E-commerce Platform",
    content:
      "The BI dashboards they built gave us visibility we never had before. Decision-making that used to take days now happens in minutes. Their attention to our specific business needs was exceptional.",
    metric: { value: "10×", label: "Faster decisions" },
    avatar: "MR",
    color:  "#06d6a0",
  },
  {
    name:    "Priya Sharma",
    role:    "Head of Data",
    company: "HealthTech Global · Healthcare Analytics",
    content:
      "We needed a partner who understood both the technical complexity and compliance requirements of healthcare data. SlashCurate delivered a HIPAA-compliant ML platform that's been running flawlessly for 18 months.",
    metric: { value: "18mo", label: "Zero incidents" },
    avatar: "PS",
    color:  "#7c3aed",
  },
];

const BOTTOM_STATS = [
  { value: "50+",   label: "Enterprise Clients" },
  { value: "200+",  label: "Projects Delivered" },
  { value: "99%",   label: "Client Retention" },
  { value: "4.9/5", label: "Average Rating" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function TestimonialCard({
  t,
  index,
}: {
  t: typeof TESTIMONIALS[0];
  index: number;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        padding: "36px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
        transform: visible ? "translateY(0)" : "translateY(32px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 0.12}s`,
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.12)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, ${t.color}, transparent)`,
          opacity: 0.7,
        }}
      />

      {/* Quote mark */}
      <div
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "5rem",
          lineHeight: 1,
          color: t.color,
          opacity: 0.15,
          fontWeight: 700,
          marginTop: "-12px",
          marginBottom: "-16px",
          userSelect: "none",
        }}
      >
        "
      </div>

      {/* Content */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: "0.975rem",
          lineHeight: 1.75,
          color: "var(--text-2)",
          flexGrow: 1,
        }}
      >
        {t.content}
      </p>

      {/* Metric chip */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 16px",
          background: `${t.color}12`,
          border: `1px solid ${t.color}25`,
          borderRadius: "10px",
          alignSelf: "flex-start",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.3rem",
            color: t.color,
            letterSpacing: "-0.02em",
          }}
        >
          {t.metric.value}
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            color: "var(--text-3)",
            fontWeight: 400,
          }}
        >
          {t.metric.label}
        </span>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border)" }} />

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        {/* Avatar */}
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${t.color}, ${t.color}80)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.78rem",
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {t.avatar}
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "var(--text-1)",
              letterSpacing: "-0.01em",
            }}
          >
            {t.name}
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              color: "var(--text-3)",
              marginTop: "2px",
            }}
          >
            {t.role} · {t.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeaderVisible(true); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      style={{
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
        background: "var(--black)",
      }}
    >
      {/* Background treatment */}
      <div
        className="bg-dots"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6"
        style={{ position: "relative", zIndex: 10 }}
      >
        {/* Section Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            maxWidth: "640px",
            margin: "0 auto 80px",
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div className="section-line" style={{ margin: "0 auto 20px" }} />
          <div className="badge" style={{ marginBottom: "20px" }}>
            Client Stories
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.04em",
              color: "var(--text-1)",
              marginBottom: "16px",
            }}
          >
            Trusted by{" "}
            <span className="gradient-text">Leading Teams</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "1.1rem",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            We've helped organizations across industries modernize their data
            infrastructure and build systems that scale.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "64px",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
        >
          {BOTTOM_STATS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "36px 24px",
                textAlign: "center",
                background: "var(--surface-1)",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "var(--surface-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "var(--surface-1)";
              }}
            >
              <div
                className="stat-value"
                style={{ fontSize: "2.2rem", marginBottom: "8px" }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.825rem",
                  color: "var(--text-3)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
