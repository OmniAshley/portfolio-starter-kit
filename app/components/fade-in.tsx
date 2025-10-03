"use client";
import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  delay?: number; // ms
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
  threshold?: number;
}

// Lightweight scroll reveal without an extra heavy animation lib.
export function FadeIn({
  as: Tag = 'div',
  className,
  children,
  delay = 0,
  direction = 'up',
  once = true,
  threshold = 0.2,
}: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const directionMap: Record<string, string> = {
    up: 'translate-y-4',
    down: '-translate-y-4',
    left: 'translate-x-4',
    right: '-translate-x-4',
    none: '',
  };

  const classes = [
    'opacity-0 will-change-transform transition-all duration-700 ease-out',
    !visible && directionMap[direction],
    visible && 'opacity-100 translate-x-0 translate-y-0',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref as any} style={{ transitionDelay: `${delay}ms` }} className={classes}>
      {children}
    </Tag>
  );
}
