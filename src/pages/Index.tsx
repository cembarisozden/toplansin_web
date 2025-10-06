import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { KVKKSection } from "@/components/KVKKSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LegalPanel } from "@/components/LegalPanel";

const Index = () => {
  const [legalPanelOpen, setLegalPanelOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onOpenLegalPanel={() => setLegalPanelOpen(true)} />
      <Hero />
      <Features />
      <KVKKSection />
      <Contact />
      <Footer />
      <LegalPanel open={legalPanelOpen} onClose={() => setLegalPanelOpen(false)} />
    </div>
  );
};

export default Index;
