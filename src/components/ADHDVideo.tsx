"use client";
import { useEffect, useMemo, useState } from "react";
const L=30,S=5;
const SETS:Record<string,{title:string;subtitle:string;icon:string;bg:string}[]>={
  systems:[
    {title:"5 ADHD Productivity Systems — What Actually Works",subtitle:"Ranked by ADHD coaches based on real-world completion rates",icon:"⚡",bg:"from-purple-800 via-violet-700 to-indigo-600"},
    {title:"#1 Time Boxing — 73% completion rate",subtitle:"Assign every task a specific time slot. No vague to-do lists.",icon:"📦",bg:"from-violet-700 via-purple-600 to-fuchsia-500"},
    {title:"#2 Pomodoro — Best for hyperfocus entry",subtitle:"25 min work, 5 min break. Removes task start barrier entirely.",icon:"🍅",bg:"from-purple-600 via-fuchsia-600 to-pink-500"},
    {title:"#3 Body Doubling — 84% focus improvement",subtitle:"Work alongside another person. In-person or virtual both work.",icon:"👥",bg:"from-indigo-700 via-violet-600 to-purple-500"},
    {title:"Key insight: ADHD brains need external structure",subtitle:"Willpower doesn't work. Environmental design does.",icon:"🧠",bg:"from-fuchsia-700 via-purple-600 to-indigo-600"},
    {title:"Full system breakdowns + implementation guides below",subtitle:"Start with one system this week — don't try to implement all 5",icon:"✅",bg:"from-purple-900 via-violet-800 to-slate-800"},
  ],
  timemanagement:[
    {title:"ADHD Time Management — What Neurotypical Advice Misses",subtitle:"Time blindness is neurological, not a character flaw",icon:"⏰",bg:"from-purple-800 via-violet-700 to-indigo-600"},
    {title:"Problem: ADHD brains only have 2 times — Now and Not Now",subtitle:"The future doesn't feel real until it's urgent. This is why deadlines help.",icon:"🧠",bg:"from-violet-700 via-purple-600 to-fuchsia-500"},
    {title:"Fix #1: Visual timers — make time visible",subtitle:"Analogue clocks and Time Timers work better than digital for ADHD",icon:"👁️",bg:"from-purple-600 via-indigo-600 to-blue-500"},
    {title:"Fix #2: Build in transition time between tasks",subtitle:"ADHD brains need 10-15 minutes between activities to avoid overwhelm",icon:"🔄",bg:"from-indigo-700 via-violet-600 to-purple-500"},
    {title:"Fix #3: External deadlines beat internal ones 9:1",subtitle:"Accountability partners, body doubling, public commitments all work",icon:"🤝",bg:"from-fuchsia-700 via-purple-600 to-violet-600"},
    {title:"8 proven strategies + the exact tools to use below",subtitle:"The goal isn't to manage time — it's to make time visible and external",icon:"✅",bg:"from-purple-900 via-violet-800 to-slate-800"},
  ],
  apps:[
    {title:"Best Apps for ADHD Adults 2026 — Expert Tested",subtitle:"Ranked by an ADHD psychologist based on real-world usage",icon:"📱",bg:"from-purple-800 via-violet-700 to-indigo-600"},
    {title:"#1 Focusmate — Body doubling at scale",subtitle:"Book 50-min accountability sessions with real people. Free tier available.",icon:"🥇",bg:"from-violet-700 via-purple-600 to-fuchsia-500"},
    {title:"#2 Tiimo — Visual ADHD planner",subtitle:"Icon-based scheduling designed specifically for ADHD brains",icon:"🎨",bg:"from-purple-600 via-fuchsia-600 to-pink-500"},
    {title:"#3 Forest — Gamified focus timer",subtitle:"Grow a virtual tree while you focus. Kill it if you pick up your phone.",icon:"🌳",bg:"from-indigo-700 via-violet-600 to-purple-500"},
    {title:"What to look for: visual + gamified + minimal UI",subtitle:"Complex apps fail ADHD users. Simple and satisfying wins every time.",icon:"🎯",bg:"from-fuchsia-700 via-purple-600 to-indigo-600"},
    {title:"Full top 10 list with pricing and download links below",subtitle:"Start with Focusmate — the single highest impact tool for ADHD focus",icon:"✅",bg:"from-purple-900 via-violet-800 to-slate-800"},
  ],
};
export default function ADHDVideo({variant}:{variant:"systems"|"timemanagement"|"apps"}){
  const slides=SETS[variant];
  const[e,setE]=useState(0);
  const[p,setP]=useState(true);
  useEffect(()=>{if(!p)return;const t=window.setInterval(()=>setE(v=>{const n=v+0.1;return n>=L?0:n;}),100);return()=>window.clearInterval(t);},[p]);
  const idx=Math.floor(e/S)%slides.length;
  const sl=useMemo(()=>slides[idx],[idx,slides]);
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
        <div className="absolute bottom-3 right-4 text-xs text-white/40 font-mono">adhdproductivitytips.com</div>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <button type="button" onClick={()=>setP(v=>!v)} className="rounded-md bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-purple-500">{p?"⏸ Pause":"▶ Play"}</button>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-700"><div className="h-full rounded-full bg-purple-400 transition-[width] duration-100" style={{width:`${(e/L)*100}%`}}/></div>
        <span className="text-xs text-slate-300 tabular-nums">{Math.floor(e)}s/30s</span>
      </div>
    </section>
  );
}