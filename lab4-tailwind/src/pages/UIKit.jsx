import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import Alert from "../components/Alert";

export default function UIKit() {
  const [clickCount, setClickCount] = useState(0);
  const [lastClicked, setLastClicked] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleButtonClick = (name) => {
    setClickCount((c) => c + 1);
    setLastClicked(name);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-6 sm:p-8">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* ─── Başlık ─── */}
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            🎨 UI Kit — Bileşen Kütüphanesi
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Tüm hazır bileşenlerin (component) farklı varyantlarını bu sayfada
            test edebilirsiniz.
          </p>
          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              💡 <strong>Tailwind CSS utility-first:</strong> Aşağıdaki
              bileşenlerin tümü saf Tailwind class&apos;ları ile stillenmiştir.
              Ayrı CSS dosyası yazılmamıştır.
            </p>
          </div>
        </header>

        {/* ─── Tıklama Sayacı ─── */}
        {lastClicked && (
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-200 text-sm">
            ✅ Son tıklanan: <strong>{lastClicked}</strong> — Toplam:{" "}
            <strong>{clickCount}</strong>
          </div>
        )}

        {/* ═══════════ BUTTONS ═══════════ */}
        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 pb-2">
              🔘 Buttons (Butonlar)
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Farklı amaçlar için farklı renk ve boyut varyantları. Tıklayarak
              test edin.
            </p>
          </div>

          {/* Renk */}
          <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Renk Varyantları
            </h3>
            <div className="flex flex-wrap gap-4">
              {["primary", "secondary", "danger", "ghost"].map((v) => (
                <div key={v} className="flex flex-col items-center gap-1">
                  <Button variant={v} onClick={() => handleButtonClick(v)}>
                    {v.charAt(0).toUpperCase() + v.slice(1)}
                  </Button>
                  <span className="text-xs text-gray-400">
                    variant=&quot;{v}&quot;
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Boyut */}
          <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Boyut Varyantları
            </h3>
            <div className="flex flex-wrap items-end gap-4">
              {[
                { size: "sm", label: "Small" },
                { size: "md", label: "Medium" },
                { size: "lg", label: "Large" },
              ].map(({ size, label }) => (
                <div key={size} className="flex flex-col items-center gap-1">
                  <Button size={size} onClick={() => handleButtonClick(label)}>
                    {label}
                  </Button>
                  <span className="text-xs text-gray-400">
                    size=&quot;{size}&quot;
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Disabled */}
          <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Disabled (Devre Dışı)
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" disabled>
                Disabled Primary
              </Button>
              <Button variant="danger" disabled>
                Disabled Danger
              </Button>
            </div>
          </div>
        </section>

        {/* ═══════════ INPUTS ═══════════ */}
        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-purple-500 pb-2">
              ✏️ Inputs (Giriş Alanları)
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Form alanları farklı durumlarda farklı görünümlere sahiptir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 space-y-1">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Normal
              </h3>
              <Input
                id="ui-name"
                label="Ad Soyad"
                placeholder="Adınızı yazın..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              {inputValue && (
                <p className="text-xs text-green-600 dark:text-green-400">
                  ✓ Yazdığınız: &quot;{inputValue}&quot;
                </p>
              )}
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 space-y-1">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Error (Hata)
              </h3>
              <Input
                id="ui-err"
                label="Şifre"
                type="password"
                error="Bu alan zorunludur — en az 8 karakter"
              />
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 space-y-1">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Help Text (Yardım)
              </h3>
              <Input
                id="ui-help"
                label="E-posta"
                type="email"
                helpText="Örnek: ad.soyad@mail.com"
              />
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 space-y-1">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Disabled (Devre Dışı)
              </h3>
              <Input
                id="ui-dis"
                label="Kullanıcı ID"
                disabled
                value="235541042 (otomatik)"
              />
            </div>
          </div>
        </section>

        {/* ═══════════ CARDS ═══════════ */}
        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-emerald-500 pb-2">
              🃏 Cards (Kartlar)
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              İçerik gruplamak için 3 farklı stil varyantı.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="inline-block text-xs font-semibold text-white bg-emerald-600 px-2 py-1 rounded-full">
                ELEVATED
              </span>
              <Card variant="elevated" title="Gölgeli Kart">
                <p className="text-sm">
                  Gölge ile yükseltilmiş kart. Öne çıkan içerikler için.
                </p>
              </Card>
            </div>
            <div className="space-y-2">
              <span className="inline-block text-xs font-semibold text-white bg-blue-600 px-2 py-1 rounded-full">
                OUTLINED
              </span>
              <Card variant="outlined" title="Çerçeveli Kart">
                <p className="text-sm">
                  Kenarlık ile çerçevelenmiş kart. Bölümlendirme için.
                </p>
              </Card>
            </div>
            <div className="space-y-2">
              <span className="inline-block text-xs font-semibold text-white bg-purple-600 px-2 py-1 rounded-full">
                FILLED + FOOTER
              </span>
              <Card
                variant="filled"
                title="Dolgulu Kart"
                footer={
                  <Button
                    size="sm"
                    onClick={() => {
                      setShowSuccessAlert(true);
                      setTimeout(() => setShowSuccessAlert(false), 3000);
                    }}
                  >
                    Detay Gör →
                  </Button>
                }
              >
                <p className="text-sm">
                  Dolgulu arka plan + alt bölüm (footer). Buton tıklanabilir.
                </p>
              </Card>
            </div>
          </div>

          {showSuccessAlert && (
            <Alert variant="success" title="Kart Butonu Çalıştı!">
              &quot;Detay Gör&quot; butonuna tıkladınız — 3 saniyede kapanacak.
            </Alert>
          )}
        </section>

        {/* ═══════════ ALERTS ═══════════ */}
        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-amber-500 pb-2">
              🔔 Alerts (Uyarı Mesajları)
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Duruma göre 4 farklı renk. Son alert kapatılabilir — ✕ butonuna
              tıklayın.
            </p>
          </div>

          <div className="max-w-2xl space-y-4">
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <span className="inline-block text-xs font-semibold text-white bg-blue-500 px-2 py-0.5 rounded-full mb-2">
                INFO
              </span>
              <Alert variant="info" title="Bilgi">
                Form başarıyla kaydedildi.
              </Alert>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <span className="inline-block text-xs font-semibold text-white bg-green-500 px-2 py-0.5 rounded-full mb-2">
                SUCCESS
              </span>
              <Alert variant="success" title="Başarılı!">
                Hesabınız oluşturuldu.
              </Alert>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <span className="inline-block text-xs font-semibold text-white bg-amber-500 px-2 py-0.5 rounded-full mb-2">
                WARNING
              </span>
              <Alert variant="warning" title="Uyarı">
                Oturumunuz 5 dakika sonra sona erecek.
              </Alert>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <span className="inline-block text-xs font-semibold text-white bg-red-500 px-2 py-0.5 rounded-full mb-2">
                ERROR + KAPATILABİLİR
              </span>
              <Alert variant="error" title="Hata!" dismissible>
                Bağlantı kurulamadı. Sağdaki ✕ ile kapatabilirsiniz.
              </Alert>
            </div>
          </div>
        </section>

        {/* ═══════════ ÖZET ═══════════ */}
        <section className="pb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 sm:p-8 rounded-2xl">
            <h2 className="text-xl font-bold mb-4">
              📊 Bileşen Özeti — Tailwind CSS LAB-4
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: "4", label: "Button Renk" },
                { value: "3", label: "Button Boyut" },
                { value: "4", label: "Input Durum" },
                { value: "3", label: "Card Stil" },
                { value: "4", label: "Alert Renk" },
                { value: "16+", label: "Toplam Varyant" },
                { value: "✓", label: "Dark Mode" },
                { value: "✓", label: "Responsive" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/10 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="text-xs opacity-80">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
