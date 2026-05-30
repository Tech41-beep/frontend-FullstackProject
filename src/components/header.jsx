import { useState } from 'react';
import {Link} from 'react-router-dom';


const Header = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div>
          <div className="text-lg font-semibold tracking-[0.25em] text-emerald-300 uppercase">
            FastInternship
          </div>
          <div className="text-xs text-slate-300">
            Internships with a real company feel
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          <Link to="/company" href="#company" className="transition hover:text-white">Company</Link>
          <Link to="/aboutus" href="#about" className="transition hover:text-white">About Us</Link>
          <Link to="/contact" href="#contact" className="transition hover:text-white">Contact Us</Link>
          <button 
            type="button" 
            onClick={onLoginClick} 
            className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-emerald-100 transition hover:bg-emerald-300/20"
          >
            Login
          </button>
        </nav>

        {/* Mobile Actions (Hamburger & Login) */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            type="button" 
            onClick={onLoginClick} 
            className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-emerald-400 transition"
          >
            Login
          </button>
          
          {/* Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="border-b border-white/10 bg-slate-950 px-4 py-4 md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium text-slate-200">
            <a 
              href="#company" 
              onClick={() => setIsMenuOpen(false)} 
              className="py-2 transition hover:text-white border-b border-white/5"
            >
              Company
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)} 
              className="py-2 transition hover:text-white border-b border-white/5"
            >
              About Us
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="py-2 transition hover:text-white"
            >
              Contact Us
            </a>
            <button
              type="button"
              onClick={onLoginClick}
              className="mt-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-left text-emerald-100 transition hover:bg-emerald-300/20"
            >
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;