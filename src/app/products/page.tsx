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
    <main className="bg-black text-white pt-28 sm:pt-36 pb-20 selection:bg-white selection:text-black min-h-screen">
      
      <BrochureDownloadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pdfUrl={selectedPdf}
        pdfTitle={selectedTitle}
      />

      {/* Header */}
      <section className="container mx-auto px-5 sm:px-8 md:px-12 max-w-7xl mb-12 sm:mb-20">
        <header className="border-b border-white/10 pb-8 sm:pb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-3">
            Our Elevators
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
            Engineering Systems
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl font-medium leading-relaxed">
            Custom manufacturing, assembly, and maintenance calibrated for residential villas, corporate plazas, and industrial facilities.
          </p>
        </header>
      </section>

      {/* Flagship Section: GE 360 */}
      <GE360Showcase />

      {/* Chapter 01: Home Lift Systems (High-contrast text on white background) */}
      <section id="residential" className="py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 border-t border-black/15 bg-white text-black">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/15 pb-6 sm:pb-8 mb-10 sm:mb-14 gap-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-black font-bold uppercase block mb-1">
                Residential Mobility
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
                Home Lifts: Hydraulic &amp; Traction
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-900 max-w-md font-medium">
              Space-efficient zero-pit configurations engineered for private duplexes and villas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Visual: Client Glass Fretwork Image */}
            <div className="lg:col-span-6 relative h-[320px] sm:h-[420px] lg:h-[500px] w-full overflow-hidden bg-neutral-900 group">
              <Image 
                src="/imgs/glass_fretwork_elevator.png" 
                alt="Globus Home Elevator Architecture with Decorative Fretwork" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Specifications */}
            <div className="lg:col-span-6">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3 text-black">
                Compact Architectural Footprint
              </h3>
              <p className="text-sm sm:text-base text-neutral-900 mb-6 leading-relaxed font-medium">
                Engineered to fit into tight interior layouts starting from 3x4 ft without structural alterations or dedicated rooftop machine rooms.
              </p>
              
              <div className="border-t border-black/15 pt-5 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-neutral-800 font-bold uppercase block mb-0.5">Max Travel</span>
                  <span className="text-sm sm:text-base font-black text-black">Up to 5 Floors (13m)</span>
                </div>
                <div>
                  <span className="text-xs text-neutral-800 font-bold uppercase block mb-0.5">Rated Capacity</span>
                  <span className="text-sm sm:text-base font-black text-black">2 to 4 Passengers</span>
                </div>
                <div>
                  <span className="text-xs text-neutral-800 font-bold uppercase block mb-0.5">Power Connection</span>
                  <span className="text-sm sm:text-base font-black text-black">Single-Phase 215V</span>
                </div>
                <div>
                  <span className="text-xs text-neutral-800 font-bold uppercase block mb-0.5">Drive Mechanism</span>
                  <span className="text-sm sm:text-base font-black text-black">Hydraulic or Traction</span>
                </div>
              </div>

              <div className="mt-6 border-t border-black/15 pt-5">
                <span className="text-xs font-mono uppercase text-black font-bold block mb-2">Available Finishes</span>
                <p className="text-xs sm:text-sm text-neutral-900 font-medium">
                  Toughened panoramic glass &bull; Titanium stainless steel &bull; Decorative jaali fretwork &bull; Italian marble flooring
                </p>
              </div>

              <div className="mt-8 pt-4 flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => handleDownload("/Hydroelectric new.pdf", "Hydro-Electric Series Specifications")}
                  className="w-full sm:w-auto border-2 border-black px-6 py-3 text-xs font-black tracking-wider uppercase text-black hover:bg-black hover:text-white transition-colors"
                >
                  Hydraulic Specs (PDF)
                </button>
                <button 
                  onClick={() => handleDownload("/traction lift brochure.pdf", "Residential Traction Lift Specifications")}
                  className="w-full sm:w-auto border border-black px-6 py-3 text-xs font-bold tracking-wider uppercase text-black hover:bg-black hover:text-white transition-colors"
                >
                  Traction Specs (PDF)
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Chapter 02: Commercial Elevators */}
      <section id="commercial" className="py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 border-t border-white/10 bg-black text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 sm:pb-8 mb-10 sm:mb-14 gap-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-white/50 uppercase block mb-1">
                Commercial Infrastructure
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight">
                Commercial Passenger Lifts
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-white/70 max-w-md font-medium">
              Heavy-duty MRL gearless elevator systems for corporate complexes, hotels, and retail centers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Visual: Client Exterior Glass Elevator */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative h-[320px] sm:h-[420px] lg:h-[500px] w-full overflow-hidden bg-neutral-900 group">
              <Image 
                src="/imgs/exterior_glass_elevator.png" 
                alt="Commercial High-Speed Glass Elevator Installation" 
                fill 
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
                High-Performance Passenger Transit
              </h3>
              <p className="text-sm sm:text-base text-white/80 mb-6 leading-relaxed font-medium">
                Engineered for maximum passenger flow with advanced VVVF variable frequency drives controlling motor acceleration curves with precision.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/15 pt-5">
                <div>
                  <span className="text-xs text-white/50 block mb-0.5">Capacity</span>
                  <span className="text-sm sm:text-base font-bold">8 to 26 Persons</span>
                </div>
                <div>
                  <span className="text-xs text-white/50 block mb-0.5">Speed</span>
                  <span className="text-sm sm:text-base font-bold">1.0 to 2.5 m/s</span>
                </div>
                <div>
                  <span className="text-xs text-white/50 block mb-0.5">Dispatching</span>
                  <span className="text-sm sm:text-base font-bold">Duplex / Triplex</span>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button 
                  onClick={() => handleDownload("/traction lift brochure.pdf", "Commercial MRL Passenger Elevators")}
                  className="w-full sm:w-auto inline-block border border-white/40 px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-white hover:bg-white hover:text-black transition-colors"
                >
                  Commercial Brochure (PDF)
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Chapter 03: Specialized & Industrial Systems (Freight Elevator Image Restored) */}
      <section id="industrial" className="py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 border-t border-black/15 bg-white text-black">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/15 pb-6 sm:pb-8 mb-10 sm:mb-14 gap-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-black font-bold uppercase block mb-1">
                Specialized &amp; Industrial
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
                Specialized &amp; Industrial Systems
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-900 max-w-md font-medium">
              Heavy goods elevators, automated vehicle parking stackers, and industrial freight platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            <div className="lg:col-span-6">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3 text-black">
                Industrial Freight &amp; Vehicle Parking
              </h3>
              <p className="text-sm sm:text-base text-neutral-900 leading-relaxed font-medium mb-6">
                Engineered with heavy-gauge structural steel frames, reinforced diamond-plate floors, and heavy-duty gates capable of sustaining extreme pallet truck and vehicular loads.
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-black/15 pt-5 mb-6">
                <div>
                  <span className="text-xs text-neutral-800 font-bold uppercase block mb-0.5">Freight Range</span>
                  <p className="text-sm sm:text-base text-black font-black">500 kg to 5,000 kg</p>
                </div>
                <div>
                  <span className="text-xs text-neutral-800 font-bold uppercase block mb-0.5">Vehicle Parking</span>
                  <p className="text-sm sm:text-base text-black font-black">Hydraulic stackers &amp; pit lifts</p>
                </div>
              </div>

              <div className="border-t border-black/15 pt-4">
                <span className="text-xs font-mono uppercase text-black font-bold block mb-2">Safety Features</span>
                <p className="text-xs sm:text-sm text-neutral-900 font-medium">
                  Automatic Rescue Device (ARD) &bull; Overload warning cells &bull; Guide-rail mechanical safety brakes
                </p>
              </div>
            </div>

            {/* Visual: True Industrial Freight Elevator Image */}
            <div className="lg:col-span-6">
              <div className="relative h-[280px] sm:h-[380px] w-full overflow-hidden bg-neutral-900 group">
                <Image 
                  src="/freight_elevator.jpg" 
                  alt="Globus Industrial Freight and Logistics Elevator" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="pt-2">
                <p className="text-xs font-mono text-neutral-800 font-bold">Industrial Heavy-Duty Platform &bull; Certified Factory Rated</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/10 bg-black">
        <Link 
          href="/contact" 
          className="group block px-5 sm:px-8 md:px-12 py-16 sm:py-20 hover:bg-white hover:text-black transition-colors duration-500"
        >
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase block mb-1 opacity-50">Next Step</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Request Engineering Consultation
              </h2>
            </div>
            <span className="text-xs font-bold tracking-widest uppercase flex items-center">
              Submit Site Blueprints &rarr;
            </span>
          </div>
        </Link>
      </section>

    </main>
  );
}
