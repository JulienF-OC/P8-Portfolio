import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Skills from "./Components/Skills"

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
      </div> 

    </>
  )
}

export default App
