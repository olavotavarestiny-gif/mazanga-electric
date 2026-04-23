"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, MapPin, FileText, Wrench, HeartHandshake } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Solicitação",
    description: "Preencha o formulário online com os detalhes do seu projeto ou entre em contacto.",
    detail: "Resposta em até 2h úteis",
    color: "#2563EB",
  },
  {
    icon: MapPin,
    number: "02",
    title: "Visita Técnica",
    description: "Nossa equipe vai ao local para avaliação técnica gratuita e levantamento completo.",
    detail: "Avaliação gratuita",
    color: "#06B6D4",
  },
  {
    icon: FileText,
    number: "03",
    title: "Orçamento",
    description: "Receba uma proposta técnica detalhada com especificações, materiais e prazo de execução.",
    detail: "Proposta em 24h",
    color: "#3B82F6",
  },
  {
    icon: Wrench,
    number: "04",
    title: "Execução",
    description: "Instalação certificada pela nossa equipe técnica com materiais de primeira qualidade.",
    detail: "Instalação certificada",
    color: "#60A5FA",
  },
  {
    icon: HeartHandshake,
    number: "05",
    title: "Suporte",
    description: "Acompanhamento pós-instalação, manutenção preventiva e suporte técnico 24/7.",
    detail: "Garantia de 24 meses",
    color: "#10B981",
  },
];

export default function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-electric-black via-electric-blue-900/10 to-electric-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-montserrat text-electric-cyan tracking-widest uppercase mb-3">
            {"// COMO TRABALHAMOS"}
          </span>
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl text-electric-white mb-4 tracking-tight">
            <span className="font-light">Processo</span>{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue-400 to-electric-cyan">
              Técnico
            </span>
          </h2>
          <p className="text-electric-white/50 text-lg max-w-2xl mx-auto">
            Do primeiro contacto à entrega final — um processo transparente e profissional em cada etapa.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative flex items-start justify-between mb-8">
            <div className="absolute top-7 left-[10%] right-[10%] h-px bg-electric-blue-800/40" />
            <motion.div
              className="absolute top-7 left-[10%] h-px bg-gradient-to-r from-electric-blue-600 to-electric-cyan"
              initial={{ width: 0 }}
              animate={isInView ? { width: "80%" } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="relative flex flex-col items-center text-center w-1/5 px-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15 }}
                >
                  {/* Node */}
                  <motion.div
                    className="relative w-14 h-14 rounded-full border-2 flex items-center justify-center bg-electric-dark z-10 mb-4"
                    style={{ borderColor: step.color, boxShadow: `0 0 15px ${step.color}40` }}
                    animate={isInView ? {
                      boxShadow: [`0 0 0px ${step.color}00`, `0 0 20px ${step.color}60`, `0 0 0px ${step.color}00`],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  >
                    <Icon size={22} style={{ color: step.color }} />
                    <div
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-electric-black font-montserrat text-[9px] font-bold"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>
                  </motion.div>

                  <h3 className="font-montserrat font-bold text-electric-white text-sm mb-1">{step.title}</h3>
                  <p className="text-electric-white/40 text-xs leading-relaxed mb-2">{step.description}</p>
                  <span
                    className="text-xs font-montserrat px-2 py-0.5 rounded-full border"
                    style={{ color: step.color, borderColor: `${step.color}40`, backgroundColor: `${step.color}10` }}
                  >
                    {step.detail}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:hidden flex flex-col gap-0"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.number} variants={staggerItem} className="flex gap-4">
                {/* Line + Node */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center bg-electric-dark shrink-0"
                    style={{ borderColor: step.color }}
                  >
                    <Icon size={18} style={{ color: step.color }} />
                  </motion.div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 w-px bg-gradient-to-b my-1" style={{ backgroundImage: `linear-gradient(to bottom, ${step.color}60, transparent)` }} />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-montserrat" style={{ color: step.color }}>{step.number}</span>
                    <h3 className="font-montserrat font-bold text-electric-white">{step.title}</h3>
                  </div>
                  <p className="text-electric-white/50 text-sm leading-relaxed mb-2">{step.description}</p>
                  <span
                    className="text-xs font-montserrat px-2 py-0.5 rounded-full border"
                    style={{ color: step.color, borderColor: `${step.color}40` }}
                  >
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
