import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import FloatingParticles from "../components/FloatingParticles";
import ThreeBackground from "../components/ThreeBackground";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient background */}
      <ThreeBackground />
      <FloatingParticles />

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero />
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-24"
      >
        <Testimonials />
      </motion.section>
    </div>
  );
}
