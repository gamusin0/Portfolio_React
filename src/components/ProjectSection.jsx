import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import web_portfolio from "../assets/projects/web_portfolio.png";
import cifrado_cesar from "../assets/projects/cifrado_cesar.png";
import { ProjectModal } from "./ProjectModal";

const projects = [
  {
    id: 1,
    tittle: "Portfolio de AlejandraH",
    description:
      "Portfolio personal de AlejandraH, desarrollado con React y Tailwind CSS. Presenta proyectos, habilidades y experiencia de manera atractiva y profesional.",
    image: web_portfolio,
    tags: ["React", "Tailwind CSS", "JavaScript"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 2,
    tittle: "Cifrado César",
    description:
      "Mini aplicación web que cifra texto usando el algoritmo de César.",
    image: cifrado_cesar,
    tags: ["JavaScript", "CSS", "HTML"],
    demoURL: "/demos/cifrado-cesar/index.html",
    githubURL: "#",
  },
];

export const ProjectSection = () => {
  const [openDemo, setOpenDemo] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Proyectos <span className="text-primary"> Destacados </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aquí algunos de mis proyectos más recientes. ¡Explora y descubre lo que
          he creado!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              style={{ boxShadow: "0 4px 6px rgba(48, 26, 5, 0.7)" }}
            >
              {/* Imagen */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.tittle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Tags */}
              <div className="p-6">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-primary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Texto */}
              <h3 className="text-xl font-semibold mb-2 text-center px-2">
                {project.tittle}
              </h3>
              <p className="text-muted-foreground text-center px-4 mb-4">
                {project.description}
              </p>

              {/* Botones */}
              <div className="flex justify-center space-x-3 px-4 mb-4">
                {/* DEMO */}
                {project.demoURL !== "#" && (
                  <button
                    onClick={() => setOpenDemo(project.demoURL)}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink />
                  </button>
                )}

                {/* GITHUB */}
                <a
                  href={project.githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Github />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <ProjectModal
        open={!!openDemo}
        demoUrl={openDemo}
        onClose={() => setOpenDemo(null)}
      />
    </section>
  );
};
