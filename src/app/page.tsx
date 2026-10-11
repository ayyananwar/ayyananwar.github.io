import { HeroScrollytelling } from "@/components/home/HeroScrollytelling";
import { GE360Showcase } from "@/components/products/GE360Showcase";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-clip">
      {/* Locked 3D Scrollytelling Hero */}
      <HeroScrollytelling />

      {/* 01 // Introduction & Philosophy (Vibrant White Architectural Section) */}
      <section className="relative z-20 py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black/10 pb-12 mb-16 md:mb-24 gap-8">
            <div>
              <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-neutral-500 uppercase block mb-3">
                01 // Identity &amp; Purpose
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95]">
                Globus Elevators
              </h2>
              <span className="text-lg md:text-xl text-neutral-600 tracking-wider uppercase font-semibold mt-3 block">
                &ldquo;reaching newer heights&rdquo;
              </span>
            </div>
            <div className="max-w-md">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3">
                Elevating Standards, Enriching Spaces.
              </h3>
              <p className="text-base text-neutral-700 font-medium leading-relaxed">
                Premium vertical transportation solutions specialising in custom design, manufacturing, assembly, and maintenance for residential and commercial spaces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative h-[450px] md:h-[550px] lg:h-[640px] w-full overflow-hidden bg-neutral-900 group">
              <Image 
                src="/luxury_elevator.jpg" 
                alt="Globus Elevators Engineering Architecture" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-xs font-mono tracking-widest uppercase text-white/60 block mb-1">
                  PRECISION MOTION &bull; RESIDENTIAL &bull; COMMERCIAL
                </span>
                <span className="text-xl font-bold tracking-tight">
                  Calibrated For Your Architectural Blueprints
                </span>
              </div>
            </div>
            
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-[0.3em] text-neutral-500 uppercase mb-4 block">
                Who We Are
              </span>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-[1.05]">
                Seamless Mobility, <br/> Uncompromised Safety.
              </h3>
              <p className="text-lg md:text-xl text-neutral-800 font-medium leading-relaxed mb-6">
                At Globus Elevators, we combine precision engineering with sleek aesthetics to deliver seamless vertical mobility.
              </p>
              <p className="text-base text-neutral-600 font-medium leading-relaxed mb-10">
                Whether you are upgrading a private villa with a compact home lift or outfitting a commercial complex with high-performance traffic solutions, our focus remains absolute: uncompromised safety, smooth operation, and long-term reliability.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/10">
                <div>
                  <span className="text-4xl md:text-5xl font-black tracking-tighter block mb-1">100%</span>
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-neutral-500">Rigorous Safety Standards</span>
                </div>
                <div>
                  <span className="text-4xl md:text-5xl font-black tracking-tighter block mb-1">24/7</span>
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-neutral-500">Dedicated Service Support</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 02 // Flagship Spotlight: GE 360 Hydroelectric Series (Dark Luxury Section) */}
      <GE360Showcase />

      {/* 03 // Core Product Offerings (Vibrant White Architectural Section) */}
      <section className="relative z-20 py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-white text-black border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black/10 pb-12 mb-16 md:mb-24 gap-8">
            <div>
              <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-neutral-500 uppercase block mb-3">
                03 // Systems Portfolio
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95]">
                Core Offerings.
              </h2>
            </div>
            <p className="text-lg text-neutral-700 max-w-md font-medium leading-relaxed">
              Custom-engineered vertical transit configurations built for residential serenity, heavy corporate traffic, and specialized logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Category 1: Home Lifts */}
            <div className="flex flex-col justify-between group">
              <div>
                <div className="relative h-72 md:h-80 w-full mb-8 overflow-hidden bg-neutral-900">
                  <Image 
                    src="/luxury_elevator.jpg" 
                    alt="Home Lifts" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-2">
                  CATEGORY 01
                </span>
                <h4 className="text-3xl font-black tracking-tight mb-3">
                  Home Lifts
                </h4>
                <p className="text-neutral-700 text-base leading-relaxed font-medium mb-6">
                  Space-efficient, quiet, and elegant hydraulic or traction lifts engineered for custom residential layouts.
                </p>
              </div>
              <div>
                <Link 
                  href="/products#residential" 
                  className="inline-block border-b-2 border-black pb-1 text-xs font-black tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
                >
                  Explore Home Lifts &rarr;
                </Link>
              </div>
            </div>

            {/* Category 2: Commercial Lifts */}
            <div className="flex flex-col justify-between group">
              <div>
                <div className="relative h-72 md:h-80 w-full mb-8 overflow-hidden bg-neutral-900">
                  <Image 
                    src="/commercial_elevator.jpg" 
                    alt="Commercial Lifts" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-2">
                  CATEGORY 02
                </span>
                <h4 className="text-3xl font-black tracking-tight mb-3">
                  Commercial Lifts
                </h4>
                <p className="text-neutral-700 text-base leading-relaxed font-medium mb-6">
                  Robust, heavy-duty elevator systems engineered for high-traffic environments like offices, retail spaces, and hotels.
                </p>
              </div>
              <div>
                <Link 
                  href="/products#commercial" 
                  className="inline-block border-b-2 border-black pb-1 text-xs font-black tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
                >
                  Commercial Blueprints &rarr;
                </Link>
              </div>
            </div>

            {/* Category 3: Specialized Solutions */}
            <div className="flex flex-col justify-between group">
              <div>
                <div className="relative h-72 md:h-80 w-full mb-8 overflow-hidden bg-neutral-900">
                  <Image 
                    src="/freight_elevator.jpg" 
                    alt="Specialized Solutions" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase block mb-2">
                  CATEGORY 03
                </span>
                <h4 className="text-3xl font-black tracking-tight mb-3">
                  Specialized Solutions
                </h4>
                <p className="text-neutral-700 text-base leading-relaxed font-medium mb-6">
                  Goods elevators, car parking lifts, and dumbwaiters built for specialized industrial, automotive, and commercial requirements.
                </p>
              </div>
              <div>
                <Link 
                  href="/products#industrial" 
                  className="inline-block border-b-2 border-black pb-1 text-xs font-black tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
                >
                  Specialized Systems &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 04 // Why Choose Globus Elevators (Dark Luxury Minimalist Metrics) */}
      <section className="relative z-20 py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-neutral-950 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 mb-16 md:mb-24 gap-8">
            <div>
              <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-white/50 uppercase block mb-3">
                04 // Technical Superiority
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95]">
                Why Choose Us.
              </h2>
            </div>
            <p className="text-base md:text-lg text-white/70 max-w-md font-medium leading-relaxed">
              Engineered with extreme tolerances, low power footprints, and four redundant fail-safe systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="border-t border-white/20 pt-8">
              <span className="text-4xl font-black text-white/20 mb-4 block font-mono">01.</span>
              <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-3 text-white">
                Compact &amp; Flexible Design
              </h4>
              <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium">
                Engineered to fit into minimal spaces with flexible structural requirements, eliminating costly civil pit excavation.
              </p>
            </div>

            <div className="border-t border-white/20 pt-8">
              <span className="text-4xl font-black text-white/20 mb-4 block font-mono">02.</span>
              <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-3 text-white">
                Advanced Safety Standards
              </h4>
              <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium">
                Equipped with emergency stops, door interlocks, perimeter safety sensors, and reliable home inverter auto-rescue.
              </p>
            </div>

            <div className="border-t border-white/20 pt-8">
              <span className="text-4xl font-black text-white/20 mb-4 block font-mono">03.</span>
              <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-3 text-white">
                Energy Efficient
              </h4>
              <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium">
                Built with modern low-consumption drives and smart controls to minimize power consumption on standard household electrical grids.
              </p>
            </div>

            <div className="border-t border-white/20 pt-8">
              <span className="text-4xl font-black text-white/20 mb-4 block font-mono">04.</span>
              <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-3 text-white">
                End-to-End Execution
              </h4>
              <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium">
                From initial site inspection and blueprint design to manufacturing, precision installation, and routine maintenance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 05 // The Seamless Journey (Vibrant White Architectural Section) */}
      <section className="relative z-20 py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-white text-black border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black/10 pb-12 mb-16 md:mb-24 gap-8">
            <div>
              <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-neutral-500 uppercase block mb-3">
                05 // The Process
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95]">
                How We Work.
              </h2>
            </div>
            <p className="text-lg text-neutral-700 max-w-md font-medium leading-relaxed">
              A transparent, white-glove process from your first architectural blueprint to final safety certification.
            </p>
          </div>

          <div className="space-y-24 md:space-y-36">
            
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <span className="text-7xl lg:text-9xl font-black text-neutral-200 mb-4 block leading-none">01.</span>
                <h4 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Site Survey &amp; Blueprint Review</h4>
                <p className="text-lg text-neutral-700 leading-relaxed font-medium">
                  We analyze your building blueprints and conduct an on-site structural assessment to tailor the exact hoistway, load, and aesthetic parameters.
                </p>
              </div>
              <div className="order-1 md:order-2 relative h-[360px] lg:h-[480px] w-full overflow-hidden bg-neutral-900 group">
                <Image src="/journey_1.png" alt="Consultation" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative h-[360px] lg:h-[480px] w-full overflow-hidden bg-neutral-900 group">
                <Image src="/journey_2.png" alt="Engineering" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-7xl lg:text-9xl font-black text-neutral-200 mb-4 block leading-none">02.</span>
                <h4 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Precision Manufacturing</h4>
                <p className="text-lg text-neutral-700 leading-relaxed font-medium">
                  Components enter our fabrication facility, forging structural steel cabins and precision German hydraulic valving built for lifetime durability.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <span className="text-7xl lg:text-9xl font-black text-neutral-200 mb-4 block leading-none">03.</span>
                <h4 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Clean Installation &amp; AMC</h4>
                <p className="text-lg text-neutral-700 leading-relaxed font-medium">
                  Our certified technical team conducts clean, non-intrusive on-site installation, safety drop calibration, and ongoing annual maintenance care.
                </p>
              </div>
              <div className="order-1 md:order-2 relative h-[360px] lg:h-[480px] w-full overflow-hidden bg-neutral-900 group">
                <Image src="/journey_3.png" alt="Installation" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 06 // Direct Next Steps & Contact Block */}
      <section className="relative z-20 py-28 md:py-40 px-6 md:px-12 lg:px-24 bg-black text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.3em] text-white/50 uppercase mb-4 block">
              06 // Project Execution
            </span>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.05]">
              Let&rsquo;s Elevate <br/>Your Space.
            </h3>
            <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed mb-8">
              Schedule a complimentary site survey, structural assessment, or receive an architectural estimate from our engineering department.
            </p>
            <div className="space-y-2 text-sm font-mono text-white/70">
              <p>Corporate: <a href="mailto:info@globuselevators.com" className="text-white underline hover:text-white/70 transition-colors">info@globuselevators.com</a></p>
              <p>Direct Inquiries: <a href="tel:+919931334433" className="text-white underline hover:text-white/70 transition-colors">+91 99313 34433</a> / +91 90317 61990</p>
              <p>Headquarters: A/151, Sector 69, Noida, Uttar Pradesh, India</p>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-auto gap-4 md:min-w-[260px]">
            <Link 
              href="/contact" 
              className="w-full text-center px-10 py-5 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors"
            >
              Request Consultation
            </Link>
            <Link 
              href="/products" 
              className="w-full text-center px-10 py-5 bg-transparent border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
            >
              Full Specifications
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
