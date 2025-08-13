"use client";
import { useState, useEffect } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import { motion } from "framer-motion";
export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2200); // durasi sama seperti di LoadingOverlay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <LoadingOverlay />
      {!isLoading && (
        <>
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Header />
          </motion.div> */}

          <section id="home" className="min-h-screen flex items-center justify-center px-4 xl:px-0">
            <HomeSection />
          </section>
        </>
      )}
    </>
  );
}
