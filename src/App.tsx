import React, { useState, useEffect, useMemo } from 'react';
import { 
  ShoppingCart, 
  MessageCircle, 
  Search, 
  Plus, 
  Filter, 
  SlidersHorizontal, 
  ArrowUpDown, 
  CheckCircle, 
  Package, 
  RotateCcw, 
  Tag, 
  Download, 
  FileSpreadsheet, 
  Sparkles,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { CategoryId, Product, ProductVariant, CartItem, OrderInfo } from './types';
import { INITIAL_PRODUCTS, COMPANY_INFO, CATEGORIES } from './data/catalogProducts';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { PrintQuotationModal } from './components/PrintQuotationModal';
import { AddProductModal } from './components/AddProductModal';
import { ImageCropModal } from './components/ImageCropModal';
import { CommunitySection } from './components/CommunitySection';
import { FerreToolsLogo, DeköLogo, CuperElectricLogo, AbroLogo, BrickellLogo } from './components/BrandLogos';

const STORAGE_PRODUCTS_KEY = 'ferretools_products_v1';
const STORAGE_CART_KEY = 'ferretools_cart_v1';
const STORAGE_ORDER_KEY = 'ferretools_order_v1';

export default function App() {
  // Products state (persisted to localStorage)
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PRODUCTS_KEY);
      if (saved) {
        const parsed: Product[] = JSON.parse(saved);
        // Merge with INITIAL_PRODUCTS to enrich with catalog images, measures, and package descriptions
        return parsed.map((p) => {
          const init = INITIAL_PRODUCTS.find((i) => i.id === p.id || i.code === p.code);
          return {
            ...p,
            imageUrl: p.imageUrl || init?.imageUrl,
            description: p.description || init?.description,
            measure: p.measure || init?.measure || '',
            packageInfo: p.packageInfo || init?.packageInfo || '',
            variants: p.variants || init?.variants
          };
        });
      }
    } catch (e) {
      console.error('Error loading products from storage', e);
    }
    return INITIAL_PRODUCTS;
  });

  // Cart state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_CART_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading cart', e);
    }
    return [];
  });

  // Order & Customer info state
  const [orderInfo, setOrderInfo] = useState<OrderInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_ORDER_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading order info', e);
    }
    return {
      customerName: '',
      companyName: '',
      ruc: '',
      phone: '',
      deliveryAddress: '',
      selectedWhatsApp: '6278-5344',
      includeItbms: false,
      notes: '',
      paymentMethod: 'contado'
    };
  });

  // Navigation and Filter state
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<'default' | 'price-asc' | 'price-desc' | 'name-asc'>('default');

  // UI Modals state
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isPrintOpen, setIsPrintOpen] = useState<boolean>(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [cropProduct, setCropProduct] = useState<Product | null>(null);
  const [isCropModalOpen, setIsCropModalOpen] = useState<boolean>(false);
  const [bulkPercent, setBulkPercent] = useState<string>('0');
  const [showBulkAdjust, setShowBulkAdjust] = useState<boolean>(false);

  // Sync state to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_PRODUCTS_KEY, JSON.stringify(products));
    } catch (e) {
      console.error('Failed to persist products', e);
    }
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to persist cart', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_ORDER_KEY, JSON.stringify(orderInfo));
    } catch (e) {
      console.error('Failed to persist orderInfo', e);
    }
  }, [orderInfo]);

  // Cart Metrics
  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  }, [cart]);

  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  // Categories counts
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryId, number> = {
      todos: products.length,
      plomeria: 0,
      ferreteria: 0,
      herramientas: 0,
      electricidad: 0,
      aditivos: 0,
      seguridad: 0,
      cerraduras: 0,
      construccion: 0
    };

    products.forEach(p => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    return counts;
  }, [products]);

  // Available unique brands
  const availableBrands = useMemo(() => {
    const set = new Set<string>();
    products.forEach(p => {
      if (p.brand) set.add(p.brand);
    });
    return Array.from(set).sort();
  }, [products]);

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return products.filter(item => {
      // Category filter
      if (selectedCategory !== 'todos' && item.category !== selectedCategory) {
        return false;
      }

      // Brand filter
      if (activeBrand && item.brand !== activeBrand) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(query);
        const matchCode = item.code.toLowerCase().includes(query);
        const matchMeasure = item.measure.toLowerCase().includes(query);
        const matchBrand = item.brand?.toLowerCase().includes(query) ?? false;
        const matchDesc = item.description?.toLowerCase().includes(query) ?? false;
        const matchVariants = item.variants?.some(v => 
          v.code.toLowerCase().includes(query) || v.measure.toLowerCase().includes(query)
        ) ?? false;

        return matchName || matchCode || matchMeasure || matchBrand || matchDesc || matchVariants;
      }

      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [products, selectedCategory, activeBrand, searchQuery, sortOption]);

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number, selectedVariant?: ProductVariant) => {
    const itemCode = selectedVariant ? selectedVariant.code : product.code;
    const itemMeasure = selectedVariant ? selectedVariant.measure : product.measure;
    const itemPackage = selectedVariant ? selectedVariant.packageInfo : product.packageInfo;
    const itemPrice = (selectedVariant && selectedVariant.price !== undefined) 
      ? selectedVariant.price 
      : product.price;

    const cartItemId = `${product.id}-${itemCode}`;

    setCart(prev => {
      const existingIdx = prev.findIndex(item => item.productId === cartItemId);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            productId: cartItemId,
            code: itemCode,
            name: product.name,
            category: product.category,
            measure: itemMeasure,
            packageInfo: itemPackage,
            unitPrice: itemPrice,
            quantity
          }
        ];
      }
    });
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(productId);
      return;
    }
    setCart(prev => prev.map(item => 
      item.productId === productId ? { ...item, quantity } : item
    ));
  };

  const handleUpdateCartUnitPrice = (productId: string, newPrice: number) => {
    setCart(prev => prev.map(item => 
      item.productId === productId ? { ...item, unitPrice: newPrice } : item
    ));
  };

  const handleRemoveCartItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.productId !== productId));
  };

  const handleClearCart = () => {
    if (window.confirm('¿Deseas vaciar todos los productos del carrito de compras?')) {
      setCart([]);
    }
  };

  // Product updating (real-time manual edit)
  const handleUpdateProduct = (updated: Product) => {
    setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));

    // Also update in cart if already added
    setCart(prev => prev.map(cartItem => {
      if (cartItem.productId.startsWith(updated.id)) {
        return {
          ...cartItem,
          name: updated.name,
          unitPrice: updated.price
        };
      }
      return cartItem;
    }));
  };

  const handleAddProduct = (newProd: Product) => {
    setProducts(prev => [newProd, ...prev]);
  };

  const handleResetPrices = () => {
    if (window.confirm('¿Deseas restablecer todos los productos y precios a los originales de fábrica del catálogo?')) {
      setProducts(INITIAL_PRODUCTS);
    }
  };

  // Bulk percentage discount or markup (e.g. +10% or -5%)
  const handleApplyBulkMargin = (percent: number) => {
    const factor = 1 + (percent / 100);
    setProducts(prev => prev.map(p => ({
      ...p,
      price: Math.round(p.price * factor * 100) / 100,
      isCustom: true
    })));
    setShowBulkAdjust(false);
  };

  const handleOpenCropModal = (prod: Product) => {
    setCropProduct(prod);
    setIsCropModalOpen(true);
  };

  const handleSaveCroppedImage = (productId: string, newImageUrl: string) => {
    setProducts(prev => prev.map(p => {
      if (p.id === productId) {
        return {
          ...p,
          imageUrl: newImageUrl,
          isCustom: true
        };
      }
      return p;
    }));
  };

  // Quick Direct WhatsApp Launch with structured message
  const handleQuickSendWhatsApp = () => {
    if (cart.length === 0) {
      setIsCartOpen(true);
      return;
    }

    const rawNumber = orderInfo.selectedWhatsApp.replace('-', '');
    let msg = `🛠️ *PEDIDO FERRETOOLS - DISTRIBUIDORA FERRE-TOOL, S.A.*\n`;
    msg += `📍 RUC: ${COMPANY_INFO.ruc}\n`;
    msg += `👤 Cliente: ${orderInfo.customerName || 'Cliente Mayorista'}\n`;
    if (orderInfo.phone) msg += `📞 Teléfono: ${orderInfo.phone}\n`;
    if (orderInfo.deliveryAddress) msg += `🚚 Dirección: ${orderInfo.deliveryAddress}\n`;
    msg += `\n*PRODUCTOS SOLICITADOS:*\n`;

    cart.forEach((item, i) => {
      msg += `${i + 1}. [${item.code}] ${item.name} (${item.measure}) x ${item.quantity} = $${(item.unitPrice * item.quantity).toFixed(2)}\n`;
    });

    msg += `\n💵 *TOTAL ESTIMADO: $${cartTotal.toFixed(2)} USD*`;
    const url = `https://wa.me/507${rawNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const currentCategoryLabel = CATEGORIES.find(c => c.id === selectedCategory)?.label || 'Todo el Catálogo';

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900 font-sans">
      
      {/* Header with Official Company Info & Controls */}
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        isEditMode={isEditMode}
        onToggleEditMode={() => setIsEditMode(!isEditMode)}
        onResetPrices={handleResetPrices}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenPrint={() => setIsPrintOpen(true)}
        onOpenCropTool={() => {
          const target = filteredProducts[0] || products[0];
          if (target) handleOpenCropModal(target);
        }}
      />

      {/* Category Navigation Bar */}
      <CategoryNav
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categoryCounts={categoryCounts}
        activeBrand={activeBrand}
        onSelectBrand={setActiveBrand}
        availableBrands={availableBrands}
      />

      {/* Main Catalog View Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full space-y-6">
        
        {/* Institutional Welcome & Hero Banner - Authentic PDF Cover aesthetic */}
        <section className="relative rounded-2xl bg-gradient-to-r from-[#0c234a] via-[#112c5b] to-[#0c234a] text-white p-6 sm:p-8 shadow-xl overflow-hidden border border-blue-900">
          
          {/* Angled background yellow polygon ribbon matching PDF page headers */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-amber-400/20 to-transparent skew-x-12 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-400 text-blue-950 font-black text-[11px] uppercase tracking-wider">
                <span>CATÁLOGO OFICIAL DE PRODUCTOS</span>
                <span>•</span>
                <span>DISTRIBUIDOR MAYORISTA</span>
              </div>

              <h1 className="font-heading font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
                FERRETOOLS <span className="text-amber-400">PANAMÁ</span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Precios de distribuidor mayorista con cotización y pedido directo vía WhatsApp. Modifica precios unitarios según tu margen o cliente, agrega ítems y despacha directo a bodega.
              </p>

              {/* Quick info points */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-2 text-xs text-amber-200/90 font-medium">
                <span>📦 Bodega Galera IMJUSA #09, Río Abajo</span>
                <span>•</span>
                <span>☎️ 830-5940</span>
                <span>•</span>
                <span>💬 WhatsApp: 6278-5344 / 6234-6764</span>
              </div>
            </div>

            {/* Quick Actions Card inside Banner */}
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex flex-col sm:flex-row lg:flex-col gap-2.5 min-w-[240px] shrink-0">
              <button
                type="button"
                id="hero-add-product-btn"
                onClick={() => setIsAddModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-blue-950 font-heading font-black px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider shadow transition-all active:scale-95"
              >
                <Plus className="w-4 h-4" />
                <span>Agregar Producto Manual</span>
              </button>

              <button
                type="button"
                onClick={() => setShowBulkAdjust(!showBulkAdjust)}
                className="flex items-center justify-center gap-2 bg-blue-950/80 hover:bg-blue-900 text-amber-300 border border-amber-400/50 font-bold px-4 py-2 rounded-lg text-xs transition-all"
              >
                <Tag className="w-3.5 h-3.5" />
                <span>Ajustar Margen Global %</span>
              </button>
            </div>
          </div>

          {/* Quick Bulk Margin Adjuster Widget */}
          {showBulkAdjust && (
            <div className="mt-4 p-4 bg-blue-950/90 rounded-xl border border-amber-400/40 text-xs space-y-2 animate-in fade-in duration-150">
              <div className="flex items-center justify-between font-bold text-amber-300">
                <span>Ajustar Precios de Todo el Catálogo por Porcentaje (%):</span>
                <button onClick={() => setShowBulkAdjust(false)} className="text-slate-400 hover:text-white">✕</button>
              </div>
              <p className="text-slate-300 text-[11px]">
                Aplica un margen o descuento mayorista automático a todos los artículos:
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <button onClick={() => handleApplyBulkMargin(-10)} className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 font-bold text-white">
                  -10% Descuento Mayorista
                </button>
                <button onClick={() => handleApplyBulkMargin(-5)} className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 font-bold text-white">
                  -5% Descuento
                </button>
                <button onClick={() => handleApplyBulkMargin(5)} className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 font-bold text-blue-950">
                  +5% Margen
                </button>
                <button onClick={() => handleApplyBulkMargin(10)} className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 font-bold text-white">
                  +10% Margen
                </button>
                <button onClick={() => handleApplyBulkMargin(20)} className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 font-bold text-white">
                  +20% Detal
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Section Heading Bar with Chevron Arrow Style directly from PDF */}
        <div className="bg-[#0b1f3f] rounded-xl p-3 sm:p-4 text-white shadow-sm border border-blue-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          {/* Department Tag with Yellow Chevron */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-amber-400 text-blue-950 font-heading font-black text-sm sm:text-base uppercase tracking-wider px-3.5 py-1.5 rounded-md shadow-xs">
              <span>{currentCategoryLabel}</span>
            </div>

            <div className="text-xs text-slate-300 font-medium">
              Mostrando <strong>{filteredProducts.length}</strong> de {products.length} productos
            </div>
          </div>

          {/* Sorting & Filter controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
            <span className="text-slate-400 font-bold uppercase text-[10px] hidden md:inline">
              Ordenar:
            </span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as any)}
              className="bg-blue-950 border border-blue-800 text-slate-200 font-bold text-xs py-1.5 px-3 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-amber-400"
            >
              <option value="default">Orden por Catálogo (PDF)</option>
              <option value="price-asc">Menor Precio</option>
              <option value="price-desc">Mayor Precio</option>
              <option value="name-asc">Nombre (A - Z)</option>
            </select>
          </div>
        </div>

        {/* Active Search / Filter Feedback */}
        {(searchQuery || activeBrand) && (
          <div className="flex items-center justify-between p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-amber-600" />
              <span>
                Filtros aplicados: {searchQuery && <strong>"{searchQuery}"</strong>} {activeBrand && <span>Marca: <strong>{activeBrand}</strong></span>}
              </span>
            </div>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setActiveBrand(null); }}
              className="font-bold text-blue-800 hover:text-blue-950 underline"
            >
              Limpiar Filtros
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm space-y-3">
            <Package className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-heading font-black text-lg text-slate-800 uppercase">
              No se encontraron productos coincidentes
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Intenta buscar por otro término o código (ej. <em>YL24018, P174, E01-12, F263</em>) o selecciona otra categoría.
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('todos'); setActiveBrand(null); }}
              className="mt-2 px-4 py-2 bg-[#0c234a] text-amber-300 font-bold rounded-xl text-xs uppercase"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onUpdateProduct={handleUpdateProduct}
                onOpenCrop={handleOpenCropModal}
                isGlobalEditMode={isEditMode}
              />
            ))}
          </div>
        )}

        {/* Bottom PDF Slogan Banner ("SU DISTRIBUIDORA DE CONFIANZA") */}
        <div className="bg-[#0b1f3f] text-white p-4 rounded-xl border border-blue-950 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md text-center sm:text-left">
          <div className="flex items-center gap-3">
            <FerreToolsLogo size="sm" />
            <div>
              <span className="font-heading font-black text-base sm:text-lg tracking-wider text-amber-300 uppercase block">
                {COMPANY_INFO.slogan}
              </span>
              <span className="text-[11px] text-blue-200">
                DISTRIBUIDOR MAYORISTA • CIUDAD DE PANAMÁ
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-2 bg-blue-900/80 hover:bg-blue-800 text-xs font-bold text-slate-200 rounded-lg transition-colors"
            >
              ▲ Volver Arriba
            </button>
          </div>
        </div>

      </main>

      {/* Community Section (Requirement #4) */}
      <CommunitySection />

      {/* Persistent Floating WhatsApp & Cart Bar */}
      <aside 
        aria-label="Barra flotante de pedido y carrito" 
        className="fixed bottom-4 right-4 z-40 flex flex-col sm:flex-row items-end sm:items-center gap-2.5"
      >
        {/* Floating Cart Trigger Pill */}
        <button
          type="button"
          id="floating-cart-pill"
          onClick={() => setIsCartOpen(true)}
          className="group flex items-center gap-3 bg-[#0c234a] hover:bg-[#071630] text-white px-4 py-3 rounded-2xl font-bold shadow-2xl border-2 border-amber-400 active:scale-95 transition-all"
        >
          <div className="relative">
            <ShoppingCart className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-2.5 -right-2.5 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black animate-pulse">
                {cartCount}
              </span>
            )}
          </div>
          <div className="flex flex-col text-left leading-tight pr-1">
            <span className="text-[10px] text-blue-200 uppercase font-black">
              {cartCount === 1 ? '1 Artículo' : `${cartCount} Artículos`}
            </span>
            <span className="text-sm font-black text-amber-300 font-mono">
              ${cartTotal.toFixed(2)} USD
            </span>
          </div>
        </button>

        {/* Floating Primary "Enviar Pedido por WhatsApp" Button (Requirement #3) */}
        <button
          type="button"
          id="floating-whatsapp-order-btn"
          onClick={handleQuickSendWhatsApp}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-2xl font-heading font-black text-sm uppercase tracking-wider shadow-2xl shadow-emerald-700/40 border-2 border-emerald-400 active:scale-95 transition-all"
          title="Enviar Pedido formal por WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white stroke-none" />
          <span className="hidden sm:inline">Enviar Pedido WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </button>
      </aside>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onUpdateUnitPrice={handleUpdateCartUnitPrice}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        orderInfo={orderInfo}
        onUpdateOrderInfo={(info) => setOrderInfo(prev => ({ ...prev, ...info }))}
        onOpenPrint={() => {
          setIsCartOpen(false);
          setIsPrintOpen(true);
        }}
      />

      {/* Printable Quotation Modal */}
      <PrintQuotationModal
        isOpen={isPrintOpen}
        onClose={() => setIsPrintOpen(false)}
        cart={cart}
        orderInfo={orderInfo}
      />

      {/* Add Custom Product Modal */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddProduct={handleAddProduct}
      />

      {/* Catalog Image Crop & Embed Tool Modal */}
      <ImageCropModal
        isOpen={isCropModalOpen}
        product={cropProduct}
        onClose={() => setIsCropModalOpen(false)}
        onSaveImage={handleSaveCroppedImage}
      />

    </div>
  );
}
