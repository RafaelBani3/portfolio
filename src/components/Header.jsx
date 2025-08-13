"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";

const Header = () => {
    const [hovered, setHovered] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        // Pendek   
        <header
            className={`absolute top-4 left-1/2 -translate-x-1/2 z-50
            bg-white/10 backdrop-blur-md rounded-2xl shadow-lg max-w-5xl w-[90%]`}>
            <div className="py-4 px-6 text-white flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                <h1 className="text-4xl font-jetbrains font-semibold">
                    Rafael
                    <span className="text-4xl font-jetbrains  font-semibold text-[#00BCFF]">
                    Bani  
                    </span>
                </h1>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center gap-8">
                <Navigation />
                </div>

                {/* <div className="hidden xl:flex items-center gap-8">
                    <Link href="#">
                        <motion.div
                        className="relative"
                        onHoverStart={() => setHovered(true)}
                        onHoverEnd={() => setHovered(false)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        >
                        <motion.button
                            className="px-6 py-2 rounded-lg text-white font-semibold cursor-pointer"
                            animate={{
                            backgroundColor: hovered ? "#38bdf8" : "#4f46e5",
                            color: hovered ? "#000000" : "#ffffff",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {hovered ? "Let's Talk!" : "Hire Me"}
                        </motion.button>
                        </motion.div>
                    </Link>
                </div> */}

                <div className="hidden xl:flex items-center gap-8">
                    <Link href="mailto:rafaelbani03@gmail.com">
                        <motion.div
                        className="relative"
                        onHoverStart={() => setHovered(true)}
                        onHoverEnd={() => setHovered(false)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        >
                        <motion.button
                            className="px-6 py-2 rounded-lg text-white font-semibold cursor-pointer"
                            animate={{
                            backgroundColor: hovered ? "#38bdf8" : "#4f46e5",
                            color: hovered ? "#000000" : "#ffffff",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {hovered ? "Let's Talk!" : "Hire Me"}
                        </motion.button>
                        </motion.div>
                    </Link>
                </div>


                {/* Mobile Navigation View */}
                <div className="xl:hidden">
                <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header


        // Versi Panjang
        // <header className="py-8 xl:py-8 px-6 text-white border">
        //     <div className="container mx-auto flex items-center justify-between">
        //         {/* Logo */}
        //         <Link href="/">
        //             <h1 className="text-4xl font-jetbrains font-semibold">Rafael
        //                 <span className="text-4xl font-jetbrains font-semibold text-[#00BCFF]">Bani</span>
        //             </h1>
        //         </Link> 

        //         {/* Dekstop Navigation */}
        //         <div className="hidden xl:flex items-center gap-8">
        //             <Navigation />
        //         </div>

        //         <div className="hidden xl:flex items-center gap-8">
        //             <Link href="/">
        //                 <motion.div
        //                     className="relative"
        //                     onHoverStart={() => setHovered(true)}
        //                     onHoverEnd={() => setHovered(false)}
        //                     whileHover={{ scale: 1.1 }}
        //                     whileTap={{ scale: 0.95 }}
        //                     >
        //                     <motion.button
        //                         className="px-6 py-2 rounded-lg text-white font-semibold cursor-pointer"
        //                         animate={{
        //                         backgroundColor: hovered ? "#38bdf8" : "#4f46e5", 
        //                         color: hovered ? "#000000" : "#ffffff", 
        //                         }}
        //                         transition={{ duration: 0.3 }}
        //                     >
        //                         {hovered ? "Let's Talk!" : "Hire Me"}
        //                     </motion.button>
        //                 </motion.div>
        //             </Link>
        //         </div>


        //         {/* Mobile Navigation View */}
        //         <div className="xl:hidden">
        //             <MobileNav/>
        //         </div>

        //     </div>
        // </header>
