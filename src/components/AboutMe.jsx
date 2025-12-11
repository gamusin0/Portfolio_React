import cv_AlejandraH from "../assets/cv/cv_AlejandraH.pdf"
import { Code, User, Briefcase } from "lucide-react"
export const AboutMe = () => {

    return <section id="aboutme" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Sobre <span className="text-primary"> Mi</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/*Primera columna con su texto y sus dos botones*/}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold"> 
                        ¡Hola! Soy una desarrolladora a la que le encanta cacharrear, construir cosas y resolver problemas.

                    </h3>
                    <p className="text-muted-foreground">
                        Me gustan los proyectos donde puedo aprender algo nuevo cada día, 
                        ya sea programando, diseñando una interfaz o ayudando a alguien con un problema técnico.
                    </p>
                    <p className="text-muted-foreground">
                        Me caracterizo por mi curiosidad, mi rapidez para adaptarme y 
                        mi gusto por hacer las cosas bien. Si algo se puede mejorar, 
                        allí estaré, probablemente con un café en la mano y mil ideas en la cabeza.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Contactame!
                        </a>
                        <a href="{cv_AlejandraH}"
                        download="CV_AlejandraH.pdf"
                        className="px-6 py-2 rounded-full bg-white text-primary border border-primary hover:bg-primary/90 transition-colors duration-300 text-center">
                            {" "}
                            Descárgate mi CV
                        </a>

                    </div>
                

                </div>
                {/*Segunda columna con sus tres bloques*/}
                <div className="grid grid-cols-1 gap-6">

                    <div className="gradient-border p-6 card-hover flex items-start gap-4"> {/*Cacharro1*/}
                        <div className="p-3 rounded-full bg-primary/10"> {/*el icono de code*/}
                            <Code className="h-6 w-6 text-primary"/> {/*importante importar lo de lucid para usarlo*/}
                        </div>  
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Desarrollo Backend</h4>
                            <p className="text-muted-foreground">
                                {" "}
                                Experiencia en programación con Java, Python y otras tecnologías backend, 
                                enfocada en lógica de negocio, procesamiento de datos y arquitectura de software.
                            </p>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover flex items-start gap-4"> {/*Bloque*/}
                        <div className="p-3 rounded-full bg-primary/10"> {/*el icono*/}
                             <User className="h-6 w-6 text-primary"/>                           
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Diseño UI/UX</h4>
                            <p className="text-muted-foreground">
                                {" "}
                                Habilidades en diseño de interfaces y experiencia de usuario
                                con Figma.
                            </p>
                        </div>

                    </div>

                    <div className="gradient-border p-6 card-hover flex items-start gap-4"> {/*Bloque*/}                        
                        <div className="p-3 rounded-full bg-primary/10"> {/*el icono*/}
                            <Briefcase className="h-6 w-6 text-primary"/>
                        </div>     
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Gestión de proyectos</h4>
                            <p className="text-muted-foreground">
                                {" "}
                                Experiencia en gestión de proyectos con metodologías ágiles
                                (Scrum, Jira).
                            </p>
                        </div>                 

                    </div>
                </div>

            </div>

        </div>

    </section>

}
