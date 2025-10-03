import React from 'react';
import { FadeIn } from './fade-in';

interface TimelineItemData {
  title: string;
  org: string;
  period: string;
  bullets: string[];
}

const timeline: TimelineItemData[] = [
  {
    title: 'Senior Software Engineer',
    org: 'Tech Company',
    period: '2024 — Present',
    bullets: ['Leading frontend architecture', 'Mentoring engineers', 'Integrating AI features'],
  },
  {
    title: 'Full Stack Developer',
    org: 'Startup XYZ',
    period: '2022 — 2024',
    bullets: ['Built scalable APIs', 'Implemented design system', 'Improved performance 30%'],
  },
  {
    title: 'Game Dev Hobbyist',
    org: 'Personal / Open Source',
    period: '2019 — Present',
    bullets: ['Unity prototypes', 'Gameplay systems', 'Shader experimentation'],
  },
];

export function Timeline() {
  return (
    <ol className="relative border-l border-neutral-200 dark:border-neutral-800 ml-2">
      {timeline.map((item, i) => (
        <li key={item.title} className="mb-10 ml-4">
          <FadeIn delay={i * 80} className="absolute w-3 h-3 bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 rounded-full -left-1.5 border border-white dark:border-neutral-900 shadow" />
          <FadeIn delay={i * 80} className="p-4 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
            <time className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-medium">
              {item.period}
            </time>
            <h3 className="text-sm md:text-base font-semibold mt-1 text-neutral-800 dark:text-neutral-200">
              {item.title} — <span className="text-indigo-500 dark:text-indigo-400 font-medium">{item.org}</span>
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
              {item.bullets.map(b => (
                <li key={b} className="leading-snug">{b}</li>
              ))}
            </ul>
          </FadeIn>
        </li>
      ))}
    </ol>
  );
}
