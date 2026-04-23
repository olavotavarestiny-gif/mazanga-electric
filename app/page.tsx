"use client";

import ElectricGrid from "@/components/effects/ElectricGrid";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TechnicalFeatures from "@/components/sections/TechnicalFeatures";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import FinalCTA from "@/components/sections/FinalCTA";
import TechnicalFooter from "@/components/sections/TechnicalFooter";

const WHATSAPP_URL = "https://wa.me/244993111111?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento.";

function openWhatsApp() {
  window.open(WHATSAPP_URL, "_blank");
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-electric-black overflow-x-hidden">
      <ElectricGrid />
      <Navbar onCTAClick={openWhatsApp} />
      <HeroSection onCTAClick={openWhatsApp} />

      <div id="servicos">
        <ServicesGrid onCTAClick={openWhatsApp} />
      </div>

      <div id="diferenciais">
        <TechnicalFeatures />
      </div>

      <div id="processo">
        <ProcessTimeline />
      </div>

      <FinalCTA onCTAClick={openWhatsApp} />

      <div id="contactos">
        <TechnicalFooter />
      </div>
    </main>
  );
}
