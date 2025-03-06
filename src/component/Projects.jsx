import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Import images from assets folder
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import image from "../assets/image.png";

const Projects = () => {
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

  const projectsData = [
    {
      title: "Diabetes risk prediction application system using mobile-based random forest algorithm",
      description: "Application using Flutter technology with Firebase database and backend using Flask.",
      image: project1,
      github: "https://github.com/ilhamganteng321/project-2",
      liveDemo: "https://yourportfolio.com",
    },
    {
      title: "Portfolio Website",
      description: "built using react js technology.",
      image: image,
      github: "https://github.com/ilhamganteng321/portfolio-website",
      liveDemo: "https://kuportofolio.netlify.app/",
    },
    {
      title: "Task Management App",
      description: "A task management application built with React and Firebase.",
      image: project3,
      github: "https://github.com/yourusername/task-manager",
      liveDemo: "https://taskmanager.example.com",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerChildren}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
          >
            My Projects
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Here are some of the projects I've worked on. Each project showcases my skills and
            creativity in web development.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerChildren}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md overflow-hidden group relative h-96"
            >
              {/* Project Image with Zoom Effect */}
              <div className="h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
              </div>

              {/* Interactive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-blue-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-white">
                <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>
                <p className="text-sm mb-6 text-center">{project.description}</p>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-full font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-white text-green-600 px-4 py-2 rounded-full font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;