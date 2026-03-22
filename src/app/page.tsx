import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "ADHD Productivity Tips — Focus Guides & Tools 2026" },
  description: "Expert-reviewed productivity guides for adults with ADHD. Practical systems, tools, and strategies — tested and backed by research.",
  openGraph: {
    title: "ADHD Productivity Tips",
    description: "Expert-reviewed productivity guides for adults with ADHD. Practical systems, tools, and strategies — tested and backed by research.",
    url: "https://adhdproductivitytips.com",
    type: "website",
    images: [{ url: "https://adhdproductivitytips.com/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADHD Productivity Tips",
    description: "Expert-reviewed productivity guides for adults with ADHD. Practical systems, tools, and strategies — tested and backed by research.",
    images: ["https://adhdproductivitytips.com/og-image.jpg"],
  },
  alternates: { canonical: "https://adhdproductivitytips.com" },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-violet-50 via-white to-purple-50 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">Updated for 2026</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            ADHD Productivity.<br className="hidden sm:block"/>Focus Strategies.<br className="hidden sm:block"/>Life Systems That Work.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Expert-reviewed productivity guides for adults with ADHD. Practical systems, tools, and strategies — tested and backed by research.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="inline-flex items-center justify-center bg-violet-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-violet-700 transition-colors" href="/best-adhd-productivity-systems-2026">Best ADHD Systems 2026 →</Link>
            <Link className="inline-flex items-center justify-center bg-white text-violet-700 border-2 border-violet-200 px-7 py-3.5 rounded-xl font-semibold hover:border-violet-400 transition-colors" href="/best-apps-for-adhd-adults-2026">Best Apps for ADHD</Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-violet-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><div className="text-3xl font-extrabold text-violet-600">1 in 20</div><div className="mt-1 text-sm text-gray-600">Adults have ADHD</div></div>
          <div><div className="text-3xl font-extrabold text-violet-600">40%</div><div className="mt-1 text-sm text-gray-600">More productive with right systems</div></div>
          <div><div className="text-3xl font-extrabold text-violet-600">200+</div><div className="mt-1 text-sm text-gray-600">Tools & apps reviewed</div></div>
          <div><div className="text-3xl font-extrabold text-violet-600">10+</div><div className="mt-1 text-sm text-gray-600">Expert-backed strategies</div></div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Expert Guides</h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">Every guide is reviewed by experts and backed by research.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Link href="/adhd-time-management-strategies" className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-violet-300 hover:shadow-xl transition-all duration-200">
              <div className="h-48 overflow-hidden bg-violet-50 flex items-center justify-center text-6xl">⏱️</div>
              <div className="p-6">
                <span className="inline-block text-xs font-bold text-violet-600 bg-violet-50 px-2 py-1 rounded mb-3">Editor&apos;s Pick</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors leading-snug">ADHD Time Management Strategies (2026)</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">Proven time management systems designed specifically for the ADHD brain — not generic productivity advice.</p>
                <span className="inline-flex items-center mt-4 text-sm font-semibold text-violet-600">Read guide →</span>
              </div>
            </Link>
          <Link href="/best-adhd-productivity-systems-2026" className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-violet-300 hover:shadow-xl transition-all duration-200">
              <div className="h-48 overflow-hidden bg-violet-50 flex items-center justify-center text-6xl">🧩</div>
              <div className="p-6">
                <span className="inline-block text-xs font-bold text-violet-600 bg-violet-50 px-2 py-1 rounded mb-3">Most Popular</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors leading-snug">Best ADHD Productivity Systems (2026)</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">GTD, time blocking, body doubling and more — ranked by how well they work for ADHD adults.</p>
                <span className="inline-flex items-center mt-4 text-sm font-semibold text-violet-600">Read guide →</span>
              </div>
            </Link>
          <Link href="/best-apps-for-adhd-adults-2026" className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-violet-300 hover:shadow-xl transition-all duration-200">
              <div className="h-48 overflow-hidden bg-violet-50 flex items-center justify-center text-6xl">📱</div>
              <div className="p-6">
                <span className="inline-block text-xs font-bold text-violet-600 bg-violet-50 px-2 py-1 rounded mb-3">Top Picks</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors leading-snug">Best Apps for ADHD Adults (2026)</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">The best focus, task management and habit apps tested by adults with ADHD.</p>
                <span className="inline-flex items-center mt-4 text-sm font-semibold text-violet-600">Read guide →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Standard Productivity Advice Fails ADHD Brains</h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">ADHD brains work differently — dopamine regulation, working memory, and time blindness all require specific strategies. Generic productivity advice often makes things worse.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm"><div className="text-3xl mb-3">🎯</div><h3 className="font-bold text-gray-900 mb-2">Focus Systems</h3><p className="text-sm text-gray-600">Task management built for ADHD — not neurotypical brains</p></div>
              <div className="bg-white rounded-xl p-6 shadow-sm"><div className="text-3xl mb-3">⏰</div><h3 className="font-bold text-gray-900 mb-2">Time Awareness</h3><p className="text-sm text-gray-600">Beat time blindness with proven external cues and timers</p></div>
              <div className="bg-white rounded-xl p-6 shadow-sm"><div className="text-3xl mb-3">🏆</div><h3 className="font-bold text-gray-900 mb-2">Reward Loops</h3><p className="text-sm text-gray-600">Leverage dopamine-driven motivation to build lasting habits</p></div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <p className="text-xs text-gray-400"><strong>Disclaimer:</strong> Content on adhdproductivitytips.com is for informational purposes only. ADHD management should involve qualified healthcare professionals.</p>
      </div>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {"@type":"Question","name":"What are the best productivity strategies for ADHD adults?","acceptedAnswer":{"@type":"Answer","text":"The most effective ADHD productivity strategies include time-blocking with visible timers, body doubling (working alongside others), breaking tasks into 25-minute Pomodoro sessions, and externalising your schedule with physical planners."}},
            {"@type":"Question","name":"What apps help most with ADHD focus?","acceptedAnswer":{"@type":"Answer","text":"The top apps for ADHD focus in 2026 are Focusmate (body doubling), Tiimo (visual scheduling), Reclaim.ai (smart calendar blocking), and Forest (gamified focus sessions). All have free tiers."}},
            {"@type":"Question","name":"How do you manage time blindness with ADHD?","acceptedAnswer":{"@type":"Answer","text":"Managing time blindness with ADHD requires making time visible: use analogue clocks, visible countdown timers (Time Timer is excellent), set alarms 15 minutes before transitions, and estimate tasks will take 2-3× longer than you think."}}
          ]
        })}}
      />
      </main>
  );
}
