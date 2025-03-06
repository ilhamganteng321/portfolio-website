import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Ikon untuk kontak

const Contact = () => {
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
    <section id="contact" className="bg-white py-20">
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
            Contact Me
          </motion.h2>

          {/* Deskripsi */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>
        </motion.div>

        {/* Grid untuk Kontak dan Formulir */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerChildren}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Informasi Kontak */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-4xl text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">ilhamarippratama@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-4xl text-green-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+62 8810 2350 4625</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-4xl text-purple-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">Garut Jawa Barat, Indonesia</p>
              </div>
            </div>
          </motion.div>

          {/* Formulir Kontak */}
          <motion.div
            variants={fadeInUp}
            className="bg-gray-50 p-6 rounded-lg shadow-md"
          >
           <form
  action="https://formspree.io/f/mkgjwoql"
  method="POST"
>
  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
      Name
    </label>
    <input
      type="text"
      name="name"
      id="name"
      required
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
      placeholder="Your Name"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
      Email
    </label>
    <input
      type="email"
      name="email"
      id="email"
      required
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
      placeholder="Your Email"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
      Message
    </label>
    <textarea
      name="message"
      id="message"
      required
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
      rows="5"
      placeholder="Your Message"
    ></textarea>
  </div>
  <button
    type="submit"
    className="w-full bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
  >
    Send Message
  </button>
</form>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;