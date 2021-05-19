import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
