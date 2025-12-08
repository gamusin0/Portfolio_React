import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { Navbar } from "@/components/NavBar"
import { HeroSection } from "@/components/HeroSection"
import { AboutMe } from "@/components/AboutMe"
import { SkillSection } from "@/components/SkillSection"
import { ProjectSection } from "@/components/ProjectSection"
import { ContactMeSection } from "@/components/ContactMeSection"
  
export const Home = () => {
  return <div className= "min-h-screen bg-background text-foreground overflow-x-hidden">

    {/* Theme Toggle */}
      <ThemeToggle />

    {/* Background Effect */}
    <StarBackground/>

    {/* Navbar*/}
    <Navbar />

    {/* Main Content */}
    <main>
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutMe />
      {/* Skills Section */}
      <SkillSection />
      {/* Projects Section */}
      <ProjectSection />
      {/* Contact Section */}
      <ContactMeSection />

    </main>

    {/* Footer */}
    </div>

}