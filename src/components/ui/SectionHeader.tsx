import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ label, title, subtitle, align = 'center' }: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-teal-600 text-sm font-bold uppercase tracking-[0.15em] mb-3 dark:text-teal-400"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-slate-100 leading-tight mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-slate-500 dark:text-slate-400 text-lg leading-relaxed ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className={`section-divider mt-6 ${isCenter ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
