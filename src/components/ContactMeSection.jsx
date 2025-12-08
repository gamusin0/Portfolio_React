import { Linkedin, Mail } from "lucide-react"
import { Phone } from "lucide-react"
import {cn} from '@/lib/utils';
import { Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import React, {useRef} from 'react';


export const ContactMeSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Manejo del envío del formulario
        setTimeout(() => {
            alert("Mensaje enviado. ¡Gracias por contactarme!")

        }, 1500) // Simula un retraso para el envío
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_i1j2m55', 'template_56x2cyw', form.current, 'VL3i9odgaMSbVEPz0').then(
            () => {
                alert("Mensaje enviado. ¡Gracias por contactarme!");
                form.current.reset();
            },
            (error) => {
                alert("Error al enviar el mensaje, por favor intenta de nuevo.");
                console.log(error.text);
            }
        )
    }

    return (<section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Contácta<span className="text-primary">me</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                ¿Tienes un proyecto en mente o simplemente quieres saludar? 
                ¡No dudes en ponerte en contacto conmigo! 
                Estoy siempre abierta a nuevas oportunidades y colaboraciones.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> 
                <div className="space-y-8"> 
                    <h3 className="text-2xl font-semibold mb-6">
                        Información de contacto
                    </h3>
                    <div className="space-y-6 justify-center"> 
                        {/*EMAIL*/}
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary "/>{" "}
                            </div>
                            <div> 
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:ahuguet@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    ahuguet@gmail.com
                                </a>

                            </div>

                        </div>
                        {/*TELEFONO*/}

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary "/>{" "}
                            </div>
                            <div> 
                                <h4 className="font-medium"> Teléfono</h4>
                                <a href="tel:+3460362017" className="text-muted-foreground hover:text-primary transition-colors">
                                    +34 606 362 017
                                </a>

                            </div>

                        </div>

                        {/*TELEFONO*/}

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Linkedin className="h-6 w-6 text-primary "/>{" "}
                            </div>
                            <div> 
                                <h4 className="font-medium"> LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/alejandra-huguet-aznar-a61582312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-muted-foreground hover:text-primary transition-colors">
                                    Alejandra Huguet
                                </a>

                            </div>

                        </div>

                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl front-semibold mb-6"> Envíame un mensaje! </h3>

                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium mb-2"> Tu nombre</label>
                            <input 
                            type="text" 
                            id="nombre" 
                            name="nombre" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Alex Tintor..."
                            />
                        </div>

                        <div>
                            <label htmlFor="correo" className="block text-sm font-medium mb-2"> Tu correo</label>
                            <input 
                            type="email" 
                            id="correo" 
                            name="correo" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="ejemplo@gmail.com"
                            />
                        </div>

                         <div>
                            <label htmlFor="mensaje" className="block text-sm font-medium mb-2"> Tu mensaje</label>
                            <textarea
                            id="mensaje" 
                            name="mensaje" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize none"
                            placeholder="Escribe tu mensaje aquí..."
                            />
                        </div>

                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            Enviar mensaje
                            <Send size={16}/>
                        </button>

                    </form>

                </div>

            </div>

        </div>
    </section>

    );
}
