import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import RightNavigation from './components/RightNavigation'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <RightNavigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </>
  )
}

export default App
