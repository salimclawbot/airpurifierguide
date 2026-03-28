import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { siteConfig } from "@/lib/site-config";

export interface Article {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  htmlContent: string;
  date: string;
  dateModified: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  author: string;
  image: string;
  faqSchema?: Record<string, unknown> | null;
  articleSchema?: Record<string, unknown> | null;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

function toSlug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}

function extractSchemaField(raw: string, fieldName: string): string | null {
  // Single-quoted on one line
  const match = raw.match(new RegExp(`^${fieldName}:\\s*'([\\s\\S]*?)'\\s*$`, "m"));
  if (match) return match[1].replace(/''/g, "'");
  // Double-quoted on one line
  const matchDQ = raw.match(new RegExp(`^${fieldName}:\\s*"([\\s\\S]*?)"\\s*$`, "m"));
  if (matchDQ) return matchDQ[1];
  // Block scalar (| or >)
  const matchBlock = raw.match(new RegExp(`^${fieldName}:\\s*[|>]-?\\n((?:[ \\t]+.*\\n)*)`, "m"));
  if (matchBlock) return matchBlock[1].replace(/^[ \t]+/gm, "").trim();
  return null;
}

function stripSchemaFields(raw: string): string {
  // Strip both single-line and multi-line block scalar schema fields
  return raw
    .replace(/^faq_schema:\s*[|>]-?\n(?:[ \t]+.*\n)*/gm, "faq_schema: null\n")
    .replace(/^faq_schema:.*$/m, "faq_schema: null")
    .replace(/^article_schema:\s*[|>]-?\n(?:[ \t]+.*\n)*/gm, "article_schema: null\n")
    .replace(/^article_schema:.*$/m, "article_schema: null");
}

function parseJsonField(value: string | null): Record<string, unknown> | null {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function processContent(raw: string): string {
  let processed = raw;
  // Strip heading ID syntax {#...}
  processed = processed.replace(/\{#[^}]+\}/g, "");
  processed = processed.trimStart().replace(/^#\s+.*\n+/, "");
  processed = processed.replace(/\[INTERNAL:\s*([\w-]+)\]\((.*?)\)/g, "[$2](/$1)");
  processed = processed.replace(/\[INTERNAL:\s*([\w-]+)\]/g, "[$1](/$1)");
  return processed;
}

function resolveImagePath(image: string | undefined): string {
  if (!image) return siteConfig.ogImage;
  return image;
}

export async function getArticle(slug: string): Promise<Article | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const faqSchemaStr = extractSchemaField(raw, "faq_schema");
  const articleSchemaStr = extractSchemaField(raw, "article_schema");
  const safeRaw = stripSchemaFields(raw);
  const parsed = matter(safeRaw);
  const data = parsed.data as Record<string, unknown>;

  const content = processContent(parsed.content);
  const result = await remark().use(remarkGfm).use(html, { sanitize: false }).process(content);

  const title = (data.title as string) || slug;
  const description = (data.meta_description as string) || (data.description as string) || `${siteConfig.name} guide.`;
  const rawAuthor = data.author;
  const author = typeof rawAuthor === "object" && rawAuthor !== null && "name" in rawAuthor
    ? String((rawAuthor as Record<string, unknown>).name)
    : String(rawAuthor || siteConfig.author);
  const rawDate = data.datePublished ?? data.date;
  const rawModified = data.dateModified;
  const date = rawDate instanceof Date ? rawDate.toISOString().split("T")[0] : String(rawDate || "2026-03-10");
  const dateModified = rawModified instanceof Date ? rawModified.toISOString().split("T")[0] : String(rawModified || date);
  const category = "Guide";
  const image = resolveImagePath(data.image as string | undefined);

  let htmlContent = result.toString();

  htmlContent = htmlContent.replace(/<(h[2-4])>(.*?)<\/\1>/g, (match, tag, text) => {
    const cleanText = text.replace(/<[^>]+>/g, "");
    const id = toSlug(cleanText);
    return `<${tag} id="${id}">${text}</${tag}>`;
  });

  const excerptMatch = parsed.content.match(/\*\*(.*?)\*\*/);
  const excerpt = excerptMatch ? excerptMatch[1].trim() : description;

  return {
    slug,
    title,
    description,
    excerpt,
    content,
    htmlContent,
    date,
    dateModified,
    publishedAt: date,
    updatedAt: dateModified,
    category,
    author,
    image,
    faqSchema: parseJsonField(faqSchemaStr),
    articleSchema: parseJsonField(articleSchemaStr),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getAllArticles(): Promise<Article[]> {
  const slugs = getAllSlugs();
  const articles = await Promise.all(slugs.map((slug) => getArticle(slug)));
  return articles.filter(Boolean) as Article[];
}
