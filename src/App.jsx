import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/NavBar";
import Hero from "./component/Hero";
import Home from "./pages/Home";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Skills from "./component/Skills";
import Education from "./component/Education";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hero" element={<Hero />} />
        
      </Routes>
    </Router>
  );
}

export default App;