// import { Button } from "@/components/ui/button";
// import { FiDownload } from "react-icons/fi";
// import TextType from "@/components/TextType/TextType";
// import CurvedLoop from "@/components/CurvedLoop/CurvedLoop";
// import ProfileCard from "@/components/ProfileCard/ProfileCard";
// import AboutMeSection from "@/components/AboutMeSection";
// import SkillSection from "@/components/SkillSection";
// import ExperienceSection from "@/components/ExperienceSection";
// import ProjectSection from "@/components/ProjectSection";
// import Footer from "@/components/Footer";
// import HireMe from "@/components/HireMe";
// import HomeSection from "@/components/HomeSection";
// import LoadingOverlay from "@/components/LoadingOverlay";
// import App from "@/components/App"

// export default function Home() {
  
//     return (
//         <main className="bg-[#19222D] text-white">
//             {/* Section HOME */}
//             <section id="home" className="min-h-screen flex items-center justify-center px-4 xl:px-0 bp">
//                 {/* <HomeSection /> */}
//                 <App/>
//             </section>

//             {/* Section Curved Loop */}
//             <section className="py-0 pb-25">
//                 <div className="flex justify-center items-center">
//                     <CurvedLoop
//                       marqueeText="Fullstack Developer ✦ UI/UX ✦ Web Developer ✦ "
//                       speed={2}
//                       curveAmount={200}
//                       direction="right"
//                       interactive={true}
//                       className="custom-text-style"
//                     />
//                 </div>
//             </section>

//             {/* SECTION: ABOUT ME */}
//             <section id="about" className="min-h-screen flex items-center justify-center px-4 xl:px-0 ">
//                 <AboutMeSection />
//             </section>

//             {/* Section SKill */}
//             <section id="skill" className="min-h-screen flex items-center justify-center px-4 xl:px-0">
//                 <SkillSection />
//             </section>

//             {/* EXPERIENCE SKill */}
//             <section id="experince" className="min-h-screen flex items-center justify-center px-4 xl:px-0">
//                 <ExperienceSection />
//             </section>  

//             {/* Project SKill */}
//             <section id="project" className="min-h-screen flex items-center justify-center px-4 xl:px-0">
//                 <ProjectSection />
//             </section>

//             {/* Hire */}
//             <section id="hire" className="flex h-full items-center justify-center xl:px-0">
//                 <HireMe/>
//             </section>

//             {/* Footer */}
//             <section id="project" className="flex items-center justify-center xl:px-0">
//                 <Footer />
//             </section>
//         </main>
//     );
// }



"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import CurvedLoop from "@/components/CurvedLoop/CurvedLoop";
import AboutMeSection from "@/components/AboutMeSection";
import SkillSection from "@/components/SkillSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";
import HireMe from "@/components/HireMe";
import App from "@/components/App";

export default function Home() {
  // Smooth scroll behaviour
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Animasi muncul setiap section
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="relative bg-[#19222D] text-white overflow-hidden">
      {/* Background gradient animasi */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#19222D] via-[#1F2E3F] to-[#0F1620]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[180px] animate-pulse delay-500" />
      </div>

      {/* Section HOME */}
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 xl:px-0"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <App />
      </motion.section>

      {/* Section Curved Loop */}
      <motion.section
        className="py-0 pb-25"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex justify-center items-center">
          <CurvedLoop
            marqueeText="Fullstack Developer ✦ UI/UX ✦ Web Developer ✦ "
            speed={2}
            curveAmount={200}
            direction="right"
            interactive={true}
            className="custom-text-style"
          />
        </div>
      </motion.section>

      {/* About Me */}
      <motion.section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 xl:px-0"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AboutMeSection />
      </motion.section>

      {/* Skill */}
      <motion.section
        id="skill"
        className="min-h-screen flex items-center justify-center px-4 xl:px-0"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SkillSection />
      </motion.section>

      {/* Experience */}
      <motion.section
        id="experience"
        className="min-h-screen flex items-center justify-center px-4 xl:px-0"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ExperienceSection />
      </motion.section>

      {/* Project */}
      <motion.section
        id="project"
        className="min-h-screen flex items-center justify-center px-4 xl:px-0"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ProjectSection />
      </motion.section>

      {/* Hire Me */}
      <motion.section
        id="hire"
        className="flex h-full items-center justify-center xl:px-0"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <HireMe />
      </motion.section>

      {/* Footer */}
      <motion.section
        className="flex items-center justify-center xl:px-0"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Footer />
      </motion.section>
    </main>
  );
}


