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
      <p class="mb-6">Historically, home elevators were viewed purely as functional necessities or accessibility solutions. Today, they are statement pieces. At Globus Elevators, we treat the cabin not as a box that moves between floors, but as a dynamic room that transitions seamlessly through your home's architecture.</p>
      <p class="mb-6">We are seeing a massive shift towards glass integration, minimalist frameworks, and smart-home connectivity where the elevator anticipates your arrival based on your daily routines.</p>
      <blockquote class="border-l-2 border-white/20 pl-6 my-8 text-xl text-white/80 italic">"The ultimate luxury is seamless movement. When engineering is perfected, it becomes invisible."</blockquote>
      <h2 class="text-3xl font-bold mt-12 mb-6">The Integration of Space</h2>
      <p>Our recent installations feature structural glass shafts that allow natural light to cascade through multi-story properties, turning what was once a dark mechanical core into a luminous architectural spine. The future of vertical transit is not just about moving up and down; it is about how that movement enhances the space around it.</p>
    `,
    date: "October 12, 2026",
    category: "Architecture",
    author: "Elena Rostova",
  },
  {
    id: "sustainable-engineering",
    title: "Sustainable Engineering in Luxury Elevators",
    excerpt: "Exploring the eco-friendly innovations that power the next generation of home elevators.",
    content: "<p>Content coming soon...</p>",
    date: "September 28, 2026",
    category: "Technology",
    author: "David Chen",
  },
  {
    id: "designing-for-silence",
    title: "Designing for Silence",
    excerpt: "The acoustic engineering behind Globus Elevators' near-silent operation.",
    content: "<p>Content coming soon...</p>",
    date: "September 15, 2026",
    category: "Design",
    author: "Sarah Jenkins",
  }
];
