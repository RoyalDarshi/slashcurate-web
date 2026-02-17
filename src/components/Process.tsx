import {
  Lightbulb,
  FileText,
  Code,
  Rocket,
  BarChart,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    icon: Lightbulb,
    num: "01",
    title: "Discovery & Strategy",
    timeline: "1–2 wks",
    color: "#2563eb",
    desc: "We start by understanding your business goals, technical requirements, and existing infrastructure. Stakeholder interviews, system audits, and requirements gathering.",
  },
  {
    icon: FileText,
    num: "02",
    title: "Architecture & Design",
    timeline: "2–3 wks",
    color: "#06d6a0",
    desc: "Our team designs a scalable solution architecture with detailed technical specifications, data models, and integration plans.",
  },
  {
    icon: Code,
    num: "03",
    title: "Development & Build",
    timeline: "6–12 wks",
    color: "#7c3aed",
    desc: "Agile sprints with regular demos. We build iteratively, ensuring continuous feedback and the ability to adapt to your evolving needs.",
  },
  {
    icon: BarChart,
    num: "04",
    title: "Testing & QA",
    timeline: "2–3 wks",
    color: "#0ea5e9",
    desc: "Comprehensive testing: unit, integration, performance, and security audits. We ensure every requirement is met before deployment.",
  },
  {
    icon: Rocket,
    num: "05",
    title: "Deployment & Launch",
    timeline: "1–2 wks",
    color: "#f59e0b",
    desc: "Zero-downtime rollout strategy. We handle data migration, user training, and provide complete documentation.",
  },
  {
    icon: Users,
    num: "06",
    title: "Support & Optimization",
    timeline: "Ongoing",
    color: "#ec4899",
    desc: "Post-launch monitoring, maintenance, and feature enhancements. Available 24/7 for critical issues.",
  },
];

function StepCard({ step, index }: { step: (typeof STEPS)[0]; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  const [hovered, setHovered] = useState(false);
  const Icon = step.icon;
  const isRight = index % 2 !== 0;

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setV(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const card = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "30px",
        background: hovered ? "var(--surface-3)" : "var(--surface-2)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.1)" : "var(--border)"}`,
        borderRadius: 20,
        transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)",
        opacity: v ? 1 : 0,
        transform: v
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : isRight
            ? "translateX(24px)"
            : "translateX(-24px)",
        boxShadow: hovered
          ? `0 20px 48px rgba(0,0,0,0.4), 0 0 0 1px ${step.color}20`
          : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Side accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: isRight ? "auto" : 0,
          right: isRight ? 0 : "auto",
          width: 3,
          background: `linear-gradient(180deg, ${step.color}, transparent)`,
          borderRadius: isRight ? "0 20px 20px 0" : "20px 0 0 20px",
        }}
      />

      {/* Ghost number */}
      <div
        style={{
          position: "absolute",
          top: -8,
          right: 14,
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "4.5rem",
          color: `${step.color}10`,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {step.num}
      </div>

      {/* Icon + badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 18,
        }}
      >
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 11,
            background: `${step.color}15`,
            border: `1px solid ${step.color}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          <Icon style={{ width: 19, height: 19, color: step.color }} />
        </div>
        <span
          style={{
            padding: "4px 11px",
            background: `${step.color}12`,
            border: `1px solid ${step.color}28`,
            borderRadius: 100,
            fontFamily: "var(--font-display)",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
            color: step.color,
          }}
        >
          {step.timeline}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1rem",
          letterSpacing: "-0.02em",
          color: "var(--text-1)",
          marginBottom: 10,
        }}
      >
        {step.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: "0.855rem",
          color: "var(--text-2)",
          lineHeight: 1.7,
        }}
      >
        {step.desc}
      </p>
    </div>
  );

  return (
    <div
      ref={rowRef}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 56px 1fr",
        alignItems: "center",
      }}
    >
      <div style={{ gridColumn: 1, padding: "0 8px 0 0" }}>
        {!isRight && card}
      </div>

      {/* Center dot */}
      <div
        style={{
          gridColumn: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: 13,
            height: 13,
            borderRadius: "50%",
            background: step.color,
            boxShadow: `0 0 0 4px ${step.color}22, 0 0 18px ${step.color}55`,
            transition: "transform 0.3s",
            transform: hovered ? "scale(1.5)" : "scale(1)",
          }}
        />
      </div>

      <div style={{ gridColumn: 3, padding: "0 0 0 8px" }}>
        {isRight && card}
      </div>
    </div>
  );
}

export default function Process() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [hv, setHv] = useState(false);
  // JS-based breakpoint — avoids Tailwind show/hide double-render issues
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
        className="max-w-7xl mx-auto px-6"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            maxWidth: 640,
            margin: "0 auto 80px",
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
            opacity: hv ? 1 : 0,
            transform: hv ? "none" : "translateY(24px)",
          }}
        >
          <div className="section-line" style={{ margin: "0 auto 20px" }} />
          <div className="badge" style={{ marginBottom: 20 }}>
            Our Process
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
            How We <span className="gradient-text">Deliver</span>
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
            A proven end-to-end process — from initial discovery to ongoing
            support and optimization.
          </p>
        </div>

        {/* ── Desktop: zigzag timeline ── */}
        {isDesktop && (
          <div style={{ position: "relative" }}>
            {/* Spine */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 1,
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(37,99,235,0.45) 8%, rgba(6,214,160,0.35) 50%, rgba(236,72,153,0.45) 92%, transparent 100%)",
                transform: "translateX(-50%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {STEPS.map((s, i) => (
                <StepCard key={i} step={s} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* ── Mobile: vertical stack ── */}
        {!isDesktop && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  style={{
                    padding: "22px 18px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderLeft: `3px solid ${s.color}`,
                    borderRadius: 14,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 9,
                          background: `${s.color}15`,
                          border: `1px solid ${s.color}30`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon
                          style={{ width: 16, height: 16, color: s.color }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: "0.68rem",
                          color: s.color,
                          opacity: 0.55,
                        }}
                      >
                        {s.num}
                      </span>
                    </div>
                    <span
                      style={{
                        padding: "3px 9px",
                        borderRadius: 100,
                        background: `${s.color}10`,
                        border: `1px solid ${s.color}25`,
                        fontFamily: "var(--font-display)",
                        fontSize: "0.67rem",
                        fontWeight: 600,
                        color: s.color,
                      }}
                    >
                      {s.timeline}
                    </span>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "var(--text-1)",
                        marginBottom: 7,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 300,
                        fontSize: "0.835rem",
                        color: "var(--text-2)",
                        lineHeight: 1.7,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div
          style={{
            marginTop: 80,
            padding: "52px 48px",
            borderRadius: 24,
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(6,214,160,0.06))",
            border: "1px solid rgba(37,99,235,0.18)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "-0.03em",
              color: "var(--text-1)",
              marginBottom: 14,
            }}
          >
            Ready to Get Started?
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "1rem",
              color: "var(--text-2)",
              lineHeight: 1.7,
              maxWidth: 500,
              margin: "0 auto 32px",
            }}
          >
            Let's discuss your requirements and build a plan that fits your
            timeline and budget.
          </p>
          <Link to="/contact" className="btn-primary">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
