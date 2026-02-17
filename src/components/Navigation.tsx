import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("/")}
            className="text-xl font-bold text-white hover:opacity-80 transition-opacity"
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SlashCurate
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                    location.pathname === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 bg-white text-slate-900 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? "text-white bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-4 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors mt-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
