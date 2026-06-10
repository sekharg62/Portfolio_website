import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { SectionHeader } from '../ui/SectionHeader';
import { PROJECTS } from '../../data/portfolioData';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Projects() {
  return (
    <section id="projects" className="section-wrap section-muted">
      <div className="container-xl">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          subtitle="A curated selection of my recent work, from games to full-stack web applications."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col dark:hover:shadow-black/30"
            >
              {/* Top gradient bar */}
              <div className="h-1.5 bg-gradient-to-r from-teal-400 to-cyan-400" />

              {/* Card body */}
              <div className="p-7 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="badge badge-primary text-xs mb-2 block w-fit">
                      {project.date}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-teal-50 group-hover:border-teal-100 group-hover:text-teal-600 transition-all duration-300 shrink-0 ml-3 dark:bg-slate-800 dark:border-slate-700 dark:group-hover:bg-teal-950/50 dark:group-hover:border-teal-800 dark:group-hover:text-teal-400">
                    <ExternalLink size={16} />
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 flex-1 mb-6">
                  {project.description.map((d, i) => (
                    <li key={i} className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex items-start gap-2">
                      <span className="text-teal-400 mt-1 shrink-0">▸</span>
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 group/link transition-colors"
                  >
                    Live Demo
                    <ArrowUpRight size={15} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://github.com/sekharg62"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:border-slate-900 hover:text-slate-900 dark:hover:border-slate-300 dark:hover:text-slate-100 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
