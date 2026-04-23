"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
}

export function useSparkParticles() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  const triggerSparks = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    const newSparks: Spark[] = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: cx,
      y: cy,
      angle: (i * 360) / 8,
    }));

    setSparks(newSparks);
    setTimeout(() => setSparks([]), 600);
  };

  return { sparks, triggerSparks };
}

export default function SparkParticles({ sparks }: { sparks: Spark[] }) {
  return (
    <AnimatePresence>
      {sparks.map((spark) => {
        const rad = (spark.angle * Math.PI) / 180;
        const distance = 30 + Math.random() * 20;
        return (
          <motion.div
            key={spark.id}
            className="absolute pointer-events-none z-50"
            style={{ left: spark.x, top: spark.y }}
            initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            animate={{
              opacity: 0,
              scale: 0,
              x: Math.cos(rad) * distance,
              y: Math.sin(rad) * distance,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan shadow-[0_0_6px_#06B6D4]" />
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
}
