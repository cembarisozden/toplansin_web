import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalPanel } from "@/components/LegalPanel";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const KVKK = () => {
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

        <article className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">KVKK Aydınlatma Metni</h1>
            <p className="text-muted-foreground">
              <strong>Son güncelleme:</strong>{" "}
              <time dateTime="2025-10-06">06 Ekim 2025</time>
            </p>
          </div>

          <div className="space-y-6 rounded-2xl border bg-card p-6 shadow-sm md:p-8">
            <p className="leading-relaxed">
              Bu Aydınlatma Metni, 6698 sayılı <strong>Kişisel Verilerin Korunması Kanunu</strong> (“<strong>KVKK</strong>”)
              uyarınca, <strong>Toplansın</strong> uygulamasını yöneten ekip tarafından <strong>veri sorumlusu</strong> sıfatıyla
              kişisel verilerinizin işlenmesine ilişkin sizleri bilgilendirmek amacıyla hazırlanmıştır.
            </p>

            {/* 1. Veri Sorumlusu */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">1. Veri Sorumlusu Bilgileri</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <th className="p-3 text-left font-semibold">Unvan / Sorumlu Kişi</th>
                      <td className="p-3">
                        <strong>Cem Barış Özden</strong>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-3 text-left font-semibold">E-posta</th>
                      <td className="p-3">
                        <strong>destek@toplansin.com</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 2. Amaçlar */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">2. Kişisel Verilerin İşlenme Amaçları</h2>
              <ul className="space-y-2 pl-6">
                <li className="list-disc">Hizmetlerin sunulması, yürütülmesi ve geliştirilmesi</li>
                <li className="list-disc">Halı saha rezervasyonu, <strong>haftalık abonelik</strong> ve saha erişim işlemlerinin gerçekleştirilmesi</li>
                <li className="list-disc">Kullanıcı kimliğinin doğrulanması ve hesap güvenliğinin sağlanması</li>
                <li className="list-disc">Müşteri destek hizmetlerinin yürütülmesi</li>
                <li className="list-disc">Yasal yükümlülüklerin yerine getirilmesi</li>
                <li className="list-disc">
                  (Açık rızanız bulunması hâlinde) kampanya, bilgilendirme ve pazarlama faaliyetleri
                </li>
                <li className="list-disc">
                  Rezervasyon veya abonelik işlemlerinde güvenliğin sağlanması amacıyla <strong>telefon numarasının doğrulanması</strong> ve hesabınıza tanımlanması
                </li>
              </ul>
            </section>

            {/* 3. Veri Kategorileri */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">3. İşlenen Kişisel Veri Kategorileri</h2>
              <ul className="space-y-2 pl-6">
                <li className="list-disc">
                  <strong>Kimlik Bilgileri:</strong> Ad, soyad
                </li>
                <li className="list-disc">
                  <strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi
                </li>
                <li className="list-disc">
                  <strong>Müşteri İşlem Bilgileri:</strong> Rezervasyon geçmişi, <strong>abonelik</strong> durumu, ödeme bilgisi (kısmi/token bazlı)
                </li>
                <li className="list-disc">
                  <strong>İşlem Güvenliği Bilgileri:</strong> IP adresi, cihaz bilgileri, oturum kayıtları, FCM (push bildirim) token
                </li>
                <li className="list-disc">
                  <strong>Kullanıcı Tercih Bilgileri:</strong> Favori sahalar, filtreleme tercihleri, abonelik gün-saatleri
                </li>
              </ul>
            </section>

            {/* 4. Aktarım */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">4. Kişisel Verilerin Aktarımı</h2>
              <p className="leading-relaxed">
                Kişisel verileriniz aşağıdaki durum ve amaçlarla sınırlı olmak üzere üçüncü kişilere aktarılabilir:
              </p>
              <ul className="space-y-2 pl-6">
                <li className="list-disc"><strong>Yasal zorunluluklar:</strong> Yetkili kurumların talebi hâlinde</li>
                <li className="list-disc"><strong>Hizmet sağlayıcılar:</strong> Bulut, veritabanı, bildirim ve ödeme hizmetleri (<em>veri işleyen</em> sıfatıyla)</li>
                <li className="list-disc"><strong>Saha sahipleri/işletmeciler:</strong> Rezervasyonun oluşturulması, onaylanması veya iptali için gerekli olduğu ölçüde</li>
              </ul>
              <p className="leading-relaxed text-sm text-muted-foreground">
                Aktarımlar KVKK m.8-9 hükümlerine uygun, güvenli kanallar üzerinden ve mümkün olduğunda anonim/pseudonim şekilde gerçekleştirilir.
              </p>
            </section>

            {/* 5. Yöntem + Hukuki Sebep */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">5. Veri Toplama Yöntemi ve Hukuki Sebepler</h2>
              <p className="leading-relaxed">
                Verileriniz; uygulama ve web sitemiz üzerinden elektronik ortamda, rezervasyon/abonelik ve destek süreçlerinde toplanır.
              </p>
              <p className="leading-relaxed">İşlemenin hukuki sebepleri:</p>
              <ul className="space-y-2 pl-6">
                <li className="list-disc">KVKK m.5/2-c: Sözleşmenin kurulması ve ifası</li>
                <li className="list-disc">KVKK m.5/2-ç: Veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi</li>
                <li className="list-disc">KVKK m.5/2-f: Meşru menfaat (güvenlik, dolandırıcılık önleme vb.)</li>
                <li className="list-disc">KVKK m.5/1: Açık rıza (pazarlama/iletişim onayları için)</li>
              </ul>
            </section>

            {/* 6. Saklama Süreleri */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">6. Kişisel Verilerin Saklanma Süresi</h2>
              <ul className="space-y-2 pl-6">
                <li className="list-disc">Hesap ve rezervasyon verileri: Üyelik süresi boyunca ve ilgili mevzuattaki <strong>asgari saklama süreleri</strong> kadar</li>
                <li className="list-disc">Destek ve işlem kayıtları: Mevzuatın öngördüğü süreler (zamanaşımı/uyuşmazlık çözümü amaçlarıyla)</li>
                <li className="list-disc">Pazarlama rızası: Rıza geri çekilene kadar; geri çekildiğinde ilgili kayıtlar silinir/engellenir</li>
              </ul>
              <p className="leading-relaxed text-sm text-muted-foreground">
                Süre dolduğunda veriler; silinir, yok edilir veya anonim hâle getirilir.
              </p>
            </section>

            {/* 7. Yurtdışına Aktarım (Bulut) */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">7. Yurt Dışına Veri Aktarımı</h2>
              <p className="leading-relaxed">
                Bulut hizmetleri (ör. barındırma/bildirim/analitik) kapsamında verileriniz teknik olarak yurt dışında bulunan sunuculara aktarılabilir.
                Bu durumda KVKK m.9 uyarınca uygun güvenlik tedbirleri sağlanır ve sözleşmesel taahhütler uygulanır.
              </p>
            </section>

            {/* 8. Haklar */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">8. Veri Sahibi Olarak Haklarınız (KVKK m.11)</h2>
              <ul className="space-y-2 pl-6">
                <li className="list-disc">Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li className="list-disc">İşlenmişse buna ilişkin bilgi talep etme</li>
                <li className="list-disc">İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme</li>
                <li className="list-disc">Verilerin aktarıldığı üçüncü kişileri bilme</li>
                <li className="list-disc">Eksik/yanlış işlenmiş verilerin düzeltilmesini isteme</li>
                <li className="list-disc">KVKK m.7 kapsamında silinmesini/yok edilmesini isteme</li>
                <li className="list-disc">Düzeltme/silme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                <li className="list-disc">Münhasıran otomatik sistemlerle analiz sonucu aleyhinize bir sonuca itiraz etme</li>
                <li className="list-disc">Kanuna aykırı işleme nedeniyle zarara uğrarsanız tazminat talep etme</li>
              </ul>
            </section>

            {/* 9. Başvuru */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">9. Başvuru Yöntemi</h2>
              <p className="leading-relaxed">
                KVKK kapsamındaki taleplerinizi{" "}
                <a href="mailto:destek@toplansin.com" className="text-primary underline underline-offset-4">
                  destek@toplansin.com
                </a>{" "}
                adresine iletebilirsiniz. Talepleriniz KVKK m.13 uyarınca <strong>en geç 30 gün içinde</strong> yanıtlanacaktır.
              </p>
            </section>

            {/* 10. Güncellemeler */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">10. Güncellemeler</h2>
              <p className="leading-relaxed">
                Bu Aydınlatma Metni; mevzuat değişiklikleri ve hizmet süreçlerine bağlı olarak güncellenebilir.
                Güncellenmiş sürüm, yayımlandığı tarihten itibaren geçerlidir.
              </p>
            </section>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Toplansın. Tüm hakları saklıdır.
            </p>
          </div>
        </article>
      </main>

      <Footer />
      <LegalPanel open={legalPanelOpen} onClose={() => setLegalPanelOpen(false)} />
    </div>
  );
};

export default KVKK;
