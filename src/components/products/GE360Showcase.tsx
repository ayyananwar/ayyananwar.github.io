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
    <section id="ge-360" className="relative z-20 bg-black text-white py-28 md:py-40 px-6 md:px-12 lg:px-24 border-t border-white/10">
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
            <span className="text-xs md:text-sm font-mono font-bold tracking-[0.3em] text-white/40 uppercase block mb-4">
              FLAGSHIP INNOVATION // RESIDENTIAL COLLECTION
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
              GE 360
            </h2>
            <p className="text-lg md:text-xl text-white/60 tracking-[0.15em] uppercase font-semibold mt-4">
              Hydroelectric Series &bull; Panoramic Home Lift
            </p>
          </div>
          <div className="max-w-xl">
            <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-8">
              <strong className="text-white font-bold">360° Continuous Visibility.</strong> Engineered for open-space installations without traditional shaft walls, bringing natural light and continuous architectural sightlines into modern villas.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block px-10 py-5 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors rounded-none"
            >
              Download GE 360 Magazine (PDF) &rarr;
            </button>
          </div>
        </div>

        {/* Feature Visual Grid: Pristine Natural Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="border-l border-white/20 pl-6">
              <span className="text-xs font-mono font-bold tracking-widest text-white/40 uppercase block mb-2">01 // SIGHTLINES</span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3 text-white">Unobstructed Panoramic Spatial Flow</h3>
              <p className="text-base text-white/70 leading-relaxed font-medium">
                Rather than concealing vertical movement inside heavy masonry shafts, the GE 360 acts as a structural centerpiece with 360-degree glass sightlines from all angles.
              </p>
            </div>

            <div className="border-l border-white/20 pl-6">
              <span className="text-xs font-mono font-bold tracking-widest text-white/40 uppercase block mb-2">02 // INTEGRATION</span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3 text-white">Zero-Pit &amp; Low Headroom Mechanics</h3>
              <p className="text-base text-white/70 leading-relaxed font-medium">
                Designed to fit directly into existing stairwells or open-atrium voids without deep foundation excavation or separate rooftop machine rooms.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="text-3xl md:text-4xl font-black tracking-tight text-white block">360°</span>
                <span className="text-[11px] font-mono tracking-widest uppercase text-white/40 mt-1 block">Full Sightlines</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-black tracking-tight text-white block">0.0m</span>
                <span className="text-[11px] font-mono tracking-widest uppercase text-white/40 mt-1 block">Pit Excavation</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-black tracking-tight text-white block">215V</span>
                <span className="text-[11px] font-mono tracking-widest uppercase text-white/40 mt-1 block">UPS Compatible</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[500px] md:h-[650px] w-full border border-white/10 overflow-hidden group bg-black">
            <Image 
              src="/luxury_elevator.jpg" 
              alt="Globus GE 360 Panoramic Glass Elevator" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            {/* Minimal Legibility Gradient Only */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-white/20 pt-4 pointer-events-none">
              <div>
                <span className="text-xs font-mono tracking-widest text-white/60 uppercase block">PANORAMIC ENCLOSURE</span>
                <h4 className="text-2xl font-bold tracking-tight text-white">Light. Presence. Engineering.</h4>
              </div>
              <span className="text-xs font-mono tracking-widest text-white/40 uppercase">GE 360 // RESIDENTIAL SERIES</span>
            </div>
          </div>
        </div>

        {/* 4 Technical Safety Systems: Architectural Blueprint Spec Layout */}
        <div className="border-t border-white/10 pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs md:text-sm font-mono font-bold tracking-[0.3em] text-white/40 uppercase block mb-3">
                FAIL-SAFE REDUNDANCY // TECHNICAL SYSTEMS
              </span>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
                Four Fail-Safe Engineering Systems.
              </h3>
            </div>
            <div>
              <button
                onClick={() => setShowTechnicalSpecs(!showTechnicalSpecs)}
                className="text-xs font-mono tracking-widest text-white border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-colors uppercase rounded-none"
              >
                {showTechnicalSpecs ? "Hide Detailed Specifications" : "View Full Engineering Specs ↓"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {safetySystems.map((sys) => (
              <div key={sys.id} className="border-t border-white/20 pt-8">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-5xl font-black text-white/20 leading-none">
                    {sys.id}
                  </span>
                  <span className="text-xs font-mono font-bold tracking-widest text-white/40 uppercase">
                    {sys.tag}
                  </span>
                </div>
                <h4 className="text-2xl font-black tracking-tight mb-3 text-white">
                  {sys.title}
                </h4>
                <p className="text-base text-white/70 leading-relaxed font-medium">
                  {sys.summary}
                </p>

                {showTechnicalSpecs && (
                  <div className="mt-5 pt-4 border-t border-white/10 text-sm text-white/60 font-mono leading-relaxed">
                    <span className="text-xs font-bold text-white block mb-1 uppercase tracking-wider">Engineering Blueprint Specification:</span>
                    {sys.deepSpec}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Spec Download Banner (Monochrome Minimalist) */}
        <div className="mt-24 border-t border-white/10 pt-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-white/40 uppercase block mb-2">
              TECHNICAL LITERATURE
            </span>
            <h4 className="text-2xl md:text-3xl font-black tracking-tight text-white">
              Globus GE 360 Engineering Magazine
            </h4>
            <p className="text-base text-white/60 font-medium mt-1 max-w-xl">
              Includes hoistway dimension plans, pitless floor engineering details, glass finishes, and power consumption ratings.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-5 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors shrink-0 rounded-none text-center"
          >
            Download Magazine (PDF) &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
