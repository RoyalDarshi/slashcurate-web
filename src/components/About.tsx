import { Target, Zap, ShieldCheck, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const VALUES = [
  { icon: Target,      title: "Outcome Driven",        color: "#2563eb", desc: "We design solutions that directly improve business performance, visibility, and decision-making." },
  { icon: Zap,         title: "Engineering Excellence", color: "#06d6a0", desc: "Strong focus on scalable architecture, performance, and clean, maintainable implementation." },
  { icon: ShieldCheck, title: "Security & Compliance",  color: "#7c3aed", desc: "Built with enterprise security standards, data privacy, and governance in mind from day one." },
  { icon: Users,       title: "Client Partnership",     color: "#f59e0b", desc: "We work closely with stakeholders to ensure solutions actually get adopted and create lasting value." },
];

const CAPABILITIES = [
  "Cloud-native architecture (AWS, Azure, GCP)",
  "Real-time data processing & streaming",
  "Advanced analytics & machine learning",
  "Enterprise security & compliance",
  "API design & microservices",
  "DevOps & CI/CD automation",
];

const QUICK_STATS = [
  { value: "100%", label: "Client Focused" },
  { value: "24/7", label: "Support Available" },
  { value: "5+",   label: "Years Experience" },
  { value: "50+",  label: "Enterprise Clients" },
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

export default function About() {
  const { ref: leftRef, v: leftV } = useReveal();
  const { ref: rightRef, v: rightV } = useReveal();
  const { ref: statsRef, v: statsV } = useReveal();

  return (
    <section id="about" style={{ padding: "120px 0", position: "relative", background: "var(--black)" }}>
      {/* BG */}
      <div className="bg-grid-fine" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />
      <div style={{
        position: "absolute", top: "20%", right: 0,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,214,160,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="max-w-7xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>

        {/* Section badge */}
        <div style={{ marginBottom: 72, textAlign: "center" }}>
          <div className="section-line" style={{ margin: "0 auto 20px" }} />
          <div className="badge">Who We Are</div>
        </div>

        {/* Two column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
          marginBottom: 80,
        }}
          className="about-grid"
        >
          {/* Left — text */}
          <div ref={leftRef} style={{
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
            opacity: leftV ? 1 : 0,
            transform: leftV ? "none" : "translateX(-28px)",
          }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              letterSpacing: "-0.04em", color: "var(--text-1)", marginBottom: 28,
            }}>
              About <span className="gradient-text">SlashCurate</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 40 }}>
              {[
                "We're a technology consulting firm that helps enterprises modernize their data infrastructure, implement business intelligence systems, and build scalable cloud platforms.",
                "Our team combines deep technical expertise with product thinking — we don't just build what you ask for, we help you figure out what you actually need.",
                "We work across analytics, data engineering, AI/ML, and cloud infrastructure to deliver systems that are secure, maintainable, and built to scale.",
              ].map((p, i) => (
                <p key={i} style={{
                  fontFamily: "var(--font-body)", fontWeight: i === 2 ? 300 : 400,
                  fontSize: "0.975rem", color: i === 2 ? "var(--text-3)" : "var(--text-2)",
                  lineHeight: 1.8,
                }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Capabilities */}
            <div style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "28px 28px",
            }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.95rem", letterSpacing: "-0.01em",
                color: "var(--text-1)", marginBottom: 20,
              }}>
                Technical Capabilities
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {CAPABILITIES.map((cap, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <CheckCircle2 style={{ width: 16, height: 16, color: "#06d6a0", flexShrink: 0 }} />
                    <span style={{
                      fontFamily: "var(--font-body)", fontWeight: 300,
                      fontSize: "0.875rem", color: "var(--text-2)",
                    }}>
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — values */}
          <div ref={rightRef} style={{
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
            opacity: rightV ? 1 : 0,
            transform: rightV ? "none" : "translateX(28px)",
          }}>
            <h3 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "1.3rem", letterSpacing: "-0.02em",
              color: "var(--text-1)", marginBottom: 28,
            }}>
              How We Work
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
              {VALUES.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div key={i} style={{
                    padding: "24px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    display: "flex", gap: 16, alignItems: "flex-start",
                    borderLeft: `3px solid ${val.color}`,
                    transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "var(--surface-3)";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "var(--surface-2)";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
                    }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: `${val.color}15`, border: `1px solid ${val.color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon style={{ width: 18, height: 18, color: val.color }} />
                    </div>
                    <div>
                      <h4 style={{
                        fontFamily: "var(--font-display)", fontWeight: 700,
                        fontSize: "0.95rem", color: "var(--text-1)", marginBottom: 6,
                      }}>
                        {val.title}
                      </h4>
                      <p style={{
                        fontFamily: "var(--font-body)", fontWeight: 300,
                        fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.65,
                      }}>
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA card */}
            <div style={{
              padding: "28px",
              background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(6,214,160,0.06))",
              border: "1px solid rgba(37,99,235,0.2)",
              borderRadius: 16,
            }}>
              <h4 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "1.05rem", color: "var(--text-1)", marginBottom: 10,
              }}>
                Ready to Start?
              </h4>
              <p style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "0.875rem", color: "var(--text-2)", lineHeight: 1.7, marginBottom: 20,
              }}>
                Let's discuss your project and how we can help.
              </p>
              <Link to="/contact" className="btn-primary" style={{ fontSize: "0.85rem", padding: "10px 20px" }}>
                Contact Us
                <ArrowRight style={{ width: 15, height: 15 }} />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div ref={statsRef} style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 1,
          background: "var(--border)",
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid var(--border)",
          transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
          opacity: statsV ? 1 : 0,
          transform: statsV ? "none" : "translateY(20px)",
        }}>
          {QUICK_STATS.map((s, i) => (
            <div key={i} style={{
              padding: "36px 24px", textAlign: "center",
              background: "var(--surface-1)",
              transition: "background 0.3s",
            }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "var(--surface-2)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "var(--surface-1)")}
            >
              <div className="stat-value" style={{ fontSize: "2.2rem", marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.825rem", color: "var(--text-3)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile grid fix */}
      <style>{`
        @media (max-width: 1023px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
