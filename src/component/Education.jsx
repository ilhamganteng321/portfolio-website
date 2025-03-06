import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const educationData = [
    {
      institution: "Universitas Logistik Dan Bisnis Internasional",
      degree: "Informatic Engineering",
      year: "2022 - Now",
      description:
        "Experience in Flutter, Laravel, Vue.js, .NET, and more. Strong skills in backend development, database management, and API integration (GraphQL, REST, gRPC).",
    },
    {
      institution: "SMK Plus Qurrota A'yun",
      degree: "Teknik Komputer dan Jaringan",
      year: "2018 - 2021",
      description:
        "Gained foundational knowledge in computer networks, hardware, and programming. Experience in basic web development and network configuration.",
    },
  ];

  return (
    <section id="education" className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerChildren}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-12"
          >
            Education
          </motion.h2>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerChildren}
          viewport={{ once: true }}
          className="relative border-l-4 border-blue-500 pl-8 space-y-12"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-1.25rem] top-4 w-8 h-8 bg-blue-500 rounded-full border-4 border-white" />

              {/* Content */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{edu.institution}</h3>
                  <p className="text-blue-600 font-medium mt-1">{edu.degree}</p>
                </div>
                <span className="text-sm text-gray-500 mt-4 sm:mt-0">{edu.year}</span>
              </div>
              <p className="text-gray-600 mt-6 leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
