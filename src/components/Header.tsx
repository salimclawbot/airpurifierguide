"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-bold text-slate-900">Air Purifier Report</Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/">Home</Link>
          <Link href="/cadr-rating-explained">CADR Guide</Link>
          <Link href="/dyson-purifier-vs-levoit">Comparisons</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}