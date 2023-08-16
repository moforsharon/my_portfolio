import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Skills from "./pages/SkillsPage/Skills";
import ContactMe from "./pages/ContactPage/Contact";
import Projects from "./pages/ProjectsPage/Projects";

function App() {
  return (

      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/contact" element={<ContactMe />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </Router>

  );
}

export default App;
