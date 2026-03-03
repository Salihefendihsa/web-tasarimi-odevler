# CSS Kararları (CSS-KARARLARI.md)

## 1. Breakpoint Seçimi

Projeyi `Mobile-First` yaklaşımıyla geliştirdim. Varsayılan (default) CSS kuralları 0-639px arası mobil cihazları hedeflerken; ilk kırılım noktası `min-width: 640px` (Tablet), ikinci kırılım noktası `min-width: 1024px` (Masaüstü) olarak belirlenmiştir. Bu standart değerler modern donanımların ve Tailwind benzeri güncel frameworklerin ekran test pratikleriyle uyumludur.

## 2. Layout Tercihleri

Esneklik ve responsive akış için tüm sayfa düzeni `Flexbox` ve `CSS Grid` ile inşa edilmiştir. Header navigasyonu ve form yapılarında tek boyutlu esneklik için `Flexbox` kullanılırken; Projeler alanı gibi 2 boyutlu, çoklu eleman gerektiren yapılar için `CSS Grid` (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`) tercih edilmiştir. Bu sayede kolon sayısı ekrana göre dinamik uyum sağlar.

## 3. Design Tokens

Renkler, padding/margin boşlukları, sınır ovallikleri ve gölgeler gibi tekrarlayan değerler sabit kodlama (`hardcoded`) yerine merkezi `src/styles/tokens.css` dosyasında `CSS Variables (Değişkenler)` içine çekilmiştir. Bu sayede temanın bakımı, olası bir değişiklik veya Dark/Light mod geçişleri çok daha yönetilebilir hale gelmiştir.

## 4. Responsive Strateji

Tüm tasarım en küçük ekranlardan başlar (Mobile-First) ve ekran büyüdükçe (`min-width` media sorguları ile) üzerine yeni kurallar ekler. Yazı tiplerinde modern `clamp()` fonksiyonu kullanılarak **Fluid Typography** (Akıcı Tipografi) uygulanmış, böylece fontlar ekran genişliğine göre `font-size` değişkenlerine bağlı olarak dinamik olarak büyüyüp küçülebilmektedir.
