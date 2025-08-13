"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const overlayVariants = {
  hidden: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    },
  },
};

const barVariants = {
  hidden: { y: 0 },
  animate: (i) => ({
    y: "-100vh",
    transition: {
      delay: i * 0.1,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const LoadingOverlay = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 2200); // Delay loading duration

      return () => clearTimeout(timeout);
    }, []);

  return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 z-100 bg-[#19222D] flex"
            variants={overlayVariants}
            initial="hidden"
            exit="exit"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={barVariants}
                initial="hidden"
                animate="animate"
                className="flex-1 bg-[#00BCFF]"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
  )
}

export default LoadingOverlay
