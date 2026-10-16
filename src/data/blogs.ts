export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  imageUrl?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "future-of-vertical-transit",
    title: "The Future of Vertical Transit",
    excerpt: "How modern elevators are reshaping architectural possibilities and residential design.",
    content: `
      <p class="mb-6">The modern residence is no longer constrained by the horizontal plane. As urban density increases and architectural ambition soars, the concept of vertical transit within private homes is undergoing a radical transformation.</p>
      <h2 class="text-3xl font-bold mt-12 mb-6">Beyond Mere Functionality</h2>
      <p class="mb-6">Historically, home elevators were viewed purely as functional necessities or accessibility solutions. Today, they are statement pieces. At Globus Elevators, we treat the cabin not as a box that moves between floors, but as a dynamic room that transitions precisely through your home's architecture.</p>
      <p class="mb-6">We are seeing a massive shift towards glass integration, minimalist frameworks, and smart-home connectivity where the elevator anticipates your arrival based on your daily routines.</p>
      <blockquote class="border-l-2 border-white/20 pl-6 my-8 text-xl text-white/80 italic">"The ultimate luxury is uncompromised mechanical reliability. When engineering is perfected, it becomes invisible."</blockquote>
      <h2 class="text-3xl font-bold mt-12 mb-6">The Integration of Space</h2>
      <p>Our recent installations feature structural glass shafts that allow natural light to cascade through multi-story properties, turning what was once a dark mechanical core into a luminous architectural spine. The future of vertical transit is not just about moving up and down; it is about how that movement enhances the space around it.</p>
    `,
    date: "October 12, 2026",
    category: "Architecture",
    author: "Elena Rostova",
    imageUrl: "/luxury_elevator.jpg",
  },
  {
    id: "sustainable-engineering",
    title: "Sustainable Engineering in Luxury Elevators",
    excerpt: "Exploring the eco-friendly innovations that power the next generation of home elevators.",
    content: `
      <p class="mb-6">Modern vertical transportation is no longer an energy-intensive burden on building infrastructure. Through advances in machine-room-less (MRL) layouts, permanent-magnet synchronous motors (PMSM), and smart regenerative braking, contemporary residential lifts consume less power than standard household appliances.</p>
      <h2 class="text-3xl font-bold mt-12 mb-6">Regenerative Drives and Grid Efficiency</h2>
      <p class="mb-6">Traditional elevator counterweights spend energy during empty ascents and heavy descents. Modern VVVF (Variable Voltage Variable Frequency) controllers convert this gravitational potential energy back into usable electrical current, filtering clean AC power back into the residential or commercial building grid.</p>
      <blockquote class="border-l-2 border-white/20 pl-6 my-8 text-xl text-white/80 italic">"Energy efficiency in architectural engineering is not about compromise; it is about calibrating power transfer with absolute mechanical precision."</blockquote>
      <h2 class="text-3xl font-bold mt-12 mb-6">Zero-Pit Ecological Hydraulics</h2>
      <p>By utilizing bio-degradable synthetic hydraulic fluids and precision electronic flow valves, our hydraulic systems operate within completely closed loops. With no underground oil reservoir required and zero pit excavation, structural integrity of the foundation remains uncompromised while environmental risks are eliminated.</p>
    `,
    date: "September 28, 2026",
    category: "Technology",
    author: "David Chen",
    imageUrl: "/commercial_elevator.jpg",
  },
  {
    id: "designing-for-silence",
    title: "Designing for Silence",
    excerpt: "The acoustic engineering behind Globus Elevators' near-silent operation.",
    content: `
      <p class="mb-6">In a luxury residence or quiet corporate library, noise is structural friction. An elevator operating at 60 decibels is a persistent distraction. At Globus Elevators, our acoustic engineers isolate mechanical vibration to achieve operating cabin thresholds below 42 decibels—the equivalent of a quiet bedroom at night.</p>
      <h2 class="text-3xl font-bold mt-12 mb-6">Decoupling Vibration From Hoistway Walls</h2>
      <p class="mb-6">Sound travels through structural concrete and steel far faster than through air. We implement dual-stage elastomeric isolation pads beneath guide rails and motor beds. This completely decouples mechanical motor pulses from the structural frame of your villa or office floorplates.</p>
      <blockquote class="border-l-2 border-white/20 pl-6 my-8 text-xl text-white/80 italic">"True acoustic luxury is measured in what you do not hear. Smooth acceleration curves must be paired with silent mechanical guidance."</blockquote>
      <h2 class="text-3xl font-bold mt-12 mb-6">Helical Precision and Smooth Valving</h2>
      <p>Our drive units utilize hardened helical gearing with micrometer-ground tooth profiles. In hydraulic installations, proportional soft-stop electronic valving eliminates the sudden pressure drops that cause mechanical thuds, providing whisper-quiet starts and silky deceleration.</p>
    `,
    date: "September 15, 2026",
    category: "Design",
    author: "Sarah Jenkins",
    imageUrl: "/freight_elevator.jpg",
  }
];
