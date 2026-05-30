import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ROLES = [
  {
    value: 'student',
    label: 'Student',
    icon: '🎓',
    desc: 'Looking for internships or apprenticeships',
    fields: ['university', 'graduation_year'],
  },
  {
    value: 'company',
    label: 'Company',
    icon: '🏢',
    desc: 'Posting internships and hiring interns',
    fields: ['company_name', 'industry'],
  },
  {
    value: 'user',
    label: 'User',
    icon: '👤',
    desc: 'General access to platform features',
    fields: [],
  },
  {
    value: 'admin',
    label: 'Admin',
    icon: '🛡️',
    desc: 'Platform administration — requires approval',
    fields: ['admin_code'],
  },
];

const ROLE_EXTRA_FIELDS = {
  student: [
    { id: 'university', label: 'University / College', placeholder: 'e.g. MIT, Stanford…', type: 'text' },
    { id: 'graduation_year', label: 'Graduation Year', placeholder: 'e.g. 2026', type: 'number' },
  ],
  company: [
    { id: 'company_name', label: 'Company Name', placeholder: 'e.g. Acme Corp', type: 'text' },
    { id: 'industry', label: 'Industry', placeholder: 'e.g. Technology, Finance…', type: 'text' },
  ],
  admin: [
    { id: 'admin_code', label: 'Admin Access Code', placeholder: 'Enter the code provided to you', type: 'password' },
  ],
  user: [],
};

