"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-violet-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-bold text-violet-800">ADHD Productivity Tips</Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/adhd-time-management-strategies" className="hover:text-violet-700">Time Management</Link>
          <Link href="/best-adhd-productivity-systems-2026" className="hover:text-violet-700">Productivity</Link>
          <Link href="/best-apps-for-adhd-adults-2026" className="hover:text-violet-700">Best Apps</Link>
          <Link href="/about" className="hover:text-violet-700">About</Link>
        </nav>
      </div>
    </header>
  );
}
