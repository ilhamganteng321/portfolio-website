import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Ikon untuk GitHub dan Live Demo

// Impor gambar dari folder assets
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
      image: project1, // Gunakan gambar yang diimpor
      github: "https://github.com/ilhamganteng321/project-2",
      liveDemo: "https://yourportfolio.com",
    },
    {
      title: "Portfolio Website",
      description: "built using react js technology.",
      image: image, // Gunakan gambar yang diimpor
      github: "https://github.com/ilhamganteng321/portfolio-website",
      liveDemo: "https://ecommerce.example.com",
    },
    {
      title: "Task Management App",
      description: "A task management application built with React and Firebase.",
      image: project3, // Gunakan gambar yang diimpor
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
          {/* Judul */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
          >
            My Projects
          </motion.h2>

          {/* Deskripsi */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Here are some of the projects I've worked on. Each project showcases my skills and
            creativity in web development.
          </motion.p>
        </motion.div>

        {/* Grid untuk Proyek */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerChildren}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Gambar Proyek */}
              <img
                src={project.image} // Gunakan gambar yang diimpor
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Konten Proyek */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tombol GitHub dan Live Demo */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-600 transition duration-300"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-500 hover:text-green-600 transition duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
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