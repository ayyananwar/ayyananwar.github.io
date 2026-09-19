"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    // Lock scrolling while loading
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Restore scrolling after animation unmounts (give it time to fade out)
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 400);
    }, 700); // Reduced to 0.7 seconds

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black pointer-events-none"
          exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
        >
          <div className="overflow-hidden pb-1">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="text-xs md:text-sm tracking-[0.5em] text-white/90 font-medium uppercase pl-[0.5em]"
            >
              Globus Elevators
            </motion.div>
          </div>
          
          {/* Minimal progress line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="h-[1px] w-16 md:w-24 bg-white/40 mt-4 origin-center"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
