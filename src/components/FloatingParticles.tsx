import { motion } from "framer-motion";

export default function FloatingParticles() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Your particles logic */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-blue-500/10 blur-3xl top-20 left-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl bottom-20 right-10"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
