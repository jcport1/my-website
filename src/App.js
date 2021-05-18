import React from 'react'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar />

      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
