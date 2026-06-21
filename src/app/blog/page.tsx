import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Link from "next/link";
import { Clock, User, ArrowRight } from "lucide-react";

const posts = [
  { slug: "sama-debt-collection-regulations-2025", title: "SAMA Debt Collection Regulations 2025", excerpt: "The Saudi Central Bank has issued updated guidelines for debt collection practices.", category: "Compliance", readTime: "8 min read", author: "Nora Al-Fahad", date: "June 15, 2025", tag: "SAMA" },
  { slug: "ai-debt-recovery-gcc", title: "How AI is Transforming Debt Recovery Across the GCC", excerpt: "Machine learning models are achieving recovery rates that traditional call centers never could.", category: "Technology", readTime: "6 min read", author: "Layla Mohammed", date: "June 8, 2025", tag: "AI" },
  { slug: "whatsapp-debt-collection-saudi", title: "WhatsApp for Debt Collection in Saudi Arabia", excerpt: "With 90%+ WhatsApp penetration in Saudi Arabia, it's the most effective channel.", category: "Strategy", readTime: "5 min read", author: "Ahmed Al-Qahtani", date: "May 28, 2025", tag: "WhatsApp" },
];

const categoryColors: Record<string, string> = {
  Compliance: "bg-error/10 text-error border-error/20",
  Technology: "bg-primary/10 text-primary border-primary/20",
  Strategy: "bg-accent/10 text-accent border-accent/20",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label="Zero Due Blog" title="Insights on debt recovery" highlightedTitle="in the GCC" subtitle="Expert analysis, compliance updates, and strategy guides." className="mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <article className="glass rounded-2xl overflow-hidden h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-primary/20 via-surface to-accent/10 relative flex items-center justify-center">
                      <span className="text-5xl font-black text-primary/20">{post.tag}</span>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-lg border text-xs font-medium ${categoryColors[post.category] || "bg-primary/10 text-primary"}`}>{post.category}</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-text-primary font-bold text-lg mb-3 leading-snug">{post.title}</h2>
                      <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-text-muted text-xs pt-4 border-t border-border">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:text-primary transition-all" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
