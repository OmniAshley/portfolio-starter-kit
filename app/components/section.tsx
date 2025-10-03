import React from 'react';
import { FadeIn } from './fade-in';

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  noFade?: boolean;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
  fullWidth = false,
  noFade = false,
}: SectionProps) {
  const Container = noFade ? React.Fragment : FadeIn as any;
  const containerProps = noFade ? {} : { as: 'div', direction: 'up' };
  return (
    <section id={id} className={`scroll-mt-24 py-16 ${fullWidth ? '' : 'max-w-3xl'} mx-auto ${className}`.trim()}>
      <Container {...containerProps}>
        <div className="mb-8">
          {eyebrow && (
            <div className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight title">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
              {description}
            </p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
