"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import TextType from "@/components/TextType/TextType";

const HomeSection = () => {
    const [showText, setShowText] = useState(true);

    // Hide/show saat scroll
    useEffect(() => {
      const handleScroll = () => {
        setShowText(window.scrollY <= 100);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <section className="flex justify-center items-center min-h-screen px-4 bg-[#19222D]">
          <AnimatePresence>
            {showText && (
              <motion.div
                key="home-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30, filter: "blur(5px)" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-center space-y-6 max-w-3xl pt-20 xl:pt-20"
              >
                <span className="h2 block text-[#7DD3FC]">
                  <TextType
                    text={[
                      "FULLSTACK DEVELOPER",
                      "UI/UX DESIGNER",
                      "WEB DEVELOPER",
                    ]}
                    typingSpeed={100}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </span>

                <h1 className="h1">
                  Hello, I'm <br />
                  <span className="text-[65px] xl:pt-[74px] text-[#00BCFF]">
                    Rafael Gerhard Bani
                  </span>
                </h1>

                <p className="text-lg text-gray-300 leading-relaxed">
                  I design and build modern, fast, and user-friendly websites. With
                  a passion for clean code and seamless user experiences, I'm ready
                  to bring your ideas to life from frontend finesse to backend
                  logic.
                </p>

                {/* <div className="flex justify-center gap-4 flex-wrap">
                  <Button className="bg-[#00BCFF] hover:bg-[#0892b7] transition">
                    Let’s Work Together
                  </Button>

                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-[#19222D] transition"
                  >
                    <FiDownload />
                    Download CV
                  </Button>
                </div> */}

                <div className="flex justify-center gap-4 flex-wrap">
                    {/* Button ke #about */}
                    <a href="#about">
                      <Button className="bg-[#00BCFF] hover:bg-[#0892b7] transition">
                        Let’s Work Together
                      </Button>
                    </a>

                    {/* Button download CV */}
                    <a
                      href="/CV - Rafael Gerhard Bani - EN.pdf" 
                      download="RafaelBani_CV.pdf"
                    >
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 text-white border-white hover:bg-white hover:text-[#19222D] transition"
                      >
                        <FiDownload />
                        Download CV
                      </Button>
                    </a>
                </div>


              </motion.div>
            )}
          </AnimatePresence>
      </section>
    );
};

export default HomeSection;
  