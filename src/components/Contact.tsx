import { useState, useEffect, useRef } from "react";
import { Mail, Phone, Send, ArrowRight } from "lucide-react";

const STEPS = [
  "We'll review your requirements and schedule a call.",
  "We'll discuss your project scope and timeline.",
  "We'll provide a detailed proposal and next steps.",
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

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const { ref: leftRef, v: leftV } = useReveal();
  const { ref: rightRef, v: rightV } = useReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`;
    window.location.href = `mailto:sales@slashcurate.com?subject=Contact Request from ${form.name}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputStyle = (name: string) => ({
    width: "100%",
    padding: "14px 16px",
    background: focused === name ? "rgba(37,99,235,0.05)" : "var(--surface-1)",
    border: `1px solid ${focused === name ? "rgba(37,99,235,0.5)" : "var(--border)"}`,
    borderRadius: 12,
    fontFamily: "var(--font-body)",
    fontWeight: 400,
    fontSize: "0.9rem",
    color: "var(--text-1)",
    outline: "none",
    transition: "all 0.25s",
    boxSizing: "border-box" as const,
    boxShadow: focused === name ? "0 0 0 3px rgba(37,99,235,0.1)" : "none",
  });

  const labelStyle = {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "0.78rem",
    letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
    color: "var(--text-3)",
    display: "block",
    marginBottom: 8,
  };

  return (
    <section id="contact" style={{ padding: "120px 0", position: "relative", background: "var(--black)" }}>
      {/* BG */}
      <div className="bg-grid-fine" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />
      <div style={{
        position: "absolute", bottom: "20%", left: 0,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="max-w-7xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>

        {/* Section badge */}
        <div style={{ marginBottom: 72, textAlign: "center" }}>
          <div className="section-line" style={{ margin: "0 auto 20px" }} />
          <div className="badge">Get In Touch</div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 64,
          alignItems: "start",
        }} className="contact-grid">

          {/* Left — info */}
          <div ref={leftRef} style={{
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
            opacity: leftV ? 1 : 0,
            transform: leftV ? "none" : "translateX(-28px)",
          }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              letterSpacing: "-0.04em", color: "var(--text-1)", marginBottom: 16,
            }}>
              Let's <span className="gradient-text">Talk</span>
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontWeight: 300,
              fontSize: "1rem", color: "var(--text-2)", lineHeight: 1.7, marginBottom: 48,
            }}>
              Tell us about your project. We'll get back to you within 24 hours with next steps.
            </p>

            {/* Contact methods */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
              {[
                { icon: Mail,  label: "Email",  href: "mailto:sales@slashcurate.com", text: "sales@slashcurate.com", color: "#2563eb" },
                { icon: Phone, label: "Phone",  href: "tel:+911204545975",            text: "+91-120-4545-975",     color: "#06d6a0" },
              ].map(({ icon: Icon, label, href, text, color }) => (
                <a key={label} href={href} style={{
                  display: "flex", alignItems: "center", gap: 16,
                  padding: "18px 20px",
                  background: "var(--surface-2)", border: "1px solid var(--border)",
                  borderRadius: 14, textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  borderLeft: `3px solid ${color}`,
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface-3)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface-2)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: `${color}15`, border: `1px solid ${color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon style={{ width: 18, height: 18, color }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 3 }}>{label}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text-1)", fontWeight: 400 }}>{text}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* What happens next */}
            <div style={{
              padding: "28px",
              background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16,
            }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.95rem", color: "var(--text-1)", marginBottom: 20,
              }}>
                What Happens Next?
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {STEPS.map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{
                      width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                      background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--font-display)", fontWeight: 700,
                      fontSize: "0.72rem", color: "#60a5fa",
                    }}>
                      {i + 1}
                    </div>
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.875rem", color: "var(--text-2)", lineHeight: 1.6 }}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div ref={rightRef} style={{
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
            opacity: rightV ? 1 : 0,
            transform: rightV ? "none" : "translateX(28px)",
          }}>
            <div style={{
              padding: "44px 40px",
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: 24,
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Top gradient line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: "linear-gradient(90deg, #2563eb, #06d6a0)",
              }} />

              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "1.2rem", letterSpacing: "-0.02em",
                color: "var(--text-1)", marginBottom: 32,
              }}>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {/* Name + Company row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input
                      name="name" type="text" value={form.name}
                      onChange={handleChange} placeholder="Jane Smith"
                      onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                      required style={inputStyle("name")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input
                      name="company" type="text" value={form.company}
                      onChange={handleChange} placeholder="Acme Corp"
                      onFocus={() => setFocused("company")} onBlur={() => setFocused(null)}
                      style={inputStyle("company")}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Work Email</label>
                  <input
                    name="email" type="email" value={form.email}
                    onChange={handleChange} placeholder="jane@company.com"
                    onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                    required style={inputStyle("email")}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Project Details</label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and specific requirements..."
                    rows={5} required
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("message"), resize: "none" }}
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary" style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "16px 24px",
                  fontSize: "0.925rem",
                  marginTop: 4,
                }}>
                  {sent ? "Opening Email Client…" : "Send Message"}
                  <Send style={{ width: 16, height: 16 }} />
                </button>

                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.78rem",
                  color: "var(--text-3)", textAlign: "center",
                }}>
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
