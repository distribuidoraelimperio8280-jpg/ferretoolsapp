import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Crop, 
  Upload, 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  Check, 
  Image as ImageIcon, 
  Link as LinkIcon, 
  Sparkles,
  Clipboard,
  Info,
  Ruler,
  Package
} from 'lucide-react';
import { Product } from '../types';

interface ImageCropModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
  onSaveImage: (productId: string, newImageUrl: string) => void;
}

// Preset authentic catalog image options for fast picking
const CATALOG_PRESETS = [
  { name: 'Canasta Fregador DEKÖ', url: '/images/canasta_fregador.jpg', category: 'plomeria' },
  { name: 'Llave Cuello Cisne Fregador', url: '/images/grifo_fregador.jpg', category: 'plomeria' },
  { name: 'Llave de Ángulo DEKÖ', url: '/images/valvula_angulo.jpg', category: 'plomeria' },
  { name: 'Trampa y Sifón Flexible P/Fregador', url: '/images/trampa_fregador.jpg', category: 'plomeria' },
  { name: 'Tubo de Abasto Flexible Acero/PVC', url: '/images/tubo_abasto.jpg', category: 'plomeria' },
  { name: 'Korky / Sapito y Válvula Inodoro', url: '/images/korky_inodoro.jpg', category: 'plomeria' },
  { name: 'Llave de Chorro Bronce/Zinc', url: '/images/llave_chorro.jpg', category: 'plomeria' },
  { name: 'Regadera Lluvia y Ducha Teléfono', url: '/images/regadera_ducha.jpg', category: 'plomeria' },
  { name: 'Fregador Acero Inoxidable', url: '/images/fregador_acero.jpg', category: 'plomeria' },
  { name: 'Alicate Universal y Presión HARDEN', url: '/images/alicate_universal.jpg', category: 'herramientas' },
  { name: 'Llave de Tubo Stillson HARDEN', url: '/images/llave_tubo.jpg', category: 'herramientas' },
  { name: 'Discos de Corte y Desbaste DEWALT/HARDEN', url: '/images/disco_corte.jpg', category: 'herramientas' },
  { name: 'Regleta Eléctrica y Extensiones BRICKELL', url: '/images/regleta_electrica.jpg', category: 'electricidad' },
  { name: 'Cerradura de Manija y Pomo TOP SECURITY', url: '/images/cerradura_manija.jpg', category: 'ferreteria' },
  { name: 'Candado de Latón TRI-CIRCLE / TREK', url: '/images/candado_laton.jpg', category: 'ferreteria' },
  { name: 'Silicón RTV y Aditivos ABRO', url: '/images/silicon_abro.jpg', category: 'aditivos' }
];

