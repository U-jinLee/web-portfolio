import './App.css'
import Hero from './components/Hero'
import Skills from './components/Skills'
import RightNavigation from './components/RightNavigation'
import Experience from './components/Experience'
import Projects from './components/Projects'
import { Education } from './components/Education'

function App() {
  return (
    <>
      <RightNavigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>
    </>
  )
}

export default App
