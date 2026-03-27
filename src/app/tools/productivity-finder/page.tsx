'use client';
import { useState } from 'react';
import Script from 'next/script';

const GA_ID = "G-CMC8LKTDMC";

const faqData = [
  {
    question: "What productivity system works best for ADHD?",
    answer:
      "There is no one-size-fits-all system. Hyperfocusers do best with time-limited sprints and body doubling. Time-blind types need external timers and visual schedules. Scattered starters need micro-tasks and friction reduction. Our quiz identifies your type and matches you with the right system.",
  },
  {
    question: "Why can't people with ADHD just use a regular to-do list?",
    answer:
      "Traditional to-do lists fail for ADHD because they have no time component. To an ADHD brain, \"do it later\" means \"do it never\" — the task has no urgency until it's a crisis. Time-blocking, with each task assigned a specific slot, is far more effective.",
  },
  {
    question: "What is body doubling for ADHD?",
    answer:
      "Body doubling means working alongside another person (in person or virtually). The presence of another human activates the ADHD brain's social accountability system, making it significantly easier to start and sustain tasks that feel impossible alone.",
  },
  {
    question: "How do I stop ADHD task paralysis?",
    answer:
      "Break the task into its smallest possible first step — opening a document counts. Reduce friction by setting everything up in advance. Use a 5-minute commitment (\"I'll just do 5 minutes\") — starting is the hardest part.",
  },
  {
    question: "Are there apps that help ADHD productivity?",
    answer:
      "Yes — tools like Focusmate (body doubling), Tiimo (visual scheduling), Forest (phone lock timer), and Notion (flexible organisation) are popular with ADHD users. The best app is the one you'll actually use consistently.",
  },
];

const questions = [
  { q: 'How do you experience time?', opts: ['I lose track constantly — hours vanish', 'I underestimate how long things take', 'Time feels manageable most days', 'I obsess over the clock'] },
  { q: 'When do you do your best work?', opts: ['Late at night — the world goes quiet', 'In unpredictable bursts — hard to plan', 'Morning with a clear routine', 'Depends entirely on my interest level'] },
  { q: 'How do deadlines affect you?', opts: ['I need the panic — nothing moves without it', 'I start late but somehow deliver', 'I work steadily towards them', 'I freeze when they approach'] },
  { q: 'What kills your focus most?', opts: ['Noise and visual clutter', 'My own wandering thoughts', 'Lack of urgency or interest', 'Too many tasks at once'] },
  { q: 'How do you feel about routines?', opts: ['I hate them — they bore me instantly', 'I want them but can\'t stick to them', 'I rely on them heavily', 'I need flexibility within structure'] },
  { q: 'When do you hyperfocus?', opts: ['Almost daily on things I love', 'Occasionally on new interesting things', 'Rarely — I stay fairly balanced', 'Only under extreme pressure'] },
  { q: 'How do you handle task switching?', opts: ['Extremely hard — I get stuck', 'Disruptive but manageable', 'Fairly easy with a moment to adjust', 'I prefer constant switching'] },
  { q: 'What\'s your relationship with mornings?', opts: ['Catastrophic — I\'m useless before noon', 'Slow start but functional', 'Best part of my day', 'Inconsistent — no pattern'] },
];

const types = {
  hyperfocuser: {
    label: 'The Hyperfocuser',
    tagline: 'Incredible in bursts. Needs guardrails, not grind.',
    description: 'Your brain delivers superhuman focus when locked onto something interesting — but ordinary tasks feel impossible. You\'re not lazy, you\'re wired for intensity.',
    strategies: ['Use body doubling (work alongside someone else — in person or virtual)', 'Set hard time limits with alarms — hyperfocus burns you out without them', 'Batch boring tasks into one "admin block" per week', 'Protect your peak focus windows ruthlessly — guard them like meetings', 'Use "temptation bundling" — pair dull tasks with something enjoyable'],
    avoid: 'Open-ended to-do lists with no time attached. They become infinite.',
  },
  timeblind: {
    label: 'The Time Blind',
    tagline: 'Smart, capable — time just doesn\'t work the way it should.',
    description: 'You\'re not disorganised — time literally doesn\'t feel real to you the way it does for others. The future feels abstract until it\'s a crisis.',
    strategies: ['Make time visible — analog clocks, time timers, countdowns everywhere', 'Time-block your calendar — everything gets a slot or it doesn\'t exist', 'Set departure alarms, not just arrival alarms', 'Use the "2-minute rule" — if it takes under 2 mins, do it now', 'Build "transition time" into every plan — add 50% to all time estimates'],
    avoid: 'Mental to-do lists. If it\'s not written with a time, it won\'t happen.',
  },
  scattered: {
    label: 'The Scattered Starter',
    tagline: 'Full of ideas. Getting started is the enemy.',
    description: 'You have more ideas than anyone in the room but starting tasks — especially boring or complex ones — requires enormous activation energy. Once moving, you\'re unstoppable.',
    strategies: ['Shrink tasks to absurd size — "open document" is a valid first step', 'Use a "runway list" — 3 micro-tasks ready to go at all times', 'The 5-minute rule: commit to just 5 minutes, then reassess', 'Reduce friction — lay out everything you need the night before', 'Reward starts, not completions — your brain needs wins early'],
    avoid: 'Waiting for motivation. Action creates motivation, not the other way around.',
  },
};

