import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Edit3, 
  Check, 
  Plus, 
  Minus, 
  Package, 
  Sparkles, 
  AlertCircle,
  Tag,
  Crop
} from 'lucide-react';
import { Product, ProductVariant } from '../types';
import { ProductVisual } from './ProductVisual';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number, selectedVariant?: ProductVariant) => void;
  onUpdateProduct: (updated: Product) => void;
  onOpenCrop?: (product: Product) => void;
  isGlobalEditMode: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onUpdateProduct,
  onOpenCrop,
  isGlobalEditMode
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState<number>(0);
  const [showAddedNotice, setShowAddedNotice] = useState<boolean>(false);

  // Editable local state for quick inline modification
  const [editName, setEditName] = useState<string>(product.name);
  const [editCode, setEditCode] = useState<string>(product.code);
  const [editMeasure, setEditMeasure] = useState<string>(product.measure);
  const [editPackage, setEditPackage] = useState<string>(product.packageInfo);
  const [editPrice, setEditPrice] = useState<string>(product.price.toString());

  // Current active variant if available
  const currentVariant = product.variants && product.variants.length > 0 
    ? product.variants[selectedVariantIdx] 
    : null;

  const activeCode = currentVariant ? currentVariant.code : product.code;
  const activeMeasure = currentVariant ? currentVariant.measure : product.measure;
  const activePackage = currentVariant ? currentVariant.packageInfo : product.packageInfo;
  const activePrice = (currentVariant && currentVariant.price !== undefined) 
    ? currentVariant.price 
    : product.price;

  const handleSaveEdit = () => {
    const numPrice = parseFloat(editPrice);
    const validPrice = isNaN(numPrice) || numPrice < 0 ? 0 : numPrice;

    onUpdateProduct({
      ...product,
      name: editName.trim() || product.name,
      code: editCode.trim() || product.code,
      measure: editMeasure.trim() || product.measure,
      packageInfo: editPackage.trim() || product.packageInfo,
      price: validPrice,
      isCustom: true
    });
    setIsEditing(false);
  };

  const handleQuickPriceChange = (newPriceStr: string) => {
    const parsed = parseFloat(newPriceStr);
    if (!isNaN(parsed) && parsed >= 0) {
      onUpdateProduct({
        ...product,
        price: parsed,
        isCustom: true
      });
    }
  };

  const handleAdd = () => {
    onAddToCart(product, quantity, currentVariant || undefined);
    setShowAddedNotice(true);
    setTimeout(() => {
      setShowAddedNotice(false);
    }, 1200);
  };

  return (
    <div 
      id={`product-card-${product.code.toLowerCase()}`}
      className={`group relative flex flex-col justify-between bg-white rounded-xl border transition-all duration-200 shadow-sm hover:shadow-lg overflow-hidden ${
        product.isCustom ? 'border-amber-400/80 ring-1 ring-amber-300' : 'border-slate-200 hover:border-blue-800/40'
      }`}
    >
      {/* Upper Section */}
      <div>
        {/* Yellow/Golden Product Title Header - Strictly mimicking PDF style */}
        <div className="bg-[#0b1f3f] px-3.5 py-2.5 border-b border-amber-400/50 flex items-start justify-between gap-2">
          <h3 className="font-heading font-extrabold text-sm sm:text-base tracking-wide text-amber-300 uppercase leading-snug line-clamp-2">
            {product.name}
          </h3>

          {/* Quick Actions for this individual product */}
          <div className="flex items-center gap-1 shrink-0">
            {onOpenCrop && (
              <button
                type="button"
                onClick={() => onOpenCrop(product)}
                className="p-1 rounded-md text-xs text-amber-300/80 hover:text-amber-300 hover:bg-blue-900/80 transition-colors"
                title="Recortar o incrustar imagen del catálogo para esta medida"
              >
                <Crop className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className={`p-1 rounded-md text-xs transition-colors shrink-0 ${
                isEditing || isGlobalEditMode 
                  ? 'bg-amber-400 text-blue-950 font-bold' 
                  : 'text-slate-400 hover:text-amber-300 hover:bg-blue-900/60'
              }`}
              title="Editar nombre, código, medida o precio"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Brand & Badge Tags */}
        <div className="flex items-center justify-between px-3 pt-2">
          {product.brand ? (
            <span className="text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded bg-blue-50 text-[#0c234a] border border-blue-100">
              {product.brand}
            </span>
          ) : (
            <span className="text-[10px] font-bold text-slate-400 uppercase">
              FERRETOOLS
            </span>
          )}

          {product.badge && (
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-red-600 text-white tracking-wider animate-pulse">
              {product.badge}
            </span>
          )}

          {product.isCustom && (
            <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">
              Precio Editado
            </span>
          )}
        </div>

        {/* Visual Product Illustration / Image */}
        <div className="px-3 py-1">
          <div className="rounded-lg border border-slate-100 overflow-hidden relative">
            <ProductVisual 
              product={product} 
              activeMeasure={activeMeasure}
              activePackage={activePackage}
              activeCode={activeCode}
              onOpenCrop={onOpenCrop}
            />

            {/* Added to cart toast overlay */}
            {showAddedNotice && (
              <div className="absolute inset-0 bg-[#0c234a]/90 backdrop-blur-xs flex items-center justify-center text-white font-bold text-sm z-10 transition-all">
                <div className="flex items-center gap-2 text-amber-300 bg-blue-950 px-3 py-1.5 rounded-lg border border-amber-400">
                  <Check className="w-5 h-5 text-emerald-400 stroke-3" />
                  <span>¡Agregado al Carrito!</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Description */}
        {product.description && (
          <p className="px-3.5 text-xs text-slate-600 line-clamp-2 my-1.5 font-normal leading-relaxed">
            {product.description}
          </p>
        )}

        {/* Inline Edit Form when active */}
        {isEditing && (
          <div className="m-3 p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-xs flex flex-col gap-2">
            <div className="flex items-center justify-between font-bold text-amber-900 pb-1 border-b border-amber-200">
              <span>Edición Rápida de Producto</span>
              <span className="text-[10px] font-normal text-amber-700">Cambios inmediatos</span>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-700 uppercase">Nombre:</label>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full bg-white px-2 py-1 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-500 font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-bold text-slate-700 uppercase">Código:</label>
                <input
                  type="text"
                  value={editCode}
                  onChange={(e) => setEditCode(e.target.value)}
                  className="w-full bg-white px-2 py-1 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-500 font-mono"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-700 uppercase">Medida:</label>
                <input
                  type="text"
                  value={editMeasure}
                  onChange={(e) => setEditMeasure(e.target.value)}
                  className="w-full bg-white px-2 py-1 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-500 font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-bold text-slate-700 uppercase">Empaque / PZA:</label>
                <input
                  type="text"
                  value={editPackage}
                  onChange={(e) => setEditPackage(e.target.value)}
                  className="w-full bg-white px-2 py-1 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-amber-900 uppercase">Precio ($):</label>
                <input
                  type="number"
                  step="0.05"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                  className="w-full bg-white px-2 py-1 border-2 border-amber-500 rounded text-xs font-bold text-blue-950 focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-amber-200">
              {onOpenCrop && (
                <button
                  type="button"
                  onClick={() => onOpenCrop(product)}
                  className="px-2 py-1 text-xs font-bold text-blue-900 hover:text-blue-950 hover:bg-amber-200/60 rounded flex items-center gap-1"
                >
                  <Crop className="w-3.5 h-3.5 text-amber-700" />
                  <span>Recortar / Cambiar Imagen</span>
                </button>
              )}
              <div className="flex items-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-2.5 py-1 rounded text-slate-600 hover:bg-slate-200 text-xs font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleSaveEdit}
                  className="px-3 py-1 bg-blue-950 hover:bg-blue-900 text-amber-300 rounded text-xs font-bold flex items-center gap-1"
                >
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>Guardar</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Variant Selector if present */}
        {product.variants && product.variants.length > 1 && (
          <div className="px-3.5 pt-1">
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Variaciones / Medidas disponibles:
            </label>
            <div className="flex flex-wrap gap-1">
              {product.variants.map((v, idx) => (
                <button
                  key={v.code + idx}
                  type="button"
                  onClick={() => setSelectedVariantIdx(idx)}
                  className={`px-2 py-0.5 rounded text-[11px] font-semibold border transition-all ${
                    selectedVariantIdx === idx
                      ? 'bg-[#0c234a] text-amber-300 border-[#0c234a] font-bold shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {v.measure}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Official Catalog Technical Specs Table (Exact PDF styling with Blue Header & Yellow Cells) */}
        <div className="px-3.5 py-2">
          <div className="border border-[#0c234a] rounded-md overflow-hidden text-xs shadow-xs">
            {/* Table Header: Navy Blue with White Text */}
            <div className="bg-[#0b1f3f] text-white grid grid-cols-3 text-center font-heading font-black tracking-wider text-[11px] py-1 uppercase">
              <div className="border-r border-blue-800/80 px-1">CODIGO</div>
              <div className="border-r border-blue-800/80 px-1">MEDIDA</div>
              <div className="flex items-center justify-center gap-1 px-1">
                <Package className="w-3 h-3 text-amber-400" />
                <span>PZA / PQT</span>
              </div>
            </div>

            {/* Table Body: Authentic Light Yellow / Warm Tinted Row */}
            <div className="bg-[#fff9db] text-[#0c234a] grid grid-cols-3 text-center font-bold text-[11px] sm:text-xs py-1.5 items-center">
              <div className="border-r border-amber-300/80 px-1 font-mono tracking-tight font-black text-blue-950">
                {activeCode}
              </div>
              <div className="border-r border-amber-300/80 px-1 truncate" title={activeMeasure}>
                {activeMeasure}
              </div>
              <div className="px-1 text-slate-800 font-extrabold">
                {activePackage}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section: Dedicated Price Tag + Quantity + Add to Cart */}
      <div className="p-3.5 bg-slate-50/90 border-t border-slate-200 mt-2">
        {/* Price display with instant manual edit */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Precio Unitario:
            </span>
            
            {isGlobalEditMode ? (
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-sm font-bold text-blue-950">$</span>
                <input
                  type="number"
                  step="0.05"
                  value={activePrice}
                  onChange={(e) => handleQuickPriceChange(e.target.value)}
                  className="w-20 px-2 py-0.5 border-2 border-amber-400 bg-white rounded font-black text-blue-950 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>
            ) : (
              <div className="flex items-baseline gap-1">
                <span className="text-lg sm:text-xl font-extrabold text-[#0c234a]">
                  ${activePrice.toFixed(2)}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">USD</span>
              </div>
            )}
          </div>

          {/* Quick inline price edit trigger */}
          {!isGlobalEditMode && (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="text-[11px] text-blue-700 hover:text-blue-900 font-bold underline flex items-center gap-1"
              title="Ajustar precio manualmente para este cliente"
            >
              <Tag className="w-3 h-3 text-amber-500" />
              <span>Ajustar</span>
            </button>
          )}
        </div>

        {/* Quantity Controls & Add to Cart Button */}
        <div className="flex items-center gap-2">
          {/* Quantity Selector */}
          <div className="flex items-center bg-white border border-slate-300 rounded-lg p-0.5 shadow-2xs shrink-0">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-blue-950 hover:bg-slate-100 rounded active:scale-95 transition-colors"
              title="Disminuir cantidad"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setQuantity(isNaN(val) || val < 1 ? 1 : val);
              }}
              className="w-8 text-center text-xs font-bold text-slate-800 bg-transparent focus:outline-hidden"
            />
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-blue-950 hover:bg-slate-100 rounded active:scale-95 transition-colors"
              title="Aumentar cantidad"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            type="button"
            id={`add-to-cart-${product.code.toLowerCase()}`}
            onClick={handleAdd}
            className="flex-1 flex items-center justify-center gap-2 bg-[#0c234a] hover:bg-[#071630] text-amber-300 hover:text-amber-200 font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider py-2 px-3 rounded-lg shadow-sm hover:shadow active:scale-98 transition-all"
          >
            <ShoppingCart className="w-4 h-4 text-amber-400" />
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
