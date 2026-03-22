import { Metadata } from "next";
import { notFound } from "next/navigation";
import ADHDVideo from "@/components/ADHDVideo";
import { getArticle, getAllSlugs } from "@/lib/articles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

interface PageProps { params: { slug: string } }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) return { title: "Not Found" };
  return {
    title: { absolute: article.title },
    description: article.description,
    alternates: { canonical: `https://adhdproductivitytips.com/${params.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://adhdproductivitytips.com/${params.slug}`,
      images: [{ url: `https://adhdproductivitytips.com/og-image.jpg`, width: 1200, height: 630 }],
      type: "article",
      siteName: "ADHD Productivity Tips",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [`https://adhdproductivitytips.com/og-image.jpg`],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticle(params.slug);
  if (!article) notFound();

  const articleSchema = article.articleSchema ?? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Person", name: article.author || "Dr. Marcus Webb" },
    publisher: {
      "@type": "Organization",
      name: "ADHD Productivity Tips",
      logo: { "@type": "ImageObject", url: `https://adhdproductivitytips.com/icon.svg` },
    },
    datePublished: article.date,
    dateModified: article.dateModified ?? article.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://adhdproductivitytips.com/${article.slug}` },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {article.faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(article.faqSchema) }}
        />
      )}
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-2">
          {article.category}
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-lg text-gray-600 mb-4">{article.description}</p>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>By <strong className="text-gray-700">{article.author || "Dr. Marcus Webb"}</strong></span>
          <span>·</span>
          <time dateTime={article.date}>{new Date(article.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}</time>
        </div>
      </header>

      {params.slug === "best-adhd-productivity-systems-2026" && (
        <div className="mt-8"><h2 className="text-2xl font-bold text-gray-900 mb-4">📽️ 30-Second Summary</h2><ADHDVideo variant="systems" /></div>
      )}
      {params.slug === "adhd-time-management-strategies" && (
        <div className="mt-8"><h2 className="text-2xl font-bold text-gray-900 mb-4">📽️ 30-Second Summary</h2><ADHDVideo variant="timemanagement" /></div>
      )}
      {params.slug === "best-apps-for-adhd-adults-2026" && (
        <div className="mt-8"><h2 className="text-2xl font-bold text-gray-900 mb-4">📽️ 30-Second Summary</h2><ADHDVideo variant="apps" /></div>
      )}

      <div className="prose prose-slate max-w-none mt-8">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]]}
          components={{
            img: ({ src, alt }) => (
              <figure className="my-6">
                <img src={src} alt={alt || ""} className="rounded-lg shadow-md w-full" loading="lazy" />
                {alt && <figcaption className="text-center text-sm text-gray-500 mt-2">{alt}</figcaption>}
              </figure>
            ),
          }}
        >
          {article.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
