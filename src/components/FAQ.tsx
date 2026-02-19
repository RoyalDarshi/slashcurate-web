import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const FAQS = [
  {
    q: "What types of projects do you typically work on?",
    a: "We specialize in data platform modernization, business intelligence implementations, AI/ML solutions, and cloud migrations. Our projects range from custom data warehouses and ETL pipelines to production ML systems and enterprise dashboards — across finance, healthcare, retail, and technology sectors.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by scope. A BI dashboard implementation might take 6–8 weeks, while a complete data platform modernization could take 3–6 months. We work in agile sprints with regular deliverables, so you see progress throughout — not just at the end.",
  },
  {
    q: "Do you provide ongoing support after deployment?",
    a: "Yes. We offer comprehensive post-deployment support including 24/7 monitoring for critical systems, regular maintenance, performance optimization, and feature enhancements. We also provide team training and documentation to ensure long-term success.",
  },
  {
    q: "What cloud platforms do you work with?",
    a: "We're platform-agnostic and work with AWS, Azure, and Google Cloud Platform. Our team has deep expertise across all three and can recommend the best fit based on your existing infrastructure, team skills, and specific requirements.",
  },
  {
    q: "How do you ensure data security and compliance?",
    a: "Security is built into every layer. We follow industry best practices: encryption at rest and in transit, role-based access control, audit logging, and compliance with GDPR, HIPAA, and SOC 2. We also conduct security reviews and penetration testing before deployment.",
  },
  {
    q: "Can you integrate with our existing systems?",
    a: "Absolutely. We specialize in integrating with legacy systems, third-party APIs, and existing data sources — from mainframes to modern SaaS applications. We design integration strategies that minimize disruption to current operations.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer flexible engagement models including fixed-price projects, time-and-materials contracts, and dedicated team arrangements. Pricing depends on project scope, timeline, and resource requirements. We provide detailed proposals with transparent pricing after understanding your needs.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "While we specialize in enterprise solutions, we also work with growth-stage startups that need scalable data infrastructure. We adjust our approach and pricing based on your stage and budget — same quality standards throughout.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) setHeight(bodyRef.current.scrollHeight);
  }, [faq.a]);

  return (
    <div
      style={{
        background: isOpen ? "var(--surface-2)" : "var(--surface-1)",
        border: `1px solid ${isOpen ? "rgba(37,99,235,0.25)" : "var(--border)"}`,
        borderRadius: 16,
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        boxShadow: isOpen ? "0 8px 32px rgba(37,99,235,0.1)" : "none",
      }}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "22px 24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Index chip */}
          <span
            style={{
              flexShrink: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "0.7rem",
              color: isOpen ? "#60a5fa" : "var(--text-3)",
              transition: "color 0.2s",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.975rem",
              letterSpacing: "-0.01em",
              color: isOpen ? "var(--text-1)" : "var(--text-2)",
              lineHeight: 1.4,
              transition: "color 0.2s",
            }}
          >
            {faq.q}
          </span>
        </div>

        {/* Toggle icon */}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            flexShrink: 0,
            background: isOpen
              ? "rgba(37,99,235,0.15)"
              : "rgba(255,255,255,0.04)",
            border: `1px solid ${isOpen ? "rgba(37,99,235,0.3)" : "var(--border)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.25s",
          }}
        >
          {isOpen ? (
            <Minus style={{ width: 14, height: 14, color: "#60a5fa" }} />
          ) : (
            <Plus style={{ width: 14, height: 14, color: "var(--text-3)" }} />
          )}
        </div>
      </button>

      {/* Answer */}
      <div
        style={{
          maxHeight: isOpen ? height : 0,
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div ref={bodyRef} style={{ padding: "0 24px 24px 64px" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "0.9rem",
              color: "var(--text-2)",
              lineHeight: 1.75,
              borderTop: "1px solid var(--border)",
              paddingTop: 18,
            }}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [hv, setHv] = useState(false);
  const [lv, setLv] = useState(false);

  useEffect(() => {
    const h = headerRef.current,
      l = listRef.current;
    if (!h || !l) return;
    const io1 = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setHv(true);
          io1.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    const io2 = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setLv(true);
          io2.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    io1.observe(h);
    io2.observe(l);
    return () => {
      io1.disconnect();
      io2.disconnect();
    };
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
        className="max-w-4xl mx-auto px-6"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: 72,
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
            opacity: hv ? 1 : 0,
            transform: hv ? "none" : "translateY(24px)",
          }}
        >
          <div className="section-line" style={{ margin: "0 auto 20px" }} />
          <div className="badge" style={{ marginBottom: 20 }}>
            FAQ
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              letterSpacing: "-0.04em",
              color: "var(--text-1)",
              marginBottom: 16,
            }}
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "1.05rem",
              color: "var(--text-2)",
              lineHeight: 1.7,
            }}
          >
            Common questions about our services, process, and approach.
          </p>
        </div>

        {/* Accordion */}
        <div
          ref={listRef}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginBottom: 64,
            transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
            opacity: lv ? 1 : 0,
            transform: lv ? "none" : "translateY(24px)",
          }}
        >
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            padding: "44px 40px",
            borderRadius: 20,
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(6,214,160,0.06))",
            border: "1px solid rgba(37,99,235,0.18)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1.3rem",
              letterSpacing: "-0.02em",
              color: "var(--text-1)",
              marginBottom: 12,
            }}
          >
            Still Have Questions?
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "0.95rem",
              color: "var(--text-2)",
              lineHeight: 1.7,
              maxWidth: 420,
              margin: "0 auto 28px",
            }}
          >
            We're happy to discuss your specific requirements and answer
            anything.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
