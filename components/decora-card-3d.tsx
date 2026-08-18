'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { RotateCw, Sparkles, ZoomIn, Eye } from 'lucide-react';
import { DecoraGroupLogo } from '@/components/logo';

interface DecoraCard3DProps {
  frontImage?: string;
  backImage?: string;
  onOpenLightbox?: (index: number) => void;
  className?: string;
}

export function DecoraCard3D({
  frontImage = '/projects/decora-business-card/decora-card-front.webp',
  backImage = '/projects/decora-business-card/decora-card-back.webp',
  onOpenLightbox,
  className = '',
}: DecoraCard3DProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className={`flex flex-col items-center justify-center w-full select-none ${className}`}>
      {/* 3D Scene Wrapper */}
      <div 
        className="w-full max-w-2xl py-6 flex flex-col items-center justify-center"
        style={{ perspective: '1400px' }}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={toggleFlip}
          className="relative w-full aspect-[1050/600] max-w-[620px] rounded-2xl sm:rounded-3xl cursor-pointer group shadow-[0_30px_90px_rgba(0,0,0,0.5)] dark:shadow-[0_30px_90px_rgba(0,0,0,0.8)] transition-all duration-300 hover:shadow-[0_40px_100px_rgba(99,102,241,0.25)]"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY + (isFlipped ? 180 : 0)}deg)`,
            transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease',
          }}
        >
          {/* FRONT FACE (Lado Frontal) */}
          <div
            className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-300 dark:border-zinc-700/80 bg-zinc-950 shadow-2xl"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <Image
              src={frontImage}
              alt="Tarjeta de Presentación Decora Group - Frente"
              fill
              unoptimized
              priority
              className="object-cover object-center pointer-events-none"
            />
            {/* Dynamic Cursor Glare Effect */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}) 0%, transparent 60%)`,
              }}
            />
            {/* Front Badge */}
            <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-black uppercase text-white shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Lado Frontal</span>
              </span>
            </div>
          </div>

          {/* BACK FACE (Lado Trasero) */}
          <div
            className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-300 dark:border-zinc-700/80 bg-zinc-950 shadow-2xl"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <Image
              src={backImage}
              alt="Tarjeta de Presentación Decora Group - Reverso"
              fill
              unoptimized
              priority
              className="object-cover object-center pointer-events-none"
            />
            {/* Dynamic Cursor Glare Effect */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}) 0%, transparent 60%)`,
              }}
            />
            {/* Back Badge */}
            <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-black uppercase text-indigo-300 shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <span>Lado Trasero (Servicios)</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls & Instructions Strip */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-3 z-30">
        <button
          onClick={toggleFlip}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-black shadow-xl hover:shadow-indigo-500/25 transition-all duration-200 cursor-pointer active:scale-95"
        >
          <RotateCw className={`w-4 h-4 transition-transform duration-500 ${isFlipped ? 'rotate-180' : ''}`} />
          <span>{isFlipped ? 'Ver Lado Frontal' : 'Dar Vuelta a la Tarjeta (3D)'}</span>
        </button>

        {onOpenLightbox && (
          <button
            onClick={() => onOpenLightbox(isFlipped ? 1 : 0)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
          >
            <ZoomIn className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Pantalla Completa HD</span>
          </button>
        )}

        <span className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 font-medium px-2 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Pasa el cursor o haz clic para girar en 3D</span>
        </span>
      </div>
    </div>
  );
}

export default DecoraCard3D;