export default function ProductivityFinder() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<keyof typeof types | null>(null);
  const current = answers.length;

  function answer(i: number) {
    const next = [...answers, i];
    setAnswers(next);
    if (next.length === questions.length) {
      const h = next.filter(a => a === 0).length;
      const t = next.filter(a => a === 1).length;
      const s = next.filter(a => a === 2 || a === 3).length;
      if (h >= t && h >= s) setResult('hyperfocuser');
      else if (t >= s) setResult('timeblind');
      else setResult('scattered');
    }
  }

  function reset() { setAnswers([]); setResult(null); }

  const r = result ? types[result] : null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}</Script>

      <meta property="og:title" content="ADHD Productivity Style Finder — Discover Your Focus Type" />
      <meta property="og:description" content="Answer 8 questions to discover your ADHD productivity type and get a personalised system that works for your brain." />
      <meta property="og:image" content="https://adhdproductivitytips.com/images/productivity-finder-og.jpg" />
      <meta property="og:url" content="https://adhdproductivitytips.com/tools/productivity-finder" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ADHD Productivity Style Finder — Discover Your Focus Type" />
      <meta name="twitter:description" content="Answer 8 questions to discover your ADHD productivity type and get a personalised system that works for your brain." />
      <link rel="canonical" href="https://adhdproductivitytips.com/tools/productivity-finder" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity": faqData.map((f) => ({
          "@type":"Question","name":f.question,"acceptedAnswer":{"@type":"Answer","text":f.answer}
        }))
      })}}/>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"Article",
        "headline":"ADHD Productivity Style Finder — Discover Your Focus Type",
        "author":{"@type":"Person","name":"Lisa Park"},
        "datePublished":"2025-06-01",
        "dateModified":"2026-03-01",
        "publisher":{"@type":"Organization","name":"ADHD Productivity Tips","url":"https://adhdproductivitytips.com"},
        "description":"Answer 8 questions to discover your ADHD productivity type and get a personalised system that works for your brain."
      })}}/>

      <main className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">ADHD Productivity Style Finder</h1>

        <p className="text-gray-700 font-bold mb-4">
          Standard productivity advice doesn&apos;t work for ADHD brains. This free 8-question quiz identifies whether you&apos;re a Hyperfocuser, Time Blind, or Scattered Starter — then gives you a tailored system with strategies proven to work for your specific type.
        </p>

        <p className="text-sm text-gray-500 mb-2">
          By Lisa Park, ADHD Coach | Last updated March 2026
        </p>

        <p className="text-xs text-gray-400 mb-8">
          This page contains affiliate links. We may earn a commission at no extra cost to you.
        </p>

        {!result && current < questions.length && (
          <div>
            <div className="text-sm text-gray-500 mb-4">Question {current + 1} of {questions.length}</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div className="bg-indigo-500 h-2 rounded-full transition-all" style={{width:`${(current/questions.length)*100}%`}}/>
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-5">{questions[current].q}</p>
            <div className="space-y-3">
              {questions[current].opts.map((opt, i) => (
                <button key={i} onClick={() => answer(i)}
                  className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all text-gray-700">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {r && (
          <div>
            <div className="bg-indigo-50 border-2 border-indigo-300 rounded-2xl p-6 mb-6">
              <div className="text-2xl font-bold mb-2">{r.label}</div>
              <p className="text-indigo-700 font-semibold text-lg mb-3">{r.tagline}</p>
              <p className="text-gray-700">{r.description}</p>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Your Personalised Strategies</h2>
            <ul className="space-y-2 mb-6">
              {r.strategies.map((s, i) => (
                <li key={i} className="flex gap-3 text-gray-700 bg-white border border-gray-200 rounded-lg p-3">
                  <span className="text-green-500 font-bold">✓</span>{s}
                </li>
              ))}
            </ul>
            <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6">
              <span className="font-bold text-amber-800">Avoid: </span>
              <span className="text-amber-700">{r.avoid}</span>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://www.amazon.com/s?k=time+timer+visual+clock+adhd&tag=theforge05-20"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 inline-block"
              >
                Shop Visual Timers &rarr;
              </a>
              <a
                href="https://www.amazon.com/s?k=noise+cancelling+headphones+focus&tag=theforge05-20"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 inline-block"
              >
                Shop Focus Headphones &rarr;
              </a>
            </div>

            <button onClick={reset} className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">
              Retake Quiz
            </button>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">Explore More</h3>
              <div className="space-y-2">
                <a href="/best-adhd-productivity-apps" className="block text-indigo-600 hover:underline">&rarr; Best ADHD Productivity Apps (2026)</a>
                <a href="/adhd-time-management-tips" className="block text-indigo-600 hover:underline">&rarr; ADHD Time Management Tips That Actually Work</a>
                <a href="https://carpaltunnelguide.com/carpal-tunnel-exercises" className="block text-indigo-600 hover:underline">&rarr; Carpal Tunnel Exercises — Protect Your Wrists While Working</a>
              </div>
            </div>
          </div>
        )}

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((f, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{f.question}</h3>
                <p className="text-gray-600">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
