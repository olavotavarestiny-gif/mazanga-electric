"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Briefcase, Clock } from "lucide-react";
import dynamic from "next/dynamic";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { AnimatedNumber } from "@/components/effects/VoltageIndicator";
import Button from "@/components/ui/Button";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const stats = [
  { icon: Briefcase, value: 500, suffix: "+", label: "Projetos Concluídos" },
  { icon: Users, value: 1200, suffix: "+", label: "Clientes Satisfeitos" },
  { icon: Clock, value: 12, suffix: " Anos", label: "de Experiência" },
];

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-electric-blue-900/30 via-electric-black to-electric-black pointer-events-none" />

      {/* Radial glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-electric-blue-600/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric-blue-600/30 bg-electric-blue-900/40 text-electric-white/70 text-xs font-montserrat tracking-wide">
                <CheckCircle size={12} className="text-electric-cyan" />
                EMPRESA ANGOLANA DE CONFIANÇA
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={staggerItem}
              className="font-montserrat text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight"
            >
              <span className="font-light text-electric-white/80">Energia que Move</span>{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue-400 to-electric-cyan">
                Luanda.
              </span>
              <br />
              <span className="font-light text-electric-white/80">Tecnologia que</span>{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-electric-blue-400">
                Protege.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={staggerItem}
              className="text-electric-white/60 text-lg leading-relaxed max-w-xl font-montserrat"
            >
              Mais de 12 anos a executar projectos eléctricos residenciais, comerciais e industriais em Angola — com qualidade técnica, materiais certificados e entrega no prazo acordado.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={onCTAClick}>
                Solicitar Orçamento
              </Button>
              <Button variant="outline" size="lg" onClick={() => {
                document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Ver Serviços
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-electric-blue-800/40"
            >
              {stats.map(({ icon: Icon, value, suffix, label }) => (
                <motion.div key={label} variants={staggerItem} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <Icon size={14} className="text-electric-cyan" />
                    <span className="font-montserrat font-bold text-xl text-electric-white">
                      <AnimatedNumber target={value} suffix={suffix} />
                    </span>
                  </div>
                  <span className="text-electric-white/40 text-xs font-montserrat">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: YouTube Video */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-electric-blue-800/50 shadow-electric-lg aspect-video bg-electric-blue-900/20">
              <ReactPlayer
                src="https://www.youtube.com/watch?v=R9GCmRgqj8g"
                width="100%"
                height="100%"
                controls
                light
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>

            {/* Decorative glows */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-electric-blue-600/15 blur-2xl pointer-events-none"
            />
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -top-4 left-1/2 w-32 h-32 rounded-full bg-electric-cyan/8 blur-3xl pointer-events-none"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-8 bg-gradient-to-b from-electric-blue-400/0 to-electric-blue-400/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-electric-blue-400/50" />
        </div>
      </motion.div>
    </section>
  );
}
