"use client";

import { useState } from "react";
import Script from "next/script";

const GA_ID = "G-6XKVL2R0FD";

const faqData = [
  {
    question: "What triggers tinnitus to get worse?",
    answer:
      "Common tinnitus triggers include caffeine, stress, poor sleep, loud noise exposure, alcohol, jaw tension, certain medications and high blood pressure. Use our trigger identifier tool to pinpoint which factors may be worsening your tinnitus.",
  },
  {
    question: "Can tinnitus be cured?",
    answer:
      "There is currently no universal cure for tinnitus, but many people achieve significant relief through trigger management, sound therapy, CBT, and treating underlying causes like earwax, TMJ, or blood pressure issues. Many people experience substantial improvement or complete habituation.",
  },
  {
    question: "What is pulsatile tinnitus?",
    answer:
      "Pulsatile tinnitus is a rhythmic thumping or whooshing sound that often matches your heartbeat. Unlike regular tinnitus, it can have a vascular cause and should be assessed by a doctor promptly.",
  },
  {
    question: "Does stress make tinnitus worse?",
    answer:
      "Yes — stress is one of the most common tinnitus amplifiers. The nervous system becomes hypervigilant under stress, increasing your brain's focus on the tinnitus signal. Daily relaxation techniques like diaphragmatic breathing and progressive muscle relaxation can significantly reduce perceived volume.",
  },
  {
    question: "What is the best sound therapy for tinnitus?",
    answer:
      "White noise, pink noise, and nature sounds (rain, ocean waves) are the most effective for masking tinnitus. A bedside white noise machine helps with sleep, while daytime apps like myNoise or ReSound Relief provide portable relief. The goal is partial masking, not complete covering.",
  },
];

const triggers = [
  {
    id: "noise",
    label: "Loud noise exposure (concerts, machinery, headphones)",
    tip: "Use ear protection in loud environments. Keep headphone volume under 60% and take audio breaks every 60 minutes. Consider noise-cancelling headphones to reduce the volume you need.",
  },
  {
    id: "caffeine",
    label: "High caffeine intake (coffee, energy drinks, tea)",
    tip: "Gradually reduce caffeine over 2-3 weeks rather than stopping suddenly. Switch to half-caff or herbal tea. Many people notice tinnitus reduction within 2-4 weeks of cutting back.",
  },
  {
    id: "stress",
    label: "High stress or anxiety levels",
    tip: "Stress amplifies tinnitus through the nervous system. Daily diaphragmatic breathing (10 minutes), progressive muscle relaxation, or mindfulness meditation can significantly reduce perceived tinnitus volume.",
  },
  {
    id: "sleep",
    label: "Poor or insufficient sleep",
    tip: "Sleep deprivation lowers your brain's ability to suppress tinnitus signals. Aim for 7-9 hours. Use a white noise machine or fan to mask tinnitus at bedtime. Avoid screens 1 hour before sleep.",
  },
  {
    id: "medication",
    label: "Medications (aspirin, NSAIDs, some antibiotics)",
    tip: "Over 200 medications list tinnitus as a side effect. Speak to your doctor before stopping any medication — they may be able to switch you to an alternative that doesn't affect tinnitus.",
  },
  {
    id: "alcohol",
    label: "Alcohol consumption",
    tip: "Alcohol dilates blood vessels and increases blood flow to the inner ear, temporarily worsening tinnitus in many people. Reducing alcohol often produces noticeable improvement within weeks.",
  },
  {
    id: "jaw",
    label: "Jaw tension, teeth clenching, or TMJ issues",
    tip: "Somatic tinnitus linked to jaw tension is very common and highly treatable. See a dentist about a night guard if you clench. Jaw stretches and physiotherapy for TMJ can significantly reduce tinnitus.",
  },
  {
    id: "bp",
    label: "High blood pressure or cardiovascular issues",
    tip: "Pulsatile tinnitus (rhythmic whooshing/thumping) is often linked to blood pressure. Have your BP checked. Managing blood pressure through diet, exercise and medication often reduces this type of tinnitus.",
  },
  {
    id: "ear",
    label: "Recent ear infections or earwax buildup",
    tip: "Earwax impaction is a common and easily treatable cause of tinnitus. See your GP for microsuction or ear irrigation. Avoid cotton buds — they push wax deeper and can worsen the problem.",
  },
  {
    id: "neck",
    label: "Neck tension or poor posture",
    tip: "Tension in the neck and upper back can affect the auditory nerves. Regular neck stretches, posture correction, and physiotherapy or massage often help with cervicogenic tinnitus.",
  },
];

