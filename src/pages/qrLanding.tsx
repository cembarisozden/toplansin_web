import { Apple, Chrome } from "lucide-react"

export default function QRLanding() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="flex justify-center mb-8">
          <img src="/logo.png" alt="TOPLANSIN Logo" className="h-20 w-auto object-contain drop-shadow-lg" />
        </div>

        <div className="bg-card rounded-3xl shadow-premium p-8 space-y-6 border border-border/50">
          {/* Başlık */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold gradient-text">TOPLANSIN</h1>
            <p className="text-sm text-muted-foreground">Halı Saha Rezervasyon Uygulaması</p>
          </div>

          {/* İndirme Butonları */}
          <div className="space-y-3">
            <a
              href="https://apps.apple.com/us/app/toplansın/id6746457731"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-black text-white rounded-2xl py-4 px-6 hover:shadow-float hover:-translate-y-1 transition-all duration-300"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-90">Download on the</div>
                <div className="text-base font-semibold">App Store</div>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.toplansin.toplansin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground rounded-2xl py-4 px-6 hover:shadow-float hover:-translate-y-1 transition-all duration-300"
            >
              <Chrome className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-90">GET IT ON</div>
                <div className="text-base font-semibold">Google Play</div>
              </div>
            </a>

            <a
              href="https://toplansin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-secondary text-secondary-foreground rounded-2xl py-4 px-6 hover:bg-secondary/80 hover:-translate-y-1 transition-all duration-300"
            >
              <Chrome className="w-5 h-5" />
              <span className="font-semibold">Web Sitesini Ziyaret Et</span>
            </a>
          </div>

          {/* Alt Bilgi */}
          <div className="text-center pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">Halı saha rezervasyonlarınızı kolayca yapın</p>
          </div>
        </div>
      </div>
    </div>
  )
}
