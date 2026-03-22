import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-violet-100 bg-violet-50/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-slate-700 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-slate-900">ADHD Productivity Tips</h3>
          <p className="mt-2">Practical ADHD productivity guides, focus strategies, and tool reviews for adults.</p>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Guides</h3>
          <ul className="mt-2 space-y-1">
            <li><Link href="/adhd-time-management-strategies" className="hover:text-violet-700">Time Management</Link></li>
            <li><Link href="/best-adhd-productivity-systems-2026" className="hover:text-violet-700">Productivity Systems</Link></li>
            <li><Link href="/best-apps-for-adhd-adults-2026" className="hover:text-violet-700">Best Apps</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Contact</h3>
          <p className="mt-2">hello@adhdproductivitytips.com</p>
          <ul className="mt-2 space-y-1">
            <li><Link href="/privacy" className="hover:text-violet-700">Privacy Policy</Link></li>
            <li><Link href="/affiliate-disclosure" className="hover:text-violet-700">Affiliate Disclosure</Link></li>
            <li><Link href="/about" className="hover:text-violet-700">About</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-violet-100 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} ADHD Productivity Tips</div>
    </footer>
  );
}
