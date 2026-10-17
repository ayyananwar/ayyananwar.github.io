"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Residential" | "Panoramic" | "Commercial" | "Engineering";
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
  specs: string[];
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "ge360-atrium",
    title: "GE 360 Villa Atrium Centerpiece",
    subtitle: "Double-Height Luxury Residence Installation",
    category: "Panoramic",
    categoryLabel: "Panoramic & Glass",
    location: "Private Villa",
    image: "/new/360_3.jpeg",
    description: "Full 360-degree cylindrical panoramic glass cabin rising through a double-height residential atrium. Engineered with zero civil pit excavation and freestanding structural framework.",
    specs: ["360° Viewing Angle", "Double-Height Atrium Rise", "Zero-Pit Civil Base", "Single-Phase 215V Power"]
  },
  {
    id: "hydraulic-cantilever",
    title: "Cantilevered Hydraulic Home Lift",
    subtitle: "Exterior Hoistway Architecture",
    category: "Residential",
    categoryLabel: "Residential Lift",
    location: "Residential Complex",
    image: "/new/hydro.jpeg",
    description: "Weather-sealed cantilevered hydraulic lift engineered for structures without an interior hoistway. Heavy-duty vertical guide rails provide smooth acceleration and silent landings.",
    specs: ["Cantilever Guide Structure", "German Hydraulic Valving", "Zero Machine Room (MRL)", "Weather-Sealed Cab"]
  },
  {
    id: "ge360-interior",
    title: "GE 360 Cabin Interior Architecture",
    subtitle: "Indirect Ambient LED Illumination",
    category: "Residential",
    categoryLabel: "Residential Lift",
    location: "Luxury Duplex",
    image: "/new/360.webp",
    description: "Interior cabin detail showcasing black anodized structural steel framing, flush-fit laminated safety glass, and soft perimeter LED edge illumination for evening transit.",
    specs: ["Black Anodized Frame", "Ambient LED Lighting", "Dual Door Interlocks", "Emergency Inverter Rescue"]
  },
  {
    id: "ge360-facade",
    title: "GE 360 Panoramic Glass Shaft",
    subtitle: "Continuous Uninterrupted Sightlines",
    category: "Panoramic",
    categoryLabel: "Panoramic & Glass",
    location: "Contemporary Villa",
    image: "/new/360_4.jpeg",
    description: "Frontal perspective of the cylindrical glass hoistway showing crystal-clear vertical sightlines that preserve natural light flow across all interior floors.",
    specs: ["Toughened Laminated Glass", "Minimal Floor Penetration", "Whisper-Quiet Valving", "Mechanical Rail Brake"]
  },
  {
    id: "ge360-piston",
    title: "Outdoor Glass Shaft & Hydraulic Piston",
    subtitle: "Vertical Hydro-Electric Drive Architecture",
    category: "Panoramic",
    categoryLabel: "Panoramic & Glass",
    location: "Exterior Hoistway",
    image: "/new/360_1.webp",
    description: "Panoramic glass tower with exposed vertical hydraulic drive cylinder, combining contemporary industrial engineering with natural daylight transit.",
    specs: ["Direct Hydraulic Cylinder", "Weatherproof Glass Hoistway", "Overload Sensing Cells", "Low Power Consumption"]
  },
  {
    id: "ge360-curved",
    title: "GE 360 Curved Glass Villa Tower",
    subtitle: "Integrated Stairwell Void",
    category: "Panoramic",
    categoryLabel: "Panoramic & Glass",
    location: "Atrium Residence",
    image: "/new/360_2.webp",
    description: "Cylindrical curved glass elevator shaft installed inside an internal garden atrium, transmitting natural illumination throughout the vertical circulation core.",
    specs: ["Curved Panoramic Glass", "Zero Rooftop Overrun", "Single-Phase Operation", "Automatic Landing Release"]
  },
  {
    id: "hydraulic-cargo",
    title: "External Hydraulic Utility & Home Hoist",
    subtitle: "Rugged Residential Integration",
    category: "Engineering",
    categoryLabel: "Engineering & Assembly",
    location: "Exterior Retrofit Site",
    image: "/new/hydro2.webp",
    description: "Direct hydraulic lift configuration providing vertical transit between multi-tier residential parking and outdoor terraces without internal renovations.",
    specs: ["Direct Piston Drive", "Exterior Weather-Proofing", "Instant Auto-Rescue", "Low Maintenance AMC"]
  },
  {
    id: "geometric-villa",
    title: "Geometric Villa Integration",
    subtitle: "Custom Multi-Level Facade Alignment",
    category: "Residential",
    categoryLabel: "Residential Lift",
    location: "Delhi NCR",
    image: "/imgs/geometric_glass_facade.png",
    description: "Full-height panoramic glass elevator shaft integrated directly into a modern geometric villa facade. Engineered with zero civil pit excavation and minimal structural impact on existing foundations.",
    specs: ["Zero Civil Pit Required", "Single-Phase 215V Feed", "Toughened Laminated Glass", "Direct Blueprints Alignment"]
  },
  {
    id: "fretwork-villa",
    title: "Decorative Fretwork Villa Lift",
    subtitle: "Laser-Cut Jaali Panel Enclosure",
    category: "Residential",
    categoryLabel: "Residential Lift",
    location: "Noida",
    image: "/imgs/glass_fretwork_elevator.png",
    description: "Bespoke interior residential elevator featuring laser-cut geometric fretwork panels with integrated ambient illumination. Delivers whisper-quiet ascent with soft-stop hydraulic valving.",
    specs: ["Custom Jaali Panels", "Whisper-Quiet Valving", "3 Landings (G+2)", "Italian Marble Floor"]
  },
  {
    id: "exterior-glass",
    title: "Contemporary Commercial Glass Tower",
    subtitle: "High-Traffic Passenger Transit",
    category: "Commercial",
    categoryLabel: "Commercial Infrastructure",
    location: "Mixed-Use Complex",
    image: "/imgs/exterior_glass_elevator.png",
    description: "External panoramic glass hoistway delivering panoramic daylight and rapid passenger transit. High-efficiency gearless drive with precision electronic acceleration curves.",
    specs: ["MRL Gearless Drive", "1.5 m/s Travel Speed", "8 to 13 Passengers", "Duplex Smart Dispatch"]
  },
  {
    id: "glass-timber",
    title: "Timber & Panoramic Glass Enclosure",
    subtitle: "Natural Material Architecture",
    category: "Residential",
    categoryLabel: "Residential Lift",
    location: "Bespoke Villa",
    image: "/imgs/glass_wood_elevator.png",
    description: "A combination of natural exterior wood cladding with crystal-clear panoramic glass walls, calibrated to complement the residence's architectural landscape.",
    specs: ["Custom Wood Cladding", "Zero-Pit Civil Base", "Anti-Skid Flooring", "Low Power Footprint"]
  },
  {
    id: "courtyard-glass",
    title: "Courtyard Glass Tower",
    subtitle: "Central Open-Air Atrium",
    category: "Panoramic",
    categoryLabel: "Panoramic & Glass",
    location: "Central Garden Plaza",
    image: "/imgs/globus_courtyard.png",
    description: "Freestanding weatherproof glass elevator tower installed within an open-air central courtyard, connecting living quarters without occupying interior square footage.",
    specs: ["Weatherproof Sealed Shaft", "Independent Steel Tower", "Dual-Side Landing Access", "Full Daylight Flow"]
  },
  {
    id: "steel-hoistway",
    title: "Engineered Outdoor Steel Hoistway",
    subtitle: "Structural Framework & Retrofit",
    category: "Engineering",
    categoryLabel: "Engineering & Assembly",
    location: "Structural Retrofit Site",
    image: "/imgs/outdoor_shaft_installation.png",
    description: "Precision on-site structural steel framework engineered for buildings lacking an internal elevator shaft. Pre-fabricated steel sections allow non-disruptive installation.",
    specs: ["Heavy-Gauge Steel Frame", "Precision Field Erection", "Wind & Seismic Rated", "External Retrofit Solution"]
  },
  {
    id: "technician-platform",
    title: "Field Deployment & Drop Calibration",
    subtitle: "100% Code-Compliant Mechanical Testing",
    category: "Engineering",
    categoryLabel: "Engineering & Assembly",
    location: "Active Commissioning Site",
    image: "/imgs/worker_platform.png",
    description: "Certified Globus technicians performing dynamic load testing, guide rail alignment, and mechanical wedge drop-arrest calibration prior to safety certification.",
    specs: ["Certified Rigging Crew", "Laser Rail Calibration", "Mechanical Wedge Drop Test", "Dedicated 24/7 Support"]
  },
  {
    id: "industrial-freight",
    title: "Heavy-Duty Industrial Freight System",
    subtitle: "Logistics & Automotive Transport",
    category: "Commercial",
    categoryLabel: "Commercial Infrastructure",
    location: "Industrial Logistics Hub",
    image: "/freight_elevator.jpg",
    description: "Heavy-gauge reinforced steel cabin with diamond-plate steel flooring and collapsible safety gates built to sustain forklift, pallet truck, and heavy vehicular transit.",
    specs: ["500 kg to 5,000 kg Range", "Diamond-Plate Steel Floor", "Overload Sensing Cells", "Industrial Interlocks"]
  }
];

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "Residential", label: "Residential Lifts" },
  { id: "Panoramic", label: "Panoramic & Glass" },
  { id: "Commercial", label: "Commercial & Freight" },
  { id: "Engineering", label: "Engineering & Assembly" },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <main className="bg-black text-white selection:bg-white selection:text-black pt-28 sm:pt-36 pb-20 min-h-screen">
      
      {/* Page Header */}
      <section className="container mx-auto px-5 sm:px-8 md:px-12 max-w-7xl mb-10 sm:mb-14">
        <header className="border-b border-white/10 pb-8 sm:pb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-3">
            Realized Installations
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
            Project Gallery
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl font-medium leading-relaxed">
            Photographic records and technical specifications from recent residential villa, panoramic glass, and commercial elevator installations across India.
          </p>
        </header>

        {/* Category Filter Tabs (Mobile swipeable / touch friendly) */}
        <div className="flex items-center gap-2 overflow-x-auto pt-6 pb-2 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = cat.id === "all" 
              ? GALLERY_ITEMS.length 
              : GALLERY_ITEMS.filter((item) => item.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-colors border ${
                  isActive
                    ? "bg-white text-black border-white font-bold"
                    : "bg-transparent text-white/70 border-white/20 hover:border-white/60 hover:text-white"
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Cards Grid (Mobile-First Layout) */}
      <section className="container mx-auto px-5 sm:px-8 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {filteredItems.map((item, index) => (
            <article 
              key={item.id}
              className="group flex flex-col justify-between border border-white/15 bg-neutral-950 p-4 sm:p-5"
            >
              <div>
                {/* Image Container with Tap-To-Enlarge */}
                <div 
                  onClick={() => openLightbox(index)}
                  className="relative h-64 sm:h-72 w-full mb-5 overflow-hidden bg-black cursor-pointer group"
                >
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none" />
                  
                  {/* Tap to expand badge */}
                  <div className="absolute top-3 right-3 bg-black/70 border border-white/20 text-white p-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={14} />
                  </div>

                  {/* Location badge */}
                  <div className="absolute bottom-3 left-3 bg-black/80 px-2.5 py-1 text-[10px] font-mono text-white/80 border border-white/20 uppercase tracking-wider">
                    {item.location}
                  </div>
                </div>

                {/* Metadata */}
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/50 block mb-1">
                  {item.categoryLabel}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-white/60 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium mb-5">
                  {item.description}
                </p>
              </div>

              {/* Technical Specifications Chips */}
              <div className="border-t border-white/15 pt-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-2">
                  Key Specifications
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono text-white/70">
                  {item.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-white/40 mr-1.5">&bull;</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lightbox Fullscreen Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/15 pb-4 text-white">
            <div>
              <h4 className="text-sm sm:text-base font-bold">
                {filteredItems[lightboxIndex]?.title}
              </h4>
              <p className="text-xs font-mono text-white/60">
                {filteredItems[lightboxIndex]?.location} &bull; Photo {lightboxIndex + 1} of {filteredItems.length}
              </p>
            </div>
            
            <button 
              onClick={closeLightbox}
              className="p-2 border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>
          </div>

          {/* Center Image with Prev / Next */}
          <div className="relative flex-grow my-4 flex items-center justify-center">
            <button 
              onClick={prevLightbox}
              className="absolute left-2 sm:left-4 z-10 p-3 bg-black/70 border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Previous Image"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="relative w-full h-full max-h-[75vh] max-w-5xl">
              <Image 
                src={filteredItems[lightboxIndex]?.image || ""} 
                alt={filteredItems[lightboxIndex]?.title || ""} 
                fill 
                className="object-contain"
                priority
              />
            </div>

            <button 
              onClick={nextLightbox}
              className="absolute right-2 sm:right-4 z-10 p-3 bg-black/70 border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Next Image"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="border-t border-white/15 pt-3 max-w-4xl mx-auto text-center">
            <p className="text-xs sm:text-sm text-white/80 font-medium">
              {filteredItems[lightboxIndex]?.description}
            </p>
          </div>
        </div>
      )}

      {/* Direct Action Bottom Strip */}
      <section className="container mx-auto px-5 sm:px-8 md:px-12 max-w-7xl mt-16 sm:mt-24">
        <div className="border border-white/15 bg-neutral-950 p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-1">
              Custom Architectural Integration
            </span>
            <h3 className="text-xl sm:text-3xl font-black tracking-tight text-white mb-2">
              Have a Similar Architectural Blueprint?
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Our Noida engineering team provides on-site dimension surveys and custom CAD hoistway drawings for villas and commercial complexes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link 
              href="/contact" 
              className="px-6 py-3.5 bg-white text-black text-xs font-bold tracking-wider uppercase hover:bg-neutral-200 transition-colors text-center"
            >
              Request Site Survey
            </Link>
            <a 
              href="https://wa.me/919931334433?text=Hi%20Globus%20Elevators%2C%20I%20saw%20your%20project%20gallery%20and%20want%20to%20discuss%20an%20elevator%20for%20my%20building" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-black text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-opacity"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
