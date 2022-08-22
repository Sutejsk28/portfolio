import About from "../components/UI/About"
import Contact from "../components/UI/Contact"
import Hero from "../components/UI/Hero"
import Projects from "../components/UI/Projects"
import Skills from "../components/UI/Skills"

export default function Home() {
  return (
    <>
      <Hero />
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}
