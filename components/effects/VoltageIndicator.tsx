"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (isInView) raw.set(target);
  }, [isInView, raw, target]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export default function VoltageIndicator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative w-32 h-32 md:w-40 md:h-40">
      {/* Outer ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50" cy="50" r="40"
          fill="none"
          stroke="rgba(37,99,235,0.2)"
          strokeWidth="6"
        />
        <motion.circle
          cx="50" cy="50" r="40"
          fill="none"
          stroke="url(#volt-gradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="251.2"
          initial={{ strokeDashoffset: 251.2 }}
          animate={isInView ? { strokeDashoffset: 63 } : {}}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        />
        <defs>
          <linearGradient id="volt-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-electric-cyan font-montserrat text-2xl font-bold leading-none">
          <AnimatedNumber target={220} />
          <span className="text-sm">V</span>
        </span>
        <span className="text-electric-white/50 text-xs font-montserrat mt-1">TENSÃO</span>
      </div>

      {/* Glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            "0 0 0px rgba(37,99,235,0)",
            "0 0 20px rgba(37,99,235,0.4)",
            "0 0 0px rgba(37,99,235,0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
}

export { AnimatedNumber };
