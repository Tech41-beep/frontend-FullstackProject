import React from 'react';
import companyImage from '../images/Tech.png';
import unProfile from '../images/image.png';
const Company = () => {
  const coreValues = [
    {
      // Target Icon SVG
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21m-9-7.5A7.5 7.5 0 1 0 19.5 12 7.5 7.5 0 0 0 12 4.5ZM12 9.75A2.25 2.25 0 1 0 14.25 12 2.25 2.25 0 0 0 12 9.75Z" />
        </svg>
      ),
      title: "Impact Driven",
      description: "We don't believe in busywork. Every internship is designed around real milestones that shift company metrics and build genuine engineering portfolios."
    },
    {
      // Globe Icon SVG
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.967 8.967 0 0 1-2.312-6.022c0-1.652.195-3.233.552-4.736A15.998 15.998 0 0 1 12 3m0 18a8.967 8.967 0 0 0 2.312-6.022c0-1.652-.195-3.233-.552-4.736A15.998 15.998 0 0 0 12 3M3.75 12h16.5" />
        </svg>
      ),
      title: "Global Ecosystem",
      description: "Talent has no borders. Our remote-first framework connects ambitious interns from around the world with forward-thinking tech ecosystems."
    },
    {
      // Shield Check Icon SVG
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
      title: "Vetted Excellence",
      description: "We bridge the trust gap. Every corporate partner on our interface is fully verified, ensuring a structured, safe, and highly professional work environment."
    }
  ];

  const leadership = [

    { name: "kimtech", role: "Full-stack Developer", image: companyImage },
    { name: "Chan Vibol", role: "Backend Engineer", image: unProfile },
    { name: "Serey Rathanak", role: "database engineer", image: unProfile },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* --- HERO / INTRODUCTION --- */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            {/* Building Icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
            </svg>
            Inside VisualInternship
          </span>
          
          <h1 className="mt-8 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-b from-white via-slate-100 to-slate-500 bg-clip-text text-transparent leading-[1.1]">
            We are redefining early career infrastructure.
          </h1>
          
          <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed font-light">
            VisualInternship was founded to completely destroy old-fashioned, broken internship workflows. We give ambitious builders a direct pipeline into high-growth teams through authentic workspace environments.
          </p>
        </div>
      </section>

      {/* --- IMPACT METRICS --- */}
      <section className="border-y border-white/5 bg-slate-900/30 backdrop-blur-sm py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 tracking-tight">2026</div>
            <div className="mt-2 text-sm text-slate-400 font-medium uppercase tracking-wider">Established & Scaling</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">45+</div>
            <div className="mt-2 text-sm text-slate-400 font-medium uppercase tracking-wider">Countries Represented</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">94%</div>
            <div className="mt-2 text-sm text-slate-400 font-medium uppercase tracking-wider">Employment Conversion</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">$4.2M</div>
            <div className="mt-2 text-sm text-slate-400 font-medium uppercase tracking-wider">Intern Stipends Distributed</div>
          </div>
        </div>
      </section>

      {/* --- CORE PHILOSOPHY / VALUES --- */}
      <section className="max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Our Blueprint</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Built on transparent foundations.
            </h2>
            <p className="mt-4 text-slate-400 font-light leading-relaxed">
              We stand against empty resumés. We optimize for pure practical application, high performance metrics, and cultural harmony.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-6 shadow-2xl transition-all hover:border-white/10 hover:from-white/[0.05]"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP / TEAM SECTION --- */}
      <section className="bg-slate-900/20 border-t border-white/5 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">The Architects</p>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">Meet our leadership</h2>
            <p className="mt-4 text-slate-400 font-light text-base sm:text-lg">
              A distributed team of engineers, educators, and enterprise workflow specialists dedicated to building career access infrastructure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {leadership.map((member, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-white/5 p-2 bg-slate-950 transition-all duration-300 group-hover:border-emerald-500/40 shadow-xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-full filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white tracking-tight">{member.name}</h3>
                <p className="text-sm text-emerald-400/90 font-medium mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 text-center relative">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight"> Ready to deploy your talent?</h2>
          <p className="mt-6 text-slate-400 font-light text-base sm:text-lg leading-relaxed">
            Whether you are an engineering lead looking to scale mentorship operations or an intern ready to write production code, we have a workspace built for you.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/10 hover:bg-emerald-400 active:scale-98 transition-all"
            >
              Partner With Us 
              {/* Arrow Up Right Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            <a 
              href="#about" 
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-98"
            >
              Learn Strategy
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Company;