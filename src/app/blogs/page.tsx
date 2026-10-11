import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogs";

export default function Blogs() {
  return (
    <main className="bg-black text-white pt-32 pb-24 selection:bg-white selection:text-black min-h-screen">
      
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-20 md:mb-28">
        <header className="border-b border-white/10 pb-12">
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-white/40 uppercase block mb-4">
            Globus Elevators // Architectural Publications
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-6 leading-[1.05]">
            Journal.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl font-medium leading-relaxed">
            Engineering essays, architectural insights, and the future of vertical mobility.
          </p>
        </header>
      </section>

      {/* Articles Grid (Vibrant White Section) */}
      <section className="py-28 md:py-36 px-6 md:px-12 border-t border-black/10 bg-white text-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10 lg:gap-14">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="group relative flex flex-col h-full border-b border-black/10 pb-10"
              >
                {/* Image Container with Natural Lighting */}
                <div className="w-full aspect-[16/10] bg-neutral-900 border border-black/10 mb-6 overflow-hidden relative">
                  {post.imageUrl && (
                    <Image 
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Metadata */}
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-black">
                    {post.category}
                  </span>
                  <span className="text-neutral-300">&bull;</span>
                  <span className="text-xs font-mono tracking-wider uppercase text-neutral-500">
                    {post.date}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-black tracking-tight mb-3 text-black group-hover:text-neutral-600 transition-colors">
                  <Link href={`/blogs/${post.id}`} className="focus:outline-none">
                    {post.title}
                  </Link>
                </h3>
                
                {/* Excerpt */}
                <p className="text-base text-neutral-700 leading-relaxed font-medium flex-grow mb-6">
                  {post.excerpt}
                </p>

                <div className="pt-2">
                  <Link 
                    href={`/blogs/${post.id}`}
                    className="text-xs font-bold tracking-[0.2em] uppercase text-black border-b border-black pb-1 hover:opacity-60 transition-opacity"
                  >
                    Read Essay &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
