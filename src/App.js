import './App.css';
import About from "./components/About"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <h1>Jeff's Portfolio Site</h1>

      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
