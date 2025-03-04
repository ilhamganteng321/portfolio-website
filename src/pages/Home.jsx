import React from "react";
import { motion } from "framer-motion";
import Navbar from "../component/NavBar";
import Hero from "../component/Hero";
import Education from "../component/Education";
import Skills from "../component/Skills";
import About from "../component/About";
import Projects from "../component/Projects";
import Contact from "../component/Contact";

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      <Education/>
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;