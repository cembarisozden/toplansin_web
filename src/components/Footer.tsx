import { Zap, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-background to-muted/20">
      {/* Top gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse-glow rounded-2xl bg-gradient-to-br from-primary to-accent opacity-50 blur-xl" />
                          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl overflow-hidden shadow-lg transition-transform group-hover:rotate-3">
  <img
    src="/logo.png"
    alt="Toplansın Logo"
    className="h-[130%] w-[130%] object-cover"
  />
</div>
              </div>
              <div>
                <div className="text-xl font-black">Toplansın</div>
                <div className="text-sm text-muted-foreground">Yeni Nesil Platform</div>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Halı saha rezervasyonlarınızı kolayca yönetin. Güvenli, hızlı ve kullanıcı dostu
              mobil uygulamamızla her yerden erişin.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
  {[
    { icon: Instagram, href: "https://www.instagram.com/toplansinapp/", label: "Instagram" },
    { icon: Linkedin,  href: "https://www.linkedin.com/company/toplansin/", label: "LinkedIn" },
  ].map((social, idx) => {
    const Icon = social.icon;
    return (
      <a
        key={idx}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        title={social.label}
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-card transition-all hover:scale-110 hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-primary-foreground hover:shadow-premium"
      >
        <Icon className="h-5 w-5" />
        <span className="sr-only">{social.label}</span>
      </a>
    );
  })}
</div>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="font-bold">Hızlı Linkler</h3>
            <ul className="space-y-2">
              {[
                { label: "Ana Sayfa", href: "/" },
                { label: "Özellikler", href: "/#ozellikler" },
                { label: "KVKK", href: "/kvkk" },
                { label: "SSS", href: "/sss" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Zap className="h-3 w-3 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="font-bold">Yasal</h3>
            <ul className="space-y-2">
              {[
                { label: "Gizlilik Politikası", href: "/privacy" },
                { label: "Kullanım Şartları", href: "/terms" },
                { label: "Çerez Politikası", href: "/cookies" },
                { label: "KVKK", href: "/kvkk" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Zap className="h-3 w-3 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-center sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} <span className="font-semibold">Toplansın Teknoloji</span>. Tüm hakları saklıdır.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -bottom-48 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-48 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />
      </div>
    </footer>
  );
};
