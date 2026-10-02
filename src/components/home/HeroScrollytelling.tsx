"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const FRAME_COUNT = 240;

const framePaths = Array.from({ length: FRAME_COUNT }, (_, i) => {
  return `/hero_a/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;
});

export function HeroScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0-1) to frame index (0-239)
  const currentFrame = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    let loadedCount = 0;
    
    framePaths.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imagesRef.current[i] = img;
        loadedCount++;
        if (loadedCount === 1) {
          setIsLoaded(true);
        }
      };
    });
  }, []);

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
              // Push the image slightly to the left since the text is on the right
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

  // Clean, 4-Phase narrative telling a simple story
  // Adjusted ranges so text responds IMMEDIATELY to scroll
  // Phase 1: 0% to 10% (Fades out quickly)
  const t1 = useTransform(scrollYProgress, [0, 0.02, 0.1], [1, 1, 0], { clamp: true });
  const y1 = useTransform(scrollYProgress, [0, 0.1], [0, -40], { clamp: true });
  const display1 = useTransform(scrollYProgress, (v) => v >= 0.12 ? "none" : "block");

  // Phase 2: 15% to 40%
  const t2 = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0], { clamp: true });
  const y2 = useTransform(scrollYProgress, [0.15, 0.4], [40, -40], { clamp: true });
  const display2 = useTransform(scrollYProgress, (v) => (v < 0.13 || v >= 0.42) ? "none" : "block");

  // Phase 3: 45% to 70%
  const t3 = useTransform(scrollYProgress, [0.45, 0.5, 0.65, 0.7], [0, 1, 1, 0], { clamp: true });
  const y3 = useTransform(scrollYProgress, [0.45, 0.7], [40, -40], { clamp: true });
  const display3 = useTransform(scrollYProgress, (v) => (v < 0.43 || v >= 0.72) ? "none" : "block");

  // Phase 4: 75% to 100%
  const t4 = useTransform(scrollYProgress, [0.75, 0.8, 1], [0, 1, 1], { clamp: true });
  const y4 = useTransform(scrollYProgress, [0.75, 1], [40, 0], { clamp: true });
  const display4 = useTransform(scrollYProgress, (v) => v < 0.73 ? "none" : "block");

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        
        {/* Mobile gradient overlay (Full coverage for center text legibility) */}
        <div className="absolute inset-0 bg-black/60 md:hidden pointer-events-none" />
        
        {/* Desktop gradient overlay (Right) */}
        <div className="absolute inset-y-0 right-0 w-full md:w-3/4 lg:w-2/3 bg-gradient-to-l from-black via-black/95 to-transparent hidden md:block pointer-events-none" />
        
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* Narrative Container: Center aligned on mobile, Right aligned on desktop */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 grid place-items-center content-center md:place-items-end h-full text-center md:text-left">
          
          {/* Phase 1: The Vision */}
          <motion.div style={{ opacity: t1, y: y1, display: display1 }} className="col-start-1 row-start-1 w-full max-w-xl pointer-events-none">
            <span className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-white/50 uppercase mb-4 block">01 // The Vision</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-tight">
              A Home That <br className="hidden sm:block" />Flows Perfectly.
            </h2>
            <p className="text-base md:text-xl text-white/80 font-medium leading-relaxed">
              An elevator shouldn't disrupt your home's design—it should enhance it. We build beautiful elevators that fit seamlessly.
            </p>
          </motion.div>

          {/* Phase 2: The Solution */}
          <motion.div style={{ opacity: t2, y: y2, display: display2 }} className="col-start-1 row-start-1 w-full max-w-xl pointer-events-none">
            <span className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-white/50 uppercase mb-4 block">02 // The Engineering</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-tight">
              Zero Pits. <br className="hidden sm:block" />Zero Hassle.
            </h2>
            <p className="text-base md:text-xl text-white/80 font-medium leading-relaxed">
              Our advanced home lifts do not require deep digging or a separate machine room, saving you messy construction work.
            </p>
          </motion.div>

          {/* Phase 3: The Experience */}
          <motion.div style={{ opacity: t3, y: y3, display: display3 }} className="col-start-1 row-start-1 w-full max-w-xl pointer-events-none">
            <span className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-white/50 uppercase mb-4 block">03 // The Experience</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-tight">
              Completely <br className="hidden sm:block" />Silent.
            </h2>
            <p className="text-base md:text-xl text-white/80 font-medium leading-relaxed">
              Powered by world-class German hydraulics. Every ride is incredibly smooth, bump-free, and perfectly quiet.
            </p>
          </motion.div>

          {/* Phase 4: Final CTA */}
          <motion.div style={{ opacity: t4, y: y4, display: display4 }} className="col-start-1 row-start-1 w-full max-w-xl pointer-events-auto">
            <span className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-white/50 uppercase mb-4 block pointer-events-none">04 // The Promise</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-tight pointer-events-none">
              Engineered <br className="hidden sm:block" />For Safety.
            </h2>
            <p className="text-base md:text-xl text-white/80 font-medium mb-8 leading-relaxed pointer-events-none">
              Your family's safety is our highest priority. 100% reliable, heavy-duty elevators built to last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <Link 
                href="/products"
                className="inline-block bg-white text-black px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors text-center"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
