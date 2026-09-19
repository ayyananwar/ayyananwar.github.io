"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 240;

export function HeroScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Create an array of 240 items to iterate over for preloading
  const framePaths = Array.from({ length: FRAME_COUNT }, (_, i) => {
    return `/hero_a/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0-1) to frame index (0-239)
  const currentFrame = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    
    framePaths.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imagesRef.current[i] = img;
        loadedCount++;
        if (loadedCount === 1) {
          setIsLoaded(true); // Trigger initial render once first image is ready
        }
      };
    });
  }, []);

  // Render Loop
  useEffect(() => {
    let animationFrameId: number;
    
    const render = () => {
      if (canvasRef.current && imagesRef.current.length > 0) {
        const frameIndex = Math.min(
          FRAME_COUNT - 1, 
          Math.max(0, Math.floor(currentFrame.get()))
        );
        
        const img = imagesRef.current[frameIndex] || imagesRef.current[0];
        if (img && img.complete) {
          const context = canvasRef.current.getContext("2d");
          if (context) {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
            
            const canvas = canvasRef.current;
            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;
            
            let drawWidth, drawHeight, offsetX, offsetY;
            
            if (imgRatio > canvasRatio) {
              drawHeight = canvas.height;
              drawWidth = img.width * (drawHeight / img.height);
              offsetX = (canvas.width - drawWidth) / 2;
              offsetY = 0;
            } else {
              drawWidth = canvas.width;
              drawHeight = img.height * (drawWidth / img.width);
              offsetX = 0;
              offsetY = (canvas.height - drawHeight) / 2;
            }
            
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
          }
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLoaded, currentFrame]);

  // Typography Narrative Fades (6 phases)
  const t1 = useTransform(scrollYProgress, [0, 0.05, 0.12, 0.16], [0, 1, 1, 0]);
  const t2 = useTransform(scrollYProgress, [0.16, 0.21, 0.28, 0.32], [0, 1, 1, 0]);
  const t3 = useTransform(scrollYProgress, [0.32, 0.37, 0.44, 0.48], [0, 1, 1, 0]);
  const t4 = useTransform(scrollYProgress, [0.48, 0.53, 0.60, 0.64], [0, 1, 1, 0]);
  const t5 = useTransform(scrollYProgress, [0.64, 0.69, 0.76, 0.80], [0, 1, 1, 0]);
  const t6 = useTransform(scrollYProgress, [0.80, 0.85, 0.95, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent to-black/60 pointer-events-none" />

        {/* Narrative Layers */}
        <div className="absolute inset-0 z-10 pointer-events-none p-6 md:p-16 lg:p-24 flex flex-col">
          
          {/* Phase 1: Residence (Bottom Left) */}
          <motion.div style={{ opacity: t1, y: useTransform(t1, [0, 1], [40, 0]) }} className="absolute bottom-12 md:bottom-24 left-6 md:left-16 lg:left-24 max-w-lg">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-4 block">01 // Home Elevators</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white drop-shadow-xl mb-4 leading-[1.1]">
              Built For <br/>Your Home.
            </h2>
            <p className="text-base md:text-lg text-white/80 font-medium">
              We design and install high-quality residential elevators. They fit perfectly into your floor plan without wasting space.
            </p>
          </motion.div>

          {/* Phase 2: Integration (Right Aligned, Middle) */}
          <motion.div style={{ opacity: t2, y: useTransform(t2, [0, 1], [40, 0]) }} className="absolute top-1/3 md:top-1/2 -translate-y-1/2 right-6 md:right-16 lg:right-24 max-w-lg text-right">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-4 block">02 // Materials</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white drop-shadow-xl mb-4 leading-[1.1]">
              Glass & <br/>Steel.
            </h2>
            <p className="text-base md:text-lg text-white/80 font-medium ml-auto">
              We use heavy-duty materials. Our elevators look beautiful and are built strong enough to last a lifetime.
            </p>
          </motion.div>

          {/* Phase 3: Approach (Left Aligned, Middle) */}
          <motion.div style={{ opacity: t3, y: useTransform(t3, [0, 1], [40, 0]) }} className="absolute top-1/2 md:top-2/3 -translate-y-1/2 left-6 md:left-16 lg:left-24 max-w-lg">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-4 block">03 // Experience</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white drop-shadow-xl mb-4 leading-[1.1]">
              Silent & Smooth.
            </h2>
            <p className="text-base md:text-lg text-white/80 font-medium">
              Advanced German hydraulics ensure a completely silent and bump-free ride every single time you use it.
            </p>
          </motion.div>

          {/* Phase 4: Arrival (Center) */}
          <motion.div style={{ opacity: t4, y: useTransform(t4, [0, 1], [40, 0]) }} className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 max-w-2xl mx-auto">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-4 block">04 // Engineering</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white drop-shadow-xl mb-4 leading-[1.1]">
              Zero Deep Pits.
            </h2>
            <p className="text-base md:text-lg text-white/80 font-medium">
              Our home lifts do not require a deep pit or a separate machine room, saving you time and construction costs.
            </p>
          </motion.div>

          {/* Phase 5: Cabin (Bottom Right) */}
          <motion.div style={{ opacity: t5, y: useTransform(t5, [0, 1], [40, 0]) }} className="absolute bottom-12 md:bottom-24 right-6 md:right-16 lg:right-24 max-w-lg text-right">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-4 block">05 // Customization</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white drop-shadow-xl mb-4 leading-[1.1]">
              Your Design.
            </h2>
            <p className="text-base md:text-lg text-white/80 font-medium ml-auto">
              Choose from mirror-finished cabins, custom LED lighting, and anti-skid floors to perfectly match your home.
            </p>
          </motion.div>

          {/* Phase 6: Experience (Center Huge) */}
          <motion.div style={{ opacity: t6, y: useTransform(t6, [0, 1], [40, 0]) }} className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 max-w-3xl mx-auto">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-6 block">06 // Globus Elevators</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300 drop-shadow-2xl mb-6 leading-[1.1]">
              Safety First.
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-medium">
              100% reliable home elevators designed for absolute comfort and safety.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
