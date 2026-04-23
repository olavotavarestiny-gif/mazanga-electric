"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "Contactos", href: "#contactos" },
];

interface NavbarProps {
  onCTAClick: () => void;
}

export default function Navbar({ onCTAClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setScrolled(y > 50));
    return unsub;
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-electric-black/90 backdrop-blur-md border-b border-electric-blue-800/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logomazanga.png"
              alt="Mazanga Electric"
              width={240}
              height={72}
              priority
              className="h-20 w-auto object-contain"
              style={{ filter: "invert(1)" }}
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-electric-white/60 hover:text-electric-white animated-underline transition-colors font-montserrat"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Button size="sm" onClick={onCTAClick}>
              Pedir Orçamento
            </Button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-electric-white/60 hover:text-electric-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden bg-electric-dark border-t border-electric-blue-800/30 overflow-hidden"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-electric-white/70 hover:text-electric-cyan transition-colors font-medium font-montserrat"
            >
              {label}
            </a>
          ))}
          <Button onClick={() => { setIsOpen(false); onCTAClick(); }} className="w-full mt-2">
            Pedir Orçamento
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
}
