import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto pt-20 pb-10 px-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Nanduni Kaveesha
        </h1>
        <p className="text-2xl text-blue-600 font-medium mb-6">
          Associate Software Engineer | Cloud & DevOps Enthusiast
        </p>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          BSc (Hons) Computer Science graduate focused on building <strong>system-aware</strong> applications. 
          Specializing in Java/Spring Boot backends, high-concurrency systems, and automated CI/CD pipelines.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="https://github.com/Senadeera-NK" className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition">GitHub</a>
          <a href="#projects" className="border border-slate-300 px-6 py-2 rounded-lg font-medium hover:bg-slate-100 transition">View Projects</a>
        </div>
      </header>

      {/* Skills Section */}
      <section className="bg-white border-y border-slate-200 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-8">Technical Ecosystem</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold text-slate-800">Languages</h3>
              <p className="text-slate-600">Java, Python, JS/TS</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Backend</h3>
              <p className="text-slate-600">Spring Boot, Node.js</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Infrastructure</h3>
              <p className="text-slate-600">AWS, Docker, K8s (Learning)</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">DevOps</h3>
              <p className="text-slate-600">GitHub Actions, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10">Strategic Projects</h2>
        
        <div className="space-y-12">
          {/* FlashGuard */}
          <div className="group">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">🛡️ FlashGuard</h3>
            <p className="text-slate-500 mb-2">Spring Boot, Redis, AWS, GitHub Actions</p>
            <p className="text-slate-600 mb-4">
              A high-concurrency monitoring suite. Implemented Redis-based distributed locking to handle ~10k simulated requests with 100% data consistency.
            </p>
            <hr className="border-slate-100" />
          </div>

          {/* CollabChat */}
          <div className="group">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">💬 CollabChat</h3>
            <p className="text-slate-500 mb-2">Next.js, Socket.io, PostgreSQL</p>
            <p className="text-slate-600 mb-4">
              Real-time collaboration engine featuring event-driven architecture and persistent message stores for seamless team workflow.
            </p>
            <hr className="border-slate-100" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto py-10 px-6 text-center text-slate-400 text-sm">
        <p>© 2026 Nanduni Kaveesha • Built with Next.js & GitHub Actions</p>
      </footer>
    </main>
  );
}