export const ImageCropModal: React.FC<ImageCropModalProps> = ({
  isOpen,
  product,
  onClose,
  onSaveImage
}) => {
  const [sourceImage, setSourceImage] = useState<string>('');
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [urlInput, setUrlInput] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'crop' | 'presets' | 'url'>('crop');
  const [cropPreviewUrl, setCropPreviewUrl] = useState<string>('');
  const [clipboardFeedback, setClipboardFeedback] = useState<string>('');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageObjRef = useRef<HTMLImageElement | null>(null);

  // Load product image or initial state when modal opens
  useEffect(() => {
    if (isOpen && product) {
      const initialImg = product.imageUrl || '/images/canasta_fregador.jpg';
      setSourceImage(initialImg);
      setZoom(1);
      setPan({ x: 0, y: 0 });
      setRotation(0);
      setUrlInput('');
      setClipboardFeedback('');
    }
  }, [isOpen, product]);

  // Load the image onto canvas whenever sourceImage, zoom, pan, rotation change
  useEffect(() => {
    if (!sourceImage) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = sourceImage;
    img.onload = () => {
      imageObjRef.current = img;
      renderCanvas();
    };
  }, [sourceImage, zoom, pan, rotation]);

  // Global paste handler to capture pasted screenshots (Ctrl+V) from PDF
  useEffect(() => {
    if (!isOpen) return;

    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const blob = items[i].getAsFile();
          if (blob) {
            const reader = new FileReader();
            reader.onload = (event) => {
              if (event.target?.result) {
                setSourceImage(event.target.result as string);
                setZoom(1);
                setPan({ x: 0, y: 0 });
                setActiveTab('crop');
                setClipboardFeedback('¡Imagen pegada desde el portapapeles con éxito!');
                setTimeout(() => setClipboardFeedback(''), 3000);
              }
            };
            reader.readAsDataURL(blob);
            break;
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [isOpen]);

  const renderCanvas = () => {
    const canvas = canvasRef.current;
    const img = imageObjRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 4:3 catalog card standard aspect ratio (400x300)
    canvas.width = 400;
    canvas.height = 300;

    // Background fill (clean catalog white/soft light)
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    // Move to center
    ctx.translate(canvas.width / 2 + pan.x, canvas.height / 2 + pan.y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(zoom, zoom);

    // Calculate dimensions to fit/cover nicely
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const drawWidth = img.width * scale;
    const drawHeight = img.height * scale;

    ctx.drawImage(img, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
    ctx.restore();

    // Update real-time preview data URL
    try {
      const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
      setCropPreviewUrl(dataUrl);
    } catch {
      // Cross-origin fallback
      setCropPreviewUrl(sourceImage);
    }
  };

  // Mouse drag handlers for panning inside crop area
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // File upload handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setSourceImage(event.target.result as string);
          setZoom(1);
          setPan({ x: 0, y: 0 });
          setActiveTab('crop');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Save the cropped image to the product
  const handleCommitImage = () => {
    if (!product) return;

    let finalUrl = sourceImage;
    const canvas = canvasRef.current;
    if (canvas && activeTab === 'crop') {
      try {
        finalUrl = canvas.toDataURL('image/jpeg', 0.88);
      } catch {
        finalUrl = sourceImage;
      }
    } else if (activeTab === 'url' && urlInput.trim()) {
      finalUrl = urlInput.trim();
    }

    onSaveImage(product.id, finalUrl);
    onClose();
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        id="image-crop-modal-content"
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Header with FerreTools Blue Brand Header */}
        <div className="bg-[#0b1f3f] px-5 py-3.5 text-white flex items-center justify-between border-b border-amber-400/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-400 text-blue-950">
              <Crop className="w-5 h-5 stroke-2.5" />
            </div>
            <div>
              <h2 className="font-heading font-black text-base sm:text-lg text-amber-300 leading-tight">
                Recortar e Incrustar Imagen del Catálogo
              </h2>
              <p className="text-xs text-slate-300 flex items-center gap-2 mt-0.5">
                <span className="font-bold text-white bg-blue-900/80 px-2 py-0.5 rounded border border-blue-700">
                  {product.code}
                </span>
                <span className="truncate max-w-[280px] sm:max-w-[420px] font-medium">
                  {product.name}
                </span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-blue-900/80 transition-colors"
            title="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Measure & Description Context Banner */}
        <div className="bg-amber-50 px-5 py-2.5 border-b border-amber-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4 text-slate-800">
            <div className="flex items-center gap-1.5 font-bold">
              <Ruler className="w-4 h-4 text-amber-600" />
              <span>Medida Oficial:</span>
              <span className="px-2 py-0.5 rounded bg-white font-extrabold text-[#0c234a] border border-amber-300 shadow-2xs">
                {product.measure}
              </span>
            </div>

            <div className="flex items-center gap-1.5 font-bold">
              <Package className="w-4 h-4 text-amber-600" />
              <span>Presentación:</span>
              <span className="px-2 py-0.5 rounded bg-white font-extrabold text-blue-900 border border-amber-300 shadow-2xs">
                {product.packageInfo}
              </span>
            </div>
          </div>

          <div className="text-[11px] text-amber-900 italic line-clamp-1 max-w-[320px]">
            {product.description || 'Descripción técnica del catálogo lista para incrustar.'}
          </div>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-5 pt-2 gap-2 text-xs font-bold">
          <button
            type="button"
            onClick={() => setActiveTab('crop')}
            className={`pb-2.5 px-3 flex items-center gap-1.5 border-b-2 transition-all ${
              activeTab === 'crop'
                ? 'border-blue-900 text-blue-950 font-black'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Crop className="w-3.5 h-3.5" />
            <span>Recortador Interactivo</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('presets')}
            className={`pb-2.5 px-3 flex items-center gap-1.5 border-b-2 transition-all ${
              activeTab === 'presets'
                ? 'border-blue-900 text-blue-950 font-black'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Imágenes Oficiales del Catálogo</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('url')}
            className={`pb-2.5 px-3 flex items-center gap-1.5 border-b-2 transition-all ${
              activeTab === 'url'
                ? 'border-blue-900 text-blue-950 font-black'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" />
            <span>Enlace / URL Directa</span>
          </button>
        </div>

        {/* Main Body */}
        <div className="flex-1 p-5 overflow-y-auto">
          {clipboardFeedback && (
            <div className="mb-3 p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-lg text-xs font-bold flex items-center gap-2 animate-in fade-in">
              <Check className="w-4 h-4 text-emerald-600 stroke-3" />
              <span>{clipboardFeedback}</span>
            </div>
          )}

          {activeTab === 'crop' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
              {/* Left Column: Canvas & Controls */}
              <div className="md:col-span-7 flex flex-col items-center">
                {/* Visual Crop Workspace Container */}
                <div className="w-full relative border-2 border-dashed border-slate-300 rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center shadow-inner">
                  <canvas
                    ref={canvasRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className="max-w-full h-auto cursor-grab active:cursor-grabbing block rounded-lg shadow-md"
                    title="Haz clic y arrastra para ajustar la posición"
                  />

                  {/* Visual Crop Grid Guide Overlay */}
                  <div className="absolute inset-0 pointer-events-none border-2 border-amber-400/40 grid grid-cols-3 grid-rows-3 opacity-60">
                    <div className="border-r border-b border-white/40"></div>
                    <div className="border-r border-b border-white/40"></div>
                    <div className="border-b border-white/40"></div>
                    <div className="border-r border-b border-white/40"></div>
                    <div className="border-r border-b border-white/40"></div>
                    <div className="border-b border-white/40"></div>
                    <div className="border-r border-white/40"></div>
                    <div className="border-r border-white/40"></div>
                    <div></div>
                  </div>
                </div>

                {/* Instructions info pill */}
                <div className="w-full mt-2 flex items-center justify-between text-[11px] text-slate-500 px-1">
                  <span className="flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-blue-600" />
                    Arrastra con el ratón para encuadrar la pieza
                  </span>
                  <span className="text-slate-400">Proporción 4:3</span>
                </div>

                {/* Cropper Controls Toolbar */}
                <div className="w-full mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <ZoomIn className="w-4 h-4 text-slate-500" />
                      <span>Zoom:</span>
                      <input
                        type="range"
                        min="0.5"
                        max="3"
                        step="0.05"
                        value={zoom}
                        onChange={(e) => setZoom(parseFloat(e.target.value))}
                        className="w-28 sm:w-36 accent-blue-900 cursor-pointer"
                      />
                      <span className="text-[11px] font-mono font-normal text-slate-500">
                        {Math.round(zoom * 100)}%
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setRotation((r) => (r + 90) % 360)}
                        className="px-2.5 py-1 text-xs font-bold rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center gap-1 shadow-2xs"
                        title="Rotar 90 grados"
                      >
                        <RotateCw className="w-3.5 h-3.5" />
                        <span>Rotar</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setZoom(1);
                          setPan({ x: 0, y: 0 });
                          setRotation(0);
                        }}
                        className="px-2.5 py-1 text-xs font-bold rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 shadow-2xs"
                      >
                        Centrar
                      </button>
                    </div>
                  </div>

                  {/* Upload button & Paste instructions */}
                  <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 rounded-lg bg-blue-900 text-white font-bold text-xs flex items-center gap-1.5 hover:bg-blue-950 transition-colors shadow-2xs"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Captura del PDF...</span>
                    </button>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-600 bg-amber-50 px-2 py-1 rounded border border-amber-200">
                      <Clipboard className="w-3.5 h-3.5 text-amber-700" />
                      <span>O pulsa <strong>Ctrl + V</strong> para pegar recorte</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Card Preview Matching PDF Structure */}
              <div className="md:col-span-5 flex flex-col">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Resultado en Tarjeta de Catálogo</span>
                </h4>

                <div className="rounded-xl border border-slate-300 bg-white shadow-md overflow-hidden">
                  {/* Card Header */}
                  <div className="bg-[#0b1f3f] px-3 py-2 border-b border-amber-400 flex items-center justify-between">
                    <span className="font-heading font-black text-xs text-amber-300 uppercase truncate">
                      {product.name}
                    </span>
                    <span className="text-[10px] font-black text-white px-1.5 py-0.5 rounded bg-blue-800">
                      {product.code}
                    </span>
                  </div>

                  {/* Card Image Area with authentic badges */}
                  <div className="relative aspect-4/3 bg-slate-50 flex items-center justify-center overflow-hidden p-2">
                    {cropPreviewUrl ? (
                      <img
                        src={cropPreviewUrl}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <ImageIcon className="w-12 h-12 text-slate-300" />
                    )}

                    {/* Inset Medida & Empaque badge */}
                    <div className="absolute bottom-2 left-2 flex flex-col gap-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-[#0c234a]/90 text-amber-300 backdrop-blur-xs shadow-sm border border-amber-400/40">
                        MEDIDA: {product.measure}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/95 text-slate-800 shadow-sm border border-slate-200">
                        EMPAQUE: {product.packageInfo}
                      </span>
                    </div>
                  </div>

                  {/* Technical description block */}
                  <div className="p-3 bg-slate-50/70 border-t border-slate-100 text-xs">
                    <p className="text-slate-600 line-clamp-2 leading-relaxed">
                      {product.description || 'Descripción técnica del catálogo.'}
                    </p>
                    <div className="mt-2 flex items-center justify-between pt-1.5 border-t border-slate-200 font-bold">
                      <span className="text-slate-500 text-[11px]">Precio Mayorista:</span>
                      <span className="font-mono text-sm text-[#0c234a] font-black">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                  Al guardar, la imagen recortada quedará incrustada específicamente en esta pieza con su medida y empaque exactos.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'presets' && (
            <div>
              <p className="text-xs text-slate-600 mb-3">
                Selecciona una imagen oficial precargada del catálogo de FerreTools para asignarla de inmediato a este producto:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {CATALOG_PRESETS.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setSourceImage(preset.url);
                      setZoom(1);
                      setPan({ x: 0, y: 0 });
                      setActiveTab('crop');
                    }}
                    className="group relative rounded-xl border border-slate-200 hover:border-blue-900 bg-white p-2 text-left transition-all hover:shadow-md flex flex-col justify-between"
                  >
                    <div className="aspect-4/3 rounded-lg overflow-hidden bg-slate-50 mb-2 border border-slate-100 flex items-center justify-center">
                      <img
                        src={preset.url}
                        alt={preset.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-blue-900 uppercase block tracking-wider">
                        {preset.category}
                      </span>
                      <span className="text-xs font-extrabold text-slate-800 line-clamp-1">
                        {preset.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'url' && (
            <div className="max-w-md mx-auto py-6 flex flex-col gap-3">
              <label className="text-xs font-bold text-slate-700">
                Pega la URL de una imagen en la web o catálogo en línea:
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://ejemplo.com/imagen-producto.jpg"
                  className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (urlInput.trim()) {
                      setSourceImage(urlInput.trim());
                      setActiveTab('crop');
                    }
                  }}
                  className="px-4 py-2 bg-blue-900 text-white rounded-lg text-xs font-bold hover:bg-blue-950"
                >
                  Cargar
                </button>
              </div>
              <p className="text-[11px] text-slate-500">
                Soporta formatos JPG, PNG, WEBP y SVG con acceso público.
              </p>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={handleCommitImage}
            className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-blue-950 font-black text-xs flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <Check className="w-4 h-4 stroke-3" />
            <span>Incrustar Imagen en {product.code}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
