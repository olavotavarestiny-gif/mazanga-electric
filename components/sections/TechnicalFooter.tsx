"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

const services = [
  "Eletricidade Residencial",
  "CCTV & Vigilância",
  "Cercas Elétricas",
  "Grupos Geradores",
  "Eletricidade Industrial",
  "Montagem de PT",
];

const socialLinks = [
  { label: "FB", name: "Facebook", href: "https://www.facebook.com/mazangaelectric" },
  { label: "IG", name: "Instagram", href: "https://www.instagram.com/mazangaelectric.ao/" },
  { label: "IN", name: "LinkedIn", href: "https://www.linkedin.com/company/mazanga-electric-eletricidade-industrial" },
];

export default function TechnicalFooter() {
  return (
    <footer className="relative border-t border-electric-blue-800/30 bg-electric-black">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue-600/40 to-transparent" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center">
              <Image
                src="/images/logomazanga.png"
                alt="Mazanga Electric"
                width={240}
                height={72}
                className="h-20 w-auto object-contain"
                style={{ filter: "invert(1)" }}
              />
            </div>
            <p className="text-electric-white/40 text-sm leading-relaxed">
              Empresa angolana especializada em soluções elétricas residenciais, comerciais e industriais desde 2014.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map(({ label, name, href }) => (
                <motion.a
                  key={name}
                  href={href}
                  whileHover={{ scale: 1.1, borderColor: "#06B6D4" }}
                  aria-label={name}
                  className="w-9 h-9 rounded-lg border border-electric-blue-800/40 bg-electric-dark flex items-center justify-center text-electric-white/40 hover:text-electric-cyan transition-colors font-montserrat text-xs font-bold"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-montserrat font-bold text-electric-white text-sm uppercase tracking-wider">
              Serviços
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-electric-white/40 text-sm hover:text-electric-cyan transition-colors animated-underline inline-block"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-4">
            <h3 className="font-montserrat font-bold text-electric-white text-sm uppercase tracking-wider">
              Contactos
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-electric-white/40 text-sm">
                <MapPin size={15} className="text-electric-cyan mt-0.5 shrink-0" />
                <span>Viana, Zango 2,<br />Luanda, Angola</span>
              </li>
              <li className="flex items-center gap-2 text-electric-white/40 text-sm">
                <Phone size={15} className="text-electric-cyan shrink-0" />
                <a href="tel:+244943802955" className="hover:text-electric-cyan transition-colors">
                  +244 943 802 955
                </a>
              </li>
              <li className="flex items-center gap-2 text-electric-white/40 text-sm">
                <Phone size={15} className="text-green-400 shrink-0" />
                <a href="https://wa.me/244993111111" target="_blank" rel="noopener noreferrer" className="hover:text-electric-cyan transition-colors">
                  +244 993 111 111 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2 text-electric-white/40 text-sm">
                <Mail size={15} className="text-electric-cyan shrink-0" />
                <a href="mailto:joaquim@mazangaeletric.pro" className="hover:text-electric-cyan transition-colors">
                  joaquim@mazangaeletric.pro
                </a>
              </li>
            </ul>
          </div>

          {/* Hours + Certs */}
          <div className="flex flex-col gap-4">
            <h3 className="font-montserrat font-bold text-electric-white text-sm uppercase tracking-wider">
              Horário & Certificações
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-electric-white/40 text-sm">
                <Clock size={14} className="text-electric-cyan" />
                <span>Seg - Sex: 08:00 - 18:00</span>
              </div>
              <div className="flex items-center gap-2 text-electric-white/40 text-sm">
                <Clock size={14} className="text-electric-cyan" />
                <span>Sáb: 08:00 - 13:00</span>
              </div>
              <div className="flex items-center gap-2 text-electric-white/40 text-sm">
                <Clock size={14} className="text-yellow-400" />
                <span>Emergências 24/7</span>
              </div>
            </div>

            {/* Cert badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              {["12 Anos", "Prazo Garantido", "Qualidade Técnica"].map((cert) => (
                <span
                  key={cert}
                  className="px-2 py-1 rounded border border-electric-blue-800/40 text-xs font-montserrat text-electric-white/40"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-electric-blue-800/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-electric-white/25 text-xs font-montserrat">
            © 2024 Mazanga Electric. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-success-green animate-pulse" />
            <span className="text-electric-white/30 text-xs font-montserrat">Sistema Operacional</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
