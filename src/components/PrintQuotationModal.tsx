import React from 'react';
import { X, Printer, Download, Check, Building2, Phone, Mail, MapPin } from 'lucide-react';
import { CartItem, OrderInfo } from '../types';
import { COMPANY_INFO } from '../data/catalogProducts';
import { FerreToolsLogo } from './BrandLogos';

interface PrintQuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  orderInfo: OrderInfo;
}

export const PrintQuotationModal: React.FC<PrintQuotationModalProps> = ({
  isOpen,
  onClose,
  cart,
  orderInfo
}) => {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const itbms = orderInfo.includeItbms ? subtotal * 0.07 : 0;
  const total = subtotal + itbms;
  const totalUnits = cart.reduce((sum, item) => sum + item.quantity, 0);

  const quotationNumber = `COT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const todayStr = new Date().toLocaleDateString('es-PA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="no-print bg-[#0b1f3f] text-white px-5 py-3 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-amber-400" />
            <h3 className="font-heading font-extrabold text-base tracking-wide uppercase text-amber-300">
              Vista Previa de Cotización Oficial FerreTools
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-blue-950 px-4 py-1.5 rounded-lg font-bold text-xs shadow transition-all active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Guardar PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-blue-900/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Quotation Document */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 font-sans text-slate-800 bg-white">
          
          {/* Header Block with Corporate Details */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b-2 border-[#0c234a]">
            <div>
              <FerreToolsLogo size="lg" />
              <div className="mt-3 text-xs text-slate-600 space-y-0.5">
                <p className="font-bold text-[#0c234a] text-sm uppercase">{COMPANY_INFO.name}</p>
                <p><strong>RUC:</strong> {COMPANY_INFO.ruc}</p>
                <p><strong>Dirección:</strong> {COMPANY_INFO.address}</p>
                <p><strong>Teléfonos:</strong> {COMPANY_INFO.officePhone} | WhatsApp: {COMPANY_INFO.whatsApp1} / {COMPANY_INFO.whatsApp2}</p>
                <p><strong>Email:</strong> {COMPANY_INFO.email} | <strong>Web:</strong> {COMPANY_INFO.website}</p>
              </div>
            </div>

            <div className="sm:text-right bg-slate-50 p-4 rounded-xl border border-slate-200 min-w-[220px]">
              <span className="block text-xs font-black uppercase text-amber-600 tracking-widest">
                COTIZACIÓN FORMAL
              </span>
              <span className="block text-lg font-black font-mono text-[#0c234a]">
                {quotationNumber}
              </span>
              <div className="text-xs text-slate-500 mt-2 space-y-0.5">
                <p><strong>Fecha:</strong> {todayStr}</p>
                <p><strong>Validez:</strong> 15 días calendario</p>
                <p><strong>Moneda:</strong> USD (Dólares Americanos)</p>
              </div>
            </div>
          </div>

          {/* Client Details Section */}
          <div className="my-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0c234a] mb-2 pb-1 border-b border-slate-200">
              Datos del Cliente / Facturación:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs">
              <p><strong>Cliente / Contacto:</strong> {orderInfo.customerName || 'Cliente General'}</p>
              <p><strong>Empresa / Razón Social:</strong> {orderInfo.companyName || 'N/A'}</p>
              <p><strong>RUC / Cédula:</strong> {orderInfo.ruc || 'N/A'}</p>
              <p><strong>Teléfono:</strong> {orderInfo.phone || 'N/A'}</p>
              <p className="sm:col-span-2"><strong>Dirección de Entrega:</strong> {orderInfo.deliveryAddress || 'Retiro en Bodega FerreTools'}</p>
            </div>
          </div>

          {/* Items Table */}
          <div className="border border-slate-300 rounded-lg overflow-hidden my-6 text-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0b1f3f] text-white font-heading font-black uppercase text-[11px] tracking-wider">
                  <th className="py-2.5 px-3">#</th>
                  <th className="py-2.5 px-3">Código</th>
                  <th className="py-2.5 px-3">Descripción de Producto</th>
                  <th className="py-2.5 px-3">Medida</th>
                  <th className="py-2.5 px-3">Empaque</th>
                  <th className="py-2.5 px-3 text-center">Cant.</th>
                  <th className="py-2.5 px-3 text-right">P. Unit.</th>
                  <th className="py-2.5 px-3 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {cart.map((item, idx) => {
                  const lineTotal = item.unitPrice * item.quantity;
                  return (
                    <tr key={item.productId} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="py-2 px-3 font-bold text-slate-400">{idx + 1}</td>
                      <td className="py-2 px-3 font-mono font-bold text-blue-950">{item.code}</td>
                      <td className="py-2 px-3 font-semibold uppercase">{item.name}</td>
                      <td className="py-2 px-3 text-slate-600">{item.measure}</td>
                      <td className="py-2 px-3 text-slate-600">{item.packageInfo}</td>
                      <td className="py-2 px-3 text-center font-bold text-blue-950">{item.quantity}</td>
                      <td className="py-2 px-3 text-right font-mono">${item.unitPrice.toFixed(2)}</td>
                      <td className="py-2 px-3 text-right font-mono font-bold text-[#0c234a]">${lineTotal.toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Totals & Notes Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pt-2">
            <div className="flex-1 text-xs text-slate-500 space-y-2">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-bold text-slate-700 uppercase mb-1">Términos Comerciales y Bancarios:</p>
                <p>• Precios sujetos a inventario disponible en bodega.</p>
                <p>• Pagos: Transferencia ACH / Depósito a cuenta de Distribuidora Ferre-Tool, S.A.</p>
                <p>• Entrega local en Ciudad de Panamá disponible según volumen de compra.</p>
              </div>
              {orderInfo.notes && (
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="font-bold text-amber-900 uppercase mb-0.5">Notas del Pedido:</p>
                  <p className="text-amber-950">{orderInfo.notes}</p>
                </div>
              )}
            </div>

            <div className="w-full sm:w-72 bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal ({totalUnits} unidades):</span>
                <span className="font-bold font-mono">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>ITBMS (7%):</span>
                <span className="font-bold font-mono">
                  {orderInfo.includeItbms ? `$${itbms.toFixed(2)}` : '$0.00 (Exento)'}
                </span>
              </div>
              <div className="flex justify-between text-base font-black text-[#0c234a] pt-2 border-t border-slate-300">
                <span>TOTAL:</span>
                <span className="text-amber-600 font-mono text-lg">${total.toFixed(2)} USD</span>
              </div>
            </div>
          </div>

          {/* Signature Line for Wholesale Dispatch */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 gap-12 text-center text-xs text-slate-500">
            <div>
              <div className="w-48 mx-auto border-b border-slate-400 mb-1"></div>
              <p className="font-bold text-slate-700">DISTRIBUIDORA FERRE-TOOL, S.A.</p>
              <p>Departamento de Ventas y Despacho</p>
            </div>
            <div>
              <div className="w-48 mx-auto border-b border-slate-400 mb-1"></div>
              <p className="font-bold text-slate-700">Aceptado por Cliente / Firma</p>
              <p>{orderInfo.customerName || 'Firma Autorizada'}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
