import { useEffect } from "react";

export const ProjectModal = ({ open, demoUrl, onClose }) => {
  // Bloquear scroll del body mientras está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Limpieza al desmontar
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose} // cerrar al hacer click fuera del contenido
    >
      <div
        className="bg-card rounded-xl p-4 w-full max-w-lg md:max-w-xl shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // evita cerrar al click dentro
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-primary text-xl font-bold"
        >
          ✕
        </button>

        {/* Iframe del proyecto */}
        <iframe
          src={demoUrl}
          className="w-full h-80 md:h-96 rounded"
          title="Demo del proyecto"
        />
      </div>
    </div>
  );
};
