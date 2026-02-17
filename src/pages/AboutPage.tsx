// AboutPage.tsx
import AboutComponent from "../components/About";
import TechStack from "../components/TechStack";
import ThreeBackground from "../components/ThreeBackground";

export default function AboutPage() {
  return (
    <div style={{ position: "relative", background: "var(--black)" }}>
      <ThreeBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <AboutComponent />
        <TechStack />
      </div>
    </div>
  );
}
