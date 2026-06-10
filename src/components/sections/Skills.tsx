import { motion } from 'framer-motion';
import type { ComponentType } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SKILLS } from '../../data/portfolioData';
import { getSkillIcon } from '../../data/skillIcons';

export function Skills() {
  const [primary, ...rest] = SKILLS;

  return (
    <section id="skills" className="section-wrap">
      <div className="container-xl">
        <SectionHeader
          label="Expertise"
          title="Skills & Technologies"
          subtitle="The tools and practices I use to design, build, and ship production-ready software."
        />

        <div className="space-y-6">
          {primary && (
            <SkillCategoryCard category={primary} featured index={0} />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((category, index) => (
              <SkillCategoryCard
                key={category.title}
                category={category}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillCategory {
  title: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  skills: string[];
}

function SkillCategoryCard({
  category,
  featured = false,
  index,
}: {
  category: SkillCategory;
  featured?: boolean;
  index: number;
}) {
  const Icon = category.icon;
  const isStrengths = category.title === 'How I Work';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-2xl border transition-colors duration-300 ${
        featured
          ? 'border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-white to-cyan-50/40 p-8 dark:border-teal-900/60 dark:from-teal-950/30 dark:via-slate-900 dark:to-slate-900'
          : 'card hover:border-teal-100 dark:hover:border-teal-800'
      }`}
    >
      {featured && (
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal-400/10 blur-3xl dark:bg-teal-500/10" />
      )}

      <div className="relative flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div
            className={`flex shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
              featured
                ? 'h-12 w-12 bg-teal-600 text-white shadow-lg shadow-teal-500/25'
                : 'h-11 w-11 bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white dark:bg-teal-950/60 dark:text-teal-400 dark:group-hover:bg-teal-500'
            }`}
          >
            <Icon size={featured ? 22 : 20} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-teal-600 dark:text-teal-400">
              {featured ? 'Primary Focus' : 'Capability'}
            </p>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {category.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {category.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => {
            const SkillIcon = getSkillIcon(skill);
            return (
              <span
                key={skill}
                className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  isStrengths
                    ? 'border-slate-200 bg-transparent text-slate-600 hover:border-teal-300 hover:text-teal-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-600 dark:hover:text-teal-300'
                    : featured
                      ? 'border-teal-200/80 bg-white/80 text-slate-700 hover:border-teal-400 hover:text-teal-800 dark:border-teal-800/60 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-teal-500 dark:hover:text-teal-300'
                      : 'border-slate-200/80 bg-slate-50/80 text-slate-700 hover:border-teal-300 hover:bg-teal-50/50 hover:text-teal-800 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-teal-700 dark:hover:bg-teal-950/30 dark:hover:text-teal-300'
                }`}
              >
                <SkillIcon
                  size={15}
                  className="shrink-0 opacity-80"
                  aria-hidden
                />
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
