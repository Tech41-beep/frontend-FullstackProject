import React from 'react';

const HeroSection = ({ 
  onLoginClick, 
  stats = [
    { value: '10k+', label: 'Active Interns' },
    { value: '500+', label: 'Company Partners' },
    { value: '95%', label: 'Match Success' }
  ], 
  highlights = [
    { title: 'Remote Work', text: 'Gain authentic professional experience working inside structured global environments completely from home.' },
    { title: 'Verified Profiles', text: 'Stand out directly to top-tier hiring managers looking specifically for qualified talent matching your skill profiles.' },
    { title: 'Dynamic Coaching', text: 'Receive structural milestones, continuous industry updates, and career advice directly from specialized guides.' }
  ] 
}) => {
  return (
    <main className="bg-slate-950 min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="text-white">
          <span className="inline-flex items-center rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100">
            Modern internships, clear outcomes, better company matches
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Build a branded internship experience with a clean, modern interface.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            This landing page blends Tailwind and a custom layout to showcase a company section, about information, contact details, and a login entry point.
          </p>
          
          {/* Replaced Bootstrap CTA with Pure Tailwind */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a 
              href="#about" 
              className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md hover:bg-emerald-400 transition-all active:scale-95"
            >
              Explore About Us
            </a>
            <button 
              type="button" 
              onClick={onLoginClick} 
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-95"
            >
              Open Login
            </button>
          </div>

          {/* Stats Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 backdrop-blur">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Promo Panel */}
        <div className="flex flex-col justify-center rounded-[2rem] border border-white/15 bg-white p-6 shadow-xl sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Login</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Hidden until you click Login</h2>
          <p className="mt-2 text-sm text-slate-600">The login form now appears in a secure modal window, keeping the core landing interface clean and highly converting.</p>
        </div>
      </section>

      {/* --- COMPANY SECTION (HIGHLIGHTS) --- */}
      <section id="company" className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
              <div className="mb-4 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                {item.title}
              </div>
              <p className="text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">About Us</p>
            <h2 className="mt-3 text-3xl font-bold">A polished internship brand with practical navigation.</h2>
            <p className="mt-4 text-slate-300 leading-8 text-sm sm:text-base">
              The page is intentionally built with structural balance. It provides a cohesive customer experience using an original layout framework, stronger visual contrast, and a professional workflow representation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/5 p-5 border border-white/5">
              <h3 className="font-semibold text-white">Company</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">Trusted placements, modern workflows, and a clear business identity.</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5 border border-white/5">
              <h3 className="font-semibold text-white">Support</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">Fast support response times for active interns, employers, and partnership teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 pb-24">
        <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Contact Us</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Talk to our team</h2>
            <p className="mt-4 max-w-2xl text-slate-600 leading-8">
              Use this section for company inquiries, partnership questions, or account support. The layout is ready for you to replace placeholder content with real contact details.
            </p>
          </div>
          <div className="flex items-center rounded-3xl bg-slate-950 p-6 text-white border border-slate-800">
            <div className="space-y-4 text-sm text-slate-300 w-full">
              <div>
                <span className="block font-semibold text-white mb-0.5">Email:</span> 
                <a href="mailto:support@visualinternship.com" className="text-emerald-400 hover:underline">support@visualinternship.com</a>
              </div>
              <div>
                <span className="block font-semibold text-white mb-0.5">Phone:</span> 
                <a href="tel:+15550123456" className="hover:text-white transition-colors">+1 (555) 012-3456</a>
              </div>
              <div>
                <span className="block font-semibold text-white mb-0.5">Office:</span> 
                <span>Remote-first global team</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;