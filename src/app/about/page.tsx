import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Globus Elevators",
  description: "Founded with a commitment to quality and technical excellence, Globus Elevators delivers safe, accessible, and advanced vertical transit solutions.",
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 px-5 sm:px-8 md:px-12 border-b border-white/10">
        <div className="container mx-auto max-w-7xl">
          <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-3 block">
            About Globus Elevators
          </span>
          <h1 className="text-3xl sm:text-6xl md:text-8xl font-black tracking-tight mb-4 sm:mb-6">
            Elevating Standards, <br />
            <span className="text-white/40">Enriching Spaces.</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
            Custom manufacturing, precision assembly, and dedicated maintenance engineered for residential villas, commercial towers, and industrial facilities.
          </p>
        </div>
      </section>

      {/* Narrative Section 01: Our Story */}
      <section className="py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 border-t border-black/10 bg-white text-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-widest text-black font-bold mb-2 block">
                Our Heritage
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 text-black">
                Our Story
              </h2>
              <p className="text-sm sm:text-base text-neutral-900 font-bold leading-relaxed mb-4">
                Globus Elevators was founded to provide transparent, architecturally integrated vertical transportation with zero engineering compromises.
              </p>
              <p className="text-sm sm:text-base text-neutral-900 font-medium leading-relaxed mb-6">
                From compact private villas in Delhi NCR requiring pitless installation to complex multi-landing commercial projects, every system is fabricated and assembled to meet stringent Indian and international safety norms.
              </p>
              
              <div className="grid grid-cols-2 gap-4 border-t border-black/15 pt-5">
                <div>
                  <span className="text-2xl sm:text-3xl font-black block text-black font-mono">100%</span>
                  <span className="text-xs text-neutral-800 font-bold uppercase">Safety Compliance</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black block text-black font-mono">24/7</span>
                  <span className="text-xs text-neutral-800 font-bold uppercase">Dedicated Service Desk</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative h-[320px] sm:h-[420px] w-full overflow-hidden bg-neutral-900 group">
              <Image 
                src="/imgs/glass_wood_elevator.png" 
                alt="Globus Elevators Engineering Heritage Installation" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-bold">Noida Manufacturing &amp; Assembly</p>
                <span className="text-xs text-white/70 font-mono">Pan-India Installation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section 02: Mission & Vision */}
      <section className="py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 border-t border-white/10 bg-black text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
            
            <div className="border-t border-white/20 pt-5">
              <span className="text-xs font-mono uppercase tracking-widest text-white/40 block mb-2">
                Mission
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-white">
                Our Purpose
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                To deliver safe, reliable, and architecturally seamless vertical transportation solutions tailored precisely to individual structural blueprints.
              </p>
            </div>

            <div className="border-t border-white/20 pt-5">
              <span className="text-xs font-mono uppercase tracking-widest text-white/40 block mb-2">
                Vision
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-white">
                Our Direction
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                To be the most dependable elevator engineering partner in India through transparent execution, premium fabrication, and rapid-response maintenance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Narrative Section 03: Engineering Standards & Tolerances */}
      <section className="py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 border-t border-black/10 bg-white text-black">
        <div className="container mx-auto max-w-7xl">
          <span className="text-xs font-mono uppercase tracking-widest text-black font-bold block mb-2">
            Quality Benchmarks
          </span>
          <h3 className="text-2xl sm:text-4xl font-black tracking-tight mb-3 text-black">
            Calibrated For Lifetime Durability
          </h3>
          <p className="text-sm sm:text-base font-medium text-neutral-900 max-w-xl leading-relaxed mb-8">
            We collaborate with architects, structural engineers, and property developers from Day One to guarantee zero shaft deviation and effortless safety certification.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-5 border-t border-black/15">
            <div>
              <span className="text-2xl sm:text-3xl font-black block text-black font-mono">0.0 mm</span>
              <span className="text-xs text-neutral-800 font-bold uppercase mt-1 block">Shaft Tolerance</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black block text-black font-mono">100%</span>
              <span className="text-xs text-neutral-800 font-bold uppercase mt-1 block">Electrical Interlock</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black block text-black font-mono">215V</span>
              <span className="text-xs text-neutral-800 font-bold uppercase mt-1 block">Household Grid</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black block text-black font-mono">360°</span>
              <span className="text-xs text-neutral-800 font-bold uppercase mt-1 block">Panoramic Glass</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t border-white/10 bg-black py-16 sm:py-20 px-5 sm:px-8 md:px-12 text-center text-white">
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl sm:text-4xl font-black tracking-tight mb-2">Start Your Project With Globus</h3>
          <p className="text-xs sm:text-sm text-white/70 mb-6 font-medium">Talk to our engineering team in Noida for blueprint review and technical proposals.</p>
          <Link href="/contact" className="inline-block px-8 py-3.5 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors">
            Contact Engineers &rarr;
          </Link>
        </div>
      </section>

    </main>
  );
}
