import { ExternalLink, Github } from "lucide-react"
import web_portfolio from "../assets/projects/web_portfolio.png"

const projects = [
    {
        id: 1,
        tittle: "Portfolio de AlejandraH",
        description: "Portfolio personal de AlejandraH, desarrollado con React y Tailwind CSS. Presenta proyectos, habilidades y experiencia de manera atractiva y profesional.",
        image: web_portfolio,
        tags: ["React", "Tailwind CSS", "JavaScript"],
        demoURL: "#",
        githuibURL:"#"
    }

]
export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">

    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" >
            {" "}
            Proyectos <span className="text-primary"> Destacados </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Aquí algunos de mis proyectos más recientes. ¡Explora y descubre lo que he
            creado!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/*Grid de proyectos*/}
            {projects.map((project,key)=>
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover" style={{ boxShadow: "0 4px 6px rgba(48, 26, 5, 0.7)" }}> {/*Tarjeta de cada proyecto*/}
                    <div className="h-48 overflow-hidden"> {/*Iimagen del proyecto*/}
                        <img src={project.image} alt={project.tittle} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                    </div>

                    <div className="p-6"> {/*Contenido del proyecto*/}
                        <div className="flex flex-wrap justify-center gap-2 mb-4"> {/*Etiquetas del proyecto*/}
                            {project.tags.map((tag) => (
                                <span className="px-3 py-1 text-xs font-medium border rounded-full bg-primary text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center px-2">{project.tittle}</h3> {/*Título del proyecto*/}
                    <p className="text-muted-foreground text-center px-4 mb-4">{project.description}</p> {/*Descripción del proyecto*/}

                    <div className="flex justify-between items-center">
                        <div className="flex space-x-3 px-4 mb-4"> {/*Botones de demo y github*/}
                            <a href={project.demoURL} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <ExternalLink/>
                            </a>
                            <a href={project.githuibURL} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <Github/>
                            </a>
                            
                        </div>


                    </div>
                    
                </div>           
            
            )}


        </div>
    </div>

    </section>
}