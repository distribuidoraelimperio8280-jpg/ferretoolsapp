import React, { useState } from 'react';
import { X, Plus, Package, Tag, Check, Sparkles } from 'lucide-react';
import { CategoryId, Product } from '../types';
import { CATEGORIES } from '../data/catalogProducts';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (product: Product) => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({
  isOpen,
  onClose,
  onAddProduct
}) => {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState<CategoryId>('ferreteria');
  const [brand, setBrand] = useState('FERRETOOLS');
  const [measure, setMeasure] = useState('');
  const [packageInfo, setPackageInfo] = useState('12 PZA');
  const [price, setPrice] = useState('5.00');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !code.trim()) return;

    const parsedPrice = parseFloat(price);

    const newProd: Product = {
      id: `custom-${Date.now()}`,
      code: code.trim().toUpperCase(),
      name: name.trim().toUpperCase(),
      category,
      brand: brand.trim().toUpperCase() || 'FERRETOOLS',
      measure: measure.trim() || 'Estándar',
      packageInfo: packageInfo.trim() || '12 PZA',
      price: isNaN(parsedPrice) || parsedPrice < 0 ? 0 : parsedPrice,
      description: description.trim() || 'Producto agregado manualmente al catálogo digital.',
      isCustom: true
    };

    onAddProduct(newProd);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="bg-[#0b1f3f] text-white p-4 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-2">
            <Plus className="w-5 h-5 text-amber-400" />
            <h3 className="font-heading font-black text-lg uppercase tracking-wide text-amber-300">
              Añadir Producto al Catálogo
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-blue-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3.5 text-xs">
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                Código de Producto (*):
              </label>
              <input
                type="text"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Ej. YL-9988"
                className="w-full bg-slate-50 px-3 py-2 border border-slate-300 rounded-lg text-xs font-mono font-bold text-blue-950 focus:ring-1 focus:ring-amber-500 uppercase"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                Marca:
              </label>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="DEKÖ / HARDEN / BRICKELL"
                className="w-full bg-slate-50 px-3 py-2 border border-slate-300 rounded-lg text-xs font-bold text-slate-800 focus:ring-1 focus:ring-amber-500 uppercase"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
              Nombre / Descripción del Producto (*):
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. LLAVE DE PASO DE BRONCE 1/2"
              className="w-full bg-slate-50 px-3 py-2 border border-slate-300 rounded-lg text-xs font-bold text-slate-900 focus:ring-1 focus:ring-amber-500 uppercase"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                Categoría:
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as CategoryId)}
                className="w-full bg-slate-50 px-3 py-2 border border-slate-300 rounded-lg text-xs font-bold text-slate-800 focus:ring-1 focus:ring-amber-500"
              >
                {CATEGORIES.filter(c => c.id !== 'todos').map(c => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                Medida:
              </label>
              <input
                type="text"
                value={measure}
                onChange={(e) => setMeasure(e.target.value)}
                placeholder='Ej. 1/2" X 3/4"'
                className="w-full bg-slate-50 px-3 py-2 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                Empaque / Presentación:
              </label>
              <input
                type="text"
                value={packageInfo}
                onChange={(e) => setPackageInfo(e.target.value)}
                placeholder="Ej. 12 PZA / 100 PZA"
                className="w-full bg-slate-50 px-3 py-2 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-amber-900 uppercase mb-1">
                Precio Unitario ($ USD):
              </label>
              <input
                type="number"
                step="0.05"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                className="w-full bg-white px-3 py-2 border-2 border-amber-400 rounded-lg text-xs font-black text-blue-950 focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
              Detalles Adicionales / Especificación Técnica:
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Material, resistencia, rosca NPT, etc."
              className="w-full bg-slate-50 px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold text-xs"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#0c234a] hover:bg-blue-900 text-amber-300 rounded-xl font-heading font-black text-xs uppercase tracking-wider shadow transition-all flex items-center gap-1.5"
            >
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Guardar en Catálogo</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
