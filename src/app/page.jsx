import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import TextType from "@/components/TextType/TextType";
import CurvedLoop from "@/components/CurvedLoop/CurvedLoop";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import AboutMeSection from "@/components/AboutMeSection";
import SkillSection from "@/components/SkillSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";


export default function Home() {
  return (
      <main className="bg-[#19222D] text-white">
        {/* Section HOME */}
        <section className="h-full flex items-center justify-center px-4 xl:px-0">
          <div className="text-center space-y-6 max-w-3xl pt-30 xl:pt-40">
            <span className="h2 block text-[#7DD3FC]">
              <TextType 
                text={["FULLSTACK DEVELOPER", "UI/UX DESIGNER", "WEB DEVELOPER"]}
                typingSpeed={100}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </span>
            
            <h1 className="h1">
              Hello, I'm <br />
              <span className="text-[65px] xl:pt-[74px] text-[#00BCFF]">Rafael Gerhard Bani</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              I design and build modern, fast, and user-friendly websites. With a passion for clean code and seamless user experiences, I'm ready to bring your ideas to life from frontend finesse to backend logic.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Button className="bg-[#00BCFF] hover:bg-[#0892b7] transition">
                Let’s Work Together
              </Button>

              <Button variant="outline" className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-[#19222D] transition">
                <FiDownload />
                Download CV
              </Button>
            </div>
          </div>
        </section>

        {/* Section Curved Loop */}
        <section className="py-0 pb-25">
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
        </section>

        {/* SECTION: ABOUT ME */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 xl:px-0 ">
            <AboutMeSection />
        </section>

        {/* Section SKill */}
        <section id="skill" className="min-h-screen flex items-center justify-center px-4 xl:px-0">
            <SkillSection />
        </section>

        {/* EXPERIENCE SKill */}
        <section id="experience" className="min-h-screen flex items-center justify-center px-4 xl:px-0">
            <ExperienceSection />
        </section>

        {/* Project SKill */}
        <section id="project" className="min-h-screen flex items-center justify-center px-4 xl:px-0">
            <ProjectSection />
        </section>

      </main>
 
  );
}


