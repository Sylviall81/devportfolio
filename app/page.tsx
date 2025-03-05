import Header from "@/components/header"
import Hero from "@/components/hero-turquoise"
import Skills from "@/components/skills-turquoise"
import Projects from "@/components/projects-turquoise"
import Contact from "@/components/contact-turquoise"
import Footer from "@/components/footer"


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header accentColor="turquoise" />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        
      </main>
      <Footer accentColor="turquoise" />
    </div>
  )
}

