import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { EXPERIENCE } from '../../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="section-muted section-wrap">
      <div className="container-xl">
        <SectionHeader
          label="Career"
          title="Work Experience"
          subtitle="A timeline of my professional journey building real-world software solutions."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 md:-translate-x-px" />

          {EXPERIENCE.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex items-start mb-12 last:mb-0 gap-6 md:gap-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-teal-500 ring-4 ring-teal-50 dark:ring-teal-950 -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10" />

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className={`flex-1 ml-10 md:ml-0 ${isLeft ? 'md:pl-10' : 'md:pr-10'}`}>
                  <div className="card group hover:border-teal-100 dark:hover:border-teal-800">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors mb-0.5">
                          {exp.position}
                        </h3>
                        <p className="text-teal-600 dark:text-teal-400 font-semibold text-sm">{exp.company}</p>
                      </div>
                      <span className="badge badge-primary shrink-0 mt-0.5 whitespace-nowrap">
                        {exp.duration}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 dark:text-slate-500 mb-5">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          <ChevronRight size={14} className="text-teal-500 shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
