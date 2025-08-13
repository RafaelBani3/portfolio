"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const links = [
    {
        name: "Home",
        path: "#",
    },
    {
        name: "About Me",
        path: "#about",
    },
    {
        name: "Skill",
        path: "#skill",
    },
    {
        name: "Experience",
        path: "#experience",
    },
    {
        name: "Project",
        path: "#project",
    },
];

const Navigation = () => {
    // const pathname = usePathname();

    return (
        // <nav className="flex gap-10">
        //     {links.map((link, index) => (   
        //         <motion.div
        //             key={index}
        //             whileHover={{ scale: 1.1 }}
        //             whileTap={{ scale: 0.95 }}
        //             className="relative group"
        //         >
        //         <Link
        //             href={link.path}
        //             className={`capitalize font-medium transition-all duration-300 ${
        //             link.path === pathname ? "text-[#00BCFF]" : "text-white"
        //             }`}
        //         >
        //             {link.name}
        //             {/* Underline */}
        //             <span
        //             className={`absolute left-0 -bottom-1 h-[2px] bg-[#00BCFF] w-0 group-hover:w-full transition-all duration-300 ${
        //                 link.path === pathname && "w-full"
        //             }`}
        //             ></span>
        //         </Link>
        //         </motion.div>
        //     ))}
        // </nav>
        <nav className="flex gap-10">
            {links.map((link, index) => (
                <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                >
                <a
                    href={link.path}
                    className="capitalize font-medium text-white transition-all duration-300"
                >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-[#00BCFF] transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
                </motion.div>
            ))}
        </nav>
    )
}

export default Navigation
