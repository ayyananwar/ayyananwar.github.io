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
      <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-24 md:mb-32">
        <header className="border-b border-white/10 pb-12">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-white/40 uppercase block mb-4">
            Globus Elevators // Lifecycle Engineering
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-6 leading-[1.05]">
            End-to-End <br />
            <span className="text-white/40">Execution.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl font-medium leading-relaxed">
            Our engagement doesn&rsquo;t end at installation. We offer comprehensive lifecycle services to ensure your equipment runs smoothly, safely, and quietly year-round.
          </p>
        </header>
      </section>

      {/* Services Detailed Grid */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12 mb-24 md:mb-36">
        <div className="space-y-16 md:space-y-24">
          {lifecycleServices.map((service) => (
            <div 
              key={service.id} 
              className="border border-white/15 bg-neutral-950 p-8 md:p-14 hover:border-white/40 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-8 pb-8 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-white/40 uppercase block mb-3">
                    {service.id} // {service.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                    {service.title}
                  </h2>
                </div>
                <div className="lg:max-w-md">
                  <p className="text-base md:text-lg text-white/75 font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-6">
                  Key Scope &amp; Deliverables
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="border-l border-white/20 pl-4 py-1">
                      <span className="text-xs font-mono text-white/40 block mb-1">0{idx + 1}</span>
                      <p className="text-sm font-medium text-white/90 leading-snug">{feat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Banner */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="border border-white/10 bg-neutral-950 text-white p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-white/40 uppercase block mb-2">
              Maintenance &amp; Surveys
            </span>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-2">
              Book a Site Survey or Request AMC Quotation
            </h3>
            <p className="text-base text-white/70 font-medium max-w-xl">
              Connect directly with our engineering office in Noida or request on-site technical inspection anywhere in our coverage region.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-10 py-5 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors shrink-0 text-center"
          >
            Contact Engineering Team
          </Link>
        </div>
      </section>

    </main>
  );
}
