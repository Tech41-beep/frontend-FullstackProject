import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16 text-white">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">404</p>
        <h1 className="mt-4 text-4xl font-black sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-base leading-8 text-slate-300">
          The path you opened does not exist. Return home or go directly to the login page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Go home
          </button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Open login
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
