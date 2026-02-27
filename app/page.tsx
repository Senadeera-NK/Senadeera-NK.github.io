import React from 'react';

export default function Home() {
  const username = "Senadeera-NK";

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        {/* Navigation/Header Details */}
        <nav className="flex justify-between items-center py-8 border-b border-slate-800/50 mb-16">
          <span className="font-mono text-blue-400 font-bold tracking-tighter text-xl">NK.DEV</span>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
            <a href="mailto:naksathaudage2000@gmail.com" className="hover:text-white transition">Email</a>
            <a href="https://linkedin.com" className="hover:text-white transition">LinkedIn</a>
            <a href={`https://github.com/${username}`} className="hover:text-white transition">GitHub</a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Associate Software Engineer
          </div>
          <h1 className="text-7xl font-black text-white tracking-tight mb-6">
            Nanduni <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Kaveesha.</span>
          </h1>
          <p className="text-2xl text-slate-400 font-light max-w-3xl leading-relaxed mb-8">
            BSc (Hons) Computer Science Graduate with a focus on <span className="text-white">high-concurrency backends</span> and <span className="text-white">DevOps automation</span>. 
            Currently architecting system-aware solutions in Sri Lanka.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-mono">
            <span>📍 Kalutara, SL</span>
            <span>🎓 GPA: 3.45/4.0</span>
            <span>📞 +94 778593462</span>
          </div>
        </header>

        {/* GitHub Statistics Section */}
{/* GitHub Statistics Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xl font-bold text-white whitespace-nowrap">Engine Activity</h2>
            <div className="h-[1px] w-full bg-slate-800"></div>
          </div>
          <div className="grid gap-6">
            {/* THE GREEN SQUARES CHART */}
            <div className="w-full p-4 rounded-xl border border-slate-800 bg-[#0f172a] shadow-2xl overflow-hidden">
                <p className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-widest text-center md:text-left">Contribution Pipeline</p>
                <img 
                  src={`https://ghchart.rshah.org/4070ff/${username}`} 
                  alt="GitHub Contribution Grid" 
                  className="w-full h-auto brightness-110 contrast-125"
                />
            </div>
            
            {/* OVERALL STATS CARD */}
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&bg_color=0f172a&hide_border=true`} 
              alt="GitHub Stats" 
              className="w-full rounded-xl border border-slate-800 shadow-2xl"
            />
          </div>
        </section>

        {/* Experience & Education Grid */}
        <div className="grid md:grid-cols-3 gap-16 mb-32">
          <div className="md:col-span-1">
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-8">Technical Arsenal</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold mb-3 text-sm italic">Languages</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Java (Spring Boot 3), Python (FastAPI), TypeScript, SQL, C#</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-3 text-sm italic">Infrastructure</h3>
                <p className="text-slate-400 text-sm leading-relaxed">AWS (Lambda/S3), Docker, Redis, PostgreSQL, GitHub Actions CI/CD</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-12">
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-2">Professional Journey</h2>
            
            <div className="relative pl-8 border-l border-slate-800 group">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1 group-hover:scale-150 transition"></div>
              <h3 className="text-white font-bold">QA & RPA Developer</h3>
              <p className="text-slate-500 text-sm mb-2">LOLC Technologies | 2021 — 2022</p>
              <p className="text-slate-400 text-sm">Optimized banking systems using UIPath, reducing manual testing by 40%. Handled bug tracking with Jira and MongoDB.</p>
            </div>

            <div className="relative pl-8 border-l border-slate-800 group">
              <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[6.5px] top-1 group-hover:bg-blue-500 transition"></div>
              <h3 className="text-white font-bold">Technical Intern (AI & QA)</h3>
              <p className="text-slate-500 text-sm mb-2">PROMPTUS Dubai | Apr — Jun 2025</p>
              <p className="text-slate-400 text-sm">Executed automated UI testing for AI-driven regressions within an Agile/Scrum environment.</p>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <section id="projects" className="mb-32">
          <h2 className="text-3xl font-black text-white mb-12">Strategic Builds</h2>
          <div className="grid gap-6">
            {[
              {
                title: "🛡️ FLASHGUARD",
                desc: "High-concurrency monitoring suite. Implemented Redis-based distributed locking to handle 10k+ requests with CodeQL security pipelines.",
                tags: ["Spring Boot 3", "Redis", "AWS", "GitHub Actions"],
                date: "Jan 2026"
              },
              {
                title: "💬 COLLABCHAT",
                desc: "Role-based Socket.io messaging system. Architected pipelines to parse raw messages into structured tasks for real-time tracking.",
                tags: ["Next.js", "Express", "PostgreSQL", "Socket.io"],
                date: "Dec 2025"
              },
              {
                title: "🧠 LEARNVAULT",
                desc: "AI-driven Q&A generator using Gemini 2.5 and FastAPI. Automated document classification and PDF processing.",
                tags: ["FastAPI", "Gemini AI", "Supabase"],
                date: "Nov 2025"
              }
            ].map((p, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800/50 hover:bg-slate-900/60 hover:border-blue-500/30 transition-all group">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400">{p.title}</h3>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">{p.date}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.desc}</p>
                <div className="flex gap-3">
                  {p.tags.map(t => <span key={t} className="text-[10px] font-mono px-2 py-1 bg-slate-800 text-slate-400 rounded tracking-wider">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-10 border-t border-slate-900">
          <p className="text-slate-600 text-xs font-mono tracking-widest uppercase">
            Designed for Performance • Powered by GitHub Actions
          </p>
        </footer>
      </div>
    </main>
  );
}