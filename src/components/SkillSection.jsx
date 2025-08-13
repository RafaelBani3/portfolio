// "use client";

// import { motion } from "framer-motion";
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaPhp, FaFigma, FaDatabase } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiMysql, SiKotlin, SiLaravel } from "react-icons/si";

// const skills = [
//   { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: "Advanced" },
//   { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: "Advanced" },
//   { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, level: "Intermediate" },
//   { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: "Basic" },
//   { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: "Basic" },
//   { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, level: "Intermediate" },
//   { name: "MySQL", icon: <SiMysql className="text-blue-400" />, level: "Intermediate" },
//   { name: "GitHub", icon: <FaGithub className="text-white" />, level: "Intermediate" },
//   { name: "PHP", icon: <FaPhp className="text-purple-400" />, level: "Intermediate" },
//   { name: "Laravel", icon: <SiLaravel className="text-red-500" />, level: "Intermediate" },
//   { name: "Figma", icon: <FaFigma className="text-pink-500" />, level: "Intermediate" },
//   { name: "Database Design", icon: <FaDatabase className="text-green-400" />, level: "Intermediate" },
// ];

// const SkillSection = () => {
//   return (
//     <section className="py-16 bg-[#19222D] text-white">
//         <div className="max-w-6xl mx-auto px-6">
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-4xl font-bold text-center mb-12">
//                 My Skills
//             </motion.h2>

//             <motion.div
//                 className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={{
//                     visible: { transition: { staggerChildren: 0.15 } }
//                 }}>
//                 {skills.map((skill, index) => (
//                     <motion.div
//                         key={index}
//                         className="bg-[#1F2A38] p-6 rounded-xl shadow-lg flex flex-col items-center hover:shadow-cyan-500/40 transition-shadow cursor-pointer"
//                         variants={{
//                             hidden: { opacity: 0, y: 30 },
//                             visible: { opacity: 1, y: 0 }
//                         }}
//                         whileHover={{ scale: 1.08, rotate: 1 }}
//                         whileTap={{ scale: 0.95 }}
//                         transition={{ type: "spring", stiffness: 300 }}
//                         >
//                         <div className="text-5xl mb-3">{skill.icon}</div>
//                         <h3 className="text-lg font-semibold">{skill.name}</h3>
//                         <p className="text-sm text-gray-400">{skill.level}</p>
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </div>
//     </section>
//   );
// };

// export default SkillSection;

"use client";

import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub,
  FaPhp, FaFigma, FaDatabase
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiMysql, SiKotlin, SiLaravel
} from "react-icons/si";

// Data skill
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: "Advanced" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: "Advanced" },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, level: "Intermediate" },
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: "Basic" },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: "Basic" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, level: "Intermediate" },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" />, level: "Intermediate" },
  { name: "GitHub", icon: <FaGithub className="text-white" />, level: "Intermediate" },
  { name: "PHP", icon: <FaPhp className="text-purple-400" />, level: "Intermediate" },
  { name: "Laravel", icon: <SiLaravel className="text-red-500" />, level: "Intermediate" },
  { name: "Figma", icon: <FaFigma className="text-pink-500" />, level: "Intermediate" },
  { name: "Database Design", icon: <FaDatabase className="text-green-400" />, level: "Intermediate" },
];

// Variants animasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function SkillSection() {
  return (
    <section className="py-20 bg-[#19222D] text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Judul Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-14 tracking-wide"
        >
          My Skills
        </motion.h2>

        {/* Grid Skill */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#1F2A38] p-6 rounded-xl shadow-lg flex flex-col items-center
                         hover:shadow-cyan-500/50 transition-shadow cursor-pointer
                         border border-transparent hover:border-cyan-500/30
                         hover:bg-gradient-to-b hover:from-[#1F2A38] hover:to-[#263445]"
              variants={cardVariants}
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-400">{skill.level}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
