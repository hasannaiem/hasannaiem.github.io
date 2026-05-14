import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Stats from '../sections/Stats'
import ProjectsPreview from '../sections/ProjectsPreview'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Stats />
      <ProjectsPreview />
      <Contact />
      <Footer />
    </main>
  )
}
