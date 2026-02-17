// ContactPage.tsx
import ContactComponent from "../components/Contact";
import FAQ from "../components/FAQ";
import ThreeBackground from "../components/ThreeBackground";

export default function ContactPage() {
  return (
    <div style={{ position: "relative", background: "var(--black)" }}>
      <ThreeBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <ContactComponent />
        <FAQ />
      </div>
    </div>
  );
}
