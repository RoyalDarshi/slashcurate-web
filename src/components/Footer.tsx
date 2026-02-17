import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const LINKS = {
  company: [
    { name: "Home",         to: "/" },
    { name: "Services",     to: "/services" },
    { name: "About",        to: "/about" },
    { name: "Case Studies", to: "/case-studies" },
    { name: "Contact",      to: "/contact" },
  ],
  services: [
    { name: "BI & Analytics",    to: "/services" },
    { name: "AI & ML Solutions", to: "/services" },
    { name: "Data Engineering",  to: "/services" },
    { name: "Cloud Migration",   to: "/services" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const isActive = (p: string) => location.pathname === p;

  return (
    <footer
      style={{
        background: "var(--surface-1)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), rgba(6,214,160,0.4), transparent)",
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6"
        style={{ padding: "80px 24px 48px" }}
      >
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "64px",
            marginBottom: "64px",
          }}
          className="flex-col md:grid"
        >
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #2563eb, #06d6a0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: "#fff",
                }}
              >
                SC
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: "-0.02em",
                  color: "var(--text-1)",
                }}
              >
                SlashCurate Technologies
              </span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "0.925rem",
                color: "var(--text-3)",
                lineHeight: 1.75,
                maxWidth: "380px",
                marginBottom: "32px",
              }}
            >
              Enterprise data, BI, AI, and cloud solutions that help modern
              organizations build systems that scale reliably.
            </p>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="mailto:sales@slashcurate.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "var(--text-3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-3)")}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "8px",
                    background: "rgba(37,99,235,0.1)",
                    border: "1px solid rgba(37,99,235,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Mail style={{ width: 15, height: 15, color: "#60a5fa" }} />
                </div>
                sales@slashcurate.com
              </a>

              <a
                href="tel:+911204545975"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "var(--text-3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-3)")}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "8px",
                    background: "rgba(37,99,235,0.1)",
                    border: "1px solid rgba(37,99,235,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone style={{ width: 15, height: 15, color: "#60a5fa" }} />
                </div>
                +91-120-4545-975
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-3)",
                marginBottom: "20px",
              }}
            >
              Company
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      color: isActive(link.to) ? "var(--text-1)" : "var(--text-3)",
                      textDecoration: "none",
                      fontWeight: isActive(link.to) ? 600 : 400,
                      transition: "color 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-1)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = isActive(link.to) ? "var(--text-1)" : "var(--text-3)")}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-3)",
                marginBottom: "20px",
              }}
            >
              Services
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {LINKS.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      color: "var(--text-3)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-1)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-3)")}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.825rem",
              color: "var(--text-3)",
            }}
          >
            © {year} SlashCurate Technologies Pvt Ltd. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: "28px" }}>
            {[
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms",   label: "Terms of Service" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.825rem",
                  color: "var(--text-3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-3)")}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
