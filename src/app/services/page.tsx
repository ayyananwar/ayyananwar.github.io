import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Maintenance | Globus Elevators",
  description: "Comprehensive lifecycle services: site inspections, precision installation, annual maintenance contracts (AMC), and elevator modernization.",
};

export default function ServicesPage() {
  const lifecycleServices = [
    {
      id: "01",
      category: "PRE-CONSTRUCTION & ARCHITECTURE",
      title: "Site Visit & Custom Design",
      description: "Personalized site inspections, structural assessments, and custom layout planning tailored to your building requirements. Our engineering specialists evaluate hoistway tolerances, electrical supply feeds, and architectural finish alignments before fabrication begins.",
      features: [
        "Complimentary initial site dimension survey",
        "Structural load & electrical requirements assessment",
        "Custom CAD hoistway drawings & architectural blueprints",
        "Zero-pit and low-headroom feasibility analysis"
      ]
    },
    {
      id: "02",
      category: "DEPLOYMENT & SAFETY VALIDATION",
      title: "Installation & Commissioning",
      description: "Meticulous installation handled by expert technical teams, ensuring alignment with safety codes and civil prerequisites. Every system undergoes mechanical rail alignment, safety gear drop testing, and control calibration before handover.",
      features: [
        "Certified mechanical & electrical installation technicians",
        "Strict compliance with national lift safety codes",
        "Comprehensive dynamic load testing & brake calibration",
        "Full client handover with emergency operation training"
      ]
    },
    {
      id: "03",
      category: "EQUIPMENT LONGEVITY & PEACE OF MIND",
      title: "Annual Maintenance Contracts (AMC)",
      description: "Affordable, scheduled maintenance packages covering mechanical checks, lubrication, control system diagnostics, and emergency support. Regular preventative care guarantees maximum uptime and extended machine lifespan.",
      features: [
        "Scheduled monthly / quarterly mechanical inspections",
        "Complete hydraulic fluid, valve, and rope tension diagnostics",
        "Rapid-response emergency breakdown support",
        "Original OEM spare parts replacement guarantee"
      ]
    },
    {
      id: "04",
      category: "SYSTEM EVOLUTION & LIFE EXTENSION",
      title: "Modernization & Upgrades",
      description: "Revitalize older or slow elevator systems with modern control panels, enhanced safety features, and improved interior aesthetics. Save up to 50% energy consumption by retrofitting legacy motors with advanced VVVF variable drives.",
      features: [
        "Microprocessor controller & VVVF drive retrofits",
        "Automatic Rescue Device (ARD) and backup integration",
        "Cabin aesthetic revitalization (mirrored stainless, glass, lighting)",
        "Safety interlock and multi-beam infrared sensor upgrades"
      ]
    }
  ];

  return (
    <main className="bg-black text-white pt-32 pb-24 selection:bg-white selection:text-black min-h-screen">
      
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-20 md:mb-28">
        <header className="border-b border-white/10 pb-12">
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-amber-400 uppercase block mb-4">
            Globus Elevators // Lifecycle Engineering
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-6 leading-[1.05]">
            End-to-End <br />
            <span className="text-white/40">Execution.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl font-medium leading-relaxed">
            Our engagement doesn&rsquo;t end at installation. We provide comprehensive lifecycle engineering: from initial hoistway surveys to lifetime preventive maintenance.
          </p>
        </header>
      </section>

      {/* Phase 01: Pre-Construction & Deployment (Vibrant White Section) */}
      <section className="py-28 md:py-36 px-6 md:px-12 border-t border-black/10 bg-white text-black">
        <div className="container mx-auto max-w-7xl">
          <div className="border-b border-black/10 pb-8 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase block mb-2">
              PHASE 01 // PRE-CONSTRUCTION &amp; COMMISSIONING
            </span>
            <h2 className="text-3xl md:text-6xl font-black tracking-tight text-black">
              Site Survey &amp; Precision Build.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {lifecycleServices.slice(0, 2).map((service) => (
              <div key={service.id} className="flex flex-col justify-between">
                <div>
                  <span className="text-5xl lg:text-7xl font-black text-neutral-200 block mb-4 leading-none">
                    {service.id}.
                  </span>
                  <span className="text-xs font-mono font-bold tracking-widest text-amber-700 uppercase block mb-2">
                    {service.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-black tracking-tight mb-4 text-black">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-neutral-700 font-medium leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-black/15 pt-6">
                  <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 mb-4">
                    Key Scope &amp; Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-sm text-neutral-800 font-medium">
                        <span className="text-amber-600 font-bold mr-3 font-mono">0{idx + 1}</span>
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

      {/* Phase 02: Longevity, AMC & Modernization (Dark Obsidian Section) */}
      <section className="py-28 md:py-36 px-6 md:px-12 border-t border-white/10 bg-black text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="border-b border-white/10 pb-8 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase block mb-2">
              PHASE 02 // LIFETIME RELIABILITY &amp; RETROFITS
            </span>
            <h2 className="text-3xl md:text-6xl font-black tracking-tight text-white">
              Preventative AMC &amp; Modernization.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {lifecycleServices.slice(2, 4).map((service) => (
              <div key={service.id} className="flex flex-col justify-between">
                <div>
                  <span className="text-5xl lg:text-7xl font-black text-neutral-800 block mb-4 leading-none">
                    {service.id}.
                  </span>
                  <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase block mb-2">
                    {service.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-black tracking-tight mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/75 font-medium leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-white/15 pt-6">
                  <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-4">
                    Key Scope &amp; Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-sm text-white/80 font-medium">
                        <span className="text-amber-400 font-bold mr-3 font-mono">0{idx + 1}</span>
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

      {/* Phase 03: Direct Consultation Banner (Vibrant White Section) */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-t border-black/10 bg-white text-black">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-500 uppercase block mb-2">
              MAINTENANCE &amp; SURVEYS
            </span>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-3 text-black">
              Book a Site Survey or Request AMC Quotation
            </h3>
            <p className="text-base text-neutral-700 font-medium max-w-xl">
              Connect directly with our engineering office in Noida or request on-site technical inspection anywhere in our coverage region.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-10 py-5 bg-black text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors shrink-0 text-center"
          >
            Contact Engineering Team &rarr;
          </Link>
        </div>
      </section>

    </main>
  );
}
