import React from "react";
import { motion } from "framer-motion";

const Education = () => {
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

  const educationData = [
    {
      institution: "Universitas Logistik Dan Bisnis Internasional",
      degree: "Informatic Enginering",
      year: "2022 - Now ",
      description:
        "I have experience in programming with various languages and frameworks, including Flutter, Laravel, Vue.js, and .NET (Windows Forms). I have worked on diverse projects involving mobile, web, and desktop application development. My skills include backend development, database management, and working with APIs such as GraphQL, RESTful, and gRPC. Additionally, I am proficient in using Git for version control, VS Code as my primary editor, and Linux (Debian) as part of my development workflow",
    },
    {
      institution: "Smk plus qurrota a'yun",
      degree: "Teknik Komputer dan Jaringan",
      year: "2018 - 2021",
      description:
        "I have learned the basics of computer networks, hardware, and programming. I am familiar with fundamental HTML and simple web development. Additionally, I have basic experience in operating system installation and network configuration.",
    },
  ];

  return (
    <section id="education" className="bg-white py-20">
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
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
          >
            Education
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            My academic journey and the institutions that helped shape my career.
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerChildren}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{edu.institution}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                </div>
                <span className="text-sm text-gray-500 mt-2 sm:mt-0">{edu.year}</span>
              </div>
              <p className="text-gray-600 mt-4">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;