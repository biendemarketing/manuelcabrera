'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { Activity } from 'lucide-react';
import { BlurFadeSection } from '@/components/blur-fade-section';

function AnimatedStatItem({ 
  value, 
  label, 
  highlight 
}: { 
  value: string; 
  label: string; 
  highlight: string; 
}) {
  const [displayValue, setDisplayValue] = useState<string>(value);

  useEffect(() => {
    const match = value.match(/^([^\d.]*)([\d.]+)([^\d.]*)$/);
    if (!match) return;

    const prefix = match[1] || '';
    const targetNum = parseFloat(match[2]);
    const suffix = match[3] || '';
    const isDecimal = match[2].includes('.');
    const duration = 1200; // ms
    const startTime = performance.now();
    let frameId: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * easeProgress;

      if (isDecimal) {
        setDisplayValue(`${prefix}${currentNum.toFixed(1)}${suffix}`);
      } else {
        setDisplayValue(`${prefix}${Math.floor(currentNum)}${suffix}`);
      }

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    frameId = requestAnimationFrame(updateCounter);
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [value]);

  return (
    <div 
      className="group relative flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-900 shadow-md transition-all duration-300 hover:shadow-lg cursor-default border-0"
    >
      <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-zinc-950 dark:text-white mb-1 group-hover:scale-105 transition-transform">
        {displayValue}
      </span>
      
      <span className="text-xs sm:text-sm font-extrabold text-zinc-950 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
        {label}
      </span>
      
      <span className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 mt-1 font-medium group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
        {highlight}
      </span>
    </div>
  );
}

export function StatsCounterSection() {
  return (
    <BlurFadeSection 
      id="metricas-impacto" 
      className="py-10 bg-zinc-50 dark:bg-zinc-950 relative w-full border-0"
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            <span className="text-xs font-black uppercase tracking-wider text-zinc-950 dark:text-white">
              Métricas de Desempeño & Impacto Comprobado
            </span>
          </div>
          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium hidden sm:inline-block">
            Resultados auditables en agencias y clientes directos
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <AnimatedStatItem
              key={idx}
              value={stat.value}
              label={stat.label}
              highlight={stat.highlight}
            />
          ))}
        </div>
      </div>
    </BlurFadeSection>
  );
}
