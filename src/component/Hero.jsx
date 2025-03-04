import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
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
    <section id="hero" className="bg-gradient-to-r from-blue-500 to-purple-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="text-center"
        >
          {/* Judul */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Hallo, saya Ilham arip
          </motion.h1>

          {/* Deskripsi */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8"
          >
            I'm a passionate developer who loves building amazing web and mobile experiences.
          </motion.p>

          {/* Tombol CTA */}
          <motion.div variants={fadeInUp}>
            <a
              href="#projects"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;