import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Utility to merge tailwind classes */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        {
          'bg-primary-600 text-white hover:bg-primary-500 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50': variant === 'primary',
          'bg-white text-slate-800 hover:text-primary-600 border border-slate-200 hover:border-primary-200 shadow-sm hover:shadow-md dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 dark:hover:border-primary-500 dark:hover:text-primary-400': variant === 'secondary',
          'bg-transparent text-primary-600 border-2 border-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-500 dark:hover:bg-primary-950/40': variant === 'outline',
          'bg-transparent text-slate-600 hover:text-primary-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-primary-400 dark:hover:bg-slate-800': variant === 'ghost',
          
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
