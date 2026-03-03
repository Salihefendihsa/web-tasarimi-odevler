import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeProject, setActiveProject] = useState<{ title: string, fullDesc: string, img: string } | null>(null);
  const [theme, setTheme] = useState('dark');

  // Tema Değişimini HTML'e Yansıt
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Intro animasyonu 2.5 saniye sonra gizlensin
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      {/* Intro Ekranı */}
      <div className={`intro-screen ${showIntro ? 'active' : ''}`}>
        <div className="intro-content">
          <h1>Hilmi Salih Altınışık</h1>
          <div className="intro-roles">
            <span className="role">Yazılım Mühendisi</span>
            <span className="dot">•</span>
            <span className="role">Tech Founder</span>
            <span className="dot">•</span>
            <span className="role">E-ticaret Uzmanı</span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="header-container">
          <div className="logo">HSA Portfolyo</div>
          <div className="header-controls">
            <nav aria-label="Ana Menü">
              <ul>
                <li><a href="#hakkimda">Hakkımda</a></li>
                <li><a href="#yetenekler">Yetenekler</a></li>
                <li><a href="#projeler">Projeler</a></li>
              </ul>
            </nav>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Temayı değiştir"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" className="main-container">

        {/* BÖLÜM 1: Hakkımda */}
        <section id="hakkimda" className="section">
          <div className="card">
            <h1>Hilmi Salih Altınışık</h1>
            <h2>Hakkımda</h2>
            <div className="info-section">
              <div className="info-item">
                <span className="label">Öğrenci No</span>
                <span className="value">235541042</span>
              </div>
              <div className="info-item">
                <span className="label">Bölüm</span>
                <span className="value">Yazılım Mühendisliği</span>
              </div>
              <div className="info-item">
                <span className="label">Üniversite</span>
                <span className="value">Fırat Üniversitesi</span>
              </div>
            </div>
            <p className="description">
              Yazılım Mühendisliği öğrencisi & çok yönlü bir girişimci. Python, C#, Java, SQL ve yapay zeka araçlarıyla yenilikçi projeler geliştiriyorum.
              <strong> Faldex</strong> markasıyla e-ticaret sektöründe aktif yer alıyor; <strong>Meta reklamları yönetimi, grafik tasarım, video düzenleme (kurgu) ve sosyal medya uzmanlığı</strong> alanlarında yetkinlik sahibiyim.
              Teknoloji dünyasının yoğunluğunu <em>spor (fitness ve koşu)</em> yaparak dengeliyor, hobim olan <em>yemek pişirmeye</em> vakit ayırmaktan keyif alıyorum.
            </p>
          </div>
        </section>

        {/* BÖLÜM 2: Yetenekler */}
        <section id="yetenekler" className="section">
          <div className="card">
            <h3>Becerilerim & Yetkinlikler</h3>
            <div className="tech-stack">
              <span className="badge skill">E-ticaret</span>
              <span className="badge skill">Meta Ads</span>
              <span className="badge skill">Sosyal Medya Yönetimi</span>
              <span className="badge skill">Video Kurgu (Edit)</span>
              <span className="badge skill">Grafik Tasarım</span>
              <span className="badge skill">Python</span>
              <span className="badge skill">C#</span>
              <span className="badge skill">Java</span>
              <span className="badge skill">SQL</span>
              <span className="badge skill">MATLAB</span>
              <span className="badge">⚡ Vite</span>
              <span className="badge">⚛️ React</span>
              <span className="badge">🔷 TypeScript</span>
            </div>
          </div>
        </section>

        {/* BÖLÜM 3: Projeler */}
        <section id="projeler" className="section">
          <div className="card">
            <h2>Projelerim</h2>
            <p className="projects-hint">Projelerin detaylarını görmek için üzerlerine tıklayın.</p>
            <div className="projects-grid">

              <article
                className="project-card clickable"
                onClick={() => setActiveProject({
                  title: 'Faldex - E-ticaret Yönetimi',
                  img: 'https://via.placeholder.com/800x400?text=Faldex+E-ticaret',
                  fullDesc: 'Faldex markasının "Trend Ürünler" koleksiyonunda yer alan aromaterapi difüzörleri için Shopify tabanlı e-ticaret mağazasının baştan sona yönetimini yürüttüm. Pazar analizi araçları (WinningHunter) ile hedef kitle tespiti yaparak, dönüşüm oranlarını artıracak satış stratejileri, uygun reklam görselleri ve sosyal medya planlamaları geliştirdim.'
                })}
              >
                <h3>Faldex - E-ticaret Yönetimi</h3>
                <figure className="project-figure">
                  <img src="https://via.placeholder.com/400x200?text=Faldex+E-ticaret" alt="Faldex e-ticaret mağazasının genel görünümü ve analiz panosu" className="project-image" />
                  <figcaption>Shopify tabanlı mağaza yönetimi ve dönüşüm analizi.</figcaption>
                </figure>
                <p>Aromaterapi difüzörleri için Shopify tabanlı e-ticaret mağazası yönetimi, pazar analizi ve dönüşüm optimizasyonu.</p>
              </article>

              <article
                className="project-card clickable"
                onClick={() => setActiveProject({
                  title: 'Güvenlik Kameraları Suçlu Tespiti',
                  img: 'https://via.placeholder.com/800x400?text=Kamera+Projesi',
                  fullDesc: 'Derin öğrenme ve yapay zeka yöntemleriyle güvenlik kamerası görüntülerinden suçluların tespitini ve takibini amaçlayan TÜBİTAK 2209-A projesi. Sistem, şüpheli hareketleri algılayıp gerçek zamanlı olarak yüz ya da beden eşleştirmesi yaparak kolluk kuvvetlerine anlık bildirim sağlamakta.'
                })}
              >
                <h3>Güvenlik Kameraları Suçlu Tespiti</h3>
                <figure className="project-figure">
                  <img src="https://via.placeholder.com/400x200?text=Kamera+Projesi" alt="Güvenlik kamerasından alınan ve derin öğrenme ile işaretlenmiş kişi tespit görüntüsü" className="project-image" />
                  <figcaption>Derin öğrenme destekli kişi tespit algoritması sonuçları.</figcaption>
                </figure>
                <p>Derin öğrenme yöntemleriyle suçluların tespit ve takibini amaçlayan TÜBİTAK 2209-A projesi.</p>
              </article>

              <article
                className="project-card clickable"
                onClick={() => setActiveProject({
                  title: 'Kişisel Harcama Planlayıcı',
                  img: 'https://via.placeholder.com/800x400?text=Harcama+Planlayici',
                  fullDesc: 'Bireysel bütçe yönetimi için kullanıcılara harcama planlama ve raporlama imkanı sunan modern web projesi. Gelir-gider tabloları ve otomatik oluşturulan veri grafikleriyle (Dashboard) kullanıcıların finansal kararlarını daha rahat almalarını amaçlar.'
                })}
              >
                <h3>Kişisel Harcama Planlayıcı</h3>
                <figure className="project-figure">
                  <img src="https://via.placeholder.com/400x200?text=Harcama+Planlayici" alt="Kişisel bütçe uygulamasına ait harcama grafiklerini gösteren arayüz ekranı" className="project-image" />
                  <figcaption>Kullanıcıların aylık gelir/giderlerini takip ettikleri dashboard.</figcaption>
                </figure>
                <p>Bireysel bütçe yönetimi için kullanıcılara harcama planlama imkanı sunan web projesi.</p>
              </article>

              <article
                className="project-card clickable"
                onClick={() => setActiveProject({
                  title: 'YÜK-LE: B2B/B2C Lojistik Platformu',
                  img: 'https://via.placeholder.com/800x400?text=YUK-LE+Lojistik',
                  fullDesc: 'Yapay Zeka ve Coğrafi Bilgi Sistemleri (GIS) destekli dijital pazar yeri. Lojistik sektöründeki fiyat belirsizliğini, araçların boş dönüş verimsizliğini ve tahsilat güvensizliğini ortadan kaldırmayı hedefler. Yük sahipleri ile güvenilirlik onayı yapılmış taşıyıcıları lokasyon bazlı eşleştirir, navlun (taşıma) bedelini yapay zeka ile dinamik olarak hesaplar ve Escrow (Güvenli Havuz) yöntemiyle taraflar arası güveni sağlar.'
                })}
              >
                <h3>YÜK-LE: B2B/B2C Lojistik Platformu</h3>
                <figure className="project-figure">
                  <img src="https://via.placeholder.com/400x200?text=YUK-LE+Lojistik" alt="Yapay zeka ve GIS destekli lojistik eşleştirme platformu harita görünümü" className="project-image" />
                  <figcaption>Yapay Zeka ve GIS Destekli Escrow Ödeme Modeli.</figcaption>
                </figure>
                <p>Lojistik sektöründeki fiyat belirsizliğini ve tahsilat güvensizliğini ortadan kaldıran, yük sahipleri ile şoförleri saniyeler içinde eşleştiren yapay zeka destekli dijital pazar yeri ve Escrow ödeme sistemi.</p>
              </article>

              <article
                className="project-card clickable"
                onClick={() => setActiveProject({
                  title: 'Rüya Tabiri Uygulaması',
                  img: 'https://via.placeholder.com/800x400?text=Ruya+Tabiri+App',
                  fullDesc: 'Kullanıcıların anlattığı rüyaları yapay zeka modelleriyle yorumlayan, psikolojik sembolizme dayalı analiz sunan mobil/web rüya tabiri uygulaması. Gelişmiş NLP asistanıyla, kullanıcının gördüğü nesneleri ve duygu durumlarını analiz edip kişiselleştirilmiş rehberlik sunar.'
                })}
              >
                <h3>Rüya Tabiri Uygulaması</h3>
                <figure className="project-figure">
                  <img src="https://via.placeholder.com/400x200?text=Ruya+Tabiri+App" alt="Yapay zeka analizli rüya tabiri mobil uygulaması arayüzü" className="project-image" />
                  <figcaption>Gelişmiş analiz algoritmalarıyla rüya yorumlama uygulaması.</figcaption>
                </figure>
                <p>Kullanıcıların anlattığı rüyaları yapay zeka modelleriyle yorumlayan, psikolojik sembolizme dayalı analiz sunan mobil/web rüya tabiri uygulaması.</p>
              </article>

              <article
                className="project-card clickable"
                onClick={() => setActiveProject({
                  title: 'Combin-Maker (Kombin Giydirme)',
                  img: 'https://via.placeholder.com/800x400?text=Combin+Maker',
                  fullDesc: 'Kullanıcıların kendi fotoğrafları veya sanal mankenler üzerinden, farklı mağaza veya dolaplarındaki kıyafetleri dijital olarak birleştirip deneyebildiği etkileşimli sanal kabin. Hem e-ticaret sitelerine entegre edilebilir B2B tarafı hem de gündelik kıyafet seçimini hızlandıran B2C tarafıyla moda alışkanlıklarını dijitalleştirmeyi amaçlar.'
                })}
              >
                <h3>Combin-Maker (Kombin Giydirme)</h3>
                <figure className="project-figure">
                  <img src="https://via.placeholder.com/400x200?text=Combin+Maker" alt="Sanal kıyafet deneme ve kombin oluşturma uygulaması ekranı" className="project-image" />
                  <figcaption>Kullanıcıların dijital ortamda kıyafet eşleştirdiği sanal kabin.</figcaption>
                </figure>
                <p>Kullanıcıların kendi fotoğrafları veya sanal mankenler üzerinde farklı kıyafetleri deneyip kombinler oluşturabildiği etkileşimli giysi deneme platformu.</p>
              </article>

            </div>
          </div>
        </section>

        {/* Modal Alanı */}
        {activeProject && (
          <div className="project-modal" onClick={() => setActiveProject(null)} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setActiveProject(null)}
                aria-label="Modalı kapat"
              >
                &times;
              </button>
              <h2 id="modal-title">{activeProject.title}</h2>
              <img src={activeProject.img} alt={activeProject.title} className="modal-image" />
              <p className="modal-desc">{activeProject.fullDesc}</p>
            </div>
          </div>
        )}

        {/* BÖLÜM 4: İletişim Formu */}
        <section id="iletisim" className="section">
          <div className="card">
            <h2>İletişim</h2>
            <form className="contact-form" action="#" method="POST" noValidate>
              <fieldset>
                <legend>Bize Ulaşın</legend>

                <div className="form-group">
                  <label htmlFor="name">Ad Soyad:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength={3}
                    aria-describedby="name-error"
                  />
                  <small id="name-error" className="error-message" role="alert">Ad soyad en az 3 karakter olmalıdır.</small>
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-posta:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-describedby="email-error"
                  />
                  <small id="email-error" className="error-message" role="alert">Geçerli bir e-posta adresi giriniz.</small>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mesajınız:</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    aria-describedby="message-error"
                    rows={4}
                  ></textarea>
                  <small id="message-error" className="error-message" role="alert">Mesajınız en az 10 karakter olmalıdır.</small>
                </div>

                <button type="submit" className="submit-btn" aria-label="Mesajı gönder">Gönder</button>
              </fieldset>
            </form>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <p>Merhaba! Ben Hilmi Salih, yazılım geliştirmeye tutkulu bir girişimci adayıyım 🚀</p>
      </footer>
    </>
  )
}

export default App
