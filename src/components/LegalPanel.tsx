import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface LegalPanelProps {
  open: boolean;
  onClose: () => void;
}

export const LegalPanel = ({ open, onClose }: LegalPanelProps) => {
  const legalLinks = [
    { title: "KVKK Aydınlatma Metni", href: "/kvkk" },
    { title: "Gizlilik Politikası", href: "/privacy" },
    { title: "Kullanım Şartları", href: "/terms" },
    { title: "Çerez Politikası", href: "/cookies" },
    { title: "Sık Sorulan Sorular", href: "/sss" },
  ];

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle>Hızlı Menü</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-2">
          {legalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
