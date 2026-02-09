import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

function App() {
  return (
    <>
    <div className="p-5 md:-[15%]">
      <Navbar />
      <Home />
      </div>
      <About />

    <div className="p-5 md:-[15%]">
      <Skills />
      <Projects />
      <Contact />
      </div> 

    </>
  )
}

export default App
