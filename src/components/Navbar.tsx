import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const NAV_LINKS = [
  { name: 'Home',        href: '#home' },
  { name: 'Experience',  href: '#experience' },
  { name: 'Skills',      href: '#skills' },
  { name: 'Projects',    href: '#projects' },
  { name: 'Client Work', href: '#client-work' },
  { name: 'Contact',     href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/70 py-3 shadow-sm dark:bg-slate-950/95 dark:border-slate-800/70'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-xl flex items-center justify-between">
        <a href="#home" className="flex items-center gap-1.5">
          <span className="text-2xl font-display font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-none">
            Sekhar<span className="text-teal-600 dark:text-teal-400">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a
              key={l.name}
              href={l.href}
              className="nav-link"
            >
              {l.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary text-sm">
            Hire Me
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="container-xl py-4 flex flex-col gap-1">
              {NAV_LINKS.map(l => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors dark:text-slate-300 dark:hover:text-teal-400 dark:hover:bg-teal-950/40"
                >
                  {l.name}
                </a>
              ))}
              <div className="mt-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <a href="#contact" className="btn btn-primary w-full justify-center">
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
