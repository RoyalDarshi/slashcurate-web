import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: "Home", to: "/" },
      { name: "Services", to: "/services" },
      { name: "About", to: "/about" },
      { name: "Contact", to: "/contact" },
    ],
    services: [
      { name: "BI & Analytics", to: "/services" },
      { name: "AI & ML Solutions", to: "/services" },
      { name: "Data Engineering", to: "/services" },
      { name: "Cloud Migration", to: "/services" },
    ],
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                SlashCurate Technologies
              </span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Enterprise data, BI, AI, and cloud solutions that help modern
              organizations build systems that scale.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:sales@slashcurate.com"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm">sales@slashcurate.com</span>
              </a>

              <a
                href="tel:+911204545975"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm">+91-120-4545-975</span>
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} SlashCurate Technologies Pvt Ltd. All rights
              reserved.
            </p>

            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
