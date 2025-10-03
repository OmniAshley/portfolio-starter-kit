import React from 'react';
import { FadeIn } from './fade-in';

interface ProjectCardData {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  wip?: boolean;
}

const projects: ProjectCardData[] = [
  {
    title: 'AI Pair Dev Toolkit',
    description: 'Experimental developer workflow integrating LLM-assisted refactors and test suggestions.',
    tags: ['Next.js', 'TypeScript', 'AI'],
    wip: true,
  },
  {
    title: 'Procedural Roguelike Prototype',
    description: 'Lightweight Unity prototype exploring procedural dungeon generation and combat loops.',
    tags: ['Unity', 'C#', 'Game Dev'],
  },
  {
    title: 'Shader Playground',
    description: 'Interactive space to tweak GLSL-like shader snippets and visualize output in real time.',
    tags: ['WebGL', 'Graphics'],
  },
];

export function ProjectsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p, i) => (
        <FadeIn
          key={p.title}
          delay={i * 90}
          className="group relative rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm hover:shadow-md transition-shadow"
        >
          {p.wip && (
            <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-wide px-2 py-1 rounded-md bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300 border border-amber-200/60 dark:border-amber-400/30">
              WIP
            </span>
          )}
          <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {p.title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
            {p.description}
          </p>
          <ul className="flex flex-wrap gap-2 text-[11px]">
            {p.tags.map(t => (
              <li key={t} className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300">
                {t}
              </li>
            ))}
          </ul>
        </FadeIn>
      ))}
    </div>
  );
}
