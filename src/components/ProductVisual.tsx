import React, { useState } from 'react';
import { 
  Droplets, 
  Wrench, 
  Hammer, 
  Zap, 
  Flame, 
  ShieldCheck, 
  Lock, 
  HardHat, 
  Sparkles,
  Crop,
  ZoomIn,
  Maximize2,
  X
} from 'lucide-react';
import { Product } from '../types';

interface ProductVisualProps {
  product: Product;
  activeMeasure?: string;
  activePackage?: string;
  activeCode?: string;
  onOpenCrop?: (product: Product) => void;
  className?: string;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({ 
  product, 
  activeMeasure, 
  activePackage, 
  activeCode,
  onOpenCrop, 
  className = '' 
}) => {
  const [imageError, setImageError] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const code = (activeCode || product.code).toUpperCase();
  const category = product.category;
  const measureDisplay = activeMeasure || product.measure;
  const packageDisplay = activePackage || product.packageInfo;

  // Determine fallback image based on catalog category / codes if product.imageUrl isn't explicitly set
  const resolveCatalogImage = (): string | undefined => {
    if (product.imageUrl && !imageError) {
      return product.imageUrl;
    }

    // Default authentic local assets
    if (code.includes('YL24018') || code.includes('ZX-BL') || code.includes('P006') || code.includes('HG03') || code.includes('HG04') || code.includes('P174') || code.includes('YL26017')) {
      return '/images/canasta_fregador.jpg';
    }
    if (code.includes('P245') || code.includes('P326') || code.includes('P246') || code.includes('YL123') || code.includes('P250') || code.includes('P214') || code.includes('P291') || code.includes('P088') || code.includes('P289') || code.includes('P290') || code.includes('P044') || code.includes('P065') || code.includes('P087') || code.includes('P045') || code.includes('YL121') || code.includes('P078') || code.includes('P242') || code.includes('P249')) {
      return '/images/grifo_fregador.jpg';
    }
    if (code.includes('YL70208') || code.includes('YL70207') || code.includes('YL70209') || code.includes('P257') || code.includes('E01-') || code.includes('P240') || code.includes('P226') || code.includes('P079') || code.includes('P315') || code.includes('YL70401') || code.includes('P314') || code.includes('YL70327') || code.includes('YL70329')) {
      return '/images/valvula_angulo.jpg';
    }
    if (code.includes('TRAP') || code.includes('YL24044') || code.includes('YL24114') || code.includes('YL24050') || code.includes('YL24049') || code.includes('P115') || code.includes('P007') || code.includes('P282') || code.includes('YL24084') || code.includes('EXT1-') || code.includes('PPDRAINER') || code.includes('TP1-')) {
      return '/images/trampa_fregador.jpg';
    }
    if (code.includes('YL30095') || code.includes('YL30096') || code.includes('YL30099') || code.includes('YL34070') || code.includes('YL34072') || code.includes('YL34071') || code.includes('YL35030') || code.includes('YL35031') || code.includes('YL32008') || code.includes('YL32009') || code.includes('P286') || code.includes('P234') || code.includes('P215')) {
      return '/images/tubo_abasto.jpg';
    }
    if (code.includes('YL47043') || code.includes('YL47046') || code.includes('YL47001') || code.includes('YL47003') || code.includes('YL47066') || code.includes('YL47061') || code.includes('YL47007') || code.includes('YL47030') || code.includes('YL47031') || code.includes('YL47020M') || code.includes('YL47026') || code.includes('P179') || code.includes('YL47027') || code.includes('YL47017') || code.includes('YL47015') || code.includes('YL47019') || code.includes('YL47010') || code.includes('YL47016') || code.includes('YL47049')) {
      return '/images/korky_inodoro.jpg';
    }
    if (code.includes('YL70111') || code.includes('P175') || code.includes('YL70113') || code.includes('YL12501') || code.includes('YL12502') || code.includes('YL6600') || code.includes('YL6601')) {
      return '/images/llave_chorro.jpg';
    }
    if (code.includes('P320') || code.includes('P319') || code.includes('P311') || code.includes('P310') || code.includes('P309') || code.includes('P293') || code.includes('P294') || code.includes('P090') || code.includes('P003') || code.includes('P133') || code.includes('P233') || code.includes('P134') || code.includes('P183') || code.includes('P317')) {
      return '/images/regadera_ducha.jpg';
    }
    if (code.includes('P037') || code.includes('P038') || code.includes('P095') || code.includes('P099') || code.includes('P072') || code.includes('P110')) {
      return '/images/fregador_acero.jpg';
    }
    if (code.includes('H107') || code.includes('H108') || code.includes('H109') || code.includes('H103') || code.includes('H104') || code.includes('H105') || code.includes('H106') || code.includes('H112') || code.includes('H113') || code.includes('H110') || code.includes('H111')) {
      return '/images/alicate_universal.jpg';
    }
    if (code.includes('H116') || code.includes('H117') || code.includes('H118') || code.includes('H119') || code.includes('H075') || code.includes('H076') || code.includes('H077') || code.includes('H078')) {
      return '/images/llave_tubo.jpg';
    }
    if (code.includes('H036') || code.includes('H037') || code.includes('H024') || code.includes('H035') || code.includes('H087') || code.includes('H020') || code.includes('H021') || code.includes('H022') || code.includes('H023') || code.includes('H089') || code.includes('H002') || code.includes('H016') || code.includes('H026') || code.includes('H027') || code.includes('H006') || code.includes('H007') || code.includes('H028') || code.includes('H137') || code.includes('H124') || code.includes('H123') || code.includes('H048')) {
      return '/images/disco_corte.jpg';
    }
    if (code.includes('E003') || code.includes('E088') || code.includes('E014') || code.includes('E015') || code.includes('E016') || code.includes('E021') || code.includes('E026') || code.includes('E044') || code.includes('E089') || code.includes('E029') || code.includes('E030') || code.includes('E031') || code.includes('E050') || code.includes('GL-XTURCAL') || code.includes('PBS-5') || code.includes('PBA-P30') || code.includes('PBP116') || code.includes('E099') || code.includes('E102') || code.includes('PBA-P64')) {
      return '/images/regleta_electrica.jpg';
    }
    if (code.includes('FLMEM') || code.includes('F122') || code.includes('F304') || code.includes('F184') || code.includes('F086') || code.includes('F087') || code.includes('F187') || code.includes('F185') || code.includes('F116') || code.includes('F010') || code.includes('F011') || code.includes('F195') || code.includes('C001') || code.includes('C002') || code.includes('C003') || code.includes('C005') || code.includes('C006') || code.includes('C018') || code.includes('C019') || code.includes('C022') || code.includes('C023') || code.includes('C030') || code.includes('C031') || code.includes('C040') || code.includes('C041') || code.includes('C048') || code.includes('C049') || code.includes('C060') || code.includes('C062')) {
      return '/images/cerradura_manija.jpg';
    }
    if (code.includes('12-AB') || code.includes('13-AB') || code.includes('14-AB') || code.includes('9-AB') || code.includes('ES-CW') || code.includes('F205') || code.includes('F206') || code.includes('F328') || code.includes('F327') || code.includes('F326') || code.includes('HSAB-404') || code.includes('DESG-3314') || code.includes('F314') || code.includes('F317') || code.includes('ABTS') || code.includes('BF-P3') || code.includes('HSMG') || code.includes('P054') || code.includes('P053') || code.includes('P005')) {
      return '/images/silicon_abro.jpg';
    }
    if (code.includes('F049') || code.includes('F050') || code.includes('F051') || code.includes('F052') || code.includes('F053') || code.includes('F054') || code.includes('F055') || code.includes('F056') || code.includes('F057') || code.includes('F178') || code.includes('F179') || code.includes('F233') || code.includes('F234') || code.includes('F035') || code.includes('F232')) {
      return '/images/candado_laton.jpg';
    }

    return undefined;
  };

  const finalImageUrl = resolveCatalogImage();

  // Render stylized SVG illustration fallback
  const renderArt = () => {
    if (category === 'plomeria') return <Droplets className="w-14 h-14 text-sky-500" />;
    if (category === 'ferreteria') return <Wrench className="w-14 h-14 text-amber-500" />;
    if (category === 'herramientas') return <Hammer className="w-14 h-14 text-orange-500" />;
    if (category === 'electricidad') return <Zap className="w-14 h-14 text-yellow-500" />;
    if (category === 'aditivos') return <Flame className="w-14 h-14 text-rose-500" />;
    if (category === 'seguridad') return <ShieldCheck className="w-14 h-14 text-emerald-500" />;
    if (category === 'cerraduras') return <Lock className="w-14 h-14 text-blue-500" />;
    if (category === 'construccion') return <HardHat className="w-14 h-14 text-amber-600" />;
    return <Sparkles className="w-14 h-14 text-blue-500" />;
  };

  return (
    <>
      <div 
        className={`group/visual relative w-full aspect-4/3 flex items-center justify-center bg-radial from-white via-slate-50 to-slate-100/90 p-2 overflow-hidden select-none ${className}`}
      >
        {/* Real Product Image if available */}
        {finalImageUrl && !imageError ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={finalImageUrl}
              alt={`${product.name} - ${measureDisplay}`}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover/visual:scale-105"
              loading="lazy"
            />

            {/* Quick Zoom Action on Image */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(true);
              }}
              className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/90 hover:bg-white text-slate-700 shadow-md opacity-0 group-hover/visual:opacity-100 transition-opacity"
              title="Ampliar imagen del catálogo"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-slate-400">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              {renderArt()}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-2">
              {product.category}
            </span>
          </div>
        )}

