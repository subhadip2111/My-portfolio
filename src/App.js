
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './components/Contact/Contact';

import Navbar from './components/Navbar/Navbar';
import Skill from './components/Skills/Skill';
import Works from './components/Works/Works';
import Intro from './components/intro/Intro';
import Footer from "./components/Footer/Footer";
import "./styles.css"
import Project from "./components/Project/Project";
import ProjectDetail from "./components/Project/ProjectDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/works" element={<Works />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;