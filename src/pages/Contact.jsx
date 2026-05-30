import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-300 relative overflow-hidden flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Structural Light Flares */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 relative z-10">
        
        {/* --- LEFT COLUMN: BRAND INFO & METADATA --- */}
        <div className="flex flex-col justify-between space-y-12 lg:space-y-0 py-2">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              Connect With Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Let's build meaningful placement pathways.
            </h1>
            <p className="text-slate-400 font-light text-base sm:text-lg leading-relaxed max-w-xl">
              Have questions about setting up your custom engineering sandbox, syncing university portals, or scaling stipend payouts? Drop a line and our partner success desk will get in touch.
            </p>
          </div>

          {/* Core Support Meta Lines */}
          <div className="space-y-6 border-t border-white/5 pt-10 max-w-md">
            {/* Email Block */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400 border border-white/5 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">General Inquiry</h4>
                <a href="mailto:support@visualinternship.com" className="text-sm text-emerald-400 font-light hover:underline mt-0.5 block">support@visualinternship.com</a>
              </div>
            </div>

            {/* Support Line */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400 border border-white/5 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9Z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Corporate Support Desk</h4>
                <p className="text-sm text-slate-400 font-light mt-0.5">+1 (555) 012-3456</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: SPACIOUS INTERACTIVE FORM --- */}
        <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/40 p-8 sm:p-12 shadow-2xl shadow-black/40 backdrop-blur-md relative">
          
          {submitted && (
            <div className="absolute inset-4 rounded-[2rem] bg-slate-900/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
              <p className="text-sm text-slate-400 font-light max-w-xs mt-2">
                Thank you! An operations lead will review your tracking request and follow up within 1 business day.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2" htmlFor="name">
                  Full name
                </label>
                <input 
                  id="name"
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-slate-500 focus:border-emerald-500 focus:bg-slate-900/60 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all text-base"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2" htmlFor="email">
                  Work email
                </label>
                <input 
                  id="email"
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-slate-500 focus:border-emerald-500 focus:bg-slate-900/60 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all text-base"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2" htmlFor="company">
                Company / Institution <span className="text-slate-500 font-light">(Optional)</span>
              </label>
              <input 
                id="company"
                type="text" 
                value={formState.company}
                onChange={(e) => setFormState({...formState, company: e.target.value})}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-slate-500 focus:border-emerald-500 focus:bg-slate-900/60 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all text-base"
                placeholder="Acme Corp"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2" htmlFor="message">
                How can we help you?
              </label>
              <textarea 
                id="message"
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-slate-500 focus:border-emerald-500 focus:bg-slate-900/60 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all text-base resize-none"
                placeholder="Tell us about your team size, target workflows, or internship timeline..."
                required
              />
            </div>

            <button 
              type="submit" 
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/10 hover:bg-emerald-400 active:scale-[0.99] transition-all mt-2"
            >
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;