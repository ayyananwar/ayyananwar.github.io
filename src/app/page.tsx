import { HeroScrollytelling } from "@/components/home/HeroScrollytelling";
import { EmergencyScrollytelling } from "@/components/home/EmergencyScrollytelling";
import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-500 selection:text-white overflow-x-clip">
      <HeroScrollytelling />

      {/* The Philosophy & Core Solutions Narrative */}
      <section className="relative z-20 py-24 md:py-48 px-6 md:px-12 lg:px-24 bg-black text-white border-t border-white/10">
        
        {/* Phase 1: Philosophy */}
        <div className="max-w-7xl mx-auto mb-24 md:mb-48 border-b border-white/10 pb-24 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1 relative h-[300px] md:h-[400px] lg:h-[600px] w-full border border-white/10 overflow-hidden group">
              <Image 
                src="/luxury_elevator.jpg" 
                alt="Engineering Philosophy" 
                fill 
                className="object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
              <h2 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
                01 // The Philosophy
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                Zero <br/> Compromise.
              </h3>
              <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed max-w-lg mb-12">
                We do more than just install elevators. We build reliable transport systems that fit perfectly into your building. From silent home elevators to heavy-duty industrial lifts, every Globus product is built with premium quality and strict safety standards.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <span className="text-4xl font-bold tracking-tighter text-white block mb-2">100%</span>
                  <span className="text-xs font-bold tracking-[0.1em] uppercase text-white/40">Safety Compliance</span>
                </div>
                <div>
                  <span className="text-4xl font-bold tracking-tighter text-white block mb-2">24/7</span>
                  <span className="text-xs font-bold tracking-[0.1em] uppercase text-white/40">Technical Support</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Phase 2: Core Solutions */}
        <div className="max-w-7xl mx-auto mb-24 md:mb-48">
          <h2 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-16">
            02 // Engineering Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 border-t border-white/10 pt-16">
            
            <div className="group">
              <div className="relative h-48 md:h-64 w-full mb-6 overflow-hidden border border-white/10">
                <Image src="/luxury_elevator.jpg" alt="Home Elevators" fill className="object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <h4 className="text-2xl font-bold tracking-tight mb-4">Home Elevators</h4>
              <p className="text-white/50 leading-relaxed font-medium mb-8">
                Our premium Home Elevators. Designed to fit in small spaces without needing a deep pit. They run quietly, look beautiful, and can serve up to 5 floors.
              </p>
              <a href="/products#residential" className="inline-block border-b border-white/30 pb-1 text-xs font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white hover:border-white transition-colors">
                View Specifications
              </a>
            </div>

            <div className="group">
              <div className="relative h-48 md:h-64 w-full mb-6 overflow-hidden border border-white/10">
                <Image src="/commercial_elevator.jpg" alt="Commercial Elevators" fill className="object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <h4 className="text-2xl font-bold tracking-tight mb-4">Commercial Elevators</h4>
              <p className="text-white/50 leading-relaxed font-medium mb-8">
                High-speed passenger lifts for offices and malls. These use modern technology to save building space and provide a very smooth, comfortable ride for hundreds of people daily.
              </p>
              <a href="/products#commercial" className="inline-block border-b border-white/30 pb-1 text-xs font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white hover:border-white transition-colors">
                View Specifications
              </a>
            </div>

            <div className="group">
              <div className="relative h-48 md:h-64 w-full mb-6 overflow-hidden border border-white/10">
                <Image src="/freight_elevator.jpg" alt="Freight Elevators" fill className="object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <h4 className="text-2xl font-bold tracking-tight mb-4">Heavy-Duty & Parking</h4>
              <p className="text-white/50 leading-relaxed font-medium mb-8">
                Strong Freight elevators and Automated Car Parking systems. Built with heavy-duty steel to handle massive daily loads safely and reliably.
              </p>
              <a href="/products#industrial" className="inline-block border-b border-white/30 pb-1 text-xs font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white hover:border-white transition-colors">
                View Specifications
              </a>
            </div>

          </div>
        </div>

        {/* Phase 3: The Journey */}
        <div className="max-w-7xl mx-auto mb-24 md:mb-48 border-t border-white/10 pt-24 md:pt-32">
          <h2 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase mb-24 text-center">
            03 // The Journey
          </h2>
          
          <div className="space-y-24 md:space-y-32">
            
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <span className="text-6xl font-bold text-white/10 mb-4 block">01.</span>
                <h4 className="text-3xl font-bold tracking-tight mb-6">Consultation & Architecture</h4>
                <p className="text-white/60 leading-relaxed font-medium max-w-md">
                  We begin by understanding your building's blueprints. Our engineers work closely with your architects to determine the exact shaft dimensions, load requirements, and aesthetic preferences.
                </p>
              </div>
              <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] w-full border border-white/10 group overflow-hidden bg-neutral-900">
                <Image src="/journey_1.png" alt="Consultation" fill className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[300px] md:h-[400px] w-full border border-white/10 group overflow-hidden bg-neutral-900">
                <Image src="/journey_2.png" alt="Manufacturing" fill className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
              </div>
              <div className="flex flex-col justify-center md:pl-12">
                <span className="text-6xl font-bold text-white/10 mb-4 block">02.</span>
                <h4 className="text-3xl font-bold tracking-tight mb-6">Engineering & Manufacturing</h4>
                <p className="text-white/60 leading-relaxed font-medium max-w-md">
                  Once the design is finalized, your elevator enters our manufacturing facility. We use high-grade steel and precision German hydraulics to forge a system built for absolute durability and safety.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <span className="text-6xl font-bold text-white/10 mb-4 block">03.</span>
                <h4 className="text-3xl font-bold tracking-tight mb-6">Installation & Handover</h4>
                <p className="text-white/60 leading-relaxed font-medium max-w-md">
                  Our technical team arrives on-site for a clean, non-intrusive installation. Every system undergoes rigorous safety testing and calibration before the final handover.
                </p>
              </div>
              <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] w-full border border-white/10 group overflow-hidden bg-neutral-900">
                <Image src="/journey_3.png" alt="Installation" fill className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Emergency & Lifeline Scrollytelling */}
      <EmergencyScrollytelling />

      {/* Services Preview */}
      <section className="border-y border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4 block">
                Our Services
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                How We Help.
              </h2>
            </div>
            <div className="mt-8 md:mt-0">
              <a href="/services" className="inline-block bg-white text-black px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors">
                View All Services
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 p-10 hover:bg-white/5 transition-colors group">
              <span className="text-xl font-bold text-white/20 mb-4 block group-hover:text-white transition-colors">01.</span>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Safe Installation</h3>
              <p className="text-white/60 font-medium leading-relaxed">
                Expert engineers install your lift perfectly, ensuring it runs quietly and safely from day one.
              </p>
            </div>
            <div className="border border-white/10 p-10 hover:bg-white/5 transition-colors group">
              <span className="text-xl font-bold text-white/20 mb-4 block group-hover:text-white transition-colors">02.</span>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Maintenance (AMC)</h3>
              <p className="text-white/60 font-medium leading-relaxed">
                Yearly check-ups keep your lift running like new and stop big problems before they start.
              </p>
            </div>
            <div className="border border-white/10 p-10 hover:bg-white/5 transition-colors group">
              <span className="text-xl font-bold text-white/20 mb-4 block group-hover:text-white transition-colors">03.</span>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Fast Support</h3>
              <p className="text-white/60 font-medium leading-relaxed">
                If your lift ever stops, our emergency team is ready to come fast and fix the issue.
              </p>
            </div>
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
