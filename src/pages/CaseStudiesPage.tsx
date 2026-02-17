// CaseStudiesPage.tsx
import CaseStudiesComponent from "../components/CaseStudies";
import ThreeBackground from "../components/ThreeBackground";

export default function CaseStudiesPage() {
  return (
    <div style={{ position: "relative", background: "var(--black)" }}>
      <ThreeBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <CaseStudiesComponent />
      </div>
    </div>
  );
}
