import type { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiGithub,
  SiDocker,
  SiPostman,
  SiPython,
  SiCplusplus,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import {
  Users,
  Lightbulb,
  MessageSquare,
  Clock,
  RefreshCw,
  Code2,
  Layers,
} from 'lucide-react';
import type { ComponentType } from 'react';

type SkillIconComponent = IconType | ComponentType<{ size?: number; className?: string }>;

export const SKILL_ICON_MAP: Record<string, SkillIconComponent> = {
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  'Tailwind CSS': SiTailwindcss,
  'Material UI': SiMui,
  'React Native': TbBrandReactNative,
  Zustand: Layers,
  'Node.js': SiNodedotjs,
  'Nest.js': SiNestjs,
  'Express.js': SiExpress,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Supabase: SiSupabase,
  'Git & GitHub': SiGithub,
  Docker: SiDocker,
  AWS: FaAws,
  Postman: SiPostman,
  Java: FaJava,
  'C / C++': SiCplusplus,
  Python: SiPython,
  'Team Collaboration': Users,
  'Problem Solving': Lightbulb,
  Communication: MessageSquare,
  'Time Management': Clock,
  Adaptability: RefreshCw,
};

export const DEFAULT_SKILL_ICON = Code2;

export function getSkillIcon(name: string): SkillIconComponent {
  return SKILL_ICON_MAP[name] ?? DEFAULT_SKILL_ICON;
}
