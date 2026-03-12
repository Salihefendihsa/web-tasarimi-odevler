import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import Alert from "../components/Alert";

const PROJECTS = [
  {
    id: 1,
    title: "Faldex — E-ticaret Yönetimi",
    shortDesc:
      "Aromaterapi difüzörleri için Shopify tabanlı e-ticaret mağazası yönetimi, pazar analizi ve dönüşüm optimizasyonu.",
    fullDesc:
      "Faldex markası altında aromaterapi difüzörleri satışı gerçekleştiren Shopify tabanlı e-ticaret platformunun uçtan uca yönetimi. Bu proje kapsamında pazar araştırması, rakip analizi, ürün fiyatlandırma stratejileri, kampanya yönetimi ve Meta Ads (Facebook/Instagram) üzerinden reklam optimizasyonları yapıldı. Dönüşüm oranlarını (CR) artırmak için A/B testleri kurgulandı ve uygulandı.",
    tech: ["Shopify", "Meta Ads", "Google Analytics", "Canva", "CapCut"],
    variant: "elevated",
  },
  {
    id: 2,
    title: "Güvenlik Kamerası Suçlu Tespiti",
    shortDesc:
      "Derin öğrenme yöntemleriyle suçluların tespit ve takibini amaçlayan TÜBİTAK 2209-A projesi.",
    fullDesc:
      "TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı kapsamında desteklenen bu projede, mevcut güvenlik kamerası görüntülerinden faydalanılarak aranan kişilerin (suçluların) derin öğrenme ve bilgisayarlı görü (Computer Vision) teknikleri kullanılarak gerçek zamanlı veya çevrimdışı olarak tespit edilmesi ve takip edilmesi hedeflenmektedir. YOLO algoritması ve yüz tanıma modelleri entegre edilmiştir.",
    tech: ["Python", "OpenCV", "YOLO", "PyTorch", "Deep Learning"],
    variant: "elevated",
  },
  {
    id: 3,
    title: "Kişisel Harcama Planlayıcı",
    shortDesc:
      "Bireysel bütçe yönetimi için harcama planlama ve raporlama imkanı sunan modern web projesi.",
    fullDesc:
      "Kullanıcıların aylık gelirlerini ve gider kalemlerini (kira, faturalar, market vb.) detaylı olarak takip edebildikleri, interaktif grafikler sayesinde bütçe analizleri yapabildikleri Full-Stack web uygulaması. Uygulama, kullanıcılara tasarruf hedefleri koyma ve bu hedeflere ulaşma durumlarını görselleştirme imkanı sunar.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Chart.js"],
    variant: "elevated",
  },
  {
    id: 4,
    title: "YÜK-LE: B2B/B2C Lojistik",
    shortDesc:
      "Yapay Zeka ve GIS destekli dijital pazar yeri. Yük sahipleri ile taşıyıcıları eşleştiren platform.",
    fullDesc:
      "Lojistik sektöründeki boş dönüş (empty miles) problemini çözmeyi ve karbon ayak izini azaltmayı hedefleyen dijital bir platform. Yük sahipleri ile taşıyıcıları akıllı eşleştirme (smart routing) algoritmaları ve Coğrafi Bilgi Sistemleri (GIS) entegrasyonu ile bir araya getirerek nakliye süreçlerini optimize eden mobil ve web tabanlı bir çözümdür.",
    tech: ["React Native", "TypeScript", "Google Maps API", "AI Routing"],
    variant: "outlined",
  },
  {
    id: 5,
    title: "Rüya Tabiri Uygulaması",
    shortDesc:
      "Kullanıcıların anlattığı rüyaları yapay zeka modelleriyle yorumlayan mobil/web uygulaması.",
    fullDesc:
      "Kullanıcıların gördükleri rüyaları metin veya sesli olarak sisteme girdikleri ve arka planda OpenAI GPT modelleri kullanılarak rüyanın sembolik ve psikolojik analizinin kişiselleştirilmiş bir şekilde yapıldığı yenilikçi bir yapay zeka projesi. Ayrıca rüya günlüğü (dream journal) tutma özelliği mevcuttur.",
    tech: ["Next.js", "TailwindCSS", "OpenAI API", "Firebase"],
    variant: "outlined",
  },
  {
    id: 6,
    title: "Combin-Maker",
    shortDesc:
      "Sanal mankenler üzerinden kıyafetleri dijital olarak deneme ve kombin oluşturma platformu.",
    fullDesc:
      "Kullanıcıların kendi fotoğraflarını veya standart manken görsellerini kullanarak e-ticaret sitelerindeki kıyafetleri üzerlerinde görebilmelerini sağlayan dijital giyinme (virtual try-on) uygulaması. Görüntü işleme ve Generative AI kullanarak kıyafetlerin vücuda oturtulması ve renk/stil uyum önerileri sunması hedeflenmektedir.",
    tech: ["React", "Python", "Generative AI", "Image Processing"],
    variant: "outlined",
  },
];

