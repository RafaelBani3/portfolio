// DESIGN SIMPLE

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
    {
        company: "KPN Corporation",
        role: "Fullstack Developer – ERP Cement, Property & Trading",
        date: "Febuary 2025 – August 2025",
        location: "South Jakarta",
        summary: "Web-based building management system using Laravel & MySQL.",
        details: [
        "Developed responsive frontend/backend & relational DB design.",
        "Built dynamic dashboards and real-time data viz.",
        "Maintained legacy ERP code for performance & scalability."
        ],
        stack: ["Laravel", "MySQL", "JavaScript", "PHP", "TailwindCSS", "HTML", "CSS"]
    },
    {
        company: "Pinang Coal Indonesia",
        role: "IT Support Internship",
        date: "June 2024 – September 2024",
        location: "South Jakarta",
        summary:
        "IT infrastructure & procurement system using Laravel & Tailwind.",
        details: [
        "Learned corporate IT infrastructure.",
        "Built procurement system using PHP, Laravel 11, Tailwind, MySQL and Javascript."
        ],
        stack: ["Laravel", "MySQL", "TailwindCSS", "PHP", "Networking", "Javascript", "HTML", "CSS"]
    }
];

export default function ExperienceSection() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        // <section className="relative py-20 w-full text-white border">
        //     <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        //     <div className="mx-auto w-full max-w-5xl flex flex-col gap-10 border">
        //         {experiences.map((exp, idx) => {
        //             const isOpen = openIndex === idx;
        //             return (
        //                 <motion.div
        //                     key={idx}
        //                     className=" rounded-lg p-6 shadow-lg"
        //                     initial={{ opacity: 0, y: 20 }}
        //                     whileInView={{ opacity: 1, y: 0 }}
        //                     viewport={{ once: true }}
        //                     transition={{ duration: 0.5, delay: idx * 0.1 }}
        //                 >
        //                     {/* Header */}
        //                     <div className="flex justify-between items-start mb-1">
        //                         <h3 className="text-lg font-semibold">{exp.company}</h3>
        //                         <span className="text-sm text-gray-400">{exp.date}</span>
        //                     </div>

        //                     <div className="flex justify-between items-start mb-2">
        //                         <p className="text-sm text-cyan-400 font-medium">{exp.role}</p>
        //                         <span className="text-sm text-gray-400">{exp.location}</span>
        //                     </div>

        //                     {/* Summary */}
        //                     <p className="text-gray-300 mb-2">{exp.summary}</p>

        //                     {/* Read More */}
        //                     <button
        //                         onClick={() => setOpenIndex(isOpen ? null : idx)}
        //                         className="text-cyan-400 hover:underline text-sm font-medium mb-3"
        //                     >
        //                         {isOpen ? "Show Less" : "Read More"}
        //                     </button>

        //                     {/* Details */}
        //                     <AnimatePresence>
        //                         {isOpen && (
        //                         <motion.ul
        //                             initial={{ opacity: 0, height: 0 }}
        //                             animate={{ opacity: 1, height: "auto" }}
        //                             exit={{ opacity: 0, height: 0 }}
        //                             transition={{ duration: 0.3 }}
        //                             className="text-gray-300 list-disc list-inside text-sm mb-3"
        //                         >
        //                             {exp.details.map((d, i) => (
        //                             <li key={i}>{d}</li>
        //                             ))}
        //                         </motion.ul>
        //                         )}
        //                     </AnimatePresence>

        //                     {/* Stack */}
        //                     <div className="flex flex-wrap gap-2 mt-2">
        //                         {exp.stack.map((tech, i) => (
        //                         <span
        //                             key={i}
        //                             className="bg-gray-700 text-xs px-3 py-1 rounded-md text-gray-200"
        //                         >
        //                             {tech}
        //                         </span>
        //                         ))}
        //                     </div>
        //                 </motion.div>
        //             );
        //         })}
        //     </div>
        // </section>

        <section className="relative py-20 w-full text-white">
            {/* Title animation */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-center mb-2 tracking-wide"
                >
                Experience
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-12"
                >
                A journey through my professional career, showcasing roles, skills, and
                impactful contributions.
            </motion.p>


            <div className="mx-auto w-full max-w-5xl flex flex-col gap-10">
                {experiences.map((exp, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <motion.div
                        key={idx}
                        className="rounded-lg p-6 shadow-lg border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0,0,0,0.3)" }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            {/* Header */}
                            <div className="flex justify-between items-start mb-1">
                                <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg font-semibold text-cyan-400"
                                >
                                {exp.company}
                                </motion.h3>
                                <span className="text-sm text-gray-400">{exp.date}</span>
                            </div>

                            <div className="flex justify-between items-start mb-2">
                                <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-sm text-cyan-300 font-medium italic"
                                >
                                {exp.role}
                                </motion.p>
                                <span className="text-sm text-gray-400">{exp.location}</span>
                            </div>

                            {/* Summary */}
                            <p className="text-gray-300 mb-2">{exp.summary}</p>

                            {/* Read More button */}
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : idx)}
                                className="group text-cyan-400 relative text-sm font-medium mb-3 overflow-hidden"
                            >
                                {isOpen ? "Show Less" : "Read More"}
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </button>

                            {/* Details */}
                            <AnimatePresence>
                                {isOpen && (
                                <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-gray-300 list-disc list-inside text-sm mb-3 space-y-1"
                                >
                                    {exp.details.map((d, i) => (
                                    <li key={i}>{d}</li>
                                    ))}
                                </motion.ul>
                                )}
                            </AnimatePresence>

                            {/* Stack */}
                            <motion.div
                                className="flex flex-wrap gap-2 mt-2"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                visible: {
                                    transition: { staggerChildren: 0.05 }
                                }
                                }}
                            >
                                {exp.stack.map((tech, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 }
                                    }}
                                    className="bg-gray-700 text-xs px-3 py-1 rounded-md text-gray-200 hover:bg-cyan-600 hover:text-white transition-colors"
                                >
                                    {tech}
                                </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}


