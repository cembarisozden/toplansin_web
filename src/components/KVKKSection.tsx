import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Lock, Eye, CheckCircle, AlertCircle } from "lucide-react";

export const KVKKSection = () => {
  return (
    <section id="kvkk" className="relative overflow-hidden py-20 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-96 w-96 animate-pulse-glow rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 animate-pulse-glow rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 backdrop-blur-sm">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold text-primary">Güvenlik & Gizlilik</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Verileriniz
              <br />
              <span className="gradient-text">Bizimle Güvende</span>
            </h2>

            {/* Description */}
            <p className="text-xl leading-relaxed text-muted-foreground">
              6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında tüm verileriniz
              <span className="font-bold text-foreground"> maksimum güvenlik </span>
              ile işlenir ve saklanır. Şeffaflık bizim için önceliktir.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-6">
                <div className="mb-2 text-4xl font-black text-primary">100%</div>
                <div className="text-sm font-medium text-muted-foreground">KVKK Uyumlu</div>
              </div>
              <div className="rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5 p-6">
                <div className="mb-2 text-4xl font-black text-accent">256bit</div>
                <div className="text-sm font-medium text-muted-foreground">Şifreleme</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent shadow-premium hover:scale-105 hover:shadow-glow">
                <a href="/kvkk">
                  <FileText className="mr-2 h-5 w-5" />
                  KVKK Aydınlatma Metni
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-2 hover:scale-105 hover:border-primary hover:shadow-premium">
                <a href="/privacy">
                  <Lock className="mr-2 h-5 w-5" />
                  Gizlilik Politikası
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid gap-6">
            {/* Top Row - 2 Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="group relative overflow-hidden border-2 p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-premium">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 shadow-lg">
                    <FileText className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Şeffaflık</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Verilerinizin nasıl işlendiğini açık ve anlaşılır şekilde paylaşıyoruz.
                  </p>
                </div>
              </Card>

              <Card className="group relative overflow-hidden border-2 p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-premium">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg">
                    <Lock className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Güvenlik</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Tüm verileriniz end-to-end şifreleme ile güvenli sunucularda saklanır.
                  </p>
                </div>
              </Card>
            </div>

            {/* Large Card */}
            <Card className="group relative overflow-hidden border-2 p-8 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-premium">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="space-y-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Haklarınız</h3>
                <p className="leading-relaxed text-muted-foreground">
                  KVKK kapsamında verilerinize erişim, düzeltme ve silme haklarınız bulunmaktadır.
                  Talepleriniz en kısa sürede değerlendirilir.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: Eye, text: "Verilerinizi Görüntüleyin" },
                    { icon: CheckCircle, text: "Düzeltme Hakkı" },
                    { icon: AlertCircle, text: "Silme Hakkı" },
                    { icon: FileText, text: "Bilgi Alma Hakkı" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 rounded-lg bg-background/50 p-3"
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Bottom Row - 2 Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="group relative overflow-hidden border-2 p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-premium">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Denetim</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Düzenli güvenlik denetimleri ve uyumluluk kontrolleri yapılır.
                  </p>
                </div>
              </Card>

              <Card className="group relative overflow-hidden border-2 p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-premium">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-400 to-rose-500 shadow-lg">
                    <AlertCircle className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Hızlı Destek</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Veri güvenliği ile ilgili talepleriniz 24 saat içinde yanıtlanır.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
