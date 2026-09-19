"use client";

import { useState, useEffect } from "react";
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
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          GLOBUS
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/80">
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
          <Link href="/blogs" className="hover:text-white transition-colors">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Consultation
          </Link>
        </div>

        <button 
          className="md:hidden text-white z-50 relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%", transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8"
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
              href="/blogs" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium tracking-wide text-white hover:text-white/70 transition-colors"
            >
              Blogs
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
