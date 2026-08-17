import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";

export function NavIntroGate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if ((window as unknown as { __introDone?: boolean }).__introDone) {
      setVisible(true);
      return;
    }
    const onDone = () => setVisible(true);
    window.addEventListener("intro-done", onDone);
    return () => window.removeEventListener("intro-done", onDone);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <Nav />
    </motion.div>
  );
}
