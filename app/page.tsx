import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Animated Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <header className="max-w-4xl mx-auto pt-32 pb-16 px-6">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-fade-in">
            Available for Associate Roles 🚀
          </div>
          <h1 className="text-6xl font-black text-white tracking-tight mb-4">
            Nanduni <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Kaveesha.</span>
          </h1>
          <p className="text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
            I architect <span className="text-white font-medium">high-concurrency backends</span> and 
            <span className="text-white font-medium"> automated systems</span> where code meets infrastructure.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://github.com/Senadeera-NK" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25">
              Explore GitHub
            </a>
            <a href="#projects" className="bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 px-8 py-3 rounded-full font-bold transition-all">
              View Work
            </a>
          </div>
        </header>

        {/* Tech Stack - "The Marquee" feel */}
        <section className="py-12 border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mb-8 text-center md:text-left">The Technical Ecosystem</h2>
            <div className="flex flex-wrap gap-3">
              {['Java', 'Spring Boot', 'Next.js', 'PostgreSQL', 'AWS', 'Redis', 'Docker', 'GitHub Actions'].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-medium hover:border-blue-500/50 hover:text-blue-400 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-4xl mx-auto py-24 px-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">Strategic Projects</h2>
            <div className="h-[1px] flex-grow bg-slate-800"></div>
          </div>
          
          <div className="grid gap-8">
            {/* FlashGuard */}
            <div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">🛡️ FlashGuard</h3>
                <span className="text-xs font-mono text-blue-500 bg-blue-500/10 px-2 py-1 rounded">System Design</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Enterprise security suite. Leveraged <span className="text-slate-200">Redis-based distributed locking</span> to maintain data integrity across 10k+ concurrent simulated requests.
              </p>
              <div className="flex gap-4 text-sm font-mono text-slate-500">
                <span>Spring Boot</span>
                <span>AWS S3</span>
                <span>Redis</span>
              </div>
            </div>

            {/* CollabChat */}
            <div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">💬 CollabChat</h3>
                <span className="text-xs font-mono text-indigo-500 bg-indigo-500/10 px-2 py-1 rounded">Real-time</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Real-time communication engine using <span className="text-slate-200">Socket.io</span> for bi-directional event syncing and persistent message storage.
              </p>
              <div className="flex gap-4 text-sm font-mono text-slate-500">
                <span>Next.js</span>
                <span>Socket.io</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto py-20 px-6 text-center border-t border-slate-800/50">
          <p className="text-slate-500 text-sm">
            Designed for impact. Built with <span className="text-blue-500">Next.js 15</span>. 
            Deployed via <span className="text-blue-500">GitHub Actions</span>.
          </p>
        </footer>
      </div>
    </main>
  );
}