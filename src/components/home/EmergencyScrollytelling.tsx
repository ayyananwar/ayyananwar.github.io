"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function EmergencyScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Image Opacity Fades
  const img1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const img2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.6, 0.7], [0, 1, 1, 0]);
  const img3Opacity = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);

  // Text Fades
  const t1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0]);
  const t2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
  const t3 = useTransform(scrollYProgress, [0.7, 0.8, 0.95, 1], [0, 1, 1, 0]);

  // Y-axis Movement for Text
  const y1 = useTransform(t1, [0, 1], [40, 0]);
  const y2 = useTransform(t2, [0, 1], [40, 0]);
  const y3 = useTransform(t3, [0, 1], [40, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        
        {/* Background Images */}
        <motion.div style={{ opacity: img1Opacity }} className="absolute inset-0">
          <Image src="/lifeline_1.png" alt="Accessibility" fill className="object-cover opacity-40" />
        </motion.div>
        
        <motion.div style={{ opacity: img2Opacity }} className="absolute inset-0">
          <Image src="/lifeline_2.png" alt="Emergency Power" fill className="object-cover opacity-40" />
        </motion.div>

        <motion.div style={{ opacity: img3Opacity }} className="absolute inset-0">
          <Image src="/lifeline_3.png" alt="Safety Assurance" fill className="object-cover opacity-40" />
        </motion.div>
        
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />

        {/* Narrative Layers */}
        <div className="absolute inset-0 z-10 pointer-events-none p-6 md:p-16 lg:p-24 flex flex-col justify-center items-center">
          
          {/* Phase 1: Accessibility */}
          <motion.div style={{ opacity: t1, y: y1 }} className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 max-w-3xl mx-auto">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-4 block">01 // The Vulnerability</span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white drop-shadow-xl mb-6 leading-[1.1]">
              Mobility Is <br/>Not A Luxury.
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-medium">
              For the elderly and vulnerable, stairs are a daily barrier. A reliable elevator is not just an amenity—it is the lifeline that restores independence.
            </p>
          </motion.div>

          {/* Phase 2: Emergency */}
          <motion.div style={{ opacity: t2, y: y2 }} className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 max-w-3xl mx-auto">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-4 block">02 // The Emergency</span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white drop-shadow-xl mb-6 leading-[1.1]">
              When Power <br/>Fails.
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-medium">
              A blackout is the ultimate stress test. Without proper engineering, an elevator becomes a trap. Our ARD (Automatic Rescue Device) guarantees you will never be stuck in the dark.
            </p>
          </motion.div>

          {/* Phase 3: Assurance */}
          <motion.div style={{ opacity: t3, y: y3 }} className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 max-w-3xl mx-auto">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-4 block">03 // The Assurance</span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 drop-shadow-2xl mb-6 leading-[1.1]">
              Absolute <br/>Certainty.
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-medium">
              Every Globus elevator features redundant safety brakes, infrared door sensors, and backup battery drives. Engineered for zero compromises when it matters most.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
