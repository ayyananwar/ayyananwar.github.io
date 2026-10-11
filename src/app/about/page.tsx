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
      <section className="relative pt-40 pb-24 px-6 md:px-12 border-b border-white/10">
        <div className="container mx-auto max-w-7xl">
          <span className="text-xs font-semibold tracking-[0.3em] text-white/40 uppercase mb-6 block">
            About Globus Elevators // reaching newer heights
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.95]">
            Elevating Standards, <br />
            <span className="text-white/40">Enriching Spaces.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl font-medium leading-relaxed">
            Premium vertical transportation solutions specialising in custom design, manufacturing, assembly, and maintenance for residential and commercial spaces.
          </p>
        </div>
      </section>

      {/* Narrative Section 01: Our Story (Vibrant White Section) */}
      <section className="py-28 md:py-36 px-6 md:px-12 border-t border-black/10 bg-white text-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-500 uppercase mb-4 block border-l-2 border-black pl-4">
                01 // Our Heritage &amp; Foundation
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-black">
                Our Story.
              </h2>
              <p className="text-lg md:text-xl text-neutral-800 font-bold leading-relaxed mb-6">
                Founded with a commitment to quality and technical excellence, Globus Elevators has grown into a trusted name in vertical transportation.
              </p>
              <p className="text-base md:text-lg text-neutral-700 font-medium leading-relaxed">
                We take pride in our hands-on approach to engineering, ensuring that every installation meets rigorous safety compliances and structural standards. From compact private residential villas to high-volume commercial plazas, our focus remains absolute: uncompromised safety, smooth operation, and long-term reliability.
              </p>
            </div>
            
            <div className="lg:col-span-5 relative h-[420px] md:h-[520px] w-full overflow-hidden bg-neutral-900 group">
              <Image 
                src="/luxury_elevator.jpg" 
                alt="Globus Elevators Engineering Heritage" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 border-t border-white/20 pt-3">
                <span className="text-xs font-mono tracking-widest text-white/80 uppercase">HANDS-ON PRECISION &bull; NOIDA HEADQUARTERS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section 02: Mission & Vision (Dark Obsidian Section) */}
      <section className="py-28 md:py-36 px-6 md:px-12 border-t border-white/10 bg-black text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            
            <div className="border-t border-white/20 pt-8">
              <span className="text-xs font-mono font-bold tracking-widest text-white/40 uppercase block mb-4">
                02 // CORE PURPOSE
              </span>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-white">
                Our Mission.
              </h3>
              <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed">
                To provide safe, accessible, and technologically advanced lift solutions that enhance everyday living and commercial infrastructure.
              </p>
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-white/50">PILLARS: SAFETY &bull; ACCESSIBILITY &bull; ADVANCED TECH</span>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <span className="text-xs font-mono font-bold tracking-widest text-white/40 uppercase block mb-4">
                03 // LONG-TERM ASPIRATION
              </span>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-white">
                Our Vision.
              </h3>
              <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed">
                To be the most dependable elevator partner known for transparent execution, superior craftsmanship, and dedicated customer support.
              </p>
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-white/50">PILLARS: DEPENDABILITY &bull; CRAFTSMANSHIP &bull; TRANSPARENCY</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Narrative Section 03: Engineering Standards & Tolerances (Vibrant White Section) */}
      <section className="py-28 md:py-36 px-6 md:px-12 border-t border-black/10 bg-white text-black">
        <div className="container mx-auto max-w-7xl">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-500 uppercase block mb-4">
            04 // The Engineering Standard
          </span>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-black">
            Precision Motion For Blueprints.
          </h3>
          <p className="text-lg md:text-xl font-medium text-neutral-700 max-w-3xl leading-relaxed mb-12">
            We collaborate with architects, structural engineers, and property owners from Day One. Every hoistway, pitless landing, and glass enclosure is calibrated for lifetime durability.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-black/15">
            <div>
              <span className="text-4xl md:text-5xl font-black block text-black">0.0 mm</span>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-2 block">Shaft Deviation Tolerance</span>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-black block text-black">100%</span>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-2 block">Electrical Interlock Loop</span>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-black block text-black">215V</span>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-2 block">Household UPS Compatible</span>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-black block text-black">360°</span>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-2 block">Panoramic Sightlines</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (Dark Section) */}
      <section className="border-t border-white/10 bg-black py-24 px-6 md:px-12 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Start Your Project With Globus</h3>
          <p className="text-white/70 mb-8 font-medium">Talk to our engineering team in Noida for blueprint review and technical proposals.</p>
          <Link href="/contact" className="inline-block px-10 py-5 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors">
            Get In Touch &rarr;
          </Link>
        </div>
      </section>

    </main>
  );
}
