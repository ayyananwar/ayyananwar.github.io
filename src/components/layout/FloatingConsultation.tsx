"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, CalendarCheck } from "lucide-react";

export function FloatingConsultation() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Show the notification after 12 seconds
    const timer = setTimeout(() => {
      if (!hasDismissed) {
        setIsVisible(true);
      }
    }, 12000);

    return () => clearTimeout(timer);
  }, [hasDismissed]);

  const handleClose = () => {
    setIsVisible(false);
    setHasDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-black border border-white/20 shadow-2xl flex items-center p-3 pr-12"
        >
          <button 
            onClick={handleClose}
            className="absolute top-1/2 -translate-y-1/2 right-4 text-white/40 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={14} />
          </button>
          
          <div className="bg-white text-black p-2 flex-shrink-0 mr-4">
            <CalendarCheck size={16} />
          </div>
          
          <Link 
            href="/contact"
            onClick={() => setIsVisible(false)}
            className="text-white text-xs font-semibold tracking-wide hover:text-white/70 transition-colors flex items-center whitespace-nowrap"
          >
            Book a free consultation <span className="ml-2">→</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
