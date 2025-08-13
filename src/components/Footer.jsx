"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-20 border-t border-gray-700">
            <div className="w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Brand */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-xl font-bold text-cyan-400 mb-3">RafaelBani</h2>
                    <p className="text-sm text-gray-400">
                        Building modern web experiences with creativity, performance, and passion.
                    </p>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    >
                    <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a></li>
                        <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
                        <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a></li>
                        <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                    </ul>
                </motion.div>

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
                    <p className="text-sm">Email: <a href="mailto:rafaelbani03@gmail.com" className="hover:text-cyan-400">rafael@example.com</a></p>
                    <p className="text-sm">Location: Tangerang Selatan, Indonesia</p>
                    <div className="flex gap-4 mt-3">
                        <a href="https://www.linkedin.com/in/rafaelbani/" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
                        <a href="https://github.com/RafaelBani3" className="hover:text-cyan-400 transition-colors">GitHub</a>
                        <a href="https://www.instagram.com/rafaelbani3/" className="hover:text-cyan-400 transition-colors">Instagram</a>
                    </div>
                </motion.div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-8 pt-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center text-xs text-gray-500"
                >
                    © {new Date().getFullYear()} RafaelBani. All Rights Reserved.
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;
