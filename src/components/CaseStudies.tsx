import { ArrowRight, TrendingUp, Database, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const CASES = [
  {
    icon: TrendingUp,
    industry: "Financial Services",
    color: "#2563eb",
    title: "Real-Time Risk Analytics Platform",
    challenge:
      "A leading investment firm needed to process millions of transactions daily and generate risk reports in real-time — existing systems were causing 6-hour delays.",
    solution:
      "Built a streaming data pipeline using Apache Kafka and Databricks, with custom ML models for risk scoring and an executive-facing analytics dashboard.",
    results: [
      { metric: "85%", label: "Reduction in processing time" },
      { metric: "$2M+", label: "Annual cost savings" },
      { metric: "RT", label: "Real-time risk visibility" },
    ],
    tags: ["Data Engineering", "ML", "Real-time Analytics"],
  },
  {
    icon: Database,
    industry: "Healthcare",
    color: "#06d6a0",
    title: "Enterprise Data Warehouse Migration",
    challenge:
      "A healthcare provider with 50+ hospitals needed to consolidate data from legacy systems into a modern cloud warehouse while maintaining strict HIPAA compliance.",
    solution:
      "Designed and implemented a Snowflake-based data warehouse with automated ETL pipelines, role-based access control, and HIPAA-compliant security architecture.",
    results: [
      { metric: "12", label: "Data sources unified" },
      { metric: "99.9%", label: "Uptime since launch" },
      { metric: "40%", label: "Faster reporting" },
    ],
    tags: ["Cloud Migration", "Data Warehousing", "Compliance"],
  },
  {
    icon: Zap,
    industry: "E-commerce",
    color: "#f59e0b",
    title: "AI-Powered Recommendation Engine",
    challenge:
      "A growing e-commerce platform wanted to increase conversion rates with personalized recommendations but lacked the ML infrastructure to do it at scale.",
    solution:
      "Developed and deployed a production ML system using collaborative filtering and deep learning on AWS, integrated directly into the product experience.",
    results: [
      { metric: "32%", label: "Increase in conversion rate" },
      { metric: "50K+", label: "Predictions per second" },
      { metric: "14%", label: "Boost in average order value" },
    ],
    tags: ["AI/ML", "AWS", "MLOps"],
  },
];

function CaseCard({
  study,
  index,
}: {
  study: (typeof CASES)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  const [hovered, setHovered] = useState(false);
  const Icon = study.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setV(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--surface-3)" : "var(--surface-2)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.1)" : "var(--border)"}`,
        borderRadius: 24,
        overflow: "hidden",
        transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)",
        opacity: v ? 1 : 0,
        transform: v
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(28px)",
        transitionDelay: `${index * 0.1}s`,
        boxShadow: hovered
          ? `0 28px 60px rgba(0,0,0,0.5), 0 0 0 1px ${study.color}18`
          : "none",
      }}
    >
      {/* Top color band */}
      <div
        style={{
          height: 4,
          background: `linear-gradient(90deg, ${study.color}, ${study.color}50)`,
        }}
      />

      <div style={{ padding: "36px" }}>
        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 20,
            marginBottom: 28,
          }}
        >
          {/* Icon badge */}
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              flexShrink: 0,
              background: `${study.color}18`,
              border: `1px solid ${study.color}35`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
              transform: hovered ? "scale(1.08) rotate(-4deg)" : "scale(1)",
            }}
          >
            <Icon style={{ width: 26, height: 26, color: study.color }} />
          </div>

          {/* Title block */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Industry label */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: study.color,
                  boxShadow: `0 0 6px ${study.color}`,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: study.color,
                }}
              >
                {study.industry}
              </span>
            </div>

            {/* Title — large, white, high contrast */}
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
                letterSpacing: "-0.03em",
                color: "#ffffff" /* pure white for max readability */,
                lineHeight: 1.25,
                margin: 0,
                textShadow: "0 1px 8px rgba(0,0,0,0.4)",
              }}
            >
              {study.title}
            </h3>
          </div>

          {/* Tags — pushed to the right */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              flexShrink: 0,
              alignItems: "flex-start",
              maxWidth: 220,
            }}
            className="case-tags"
          >
            {study.tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  padding: "4px 11px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 100,
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "0.68rem",
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.02em",
                  whiteSpace: "nowrap",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Challenge / Solution ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginBottom: 20,
          }}
          className="case-content-grid"
        >
          {[
            { label: "Challenge", text: study.challenge },
            { label: "Solution", text: study.solution },
          ].map(({ label, text }) => (
            <div
              key={label}
              style={{
                padding: "20px",
                background: "rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: 14,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: 10,
                }}
              >
                {label}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* ── Results bar ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "rgba(255,255,255,0.04)",
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {study.results.map((r, i) => (
            <div
              key={i}
              style={{
                padding: "22px 16px",
                textAlign: "center",
                background: `${study.color}08`,
                transition: "background 0.25s",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  `${study.color}14`)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  `${study.color}08`)
              }
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.6rem",
                  letterSpacing: "-0.04em",
                  color: study.color,
                  marginBottom: 5,
                  lineHeight: 1,
                }}
              >
                {r.metric}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: "0.73rem",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.4,
                }}
              >
                {r.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [hv, setHv] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setHv(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      style={{
        padding: "120px 0",
        position: "relative",
        background: "var(--black)",
      }}
    >
      <div
        className="bg-dots"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: 0,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,214,160,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            maxWidth: 640,
            marginBottom: 72,
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
            opacity: hv ? 1 : 0,
            transform: hv ? "none" : "translateY(24px)",
          }}
        >
          <div className="section-line" style={{ marginBottom: 20 }} />
          <div className="badge" style={{ marginBottom: 20 }}>
            Case Studies
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              letterSpacing: "-0.04em",
              color: "var(--text-1)",
              marginBottom: 16,
            }}
          >
            Real Results for <span className="gradient-text">Real Clients</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "1.05rem",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            How we've helped organizations solve complex data and infrastructure
            challenges — with measurable outcomes.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            marginBottom: 56,
          }}
        >
          {CASES.map((c, i) => (
            <CaseCard key={i} study={c} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <Link
            to="/contact"
            className="btn-ghost"
            style={{ display: "inline-flex" }}
          >
            Discuss Your Project
            <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .case-content-grid { grid-template-columns: 1fr !important; }
          .case-tags { display: none !important; }
        }
      `}</style>
    </section>
  );
}
