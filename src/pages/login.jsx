import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_32%),linear-gradient(180deg,_#07111f_0%,_#0b1727_42%,_#0f172a_100%)] px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center">
        <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white shadow-2xl backdrop-blur-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Login</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Welcome back to VisualInternship</h1>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
              Sign in to access your dashboard, internship updates, and company tools from a dedicated full-page route.
            </p>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="mt-8 inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to home
            </button>
          </section>

          <section className="rounded-[2rem] border border-white/15 bg-white p-6 shadow-2xl sm:p-8 lg:max-w-2xl lg:justify-self-end">
            <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Login Form</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Welcome back</h2>
            <p className="mt-2 text-sm text-slate-600">Sign in to access your company dashboard and internship updates.</p>
          </div>
          <button 
            type="button" 
            aria-label="Close login form" 
            onClick={() => navigate('/')} 
            className="rounded-full border border-slate-200 px-3 py-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 text-xl font-light"
          >
            ×
          </button>
        </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="email">
              Email address
            </label>
            <input 
              id="email" 
              type="email" 
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-base" 
              placeholder="name@example.com" 
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="password">
              Password
            </label>
            <input 
              id="password" 
              type="password" 
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-base" 
              placeholder="Enter your password" 
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600 cursor-pointer select-none">
              <input 
                type="checkbox" 
                className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500/30 accent-emerald-600" 
              />
              Remember me
            </label>
            <a href="#contact" className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Submit Action (Converted from Bootstrap's btn-success) */}
          <button 
            type="submit" 
            className="w-full rounded-xl bg-emerald-500 py-3 text-base font-semibold text-slate-950 shadow-md hover:bg-emerald-400 active:scale-[0.98] transition-all"
          >
            Login
          </button>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">New here?</p>
            <p className="mt-1 text-sm text-slate-600">Create an account to access internship updates and company tools.</p>
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="mt-4 w-full rounded-xl border border-emerald-300 bg-white px-4 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
            >
              Create account
            </button>
          </div>
            </form>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Need help?</p>
              <p className="mt-1 text-sm text-slate-600">Use the home page contact section to speak with the support team.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Login;