"use client";

import Image from "next/image";
import { useState } from "react";
import { BrochureDownloadModal } from "@/components/products/BrochureDownloadModal";

interface GE360ShowcaseProps {
  compact?: boolean;
}

export function GE360Showcase({ compact = false }: GE360ShowcaseProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTechnicalSpecs, setShowTechnicalSpecs] = useState(false);

  const safetySystems = [
    {
      id: "01",
      tag: "BLACKOUT PROTECTION",
      title: "Household Inverter Auto-Rescue",
      summary: "In a power failure, the lift instantly shifts to your standard home UPS or inverter. Using low-voltage control power, it opens the hydraulic valve for a gentle, gravity-assisted descent to the lowest landing and unlocks the doors automatically.",
      deepSpec: "The control board continuously monitors grid supply. Upon detecting interruption, it keeps core logic and the lowering solenoid energized using home UPS power. Regulated hydraulic fluid passes through a restricted orifice under car weight for a smooth, jolt-free descent, locking the fluid in place at the lowest floor."
    },
    {
      id: "02",
      tag: "360° PERIMETER DEFENSE",
      title: "Underside Buffer Safety Sensors",
      summary: "Engineered specifically for open-space installations without traditional shaft walls. Optical sensors continuously sweep the area directly beneath the descending cabin, halting travel instantly if a pet, child, or foreign object is detected.",
      deepSpec: "Continuous active perimeter sensors scan the entire underside perimeter. If any obstruction breaks the sensor field, the system instantly cuts power to the hydraulic lowering valve and engages safety standby mode until the obstruction is cleared and manually reset."
    },
    {
      id: "03",
      tag: "MECHANICAL BRAKE LOCK",
      title: "Guide-Rail Mechanical Wedge Arrest",
      summary: "Absolute mechanical redundancy against rope slack or failure. A physical load-drop trigger on the car frame instantly drives hardened steel wedges into the vertical rails to arrest any downward travel in a fraction of a second.",
      deepSpec: "Suspension wire ropes are anchored to a mechanical trigger mechanism. Normal tension keeps the system disengaged; any critical loss in load tension instantly forces mechanical safety jaws directly into the vertical guide rails, mechanically locking the cabin in place."
    },
    {
      id: "04",
      tag: "OPERATION INTERLOCK",
      title: "Dual Car Door Safety Interlock",
      summary: "Guarantees the elevator cannot move unless the cabin door is 100% closed and latched. A dual mechanical latch and electrical switch must engage before the motor is given permission to move.",
      deepSpec: "A dedicated mechanical latch and electrical safety contact switch form a hardwired safety circuit. If the door is even slightly ajar, the circuit remains open, signaling the control board that it is unsafe to energize the pump motor."
    }
  ];

  return (
    <section id="ge-360" className="relative z-20 bg-black text-white py-28 md:py-36 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <BrochureDownloadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pdfUrl="/Globus_GE360_Magazine.pdf"
        pdfTitle="GE 360 Hydroelectric Series (Panoramic Home Lift)"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-12 mb-16 md:mb-24 gap-8">
          <div>
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-amber-400 uppercase block mb-4">
              Flagship Innovation // The Residential Collection
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95]">
              GE 360
            </h2>
            <p className="text-lg md:text-xl text-white/70 tracking-[0.15em] uppercase font-semibold mt-4">
              Hydroelectric Series &bull; Premium Panoramic Home Lift
            </p>
          </div>
          <div className="max-w-xl">
            <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-8">
              <strong className="text-white font-bold">360° Visibility from all sides.</strong> Engineered for open-space installations without traditional shaft walls, bringing natural light and continuous architectural sightlines into modern villas.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block px-10 py-5 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors"
            >
              ↓ Download GE 360 Magazine (PDF)
            </button>
          </div>
        </div>

        {/* Feature Visual Grid: Original Photo with Golden Architectural Overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div className="border-l-2 border-amber-400/50 pl-6">
              <span className="text-xs font-mono tracking-widest text-amber-400/80 uppercase block mb-2">01 // SIGHTLINES</span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">A New Perspective On Living</h3>
              <p className="text-base text-white/70 leading-relaxed font-medium">
                Designed to belong. Rather than concealing vertical movement inside heavy concrete walls, the GE 360 is an open architectural centerpiece offering unobstructed panoramic visibility from every angle.
              </p>
            </div>

            <div className="border-l-2 border-amber-400/50 pl-6">
              <span className="text-xs font-mono tracking-widest text-amber-400/80 uppercase block mb-2">02 // CIVIL INTEGRATION</span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Zero-Pit &amp; Low Headroom</h3>
              <p className="text-base text-white/70 leading-relaxed font-medium">
                Fits seamlessly into existing stairwells or open-atrium voids without deep foundation excavation or separate rooftop machine rooms, preserving structural integrity.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="text-3xl md:text-4xl font-black tracking-tight text-white block">360°</span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-white/50 mt-1 block">Full Panoramic</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-black tracking-tight text-white block">LOW</span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-white/50 mt-1 block">Civil Impact</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-black tracking-tight text-amber-400 block">UPS</span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-white/50 mt-1 block">Safe Auto-Rescue</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[500px] md:h-[650px] w-full border border-white/10 overflow-hidden group bg-neutral-950">
            <Image 
              src="/luxury_elevator.jpg" 
              alt="Globus GE 360 Panoramic Glass Elevator" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              priority
            />
            {/* Golden Amber Architectural Lighting Grade Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/35 via-amber-500/15 to-transparent mix-blend-color pointer-events-none" />
            <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-white/20 pt-4 pointer-events-none">
              <div>
                <span className="text-xs font-mono tracking-widest text-amber-300 uppercase block">THE PANORAMIC ENCLOSURE</span>
                <h4 className="text-2xl font-bold tracking-tight text-white">Light. Openness. Presence.</h4>
              </div>
              <span className="text-xs font-mono tracking-widest text-white/60">GE 360 // RESIDENTIAL EDITION</span>
            </div>
          </div>
        </div>

        {/* 4 Technical Safety Systems: Visual Story Cards */}
        <div className="border-t border-white/10 pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-amber-400 uppercase block mb-3">
                Absolute Protection // Engineering Redundancy
              </span>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter">
                Four Fail-Safe Engineering Systems.
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button
                onClick={() => setShowTechnicalSpecs(!showTechnicalSpecs)}
                className="text-xs font-mono tracking-widest text-amber-300 border border-amber-400/40 px-5 py-3 hover:bg-amber-400/10 transition-colors uppercase"
              >
                {showTechnicalSpecs ? "← Hide Detailed Specifications" : "View Full Engineering Specs ↓"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {safetySystems.map((sys) => (
              <div key={sys.id} className="border-t border-white/20 pt-8 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold tracking-widest text-white/40 uppercase">
                    {sys.id} // {sys.tag}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-500/20 text-amber-300 uppercase">
                    FAIL-SAFE
                  </span>
                </div>
                <h4 className="text-2xl font-bold tracking-tight mb-3 text-white">
                  {sys.title}
                </h4>
                <p className="text-base text-white/70 leading-relaxed font-medium">
                  {sys.summary}
                </p>

                {showTechnicalSpecs && (
                  <div className="mt-4 pt-4 border-t border-white/10 text-sm text-white/50 font-mono leading-relaxed bg-white/5 p-4">
                    <span className="text-xs font-bold text-amber-300 block mb-1">TECHNICAL SPECIFICATION:</span>
                    {sys.deepSpec}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Spec Download Banner */}
        <div className="mt-20 border border-white/10 p-10 md:p-14 bg-neutral-950 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase block mb-2">ARCHITECTURAL SPECIFICATION</span>
            <h4 className="text-2xl md:text-3xl font-bold tracking-tight">Globus GE 360 Full Edition Magazine</h4>
            <p className="text-base text-white/60 font-medium mt-1">
              Includes hoistway plans, pitless floor engineering details, glass finishes, and power consumption ratings.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-5 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors shrink-0"
          >
            Download Magazine (PDF)
          </button>
        </div>

      </div>
    </section>
  );
}
