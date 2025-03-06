import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaWhatsapp, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // Pulse animation for heart icon
  const pulseAnimation = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  // Hover animation for social icons
  const socialIconAnimation = {
    rest: { scale: 1 },
    hover: {
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Handle logo click
  const handleLogoClick = () => {
    window.location.href = "/"; // Ganti dengan URL yang sesuai
  };

  return (
    <motion.footer
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      viewport={{ once: true }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              opacity: Math.random() * 0.3,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-8">
          <motion.div
            className="h-px w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          ></motion.div>

          {/* Logo dengan Animasi Hover dan Klik */}
          <motion.div
            className="cursor-pointer mb-8"
            onClick={handleLogoClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Hamm
            </h3>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div className="flex space-x-6 mb-8" variants={itemVariants}>
            {[
              {
                icon: <FaGithub size={28} />,
                href: "https://github.com/ilhamganteng321",
                color: "hover:text-white",
              },
              {
                icon: <FaWhatsapp size={28} />,
                href: "https://wa.me/62881023504625",
                color: "hover:text-green-400",
              },
              {
                icon: <FaInstagram size={28} />,
                href: "https://www.instagram.com/Aa_dinda1/",
                color: "hover:text-pink-400",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition duration-300 bg-gray-800 p-3 rounded-full hover:shadow-lg hover:shadow-blue-500/20`}
                initial="rest"
                whileHover="hover"
                variants={socialIconAnimation}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <motion.div className="text-center md:text-left" variants={itemVariants}>
            <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Ilham Arip Pratama
            </h3>
            <motion.p
              className="text-sm flex items-center justify-center md:justify-start"
              variants={itemVariants}
            >
              Made with <motion.span animate={pulseAnimation} className="text-red-500 mx-1"><FaHeart /></motion.span> in Indonesia
            </motion.p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500"
          variants={itemVariants}
        >
          <p>&copy; {currentYear} Ilham Arip Pratama. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;