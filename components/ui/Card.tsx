"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = "", glowOnHover = true, onClick }: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={
        glowOnHover
          ? {
              y: -6,
              boxShadow: "0 20px 50px rgba(37,99,235,0.35), 0 0 30px rgba(6,182,212,0.15)",
              borderColor: "rgba(6,182,212,0.5)",
            }
          : {}
      }
      transition={{ duration: 0.3 }}
      className={`bg-electric-dark border border-electric-blue-800/40 rounded-xl relative overflow-hidden ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue-400/40 to-transparent" />
      {children}
    </motion.div>
  );
}
