"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

    const projects = [
        {
            title: "BM Maintenance",
            type: "Fullstack",
            description: "Aplikasi web untuk manajemen pemeliharaan fasilitas dengan multi-level approval, Work Order, Material Request, dan tracking progres.",
            tools: ["Laravel 11", "Laravel Spatie", "AJAX DataTables", "DropzoneJS", "Javascript", "Tailwind CSS", "MySQL"],
            image: "/public/porto7.png",
            link: "https://github.com/RafaelBani3/bm-maintenance.git"
        },
        {
            title: "Purchase Order",
            type: "Backend & Frontend",
            description: "Aplikasi Pengadaan Barang berbasis Website",
            tools: ["Laravel 11", "Bootstrap", "MySQL", "Javascript", "Ajax DataTables", "HTML" , "CSS"],
            image: "/porto5.png",
            link: "https://github.com/RafaelBani3/purchase-order.git"
        },
        {
            title: "Tenun Timor",
            type: "Frontend & Back",
            description: "Aplikasi manajemen dan penjualan produk berbasis website",
            tools: ["Next JS", "React JS", "Tailwind CSS", "MySQL", "Javascript", "Ajax DataTables"],
            image: "/porto2.png",
            link: "#project",
        },
        {
            title: "Oddessey Travel",
            type: "Web Design",
            description: "Website Travel (Update Upcoming)",
            tools: ["HTML", "CSS", "Javascript"],
            image: "/Odysseytravel.png",
            link: "https://rafaelbani3.github.io/odysseytravel/Odyssey%20Travel/html/home.html",
        },
        {
            title: "GroceryFam",
            type: "App UI/UX Design & Prototype",
            description: "UI/UX Design Aplikasi Grocery Store",
            tools: ["Figma"],
            image: "/porto3.png",
            link: "https://www.figma.com/proto/T6HCDYPkGFuKxl3GJxtACx/Hair-Salon-Web-Design-(Community)?type=design&node-id=129-75&t=reyr59x513AFD7Rz-0&scaling=scale-down&page-id=119%3A52",
        },
        {
            title: "Walletku",
            type: "App UI/UX Design & Prototype",
            description: "UI/UX Design Aplikasi E-Wallet",
            tools: ["Figma"],
            image: "/porto5.png",
            link: "https://www.figma.com/proto/w2KplBrD5TqafwPWlIzqo8/Untitled?type=design&node-id=6-1879&t=R53ehSfw49UOqsiu-0&scaling=contain&page-id=0:1&starting-point-node-id=6:1879",
        }
    ];
    const ProjectSection = () => {
        return (
            <section className="text-white py-16" id="projects">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>

                    <div className="flex flex-col gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row"
                                whileHover={{ scale: 1.01 }}
                            >
                                {/* Gambar */}
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full md:w-1/3 h-56 object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Konten */}
                                <div className="p-5 flex flex-col justify-center md:w-2/3">
                                    <span className="text-sm text-blue-400 font-medium">{project.type}</span>
                                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                                    <p className="text-gray-400 mt-2">{project.description}</p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tools.map((tool, i) => (
                                            <span
                                            key={i}
                                            className="text-sm bg-gray-700 px-3 py-1 rounded-full"
                                            >
                                            {tool}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-5 inline-flex items-center text-blue-400 hover:underline"
                                    >
                                    View Project <ExternalLink size={16} className="ml-1" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

export default ProjectSection;


// "use client";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Oddessey Travel",
//     category: "Web Dev",
//     image: "/Odysseytravel.png",
//     link: "https://rafaelbani3.github.io/odysseytravel/Odyssey%20Travel/html/home.html"
//   },
//   {
//     title: "TenunTimor",
//     category: "Web Dev",
//     image: "/porto2.PNG",
//     link: "https://rafaelbani3.github.io/TenunTimor/home.html"
//   },
//   {
//     title: "GroceryFam",
//     category: "Apps Design Prototype",
//     image: "/porto3.PNG",
//     link: "https://www.figma.com/proto/e9OCpSti0pjBbzoZ2Q8VeM/Metode-Riset?type=design&node-id=31-16101&t=rIGr1AFiRFTusMLN-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=336%3A6139"
//   },
//   {
//     title: "Laurencia's",
//     category: "Web Design Collab With Brynathn",
//     image: "/porto4.PNG",
//     link: "https://www.figma.com/proto/T6HCDYPkGFuKxl3GJxtACx/Hair-Salon-Web-Design-(Community)?type=design&node-id=129-75&t=reyr59x513AFD7Rz-0&scaling=scale-down&page-id=119%3A52"
//   },
//   {
//     title: "Walletku",
//     category: "Apps Design Prototype",
//     image: "/porto5.PNG",
//     link: "https://www.figma.com/proto/w2KplBrD5TqafwPWlIzqo8/Untitled?type=design&node-id=6-1879&t=R53ehSfw49UOqsiu-0&scaling=contain&page-id=0%3A1&starting-point-node-id=6%3A1879"
//   }
// ];

// const ProjectSection = () => {
//   return (
//     <section className="bg-gray-900 py-16 text-white" id="projects">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="relative group rounded-lg overflow-hidden shadow-lg"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//             >
//               <a href={project.link} target="_blank" rel="noopener noreferrer">
//                 {/* Project Image */}
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <span className="text-sm font-semibold text-blue-400">
//                     {project.category}
//                   </span>
//                   <p className="text-xl font-bold">{project.title}</p>
//                 </div>
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;
