import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"; // Ikon untuk skill

const About = () => {
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
    <section id="about" className="bg-white py-20">
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
            About Me
          </motion.h2>

          {/* Deskripsi */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            A D3 Informatics Engineering student who has a high interest in software development, especially in the field of mobile programming. Enjoys deepening coding skills and always tries to keep up with the latest technological developments.
          </motion.p>
        </motion.div>

        {/* Grid untuk Foto dan Skill */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerChildren}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Foto Profil */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://img.freepik.com/free-photo/waist-up-portrait-attractive-happy-hipster-man-red-hoodie-earring-smiling-pleased-pointing-looking-upper-left-corner-with-delighted_176420-42169.jpg?semt=ais_hybrid" // Ganti dengan URL foto Anda
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-600 opacity-50"></div>
            </div>
          </motion.div>

          {/* Daftar Skill dengan Ikon */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <FaCode className="text-4xl text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Full-Stack Development</h3>
                <p className="text-gray-600">Create mobile applications in particular</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaReact className="text-4xl text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">React And Flutter Specialist</h3>
                <p className="text-gray-600">Creating dynamic and responsive UIs.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaNodeJs className="text-4xl text-green-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Backend Expertise</h3>
                <p className="text-gray-600">Developing scalable server-side solutions.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaDatabase className="text-4xl text-purple-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Database Management</h3>
                <p className="text-gray-600">Designing and optimizing databases.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;