const SKILLS = [
  { category: "Frontend & Mobil", items: ["React", "React Native", "TypeScript", "Tailwind CSS", "Next.js", "Vite"] },
  { category: "Backend & Veritabanı", items: ["Node.js", "Express", "C#", "Java", "Python", "SQL", "MongoDB", "Firebase"] },
  { category: "Yapay Zeka & Veri", items: ["OpenCV", "YOLO", "PyTorch", "Deep Learning", "Generative AI", "Data Structures"] },
  { category: "E-ticaret ve Dijital Pazarlama", items: ["Shopify", "E-ticaret", "Meta Ads", "Google Analytics", "Grafik Tasarım", "Video Kurgu"] }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      {/* ─── Skip Link ─── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0
          focus:left-0 bg-blue-800 text-white p-2 z-50 rounded-br-lg shadow-md"
      >
        Ana içeriğe atla
      </a>

      {/* ─── Header ─── */}
      <header
        className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80
          backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
      >
        <div
          className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row
            justify-between items-center gap-3"
        >
          <h1 className="text-xl font-bold text-primary dark:text-blue-300">
            HSA Portfolyo
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2 sm:gap-4">
              {[
                { label: "Hakkımda", href: "#hakkimda" },
                { label: "Projeler", href: "#projeler" },
                { label: "Eğitim & Yetenekler", href: "#egitim-yetenekler" },
                { label: "İletişim", href: "#iletisim" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="px-3 py-1.5 rounded-md text-gray-700 dark:text-gray-300
                      hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* ─── Main Content ─── */}
      <main id="main-content">
        {/* ── Hero / Hakkımda ── */}
        <section
          id="hakkimda"
          className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50
            dark:from-gray-900 dark:to-gray-950"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0 animate-fade-in">
              <div
                className="w-36 h-36 rounded-full bg-gradient-to-br from-blue-500
                  to-purple-600 flex items-center justify-center text-white
                  text-5xl font-bold shadow-xl ring-4 ring-white dark:ring-gray-800"
              >
                HS
              </div>
            </figure>
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Hilmi Salih Altınışık
              </h2>
              <p className="text-lg text-secondary dark:text-blue-400 font-medium mb-4">
                Yazılım Mühendisi &bull; Tech Founder &bull; E-ticaret Uzmanı
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                Fırat Üniversitesi Yazılım Mühendisliği öğrencisi. Python, C#,
                Java, SQL ve yapay zeka araçlarıyla yenilikçi projeler
                geliştiriyorum.{" "}
                <strong className="text-gray-800 dark:text-gray-200">
                  Faldex
                </strong>{" "}
                ve benzeri kendi e-ticaret markalarımı kurup yöneterek bu sektörde
                başarılı operasyonlar yürüttüm; Meta reklamları yönetimi, grafik
                tasarım ve video düzenleme alanlarında yetkinlik sahibiyim.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/hilmi-salih-alt%C4%B1n%C4%B1%C5%9F%C4%B1k-6a9301294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                
                <a
                  href="https://www.instagram.com/salih.hilmi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white text-sm font-medium rounded-lg transition-transform shadow-md hover:shadow-lg hover:scale-[1.02]"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Projeler ── */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-primary dark:text-blue-400 uppercase tracking-widest mb-2">
              Portfolyo
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Öne Çıkan Projelerim
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Geliştirdiğim yenilikçi web, mobil ve yapay zeka projeleri. İlgili projeye tıklayarak detaylı bilgiye, kullanılan teknolojilere erişebilirsiniz.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="cursor-pointer group flex h-full"
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") setSelectedProject(project);
                  }}
                  aria-label={`${project.title} detaylarını gör`}
                >
                  <Card
                    variant={project.variant}
                    title={project.title}
                    footer={
                      <div className="flex justify-between items-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-inherit">
                          Detayları İncele
                        </span>
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    }
                  >
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Eğitim & Yetenekler ── */}
        <section id="egitim-yetenekler" className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Eğitim */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl text-blue-600 dark:text-blue-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Eğitim Geçmişi
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3 gap-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Fırat Üniversitesi
                    </h3>
                    <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 px-3 py-1 rounded-full w-fit">
                      Devam Ediyor
                    </span>
                  </div>
                  <p className="text-primary dark:text-blue-400 font-medium mb-4 text-sm sm:text-base">
                    Mühendislik Fakültesi — Yazılım Mühendisliği
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Yazılım mühendisliği metodolojileri, Veri Yapıları ve Algoritmalar, Nesne Yönelimli Programlama (OOP), Bilgisayar Ağları ve Yapay Zeka (AI) alanlarında yoğun akademik eğitim. Akademik yetkinliklerimi pratik projelerle desteklemekteyim.
                  </p>
                </div>
              </div>
            </div>

            {/* Yetenekler */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-xl text-purple-600 dark:text-purple-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Yetenekler & Beceriler
                </h2>
              </div>
              
              <div className="space-y-6">
                {SKILLS.map((group) => (
                  <div key={group.category} className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm cursor-default hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── İletişim ── */}
        <section id="iletisim" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
              İletişime Geç
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              Benimle çalışmak isterseniz aşağıdaki formu doldurabilirsiniz.
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <Input id="name" label="Ad Soyad" placeholder="Adınızı yazın" required />
                <Input
                  id="email"
                  label="E-posta"
                  type="email"
                  placeholder="ornek@mail.com"
                  helpText="Size geri dönüş yapabilmemiz için"
                  required
                />
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    placeholder="Mesajınızı buraya yazın..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-300
                      focus:ring-2 focus:ring-blue-500 focus:outline-none
                      dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600
                      transition-colors"
                  ></textarea>
                </div>
                <Button variant="primary" size="lg" type="submit">
                  <span className="w-full text-center">Mesaj Gönder</span>
                </Button>
              </form>
              <div className="mt-6">
                <Alert variant="info" title="Bilgi">
                  Bu form şu anda demo modundadır. İletişim e-posta adresi: info@hsalih.com
                </Alert>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 text-center py-10 px-4 pb-24">
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">HSA Portfolyo</h4>
        <div className="flex justify-center gap-5 mb-6">
          <a
            href="https://www.linkedin.com/in/hilmi-salih-alt%C4%B1n%C4%B1%C5%9F%C4%B1k-6a9301294/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-white hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2] transition-colors"
            aria-label="LinkedIn Profilim"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/salih.hilmi/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-white hover:bg-[#E1306C] dark:hover:bg-[#E1306C] transition-colors"
            aria-label="Instagram Profilim"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          &copy; 2025 Hilmi Salih Altınışık. Tüm hakları saklıdır.
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
          Tailwind CSS v4 &bull; Vite &bull; React
        </p>
      </footer>

      {/* ─── Proje Detay Modalı ─── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-5 sm:p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
              <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors p-2 -mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Kapat"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto">
              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                <p className="whitespace-pre-wrap leading-relaxed">
                  {selectedProject.fullDesc}
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Kullanılan Teknolojiler
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 rounded-lg text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 sm:p-6 border-t border-gray-100 dark:border-gray-800 flex justify-end">
              <Button variant="secondary" onClick={() => setSelectedProject(null)}>
                Kapat
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
