import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalPanel } from "@/components/LegalPanel";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cookies = () => {
  const [legalPanelOpen, setLegalPanelOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onOpenLegalPanel={() => setLegalPanelOpen(true)} />
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <Button asChild variant="ghost" className="mb-8">
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ana Sayfaya Dön
          </a>
        </Button>

        <article className="prose prose-lg max-w-none">
          <h1>Çerez (Cookie) Politikası</h1>
          <p>
            Toplansın olarak, web sitemizde ve mobil uygulamalarımızda sizlere daha iyi, güvenli ve kişiselleştirilmiş bir deneyim sunabilmek amacıyla çerezler (cookies) kullanıyoruz. Bu politika, çerezlerin ne olduğunu, hangi türlerini neden kullandığımızı ve bu çerezleri nasıl yönetebileceğinizi açıklar.
          </p>

          <h2>1. Çerez Nedir?</h2>
          <p>
            Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza veya cihazınıza kaydedilen küçük veri dosyalarıdır. Bu dosyalar, kullanıcı tercihlerinizi hatırlayarak web sitesinin düzgün çalışmasını ve deneyiminizin geliştirilmesini sağlar.
          </p>

          <h2>2. Kullandığımız Çerez Türleri</h2>
          <ul>
            <li>
              <strong>Zorunlu Çerezler:</strong> Sitenin temel işlevlerini yerine getirebilmesi için gereklidir. Oturum açma, form gönderme, güvenlik gibi işlemleri sağlar.
            </li>
            <li>
              <strong>Performans ve Analitik Çerezler:</strong> Web sitemizin nasıl kullanıldığını anlamamıza, hataları tespit etmemize ve performansını geliştirmemize yardımcı olur. (Yalnızca açık rızanızla etkinleştirilir.)
            </li>
            <li>
              <strong>Kişiselleştirme Çerezleri:</strong> Tercihlerinizi (dil, şehir, halı saha filtresi vb.) hatırlayarak size özel bir deneyim sunar.
            </li>
            <li>
              <strong>Reklam ve Pazarlama Çerezleri:</strong> İlgi alanlarınıza uygun kampanyalar veya tanıtımlar gösterebilmemizi sağlar. (Yalnızca açık rızanızla etkinleştirilir.)
            </li>
          </ul>

          <h2>3. Çerezleri Ne Amaçla Kullanıyoruz?</h2>
          <ul>
            <li>Hizmetlerin güvenli, hızlı ve hatasız çalışmasını sağlamak,</li>
            <li>Kullanıcı oturumlarını korumak ve kimlik doğrulamak,</li>
            <li>Rezervasyon, abonelik ve favori tercihlerinizi hatırlamak,</li>
            <li>Site trafiğini analiz etmek ve performans ölçmek,</li>
            <li>Deneyiminizi kişiselleştirmek,</li>
            <li>Uygulama ve reklam etkinliğini ölçmek.</li>
          </ul>

          <h2>4. Üçüncü Taraf Çerezleri</h2>
          <p>
            Toplansın, hizmet kalitesini artırmak amacıyla üçüncü taraf analiz ve pazarlama araçlarından yararlanabilir. Bunlara örnek olarak Google Analytics, Firebase, Meta (Facebook/Instagram) ve Apple SDK’ları gösterilebilir. Bu araçlar, kendi gizlilik ve çerez politikalarına tabidir.
          </p>

          <h2>5. Çerezleri Nasıl Yönetebilirsiniz?</h2>
          <p>
            Çoğu web tarayıcısı çerezleri otomatik olarak kabul eder, ancak dilerseniz tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya silme işlemi yapabilirsiniz. Ancak zorunlu çerezlerin devre dışı bırakılması site işlevlerinde aksamalara neden olabilir.
          </p>

          <h3>Tarayıcı Bazlı Ayar Yönetimi</h3>
          <ul>
            <li>
              <strong>Google Chrome:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler ve diğer site verileri
            </li>
            <li>
              <strong>Mozilla Firefox:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri
            </li>
            <li>
              <strong>Safari:</strong> Tercihler → Gizlilik → Çerezleri Engelle
            </li>
            <li>
              <strong>Microsoft Edge:</strong> Ayarlar → Gizlilik, arama ve hizmetler → Çerezler
            </li>
          </ul>

          <h2>6. Kişisel Verilerin Korunması</h2>
          <p>
            Çerezler aracılığıyla elde edilen kişisel veriler, 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) kapsamında korunur. Verileriniz yalnızca belirtilen amaçlar doğrultusunda işlenir ve üçüncü kişilerle paylaşılmaz.
          </p>

          <h2>7. Rızanızı Nasıl Geri Alabilirsiniz?</h2>
          <p>
            Daha önce kabul ettiğiniz çerez kullanımına ilişkin rızanızı, tarayıcı veya uygulama ayarlarınızdan istediğiniz zaman geri çekebilirsiniz. Rızanızı geri çekmeniz bazı özelliklerin çalışmamasına yol açabilir.
          </p>

          <h2>8. Politika Güncellemeleri</h2>
          <p>
            Toplansın, teknolojik gelişmeler veya yasal düzenlemeler doğrultusunda bu Çerez Politikasını zaman zaman güncelleyebilir. Güncellenmiş sürüm web sitemizde yayımlandığı tarihten itibaren geçerli olur.
          </p>

          <h2>9. İletişim</h2>
          <p>
            Çerez kullanımı veya gizlilik uygulamalarımız hakkında her türlü soru, görüş ve talebiniz için bizimle iletişime geçebilirsiniz:
          </p>
          <p>
            E-posta:{" "}
            <a href="mailto:info@toplansin.com" className="text-primary">
              info@toplansin.com
            </a>
          </p>

          <p className="mt-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Toplansın. Tüm hakları saklıdır.
          </p>
        </article>
      </main>
      <Footer />
      <LegalPanel open={legalPanelOpen} onClose={() => setLegalPanelOpen(false)} />
    </div>
  );
};

export default Cookies;
