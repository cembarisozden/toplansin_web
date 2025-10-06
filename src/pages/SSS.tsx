import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalPanel } from "@/components/LegalPanel";
import { useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SSS = () => {
  const [legalPanelOpen, setLegalPanelOpen] = useState(false);

  const faqSections = [
    {
      title: "Hesap İşlemleri",
      items: [
        {
          question: "Hesap nasıl oluşturulur?",
          answer:
            "Uygulamayı indirip 'Kayıt Ol' adımlarını izleyerek ad–soyad, e-posta, telefon ve şifre bilgilerinizi girip ücretsiz hesap açabilirsiniz. Telefon numaranız SMS ile doğrulanmalıdır ve kayıt sonrası değiştirilemez.",
        },
        {
          question: "E-posta doğrulaması zorunlu mu?",
          answer:
            "Evet. E-posta doğrulaması yapılmadan rezervasyon, abonelik ve bazı özelliklere erişim mümkün değildir.",
        },
        {
          question: "Şifremi unuttum, ne yapmalıyım?",
          answer:
            "Giriş ekranındaki 'Şifremi Unuttum' bağlantısını kullanarak kayıtlı e-posta adresinize şifre sıfırlama bağlantısı gönderebilirsiniz.",
        },
        {
          question: "Hesabımı nasıl silebilirim?",
          answer:
            "Ayarlar › Tehlikeli Bölge › 'Hesabı Sil' adımından işlemi onaylayabilirsiniz. Silme işlemi kalıcıdır; verileriniz 30 gün içinde geri döndürülemez şekilde silinir.",
        },
      ],
    },
    {
      title: "Rezervasyon ve Ödeme",
      items: [
        {
          question: "Rezervasyon nasıl yapılır?",
          answer:
            "Uygulama üzerinden saha seçin, müsait saatlere bakın ve rezervasyon oluşturun. Telefon doğrulaması yapılmış olmalıdır.",
        },
        {
          question: "Rezervasyonu iptal edebilir miyim?",
          answer:
            "Evet, ancak iptal politikası saha sahibine göre değişebilir. Detaylar rezervasyon ekranında görüntülenir.",
        },
        {
          question: "Ödeme nasıl yapılır?",
          answer:
            "Ödeme işlemleri saha sahibi tarafından belirlenen yöntemlerle yapılır. Bazı sahalar online ödeme, bazıları ise saha içi ödeme kabul eder.",
        },
      ],
    },
    {
      title: "Teknik Destek",
      items: [
        {
          question: "Uygulama çalışmıyorsa ne yapmalıyım?",
          answer:
            "Öncelikle uygulamayı tamamen kapatıp yeniden açın. Sorun devam ederse uygulama güncellemelerini kontrol edin veya destek@toplansin.com adresine yazın.",
        },
        {
          question: "Push bildirimleri gelmiyor",
          answer:
            "Telefon ayarlarından Toplansın uygulaması için bildirim izinlerinin açık olduğundan emin olun.",
        },
      ],
    },
  ];

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

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Sık Sorulan <span className="gradient-text">Sorular</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Aklınıza takılan soruların yanıtlarını burada bulabilirsiniz
          </p>
        </div>

        <div className="space-y-8">
          {faqSections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <Accordion type="single" collapsible className="w-full">
                {section.items.map((item, itemIdx) => (
                  <AccordionItem key={itemIdx} value={`item-${idx}-${itemIdx}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold">Sorunuz yanıtlanmadı mı?</h3>
          <p className="mb-6 text-muted-foreground">
            Bizimle iletişime geçmekten çekinmeyin
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="rounded-full">
              <a href="mailto:destek@toplansin.com">Destek Ekibi</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="/#iletisim">İletişim</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <LegalPanel open={legalPanelOpen} onClose={() => setLegalPanelOpen(false)} />
    </div>
  );
};

export default SSS;
