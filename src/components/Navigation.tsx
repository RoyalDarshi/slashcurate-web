import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/contact", label: "Contact" },
  ];

  const handleNav = (path: string) => {
    navigate(path);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(5,5,8,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("/")}
            className="flex items-center gap-2 group"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {/* Logo mark */}
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #2563eb, #06d6a0)",
                fontFamily: "var(--font-display)",
                color: "#fff",
              }}
            >
              SC
            </div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1.05rem",
                letterSpacing: "-0.02em",
                color: "#f1f5f9",
              }}
            >
              SlashCurate
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}

            <Link
              to="/contact"
              className="btn-primary"
              style={{ fontSize: "0.85rem", padding: "10px 22px" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200"
            style={{
              color: "#f1f5f9",
              background: open ? "rgba(255,255,255,0.1)" : "transparent",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className="md:hidden transition-all duration-400 overflow-hidden"
        style={{
          maxHeight: open ? "400px" : "0",
          opacity: open ? 1 : 0,
          background: "rgba(5,5,8,0.97)",
          backdropFilter: "blur(24px)",
          borderTop: open ? "1px solid rgba(255,255,255,0.06)" : "none",
          transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {navItems.map((item, i) => (
            <button
              key={item.path}
              onClick={() => handleNav(item.path)}
              className="w-full text-left px-4 py-3 rounded-xl transition-all duration-200"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.95rem",
                letterSpacing: "-0.01em",
                color: location.pathname === item.path ? "#f1f5f9" : "#64748b",
                background:
                  location.pathname === item.path
                    ? "rgba(255,255,255,0.06)"
                    : "transparent",
                border: "none",
                cursor: "pointer",
                animationDelay: `${i * 0.05}s`,
              }}
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 justify-center"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
