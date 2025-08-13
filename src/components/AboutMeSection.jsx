'use client';

import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import ProfileCard from './ProfileCard/ProfileCard';
import Link from 'next/link';
import { Button } from './ui/button';
import { FiDownload } from 'react-icons/fi';

export default function AboutSection() {
  return (

    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-16 bg-[#19222D]">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
            {/* Profile Card - Kiri */}
            <div className="relative w-full md:w-1/2 flex justify-center">
                <div className="absolute -z-10 w-80 h-80 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-400 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                <ProfileCard 
                    name="Rafael Gerhard Bani"
                    title="Fullstack Developer"
                    handle="rafaelbani"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="/profile.jpeg"
                    showUser Info={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => alert("Let's collaborate!")}
                />
            </div>

            {/* Teks - Kanan */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                <h2 className="text-4xl font-bold text-[#00BCFF]">HI!, I'm Rafael</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    a passionate Fullstack Developer who loves turning ideas into beautiful, functional, and efficient digital experiences.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    With hands-on experience in <span className="text-white">React.js</span>, <span className="text-white">Laravel</span>, <span className="text-white">Tailwind CSS</span>, and <span className="text-white">MySQL</span>, I specialize in crafting responsive websites and intuitive UI/UX interfaces that feel just right.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    I'm always exploring new tools and frameworks like <span className="text-white">Next.js</span> and <span className="text-white">Figma</span> to push my creative and technical boundaries further.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Let’s build something awesome together. 🚀
                </p>

                {/* Call to Action Buttons */}
                <div className="flex justify-center md:justify-start gap-4 mt-6">
                    <Button className="bg-[#00BCFF] hover:bg-[#0892b7] transition text-white">
                        View My Work
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-[#19222D] transition">
                        <FiDownload />
                        Download CV
                    </Button>
                </div>
            </div>
        </div>
    </section>

  );
}
