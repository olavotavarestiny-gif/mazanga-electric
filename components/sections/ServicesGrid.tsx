"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Camera,
  Shield,
  Cpu,
  Factory,
  LayoutGrid,
  X,
  CheckCircle,
  Clock,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Image from "next/image";

const services = [
  {
    id: "residencial",
    icon: Zap,
    title: "Eletricidade Residencial",
    badge: "Qualidade Garantida",
    image: "/images/eletrica-residencial-profissionais-qualificados.jpg",
    color: "from-blue-600/20 to-transparent",
    specs: [
      "Instalações até 100A mono/trifásico",
      "Quadros QGBT certificados",
      "Iluminação LED com eficiência >90lm/W",
      "Garantia de 24 meses",
    ],
    description:
      "Instalações elétricas residenciais completas com materiais de alta qualidade e conformidade total com as normas angolanas. Da tomada ao quadro elétrico.",
  },
  {
    id: "cctv",
    icon: Camera,
    title: "CCTV & Vigilância",
    badge: "24h Suporte",
    image: "/images/cctv.jpg",
    color: "from-cyan-600/20 to-transparent",
    specs: [
      "Câmeras IP 4K (8MP) visão noturna",
      "Armazenamento NVR até 16TB",
      "App mobile iOS/Android",
      "Monitoramento remoto 24/7",
    ],
    description:
      "Sistemas CCTV profissionais com câmeras de alta definição, inteligência artificial e monitoramento remoto para a sua segurança total.",
  },
  {
    id: "cercas",
    icon: Shield,
    title: "Cercas Elétricas",
    badge: "Alta Segurança",
    image: "/images/cerca-eletrica-20.jpg",
    color: "from-yellow-600/20 to-transparent",
    specs: [
      "Voltagem: 8.000V - 10.000V",
      "Centrais inteligentes com GSM",
      "Sensores anti-sabotagem",
      "Manutenção trimestral incluída",
    ],
    description:
      "Sistemas de cercas elétricas de alta performance com centrais inteligentes e alertas instantâneos para máxima proteção perimetral.",
  },
  {
    id: "geradores",
    icon: Cpu,
    title: "Grupos Geradores",
    badge: "5kVA - 500kVA",
    image: "/images/194850-entenda-como-funciona-um-grupo-gerador-de-energia-B-1024x576.jpg",
    color: "from-green-600/20 to-transparent",
    specs: [
      "Potência de 5kVA a 500kVA",
      "Marcas: Cummins, Perkins, SDMO",
      "Quadros ATS automáticos incluídos",
      "Contratos de manutenção preventiva",
    ],
    description:
      "Instalação e manutenção de grupos geradores industriais e residenciais com transferência automática ATS para continuidade operacional.",
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Eletricidade Industrial",
    badge: "Norma IEC 60364",
    image: "/images/montagem-eletrica-industrial-03.jpg",
    color: "from-purple-600/20 to-transparent",
    specs: [
      "Subestações até 33kV",
      "Instalações em BT/MT",
      "Projetos SCADA/automação",
      "Eficiência energética IEC",
    ],
    description:
      "Projetos elétricos industriais de grande porte incluindo subestações, sistemas SCADA e automação industrial com equipe certificada.",
  },
  {
    id: "pt",
    icon: LayoutGrid,
    title: "Montagem de PT",
    badge: "Normas IEC/NEC",
    image: "/images/Novo PTD Guimaraes 2_2_1.jpg",
    color: "from-orange-600/20 to-transparent",
    specs: [
      "Painéis customizados até 4000A",
      "Proteção Schneider/ABB/Siemens",
      "Testes de isolamento e continuidade",
      "Certificado de conformidade",
    ],
    description:
      "Montagem de painéis de distribuição e transformação customizados com componentes de marcas líderes e certificação técnica completa.",
  },
];

interface ServiceModalProps {
  service: (typeof services)[0] | null;
  onClose: () => void;
  onRequest: () => void;
}

function ServiceModal({ service, onClose, onRequest }: ServiceModalProps) {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-electric-black/80 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          className="relative bg-electric-dark border border-electric-blue-800/60 rounded-2xl max-w-lg w-full overflow-hidden shadow-electric-lg z-10"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-electric-dark via-electric-dark/50 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-electric-black/60 border border-electric-blue-800/60 flex items-center justify-center text-electric-white/60 hover:text-electric-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-6 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-electric-blue-600/20 border border-electric-blue-600/30 shrink-0">
                <Icon size={20} className="text-electric-cyan" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-xl text-electric-white">{service.title}</h3>
                <span className="text-xs text-electric-cyan font-montserrat">{service.badge}</span>
              </div>
            </div>

            <p className="text-electric-white/60 text-sm leading-relaxed">{service.description}</p>

            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-montserrat text-electric-white/40 uppercase tracking-wider">
                Especificações Técnicas
              </h4>
              {service.specs.map((spec) => (
                <div key={spec} className="flex items-center gap-2 text-sm text-electric-white/70">
                  <CheckCircle size={14} className="text-electric-cyan shrink-0" />
                  {spec}
                </div>
              ))}
            </div>

            <Button onClick={() => { onClose(); onRequest(); }} className="w-full mt-2">
              Solicitar este Serviço
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

interface ServicesGridProps {
  onCTAClick: () => void;
}

export default function ServicesGrid({ onCTAClick }: ServicesGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  return (
    <section id="servicos" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-montserrat text-electric-cyan tracking-widest uppercase mb-3">
            {"// NOSSOS SERVIÇOS"}
          </span>
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl text-electric-white mb-4 tracking-tight">
            <span className="font-light">Soluções Técnicas</span>{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue-400 to-electric-cyan">
              Completas
            </span>
          </h2>
          <p className="text-electric-white/50 text-lg max-w-2xl mx-auto">
            Da instalação residencial à subestação industrial — executamos projetos elétricos com excelência técnica certificada.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={staggerItem}>
                <Card
                  onClick={() => setSelectedService(service)}
                  className="h-full group"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden rounded-t-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-electric-dark/80 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 rounded bg-electric-black/70 border border-electric-blue-600/40 text-xs font-montserrat text-electric-cyan backdrop-blur-sm">
                        {service.badge}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-3 left-3 p-2 rounded-lg bg-electric-blue-600/20 border border-electric-blue-600/30 backdrop-blur-sm">
                      <Icon size={18} className="text-electric-cyan" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3">
                    <h3 className="font-montserrat font-bold text-lg text-electric-white group-hover:text-electric-cyan transition-colors">
                      {service.title}
                    </h3>
                    <ul className="flex flex-col gap-1.5">
                      {service.specs.slice(0, 3).map((spec) => (
                        <li key={spec} className="flex items-center gap-2 text-xs text-electric-white/50">
                          <div className="w-1 h-1 rounded-full bg-electric-blue-400 shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 pt-1">
                      <Clock size={12} className="text-electric-cyan" />
                      <span className="text-xs text-electric-white/40 font-montserrat">
                        Clique para detalhes técnicos
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequest={onCTAClick}
      />
    </section>
  );
}
