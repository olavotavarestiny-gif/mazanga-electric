"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function LightningBolt({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pathD = "M 20 0 L 5 50 L 18 50 L 0 100 L 25 40 L 12 40 Z";

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 30 100"
      className={`${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <defs>
        <filter id="lightning-glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d={pathD}
        fill="none"
        stroke="#06B6D4"
        strokeWidth="1.5"
        filter="url(#lightning-glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.path
        d={pathD}
        fill="#06B6D4"
        opacity={0.15}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.5 }}
      />
    </motion.svg>
  );
}
