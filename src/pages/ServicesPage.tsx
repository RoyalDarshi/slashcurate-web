// ServicesPage.tsx
import ServicesComponent from "../components/Services";
import Process from "../components/Process";
import ThreeBackground from "../components/ThreeBackground";

export default function ServicesPage() {
  return (
    <div style={{ position: "relative", background: "var(--black)" }}>
      <ThreeBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <ServicesComponent />
        <Process />
      </div>
    </div>
  );
}
