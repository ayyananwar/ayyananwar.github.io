import { HeroScrollytelling } from "@/components/home/HeroScrollytelling";
import { GE360Showcase } from "@/components/products/GE360Showcase";
import { ContactSection } from "@/components/home/ContactSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-clip">
      {/* Scrollytelling Hero */}
      <HeroScrollytelling />

      {/* 01 // Identity & Scope (High-contrast text on white background) */}
      <section className="relative z-20 py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 lg:px-24 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black/15 pb-8 sm:pb-12 mb-10 sm:mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-black font-bold block mb-2">
                About Globus
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-black">
                Globus Elevators
              </h2>
              <p className="text-sm sm:text-base text-neutral-900 tracking-wider uppercase font-bold mt-2 font-mono">
                Reaching Newer Heights
              </p>
            </div>
            <div className="max-w-md">
              <p className="text-sm sm:text-base text-neutral-900 font-medium leading-relaxed">
                Precision vertical transportation for residential villas, corporate offices, and industrial facilities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Visual: Client Geometric Glass Facade */}
            <div className="lg:col-span-7 relative h-[320px] sm:h-[420px] md:h-[500px] lg:h-[540px] w-full overflow-hidden bg-neutral-900 group">
              <Image 
                src="/imgs/geometric_glass_facade.png" 
                alt="Globus Elevators Geometric Facade Architecture" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm sm:text-base font-bold">Residential Villa Integration</p>
                <span className="text-[11px] font-mono text-white/80">Custom Exterior Hoistway</span>
              </div>
            </div>
            
            {/* Engineering Highlights */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 text-black">
                Zero Pit Excavation. Zero Machine Room.
              </h3>
              <p className="text-sm sm:text-base text-neutral-900 font-medium leading-relaxed mb-6">
                Engineered to eliminate structural alterations. Compact footprints starting from 3x4 ft running on standard household 215V electrical power.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-black/15">
                <div>
                  <span className="text-2xl sm:text-3xl font-black block font-mono text-black">0 mm</span>
                  <span className="text-xs font-bold uppercase text-neutral-800">Pit Depth Required</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black block font-mono text-black">215 V</span>
                  <span className="text-xs font-bold uppercase text-neutral-800">Single Phase Power</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black block font-mono text-black">100%</span>
                  <span className="text-xs font-bold uppercase text-neutral-800">Safety Interlocked</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black block font-mono text-black">24/7</span>
                  <span className="text-xs font-bold uppercase text-neutral-800">Noida Service Desk</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/15 flex flex-wrap gap-3">
                <Link 
                  href="/products" 
                  className="px-6 py-3 bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors"
                >
                  Our Elevators &rarr;
                </Link>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 border border-black text-black text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
                >
                  Contact Engineers
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 02 // Flagship Spotlight: GE 360 */}
      <GE360Showcase />

      {/* 03 // Core Offerings (High-contrast text on white background) */}
      <section className="relative z-20 py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 lg:px-24 bg-white text-black border-t border-black/15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/15 pb-8 sm:pb-12 mb-10 sm:mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-black font-bold block mb-2">
                Elevator Systems
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-black">
                Core Offerings
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-900 max-w-md font-medium">
              Three configurations engineered for private residences, commercial buildings, and industrial logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Category 1: Home Lifts */}
            <div className="flex flex-col justify-between group">
              <div>
                <div className="relative h-64 sm:h-72 w-full mb-5 overflow-hidden bg-neutral-900">
                  <Image 
                    src="/imgs/glass_fretwork_elevator.png" 
                    alt="Globus Residential Glass Elevator with Decorative Fretwork" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-black">
                  Home Lifts
                </h3>
                <p className="text-neutral-900 text-sm leading-relaxed mb-4 font-medium">
                  Hydraulic and traction zero-pit lifts with panoramic glass, hardwood, or decorative jaali panels.
                </p>
                <div className="space-y-1 text-xs font-mono font-bold text-neutral-800 mb-6">
                  <p>2 to 5 Floors &bull; Up to 4 Passengers &bull; 215V</p>
                </div>
              </div>
              <div>
                <Link 
                  href="/products#residential" 
                  className="inline-block border-b-2 border-black pb-1 text-xs font-black tracking-wider uppercase hover:opacity-60 transition-opacity text-black"
                >
                  View Home Lifts &rarr;
                </Link>
              </div>
            </div>

            {/* Category 2: Commercial Lifts */}
            <div className="flex flex-col justify-between group">
              <div>
                <div className="relative h-64 sm:h-72 w-full mb-5 overflow-hidden bg-neutral-900">
                  <Image 
                    src="/imgs/exterior_glass_elevator.png" 
                    alt="Globus Commercial Modern Exterior Glass Elevator" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-black">
                  Commercial Lifts
                </h3>
                <p className="text-neutral-900 text-sm leading-relaxed mb-4 font-medium">
                  MRL gearless passenger systems for corporate towers, hotels, and retail plazas.
                </p>
                <div className="space-y-1 text-xs font-mono font-bold text-neutral-800 mb-6">
                  <p>8 to 26 Passengers &bull; Speeds to 2.5 m/s</p>
                </div>
              </div>
              <div>
                <Link 
                  href="/products#commercial" 
                  className="inline-block border-b-2 border-black pb-1 text-xs font-black tracking-wider uppercase hover:opacity-60 transition-opacity text-black"
                >
                  Commercial Specs &rarr;
                </Link>
              </div>
            </div>

            {/* Category 3: Specialized & Industrial Systems (Actual Industrial Freight Image) */}
            <div className="flex flex-col justify-between group">
              <div>
                <div className="relative h-64 sm:h-72 w-full mb-5 overflow-hidden bg-neutral-900">
                  <Image 
                    src="/freight_elevator.jpg" 
                    alt="Globus Industrial Freight and Logistics Elevator" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-black">
                  Specialized &amp; Industrial Systems
                </h3>
                <p className="text-neutral-900 text-sm leading-relaxed mb-4 font-medium">
                  Heavy industrial goods elevators, hydraulic car parking stackers, and rugged freight hoists.
                </p>
                <div className="space-y-1 text-xs font-mono font-bold text-neutral-800 mb-6">
                  <p>500 kg to 5,000 kg &bull; Automotive &amp; Freight Duty</p>
                </div>
              </div>
              <div>
                <Link 
                  href="/products#industrial" 
                  className="inline-block border-b-2 border-black pb-1 text-xs font-black tracking-wider uppercase hover:opacity-60 transition-opacity text-black"
                >
                  Specialized Systems &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 04 // Visual Project Gallery */}
      <section className="relative z-20 py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 lg:px-24 bg-neutral-950 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 sm:pb-12 mb-10 sm:mb-14 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-2">
                Recent Projects
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                Realized Installations
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/60 max-w-md font-medium">
              Photography from recent residential and commercial installations across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            <div className="group overflow-hidden">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black">
                <Image 
                  src="/imgs/glass_wood_elevator.png" 
                  alt="Modern Glass-and-Wood Exterior Elevator" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="pt-3">
                <h4 className="text-sm font-bold text-white">Glass &amp; Timber Exterior Shaft</h4>
                <p className="text-xs text-white/50 font-mono mt-0.5">Private Residence</p>
              </div>
            </div>

            <div className="group overflow-hidden">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black">
                <Image 
                  src="/imgs/globus_courtyard.png" 
                  alt="Modern Globus Elevator Courtyard" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="pt-3">
                <h4 className="text-sm font-bold text-white">Courtyard Panoramic Glass Tower</h4>
                <p className="text-xs text-white/50 font-mono mt-0.5">Central Atrium</p>
              </div>
            </div>

            <div className="group overflow-hidden sm:col-span-2 lg:col-span-1">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black">
                <Image 
                  src="/imgs/outdoor_shaft_installation.png" 
                  alt="Outdoor Steel Hoistway Shaft Installation" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="pt-3">
                <h4 className="text-sm font-bold text-white">Outdoor Steel Shaft Framework</h4>
                <p className="text-xs text-white/50 font-mono mt-0.5">Exterior Installation</p>
              </div>
            </div>

          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <span className="text-xs font-mono text-white/50">Residential &bull; Panoramic &bull; Commercial Installations</span>
            <Link 
              href="/gallery" 
              className="text-xs font-bold tracking-widest uppercase text-white border-b border-white pb-1 hover:opacity-60 transition-opacity"
            >
              Explore Full Project Gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 05 // How We Work (Restored with Original AI Images and high-contrast dark text on white) */}
      <section className="relative z-20 py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-12 lg:px-24 bg-white text-black border-t border-black/15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black/15 pb-8 sm:pb-12 mb-14 sm:mb-20 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-black font-bold block mb-2">
                Execution
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-black">
                How We Work
              </h2>
            </div>
            <p className="text-base sm:text-lg text-neutral-900 max-w-md font-medium leading-relaxed">
              A transparent, white-glove process from your first architectural blueprint to final safety certification.
            </p>
          </div>

          <div className="space-y-20 sm:space-y-28 md:space-y-36">
            
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <span className="text-6xl sm:text-8xl lg:text-9xl font-black text-neutral-300 mb-2 sm:mb-4 block leading-none font-mono">01.</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4 text-black">Site Survey &amp; Blueprint Review</h3>
                <p className="text-base sm:text-lg text-neutral-900 leading-relaxed font-medium">
                  We analyze your building blueprints and conduct an on-site structural assessment to tailor the exact hoistway, load, and aesthetic parameters.
                </p>
              </div>
              <div className="order-1 md:order-2 relative h-[300px] sm:h-[380px] lg:h-[460px] w-full overflow-hidden bg-neutral-900 group">
                <Image src="/journey_1.png" alt="Consultation and Blueprint Review" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="relative h-[300px] sm:h-[380px] lg:h-[460px] w-full overflow-hidden bg-neutral-900 group">
                <Image src="/journey_2.png" alt="Precision Manufacturing" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-6xl sm:text-8xl lg:text-9xl font-black text-neutral-300 mb-2 sm:mb-4 block leading-none font-mono">02.</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4 text-black">Precision Manufacturing</h3>
                <p className="text-base sm:text-lg text-neutral-900 leading-relaxed font-medium">
                  Components enter our fabrication facility, forging structural steel cabins and precision German hydraulic valving built for lifetime durability.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <span className="text-6xl sm:text-8xl lg:text-9xl font-black text-neutral-300 mb-2 sm:mb-4 block leading-none font-mono">03.</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4 text-black">Clean Installation &amp; AMC</h3>
                <p className="text-base sm:text-lg text-neutral-900 leading-relaxed font-medium">
                  Our certified technical team conducts clean, non-intrusive on-site installation, safety drop calibration, and ongoing annual maintenance care.
                </p>
              </div>
              <div className="order-1 md:order-2 relative h-[300px] sm:h-[380px] lg:h-[460px] w-full overflow-hidden bg-neutral-900 group">
                <Image src="/journey_3.png" alt="Clean Installation and AMC" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 06 // Integrated Contact Section */}
      <ContactSection />
    </main>
  );
}
