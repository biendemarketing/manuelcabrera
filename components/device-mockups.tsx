'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Globe, 
  Lock, 
  RotateCw, 
  Maximize2, 
  ZoomIn, 
  Wifi, 
  Battery, 
  ExternalLink,
  Sparkles
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
 * Renders desktop website captures inside an authentic, premium Mac laptop frame.
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
      {/* LAPTOP LID / SCREEN BEZEL */}
      <div className="w-full rounded-t-2xl sm:rounded-t-3xl overflow-hidden border border-zinc-700/80 bg-zinc-950 shadow-2xl relative transition-all duration-300 hover:border-zinc-500/80 group">
        
        {/* Top Bezel with Camera Dot */}
        <div className="bg-zinc-950 px-4 py-2 sm:py-2.5 flex items-center justify-between border-b border-zinc-800/90 relative z-20">
          {/* macOS Traffic Light Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-rose-500/90 shadow-inner flex items-center justify-center text-[7px] text-rose-950 font-bold opacity-85 group-hover:opacity-100" />
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-500/90 shadow-inner flex items-center justify-center text-[7px] text-amber-950 font-bold opacity-85 group-hover:opacity-100" />
            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-500/90 shadow-inner flex items-center justify-center text-[7px] text-emerald-950 font-bold opacity-85 group-hover:opacity-100" />
          </div>

          {/* Safari URL Pill Bar */}
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-[10px] sm:text-xs font-mono text-zinc-300 max-w-[65%] sm:max-w-md truncate shadow-inner">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate text-zinc-300 font-medium">{displayUrl}</span>
            <RotateCw className="w-2.5 h-2.5 text-zinc-500 ml-auto shrink-0 hidden sm:block" />
          </div>

          {/* Quick Action Button */}
          <div className="flex items-center gap-2">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 sm:p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors hidden sm:flex items-center gap-1 text-[10px]"
                title="Visitar sitio web en vivo"
              >
                <span>Visitar</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {onOpenLightbox && (
              <button
                onClick={onOpenLightbox}
                className="p-1 sm:p-1.5 rounded-lg bg-zinc-900 hover:bg-indigo-600 text-zinc-300 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
                title="Ver en pantalla completa HD"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* SCREEN DISPLAY VIEWPORT */}
        <div 
          onClick={onOpenLightbox}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-zinc-950 overflow-hidden cursor-pointer group/screen flex items-center justify-center"
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-950 font-black text-xs shadow-2xl transform translate-y-2 group-hover/screen:translate-y-0 transition-transform">
              <ZoomIn className="w-4 h-4" />
              <span>Ver Captura Completa HD (Mac)</span>
            </span>
          </div>
        </div>

        {/* Caption Bar Below Screen */}
        {title && (
          <div className="p-3 bg-zinc-950 border-t border-zinc-800/90 flex items-center justify-between px-4 text-xs">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="font-bold text-zinc-200 truncate">{title}</span>
            </div>
            <span className="text-[10px] font-mono text-zinc-400 shrink-0 font-bold">Vista Escritorio (Mac)</span>
          </div>
        )}
      </div>

      {/* LAPTOP BASE CHASSIS (ALUMINUM LIP & THUMB GROOVE NOTCH) */}
      <div className="w-[103%] -mt-[1px] h-3 sm:h-4.5 rounded-b-xl sm:rounded-b-2xl bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border-t border-zinc-600/60 shadow-2xl relative flex items-start justify-center overflow-hidden">
        {/* Thumb Opening Notch */}
        <div className="w-16 sm:w-20 h-1 sm:h-1.5 rounded-b-md bg-zinc-900/90 shadow-inner border-b border-zinc-600/40" />
      </div>
    </div>
  );
}

/**
 * IPHONE 14 PRO MAX MOCKUP
 * Renders mobile captures and Instagram feeds inside a sleek, titanium curved smartphone frame with Dynamic Island.
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
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* PHONE BODY */}
      <div className="relative w-full max-w-[320px] sm:max-w-[340px] rounded-[48px] sm:rounded-[52px] border-[8px] sm:border-[10px] border-zinc-900 bg-black shadow-2xl overflow-hidden transition-all duration-300 hover:border-zinc-700/80 group">
        
        {/* Dynamic Island Capsule */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-5 sm:h-6 rounded-full bg-black border border-zinc-800/80 z-30 flex items-center justify-between px-2.5 shadow-md pointer-events-none">
          {/* Camera Lens */}
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-950 border border-blue-950/60 flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-blue-500/30" />
          </div>
          {/* Sensor Dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 border border-zinc-800" />
        </div>

        {/* Top Status Bar Elements */}
        <div className="absolute top-2.5 inset-x-0 px-6 z-20 flex items-center justify-between text-[9px] sm:text-[10px] font-bold text-white/90 pointer-events-none">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <Wifi className="w-2.5 h-2.5 text-white/90" />
            <Battery className="w-3.5 h-3.5 text-white/90" />
          </div>
        </div>

        {/* SCREEN DISPLAY AREA (TALL 9:19.5 MOBILE PROPORTIONS) */}
        <div 
          onClick={onOpenLightbox}
          className="relative w-full aspect-[9/18.5] bg-zinc-950 overflow-hidden cursor-pointer group/screen flex items-center justify-center pt-8 pb-6"
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-zinc-950 font-black text-[11px] shadow-2xl transform translate-y-2 group-hover/screen:translate-y-0 transition-transform">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Ver en HD</span>
            </span>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-1 rounded-full bg-white/40 z-30 pointer-events-none" />
        </div>

        {/* Caption Bar Below Phone Screen */}
        {title && (
          <div className="p-3 bg-zinc-950 border-t border-zinc-800/90 flex items-center justify-between px-4 text-xs">
            <span className="font-bold text-zinc-200 truncate pr-2">{title}</span>
            <span className="text-[9px] font-mono font-bold text-pink-400 shrink-0">iPhone 14 Pro Max</span>
          </div>
        )}
      </div>
    </div>
  );
}
