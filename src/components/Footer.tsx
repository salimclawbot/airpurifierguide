import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-cyan-100 bg-cyan-50/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-slate-700 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-slate-900">{siteConfig.name}</h3>
          <p className="mt-2">{siteConfig.description}</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Guides</h3>
          <ul className="mt-2 space-y-1">
            <li><Link href="/guides/tmj-treatment-at-home" className="hover:text-cyan-700">TMJ Exercises</Link></li>
            <li><Link href="/guides/best-mouth-guard-for-tmj" className="hover:text-cyan-700">Mouth Guards</Link></li>
            <li><Link href="/guides/tmj-vs-bruxism" className="hover:text-cyan-700">TMJ vs Bruxism</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Contact</h3>
          <p className="mt-2">{siteConfig.email}</p>
        </div>
      </div>
      <div className="border-t border-cyan-100 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} {siteConfig.name}</div>
    </footer>
  );
}
