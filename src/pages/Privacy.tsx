import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalPanel } from "@/components/LegalPanel";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
          <h1>Gizlilik Politikası</h1>
          <p>
            <strong>Son güncelleme:</strong> <time dateTime="2025-08-14">14 Ağustos 2025</time>
          </p>

          <p>
            Bu Gizlilik Politikası, <strong>Toplansın</strong> ("Uygulama", "biz") tarafından sunulan hizmetler
            kapsamında kişisel verilerinizin nasıl toplandığını, işlendiğini, saklandığını, korunduğunu ve
            paylaşıldığını açıklamaktadır. Toplansın olarak gizliliğinize önem veriyor, verilerinizi yalnızca bu
            politika çerçevesinde işliyoruz.
          </p>

          <hr />

          <h2>1. Toplanan Bilgiler</h2>
          <p>Uygulamamızı kullanırken aşağıdaki veri türlerini toplayabiliriz:</p>
          <ul>
            <li>
              <strong>Kimlik Bilgileri:</strong> Ad, soyad
            </li>
            <li>
              <strong>İletişim Bilgileri:</strong> Telefon numarası (rezervasyon veya abonelik işlemleri sırasında
              doğrulama zorunlu)
            </li>
            <li>
              <strong>Hesap Bilgileri:</strong> Rezervasyon geçmişi, abonelik durumu, saha erişim kodu
            </li>
            <li>
              <strong>Teknik Bilgiler:</strong> IP adresi, cihaz modeli, işletim sistemi, push bildirim token'ı
            </li>
            <li>
              <strong>Kullanım Verileri:</strong> Giriş/çıkış zamanları, uygulama içi tıklama ve işlem kayıtları
            </li>
          </ul>

          <h2>2. Verilerin Kullanım Amaçları</h2>
          <ul>
            <li>
              Hesap oluşturma (e-posta doğrulama zorunlu) ve kimlik doğrulama (telefon doğrulama yalnızca
              rezervasyon/abonelik işlemleri için zorunlu)
            </li>
            <li>Rezervasyon ve abonelik işlemlerinin yürütülmesi</li>
            <li>Kullanıcı destek hizmetleri</li>
            <li>Güvenlik, dolandırıcılık ve kötüye kullanımın önlenmesi</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>Uygulamanın performansının analizi ve iyileştirilmesi</li>
            <li>(Açık rıza ile) bilgilendirme ve pazarlama faaliyetleri</li>
          </ul>

          <h2>3. Veri Paylaşımı</h2>
          <p>Kişisel verileriniz aşağıdaki durumlar dışında üçüncü taraflarla paylaşılmaz:</p>
          <ul>
            <li>
              <strong>Yasal Zorunluluk:</strong> Yetkili kamu kurumlarının talepleri veya yasal düzenlemeler
            </li>
            <li>
              <strong>Hizmet Sağlayıcılar:</strong> Bulut depolama, ödeme sistemleri gibi hizmet sağlayıcılar
              (veri işleyen sıfatıyla)
            </li>
            <li>
              <strong>Saha Sahipleri:</strong> Rezervasyon işlemlerinin tamamlanması için gerekli bilgiler
            </li>
          </ul>

          <h2>4. Veri Saklama</h2>
          <p>
            Kişisel verileriniz, işlenme amacının gerekli kıldığı süre boyunca saklanır. Hesap silindiğinde
            verileriniz 30 gün içinde sistemden tamamen kaldırılır. Yasal yükümlülükler kapsamında saklanması
            gereken veriler bu sürenin dışındadır.
          </p>

          <h2>5. Güvenlik</h2>
          <p>
            Verilerinizin güvenliğini sağlamak için endüstri standartlarında teknik ve idari önlemler alıyoruz:
          </p>
          <ul>
            <li>SSL/TLS şifreleme</li>
            <li>Güvenli sunucu altyapısı</li>
            <li>Erişim kontrolü ve yetkilendirme</li>
            <li>Düzenli güvenlik güncellemeleri</li>
          </ul>

          <h2>6. Çocukların Gizliliği</h2>
          <p>
            Uygulamamız 18 yaşın altındaki kişilere yönelik değildir. Bilerek 18 yaş altı kullanıcılardan veri
            toplamıyoruz.
          </p>

          <h2>7. Haklarınız</h2>
          <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
          <ul>
            <li>Kişisel verilerinize erişim</li>
            <li>Verilerin düzeltilmesini talep etme</li>
            <li>Verilerin silinmesini talep etme</li>
            <li>Veri işlemeye itiraz etme</li>
            <li>Veri taşınabilirliği</li>
          </ul>

          <h2>8. İletişim</h2>
          <p>
            Gizlilik politikamız hakkında sorularınız için:{" "}
            <a href="mailto:destek@toplansin.com">destek@toplansin.com</a>
          </p>

          <h2>9. Politika Güncellemeleri</h2>
          <p>
            Bu politikayı gerektiğinde güncelleyebiliriz. Önemli değişiklikler uygulama içi bildirimlerle
            duyurulacaktır.
          </p>
        </article>
      </main>
      <Footer />
      <LegalPanel open={legalPanelOpen} onClose={() => setLegalPanelOpen(false)} />
    </div>
  );
};

export default Privacy;