const characterOptions = ["High-pitched ringing", "Low hum or drone", "Pulsing / rhythmic", "Static / hissing"];
const timingOptions = ["Morning", "Evening / night", "Quiet environments", "After noise exposure"];

export default function TriggerIdentifierPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [character, setCharacter] = useState("");
  const [timing, setTiming] = useState("");
  const [showResults, setShowResults] = useState(false);

  const toggle = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  const selectedTriggers = triggers.filter((t) => selected.has(t.id));
  const isPulsatile = character === "Pulsing / rhythmic";

  const submit = () => {
    if (selected.size === 0) return;
    setShowResults(true);
  };

  const reset = () => {
    setSelected(new Set());
    setCharacter("");
    setTiming("");
    setShowResults(false);
  };

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}</Script>

      <meta property="og:title" content="Tinnitus Trigger Identifier — Find What's Making Your Tinnitus Worse" />
      <meta property="og:description" content="Identify your tinnitus triggers and get personalised management tips from an audiologist. Free tool with instant results." />
      <meta property="og:image" content="https://tinnitusguides.com/images/trigger-identifier-og.jpg" />
      <meta property="og:url" content="https://tinnitusguides.com/tools/trigger-identifier" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tinnitus Trigger Identifier — Find What's Making Your Tinnitus Worse" />
      <meta name="twitter:description" content="Identify your tinnitus triggers and get personalised management tips from an audiologist. Free tool with instant results." />
      <link rel="canonical" href="https://tinnitusguides.com/tools/trigger-identifier" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Tinnitus Trigger Identifier — Find What's Making Your Tinnitus Worse",
            author: { "@type": "Person", name: "Dr. Helen Brooks" },
            datePublished: "2025-06-01",
            dateModified: "2026-03-01",
            publisher: {
              "@type": "Organization",
              name: "Tinnitus Guides",
              url: "https://tinnitusguides.com",
            },
            description: "Identify your tinnitus triggers and get personalised management tips from an audiologist.",
          }),
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
            Tinnitus Trigger Identifier
          </h1>

          <p className="text-center text-gray-700 font-bold mb-4 max-w-xl mx-auto">
            Tinnitus has many potential triggers and identifying yours is the first step to managing it effectively. Select your lifestyle factors, describe your tinnitus sound, and get personalised management tips from an audiologist — all in under two minutes.
          </p>

          <p className="text-center text-sm text-gray-500 mb-2">
            By Dr. Helen Brooks, Audiologist | Last updated March 2026
          </p>

          <p className="text-center text-xs text-gray-400 mb-8">
            This page contains affiliate links. We may earn a commission at no extra cost to you.
          </p>

          {!showResults ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Which of these apply to you? <span className="text-gray-400 font-normal text-sm">(select all)</span>
                </h2>
                <div className="space-y-2">
                  {triggers.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => toggle(t.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${
                        selected.has(t.id)
                          ? "bg-teal-50 border-teal-500 text-teal-800"
                          : "bg-white border-gray-200 text-gray-700 hover:border-teal-300"
                      }`}
                    >
                      {selected.has(t.id) ? "✓ " : ""}{t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">What does your tinnitus sound like?</h2>
                <div className="grid grid-cols-2 gap-2">
                  {characterOptions.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCharacter(c)}
                      className={`py-3 px-4 rounded-lg border text-sm font-medium transition-colors ${
                        character === c
                          ? "bg-teal-50 border-teal-500 text-teal-800"
                          : "bg-white border-gray-200 text-gray-700 hover:border-teal-300"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">When is it worst?</h2>
                <div className="grid grid-cols-2 gap-2">
                  {timingOptions.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTiming(t)}
                      className={`py-3 px-4 rounded-lg border text-sm font-medium transition-colors ${
                        timing === t
                          ? "bg-teal-50 border-teal-500 text-teal-800"
                          : "bg-white border-gray-200 text-gray-700 hover:border-teal-300"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={submit}
                disabled={selected.size === 0}
                className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Identify My Triggers
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {isPulsatile && (
                <div className="bg-red-50 border border-red-300 rounded-xl p-5">
                  <h2 className="font-bold text-red-800 text-lg mb-2">Important — Pulsatile Tinnitus</h2>
                  <p className="text-red-700 text-sm">
                    You described a pulsing or rhythmic sound. Pulsatile tinnitus can indicate a vascular condition and
                    should be evaluated by a doctor. Please book an appointment with your GP or ENT specialist as a
                    priority.
                  </p>
                </div>
              )}

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Your Top Triggers &amp; Management Tips</h2>
                <p className="text-gray-500 text-sm mb-6">
                  {selectedTriggers.length} trigger{selectedTriggers.length !== 1 ? "s" : ""} identified
                  {character && ` — ${character.toLowerCase()}`}
                  {timing && ` — worst ${timing.toLowerCase()}`}
                </p>

                <div className="space-y-4">
                  {selectedTriggers.map((t, i) => (
                    <div key={t.id} className="bg-teal-50 border border-teal-200 rounded-lg p-5">
                      <h3 className="font-semibold text-teal-900 mb-2">
                        {i + 1}. {t.label}
                      </h3>
                      <p className="text-sm text-gray-700">{t.tip}</p>
                    </div>
                  ))}
                </div>

                {timing === "Quiet environments" && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                    <p className="text-sm text-blue-800">
                      <strong>Tip for quiet environments:</strong> Sound therapy (white noise, nature sounds, or low
                      background music) significantly reduces tinnitus distress by giving your brain an alternative sound
                      to focus on. Try a free app like myNoise or the ReSound Relief app.
                    </p>
                  </div>
                )}

                {timing === "Evening / night" && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                    <p className="text-sm text-blue-800">
                      <strong>Tip for evening/night tinnitus:</strong> Use a bedside sound machine or pillow speaker
                      with gentle nature sounds. Establish a wind-down routine to reduce stress before bed. Avoid
                      caffeine after 2pm and screens for 1 hour before sleep.
                    </p>
                  </div>
                )}

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-yellow-800">
                    <strong>When to see a doctor:</strong> If your tinnitus is pulsatile, only in one ear, accompanied
                    by hearing loss or dizziness, or suddenly worsens — see your GP or an ENT specialist.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href="https://www.amazon.com/s?k=white+noise+machine+tinnitus+sleep&tag=theforge05-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 inline-block"
                  >
                    Shop White Noise Machines &rarr;
                  </a>
                  <a
                    href="https://www.amazon.com/s?k=high+fidelity+earplugs+musicians&tag=theforge05-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 inline-block"
                  >
                    Shop High-Fidelity Earplugs &rarr;
                  </a>
                </div>

                <button
                  onClick={reset}
                  className="w-full mt-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
                >
                  Start Over
                </button>
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

          <section className="mt-12 bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h2>
            <div className="space-y-3">
              <a href="/best-tinnitus-sound-therapy-apps" className="block text-teal-600 hover:text-teal-800 hover:underline font-medium">
                Best Tinnitus Sound Therapy Apps in 2026 &rarr;
              </a>
              <a href="/tinnitus-management-guide" className="block text-teal-600 hover:text-teal-800 hover:underline font-medium">
                Complete Tinnitus Management Guide &rarr;
              </a>
              <a href="https://adhdproductivitytips.com/adhd-time-management-tips" className="block text-teal-600 hover:text-teal-800 hover:underline font-medium">
                ADHD Time Management Tips — Boost Focus &amp; Productivity &rarr;
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
