import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { MandalasFondo } from "./components/MandalasFondo";
import { useEffect, useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true });
    setIsDarkMode(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* 🌞 Solo aparecen las mandalas en modo claro */}
        {!isDarkMode && <MandalasFondo />}

        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
