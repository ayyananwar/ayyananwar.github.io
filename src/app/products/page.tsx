"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BrochureDownloadModal } from "@/components/products/BrochureDownloadModal";

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
      <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-32">
        <header className="border-b border-white/10 pb-12">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]">
            Our Elevators.
          </h1>
          <p className="text-lg md:text-xl text-white/40 max-w-2xl font-medium leading-relaxed">
            High-quality elevators built for safety and strength. Explore our residential, commercial, and industrial models.
          </p>
        </header>
      </section>

      {/* Chapter 01: Residential Integration */}
      <section id="residential" className="py-32 px-6 md:px-12 border-b border-white/10">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-16 text-center md:text-left">
            Chapter 01 // Home Elevators
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
            <div>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
                The Hydro-Electric Series. <br/>
                <span className="text-white/40">Zero-Pit Design.</span>
              </h3>
              <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed font-medium">
                Our premium home elevator. A compact lift designed for private homes and villas. It runs silently and is easy to install. It does not need a deep pit or a machine room, and fits into a small 3x4 ft space.
              </p>
              <p className="text-base text-white/60 leading-relaxed font-medium mb-12">
                You can install it indoors or outdoors. It can be customized to match your home's design, offering beautiful options like mirror-finished stainless steel and glass walls.
              </p>
              
              <div className="border-t border-white/20 pt-8 grid grid-cols-2 gap-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/50 block mb-1">Max Travel</span>
                  <span className="text-base font-bold tracking-wide">5 Floors (13m)</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/50 block mb-1">Capacity</span>
                  <span className="text-base font-bold tracking-wide">Up to 4 People</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/50 block mb-1">Power Supply</span>
                  <span className="text-base font-bold tracking-wide">Standard 215V</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/50 block mb-1">Speed</span>
                  <span className="text-base font-bold tracking-wide">0.20 - 0.30 m/s</span>
                </div>
              </div>

              <div className="mt-8 border-t border-white/20 pt-8">
                <h4 className="text-lg font-bold mb-4">Custom Finishes & Materials</h4>
                <ul className="space-y-3 text-white/70 font-medium">
                  <li className="flex items-center"><span className="text-white/40 mr-3">→</span> Mirror-etched Stainless Steel Cabins</li>
                  <li className="flex items-center"><span className="text-white/40 mr-3">→</span> Panoramic Glass Enclosures</li>
                  <li className="flex items-center"><span className="text-white/40 mr-3">→</span> Anti-skid Granite Flooring Options</li>
                  <li className="flex items-center"><span className="text-white/40 mr-3">→</span> Custom LED Ambient Lighting</li>
                </ul>
              </div>
              <div className="mt-12 pt-8">
                <button 
                  onClick={() => handleDownload("/Hydroelectric new.pdf", "Hydro-Electric Series Home Lift")}
                  className="inline-block border border-white/40 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-colors"
                >
                  ↓ Read Full Specifications (PDF)
                </button>
              </div>
            </div>

            <div className="relative h-[500px] lg:h-[700px] w-full border border-white/10">
              <Image 
                src="/luxury_elevator.jpg" 
                alt="Globus Hydro-Electric Elevator" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div className="border-t border-white/20 pt-16">
            <h4 className="text-2xl font-bold tracking-tight mb-8">Hardware Specifications</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="border-l border-white/10 pl-6">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/50 block mb-2">Valve System</span>
                <span className="text-sm font-bold tracking-wide">German Blain Hydraulics</span>
              </div>
              <div className="border-l border-white/10 pl-6">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/50 block mb-2">Motor</span>
                <span className="text-sm font-bold tracking-wide">2 HP</span>
              </div>
              <div className="border-l border-white/10 pl-6">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/50 block mb-2">Guide Rails</span>
                <span className="text-sm font-bold tracking-wide">Imported Steel</span>
              </div>
              <div className="border-l border-white/10 pl-6">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/50 block mb-2">Hydraulic Pack</span>
                <span className="text-sm font-bold tracking-wide">27 LTR Capacity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 02: Commercial High-Speed */}
      <section id="commercial" className="py-32 px-6 md:px-12 border-b border-white/10">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-16 text-center md:text-left">
            Chapter 02 // Commercial Elevators
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="order-2 lg:order-1 relative h-[400px] lg:h-[600px] w-full border border-white/10 group overflow-hidden">
              <Image 
                src="/commercial_elevator.jpg" 
                alt="Commercial High-Speed Elevator" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/50 p-8 flex flex-col justify-end pointer-events-none">
                <h4 className="text-4xl font-bold tracking-tighter mb-4 text-white">MRL Technology</h4>
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-white/70 mb-4">Machine-Room-Less Design</p>
                <div className="space-y-2 border-l border-white/30 pl-4">
                  <p className="text-white/90 text-sm font-medium">Saves up to 60% of building space.</p>
                  <p className="text-white/90 text-sm font-medium">Uses a highly efficient gearless motor.</p>
                  <p className="text-white/90 text-sm font-medium">Consumes 80% less energy than older models.</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
                High-Speed Elevators. <br/>
                <span className="text-white/40">Smooth VVVF Drives.</span>
              </h3>
              <p className="text-lg md:text-xl text-white/60 mb-8 leading-relaxed font-medium">
                Built for busy public buildings like offices and malls. Our commercial elevators use advanced VVVF drives. This technology smoothly controls the motor's speed, ensuring a very comfortable and bump-free ride for passengers.
              </p>
              <p className="text-base text-white/50 leading-relaxed font-medium mb-12">
                This eliminates the jerky movements found in older elevators, reduces wear and tear on the machine parts, and guarantees long-lasting reliability.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 border-t border-white/20 pt-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/50 block mb-1">Capacity</span>
                  <span className="text-base font-bold tracking-wide">8 to 26 People</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/50 block mb-1">Speed Range</span>
                  <span className="text-base font-bold tracking-wide">1.0 to 2.5 m/s</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/50 block mb-1">Traffic System</span>
                  <span className="text-base font-bold tracking-wide">Group Control API</span>
                </div>
              </div>

              <div className="mt-12 pt-8">
                <button 
                  onClick={() => handleDownload("/traction lift brochure.pdf", "MRL Gearless Passenger Elevators")}
                  className="inline-block border border-white/40 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-colors"
                >
                  ↓ Read Full Specifications (PDF)
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Chapter 03: Industrial & Safety */}
      <section id="industrial" className="py-32 px-6 md:px-12 bg-neutral-950">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-16 text-center md:text-left">
            Chapter 03 // Heavy Load Handlers
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            <div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">Goods Elevators & Car Parking</h3>
              <p className="text-lg text-white/60 leading-relaxed font-medium mb-12">
                Industrial elevators need to be strong and tough. Our Goods & Freight lifts are built with heavy-duty steel walls, non-slip floors, and wide doors. They can safely handle very heavy loads every single day. We also offer automated car parking systems (stackers) to help save space in crowded cities.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-white/20 pt-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/50 block mb-2">Freight Capacity</span>
                  <p className="text-sm text-white/80 font-medium">From 500 kg up to 5,000 kg for extreme industrial applications.</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/50 block mb-2">Door Configuration</span>
                  <p className="text-sm text-white/80 font-medium">Heavy-duty bi-parting doors, collapsible gates, and telescopic automatic doors.</p>
                </div>
              </div>
            </div>

            <div className="bg-black border border-white/20 relative overflow-hidden flex flex-col">
              <div className="relative h-[300px] w-full border-b border-white/20">
                <Image 
                  src="/freight_elevator.jpg" 
                  alt="Heavy Duty Freight Elevator" 
                  fill 
                  className="object-cover grayscale"
                />
              </div>
              <div className="p-8 md:p-12">
                <h4 className="text-sm font-bold tracking-[0.2em] text-white/80 uppercase mb-8">Advanced Safety Features</h4>
                <ul className="space-y-6 text-white/70 font-medium">
                  <li className="flex items-start">
                    <span className="text-white/40 mr-4 font-bold">01</span>
                    Battery backup (ARD) to bring the lift to the nearest floor during power cuts.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/40 mr-4 font-bold">02</span>
                    Overload sensors that stop the lift from moving if it carries too much weight.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/40 mr-4 font-bold">03</span>
                    Infrared door sensors to prevent the doors from closing on people or items.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white/40 mr-4 font-bold">04</span>
                    Heavy-duty safety brakes that instantly stop the lift in an emergency.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-black">
        <Link 
          href="/contact" 
          className="group block px-6 md:px-12 py-24 md:py-32 hover:bg-white hover:text-black transition-colors duration-500"
        >
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-0">
              Start Your Project.
            </h2>
            <span className="text-sm font-bold tracking-[0.2em] uppercase flex items-center">
              Request a Consultation
              <span className="ml-4 text-xl group-hover:translate-x-4 transition-transform duration-300">→</span>
            </span>
          </div>
        </Link>
      </section>

    </main>
  );
}
