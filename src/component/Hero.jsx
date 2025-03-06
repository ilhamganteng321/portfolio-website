import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation"; // Untuk efek mengetik

const HeroSection = () => {
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
    <section
      id="hero"
      className="animated-gradient h-screen flex items-center justify-center py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="text-center"
        >
          {/* Judul */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-10"
          >
            Hallo, saya Ilham Arip
          </motion.h1>

          {/* Deskripsi dengan Typing Effect */}
          <motion.div
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-12"
          >
            <TypeAnimation
              sequence={[
                "I'm a passionate developer who loves building amazing web and mobile experiences.",
                1000, // Waktu jeda setelah selesai mengetik
                "I specialize in Flutter, React, and modern web technologies.",
                1000,
                "Let's build something amazing together!",
                1000,
              ]}
              speed={50} // Kecepatan mengetik
              deletionSpeed={70} // Kecepatan menghapus
              style={{ display: "inline-block" }}
              repeat={Infinity} // Loop animasi
            />
          </motion.div>

          {/* Tombol CTA */}
          <motion.div variants={fadeInUp} className="flex justify-center gap-6">
            <a
              href="#projects"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-xl hover:bg-gray-100 transition duration-300 text-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 text-lg"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;