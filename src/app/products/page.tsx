"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BrochureDownloadModal } from "@/components/products/BrochureDownloadModal";
import { GE360Showcase } from "@/components/products/GE360Showcase";

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleDownload = (pdfUrl: string, title: string) => {
    setSelectedPdf(pdfUrl);
    setSelectedTitle(title);
    setIsModalOpen(true);
  };

  return (
    <main className="bg-black text-white pt-32 pb-24 selection:bg-white selection:text-black min-h-screen">
      
      <BrochureDownloadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pdfUrl={selectedPdf}
        pdfTitle={selectedTitle}
      />

      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-16 md:mb-24">
        <header className="border-b border-white/10 pb-12">
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-amber-400 uppercase block mb-4">
            Globus Elevators // Systems Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-6 leading-[1.05]">
            Engineering Portfolio.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl font-medium leading-relaxed">
            Custom design, manufacturing, assembly, and maintenance for residential villas, high-traffic commercial complexes, and specialized industrial facilities.
          </p>
        </header>
      </section>

      {/* Flagship Section: GE 360 Panoramic Hydroelectric Series */}
      <GE360Showcase />

      {/* Chapter 01: Home Lift Systems (Traction & Hydraulic) */}
      <section id="residential" className="py-28 md:py-36 px-6 md:px-12 border-t border-black/10 bg-white text-black">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8 mb-16 gap-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase block mb-2 font-bold">
                SERIES 01 // RESIDENTIAL MOBILITY
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">
                Home Lifts: Hydraulic &amp; Traction
              </h2>
            </div>
            <p className="text-base text-neutral-700 max-w-md font-medium">
              Space-efficient, quiet, and elegant hydraulic or traction lifts designed to fit seamlessly into any residential layout.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-black">
                Compact Zero-Pit Configurations
              </h3>
              <p className="text-base md:text-lg text-neutral-700 mb-6 leading-relaxed font-medium">
                Engineered to fit into tight interior architectural footprints starting from just 3x4 ft without requiring massive structural alterations or pit excavation.
              </p>
              
              <div className="border-t border-black/15 pt-6 grid grid-cols-2 gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-neutral-500 block mb-1">Max Travel</span>
                  <span className="text-base font-bold tracking-wide text-black">Up to 5 Floors (13m)</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-neutral-500 block mb-1">Capacity</span>
                  <span className="text-base font-bold tracking-wide text-black">Up to 4 Passengers</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-neutral-500 block mb-1">Power Grid</span>
                  <span className="text-base font-bold tracking-wide text-black">Single Phase 215V</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-neutral-500 block mb-1">Drive Types</span>
                  <span className="text-base font-bold tracking-wide text-black">Hydraulic or Traction</span>
                </div>
              </div>

              <div className="mt-8 border-t border-black/15 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">Custom Architectural Finishes</h4>
                <ul className="space-y-2 text-sm text-neutral-700 font-medium">
                  <li className="flex items-center"><span className="text-amber-600 mr-3">&rarr;</span> Mirror-etched Stainless Steel &amp; Titanium Finishes</li>
                  <li className="flex items-center"><span className="text-amber-600 mr-3">&rarr;</span> 360-Degree Panoramic Toughened Glass Walls</li>
                  <li className="flex items-center"><span className="text-amber-600 mr-3">&rarr;</span> Anti-skid Italian Granite or Hardwood Flooring</li>
                  <li className="flex items-center"><span className="text-amber-600 mr-3">&rarr;</span> Recessed Ambient Architectural Lighting</li>
                </ul>
              </div>

              <div className="mt-8 pt-4 flex flex-wrap gap-4">
                <button 
                  onClick={() => handleDownload("/Hydroelectric new.pdf", "Hydro-Electric Series Specifications")}
                  className="border border-black px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase text-black hover:bg-black hover:text-white transition-colors"
                >
                  ↓ Hydraulic Specs (PDF)
                </button>
                <button 
                  onClick={() => handleDownload("/traction lift brochure.pdf", "Residential Traction Lift Specifications")}
                  className="border border-black/30 px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase text-black hover:bg-black hover:text-white transition-colors"
                >
                  ↓ Traction Specs (PDF)
                </button>
              </div>
            </div>

            <div className="relative h-[480px] lg:h-[580px] w-full overflow-hidden bg-neutral-900 group">
              <Image 
                src="/luxury_elevator.jpg" 
                alt="Globus Home Elevator Architecture" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Golden Amber Lighting Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/35 via-amber-500/15 to-transparent mix-blend-color pointer-events-none" />
              <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 02: Commercial Elevators */}
      <section id="commercial" className="py-28 md:py-36 px-6 md:px-12 border-t border-white/10 bg-black text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase block mb-2">
                SERIES 02 // HIGH-TRAFFIC INFRASTRUCTURE
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                Commercial Lifts
              </h2>
            </div>
            <p className="text-base text-white/70 max-w-md font-medium">
              Robust, heavy-duty elevator systems engineered for high-traffic environments like offices, retail spaces, and hotels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="order-2 lg:order-1 relative h-[480px] lg:h-[620px] w-full overflow-hidden bg-neutral-900 group">
              <Image 
                src="/commercial_elevator.jpg" 
                alt="Commercial High-Speed Glass Elevator" 
                fill 
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              {/* Golden Amber Lighting Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/35 via-amber-500/15 to-transparent mix-blend-color pointer-events-none" />
              <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 border-t border-white/20 pt-4 pointer-events-none">
                <h4 className="text-2xl font-bold tracking-tight text-white mb-1">MRL Gearless Technology</h4>
                <p className="text-xs font-mono tracking-widest uppercase text-amber-300">Machine-Room-Less Architecture &bull; 80% Energy Reduction</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-[1.1]">
                High-Performance Passenger Logistics
              </h3>
              <p className="text-base md:text-lg text-white/80 mb-6 leading-relaxed font-medium">
                Engineered for maximum passenger flow in corporate headquarters, hospitals, and shopping centers. Advanced VVVF microprocessors control motor acceleration curves with surgical precision.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/15 pt-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/40 block mb-1">Capacity</span>
                  <span className="text-base font-bold tracking-wide">8 to 26 Passengers</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/40 block mb-1">Speed</span>
                  <span className="text-base font-bold tracking-wide">1.0 to 2.5 m/s</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/40 block mb-1">Dispatching</span>
                  <span className="text-base font-bold tracking-wide">Duplex/Triplex Group</span>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button 
                  onClick={() => handleDownload("/traction lift brochure.pdf", "Commercial MRL Passenger Elevators")}
                  className="inline-block border border-white/40 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-colors"
                >
                  ↓ Commercial Brochure (PDF)
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Chapter 03: Specialized Solutions */}
      <section id="industrial" className="py-28 md:py-36 px-6 md:px-12 border-t border-black/10 bg-white text-black">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8 mb-16 gap-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase block mb-2 font-bold">
                SERIES 03 // LOGISTICS &amp; SPECIALIZED
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">
                Specialized Solutions
              </h2>
            </div>
            <p className="text-base text-neutral-700 max-w-md font-medium">
              Goods elevators, car parking lifts, and dumbwaiters built for specialized industrial, commercial, and hospitality requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            <div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 text-black">Industrial Freight, Automotive &amp; Dumbwaiters</h3>
              <p className="text-base text-neutral-700 leading-relaxed font-medium mb-8">
                Engineered with heavy-gauge structural steel frames, reinforced diamond-plate floors, and heavy-duty gates capable of sustaining extreme pallet truck and vehicular loads.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-black/15 pt-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-neutral-500 block mb-1">Freight Range</span>
                  <p className="text-sm text-neutral-800 font-bold">500 kg up to 5,000 kg heavy industrial rating.</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-neutral-500 block mb-1">Car Parking</span>
                  <p className="text-sm text-neutral-800 font-bold">Automated hydraulic stackers and pit lifts.</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 border border-black/10 p-8 md:p-10">
              <div className="relative h-[260px] w-full mb-6 overflow-hidden bg-neutral-900 group">
                <Image 
                  src="/freight_elevator.jpg" 
                  alt="Industrial Automotive Freight Lift" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Golden Amber Lighting Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/35 via-amber-500/15 to-transparent mix-blend-color pointer-events-none" />
                <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <h4 className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase mb-4">Fail-Safe Industrial Safeguards</h4>
              <ul className="space-y-3 text-sm text-neutral-800 font-medium">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-mono font-bold">01</span>
                  Automatic Rescue Device (ARD) battery descent during industrial grid failure.
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-mono font-bold">02</span>
                  Electronic load-weighing cells preventing motion on overload condition.
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-mono font-bold">03</span>
                  Instantaneous guide rail safety gear brakes for instantaneous mechanical arrest.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-black">
        <Link 
          href="/contact" 
          className="group block px-6 md:px-12 py-20 md:py-28 hover:bg-white hover:text-black transition-colors duration-500"
        >
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase block mb-2 opacity-50">NEXT STEP</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Request Engineering Consultation.
              </h2>
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase flex items-center mt-6 md:mt-0">
              Consult With Our Engineers
              <span className="ml-4 text-xl group-hover:translate-x-3 transition-transform duration-300">&rarr;</span>
            </span>
          </div>
        </Link>
      </section>

    </main>
  );
}