        {/* Measure & Package Info Overlay Badge - Identical to printed PDF Callout */}
        <div className="absolute bottom-2 left-2 flex flex-col gap-1 pointer-events-none max-w-[85%]">
          {measureDisplay && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-extrabold bg-[#0b1f3f]/90 text-amber-300 border border-amber-400/40 shadow-xs backdrop-blur-xs">
              <span className="text-white/70 font-semibold">MEDIDA:</span> {measureDisplay}
            </span>
          )}
          {packageDisplay && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-white/95 text-slate-800 border border-slate-200 shadow-xs">
              <span className="text-slate-400 font-semibold">EMPAQUE:</span> {packageDisplay}
            </span>
          )}
        </div>

        {/* Interactive "Recortar / Cambiar Imagen" Button on Hover/Focus */}
        {onOpenCrop && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenCrop(product);
            }}
            className="absolute top-2 left-2 px-2 py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-blue-950 text-[11px] font-black shadow-md opacity-0 group-hover/visual:opacity-100 transition-all flex items-center gap-1 z-10"
            title="Recortar o cambiar imagen para esta medida y descripción"
          >
            <Crop className="w-3 h-3 stroke-2.5" />
            <span>Recortar Imagen</span>
          </button>
        )}
      </div>

      {/* Lightbox Fullscreen Image View Modal */}
      {isLightboxOpen && finalImageUrl && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
              <div>
                <h3 className="font-heading font-black text-blue-950 text-base">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                  <span className="font-mono font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                    {code}
                  </span>
                  <span>Medida: <strong>{measureDisplay}</strong></span>
                  <span>•</span>
                  <span>Empaque: <strong>{packageDisplay}</strong></span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-4/3 max-h-[60vh] bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center p-3">
              <img
                src={finalImageUrl}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="text-slate-500 italic">
                {product.description}
              </span>

              {onOpenCrop && (
                <button
                  type="button"
                  onClick={() => {
                    setIsLightboxOpen(false);
                    onOpenCrop(product);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-950 text-white font-bold flex items-center gap-1.5 shrink-0"
                >
                  <Crop className="w-3.5 h-3.5" />
                  <span>Recortar / Cambiar Imagen</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
