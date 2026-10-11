import { blogPosts } from "@/data/blogs";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
    <main className="min-h-screen bg-black text-white pt-32 pb-24 selection:bg-white selection:text-black">
      
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 max-w-4xl mb-16">
        {/* Back Link */}
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors mb-12"
        >
          <span className="mr-3 text-lg leading-none">&larr;</span>
          Back to Journal
        </Link>

        <header className="border-b border-white/10 pb-12">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/40">
              {post.category}
            </span>
            <span className="text-white/30">&bull;</span>
            <span className="text-xs font-mono tracking-wider uppercase text-white/60">
              {post.date}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.05]">
            {post.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-8 font-medium">
            {post.excerpt}
          </p>
          
          <div className="flex items-center text-xs font-mono tracking-widest uppercase text-white/50">
            <span>By {post.author}</span>
            <span className="mx-3 text-white/20">|</span>
            <span>Globus Engineering Editorial</span>
          </div>
        </header>
      </section>

      {/* Article Body (Vibrant White Section) */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-black/10 bg-white text-black">
        <article className="container mx-auto max-w-4xl">
          {/* Featured Image */}
          {post.imageUrl && (
            <div className="w-full aspect-[21/9] md:aspect-[2.2/1] bg-neutral-900 border border-black/10 mb-16 relative overflow-hidden">
              <Image 
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none text-neutral-800 leading-relaxed space-y-6 text-lg md:text-xl font-normal [&>p]:leading-relaxed [&>h2]:text-2xl [&>h2]:md:text-4xl [&>h2]:font-black [&>h2]:tracking-tight [&>h2]:mt-12 [&>h2]:mb-6 [&>blockquote]:border-l-4 [&>blockquote]:border-black [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-neutral-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-12 border-t border-black/10 flex justify-between items-center">
            <Link 
              href="/blogs"
              className="text-xs font-bold tracking-[0.2em] uppercase text-black border-b border-black pb-1 hover:opacity-60 transition-opacity"
            >
              &larr; Back to Journal
            </Link>
            <Link 
              href="/contact"
              className="text-xs font-bold tracking-[0.2em] uppercase text-black border-b border-black pb-1 hover:opacity-60 transition-opacity"
            >
              Consult With Our Engineers &rarr;
            </Link>
          </div>
        </article>
      </section>

    </main>
  );
}
