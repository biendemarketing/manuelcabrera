'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

interface BlurFadeSectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  blur?: string;
  yOffset?: number;
  className?: string;
  id?: string;
}

export function BlurFadeSection({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 16,
  className = '',
  id,
  ...props
}: BlurFadeSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

interface BlurFadeDivProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  blur?: string;
  yOffset?: number;
  className?: string;
}

export function BlurFadeDiv({
  children,
  delay = 0,
  duration = 0.45,
  yOffset = 12,
  className = '',
  ...props
}: BlurFadeDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
