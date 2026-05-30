import React from 'react';

const About = () => {
  const pillars = [
    {
      // Vision Icon (Eye SVG)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
      title: "Our Vision",
      description: "To create a borderless ecosystem where practical professional training is integrated instantly into academic journeys, eliminating the 'no experience, no job' loop forever."
    },
    {
      // Mission Icon (Compass SVG)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 9.152c.582.448 1.148.89 1.676 1.345m-1.676-1.345c-.528-.407-1.074-.82-1.636-1.242m3.312 2.587c-.422.562-.835 1.108-1.242 1.636m1.242-1.636c.449-.528.89-1.094 1.345-1.676M11.93 11.93l-1.241 3.313c-.158.423-.553.687-.978.687a1.002 1.002 0 0 1-.787-.384c-.26-.328-.31-.777-.128-1.155l1.313-2.731m1.821.27l2.732-1.314c.377-.181.827-.13 1.154.128.318.25.462.66.384 1.075l-.687 4.167a1 1 0 0 1-.978.812c-.425 0-.82-.264-.978-.687l-1.24-3.313Zm-5.32 5.32a9 9 0 1 1 12.728 0 9 9 0 0 1-12.728 0Z" />
        </svg>
      ),
      title: "Our Mission",
      description: "We design high-fidelity virtual simulations and live corporate workflows that equip ambitious students with production-grade engineering, design, and operational portfolios."
    },
    {
      // Culture Icon (Heart/Shield Check Alternative)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      ),
      title: "Our Core Culture",
      description: "We value asynchronous autonomy, radically transparent code reviews, data-driven execution, and cross-cultural networking above traditional legacy hierarchies."
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* --- HERO / STORY BANNER --- */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Dynamic Abstract Ambient Background Light */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-300 uppercase">
            {/* Sparkle Inline SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-emerald-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l-.813-5.096L3 15.091l5.091-.813L9 9.181l.813 5.096L15 15.091l-5.187.813ZM18.187 6.181 17.5 9l-.688-2.819L14 5.5l2.813-.688L17.5 2l.688 2.813L21 5.5l-2.813.688Z" />
            </svg>
            Shaping Global Careers
          </span>
          
          <h1 className="mt-8 text-4xl font-black tracking-tight sm:text-6xl bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent leading-[1.15]">
            Bridging the gap between theory and industry reality.
          </h1>
          
          <p className="mt-8 text-lg sm:text-xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
            Traditional education prepares you for exams; VisualInternship prepares you for production. Founded in response to outdated corporate pathways, we specialize in building highly interactive, structured, remote-first global work pipelines.
          </p>
        </div>
      </section>

      {/* --- THE CORE PROBLEM & OUR SOLUTION --- */}
      <section className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Narrative Text */}
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Why We Exist</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The internship system is fundamentally broken. We rebuilt it.
            </h2>
            <p className="text-slate-400 font-light leading-8">
              Every year, millions of students are rejected due to lack of historical corporate experience. Concurrently, high-growth technology companies lose thousands of hours searching for talent that understands agile development practices.
            </p>
            <p className="text-slate-400 font-light leading-8">
              VisualInternship steps into this gap. By building standardized sandbox environments, running real sprint timelines, and providing structured mentorship parameters, we allow candidates to validate their skill-sets in environments that replicate actual company engineering floors.
            </p>
          </div>

          {/* Interactive Feature Visual Block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-8 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                {/* Users Inline SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">For Students</h3>
              <p className="mt-2 text-sm text-slate-400 font-light leading-relaxed">
                Skip the generic coffee runs. Write production-level modules, merge pull requests, and deploy codebases under real architecture leads.
              </p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-8 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                {/* Briefcase Inline SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75H4.5a.75.75 0 0 1-.75-.75v-4.25m16.5 0a3 3 0 0 0-3-3H6.75a3 3 0 0 0-3 3m16.5 0V9a2.25 2.25 0 0 0-2.25-2.25H16.5V4.5L14.25 2.25h-4.5L7.5 4.5v2.25H5.25A2.25 2.25 0 0 0 3 9v5.15M16.5 6.75H7.5v-2.25h9v2.25Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">For Companies</h3>
              <p className="mt-2 text-sm text-slate-400 font-light leading-relaxed">
                Onboard pre-vetted interns who already understand Jira, version control, modern documentation pipelines, and team dynamics.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- THREE PILLARS (VISION, MISSION, VALUE) --- */}
      <section className="bg-slate-900/30 border-y border-white/5 py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex flex-col space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 shadow-inner">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">{pillar.title}</h3>
                <p className="text-sm text-slate-400 font-light leading-7">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SPACIOUS STATEMENT BOTTOM --- */}
      <section className="max-w-5xl mx-auto px-4 py-32 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">Our Promise</p>
        <h2 className="mt-6 text-2xl sm:text-4xl font-medium text-slate-200 italic leading-relaxed">
          "We measure our success not by the number of certificates we issue, but by the number of offer letters our candidates sign."
        </h2>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-slate-700" />
          <span className="text-sm font-semibold tracking-wider text-slate-400 uppercase">The VisualInternship Core Team</span>
          <div className="h-px w-8 bg-slate-700" />
        </div>
      </section>

    </div>
  );
};

export default About;