const Signup = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('');
  const [step, setStep] = useState(1); // 1 = role pick, 2 = details form
  const [form, setForm] = useState({
    name: '', email: '', password: '', confirm_password: '',
    university: '', graduation_year: '', company_name: '', industry: '', admin_code: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' });
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    if (!form.password) newErrors.password = 'Password is required';
    else if (form.password.length < 8) newErrors.password = 'Minimum 8 characters';
    if (form.password !== form.confirm_password) newErrors.confirm_password = 'Passwords do not match';

    const extras = ROLE_EXTRA_FIELDS[selectedRole] || [];
    extras.forEach(({ id, label }) => {
      if (!form[id]?.trim()) newErrors[id] = `${label} is required`;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep2()) return;
    // TODO: connect to your auth/register logic
    console.log('Register attempt:', { ...form, role: selectedRole });
  };

  const extraFields = ROLE_EXTRA_FIELDS[selectedRole] || [];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_32%),linear-gradient(180deg,_#07111f_0%,_#0b1727_42%,_#0f172a_100%)] px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center">
        <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Left hero panel */}
          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white shadow-2xl backdrop-blur-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Sign Up</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Join VisualInternship today</h1>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
              Create your account and pick your role — student, company, or general user. Admins require a special access code.
            </p>

            {/* Role overview cards */}
            <div className="mt-8 space-y-3">
              {ROLES.map((role) => (
                <div key={role.value} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-lg">{role.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{role.label}</p>
                    <p className="text-xs text-slate-400">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="mt-8 inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to home
            </button>
          </section>

          {/* Right form panel */}
          <section className="rounded-[2rem] border border-white/15 bg-white p-6 shadow-2xl sm:p-8 lg:max-w-2xl lg:justify-self-end w-full">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
                  {step === 1 ? 'Step 1 of 2 — Choose Role' : 'Step 2 of 2 — Your Details'}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  {step === 1 ? 'Who are you?' : 'Create your account'}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {step === 1
                    ? 'Pick the account type that matches your use case.'
                    : `Registering as: ${ROLES.find(r => r.value === selectedRole)?.icon} ${ROLES.find(r => r.value === selectedRole)?.label}`
                  }
                </p>
              </div>
              <button
                type="button"
                aria-label="Close signup form"
                onClick={() => navigate('/')}
                className="rounded-full border border-slate-200 px-3 py-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 text-xl font-light"
              >
                ×
              </button>
            </div>

            {/* Step 1: Role picker */}
            {step === 1 && (
              <div className="space-y-3">
                {ROLES.map((role) => (
                  <button
                    key={role.value}
                    type="button"
                    onClick={() => setSelectedRole(role.value)}
                    className={`w-full flex items-center gap-4 rounded-xl border-2 px-4 py-4 text-left transition-all
                      ${selectedRole === role.value
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-slate-200 bg-slate-50 hover:border-emerald-300 hover:bg-emerald-50/40'
                      }`}
                  >
                    <span className="text-2xl leading-none">{role.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-bold ${selectedRole === role.value ? 'text-emerald-700' : 'text-slate-800'}`}>
                        {role.label}
                      </p>
                      <p className={`mt-0.5 text-xs ${selectedRole === role.value ? 'text-emerald-600' : 'text-slate-500'}`}>
                        {role.desc}
                      </p>
                    </div>
                    <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedRole === role.value ? 'border-emerald-500 bg-emerald-500' : 'border-slate-300'
                    }`}>
                      {selectedRole === role.value && (
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                          <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </button>
                ))}

                <button
                  type="button"
                  disabled={!selectedRole}
                  onClick={() => setStep(2)}
                  className="mt-2 w-full rounded-xl bg-emerald-500 py-3 text-base font-semibold text-slate-950 shadow-md hover:bg-emerald-400 active:scale-[0.98] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue as {selectedRole ? ROLES.find(r => r.value === selectedRole)?.label : '…'} →
                </button>
              </div>
            )}

            {/* Step 2: Details form */}
            {step === 2 && (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                {/* Role badge */}
                <div className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 px-3 py-2">
                  <span className="text-base">{ROLES.find(r => r.value === selectedRole)?.icon}</span>
                  <span className="text-sm font-semibold text-emerald-700">{ROLES.find(r => r.value === selectedRole)?.label}</span>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="ml-auto text-xs text-emerald-600 hover:text-emerald-800 underline"
                  >
                    Change
                  </button>
                </div>

                {/* Common fields */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="name">Full name</label>
                  <input
                    id="name" type="text" value={form.name} onChange={handleChange}
                    className={`w-full rounded-xl border px-4 py-3 text-slate-900 placeholder-slate-400 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all text-base
                      ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20'}`}
                    placeholder="Jane Smith"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="email">Email address</label>
                  <input
                    id="email" type="email" value={form.email} onChange={handleChange}
                    className={`w-full rounded-xl border px-4 py-3 text-slate-900 placeholder-slate-400 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all text-base
                      ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20'}`}
                    placeholder="name@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="password">Password</label>
                    <input
                      id="password" type="password" value={form.password} onChange={handleChange}
                      className={`w-full rounded-xl border px-4 py-3 text-slate-900 placeholder-slate-400 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all text-base
                        ${errors.password ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20'}`}
                      placeholder="Min. 8 characters"
                    />
                    {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="confirm_password">Confirm password</label>
                    <input
                      id="confirm_password" type="password" value={form.confirm_password} onChange={handleChange}
                      className={`w-full rounded-xl border px-4 py-3 text-slate-900 placeholder-slate-400 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all text-base
                        ${errors.confirm_password ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20'}`}
                      placeholder="Repeat password"
                    />
                    {errors.confirm_password && <p className="mt-1 text-xs text-red-500">{errors.confirm_password}</p>}
                  </div>
                </div>

                {/* Role-specific extra fields */}
                {extraFields.length > 0 && (
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {ROLES.find(r => r.value === selectedRole)?.label} details
                    </p>
                    {extraFields.map(({ id, label, placeholder, type }) => (
                      <div key={id}>
                        <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor={id}>{label}</label>
                        <input
                          id={id} type={type} value={form[id]} onChange={handleChange}
                          className={`w-full rounded-xl border px-4 py-3 text-slate-900 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 transition-all text-base
                            ${errors[id] ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20'}`}
                          placeholder={placeholder}
                        />
                        {errors[id] && <p className="mt-1 text-xs text-red-500">{errors[id]}</p>}
                      </div>
                    ))}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-500 py-3 text-base font-semibold text-slate-950 shadow-md hover:bg-emerald-400 active:scale-[0.98] transition-all"
                >
                  Create account
                </button>
              </form>
            )}

            {/* Login link */}
            <div className="mt-5 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">Already have an account?</p>
                <p className="mt-0.5 text-xs text-slate-500">Sign back in to your dashboard.</p>
              </div>
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="rounded-xl border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm hover:bg-emerald-50 transition-all whitespace-nowrap"
              >
                Login →
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Signup;
