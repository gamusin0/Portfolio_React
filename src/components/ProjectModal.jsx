export const ProjectModal = ({ open, onClose, demoUrl }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="bg-card rounded-lg p-6 max-w-xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white"
        >
          ✕
        </button>

        <iframe
          src={demoUrl}
          className="w-full h-full border-0"
          title="Project Demo"
        />
      </div>
    </div>
  );
};
