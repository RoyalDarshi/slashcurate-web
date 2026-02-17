import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import FloatingParticles from "../components/FloatingParticles";
import ThreeBackground from "../components/ThreeBackground";

export default function Home() {
  return (
    <div style={{ position: "relative", background: "var(--black)" }}>
      {/* Fixed 3D ambient layer */}
      <ThreeBackground />

      {/* Hero — has its own canvas for particle network */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
      </div>

      {/* Testimonials */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Testimonials />
      </div>
    </div>
  );
}
