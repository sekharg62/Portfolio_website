import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from './Button';

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
}

export function Card({ children, className, glass = false, hover = false, ...props }: CardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl border p-6 md:p-8",
        {
          "bg-white/70 backdrop-blur-md border-white/20 shadow-xl": glass,
          "bg-white border-slate-100 shadow-sm": !glass,
          "hover:shadow-lg transition-shadow duration-300": hover,
        },
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
