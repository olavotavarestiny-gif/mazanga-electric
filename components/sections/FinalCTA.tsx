"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, PhoneCall, Award, CalendarCheck, Briefcase } from "lucide-react";
import Button from "@/components/ui/Button";
import VoltageIndicator from "@/components/effects/VoltageIndicator";

const badges = [
  { icon: Award, label: "12 Anos de Experiência" },
  { icon: CalendarCheck, label: "Entrega no Prazo" },
  { icon: Briefcase, label: "50+ Obras de Referência" },
];

interface FinalCTAProps {
  onCTAClick: () => void;
}

export default function FinalCTA({ onCTAClick }: FinalCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue-900/30 via-electric-black to-electric-blue-800/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-electric-black/80 via-transparent to-electric-black/80 pointer-events-none" />

      {/* Radial glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-electric-blue-600/15 blur-[100px] pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Voltage indicator */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <VoltageIndicator />
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-montserrat text-4xl sm:text-5xl lg:text-6xl text-electric-white mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="font-light">Pronto para</span>{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue-400 to-electric-cyan">
            Energizar
          </span>
          <br />
          <span className="font-light">o seu Projecto?</span>
        </motion.h2>

        <motion.p
          className="text-electric-white/60 text-lg mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Entre em contacto agora mesmo. Nossa equipe técnica está pronta para apresentar
          a melhor solução elétrica para a sua necessidade.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button size="lg" onClick={onCTAClick} className="text-lg px-10 py-5">
            <Zap size={20} className="inline mr-2 fill-current" />
            Falar com Especialista
          </Button>
          <a
            href="tel:+244942802955"
            className="flex items-center gap-3 px-6 py-4 rounded-lg border border-electric-blue-600/40 text-electric-white/70 hover:text-electric-white hover:border-electric-cyan transition-all duration-300"
          >
            <PhoneCall size={18} className="text-electric-cyan shrink-0" />
            <span className="font-montserrat text-base sm:text-lg">+244 942 802 955</span>
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-electric-blue-800/40 bg-electric-dark/50"
            >
              <Icon size={14} className="text-electric-cyan" />
              <span className="text-xs text-electric-white/60 font-montserrat">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
