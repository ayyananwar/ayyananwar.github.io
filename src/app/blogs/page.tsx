import Link from "next/link";
import { blogPosts } from "@/data/blogs";

export default function Blogs() {
  return (
    <main className="bg-black text-white pt-32 pb-24 selection:bg-brand-500 selection:text-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <header className="mb-24 border-b border-white/10 pb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Journal.
          </h1>
          <p className="text-lg md:text-xl text-white/40 max-w-xl">
            Engineering, architecture, and the future of vertical mobility.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group relative flex flex-col h-full"
            >
              {/* Image Placeholder (for future backend integration) */}
              <div className="w-full aspect-[4/3] bg-[#0a0a0a] border border-white/5 mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors duration-500" />
              </div>

              {/* Meta data */}
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-white">
                  {post.category}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs font-medium tracking-widest uppercase text-white/40">
                  {post.date}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-white/60 transition-colors duration-300">
                <Link href={`/blogs/${post.id}`} className="focus:outline-none before:absolute before:inset-0">
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-base text-white/50 leading-relaxed flex-grow line-clamp-3">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
