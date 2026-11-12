"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Boton() {
  const router = useRouter();

  return (
    <div className="cta-container">
      <motion.button
        className="primary-button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => router.push("/home")}
      >
        COMENZAR
      </motion.button>
    </div>
  );
}

