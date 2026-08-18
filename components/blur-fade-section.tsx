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
  duration = 0.7,
  blur = '10px',
  yOffset = 20,
  className = '',
  id,
  ...props
}: BlurFadeSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: yOffset, filter: `blur(${blur})` }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)',
        transitionEnd: { filter: 'none' }
      }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ willChange: 'opacity, transform' }}
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
  duration = 0.65,
  blur = '8px',
  yOffset = 16,
  className = '',
  ...props
}: BlurFadeDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: `blur(${blur})` }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)',
        transitionEnd: { filter: 'none' }
      }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ willChange: 'opacity, transform' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