// ==========================


// DESIGN TIMELINE

// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaBuilding, FaLaptopCode } from "react-icons/fa";

//     const experiences = [
//         {
//             company: "PT. Karunia Prima Nastari (KPN Corporation)",
//             date: "24 February 2025 – Now",
//             position: "Fullstack Developer – ERP Cement, Property & Trading",
//             icon: <FaLaptopCode className="text-cyan-400 text-3xl" />,
//             details: [
//             "Developed a web-based building management system using Laravel and MySQL.",
//             "Improved reporting features using dynamic dashboards and real-time data visualization.",
//             "Maintained and optimized existing ERP codebase for performance and security."
//             ],
//             stack: ["Laravel", "MySQL", "JavaScript", "PHP", "TailwindCSS"]
//         },
//         {
//             company: "PT. Pinang Coal Indonesia",
//             date: "June 2024 – September 2024",
//             position: "IT Support Internship",
//             icon: <FaBuilding className="text-pink-400 text-3xl" />,
//             details: [
//             "Learned IT infrastructure including networks, servers, hardware, and software.",
//             "Developed an IT procurement management system using PHP, Laravel 11, Tailwind CSS, and MySQL."
//             ],
//             stack: ["Laravel", "MySQL", "JavaScript", "PHP", "TailwindCSS"]
//         }
//     ];

//     const ExperienceSection = () => {
//         const [expandedIndex, setExpandedIndex] = useState(null);

//         return (     
//             <div className="relative w-full max-w-5xl mx-auto py-16">
//                 {/* Header + Sub-header */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="text-center mb-12"
//                 >
//                     <h2 className="text-4xl font-bold text-cyan-400">Experience</h2>
//                     <p className="mt-2 text-lg text-gray-300">
//                         A journey of my professional work and key milestones
//                     </p>
//                 </motion.div>

//                 {/* Timeline line */}
//                 <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-400 to-pink-500 transform -translate-x-1/2" />

//                 <div className="space-y-16">
//                     {experiences.map((exp, index) => {
//                         const isExpanded = expandedIndex === index;

//                         return (
//                             <div
//                                 key={index}
//                                 className={`relative flex items-center ${
//                                     index % 2 === 0 ? "flex-row" : "flex-row-reverse"
//                                 }`}
//                             >
//                                 {/* Icon */}
//                                 <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-[#19222D] rounded-full w-14 h-14 shadow-lg border border-cyan-400 z-10">
//                                     {exp.icon}
//                                 </div>

//                                 {/* Card */}
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 50 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.5 }}
//                                     className="w-[45%] p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
//                                 >
//                                     {/* Company */}
//                                     <h3 className="text-xl font-bold text-white">{exp.company}</h3>
//                                     <p className="text-sm text-gray-300">{exp.date}</p>
//                                     <p className="mt-2 text-cyan-300 font-semibold">{exp.position}</p>

//                                     {/* Details */}
//                                     <AnimatePresence>
//                                         {isExpanded && (
//                                             <motion.ul
//                                                 initial={{ opacity: 0, height: 0 }}
//                                                 animate={{ opacity: 1, height: "auto" }}
//                                                 exit={{ opacity: 0, height: 0 }}
//                                                 transition={{ duration: 0.4 }}
//                                                 className="mt-3 list-disc list-inside text-gray-200 space-y-1"
//                                             >
//                                                 {exp.details.map((d, i) => (
//                                                     <li key={i}>{d}</li>
//                                                 ))}
//                                             </motion.ul>
//                                         )}
//                                     </AnimatePresence>

//                                     {/* Read More Button */}
//                                     <button
//                                         onClick={() => setExpandedIndex(isExpanded ? null : index)}
//                                         className="mt-3 text-sm text-cyan-400 hover:underline focus:outline-none"
//                                     >
//                                         {isExpanded ? "Show Less" : "Read More"}
//                                     </button>

//                                     {/* Tech Stack */}
//                                     {exp.stack && exp.stack.length > 0 && (
//                                         <motion.div
//                                             className="flex flex-wrap gap-2 mt-4"
//                                             initial="hidden"
//                                             animate="visible"
//                                             variants={{
//                                                 hidden: {},
//                                                 visible: {
//                                                     transition: { staggerChildren: 0.1 },
//                                                 },
//                                             }}
//                                         >
//                                             {exp.stack.map((tech, i) => (
//                                                 <motion.span
//                                                     key={i}
//                                                     className="bg-gray-700/60 border border-white/10 text-xs px-3 py-1 rounded-full text-gray-200 shadow-md hover:bg-cyan-500/20 transition-colors duration-300"
//                                                     variants={{
//                                                         hidden: { opacity: 0, scale: 0.8, y: 5 },
//                                                         visible: { opacity: 1, scale: 1, y: 0 },
//                                                     }}
//                                                     transition={{ duration: 0.3 }}
//                                                 >
//                                                     {tech}
//                                                 </motion.span>
//                                             ))}
//                                         </motion.div>
//                                     )}
//                                 </motion.div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>

//         );
//     };

// export default ExperienceSection;