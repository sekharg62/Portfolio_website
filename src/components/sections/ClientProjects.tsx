import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { CLIENT_PROJECTS } from '../../data/portfolioData';

const CARD_GRADIENTS: string[] = [
  'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',  // teal  — DigitalAccess DA
  'linear-gradient(135deg, #d97706 0%, #fbbf24 100%)',  // amber — 1stCollege
  'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',  // violet — H.K. Exports
];



const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function ClientProjects() {
  return (
    <section id="client-work" className="section-wrap">
      <div className="container-xl">
        <SectionHeader
          label="Client Work"
          title="Projects Built for Clients"
          subtitle="Real-world applications delivered for companies and organisations — from digital marketplaces to enterprise ERPs."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-7"
        >
          {CLIENT_PROJECTS.map((project, idx) => {
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Gradient header */}
                <div
                  className="h-36 flex flex-col justify-end px-7 pb-5 relative overflow-hidden"
                  style={{ background: CARD_GRADIENTS[idx] }}
                >
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/5" />

                  {/* Year */}
                  <span className="absolute top-4 right-5 text-xs font-bold text-white/60">
                    {project.year}
                  </span>

                  {/* Category + client */}
                  <div>
                    <span
                      className={`badge border text-[10px] mb-1.5 inline-block !bg-white/15 !text-white !border-white/20`}
                    >
                      {project.category}
                    </span>
                    <p className="text-white/70 text-xs font-semibold tracking-wide">
                      {project.client}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-teal-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Highlight stat */}
                  <div className="flex items-center gap-2 mb-5 px-3 py-2.5 bg-slate-50 rounded-xl border border-slate-100">
                    <Star size={13} className="text-amber-400 fill-amber-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-600">
                      {project.highlight}
                    </span>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="badge badge-slate text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline text-sm py-2.5 mt-auto group/btn"
                  >
                    View Project
                    <ArrowUpRight
                      size={15}
                      className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
