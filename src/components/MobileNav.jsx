"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";

const MotionLink = motion(Link);


const links = [
    {
        name: "Home",
        path: "#home",
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
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        // <Sheet>
        //     <SheetTrigger className="flex justify-center items-center">
        //         <CiMenuFries className="text-[32px] text-white"></CiMenuFries>
        //     </SheetTrigger>
        //     <SheetContent className="flex flex-col">
        //         {/* Logo */}
        //         <div className="mt-32 mb-48 text-center text-2xl">
        //             <Link href="#" className="text-white">
        //                 <h1 className="text-4xl font-jetbrains font-semibold">Rafael
        //                     <span className="text-4xl font-jetbrains font-semibold text-[#00BCFF]">Bani</span>
        //                 </h1>
        //             </Link>
        //         </div>

        //         {/* Nav */}
        //         <nav>
        //             {links.map((link, index) => (
        //                 <motion.div
        //                 key={index}
        //                 whileHover={{ scale: 1.1 }}
        //                 whileTap={{ scale: 0.95 }}
        //                 className="relative group"
        //                 >
        //                 <a
        //                     href={link.path}
        //                     className="capitalize font-medium text-white transition-all duration-300"
        //                 >
        //                     {link.name}
        //                     <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-[#00BCFF] transition-transform duration-300 group-hover:scale-x-100"></span>
        //                 </a>
        //                 </motion.div>
        //             ))}
        //         </nav>
        //     </SheetContent>
        // </Sheet>
        // <Sheet>
        //     <SheetTrigger className="flex justify-center items-center">
        //         <CiMenuFries className="text-[32px] text-white" />
        //     </SheetTrigger>

        //     <SheetContent className="flex flex-col items-center bg-[#19222D] px-6 py-10">
        //         {/* Logo */}
        //         <div className="mb-16">
        //         <Link href="#" className="text-white">
        //             <h1 className="text-4xl font-jetbrains font-semibold">
        //             Rafael
        //             <span className="text-4xl font-jetbrains font-semibold text-[#00BCFF]">
        //                 Bani
        //             </span>
        //             </h1>
        //         </Link>
        //         </div>

        //         {/* Navigation */}
        //         <nav className="flex flex-col items-center gap-6 w-full">
        //         {links.map((link, index) => (
        //             <motion.div
        //             key={index}
        //             whileHover={{ scale: 1.05 }}
        //             whileTap={{ scale: 0.97 }}
        //             className="relative group w-full text-center"
        //             >
        //             <a
        //                 href={link.path}
        //                 className="text-lg font-medium text-white transition-all duration-300"
        //             >
        //                 {link.name}
        //                 <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-[#00BCFF] transition-all duration-300 group-hover:w-1/2 transform -translate-x-1/2 origin-left"></span>
        //                 <span className="absolute right-1/2 -bottom-1 h-[2px] w-0 bg-[#00BCFF] transition-all duration-300 group-hover:w-1/2 transform translate-x-1/2 origin-right"></span>
        //             </a>
        //             </motion.div>
        //         ))}
        //         </nav>
        //     </SheetContent>
        // </Sheet>
        <Sheet>
            <SheetTrigger className="flex justify-center items-center cursor-pointer">
                <CiMenuFries className="text-[32px] text-white" />
            </SheetTrigger>

            <SheetContent className="flex flex-col items-center bg-[#19222D] px-6 py-25">
                {/* Logo */}
                <div className="text-center">
                    <Link href="#">
                        <h1 className="text-4xl font-jetbrains font-semibold text-white tracking-wide">
                        Rafael
                        <span className="text-4xl text-[#00BCFF] font-semibold">Bani</span>
                        </h1>
                        <p className="text-sm text-gray-400 mt-1">Fullstack Web Developer</p>
                    </Link>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/10 mb-3"></div>

                {/* Navigation */}
                <nav className="flex flex-col items-center gap-5 w-full">
                    {links.map((link, index) => (
                        <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="relative group w-full text-center bg-white/5 backdrop-blur-md rounded-xl py-3 hover:bg-white/10 transition-colors duration-300"
                        >
                        <a
                            href={link.path}
                            className="block text-lg text-white tracking-wide font-light relative"
                        >
                            {link.name}
                            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-[#00BCFF] transition-all duration-300 group-hover:w-1/2 transform -translate-x-1/2 origin-left"></span>
                            <span className="absolute right-1/2 -bottom-1 h-[2px] w-0 bg-[#00BCFF] transition-all duration-300 group-hover:w-1/2 transform translate-x-1/2 origin-right"></span>
                        </a>
                        </motion.div>
                    ))} 
                </nav>
            </SheetContent>
        </Sheet>

    )
}

export default MobileNav
