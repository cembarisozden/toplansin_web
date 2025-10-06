import { Card } from "@/components/ui/card";
import {   Zap,
  Bell,
  Shield,
  Smartphone,
  CheckCircle2,
  Calendar,
  Users,
  FilterIcon,
  RefreshCcw,} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Anında Rezervasyon",
    description:
      "Favori halı sahanızda müsait saatleri görün, saniyeler içinde rezervasyon yapın.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: RefreshCcw,
    title: "Haftalık Abonelikler",
    description:
      "Belirli gün ve saatlerde otomatik olarak yenilenen haftalık rezervasyonlar oluşturun.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: FilterIcon,
    title: "Akıllı Filtreleme",
    description:
      "Şehir, tarih, saat aralığı veya saha özelliklerine göre sonuçları kolayca filtreleyin.",
    color: "from-emerald-400 to-green-500",
  },
  {
    icon: Users,
    title: "Eksik Oyuncu Bul (Çok Yakında!)",
    description:
      "Eksik kalan oyuncular için ilan açın veya takımlara katılın. Oyun asla yarım kalmasın!",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Bell,
    title: "Gerçek Zamanlı Bildirimler",
    description:
      "Rezervasyon onayları, iptaller ve abonelik yenilemeleri için push bildirim alın.",
    color: "from-sky-400 to-cyan-500",
  },
  {
    icon: Calendar,
    title: "Takvim ve Görünürlük",
    description:
      "Tüm rezervasyonlarınızı haftalık takvimde görün, geçmiş ve yaklaşan maçları yönetin.",
    color: "from-indigo-400 to-blue-500",
  },
  {
    icon: Shield,
    title: "Güvenli Altyapı",
    description:
      "Rezervasyon ve ödeme işlemleriniz güvenli sunucularda, şifrelenmiş olarak saklanır.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Her Cihazda Erişim",
    description:
      "Toplansın’a mobil, tablet veya masaüstünden erişin; her zaman ve her yerden rezervasyon yapın.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: CheckCircle2,
    title: "Kolay ve Hızlı Kullanım",
    description:
      "Modern ve sade arayüz sayesinde tüm işlemler birkaç dokunuşla tamamlanır.",
    color: "from-teal-400 to-cyan-500",
  },
];

export const Features = () => {
  return (
    <section id="ozellikler" className="relative overflow-hidden py-20 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-96 w-96 animate-pulse-glow rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold text-primary">Özellikler</span>
          </div>
          <h2 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Neden <span className="gradient-text">Toplansın</span>?
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Kullanıcı deneyimini ön planda tutan premium özelliklerimizle saha rezervasyonlarınızı
            <span className="font-bold text-foreground"> yeni seviyeye taşıyoruz</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-premium"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Animated Glow */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="relative inline-flex">
                    <div className="absolute inset-0 animate-pulse-glow rounded-2xl bg-gradient-to-br from-primary to-accent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
                    <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold transition-colors group-hover:text-primary">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent p-2">
                      <svg
                        className="h-full w-full text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-muted-foreground">
            Ve daha fazlası... Uygulamayı indirin ve keşfedin!
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.toplansin.toplansin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-bold text-primary-foreground shadow-premium transition-all hover:scale-105 hover:shadow-glow active:scale-95"
          >
            <Smartphone className="h-5 w-5" />
            Hemen İndirin
          </a>
        </div>
      </div>
    </section>
  );
};
