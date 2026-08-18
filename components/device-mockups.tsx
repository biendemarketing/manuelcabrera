'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Lock, 
  RotateCw, 
  Maximize2, 
  ZoomIn, 
  Wifi, 
  Battery, 
  ExternalLink
} from 'lucide-react';

interface DeviceMockupProps {
  src: string;
  alt: string;
  title?: string;
  url?: string;
  onOpenLightbox?: () => void;
  className?: string;
  priority?: boolean;
}

/**
 * MACBOOK PRO / MAC LAPTOP MOCKUP
 * Realistic, compact Mac laptop frame with clean, modern radius (not overly rounded).
 */
export function MacLaptopMockup({
  src,
  alt,
  title,
  url,
  onOpenLightbox,
  className = '',
  priority = false,
}: DeviceMockupProps) {
  const displayUrl = url ? url.replace('https://', '').replace(/\/$/, '') : 'sitio-web-oficial.com';

  return (
    <div className={`w-full flex flex-col items-center select-none ${className}`}>
      {/* LAPTOP SCREEN BEZEL */}
      <div className="w-full rounded-t-lg sm:rounded-t-xl overflow-hidden border border-zinc-700/80 bg-zinc-950 shadow-2xl relative transition-all duration-300 hover:border-zinc-500/80 group">
        
        {/* Top Safari Bar */}
        <div className="bg-zinc-950 px-3 py-1.5 sm:py-2 flex items-center justify-between border-b border-zinc-800/90 relative z-20">
          {/* macOS Traffic Light Buttons */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-inner inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-inner inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 shadow-inner inline-block" />
          </div>

          {/* Safari URL Pill */}
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-zinc-900/90 border border-zinc-800 text-[10px] sm:text-[11px] font-mono text-zinc-300 max-w-[65%] sm:max-w-xs truncate shadow-inner">
            <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
            <span className="truncate text-zinc-300 font-medium">{displayUrl}</span>
            <RotateCw className="w-2 h-2 text-zinc-500 ml-auto shrink-0 hidden sm:block" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors hidden sm:inline-flex items-center gap-1 text-[10px]"
                title="Visitar sitio web en vivo"
              >
                <span>Visitar</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
            {onOpenLightbox && (
              <button
                onClick={onOpenLightbox}
                className="p-1 rounded bg-zinc-900 hover:bg-indigo-600 text-zinc-300 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
                title="Ver en pantalla completa HD"
                aria-label="Ver pantalla completa"
              >
                <Maximize2 className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* SCREEN DISPLAY VIEWPORT */}
        <div 
          onClick={onOpenLightbox}
          className="relative w-full aspect-[16/10] bg-zinc-950 overflow-hidden cursor-pointer group/screen flex items-center justify-center"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            unoptimized
            className="object-cover object-top transition-transform duration-500 group-hover/screen:scale-102"
          />

          {/* Hover Zoom Prompt */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-zinc-950 font-black text-xs shadow-2xl transform translate-y-2 group-hover/screen:translate-y-0 transition-transform">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Ver en HD (Mac)</span>
            </span>
          </div>
        </div>

        {/* Caption Bar Below Screen */}
        {title && (
          <div className="p-2.5 bg-zinc-950 border-t border-zinc-800/90 flex items-center justify-between px-3 text-xs">
            <div className="flex items-center gap-1.5 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              <span className="font-bold text-zinc-200 truncate">{title}</span>
            </div>
            <span className="text-[9px] font-mono text-zinc-400 shrink-0 font-bold ml-2">Mac Desktop</span>
          </div>
        )}
      </div>

      {/* LAPTOP BASE CHASSIS */}
      <div className="w-[102%] -mt-[1px] h-2.5 sm:h-3 rounded-b-md sm:rounded-b-lg bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border-t border-zinc-600/60 shadow-2xl relative flex items-start justify-center overflow-hidden">
        {/* Thumb Opening Notch */}
        <div className="w-12 sm:w-16 h-1 rounded-b-xs bg-zinc-900/90 shadow-inner border-b border-zinc-600/40" />
      </div>
    </div>
  );
}

/**
 * IPHONE 14 PRO MAX MOCKUP
 * Modern smartphone frame with realistic radius and proportional height.
 */
export function IPhone14ProMaxMockup({
  src,
  alt,
  title,
  onOpenLightbox,
  className = '',
  priority = false,
}: DeviceMockupProps) {
  return (
    <div className={`w-full max-w-[250px] sm:max-w-[280px] flex flex-col items-center select-none ${className}`}>
      {/* PHONE CHASSIS */}
      <div className="relative w-full rounded-[28px] sm:rounded-[32px] border-[5px] sm:border-[6px] border-zinc-900 bg-black shadow-2xl overflow-hidden transition-all duration-300 hover:border-zinc-700/80 group">
        
        {/* Dynamic Island Capsule */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 sm:w-22 h-4.5 rounded-full bg-black border border-zinc-800/80 z-30 flex items-center justify-between px-2 shadow-md pointer-events-none">
          {/* Camera Lens */}
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-950 border border-blue-950/60 flex items-center justify-center">
            <span className="w-0.5 h-0.5 rounded-full bg-blue-500/40" />
          </div>
          {/* Sensor Dot */}
          <div className="w-1 h-1 rounded-full bg-zinc-900 border border-zinc-800" />
        </div>

        {/* Top Status Bar Elements */}
        <div className="absolute top-2 inset-x-0 px-4 z-20 flex items-center justify-between text-[8px] font-bold text-white/90 pointer-events-none">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <Wifi className="w-2 h-2 text-white/90" />
            <Battery className="w-3 h-3 text-white/90" />
          </div>
        </div>

        {/* SCREEN DISPLAY AREA */}
        <div 
          onClick={onOpenLightbox}
          className="relative w-full aspect-[9/18.5] bg-zinc-950 overflow-hidden cursor-pointer group/screen flex items-center justify-center pt-6 pb-4"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            unoptimized
            className="object-cover object-top transition-transform duration-500 group-hover/screen:scale-103"
          />

          {/* Hover Zoom Prompt */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs z-20">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-zinc-950 font-black text-[10px] shadow-2xl transform translate-y-2 group-hover/screen:translate-y-0 transition-transform">
              <ZoomIn className="w-3 h-3" />
              <span>Ver en HD</span>
            </span>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-0.5 rounded-full bg-white/40 z-30 pointer-events-none" />
        </div>

        {/* Caption Bar Below Phone Screen */}
        {title && (
          <div className="p-2.5 bg-zinc-950 border-t border-zinc-800/90 flex items-center justify-between px-3 text-xs">
            <span className="font-bold text-zinc-200 truncate pr-1.5 text-[11px]">{title}</span>
            <span className="text-[8px] font-mono font-bold text-pink-400 shrink-0">iPhone 14 Pro Max</span>
          </div>
        )}
      </div>
    </div>
  );
}
