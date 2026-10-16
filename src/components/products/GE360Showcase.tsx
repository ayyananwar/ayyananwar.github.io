"use client";

import Image from "next/image";
import { useState } from "react";
import { BrochureDownloadModal } from "@/components/products/BrochureDownloadModal";

export function GE360Showcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const safetyFeatures = [
    {
      num: "01",
      title: "Inverter Auto-Rescue",
      description: "During a power failure, the lift switches to standard household inverter power, gently descending to the nearest landing and unlocking doors automatically."
    },
    {
      num: "02",
      title: "Underside Obstacle Sensors",
      description: "Active perimeter optical sensors continuously scan beneath the cabin, halting motion immediately if an obstruction or pet is detected."
    },
    {
      num: "03",
      title: "Mechanical Rail Brake",
      description: "Heavy-duty hardened steel safety wedges clamp directly onto guide rails for immediate mechanical arrest in any emergency condition."
    },
    {
      num: "04",
      title: "Dual Door Interlocks",
      description: "Hardwired electromechanical circuit locks prevent any motor activation unless all landing and car doors are fully closed."
    }
  ];

  return (
    <section id="ge-360" className="relative z-20 bg-black text-white py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 lg:px-24 border-t border-white/10">
      <BrochureDownloadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pdfUrl="/Globus_GE360_Magazine.pdf"
        pdfTitle="GE 360 Hydroelectric Series (Panoramic Home Lift)"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-8 sm:pb-12 mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-white/50 uppercase block mb-3">
              Residential Flagship
            </span>
            <h2 className="text-4xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-none">
              GE 360
            </h2>
            <p className="text-sm sm:text-base text-white/60 tracking-wider uppercase font-semibold mt-3 font-mono">
              Hydroelectric Panoramic Home Lift
            </p>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-white/80 font-medium leading-relaxed mb-6">
              Full 360° glass sightlines engineered for open residential atriums without masonry shaft walls.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors"
            >
              Download Brochure (PDF)
            </button>
          </div>
        </div>

        {/* Feature Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono text-white/40 block mb-1">Architecture</span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-white">Panoramic Glass Enclosure</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-medium">
                Allows natural sunlight to travel through multiple stories, turning the elevator into an architectural centerpiece.
              </p>
            </div>

            <div>
              <span className="text-xs font-mono text-white/40 block mb-1">Engineering</span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-white">Zero-Pit Installation</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-medium">
                Installs directly into existing stairwells or open floor voids without deep foundation excavation or rooftop machine rooms.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white block">360°</span>
                <span className="text-[10px] font-mono uppercase text-white/50 mt-1 block">Sightlines</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white block">0 mm</span>
                <span className="text-[10px] font-mono uppercase text-white/50 mt-1 block">Pit Needed</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white block">215V</span>
                <span className="text-[10px] font-mono uppercase text-white/50 mt-1 block">Home Power</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[360px] sm:h-[460px] md:h-[540px] w-full overflow-hidden bg-black group">
            <Image 
              src="/luxury_elevator.jpg" 
              alt="Globus GE 360 Panoramic Glass Elevator" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-white/20 pt-3 text-white">
              <div>
                <p className="text-sm sm:text-base font-bold">Panoramic Circular Glass Tower</p>
                <span className="text-[10px] font-mono text-white/60">GE 360 &bull; Residential Villa Installation</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Safety Systems */}
        <div className="border-t border-white/10 pt-12 sm:pt-16">
          <div className="mb-8 sm:mb-12">
            <span className="text-xs font-mono text-white/40 uppercase block mb-1">
              Safety Redundancy
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Built-In Safety Systems
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {safetyFeatures.map((feat) => (
              <div key={feat.num} className="border-t border-white/20 pt-4">
                <span className="text-xs font-mono font-bold text-white/40 block mb-2">{feat.num}</span>
                <h4 className="text-base font-bold text-white mb-2">{feat.title}</h4>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Spec Download Banner */}
        <div className="mt-14 sm:mt-18 border-t border-white/10 pt-8 sm:pt-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              GE 360 Technical Brochure
            </h4>
            <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-xl">
              Includes dimension drawings, electrical requirements, and glass finish selections.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-6 py-3.5 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors shrink-0 text-center"
          >
            Download Brochure (PDF)
          </button>
        </div>

      </div>
    </section>
  );
}
