import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  FileSpreadsheet, 
  ShoppingCart, 
  Edit3, 
  Check, 
  Sparkles, 
  MessageCircle, 
  Printer,
  Search,
  RotateCcw,
  Crop
} from 'lucide-react';
import { COMPANY_INFO } from '../data/catalogProducts';
import { FerreToolsLogo } from './BrandLogos';

interface HeaderProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  isEditMode: boolean;
  onToggleEditMode: () => void;
  onResetPrices: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenPrint: () => void;
  onOpenCropTool?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  isEditMode,
  onToggleEditMode,
  onResetPrices,
  searchQuery,
  onSearchChange,
  onOpenPrint,
  onOpenCropTool
}) => {
  return (
    <header className="sticky top-0 z-40 w-full shadow-md bg-white">
      {/* Topmost Institutional Contact Ribbon (Dark Navy Blue #0c234a matching PDF) */}
      <div className="bg-[#0b1f3f] text-slate-200 border-b border-blue-900/60 text-xs py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1 gap-x-4">
          {/* Left: Official Company Name & RUC */}
          <div className="flex flex-wrap items-center gap-x-3 text-[11px] sm:text-xs">
            <span className="font-extrabold text-amber-400 tracking-wide uppercase">
              {COMPANY_INFO.name}
            </span>
            <span className="hidden sm:inline text-blue-300">•</span>
            <span className="bg-blue-900/70 text-amber-300 font-semibold px-2 py-0.5 rounded text-[11px]">
              RUC: {COMPANY_INFO.ruc}
            </span>
          </div>

          {/* Right: Quick Direct Call & WhatsApp Contact Channels */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs font-medium">
            <a 
              href={`tel:${COMPANY_INFO.officePhone}`}
              className="flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors"
              title="Llamar a Oficina"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">Oficina:</span>
              <span className="font-bold">{COMPANY_INFO.officePhone}</span>
            </a>
            <span className="text-blue-800">|</span>
            <a 
              href={`https://wa.me/507${COMPANY_INFO.whatsApp1.replace('-', '')}?text=Hola%20FerreTools,%20deseo%20hacer%20una%20consulta%20del%20catálogo`}
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-emerald-200 font-bold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
              <span>WhatsApp: {COMPANY_INFO.whatsApp1}</span>
            </a>
            <span className="hidden lg:inline text-blue-800">/</span>
            <a 
              href={`https://wa.me/507${COMPANY_INFO.whatsApp2.replace('-', '')}?text=Hola%20FerreTools,%20deseo%20hacer%20una%20consulta%20del%20catálogo`}
              target="_blank" 
              rel="noreferrer"
              className="hidden lg:flex items-center gap-1 text-emerald-300 hover:text-emerald-200 font-bold transition-colors"
            >
              <span>{COMPANY_INFO.whatsApp2}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand & Controls Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          
          {/* Logo & Corporate Tagline */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FerreToolsLogo size="md" />
              <div className="hidden xl:block pl-3 border-l border-slate-200">
                <span className="block text-[11px] font-extrabold text-blue-900 uppercase tracking-widest">
                  DISTRIBUIDOR MAYORISTA
                </span>
                <span className="block text-[10px] text-slate-500 max-w-xs leading-tight">
                  {COMPANY_INFO.address}
                </span>
              </div>
            </div>

            {/* Mobile Cart Trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                id="header-mobile-cart-button"
                onClick={onOpenCart}
                className="relative flex items-center gap-1.5 bg-[#0c234a] text-white px-3.5 py-2 rounded-xl font-bold shadow-sm active:scale-95 transition-all text-xs"
              >
                <ShoppingCart className="w-4 h-4 text-amber-400" />
                <span>${cartTotal.toFixed(2)}</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search bar & Interactive Tools */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 flex-1 lg:max-w-2xl lg:justify-end">
            {/* Live Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="catalog-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar por producto, código (ej: YL24018, H107), medida o marca..."
                className="w-full bg-slate-100/90 hover:bg-slate-100 focus:bg-white text-slate-900 pl-10 pr-8 py-2 rounded-xl text-sm border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-hidden transition-all shadow-inner placeholder:text-slate-400 font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 font-bold text-xs p-1"
                  title="Limpiar búsqueda"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Actions Row */}
            <div className="flex items-center gap-2 justify-end">
              {/* Toggle Edit Mode Button (Admin/Cotizador) */}
              <button
                type="button"
                id="toggle-edit-mode-btn"
                onClick={onToggleEditMode}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                  isEditMode 
                    ? 'bg-amber-400 text-blue-950 ring-2 ring-amber-500 shadow-amber-200' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
                title={isEditMode ? 'Desactivar modo edición de precios' : 'Activar edición manual de precios'}
              >
                <Edit3 className={`w-3.5 h-3.5 ${isEditMode ? 'text-blue-950 font-black' : 'text-slate-500'}`} />
                <span className="hidden sm:inline">
                  {isEditMode ? 'Edición Activa' : 'Editar Precios'}
                </span>
                <span className="sm:hidden">
                  {isEditMode ? 'Edición ON' : 'Editar'}
                </span>
              </button>

              {/* Reset Custom Prices button (only if in edit mode) */}
              {isEditMode && (
                <button
                  type="button"
                  id="reset-prices-btn"
                  onClick={onResetPrices}
                  className="p-2 rounded-xl text-xs font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition-colors"
                  title="Restablecer precios originales de fábrica"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Catalog Images Crop & Embed Tool Button */}
              {onOpenCropTool && (
                <button
                  type="button"
                  id="header-crop-images-btn"
                  onClick={onOpenCropTool}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-amber-100/70 hover:text-blue-950 text-slate-700 border border-slate-200 transition-colors"
                  title="Herramienta de Recorte e Incrustación de Imágenes del Catálogo"
                >
                  <Crop className="w-3.5 h-3.5 text-amber-600" />
                  <span className="hidden xl:inline">Imágenes del Catálogo</span>
                  <span className="xl:hidden">Imágenes</span>
                </button>
              )}

              {/* Print / Cotización PDF Button */}
              <button
                type="button"
                id="header-print-btn"
                onClick={onOpenPrint}
                className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
                title="Imprimir o generar Cotización PDF formal"
              >
                <Printer className="w-3.5 h-3.5 text-slate-600" />
                <span>Cotización</span>
              </button>

              {/* Desktop Cart Button */}
              <button
                type="button"
                id="header-desktop-cart-button"
                onClick={onOpenCart}
                className="hidden lg:flex items-center gap-2.5 bg-[#0c234a] hover:bg-[#081833] text-white px-4 py-2 rounded-xl font-bold shadow-sm active:scale-98 transition-all"
              >
                <div className="relative">
                  <ShoppingCart className="w-4 h-4 text-amber-400" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black animate-bounce">
                      {cartCount}
                    </span>
                  )}
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">
                    {cartCount === 1 ? '1 Producto' : `${cartCount} Productos`}
                  </span>
                  <span className="text-sm font-black text-amber-300">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Information Banner Bar: Physical Warehouse & Location Details */}
      <div className="bg-slate-50 border-t border-slate-200/80 px-4 sm:px-6 py-1 text-[11px] text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1 gap-x-4">
          <div className="flex items-center gap-1.5 truncate">
            <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span className="truncate">
              <strong className="text-slate-800">Bodega Principal:</strong> {COMPANY_INFO.address}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-slate-500">
            <div className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-amber-600" />
              <span>{COMPANY_INFO.email}</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3 text-blue-600" />
              <span>{COMPANY_INFO.website}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
