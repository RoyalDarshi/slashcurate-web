import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const STATS = [
  { value: "50+", label: "Enterprise Clients" },
  { value: "99%", label: "Success Rate" },
  { value: "200+", label: "Projects Delivered" },
  { value: "24h", label: "Avg. Response" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas particle network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let raf: number;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(96,165,250,${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(96,165,250,0.5)";
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--black)",
      }}
    >
      {/* Canvas network */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {/* Grid overlay */}
      <div
        className="bg-grid-fine"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      {/* Ambient orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
          filter: "blur(1px)",
          pointerEvents: "none",
          animation: "float-y 10s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,214,160,0.09) 0%, transparent 70%)",
          filter: "blur(1px)",
          pointerEvents: "none",
          animation: "float-y 13s ease-in-out infinite reverse",
        }}
      />

      {/* Content */}
      <div
        className="max-w-7xl mx-auto px-6 py-32"
        style={{ position: "relative", zIndex: 10, width: "100%" }}
      >
        <div style={{ maxWidth: "860px" }}>
          {/* Badge */}
          <div
            className="badge animate-fade-up"
            style={{ marginBottom: "32px" }}
          >
            <Zap style={{ width: 12, height: 12 }} />
            Enterprise Data &amp; AI Solutions
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              color: "#ffffff",
              marginBottom: "28px",
            }}
          >
            Build Systems That{" "}
            <span
              className="gradient-text-hero glow-text"
              style={{ fontWeight: 900 }}
            >
              Actually Work
            </span>
          </h1>

          {/* Sub */}
          <p
            className="animate-fade-up delay-200"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "clamp(1.1rem, 2.2vw, 1.3rem)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.65,
              maxWidth: "620px",
              marginBottom: "40px",
            }}
          >
            We help enterprises modernize data platforms, implement business
            intelligence, and build AI-driven systems that scale—without the
            overhead.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up delay-300"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              marginBottom: "72px",
            }}
          >
            <Link to="/contact" className="btn-primary">
              Schedule a Call
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
            <Link to="/services" className="btn-ghost">
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div
            className="animate-fade-up delay-400"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "32px",
              paddingTop: "40px",
              borderTop: "1px solid var(--border)",
            }}
          >
            {STATS.map((s, i) => (
              <div key={i}>
                <div className="stat-value" style={{ marginBottom: "6px" }}>
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.825rem",
                    color: "var(--text-3)",
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "180px",
          background: "linear-gradient(to top, var(--black), transparent)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
