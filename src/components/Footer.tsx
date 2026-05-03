import { HERO_DATA } from '../data/portfolioData';

const FOOTER_LINKS = [
  { name: 'Home',        href: '#home' },
  { name: 'Experience',  href: '#experience' },
  { name: 'Skills',      href: '#skills' },
  { name: 'Projects',    href: '#projects' },
  { name: 'Client Work', href: '#client-work' },
  { name: 'Contact',     href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="container-xl">
        {/* Top */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-slate-800">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-display font-bold text-white tracking-tight mb-3 inline-block">
              Sekhar<span className="text-teal-500">.</span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Full Stack Developer crafting clean, performant, and user-centric digital experiences.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map(l => (
                <li key={l.name}>
                  <a href={l.href} className="text-sm hover:text-teal-400 transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${HERO_DATA.socials.email}`} className="hover:text-teal-400 transition-colors break-all">
                  {HERO_DATA.socials.email}
                </a>
              </li>
              <li>
                <a href={HERO_DATA.socials.github} target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href={HERO_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>&copy; {new Date().getFullYear()} {HERO_DATA.name}. All rights reserved.</p>
          <p className="text-slate-600">Built with React + Vite + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
