import React from 'react';
import { FadeIn } from './fade-in';

const skillGroups: { category: string; items: string[] }[] = [
  { category: 'Languages', items: ['TypeScript', 'Python', 'C#', 'Go', 'Rust (learning)'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'MDX'] },
  { category: 'Backend', items: ['Node.js', 'REST', 'GraphQL', 'tRPC'] },
  { category: 'AI / ML', items: ['LLM Integration', 'Prompt Engineering', 'Vector DBs'] },
  { category: 'Tools', items: ['Git', 'Vercel', 'Docker', 'CI/CD'] },
  { category: 'Game Dev', items: ['Unity', 'Godot (exploring)', 'Shader Basics'] },
];

export function SkillsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {skillGroups.map((group, i) => (
        <FadeIn key={group.category} delay={i * 70} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm">
          <h3 className="font-medium text-sm tracking-wide text-neutral-700 dark:text-neutral-300 mb-2">{group.category}</h3>
          <ul className="flex flex-wrap gap-2 text-xs">
            {group.items.map(item => (
              <li key={item} className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      ))}
    </div>
  );
}
