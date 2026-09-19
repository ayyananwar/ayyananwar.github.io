import { blogPosts } from "@/data/blogs";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 selection:bg-brand-500 selection:text-white">
      <article className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* Back Link */}
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-xs font-semibold tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors mb-20"
        >
          <span className="mr-4 text-lg leading-none">←</span>
          Back to Journal
        </Link>

        {/* Header */}
        <header className="mb-16 border-b border-white/10 pb-12">
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white">
              {post.category}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">
              {post.date}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
            {post.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-3xl mb-12">
            {post.excerpt}
          </p>
          
          <div className="flex items-center text-xs font-semibold tracking-[0.2em] uppercase text-white/40">
            <span>By {post.author}</span>
            <span className="mx-3 text-white/20">|</span>
            <span>Globus Engineering</span>
          </div>
        </header>

        {/* Featured Image Placeholder */}
        <div className="w-full aspect-[21/9] md:aspect-[3/1] bg-[#0a0a0a] border border-white/5 mb-16 relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-white/[0.02]" />
          <span className="text-white/10 font-bold tracking-[0.2em] uppercase text-sm relative z-10">
            Featured Image
          </span>
        </div>

        {/* Content */}
        <div 
          className="max-w-none text-white/80 leading-relaxed space-y-6 text-lg md:text-xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
      </article>
    </main>
  );
}
