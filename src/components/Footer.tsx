import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-slate-700 sm:px-6 md:grid-cols-3">
        <div><h3 className="font-semibold text-slate-900">Air Purifier Report</h3><p className="mt-2">Expert guides on air purifiers, CADR ratings, HEPA filters, and indoor air quality.</p></div>
        <div><h3 className="font-semibold text-slate-900">Guides</h3><ul className="mt-2 space-y-1"><li><Link href="/cadr-rating-explained">CADR Guide</Link></li><li><Link href="/dyson-purifier-vs-levoit">Comparisons</Link></li></ul></div>
        <div><h3 className="font-semibold text-slate-900">Info</h3><ul className="mt-2 space-y-1"><li><Link href="/about">About</Link></li><li><Link href="/privacy">Privacy Policy</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Air Purifier Report</div>
    </footer>
  );
}