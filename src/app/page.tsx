import { HeroScrollytelling } from "@/components/home/HeroScrollytelling";
import { EmergencyScrollytelling } from "@/components/home/EmergencyScrollytelling";
import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-500 selection:text-white overflow-x-clip">
      <HeroScrollytelling />

      {/* Phase 1: The Philosophy */}
      <section className="relative z-20 py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between border-b border-white/20 pb-12 mb-16 md:mb-24 gap-8">
          <div>
            <span className="text-sm font-bold tracking-[0.3em] text-white/40 uppercase block mb-6">01 // The Philosophy</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">Why Globus.</h2>
          </div>
          <p className="text-lg md:text-xl text-white/60 max-w-md font-medium leading-relaxed">
            We don't just build elevators. We engineer architectural movement with zero compromise on safety or design.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-32 md:mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative h-[400px] md:h-[500px] lg:h-[700px] w-full border border-white/10 overflow-hidden group">
              <Image 
                src="/luxury_elevator.jpg" 
                alt="Engineering Philosophy" 
                fill 
                className="object-cover grayscale-0 group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
                Built For <br/> Absolute Reliability.
              </h3>
              <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed max-w-lg mb-12">
                From silent home elevators to heavy-duty industrial lifts, every Globus product is built with premium quality materials. We prioritize your family's safety and your building's structural integrity above all else.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <span className="text-4xl font-bold tracking-tighter text-white block mb-2">100%</span>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/40">Safety Compliance</span>
                </div>
                <div>
                  <span className="text-4xl font-bold tracking-tighter text-white block mb-2">24/7</span>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/40">Technical Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Engineering Capabilities (Inverted Theme for Segregation) */}
      <section className="relative z-20 py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-12 mb-16 md:mb-24 gap-8">
          <div>
            <span className="text-sm font-bold tracking-[0.3em] text-black/50 uppercase block mb-6">02 // Engineering Capabilities</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">What We Build.</h2>
          </div>
          <p className="text-lg md:text-xl text-black/80 max-w-md font-bold leading-relaxed">
            From compact home elevators to massive commercial freight systems, our engineering scales to your requirements.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-32 md:mb-48">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            <div className="group">
              <div className="relative h-64 md:h-80 w-full mb-8 overflow-hidden border-2 border-black">
                <Image src="/luxury_elevator.jpg" alt="Home Elevators" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="text-3xl font-black tracking-tight mb-4">Home Elevators</h4>
              <p className="text-black/80 text-lg leading-relaxed font-bold mb-8">
                Designed to fit perfectly in your home without needing a deep pit. Beautiful, incredibly quiet, and capable of serving up to 5 floors.
              </p>
              <a href="/products#residential" className="inline-block border-b-2 border-black pb-2 text-xs font-black tracking-[0.2em] uppercase text-black hover:bg-black hover:text-white transition-colors">
                View Specifications
              </a>
            </div>

            <div className="group">
              <div className="relative h-64 md:h-80 w-full mb-8 overflow-hidden border-2 border-black">
                <Image src="/commercial_elevator.jpg" alt="Commercial Elevators" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="text-3xl font-black tracking-tight mb-4">Commercial Elevators</h4>
              <p className="text-black/80 text-lg leading-relaxed font-bold mb-8">
                High-speed passenger lifts for offices and malls. Providing a smooth, comfortable ride for hundreds of people daily.
              </p>
              <a href="/products#commercial" className="inline-block border-b-2 border-black pb-2 text-xs font-black tracking-[0.2em] uppercase text-black hover:bg-black hover:text-white transition-colors">
                View Specifications
              </a>
            </div>

            <div className="group">
              <div className="relative h-64 md:h-80 w-full mb-8 overflow-hidden border-2 border-black">
                <Image src="/freight_elevator.jpg" alt="Freight Elevators" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="text-3xl font-black tracking-tight mb-4">Heavy-Duty Lifts</h4>
              <p className="text-black/80 text-lg leading-relaxed font-bold mb-8">
                Strong freight elevators and automated car parking systems. Built with industrial-grade steel to handle massive loads safely.
              </p>
              <a href="/products#industrial" className="inline-block border-b-2 border-black pb-2 text-xs font-black tracking-[0.2em] uppercase text-black hover:bg-black hover:text-white transition-colors">
                View Specifications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency & Lifeline Scrollytelling (Segregated via background styling inside the component) */}
      <EmergencyScrollytelling />

      {/* Phase 3: The Journey */}
      <section className="relative z-20 py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between border-b border-white/20 pb-12 mb-16 md:mb-24 gap-8">
          <div>
            <span className="text-sm font-bold tracking-[0.3em] text-white/40 uppercase block mb-6">03 // The Journey</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">How It Works.</h2>
          </div>
          <p className="text-lg md:text-xl text-white/60 max-w-md font-medium leading-relaxed">
            A seamless, transparent process from your first architectural blueprint to the final safety test.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-32 md:mb-48">
          <div className="space-y-24 md:space-y-40">
            
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <span className="text-7xl lg:text-9xl font-bold text-white/10 mb-6 block">01.</span>
                <h4 className="text-4xl font-bold tracking-tight mb-6">Consultation</h4>
                <p className="text-xl text-white/60 leading-relaxed font-medium">
                  We begin by understanding your building's blueprints. Our engineers work closely with your architects to determine the exact shaft dimensions, load requirements, and design finishes.
                </p>
              </div>
              <div className="order-1 md:order-2 relative h-[400px] lg:h-[600px] w-full border border-white/10 group overflow-hidden bg-neutral-900">
                <Image src="/journey_1.png" alt="Consultation" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="relative h-[400px] lg:h-[600px] w-full border border-white/10 group overflow-hidden bg-neutral-900">
                <Image src="/journey_2.png" alt="Manufacturing" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-7xl lg:text-9xl font-bold text-white/10 mb-6 block">02.</span>
                <h4 className="text-4xl font-bold tracking-tight mb-6">Engineering</h4>
                <p className="text-xl text-white/60 leading-relaxed font-medium">
                  Your elevator enters our manufacturing facility. We use high-grade steel and precision German hydraulics to forge a system built for absolute durability.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <span className="text-7xl lg:text-9xl font-bold text-white/10 mb-6 block">03.</span>
                <h4 className="text-4xl font-bold tracking-tight mb-6">Installation</h4>
                <p className="text-xl text-white/60 leading-relaxed font-medium">
                  Our technical team arrives on-site for a clean, non-intrusive installation. Every system undergoes rigorous safety testing and calibration before the final handover.
                </p>
              </div>
              <div className="order-1 md:order-2 relative h-[400px] lg:h-[600px] w-full border border-white/10 group overflow-hidden bg-neutral-900">
                <Image src="/journey_3.png" alt="Installation" fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Phase 4: Services (Inverted Theme for Segregation) */}
      <section className="relative z-20 py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-12 mb-16 md:mb-24 gap-8">
          <div>
            <span className="text-sm font-bold tracking-[0.3em] text-black/50 uppercase block mb-6">04 // Services</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">How We Help.</h2>
          </div>
          <p className="text-lg md:text-xl text-black/80 max-w-md font-bold leading-relaxed">
            Our relationship doesn't end at installation. We provide comprehensive maintenance to keep your systems running perfectly.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 md:mb-48">
          <div className="border-2 border-black p-12 hover:bg-black hover:text-white transition-colors group cursor-pointer">
            <span className="text-3xl font-black text-black/20 mb-8 block group-hover:text-white/40 transition-colors">01.</span>
            <h3 className="text-3xl font-black tracking-tight mb-6 group-hover:text-white">Installation</h3>
            <p className="text-black/80 text-lg font-bold leading-relaxed group-hover:text-white/80">
              Expert engineers install your lift perfectly, ensuring it runs quietly and safely from day one.
            </p>
          </div>
          <div className="border-2 border-black p-12 hover:bg-black hover:text-white transition-colors group cursor-pointer">
            <span className="text-3xl font-black text-black/20 mb-8 block group-hover:text-white/40 transition-colors">02.</span>
            <h3 className="text-3xl font-black tracking-tight mb-6 group-hover:text-white">Maintenance</h3>
            <p className="text-black/80 text-lg font-bold leading-relaxed group-hover:text-white/80">
              Yearly check-ups (AMC) keep your lift running like new and stop big problems before they start.
            </p>
          </div>
          <div className="border-2 border-black p-12 hover:bg-black hover:text-white transition-colors group cursor-pointer">
            <span className="text-3xl font-black text-black/20 mb-8 block group-hover:text-white/40 transition-colors">03.</span>
            <h3 className="text-3xl font-black tracking-tight mb-6 group-hover:text-white">Fast Support</h3>
            <p className="text-black/80 text-lg font-bold leading-relaxed group-hover:text-white/80">
              If your lift ever stops, our emergency team is ready to come fast and fix the issue.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-20 py-24 md:py-48 px-6 md:px-12 lg:px-24 bg-black text-white">
        {/* Phase 4: Action */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pt-16">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
              04 // Next Steps
            </h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Start Your <br/> Project.
            </h3>
            <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed max-w-xl">
              Talk to our team today to find the perfect elevator solution for your building.
            </p>
          </div>

          <div className="flex flex-col w-full md:w-auto gap-4 md:min-w-[240px]">
            <a href="/contact" className="w-full text-center px-8 py-5 bg-white text-black text-sm font-bold tracking-[0.2em] uppercase hover:bg-white/80 transition-colors">
              Request Consultation
            </a>
            <a href="/products" className="w-full text-center px-8 py-5 bg-transparent border border-white/20 text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-white/5 transition-colors">
              Full Portfolio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
