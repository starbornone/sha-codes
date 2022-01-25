import Intro from './sections/Intro'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <main>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
