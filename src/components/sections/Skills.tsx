import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { SKILLS } from '../../data/portfolioData';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <div className="container-xl">
        <SectionHeader
          label="Expertise"
          title="Technical Skills"
          subtitle="An overview of my technical proficiencies across frontend, backend, cloud, and soft skills."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {SKILLS.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card flex flex-col gap-6 group hover:border-teal-100"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shrink-0">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-slate-800">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-slate-600 font-medium">{skill.skill}</span>
                        <span className="text-xs text-slate-400 font-semibold">{skill.percentage}</span>
                      </div>
                      <div className="progress-track">
                        <motion.div
                          className="progress-bar"
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.percentage }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.2 + i * 0.07, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
