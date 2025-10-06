import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onOpenLegalPanel: () => void;
}

export const Header = ({ onOpenLegalPanel }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      {/* Top gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <a href="/" className="group flex items-center gap-3 transition-all hover:scale-105">
          {/* Logo with glow effect */}
          <div className="relative">
            <div className="absolute inset-0 animate-pulse-glow rounded-2xl bg-gradient-to-br from-primary to-accent opacity-0 blur-xl transition-opacity group-hover:opacity-50" />
           <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl overflow-hidden shadow-lg transition-transform group-hover:rotate-3">
  <img
    src="/logo.png"
    alt="Toplansın Logo"
    className="h-[130%] w-[130%] object-cover"
  />
</div>


          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black leading-none">Toplansın</span>
            <span className="text-xs text-muted-foreground">Yeni Nesil Platform</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {[
            { label: "Özellikler", id: "ozellikler" },
            { label: "SSS", href: "/sss" },
            { label: "İletişim", id: "iletisim" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => item.id ? scrollToSection(item.id) : null}
              {...(item.href ? { onClick: () => window.location.href = item.href } : {})}
              className="relative rounded-xl px-4 py-2 text-sm font-semibold text-muted-foreground transition-all hover:text-foreground"
            >
              <span className="relative z-10">{item.label}</span>
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 transition-opacity hover:opacity-100" />
            </button>
          ))}
          <Button
            onClick={onOpenLegalPanel}
            size="sm"
            className="ml-2 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg hover:scale-105 hover:shadow-premium"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Hızlı Menü
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="group relative rounded-xl p-2 transition-all hover:bg-primary/10 md:hidden"
          aria-label="Menü"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 transition-transform group-hover:rotate-90" />
          ) : (
            <Menu className="h-6 w-6 transition-transform group-hover:scale-110" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="animate-fade-in border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="container mx-auto flex flex-col gap-2 p-4">
            {[
              { label: "Özellikler", id: "ozellikler" },
              { label: "KVKK", id: "kvkk" },
              { label: "SSS", href: "/sss" },
              { label: "İletişim", id: "iletisim" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => item.id ? scrollToSection(item.id) : window.location.href = item.href!}
                className="rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={onOpenLegalPanel}
              size="sm"
              className="mt-2 w-full rounded-full bg-gradient-to-r from-primary to-accent shadow-lg hover:scale-105 hover:shadow-premium"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Hızlı Menü
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
