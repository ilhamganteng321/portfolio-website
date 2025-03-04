import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaFire,
  FaAndroid,
} from "react-icons/fa";
import {
  SiDart,
  SiPhp,
  SiSharp,
  SiKotlin,
  SiFlutter,
  SiVuedotjs,
  SiLaravel,
  SiCodeigniter,
  SiFlask,
  SiFirebase,
  SiMysql,
  SiSqlite,
  SiPostgresql,
  SiMongodb,
  SiSpring,
  SiDotnet,
} from "react-icons/si";

const Skills = () => {
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

  // Data Skill
  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Dart", icon: <SiDart className="text-blue-500" />, level: 85 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 90 },
        { name: "PHP", icon: <SiPhp className="text-purple-500" />, level: 80 },
        { name: "Python", icon: <FaPython className="text-blue-600" />, level: 75 },
        { name: "Java", icon: <FaJava className="text-red-500" />, level: 70 },
        { name: "C#", icon: <SiSharp className="text-green-500" />, level: 80 },
        { name: "Kotlin", icon: <SiKotlin className="text-orange-500" />, level: 60 },
      ],
    },
    {
      category: "Frameworks",
      skills: [
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" />, level: 85 },
        { name: "React JS/Native", icon: <FaReact className="text-blue-500" />, level: 80 },
        { name: "Vue JS", icon: <SiVuedotjs className="text-green-500" />, level: 60 },
        { name: "Laravel", icon: <SiLaravel className="text-red-500" />, level: 75 },
        { name: "CodeIgniter", icon: <SiCodeigniter className="text-orange-500" />, level: 65 },
        { name: "Flask", icon: <SiFlask className="text-gray-500" />, level: 60 },
        { name: "Spring", icon: <SiSpring className="text-green-600" />, level: 60 },
        { name: ".NET Windows Forms", icon: <SiDotnet className="text-purple-600" />, level: 80 },
        { name: "Android Native", icon: <FaAndroid className="text-green-500" />, level: 60 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, level: 80 },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 85 },
        { name: "Flask", icon: <SiFlask className="text-gray-500" />, level: 70 },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-500" />, level: 85 },
        { name: "SQLite", icon: <SiSqlite className="text-teal-500" />, level: 80 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" />, level: 75 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 70 },
        { name: "Firestore", icon: <FaFire className="text-orange-500" />, level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-20">
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
            Skills
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Here are some of the skills I've developed over the years. I'm always learning and
            improving!
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={staggerChildren}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-bold text-gray-800 mb-6"
            >
              {category.category}
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-2xl">{skill.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="h-2.5 rounded-full bg-blue-500"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{skill.level}%</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;