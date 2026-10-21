import React from 'react';

export const FerreToolsLogo: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'hero' }> = ({
  className = '',
  size = 'md'
}) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';
  const isHero = size === 'hero';

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Visual Emblem */}
      <div className={`relative flex items-center justify-center rounded-sm bg-amber-400 p-1 font-black shadow-sm ${
        isSm ? 'w-8 h-8' : isLg ? 'w-14 h-14' : isHero ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-11 h-11'
      }`}>
        <div className="w-full h-full bg-[#0c234a] rounded-[2px] flex items-center justify-center relative overflow-hidden">
          {/* Stylized White/Yellow F monogram with tool wrench angle */}
          <svg viewBox="0 0 100 100" className="w-4/5 h-4/5 text-white fill-current">
            <path d="M18 15 H82 V34 H40 V48 H72 V65 H40 V85 H18 Z" fill="#ffffff" />
            <polygon points="40,34 82,34 68,48 40,48" fill="#fbbf24" />
            <polygon points="40,65 72,65 60,78 40,78" fill="#fbbf24" opacity="0.9" />
          </svg>
        </div>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1 font-heading tracking-tight font-extrabold uppercase text-[#0c234a]">
          <span className={`${isSm ? 'text-lg' : isLg ? 'text-3xl' : isHero ? 'text-3xl sm:text-5xl' : 'text-2xl'}`}>
            FERRE
          </span>
          <span className={`text-amber-500 ${isSm ? 'text-lg' : isLg ? 'text-3xl' : isHero ? 'text-3xl sm:text-5xl' : 'text-2xl'}`}>
            TOOLS
          </span>
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <span className={`font-bold tracking-wider text-slate-500 uppercase ${isSm ? 'text-[9px]' : 'text-[10px] sm:text-[11px]'}`}>
            SU DISTRIBUIDORA DE CONFIANZA
          </span>
        </div>
      </div>
    </div>
  );
};

export const DeköLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900/60 backdrop-blur-xs text-white ${className}`}>
    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
    <span className="font-extrabold tracking-widest text-xs uppercase text-amber-300">DEKÖ</span>
  </div>
);

export const CuperElectricLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex flex-col items-center justify-center border border-amber-400/40 bg-blue-950 px-2 py-0.5 rounded text-white ${className}`}>
    <span className="text-[10px] font-black tracking-widest text-amber-400">CUPER</span>
    <span className="text-[7px] tracking-tighter text-slate-300">⚡ ELECTRIC</span>
  </div>
);

export const AbroLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center gap-1 bg-red-600 px-2 py-0.5 rounded text-white font-black tracking-wider text-xs ${className}`}>
    <span className="text-[9px] bg-white text-red-600 px-1 py-0.2 rounded-xs font-black">USA</span>
    <span>ABRO</span>
  </div>
);

export const BrickellLogo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center bg-zinc-800 border border-zinc-600 px-2 py-0.5 rounded text-amber-400 font-bold tracking-wider text-[11px] ${className}`}>
    BRICKELL
  </div>
);
