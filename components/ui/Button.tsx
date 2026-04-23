"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const variants = {
  primary:
    "bg-electric-blue-600 hover:bg-electric-blue-800 text-white transition-colors duration-200",
  secondary:
    "bg-electric-dark border border-electric-blue-600/50 text-electric-white hover:border-electric-cyan transition-colors duration-200",
  outline:
    "border border-electric-blue-400/60 text-electric-blue-400 hover:bg-electric-blue-900/50 hover:border-electric-cyan transition-colors duration-200",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled,
  className = "",
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.15 }}
      className={`relative font-semibold rounded-md font-montserrat ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      {children}
    </motion.button>
  );
}
