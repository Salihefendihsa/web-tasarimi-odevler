import { useState } from "react";
import Portfolio from "./pages/Portfolio";
import UIKit from "./pages/UIKit";

function App() {
  const [page, setPage] = useState("portfolio");

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* ─── Dark Mode Toggle (her iki sayfada görünür) ─── */}
      <button
        onClick={toggleDark}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700
          text-gray-800 dark:text-gray-200 w-10 h-10 rounded-full shadow-lg
          hover:scale-110 transition-transform cursor-pointer
          flex items-center justify-center text-lg"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">🌙</span>
        <span className="hidden dark:inline">☀️</span>
      </button>

      {/* ─── Sayfa Geçiş Navigasyonu ─── */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full
        shadow-xl border border-gray-200 dark:border-gray-700 px-1 py-1
        flex gap-1"
      >
        <button
          onClick={() => setPage("portfolio")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer
            ${
              page === "portfolio"
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
        >
          📋 Portfolyo
        </button>
        <button
          onClick={() => setPage("uikit")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer
            ${
              page === "uikit"
                ? "bg-purple-600 text-white shadow-md"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
        >
          🎨 UI Kit
        </button>
      </nav>

      {/* ─── Sayfa İçeriği ─── */}
      {page === "portfolio" ? <Portfolio /> : <UIKit />}
    </div>
  );
}

export default App;
