import React from 'react';
import { 
  Droplets, 
  Wrench, 
  Hammer, 
  Zap, 
  Flame, 
  ShieldCheck, 
  Lock, 
  HardHat, 
  Layers,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { CategoryId } from '../types';
import { CATEGORIES } from '../data/catalogProducts';

interface CategoryNavProps {
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  categoryCounts: Record<CategoryId, number>;
  activeBrand: string | null;
  onSelectBrand: (brand: string | null) => void;
  availableBrands: string[];
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  activeBrand,
  onSelectBrand,
  availableBrands
}) => {
  const getIcon = (id: CategoryId) => {
    switch (id) {
      case 'plomeria': return <Droplets className="w-4 h-4" />;
      case 'ferreteria': return <Wrench className="w-4 h-4" />;
      case 'herramientas': return <Hammer className="w-4 h-4" />;
      case 'electricidad': return <Zap className="w-4 h-4" />;
      case 'aditivos': return <Flame className="w-4 h-4" />;
      case 'seguridad': return <ShieldCheck className="w-4 h-4" />;
      case 'cerraduras': return <Lock className="w-4 h-4" />;
      case 'construccion': return <HardHat className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full bg-[#0c234a] border-b border-blue-950 py-3 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Category Horizontal Scroll / Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-amber-400/40">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = categoryCounts[cat.id as CategoryId] || 0;

            return (
              <button
                key={cat.id}
                type="button"
                id={`cat-btn-${cat.id}`}
                onClick={() => onSelectCategory(cat.id as CategoryId)}
                className={`group shrink-0 relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all select-none ${
                  isSelected
                    ? 'bg-amber-400 text-blue-950 shadow-md shadow-amber-400/20 font-extrabold ring-2 ring-amber-300'
                    : 'bg-blue-950/70 hover:bg-blue-900 text-slate-200 hover:text-white border border-blue-800/60'
                }`}
              >
                <span className={`${isSelected ? 'text-blue-950' : 'text-amber-400 group-hover:scale-110 transition-transform'}`}>
                  {getIcon(cat.id as CategoryId)}
                </span>
                <span className="uppercase font-heading font-extrabold tracking-wider">
                  {cat.label}
                </span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                  isSelected 
                    ? 'bg-blue-950 text-amber-300' 
                    : 'bg-blue-900/90 text-slate-300'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Brand quick filter pills */}
        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-blue-900/60 overflow-x-auto text-xs text-slate-300">
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest shrink-0">
            Marcas:
          </span>
          <button
            type="button"
            onClick={() => onSelectBrand(null)}
            className={`shrink-0 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase transition-all ${
              activeBrand === null 
                ? 'bg-white text-blue-950 font-black' 
                : 'text-slate-300 hover:bg-blue-900/60'
            }`}
          >
            Todas
          </button>
          {availableBrands.map(brand => (
            <button
              key={brand}
              type="button"
              onClick={() => onSelectBrand(activeBrand === brand ? null : brand)}
              className={`shrink-0 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase transition-all flex items-center gap-1 ${
                activeBrand === brand
                  ? 'bg-amber-400 text-blue-950 font-black'
                  : 'bg-blue-900/50 hover:bg-blue-800 text-slate-200 border border-blue-800/40'
              }`}
            >
              <span>{brand}</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
