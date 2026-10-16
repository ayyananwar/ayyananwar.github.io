"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/95 border-b border-white/10 py-3.5 shadow-2xl" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tighter text-white hover:text-white/80 transition-colors">
          GLOBUS
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-xs font-bold tracking-[0.15em] uppercase text-white/80">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/products" className="hover:text-white transition-colors">
            Our Elevators
          </Link>
          <Link href="/gallery" className="hover:text-white transition-colors">
            Gallery
          </Link>
          <Link 
            href="/contact" 
            className="px-4 py-2 border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
          >
            Consultation
          </Link>
        </div>

        <button 
          className="md:hidden text-white z-50 relative p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%", transition: { duration: 0.3 } }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-7 px-6"
          >
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium tracking-wide text-white hover:text-white/70 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium tracking-wide text-white hover:text-white/70 transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium tracking-wide text-white hover:text-white/70 transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/products" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium tracking-wide text-white hover:text-white/70 transition-colors"
            >
              Our Elevators
            </Link>
            <Link 
              href="/gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium tracking-wide text-white hover:text-white/70 transition-colors"
            >
              Gallery
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium tracking-wide text-white hover:text-white/70 transition-colors"
            >
              Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
