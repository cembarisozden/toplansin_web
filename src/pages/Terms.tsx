import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalPanel } from "@/components/LegalPanel";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
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
          <h1>Kullanım Şartları</h1>
          <p>
            <strong>Son güncelleme:</strong> <time dateTime="2025-08-14">14 Ağustos 2025</time>
          </p>

          <p>
            Bu Kullanım Şartları ("Şartlar"), <strong>Toplansın</strong> ("Uygulama") tarafından sunulan
            hizmetlerden yararlanan tüm kullanıcılar ("Kullanıcı") için geçerlidir. Uygulamayı kullanarak bu
            Şartlar'ı okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz.
          </p>

          <hr />

          <h2>1. Hizmet Tanımı ve Rolümüz</h2>
          <p>
            Toplansın, futbol sahası ("Halı Saha") rezervasyonlarını kolaylaştıran{" "}
            <strong>aracı bir platformdur</strong>.
          </p>
          <ul>
            <li>
              Uygulama, saha sahipleri ("Saha Sahibi") ile kullanıcılar arasında iletişim ve rezervasyon sürecini
              sağlar.
            </li>
            <li>
              <strong>
                Toplansın, saha hizmetinin kalitesi, iptali, fiyatlandırması, zamanında gerçekleşmesi veya
                güvenliği gibi konulardan sorumlu değildir.
              </strong>
            </li>
            <li>Ödeme ve iade süreçleri (varsa) doğrudan ilgili saha sahibi veya ödeme sağlayıcı tarafından yürütülür.</li>
            <li>Toplansın, yalnızca aracılık faaliyetinden doğan yükümlülüklerle sınırlıdır.</li>
          </ul>

          <h2>2. Kullanıcı Yükümlülükleri</h2>
          <p>
            Kullanıcı, Uygulama'yı yalnızca{" "}
            <strong>yasalara, toplumsal kurallara ve işbu Şartlar'a uygun şekilde</strong> kullanmayı kabul eder.
          </p>
          <ul>
            <li>
              Hesap oluştururken <strong>doğru, eksiksiz ve güncel bilgi</strong> vermek zorundadır.
            </li>
            <li>
              <strong>Telefon numarası doğrulaması</strong> yapılmadan rezervasyon işlemleri gerçekleştirilemez.
            </li>
            <li>
              Doğrulanan telefon numarası <strong>bir daha değiştirilemez</strong>.
            </li>
            <li>Hesap bilgileri ve şifrelerin güvenliğinden kullanıcı sorumludur.</li>
            <li>Başkalarının hesaplarını kullanmak veya hesabınızı paylaşmak yasaktır.</li>
          </ul>

          <h2>3. Yasak Faaliyetler</h2>
          <p>Kullanıcılar aşağıdaki davranışlarda bulunamazlar:</p>
          <ul>
            <li>Yanıltıcı veya sahte bilgi vermek</li>
            <li>Spam, kötü amaçlı yazılım veya zararlı içerik paylaşmak</li>
            <li>Sistemin güvenliğini tehlikeye atmaya çalışmak</li>
            <li>Diğer kullanıcıları taciz etmek veya rahatsız etmek</li>
            <li>Fikri mülkiyet haklarını ihlal etmek</li>
            <li>Sahte rezervasyon oluşturmak veya sistemi kötüye kullanmak</li>
          </ul>

          <h2>4. Fikri Mülkiyet</h2>
          <p>
            Uygulamanın tasarımı, logosu, içeriği ve tüm diğer fikri mülkiyet hakları Toplansın'a aittir.
            İzinsiz kullanım, kopyalama veya dağıtım yasaktır.
          </p>

          <h2>5. Sorumluluk Sınırlamaları</h2>
          <ul>
            <li>
              Toplansın, <strong>saha sahipleri tarafından sunulan hizmetlerden sorumlu değildir</strong>.
            </li>
            <li>Platform "olduğu gibi" sunulur; kesintisiz veya hatasız olacağına dair garanti verilmez.</li>
            <li>Kullanıcıların birbirleriyle olan ilişkilerinden Toplansın sorumlu tutulamaz.</li>
            <li>
              Ödeme işlemleri üçüncü taraf sağlayıcılar aracılığıyla gerçekleştirilir; bu süreçle ilgili
              sorumluluk ilgili taraflara aittir.
            </li>
          </ul>

          <h2>6. Hesap İptali ve Askıya Alma</h2>
          <p>
            Toplansın, işbu Şartlar'ı ihlal eden veya yasa dışı faaliyetlerde bulunan kullanıcıların hesaplarını
            uyarı vermeksizin askıya alabilir veya silebilir.
          </p>

          <h2>7. Değişiklikler</h2>
          <p>
            Toplansın, bu Şartlar'ı istediği zaman değiştirme hakkını saklı tutar. Önemli değişiklikler uygulama
            içi bildirimlerle duyurulur. Değişikliklerden sonra uygulamayı kullanmaya devam etmek, yeni Şartlar'ı
            kabul ettiğiniz anlamına gelir.
          </p>

          <h2>8. Uygulanacak Hukuk</h2>
          <p>Bu Şartlar, Türkiye Cumhuriyeti yasalarına tabidir. Uyuşmazlıklar Türkiye mahkemelerinde çözülür.</p>

          <h2>9. İletişim</h2>
          <p>
            Sorularınız için: <a href="mailto:destek@toplansin.com">destek@toplansin.com</a>
          </p>
        </article>
      </main>
      <Footer />
      <LegalPanel open={legalPanelOpen} onClose={() => setLegalPanelOpen(false)} />
    </div>
  );
};

export default Terms;
