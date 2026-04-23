"use client";

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const baseClass =
  "w-full bg-electric-blue-900/50 border rounded-lg px-4 py-3 text-electric-white placeholder-electric-white/30 transition-all duration-300 outline-none font-montserrat text-sm focus:border-electric-cyan focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] border-electric-blue-800/60";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-electric-white/80 font-montserrat">{label}</label>
      <input ref={ref} className={`${baseClass} ${error ? "border-red-500/70" : ""} ${className}`} {...props} />
      {error && (
        <p className="text-xs text-red-400 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  )
);
Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", ...props }, ref) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-electric-white/80 font-montserrat">{label}</label>
      <textarea
        ref={ref}
        className={`${baseClass} resize-none ${error ? "border-red-500/70" : ""} ${className}`}
        rows={4}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-400 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  )
);
Textarea.displayName = "Textarea";

export const Select = forwardRef<
  HTMLSelectElement,
  { label: string; error?: string; children: React.ReactNode; className?: string } & React.SelectHTMLAttributes<HTMLSelectElement>
>(({ label, error, children, className = "", ...props }, ref) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium text-electric-white/80 font-montserrat">{label}</label>
    <select
      ref={ref}
      className={`${baseClass} cursor-pointer ${error ? "border-red-500/70" : ""} ${className}`}
      style={{ backgroundColor: "#0F1F3D" }}
      {...props}
    >
      {children}
    </select>
    {error && (
      <p className="text-xs text-red-400 flex items-center gap-1">
        <span>⚠</span> {error}
      </p>
    )}
  </div>
));
Select.displayName = "Select";
