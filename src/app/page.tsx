import Link from "next/link";
import { Metadata } from "next";
import { featuredGuides, siteConfig } from "@/lib/site-config";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name}: Expert TMJ Relief Guides (2026)` },
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: `${siteConfig.name}: Expert TMJ Relief Guides (2026)`,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
};

export default async function HomePage() {
  const allArticles = await getAllArticles();
  return (
    <>
      <section className="bg-gradient-to-br from-cyan-50 via-white to-emerald-50 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-cyan-100 text-cyan-700 text-sm font-medium px-3 py-1 rounded-full mb-4">Updated for 2026</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Jaw pain relief advice you can actually use
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Evidence-based guides for TMJ exercises, mouth guards, bruxism, and daily habits that reduce flare-ups.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guides/tmj-treatment-at-home" className="inline-flex items-center justify-center bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-800 transition-colors">Start with Exercises</Link>
            <Link href="/guides/best-mouth-guard-for-tmj" className="inline-flex items-center justify-center bg-white text-cyan-700 border-2 border-cyan-200 px-6 py-3 rounded-lg font-semibold hover:border-cyan-400 transition-colors">Compare Mouth Guards</Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGuides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-cyan-300 hover:shadow-lg transition-all duration-200">
                <span className="inline-block text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded mb-3">{guide.category}</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">{guide.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allArticles.map((article) => (
              <Link key={article.slug} href={`/guides/${article.slug}`} className="group flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:border-cyan-300 hover:shadow-lg transition-all duration-200">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">{article.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
