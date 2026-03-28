"use client";
import { useEffect, useMemo, useState } from "react";
const L=30,S=5;
const SETS:Record<string,{title:string;subtitle:string;icon:string;bg:string}[]>={
  beginners:[
    {title:"How to Start Homeschooling in 2026",subtitle:"A 10-year homeschool educator's complete beginner roadmap",icon:"🏠",bg:"from-green-700 via-emerald-600 to-teal-500"},
    {title:"Step 1: Know your state's legal requirements",subtitle:"Most states just need written notification — it takes 15 minutes",icon:"📋",bg:"from-emerald-700 via-green-600 to-lime-500"},
    {title:"Step 2: Choose your homeschool style first",subtitle:"Classical, Charlotte Mason, Unschooling, Eclectic — pick before curriculum",icon:"🎓",bg:"from-green-600 via-teal-600 to-cyan-500"},
    {title:"Step 3: Start with a 4-subject core",subtitle:"Maths, English, Science, History. Everything else is enrichment.",icon:"📚",bg:"from-teal-700 via-emerald-600 to-green-500"},
    {title:"Step 4: Join a co-op in your first year",subtitle:"Solves socialisation AND gives you a community of experienced homeschoolers",icon:"👨‍👩‍👧",bg:"from-lime-700 via-green-600 to-emerald-500"},
    {title:"Full legal requirements, curriculum guide and schedule below",subtitle:"Everything you need to start confidently — even if you have no teaching experience",icon:"✅",bg:"from-green-900 via-emerald-800 to-slate-800"},
  ],
  curriculum:[
    {title:"Best Homeschool Curriculum 2026 — Expert Picks",subtitle:"Reviewed by a 10-year homeschool educator across 200+ families",icon:"📖",bg:"from-green-700 via-emerald-600 to-teal-500"},
    {title:"Classical: Best for structured learners K-12",subtitle:"Grammar, Logic, Rhetoric stages. Strong on writing and critical thinking.",icon:"🏛️",bg:"from-emerald-700 via-green-600 to-lime-500"},
    {title:"Charlotte Mason: Best for curious, creative kids",subtitle:"Living books, nature journaling, short lessons. No textbooks.",icon:"🌿",bg:"from-teal-600 via-cyan-500 to-blue-400"},
    {title:"Unschooling: Best for self-directed learners",subtitle:"Child-led learning. Highest parental confidence required. Highest long-term results.",icon:"🌱",bg:"from-lime-700 via-green-600 to-teal-500"},
    {title:"Eclectic: What most successful families actually do",subtitle:"Mix what works. Classical maths + Charlotte Mason reading + unit studies.",icon:"🎯",bg:"from-green-600 via-emerald-600 to-teal-500"},
    {title:"Grade-by-grade curriculum recommendations below",subtitle:"Plus cost comparison, where to buy and what families with your style use",icon:"✅",bg:"from-green-900 via-emerald-800 to-slate-800"},
  ],
  schedule:[
    {title:"Homeschool Daily Schedule — What Actually Works",subtitle:"Proven templates from 200+ homeschool families across 10 years",icon:"📅",bg:"from-green-700 via-emerald-600 to-teal-500"},
    {title:"The 4-hour day is enough for most grades",subtitle:"K-6 needs 2-4 hours. 7-12 needs 4-6. More time ≠ better outcomes.",icon:"⏰",bg:"from-emerald-700 via-green-600 to-lime-500"},
    {title:"Morning time first — poetry, read-aloud, music",subtitle:"15-30 minutes of togetherness before individual work sets the tone",icon:"☀️",bg:"from-teal-600 via-cyan-500 to-blue-400"},
    {title:"Maths and writing before noon",subtitle:"Hardest subjects when focus is highest. Everything else can go afternoon.",icon:"✏️",bg:"from-green-600 via-emerald-600 to-teal-500"},
    {title:"Build in a weekly 'delight-directed' afternoon",subtitle:"One afternoon per week on interests only. Prevents burnout in both parent and child.",icon:"🎨",bg:"from-lime-700 via-green-600 to-emerald-500"},
    {title:"4 schedule templates for different family situations below",subtitle:"Traditional, loop scheduling, block scheduling and unschooled — with daily time breakdowns",icon:"✅",bg:"from-green-900 via-emerald-800 to-slate-800"},
  ],
};
export default function HomeschoolVideo({variant}:{variant:"beginners"|"curriculum"|"schedule"}){
  const slides=SETS[variant];
  const[e,setE]=useState(0);const[p,setP]=useState(true);
  useEffect(()=>{if(!p)return;const t=window.setInterval(()=>setE(v=>{const n=v+0.1;return n>=L?0:n;}),100);return()=>window.clearInterval(t);},[p]);
  const idx=Math.floor(e/S)%slides.length;const sl=useMemo(()=>slides[idx],[idx,slides]);
  return(
    <section className="my-8 rounded-xl border border-slate-200 bg-slate-950 p-3 sm:p-4 shadow-lg">
      <div className="aspect-video w-full overflow-hidden rounded-lg border border-slate-800 relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${sl.bg} transition-colors duration-700`}/>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_45%)]"/>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <div className="mb-4 text-5xl">{sl.icon}</div>
          <p className="text-xl sm:text-3xl font-extrabold leading-tight max-w-2xl">{sl.title}</p>
          <p className="mt-3 text-sm sm:text-base text-white/90 max-w-xl">{sl.subtitle}</p>
        </div>
        <div className="absolute bottom-3 right-4 text-xs text-white/40 font-mono">planhomeschooling.com</div>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <button type="button" onClick={()=>setP(v=>!v)} className="rounded-md bg-green-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-green-600">{p?"⏸ Pause":"▶ Play"}</button>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-700"><div className="h-full rounded-full bg-green-400 transition-[width] duration-100" style={{width:`${(e/L)*100}%`}}/></div>
        <span className="text-xs text-slate-300 tabular-nums">{Math.floor(e)}s/30s</span>
      </div>
    </section>
  );
}
