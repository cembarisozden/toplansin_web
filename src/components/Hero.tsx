import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, Zap, Shield, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-96 w-96 animate-pulse-glow rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-1/4 top-40 h-96 w-96 animate-pulse-glow rounded-full bg-accent/20 blur-[120px] animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 animate-pulse-glow rounded-full bg-primary/10 blur-[100px] animation-delay-4000" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-5 py-2 shadow-premium backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-r from-primary to-accent"></span>
              </span>
              <span className="text-sm font-bold text-primary">Mobil Uygulama • Yeni Nesil</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Halı Saha
              <br />
              <span className="gradient-text">Rezervasyonu</span>
              <br />
              <span className="text-4xl font-bold text-muted-foreground sm:text-5xl md:text-6xl">
                Artık Çok Kolay!
              </span>
            </h1>

            {/* Description */}
<p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
  Toplansın: Müsait saatleri anında bul, tek tuşla{" "}
  <span className="font-bold text-foreground">rezervasyonunu yap. Abonelik</span> ve{" "}
  <span className="font-bold text-foreground">anlık bildirimlerle</span> maçını zahmetsizce planla.
</p>


            {/* Features Quick List */}
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: Zap, text: "Anında Rezervasyon" },
                { icon: Shield, text: "KVKK Uyumlu" },
                { icon: CheckCircle2, text: "Kolay Kullanım" },
                { icon: Smartphone, text: "Mobil Odaklı" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl bg-card/50 p-3 backdrop-blur-sm transition-all hover:bg-card"
                >
                  <div className="rounded-lg bg-gradient-to-br from-primary to-accent p-2">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="font-semibold">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.toplansin.toplansin"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-accent to-primary bg-[length:200%_200%] p-[2px] shadow-premium transition-all hover:scale-[1.02] hover:shadow-glow active:scale-[0.98]"
              >
                <div className="flex items-center gap-4 rounded-2xl bg-card px-6 py-5 transition-colors group-hover:bg-card/50">
                  <svg
                    className="h-12 w-12 transition-transform group-hover:scale-110"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 52v408c0 8 9 13 16 9l288-204c6-4 6-13 0-17L112 43c-7-5-16 0-16 9z" fill="#34A853" />
                    <path d="M112 43l176 176 57-40L136 34c-9-6-24-1-24 9z" fill="#FBBC04" />
                    <path d="M288 219L112 395c0 10 15 15 24 9l209-148-57-37z" fill="#EA4335" />
                    <path d="M345 181l69 49c6 4 6 13 0 17l-69 49-57-40 57-40z" fill="#4285F4" />
                  </svg>
                  <div className="text-left">
                    <div className="text-sm font-medium text-muted-foreground">Hemen İndirin</div>
                    <div className="text-xl font-black">Google Play</div>
                  </div>
                </div>
              </a>

              <a
                href="https://apps.apple.com/us/app/toplansın/id6746457731"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card px-6 py-5 shadow-lg transition-all hover:scale-[1.02] hover:border-primary hover:shadow-premium active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <svg className="h-12 w-12 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-sm font-medium text-muted-foreground">Hemen İndirin</div>
                    <div className="text-xl font-black">App Store</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

{/* Right Content - 3D Phone Mockup */}
<div className="relative flex items-center justify-center">
  {/* Floating Background Elements */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="h-[500px] w-[500px] animate-float rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-[100px]" />
  </div>

  {/* Phone Container */}
  <div className="relative animate-float" style={{ animationDelay: '0.5s' }}>
    {/* Glow Effect */}
    <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-primary to-accent opacity-30 blur-2xl" />
    
    {/* Phone Frame */}
    <div className="relative aspect-[10/20] w-full max-w-[320px] overflow-hidden rounded-[3rem] border-8 border-foreground/20 bg-gradient-to-br from-foreground/5 to-foreground/10 p-3 shadow-float backdrop-blur-sm">
      {/* Notch */}
      <div className="absolute left-1/2 top-3 h-8 w-32 -translate-x-1/2 rounded-full bg-foreground/80" />
      
  {/* Screen Content — full-bleed photo */}
<div className="relative h-full w-full overflow-hidden rounded-[2.5rem]">
  <img
    src="/hero.png"            // public/hero.png
    alt="Toplansın"
    className="block h-full w-full object-cover select-none pointer-events-none"
    draggable="false"
    loading="eager"
  />
</div>

    </div>
  </div>
</div>



        </div>
      </div>
    </section>
  );
};
