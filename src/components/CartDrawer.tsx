import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  Printer, 
  Copy, 
  Check, 
  Building2, 
  User, 
  MapPin, 
  FileText, 
  Phone,
  PackageCheck,
  ShoppingBag,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { CartItem, OrderInfo } from '../types';
import { COMPANY_INFO } from '../data/catalogProducts';
import { FerreToolsLogo } from './BrandLogos';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onUpdateUnitPrice: (productId: string, newPrice: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  orderInfo: OrderInfo;
  onUpdateOrderInfo: (info: Partial<OrderInfo>) => void;
  onOpenPrint: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onUpdateUnitPrice,
  onRemoveItem,
  onClearCart,
  orderInfo,
  onUpdateOrderInfo,
  onOpenPrint
}) => {
  const [copiedNotice, setCopiedNotice] = useState<boolean>(false);
  const [showClientForm, setShowClientForm] = useState<boolean>(true);

  if (!isOpen) return null;

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const itbms = orderInfo.includeItbms ? subtotal * 0.07 : 0;
  const total = subtotal + itbms;
  const totalUnits = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Generate WhatsApp Message text formatted professionally
  const buildWhatsAppMessage = () => {
    const dateStr = new Date().toLocaleDateString('es-PA', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    let msg = `🛠️ *PEDIDO FORMAL - FERRETOOLS PANAMA*\n`;
    msg += `🏢 *DISTRIBUIDORA FERRE-TOOL, S.A.*\n`;
    msg += `📍 *RUC:* ${COMPANY_INFO.ruc}\n`;
    msg += `📅 *Fecha:* ${dateStr}\n`;
    msg += `----------------------------------------\n`;
    msg += `👤 *DATOS DEL CLIENTE / EMPRESA:*\n`;
    msg += `• *Cliente:* ${orderInfo.customerName || 'Cliente General'}\n`;
    if (orderInfo.companyName) msg += `• *Empresa:* ${orderInfo.companyName}\n`;
    if (orderInfo.ruc) msg += `• *RUC/Cédula:* ${orderInfo.ruc}\n`;
    if (orderInfo.phone) msg += `• *Teléfono:* ${orderInfo.phone}\n`;
    if (orderInfo.deliveryAddress) msg += `• *Entrega/Dirección:* ${orderInfo.deliveryAddress}\n`;
    msg += `----------------------------------------\n`;
    msg += `📦 *DETALLE DE PRODUCTOS (${cart.length} ítems - ${totalUnits} unidades):*\n\n`;

    cart.forEach((item, index) => {
      const itemSub = item.unitPrice * item.quantity;
      msg += `${index + 1}. *[${item.code}]* ${item.name}\n`;
      msg += `   📐 Medida: ${item.measure} | Empaque: ${item.packageInfo}\n`;
      msg += `   🔢 Cantidad: ${item.quantity}  ×  $${item.unitPrice.toFixed(2)}  =  *$${itemSub.toFixed(2)}*\n\n`;
    });

    msg += `----------------------------------------\n`;
    msg += `💵 *Subtotal:* $${subtotal.toFixed(2)}\n`;
    if (orderInfo.includeItbms) {
      msg += `📊 *ITBMS (7%):* $${itbms.toFixed(2)}\n`;
      msg += `💰 *TOTAL ESTIMADO CON IMPUESTO:* *$${total.toFixed(2)} USD*\n`;
    } else {
      msg += `💰 *TOTAL ESTIMADO:* *$${total.toFixed(2)} USD*\n`;
    }

    if (orderInfo.notes) {
      msg += `\n📝 *Notas / Instrucciones adicionales:*\n${orderInfo.notes}\n`;
    }

    msg += `\n_Generado desde Catálogo Digital Interactivo FerreTools_`;
    return msg;
  };

  const handleSendWhatsApp = () => {
    const rawNumber = orderInfo.selectedWhatsApp.replace('-', '');
    const message = buildWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/507${rawNumber}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const handleCopyClipboard = () => {
    const text = buildWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col z-10 overflow-hidden">
        
        {/* Drawer Header (Navy Blue institutional style) */}
        <div className="bg-[#0b1f3f] text-white p-4 border-b border-blue-900 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <FerreToolsLogo size="sm" />
            <div className="border-l border-blue-800 pl-3">
              <h2 className="font-heading font-extrabold text-lg uppercase tracking-wider text-amber-300 leading-none">
                Carrito de Pedido
              </h2>
              <span className="text-[11px] text-blue-200 font-medium">
                {cart.length} {cart.length === 1 ? 'producto' : 'productos'} seleccionados
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cart.length > 0 && (
              <button
                type="button"
                onClick={onClearCart}
                className="text-xs text-rose-300 hover:text-rose-100 flex items-center gap-1 p-1.5 rounded-lg hover:bg-red-950/60 transition-colors"
                title="Vaciar carrito"
              >
                <Trash2 className="w-4 h-4" />
                <span className="hidden sm:inline">Vaciar</span>
              </button>
            )}
            <button
              type="button"
              id="close-cart-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-blue-900/80 transition-colors"
              title="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          
          {cart.length === 0 ? (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4 border border-slate-200">
                <ShoppingBag className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-800 uppercase">
                El carrito está vacío
              </h3>
              <p className="text-xs text-slate-500 max-w-xs mt-1">
                Explora el catálogo de FerreTools y haz clic en "Agregar" en cualquiera de los productos.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-5 px-5 py-2.5 bg-[#0c234a] hover:bg-blue-900 text-amber-300 rounded-xl font-heading font-extrabold text-xs uppercase tracking-wider transition-all"
              >
                Ver Catálogo de Productos
              </button>
            </div>
          ) : (
            <>
              {/* Product List Items */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider px-1">
                  <span>Productos del Pedido</span>
                  <span>Subtotal</span>
                </div>

                {cart.map((item) => {
                  const lineTotal = item.unitPrice * item.quantity;
                  return (
                    <div 
                      key={item.productId}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 transition-colors"
                    >
                      {/* Left: Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] font-black bg-[#0c234a] text-amber-300 px-2 py-0.5 rounded">
                            {item.code}
                          </span>
                          <span className="text-[10px] uppercase font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                            {item.measure}
                          </span>
                        </div>
                        <h4 className="font-heading font-extrabold text-slate-900 text-sm mt-1 uppercase truncate" title={item.name}>
                          {item.name}
                        </h4>
                        <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                          <span>Empaque: <strong>{item.packageInfo}</strong></span>
                        </div>
                      </div>

                      {/* Middle & Right: Controls & Price */}
                      <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                        {/* Unit Price Manual Edit in Cart */}
                        <div className="flex flex-col items-start sm:items-end">
                          <span className="text-[9px] font-bold uppercase text-slate-400">P. Unitario ($):</span>
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold text-slate-600">$</span>
                            <input
                              type="number"
                              step="0.05"
                              value={item.unitPrice}
                              onChange={(e) => {
                                const val = parseFloat(e.target.value);
                                onUpdateUnitPrice(item.productId, isNaN(val) || val < 0 ? 0 : val);
                              }}
                              className="w-16 px-1.5 py-0.5 bg-white border border-amber-300 rounded font-bold text-xs text-blue-950 text-right focus:ring-1 focus:ring-amber-500"
                              title="Modificar precio unitario manualmente"
                            />
                          </div>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center bg-white border border-slate-300 rounded-lg p-0.5 shadow-2xs">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                            className="w-6 h-6 flex items-center justify-center text-slate-600 hover:text-blue-950 hover:bg-slate-100 rounded transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => {
                              const v = parseInt(e.target.value);
                              onUpdateQuantity(item.productId, isNaN(v) || v < 1 ? 1 : v);
                            }}
                            className="w-7 text-center text-xs font-bold text-slate-800 bg-transparent focus:outline-hidden"
                          />
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center text-slate-600 hover:text-blue-950 hover:bg-slate-100 rounded transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Line Total */}
                        <div className="w-16 text-right font-black text-sm text-[#0c234a]">
                          ${lineTotal.toFixed(2)}
                        </div>

                        {/* Delete button */}
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.productId)}
                          className="p-1 text-slate-400 hover:text-red-600 rounded transition-colors"
                          title="Eliminar producto"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Customer & Delivery Form for WhatsApp Order */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-3">
                <div 
                  className="flex items-center justify-between cursor-pointer select-none"
                  onClick={() => setShowClientForm(!showClientForm)}
                >
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-amber-500" />
                    <span className="font-heading font-extrabold text-xs sm:text-sm text-slate-900 uppercase">
                      Datos para el Pedido y Despacho
                    </span>
                  </div>
                  <span className="text-xs text-blue-700 font-bold">
                    {showClientForm ? 'Ocultar ▲' : 'Completar ▼'}
                  </span>
                </div>

                {showClientForm && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-200 text-xs">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-0.5">
                        Nombre de Contacto / Comprador:
                      </label>
                      <input
                        type="text"
                        value={orderInfo.customerName}
                        onChange={(e) => onUpdateOrderInfo({ customerName: e.target.value })}
                        placeholder="Ej. Juan Pérez"
                        className="w-full bg-white px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-0.5">
                        Empresa / Ferretería / Razón Social:
                      </label>
                      <input
                        type="text"
                        value={orderInfo.companyName}
                        onChange={(e) => onUpdateOrderInfo({ companyName: e.target.value })}
                        placeholder="Ej. Ferretería Central, S.A."
                        className="w-full bg-white px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-0.5">
                        RUC / Cédula:
                      </label>
                      <input
                        type="text"
                        value={orderInfo.ruc}
                        onChange={(e) => onUpdateOrderInfo({ ruc: e.target.value })}
                        placeholder="Ej. 155702300-2-2021 DV2"
                        className="w-full bg-white px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-0.5">
                        Teléfono / Celular:
                      </label>
                      <input
                        type="tel"
                        value={orderInfo.phone}
                        onChange={(e) => onUpdateOrderInfo({ phone: e.target.value })}
                        placeholder="Ej. 6500-1234"
                        className="w-full bg-white px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-0.5">
                        Dirección de Entrega / Destino:
                      </label>
                      <input
                        type="text"
                        value={orderInfo.deliveryAddress}
                        onChange={(e) => onUpdateOrderInfo({ deliveryAddress: e.target.value })}
                        placeholder="Ej. Vía España frente a estación Iglesia del Carmen, Panamá"
                        className="w-full bg-white px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-0.5">
                        Notas especiales / Indicaciones del pedido:
                      </label>
                      <textarea
                        rows={2}
                        value={orderInfo.notes}
                        onChange={(e) => onUpdateOrderInfo({ notes: e.target.value })}
                        placeholder="Horario preferido de entrega, solicitud de crédito, factura con orden de compra, etc."
                        className="w-full bg-white px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>

                    {/* WhatsApp Destination Selector */}
                    <div className="sm:col-span-2 pt-1 border-t border-slate-200">
                      <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">
                        Enviar a Asesor de Ventas Oficial:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => onUpdateOrderInfo({ selectedWhatsApp: '6278-5344' })}
                          className={`p-2 rounded-lg border text-left flex items-center gap-2 transition-all ${
                            orderInfo.selectedWhatsApp === '6278-5344'
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-400'
                              : 'bg-white border-slate-200 text-slate-600'
                          }`}
                        >
                          <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                          <div className="leading-tight">
                            <span className="block text-[10px] text-slate-500">Línea Principal</span>
                            <span className="text-xs font-black">6278-5344</span>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => onUpdateOrderInfo({ selectedWhatsApp: '6234-6764' })}
                          className={`p-2 rounded-lg border text-left flex items-center gap-2 transition-all ${
                            orderInfo.selectedWhatsApp === '6234-6764'
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-400'
                              : 'bg-white border-slate-200 text-slate-600'
                          }`}
                        >
                          <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                          <div className="leading-tight">
                            <span className="block text-[10px] text-slate-500">Línea Mayorista 2</span>
                            <span className="text-xs font-black">6234-6764</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

        </div>

        {/* Drawer Footer: Total & Actions */}
        {cart.length > 0 && (
          <div className="bg-white border-t border-slate-200 p-4 shadow-lg shrink-0 space-y-3">
            
            {/* Price Calculations */}
            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span>Subtotal ({totalUnits} unidades):</span>
                <span className="font-bold font-mono">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between text-slate-600">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={orderInfo.includeItbms}
                    onChange={(e) => onUpdateOrderInfo({ includeItbms: e.target.checked })}
                    className="rounded text-amber-500 focus:ring-amber-400"
                  />
                  <span>Aplicar ITBMS (7% Panamá)</span>
                </label>
                <span className="font-mono text-slate-600">
                  {orderInfo.includeItbms ? `$${itbms.toFixed(2)}` : 'Exento / Sin ITBMS'}
                </span>
              </div>

              <div className="flex items-center justify-between text-base font-black text-[#0c234a] pt-1.5 border-t border-slate-200">
                <span>Total Estimado del Pedido:</span>
                <span className="text-xl text-amber-600 font-mono font-extrabold">
                  ${total.toFixed(2)} USD
                </span>
              </div>
            </div>

            {/* Quick Action Tools: Copy & Print */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={handleCopyClipboard}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold border border-slate-300 transition-colors"
              >
                {copiedNotice ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-600" />
                    <span>Copiar Texto</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onOpenPrint}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold border border-slate-300 transition-colors"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                <span>Cotización PDF</span>
              </button>
            </div>

            {/* Main WhatsApp Submit Button (Requirement #3) */}
            <button
              type="button"
              id="send-order-whatsapp-btn"
              onClick={handleSendWhatsApp}
              className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white py-3 px-4 rounded-xl font-heading font-extrabold text-base tracking-wide uppercase shadow-lg shadow-emerald-600/30 active:scale-98 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-none" />
              <span>Enviar Pedido por WhatsApp ({orderInfo.selectedWhatsApp})</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
