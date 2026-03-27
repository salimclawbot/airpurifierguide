"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="border-b border-cyan-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-bold text-cyan-800">{siteConfig.name}</Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/guides/tmj-treatment-at-home" className="hover:text-cyan-700">Exercises</Link>
          <Link href="/guides/best-mouth-guard-for-tmj" className="hover:text-cyan-700">Mouth Guards</Link>
          <Link href="/guides/tmj-vs-bruxism" className="hover:text-cyan-700">TMJ vs Bruxism</Link>
          <Link href="/about" className="hover:text-cyan-700">About</Link>
        </nav>
      </div>
    </header>
  );
}
