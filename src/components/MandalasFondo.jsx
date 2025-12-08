import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import mandala1 from "../assets/mandalas/mandala1.png";
import mandala2 from "../assets/mandalas/mandala2.png";
import mandala3 from "../assets/mandalas/mandala3.png";
import mandala4 from "../assets/mandalas/mandala4.png";
import mandalaXD from "../assets/mandalas/mandalaXD.png";

const mandalas = [mandala1, mandala2, mandala3, mandala4, mandalaXD];

export const MandalasFondo = () => {
  const [items, setItems] = useState([]);

  // Función para generar una mandala aleatoria
  const createMandala = (id) => ({
    id,
    src: mandalas[Math.floor(Math.random() * mandalas.length)],
    top: Math.random() * 80 + 10,
    left: Math.random() * 80 + 10,
    size: 100 + Math.random() * 150,
    opacity: 0.8 + Math.random() * 0.2,
    scaleMin: 0.85 + Math.random() * 0.15,
    scaleMax: 1 + Math.random() * 0.1,
    duration: 20 + Math.random() * 15,  // flotación lenta
    rotate: Math.random() * 60 - 30,
    deltaTop: Math.random() * 40 - 20,
    deltaLeft: Math.random() * 40 - 20,
  });

  // Crear mandalas al montar el componente
  useEffect(() => {
    const newItems = [];
    for (let i = 0; i < 30; i++) {
      newItems.push(createMandala(i));
    }
    setItems(newItems);
  }, []);

  // Al completar un ciclo, reaparece en otra posición
  const handleAnimationComplete = (id) => {
    setItems((prev) =>
      prev.map((m) => (m.id === id ? createMandala(id) : m))
    );
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {items.map((m) => (
        <motion.img 
          key={m.id + "-" + Math.random()}
          src={m.src}
          alt="mandala"
          initial={{
            opacity: 0,
            top: [`${m.top}%`, `${m.top + m.deltaTop}%`],
            left: [`${m.left}%`, `${m.left + m.deltaLeft}%`],
            scale: m.scaleMin,
          }}
          animate={{
            opacity: [0, m.opacity, 0],
            scale: [m.scaleMin, m.scaleMax, m.scaleMin],
            rotate: [0, m.rotate, 0],
            top: [`${m.top}%`, `${m.top + m.deltaTop}%`, `${m.top}%`],
            left: [`${m.left}%`, `${m.left + m.deltaLeft}%`, `${m.left}%`],
          }}
          transition={{
            duration: m.duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          style={{
            position: "absolute",
            width: `${m.size}px`,
            filter: "blur(0.2px)",
            mixBlendMode: "soft-light",
          }}
          onAnimationComplete={() => handleAnimationComplete(m.id)}
        />
      ))}
    </div>
  );
};
