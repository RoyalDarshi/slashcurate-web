import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 50,
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: hovered
          ? "linear-gradient(135deg, #3b82f6, #06d6a0)"
          : "linear-gradient(135deg, #2563eb, #059669)",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: hovered
          ? "0 8px 32px rgba(37,99,235,0.5), 0 0 0 1px rgba(37,99,235,0.3)"
          : "0 4px 20px rgba(37,99,235,0.3)",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        transform: visible
          ? hovered ? "translateY(-3px) scale(1.08)" : "translateY(0) scale(1)"
          : "translateY(16px) scale(0.8)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <ArrowUp style={{ width: 18, height: 18, color: "#fff" }} />
    </button>
  );
}
