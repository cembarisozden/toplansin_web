import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="iletisim" className="relative overflow-hidden py-20 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold text-primary">İletişim</span>
            </div>
            <h2 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Bizimle <span className="gradient-text">İletişime</span> Geçin
            </h2>
            <p className="text-xl text-muted-foreground">
              Sorularınız, önerileriniz veya destek talepleriniz için{" "}
              <span className="font-bold text-foreground">7/24</span> buradayız
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="group relative overflow-hidden border-2 p-8 transition-all hover:-translate-y-2 hover:border-primary hover:shadow-premium">
              {/* Animated Background */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative space-y-6">
                {/* Icon */}
                <div className="relative inline-flex">
                  <div className="absolute inset-0 animate-pulse-glow rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Mail className="h-10 w-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">E-posta</h3>
                  <a
                    href="mailto:info@toplansin.com"
                    className="block text-lg font-semibold text-primary transition-colors hover:text-accent hover:underline"
                  >
                    info@toplansin.com
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Genel sorular ve bilgi için
                  </p>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <span className="text-xs font-semibold text-primary">Aktif</span>
                </div>
              </div>
            </Card>

            <Card className="group relative overflow-hidden border-2 p-8 transition-all hover:-translate-y-2 hover:border-primary hover:shadow-premium">
              {/* Animated Background */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative space-y-6">
                {/* Icon */}
                <div className="relative inline-flex">
                  <div className="absolute inset-0 animate-pulse-glow rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Destek</h3>
                  <a
                    href="mailto:destek@toplansin.com"
                    className="block text-lg font-semibold text-primary transition-colors hover:text-accent hover:underline"
                  >
                    destek@toplansin.com
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Teknik destek ve yardım
                  </p>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                  <span className="text-xs font-semibold text-accent">7/24</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border-2 border-border bg-card p-6 transition-all hover:border-primary">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-pink-500">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold">Telefon Desteği</div>
                <div className="text-sm text-muted-foreground">Çok yakında aktif olacak</div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border-2 border-border bg-card p-6 transition-all hover:border-primary">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold">Lokasyon</div>
                <div className="text-sm text-muted-foreground">Türkiye • Online</div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 p-12 text-center shadow-premium">
            <h3 className="mb-4 text-3xl font-black">Hızlı Destek mi İstiyorsunuz?</h3>
            <p className="mb-8 text-lg text-muted-foreground">
              Uygulama içinden doğrudan bizimle iletişime geçebilirsiniz
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.toplansin.toplansin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-bold text-primary-foreground shadow-premium transition-all hover:scale-105 hover:shadow-glow active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Uygulamayı İndirin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
