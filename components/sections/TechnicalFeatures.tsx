"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, ShieldCheck, Clock, Zap, TrendingUp } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Card from "@/components/ui/Card";

const features = [
  {
    icon: Award,
    title: "Qualidade em Cada Detalhe",
    stat: "100%",
    statLabel: "Satisfação",
    description:
      "Cada projecto é executado com rigor técnico e materiais de primeira qualidade. O nosso compromisso: entrega perfeita dentro do prazo acordado, sem surpresas.",
    size: "large",
    color: "text-yellow-400",
    bg: "from-yellow-500/10 to-transparent",
  },
  {
    icon: Users,
    title: "Experiência Internacional",
    stat: "12+",
    statLabel: "Anos",
    description: "Mais de 12 anos de experiência, com formação e projectos de referência internacional — padrões globais aplicados em Angola.",
    size: "medium",
    color: "text-electric-cyan",
    bg: "from-cyan-500/10 to-transparent",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de 2 Anos",
    stat: "24",
    statLabel: "Meses",
    description: "Garantia completa em todos os serviços realizados.",
    size: "small",
    color: "text-green-400",
    bg: "from-green-500/10 to-transparent",
  },
  {
    icon: Clock,
    title: "Atendimento 24/7",
    stat: "2h",
    statLabel: "Resposta",
    description: "Suporte de emergência disponível 24 horas por dia, 7 dias por semana.",
    size: "small",
    color: "text-blue-400",
    bg: "from-blue-500/10 to-transparent",
  },
  {
    icon: Zap,
    title: "Obras de Referência",
    stat: "50+",
    statLabel: "Alto Padrão",
    description: "Hotéis, resorts, quintas, bombas de gasolina e instalações industriais — obras que definem o nosso portefólio de excelência em Angola.",
    size: "medium",
    color: "text-electric-blue-400",
    bg: "from-blue-600/10 to-transparent",
  },
  {
    icon: TrendingUp,
    title: "Eficiência Energética",
    stat: "35%",
    statLabel: "Economia",
    description: "Nossas soluções em LED e automação reduzem o consumo energético em até 35%.",
    size: "small",
    color: "text-purple-400",
    bg: "from-purple-500/10 to-transparent",
  },
];

export default function TechnicalFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-electric-black via-electric-blue-900/5 to-electric-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-montserrat text-electric-cyan tracking-widest uppercase mb-3">
            {"// POR QUE MAZANGA ELECTRIC"}
          </span>
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl text-electric-white mb-4 tracking-tight">
            <span className="font-light">Diferenciais</span>{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue-400 to-electric-cyan">
              Técnicos
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto"
        >
          {/* Large card */}
          <motion.div variants={staggerItem} className="md:col-span-2 md:row-span-2">
            <Card className={`h-full min-h-[280px] bg-gradient-to-br ${features[0].bg} p-8 flex flex-col justify-between`}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-yellow-500/15 border border-yellow-500/20">
                  <Award size={28} className={features[0].color} />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-xl text-electric-white">{features[0].title}</h3>
                  <p className="text-electric-white/50 text-sm mt-1 max-w-xs">{features[0].description}</p>
                </div>
              </div>
              <div className="mt-8">
                <span className="font-montserrat font-bold text-5xl text-yellow-400">{features[0].stat}</span>
                <span className="ml-2 text-electric-white/40 text-sm font-montserrat uppercase">{features[0].statLabel}</span>
                <div className="mt-3 w-full h-1.5 rounded-full bg-electric-blue-800/40 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Medium and small cards */}
          {features.slice(1).map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={staggerItem}>
                <Card className={`h-full min-h-[130px] bg-gradient-to-br ${feature.bg} p-5 flex flex-col justify-between`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-electric-blue-800/40`}>
                      <Icon size={18} className={feature.color} />
                    </div>
                    <h3 className="font-montserrat font-semibold text-sm text-electric-white leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <div>
                    <span className={`font-montserrat font-bold text-3xl ${feature.color}`}>{feature.stat}</span>
                    <span className="ml-1 text-electric-white/40 text-xs font-montserrat">{feature.statLabel}</span>
                    {feature.size !== "small" && (
                      <p className="text-electric-white/40 text-xs mt-2 leading-relaxed">{feature.description}</p>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
