import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HERO_DATA } from '../../data/portfolioData';

const TECH_BADGES = [
  { label: 'React',      color: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800' },
  { label: 'TypeScript', color: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800' },
  { label: 'Node.js',    color: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/50 dark:text-green-300 dark:border-green-800' },
  { label: 'Next.js',    color: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700' },
  { label: 'PostgreSQL', color: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800' },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-50 blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/4 dark:bg-teal-950/40 dark:opacity-80" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-50 blur-[80px] opacity-50 -translate-x-1/4 translate-y-1/4 dark:bg-cyan-950/30 dark:opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container-xl section-wrap w-full pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-100 rounded-full text-teal-700 text-xs font-semibold mb-6 dark:bg-teal-950/50 dark:border-teal-800 dark:text-teal-300">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-slate-100 leading-[1.08] tracking-tight mb-6">
              Think. Make.<br />
              <span className="gradient-text">Solve.</span>
            </h1>

            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-4 font-medium">
              Hi, I'm <span className="text-slate-800 dark:text-slate-200 font-semibold">{HERO_DATA.name}</span> — a{' '}
              <span className="text-teal-600 dark:text-teal-400 font-semibold">{HERO_DATA.title}</span>
            </p>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Recently graduated in Computer Science Engineering, I build scalable web and mobile
              applications. I thrive at the intersection of clean code, great UX, and modern tooling.
            </p>

            <div className="flex flex-wrap gap-2 mb-10 justify-center lg:justify-start">
              {TECH_BADGES.map(b => (
                <span key={b.label} className={`badge border ${b.color}`}>
                  {b.label}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <a href="#contact" className="btn btn-primary px-8 py-3.5 text-base w-full sm:w-auto">
                <Mail size={17} />
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-secondary px-8 py-3.5 text-base w-full sm:w-auto">
                <Download size={17} />
                View Projects
              </a>
            </div>

            <div className="flex items-center gap-5 justify-center lg:justify-start">
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-widest">Follow</span>
              <div className="flex items-center gap-3">
                <a href={HERO_DATA.socials.github} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:border-slate-900 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-300 dark:hover:text-slate-100 transition-colors">
                  <FaGithub size={16} />
                </a>
                <a href={HERO_DATA.socials.linkedin} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:border-[#0A66C2] hover:text-[#0A66C2] dark:text-slate-400 transition-colors">
                  <FaLinkedin size={16} />
                </a>
                <a href={`mailto:${HERO_DATA.socials.email}`}
                  className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:border-teal-600 hover:text-teal-600 dark:text-slate-400 dark:hover:border-teal-400 dark:hover:text-teal-400 transition-colors">
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-cyan-300 blur-2xl opacity-20 scale-110 dark:opacity-30" />
              <div className="absolute inset-2 rounded-full border-2 border-teal-100 dark:border-teal-900/60" />
              <img
                src="https://github.com/sekharg62.png"
                alt="Sekhar Ghosh"
                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
              />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -top-4 -left-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 flex items-center justify-center">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500">Primary Stack</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">React / Next.js</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -right-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 px-4 py-3"
              >
                <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">Experience</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">3+ Companies</p>
                <div className="flex -space-x-1 mt-1.5">
                  {['ST', 'IT', 'MS'].map((v, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-teal-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-[9px] font-bold">
                      {v}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
