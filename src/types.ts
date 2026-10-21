export type CategoryId = 
  | 'todos'
  | 'plomeria'
  | 'ferreteria'
  | 'herramientas'
  | 'electricidad'
  | 'aditivos'
  | 'seguridad'
  | 'cerraduras'
  | 'construccion';

export interface ProductVariant {
  code: string;
  measure: string;
  packageInfo: string;
  price?: number;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  category: CategoryId;
  brand?: string;
  measure: string;
  packageInfo: string;
  price: number;
  description?: string;
  bullets?: string[];
  imageUrl?: string;
  iconType?: string;
  badge?: string;
  isCustom?: boolean;
  variants?: ProductVariant[];
}

export interface CartItem {
  productId: string;
  code: string;
  name: string;
  category: CategoryId;
  measure: string;
  packageInfo: string;
  unitPrice: number;
  quantity: number;
  notes?: string;
}

export interface OrderInfo {
  customerName: string;
  companyName: string;
  ruc: string;
  phone: string;
  deliveryAddress: string;
  selectedWhatsApp: '6278-5344' | '6234-6764';
  includeItbms: boolean;
  notes: string;
  paymentMethod: 'contado' | 'transferencia' | 'credito' | 'cheque';
}
