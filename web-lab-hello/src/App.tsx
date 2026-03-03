import './App.css'

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>Web Tasarımı ve Programlama</h1>
        <h2>LAB-1</h2>

        <div className="info-section">
          <div className="info-item">
            <span className="label">Ad Soyad</span>
            <span className="value">Hilmi Salih Altınışık</span>
          </div>
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
          <div className="info-item">
            <span className="label">Hobiler</span>
            <span className="value">Koşu, Fitness, Yemek Yapma</span>
          </div>
        </div>

        <p className="description">
          Yazılım Mühendisliği öğrencisi & girişimci. Python, C#, Java, SQL ve yapay zeka araçlarıyla
          projeler geliştiriyorum. Faldex markasıyla e-ticaret sektöründe aktif olarak çalışıyorum.
        </p>

        <div className="tech-stack">
          <span className="badge">⚡ Vite</span>
          <span className="badge">⚛️ React</span>
          <span className="badge">🔷 TypeScript</span>
        </div>

        <div className="skills-section">
          <h3>Becerilerim</h3>
          <div className="tech-stack">
            <span className="badge skill">Python</span>
            <span className="badge skill">C#</span>
            <span className="badge skill">Java</span>
            <span className="badge skill">SQL</span>
            <span className="badge skill">MATLAB</span>
          </div>
        </div>

        <footer className="footer">
          Merhaba! Ben Hilmi Salih, yazılım geliştirmeye tutkulu bir girişimci adayıyım 🚀
        </footer>
      </div>
    </div>
  )
}

export default App
