import type { Metadata } from "next";
import Link from "next/link";
import { getAllSlugs, getArticle } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Air Purifier Report",
  description: "Expert guides on air purifiers, CADR ratings, HEPA filters, and improving indoor air quality for allergies, asthma, and home health.",
  alternates: { canonical: "https://airpurifierreport.com" },
};

export default async function HomePage() {
  const slugs = getAllSlugs();
  const articles = (await Promise.all(slugs.map((s) => getArticle(s)))).filter(Boolean) as any[];

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Air Purifier Report</h1>
      <p className="mb-8 text-xl text-slate-600">Expert guides on air purifiers, CADR ratings, HEPA filters, and improving indoor air quality.</p>
      <div className="mb-10 flex flex-wrap gap-3">
        <Link href="/cadr-rating-explained" className="rounded-lg bg-cyan-600 px-4 py-2 text-white">Start with CADR Guide</Link>
        <Link href="/true-hepa-vs-hepa-type" className="rounded-lg border border-slate-300 px-4 py-2">HEPA vs True HEPA</Link>
      </div>
      <div className="grid gap-6">
        {articles.map((a) => (
          <Link key={a.slug} href={`/${a.slug}`} className="block rounded-xl border border-slate-200 p-6 hover:shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">{a.primary_topic || "Guide"}</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">{a.title}</h2>
            <p className="mt-2 text-slate-600">{a.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}