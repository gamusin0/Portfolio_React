import React, { useState, useEffect, useMemo } from "react";

const skills = [ //Array con todas las habilidades y su nivel
  //Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "Frontend" },
  { name: "React", level: 60, category: "Frontend" },
  { name: "Tailwind CSS", level: 65, category: "Frontend" },
  { name: "Flutter / Dart", level: 65, category: "Frontend" },

  //Backend
  { name: "Java", level: 85, category: "Backend" },
  { name: "Python", level: 90, category: "Backend" },
  { name: "PHP", level: 80, category: "Backend" },
  { name: "FastAPI", level: 70, category: "Backend" },
  { name: "MySQL", level: 75, category: "Backend" },
  { name: "Firebase (Realtime DB / Auth)", level: 95, category: "Backend" },
  { name: "Node.js", level: 65, category: "Backend" },

  //Tools
  { name: "Git/GitHub", level: 80, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "Figma", level: 95, category: "Tools" },

];

const categorias = ["All", "Frontend","Backend","Tools"]

export const SkillSection = () => {
    const [activeCategory, setActiveCategory] = useState("All") //Estado para manejar la categoría seleccionada (todas, frontend, backend, tools)

    const filteredSkills = skills.filter(
  (skill) => activeCategory === "All" || skill.category === activeCategory);
    //Filtra las habilidades según la categoría seleccionada. Si es "All", muestra todas.

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl"> 
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Mis <span className="text-primary"> Habilidades</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12"> {/*Botones de categorías*/}
                {categorias.map((categoria, key) => (
                    <button key={key} 
                    onClick={() => setActiveCategory(categoria)}
                    className={`px-5 py-2 rounded-full transition-color duration-300 capitalize ${activeCategory === categoria ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-primary/10"}`}>
                        {/*Si la categoría está activa, cambia el color de fondo y el texto*/}
                        {categoria}
                    </button>
                ))}

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>

                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate[grow_1.5_ease-out]"
                                style={{ width: skill.level + "%"}}>
                            </div>

                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">
                                {skill.level}%
                            </span>
                            
                        </div>

                    </div>
                ))}

            </div>

        </div>

    </section>
}