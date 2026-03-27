import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Guides",
  description: "All Jaw Pain Guide guides covering TMJ disorder, bruxism, mouth guards, and home relief.",
  alternates: { canonical: "/guides" },
};

export default async function GuidesPage() {
  const articles = await getAllArticles();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">All Guides</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          TMJ guides built for relief-first decision making.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Browse evidence-based guidance on TMJ disorder, bruxism, at-home exercises, and product comparisons.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {articles.map((article) => (
          <article key={article.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[5/3]">
              <Image src={article.image} alt={article.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">{article.publishedAt}</p>
              <h2 className="mt-3 text-xl font-bold text-slate-900">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{article.description}</p>
              <Link
                href={`/guides/${article.slug}`}
                className="mt-6 inline-flex rounded-full bg-teal-700 px-5 py-2.5 font-semibold text-white transition hover:bg-teal-800"
              >
                Read Guide
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
