import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services & Maintenance | Globus Elevators",
  description: "Comprehensive lifecycle services: site inspections, precision installation, annual maintenance contracts (AMC), and elevator modernization.",
};

export default function ServicesPage() {
  const lifecycleServices = [
    {
      id: "01",
      category: "Planning",
      title: "Site Survey & CAD Layouts",
      description: "On-site dimension surveys, structural load assessments, and CAD hoistway planning tailored to your building blueprints. We evaluate shaft tolerances and electrical supply feeds before fabrication starts.",
      features: [
        "Site dimension verification",
        "Structural load & electrical feed assessment",
        "Custom CAD hoistway drawings & blueprints",
        "Zero-pit and low-headroom feasibility study"
      ]
    },
    {
      id: "02",
      category: "Installation",
      title: "Precision Assembly & Commissioning",
      description: "Handled by certified technicians adhering strictly to national lift safety codes. Every installation undergoes rail alignment, safety drop testing, and control calibration before handover.",
      features: [
        "Certified mechanical & electrical riggers",
        "Full compliance with Indian lift safety standards",
        "Dynamic load testing & brake calibration",
        "Client handover with emergency release training"
      ]
    },
    {
      id: "03",
      category: "Maintenance",
      title: "Annual Maintenance Contracts (AMC)",
      description: "Preventative maintenance packages covering mechanical inspections, lubrication, valve diagnostics, and 24/7 breakdown assistance across India.",
      features: [
        "Scheduled monthly / quarterly safety checks",
        "Hydraulic fluid, valve, and rope diagnostics",
        "24/7 emergency response dispatch desk",
        "Genuine OEM spare parts replacement guarantee"
      ]
    },
    {
      id: "04",
      category: "Upgrades",
      title: "Modernization & Controller Retrofits",
      description: "Revitalize older or slow elevator systems with modern VVVF variable drives, microprocessor controllers, and upgraded interior finishes.",
      features: [
        "VVVF drive retrofits cutting power consumption",
        "Automatic Rescue Device (ARD) battery descent",
        "Cabin aesthetic revitalization (mirrored stainless, glass)",
        "Infrared multi-beam door sensor upgrades"
      ]
    }
  ];

  return (
    <main className="bg-black text-white pt-28 sm:pt-36 pb-20 selection:bg-white selection:text-black min-h-screen">
      
      {/* Header */}
      <section className="container mx-auto px-5 sm:px-8 md:px-12 max-w-7xl mb-14 sm:mb-20">
        <header className="border-b border-white/10 pb-8 sm:pb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-3">
            Lifecycle Engineering
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
            End-to-End Execution
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/70 max-w-2xl font-medium leading-relaxed">
            From initial hoistway dimensions to ongoing preventative AMC, our engineering department oversees the entire lifecycle of your elevator system.
          </p>
        </header>
      </section>

      {/* Phase 01: Pre-Construction & Deployment */}
      <section className="py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 border-t border-black/10 bg-white text-black">
        <div className="container mx-auto max-w-7xl">
          <div className="border-b border-black/15 pb-6 sm:pb-8 mb-10 sm:mb-14">
            <span className="text-xs font-mono tracking-widest text-black font-bold uppercase block mb-1">
              Phase 01
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
              Site Survey &amp; Precision Build
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {lifecycleServices.slice(0, 2).map((service) => (
              <div key={service.id} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-neutral-400">
                      {service.id}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-black font-bold">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-black">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-900 font-medium leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-black/15 pt-4">
                  <span className="text-xs font-mono uppercase text-black font-bold block mb-2">Scope &amp; Deliverables</span>
                  <ul className="space-y-1.5">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-neutral-900 font-medium">
                        <span className="text-black mr-2 font-mono">&bull;</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Interlude: Technician Platform Safety Deployment */}
      <section className="relative h-[260px] sm:h-[360px] w-full overflow-hidden bg-neutral-900 border-t border-b border-white/10">
        <Image 
          src="/imgs/worker_platform.png" 
          alt="Globus Elevator Certified Installation Platform" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <div className="max-w-xl text-white">
            <span className="text-xs font-mono uppercase text-white/70 block mb-2">
              Certified Safety Riggers
            </span>
            <p className="text-lg sm:text-2xl font-bold tracking-tight">
              Every Hoistway Inspected, Calibrated, and Drop-Tested On-Site.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 02: Longevity, AMC & Modernization */}
      <section className="py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 border-t border-white/10 bg-black text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="border-b border-white/10 pb-6 sm:pb-8 mb-10 sm:mb-14">
            <span className="text-xs font-mono tracking-widest text-white/50 uppercase block mb-1">
              Phase 02
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Preventative AMC &amp; Modernization
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {lifecycleServices.slice(2, 4).map((service) => (
              <div key={service.id} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-white/30">
                      {service.id}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-white/15 pt-4">
                  <span className="text-xs font-mono uppercase text-white/50 block mb-2">Deliverables</span>
                  <ul className="space-y-1.5">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-white/70">
                        <span className="text-white/40 mr-2 font-mono">&bull;</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="border-t border-white/10 bg-black">
        <Link 
          href="/contact" 
          className="group block px-5 sm:px-8 md:px-12 py-16 sm:py-20 hover:bg-white hover:text-black transition-colors duration-500"
        >
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase block mb-1 opacity-50">Direct Consultation</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Schedule a Site Survey or AMC Review
              </h2>
            </div>
            <span className="text-xs font-bold tracking-widest uppercase flex items-center">
              Contact Engineering &rarr;
            </span>
          </div>
        </Link>
      </section>

    </main>
  );
}
