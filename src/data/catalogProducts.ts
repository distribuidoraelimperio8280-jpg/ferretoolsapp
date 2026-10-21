import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  // ==========================================
  // PLOMERÍA (Pages 2-49)
  // ==========================================
  {
    id: 'plo-01',
    code: 'YL24018',
    name: 'CANASTA DE FREGADOR PLASTICA',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'DEKÖ',
    measure: '4"X4"',
    packageInfo: '100 PZA',
    price: 3.25,
    description: 'Canasta de desagüe para fregador con cuerpo plástico de alta resistencia y colador de acero inoxidable.',
    variants: [
      { code: 'YL24018', measure: '4"X4"', packageInfo: '100 PZA', price: 3.25 },
      { code: 'YL24018S', measure: '4"X4" + TAIPICE', packageInfo: '100 PZA', price: 4.10 }
    ]
  },
  {
    id: 'plo-02',
    code: 'ZX-BL-9100',
    name: 'CANASTA DE METAL PARA FREGADOR',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'DEKÖ',
    measure: '4"X4"',
    packageInfo: '50 PZA',
    price: 4.80,
    description: 'Canasta premium completamente metálica con acabado cromado brillante y tapón hermético.'
  },
  {
    id: 'plo-03',
    code: 'P006',
    name: 'TAPON PARA CANASTA DE FREGADOR',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'DEKÖ',
    measure: 'Universal',
    packageInfo: '72 PZA',
    price: 1.15,
    description: 'Tapón colador de repuesto de acero inoxidable con sello de caucho flexible.'
  },
  {
    id: 'plo-04',
    code: 'P174',
    name: 'PARRILLA DE DESAGUE METAL INOXIDABLE',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'DEKÖ',
    measure: '4"X4" (1-1/2", 2", 3")',
    packageInfo: '50 PZA',
    price: 2.90,
    description: 'Parrilla cuadrada de piso de 10cm x 10cm en acero inoxidable resistente a la corrosión.'
  },
  {
    id: 'plo-05',
    code: 'YL26017',
    name: 'PARRILLA PARA PISO DE REGADERA PVC CROMADA',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'DEKÖ',
    measure: '4"X4"',
    packageInfo: '12 PZA',
    price: 1.75,
    description: 'Parrilla redonda central con marco de 4 pulgadas para baño y ducha.'
  },
  {
    id: 'plo-06',
    code: 'HG03',
    name: 'COLADOR PARA FREGADOR',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'FERRETOOLS',
    measure: '4.5" X 2.25" (11.5 CM)',
    packageInfo: '12 PZA',
    price: 1.20,
    description: 'Colador atrapa residuos de malla perforada en acero inoxidable pulido.',
    variants: [
      { code: 'HG03', measure: '4.5"X2.25" Cromado', packageInfo: '12 PZA', price: 1.20 },
      { code: 'HG04', measure: '4.5"X2.25" Color Negro', packageInfo: '12 PZA', price: 1.45 }
    ]
  },
  {
    id: 'plo-07',
    code: 'YL65505',
    name: 'NIPLE GALVANIZADO 3/8"',
    category: 'plomeria',
    brand: 'FERRETOOLS',
    measure: '3/8"X2"',
    packageInfo: '35 PZA',
    price: 0.85,
    description: 'Niple de hierro galvanizado rosca estándar para conducción de agua o gas.',
    variants: [
      { code: 'YL65505', measure: '3/8"X2"', packageInfo: '35 PZA', price: 0.85 },
      { code: 'YL65506', measure: '3/8"X2.5"', packageInfo: '30 PZA', price: 0.95 },
      { code: 'YL65507', measure: '3/8"X3"', packageInfo: '25 PZA', price: 1.10 },
      { code: 'YL65511', measure: '3/8"X4"', packageInfo: '20 PZA', price: 1.30 }
    ]
  },
  {
    id: 'plo-08',
    code: 'YL65508',
    name: 'NIPLE GALVANIZADO 1/2"',
    category: 'plomeria',
    brand: 'FERRETOOLS',
    measure: '1/2"X2"',
    packageInfo: '25 PZA',
    price: 0.95,
    description: 'Niple galvanizado de alta resistencia rosca macho NPT.',
    variants: [
      { code: 'YL65508', measure: '1/2"X2"', packageInfo: '25 PZA', price: 0.95 },
      { code: 'YL65509', measure: '1/2"X2.5"', packageInfo: '21 PZA', price: 1.05 },
      { code: 'YL65510', measure: '1/2"X3"', packageInfo: '21 PZA', price: 1.25 },
      { code: 'YL65512', measure: '1/2"X4"', packageInfo: '15 PZA', price: 1.50 }
    ]
  },
  {
    id: 'plo-09',
    code: 'YL24084',
    name: 'CHUPON UNIVERSAL PARA TRAMPA',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '2"X1-1/2"X1-1/4"',
    packageInfo: '50 PZA',
    price: 0.90,
    description: 'Empaque de goma vulcanizada para sellado hermético de tubos de desagüe.'
  },
  {
    id: 'plo-10',
    code: 'P115',
    name: 'TRAMPA FLEXIBLE 1-1/4" PARA LAVAMANOS',
    category: 'plomeria',
    brand: 'GRIVEN',
    measure: '1-1/4"',
    packageInfo: '25 PZA',
    price: 2.15,
    description: 'Trampa extensible y moldeable en polipropileno con chupones de acople herméticos.'
  },
  {
    id: 'plo-11',
    code: 'P007',
    name: 'CANASTA PLASTICA CON TRAMPA FLEXIBLE',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'DEKÖ',
    measure: '1-1/2"',
    packageInfo: '100 PZA',
    price: 4.75,
    description: 'Kit completo de canasta de fregador plástica con desagüe corrugado extensible.'
  },
  {
    id: 'plo-12',
    code: 'P282',
    name: 'P.O PLUG PLASTICO CON TRAMPA FLEXIBLE',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '1-1/4"',
    packageInfo: '50 PZA',
    price: 3.80,
    description: 'Desagüe completo para lavamanos con tubo extensible flexible.'
  },
  {
    id: 'plo-13',
    code: 'YL24044',
    name: 'TRAMPA FLEXIBLE PARA FREGADOR',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '1-1/2"',
    packageInfo: '100 PZA',
    price: 2.30,
    description: 'Manguera corrugada flexible para sifón de fregador con tuercas plásticas.'
  },
  {
    id: 'plo-14',
    code: 'YL24114',
    name: 'TRAMPA SENCILLA FLEXIBLE PVC P/LAVAMANOS',
    category: 'plomeria',
    imageUrl: '/images/grifo_fregador.jpg',
    brand: 'DEKÖ',
    measure: '1-1/4"',
    packageInfo: '100 PZA',
    price: 2.10,
    description: 'Trampa corrugada económica y flexible de 1-1/4" para lavamanos.'
  },
  {
    id: 'plo-15',
    code: 'P-TRAP1-1-2',
    name: 'TRAMPA RIGIDA SENCILLA DE FREGADOR',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '1-1/2"',
    packageInfo: '50 PZA',
    price: 3.40,
    description: 'Sifón tipo P rígido de PVC blanco calibre sanitario para fregador.'
  },
  {
    id: 'plo-16',
    code: 'P-TRAP1-1-4',
    name: 'TRAMPA RIGIDA SENCILLA DE LAVAMANO',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '1-1/4"',
    packageInfo: '100 PZA',
    price: 3.10,
    description: 'Sifón rígido tipo P en PVC de 1-1/4" para lavamanos institucional.'
  },
  {
    id: 'plo-17',
    code: 'YL24050',
    name: 'TRAMPA DOBLE RIGIDA PARA FREGADOR',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '1-1/2"',
    packageInfo: '50 PZA',
    price: 6.90,
    description: 'Sistema rígido de doble tina para fregadores de dos poncheras.'
  },
  {
    id: 'plo-18',
    code: 'YL24049',
    name: 'TRAMPA FLEXIBLE DOBLE PARA FREGADOR',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '1-1/2"',
    packageInfo: '50 PZA',
    price: 5.40,
    description: 'Trampa tipo Y con mangueras corrugadas dobles para fregador de dos tinas.'
  },
  {
    id: 'plo-19',
    code: 'EXT1-1-2X8',
    name: 'EXTENSION DE FREGADOR',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '1-1/2" X 8"',
    packageInfo: '200 PZA',
    price: 0.95,
    description: 'Tubo de extensión recto de PVC para acople de desagües.'
  },
  {
    id: 'plo-20',
    code: 'EXT1-1-4X8',
    name: 'EXTENSION DE LAVAMANO',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '1-1/4" X 8"',
    packageInfo: '200 PZA',
    price: 0.85,
    description: 'Extensión de PVC blanco para sifones de lavamanos.'
  },
  {
    id: 'plo-21',
    code: 'PPDRAINER1-1-2',
    name: 'CORNETA PARA TINA',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'DEKÖ',
    measure: '1-1/2" X 8"',
    packageInfo: '100 PZA',
    price: 1.15,
    description: 'Tubo de desagüe campana corneta en PVC de alta durabilidad.'
  },
  {
    id: 'plo-22',
    code: 'TP1-1-2X8',
    name: 'TAIPIECE PVC BLANCO',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'DEKÖ',
    measure: '1-1/2" X 8"',
    packageInfo: '200 PZA',
    price: 0.90,
    description: 'Taipice liso con reborde para sujeción a la canasta del fregador.'
  },
  {
    id: 'plo-23',
    code: 'YL70208',
    name: 'LLAVE DE ANGULO SENCILLA 1/2"X3/8"',
    category: 'plomeria',
    brand: 'DEKÖ',
    measure: '1/2"X3/8"',
    packageInfo: '200 PZA',
    price: 2.10,
    description: 'Cuerpo de Zinc, vástago de plástico resistente, mando cromado y rosca NPT de alta calidad.',
    variants: [
      { code: 'YL70208', measure: '1/2"X3/8"', packageInfo: '200 PZA', price: 2.10 },
      { code: 'YL70208S', measure: '3/8"X3/8"', packageInfo: '200 PZA', price: 2.05 },
      { code: 'YL70207', measure: '1/2"X1/2"', packageInfo: '200 PZA', price: 2.20 },
      { code: 'P257', measure: 'Recta 1/2"X3/8"', packageInfo: '20 PZA', price: 2.50 }
    ]
  },
  {
    id: 'plo-24',
    code: 'YL70209',
    name: 'LLAVE DE ANGULO DOBLE',
    category: 'plomeria',
    imageUrl: '/images/grifo_fregador.jpg',
    brand: 'DEKÖ',
    measure: '1/2"X3/8"X3/8"',
    packageInfo: '200 PZA',
    price: 3.45,
    description: 'Llave de paso angular con doble salida independiente para conectar lavamanos y bidet simultáneamente.',
    variants: [
      { code: 'YL70209', measure: '1/2"X3/8"X3/8"', packageInfo: '200 PZA', price: 3.45 },
      { code: 'YL70209S', measure: '3/8"X3/8"X3/8"', packageInfo: '200 PZA', price: 3.35 },
      { code: 'YL70209W', measure: '1/2"X1/2"X1/2"', packageInfo: '200 PZA', price: 3.65 }
    ]
  },
  {
    id: 'plo-25',
    code: 'YL30095',
    name: 'TUBO ABASTO PVC FLEXIBLE PARA FREGADOR Y LAVAMANOS',
    category: 'plomeria',
    imageUrl: '/images/grifo_fregador.jpg',
    brand: 'DEKÖ',
    measure: '3/8"X1/2"X20"',
    packageInfo: '200 PZA',
    price: 1.40,
    description: 'Manguera flexible de vinilo trenzado blanco con tuercas metálicas y mariposa plástica.',
    variants: [
      { code: 'YL30095', measure: '3/8"X1/2"X20" Freg/Lav', packageInfo: '200 PZA', price: 1.40 },
      { code: 'YL30096', measure: '1/2"X1/2"X20"', packageInfo: '200 PZA', price: 1.45 },
      { code: 'YL30099', measure: '3/8"X7/8"X20" Inodoro', packageInfo: '200 PZA', price: 1.55 }
    ]
  },
  {
    id: 'plo-26',
    code: 'YL34070',
    name: 'TUBO ABASTO METAL FLEXIBLE',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '3/8"X1/2"X20"',
    packageInfo: '200 PZA',
    price: 2.10,
    description: 'Manguera trenzada en acero inoxidable con inserciones de latón y tuercas de ajuste rápido.',
    variants: [
      { code: 'YL34070', measure: '3/8"X1/2"X20" Fregador', packageInfo: '200 PZA', price: 2.10 },
      { code: 'YL34072', measure: '1/2"X1/2"X20" General', packageInfo: '200 PZA', price: 2.20 },
      { code: 'YL34071', measure: '3/8"X7/8"X20" Inodoro', packageInfo: '200 PZA', price: 2.30 },
      { code: 'YL35030', measure: 'Doble T 3/8X1/2X1/2X16"', packageInfo: '100 PZA', price: 3.85 }
    ]
  },
  {
    id: 'plo-27',
    code: 'YL32008',
    name: 'TUBO ABASTO MONOMANDO METAL FLEXIBLE',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'DEKÖ',
    measure: '3/8" X M10 X 20"',
    packageInfo: '200 PZA',
    price: 2.75,
    description: 'Latiguillo trenzado con punta M10 macho para grifería monomando moderna.',
    variants: [
      { code: 'YL32008', measure: '3/8"XM10X20"', packageInfo: '200 PZA', price: 2.75 },
      { code: 'YL32009', measure: '1/2"XM10X20"', packageInfo: '200 PZA', price: 2.90 }
    ]
  },
  {
    id: 'plo-28',
    code: 'YL47043',
    name: 'KORKY PARA INODORO (SAPITO)',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'DEKÖ',
    measure: '2"',
    packageInfo: '200 PZA',
    price: 1.10,
    description: 'Válvula obturadora flapper de goma de alta densidad con cadena de acero inoxidable.',
    variants: [
      { code: 'YL47043', measure: '2"', packageInfo: '200 PZA', price: 1.10 },
      { code: 'YL47046', measure: '3"', packageInfo: '200 PZA', price: 1.65 }
    ]
  },
  {
    id: 'plo-29',
    code: 'YL47001',
    name: 'BALANCIN DE METAL PARA INODORO',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'DEKÖ',
    measure: 'Universal',
    packageInfo: '200 PZA',
    price: 2.15,
    description: 'Palanca de descarga frontal para tanque de inodoro con manija cromada y varilla de latón.',
    variants: [
      { code: 'YL47001', measure: 'Metal Cromado', packageInfo: '200 PZA', price: 2.15 },
      { code: 'YL47003', measure: 'Plástico Blanco/Cromo', packageInfo: '200 PZA', price: 1.25 }
    ]
  },
  {
    id: 'plo-30',
    code: 'YL47066',
    name: 'ANILLO DE CERA PARA INODORO',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'DEKÖ',
    measure: 'Estándar',
    packageInfo: '48 PZA',
    price: 1.45,
    description: 'Sello de cera 100% pura para instalación hermética de sanitarios al piso.',
    variants: [
      { code: 'YL47066', measure: 'Sin Guía', packageInfo: '48 PZA', price: 1.45 },
      { code: 'YL47061', measure: 'Con Guía Plástica', packageInfo: '54 PZA', price: 1.95 }
    ]
  },
  {
    id: 'plo-31',
    code: 'P286',
    name: 'MANGUERA FLEXIBLE PARA LAVADORA',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: '3/4" X 1.75 MTS',
    packageInfo: '50 PZA',
    price: 3.50,
    description: 'Manguera de alimentación de agua reforzada con acoples metálicos estándar de 3/4".'
  },
  {
    id: 'plo-32',
    code: 'P234',
    name: 'MANGUERA GRIS PARA DRENAJE DE LAVADORA',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: '1" X 1.5 MTS',
    packageInfo: '100 PZA',
    price: 2.60,
    description: 'Manguera corrugada de desagüe con codo curvado para colgar en caja de drenaje.'
  },
  {
    id: 'plo-33',
    code: 'P296',
    name: 'VALVULA FLOTADOR PARA TANQUE DE AGUA',
    category: 'plomeria',
    imageUrl: '/images/valvula_angulo.jpg',
    brand: 'FERRETOOLS',
    measure: '1/2"',
    packageInfo: '24 PZA',
    price: 5.20,
    description: 'Válvula de llenado de bronce para tanques de reserva con bola boya plástica.',
    variants: [
      { code: 'P296', measure: '1/2"', packageInfo: '24 PZA', price: 5.20 },
      { code: 'P297', measure: '3/4"', packageInfo: '24 PZA', price: 6.80 },
      { code: 'P295', measure: '1"', packageInfo: '24 PZA', price: 8.90 }
    ]
  },
  {
    id: 'plo-34',
    code: 'YL22102',
    name: 'P.O. PLUG 8" METALICO TIPO MONEDA',
    category: 'plomeria',
    brand: 'DEKÖ',
    measure: '8" X 1-1/4"',
    packageInfo: '60 PZA',
    price: 4.60,
    description: 'Desagüe de lavamanos push-button tipo moneda en latón cromado brillante.'
  },
  {
    id: 'plo-35',
    code: 'P015',
    name: 'P.O PLUG PLASTICO CROMADO 8"',
    category: 'plomeria',
    brand: 'DEKÖ',
    measure: '8" X 1-1/4"',
    packageInfo: '25 PZA',
    price: 2.80,
    description: 'Desagüe para lavamanos con tapón y cadenilla cromada.'
  },
  {
    id: 'plo-36',
    code: 'YL47007',
    name: 'TORNILLO PARA ACOPLAR TANQUE DE INODORO',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '5/16" X 3"',
    packageInfo: '200 PAR',
    price: 1.85,
    description: 'Juego de tornillos de latón con tuercas de mariposa y arandelas cónicas de goma.'
  },
  {
    id: 'plo-37',
    code: 'YL47020M',
    name: 'KIT PARA INODORO DE BOTON AJUSTABLE 2"',
    category: 'plomeria',
    brand: 'DEKÖ',
    measure: '1/2 - 7/8" X 2"',
    packageInfo: '40 PZA',
    price: 9.80,
    description: 'Kit completo de reparación para inodoro con válvula de entrada y torre de descarga de doble botón superior.'
  },
  {
    id: 'plo-38',
    code: 'YL47010',
    name: 'KIT PARA INODORO COMPLETO 2"',
    category: 'plomeria',
    brand: 'DEKÖ',
    measure: '7/8" X 2"',
    packageInfo: '20 PZA',
    price: 8.50,
    description: 'Kit convencional con válvula de llenado americana, torre de descarga, boya, varilla y sapito.'
  },
  {
    id: 'plo-39',
    code: 'E01-12',
    name: 'LLAVE DE BOLA PVC',
    category: 'plomeria',
    imageUrl: '/images/grifo_fregador.jpg',
    brand: 'FERRETOOLS',
    measure: '1/2"',
    packageInfo: '210 PZA',
    price: 1.10,
    description: 'Válvula esférica de paso en PVC blanco con manija mariposa azul/roja reforzada.',
    variants: [
      { code: 'E01-12', measure: '1/2"', packageInfo: '210 PZA', price: 1.10 },
      { code: 'E01-34', measure: '3/4"', packageInfo: '168 PZA', price: 1.45 },
      { code: 'E01-1', measure: '1"', packageInfo: '105 PZA', price: 2.10 },
      { code: 'E01-1.25', measure: '1-1/4"', packageInfo: '60 PZA', price: 3.20 },
      { code: 'E01-1.5', measure: '1-1/2"', packageInfo: '50 PZA', price: 4.10 },
      { code: 'E01-2', measure: '2"', packageInfo: '64 PZA', price: 6.30 }
    ]
  },
  {
    id: 'plo-40',
    code: 'P240',
    name: 'LLAVE DE PASO PALANCA CROMADA',
    category: 'plomeria',
    imageUrl: '/images/grifo_fregador.jpg',
    brand: 'FERRETOOLS',
    measure: '1/2"',
    packageInfo: '120 PZA',
    price: 3.90,
    description: 'Válvula de bola para tubería en cuerpo de latón niquelado con palanca de acero inoxidable forrada en vinilo.',
    variants: [
      { code: 'P240', measure: '1/2"', packageInfo: '120 PZA', price: 3.90 },
      { code: 'P226', measure: '3/4"', packageInfo: '100 PZA', price: 5.20 }
    ]
  },
  {
    id: 'plo-41',
    code: 'YL70111',
    name: 'LLAVE DE CHORRO 1/2" ZINC TIPO ITALY',
    category: 'plomeria',
    brand: 'DEKÖ',
    measure: '1/2" X 3/4"',
    packageInfo: '12 PZA / 100 PZA',
    price: 2.65,
    description: 'Grifo para jardín o lavandería con rosca para manguera de 3/4" y manivela azul.'
  },
  {
    id: 'plo-42',
    code: 'P175',
    name: 'LLAVE DE CHORRO 1/2" BRONCE',
    category: 'plomeria',
    brand: 'FERRETOOLS',
    measure: '1/2" X 3/4"',
    packageInfo: '12 PZA',
    price: 4.80,
    description: 'Grifo de jardín en bronce fundido macizo resistente a la intemperie.'
  },
  {
    id: 'plo-43',
    code: 'YL12501',
    name: 'LLAVE DE CHORRO PVC MANGO AZUL',
    category: 'plomeria',
    imageUrl: '/images/grifo_fregador.jpg',
    brand: 'DEKÖ',
    measure: '1/2" X 3/4"',
    packageInfo: '120 PZA',
    price: 1.15,
    description: 'Llave de chorro plástica ligera y libre de corrosión.'
  },
  {
    id: 'plo-44',
    code: 'P245',
    name: 'LLAVE LAVAMANOS PALANCA DORADO SATINADA 2T',
    category: 'plomeria',
    imageUrl: '/images/grifo_fregador.jpg',
    brand: 'AQUAFINA',
    measure: '16 CM',
    packageInfo: '20 PZA',
    price: 28.50,
    description: 'Grifo monomando de lujo con acabado dorado satinado (Satin Gold Finish). Incluye 2 mangueras flexibles 1/2xM10, válvula cerámica y adaptadores.',
    badge: 'LUJO 2T'
  },
  {
    id: 'plo-45',
    code: 'P326',
    name: 'LLAVE LAVAMANOS SENCILLA ALTA PALANCA DORADA 2T',
    category: 'plomeria',
    imageUrl: '/images/grifo_fregador.jpg',
    brand: 'AQUAFINA',
    measure: '29 CM',
    packageInfo: '20 PZA',
    price: 36.00,
    description: 'Grifería alta para lavamanos de sobreponer tipo vasija en acabado Satin Gold.',
    badge: 'LUJO 2T'
  },
  {
    id: 'plo-46',
    code: 'P246',
    name: 'LLAVE LAVAMANOS SENCILLA ALTA PALANCA NEGRA 2T',
    category: 'plomeria',
    imageUrl: '/images/grifo_fregador.jpg',
    brand: 'AQUAFINA',
    measure: '29 CM',
    packageInfo: '20 PZA',
    price: 34.00,
    description: 'Grifería de cuello alto acabado negro mate (Matte Black Finish) monomando 2 temperaturas.',
    badge: 'NEGRO MATE'
  },
  {
    id: 'plo-47',
    code: 'P291',
    name: 'LLAVE LAVAMANO METAL PALANCA CAJA',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '1/2" X 4.75"',
    packageInfo: '50 PZA',
    price: 6.75,
    description: 'Llave de lavamanos tradicional en metal cromado con accionamiento por palanca suave.'
  },
  {
    id: 'plo-48',
    code: 'P088',
    name: 'LLAVE LAVAMANO METAL CRUZ BLISTER',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '1/2" X 4.5"',
    packageInfo: '60 PZA',
    price: 6.25,
    description: 'Llave para lavamanos con elegante manilla en cruz cromada.'
  },
  {
    id: 'plo-49',
    code: 'P214',
    name: 'LLAVE FREGADOR SENCILLA PALANCA CROMADA',
    category: 'plomeria',
    imageUrl: '/images/grifo_fregador.jpg',
    brand: 'DEKÖ',
    measure: 'Universal',
    packageInfo: '10 PZA',
    price: 8.90,
    description: 'Llave monomando de cuello de ganso con aireador y palanca metálica.'
  },
  {
    id: 'plo-50',
    code: 'YL12301',
    name: 'LLAVE FREGADOR DOBLE COPA METAL CROMADA 8"',
    category: 'plomeria',
    brand: 'DEKÖ',
    measure: '8" Distancia',
    packageInfo: '20 PZA',
    price: 13.50,
    description: 'Mezcladora de 8 pulgadas de montaje en cubierta para fregador con cuello giratorio.',
    variants: [
      { code: 'YL12301', measure: '8" Metal Cromada', packageInfo: '20 PZA', price: 13.50 },
      { code: 'YL12302', measure: '8" Metal Negro Mate', packageInfo: '20 PZA', price: 16.50 },
      { code: 'YL12303', measure: '8" Copa Flexible Cromada', packageInfo: '20 PZA', price: 15.00 },
      { code: 'YL12304', measure: '8" Copa Flexible Negra', packageInfo: '20 PZA', price: 17.50 }
    ]
  },
  {
    id: 'plo-51',
    code: 'P250',
    name: 'LLAVE FREGADOR PALANCA CUELLO CUADRADO NEGRA 2T',
    category: 'plomeria',
    imageUrl: '/images/grifo_fregador.jpg',
    brand: 'AQUAFINA',
    measure: 'Monomando 2T',
    packageInfo: '20 PZA',
    price: 32.00,
    description: 'Grifería de diseño moderno vanguardista con caño cuadrado en negro mate mate black.',
    badge: 'PREMIUM'
  },
  {
    id: 'plo-52',
    code: 'P320',
    name: 'REGADERA RECTANGULAR CROMADA 10"X8"',
    category: 'plomeria',
    brand: 'AQUAFINA',
    measure: '10" X 8"',
    packageInfo: '20 PZA',
    price: 24.50,
    description: 'Regadera rectangular de lluvia ultrafina con brazo recto cromado y boquillas de silicona anticalcárea.',
    variants: [
      { code: 'P320', measure: '10"X8" Cromada', packageInfo: '20 PZA', price: 24.50 },
      { code: 'P319', measure: '10"X8" Gris Oscuro', packageInfo: '20 PZA', price: 26.00 }
    ]
  },
  {
    id: 'plo-53',
    code: 'P309',
    name: 'REGADERA NEGRA CUADRADA TIPO LLUVIA',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'BRICKELL',
    measure: '8"',
    packageInfo: '48 PZA',
    price: 18.00,
    description: 'Ducha estilo rainshower acabado negro mate con brazo de extensión para pared.',
    variants: [
      { code: 'P311', measure: '4"', packageInfo: '36 PZA', price: 9.50 },
      { code: 'P310', measure: '6"', packageInfo: '24 PZA', price: 13.50 },
      { code: 'P309', measure: '8"', packageInfo: '48 PZA', price: 18.00 }
    ]
  },
  {
    id: 'plo-54',
    code: 'P233',
    name: 'REGADERA DE MANO CUADRADA TIPO TELEFONO',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'DEKÖ',
    measure: '1.5M Manguera',
    packageInfo: '20 PZA',
    price: 11.50,
    description: 'Ducha de mano tipo teléfono cuadrada cromada con manguera flexible de 1.5 metros y soporte.'
  },
  {
    id: 'plo-55',
    code: 'CHV-12',
    name: 'CHECK BALL PVC LISO',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'DEKÖ',
    measure: '1/2"',
    packageInfo: '216 PZA',
    price: 1.95,
    description: 'Válvula de retención antirretorno en PVC liso para instalación horizontal o vertical.',
    variants: [
      { code: 'CHV-12', measure: '1/2" Liso', packageInfo: '216 PZA', price: 1.95 },
      { code: 'CHV-34', measure: '3/4" Liso', packageInfo: '140 PZA', price: 2.65 },
      { code: 'P232', measure: '1" Liso', packageInfo: '70 PZA', price: 3.80 },
      { code: 'P137', measure: '1/2" C/Rosca', packageInfo: '216 PZA', price: 2.15 },
      { code: 'P138', measure: '3/4" C/Rosca', packageInfo: '140 PZA', price: 2.85 },
      { code: 'P231', measure: '1" C/Rosca', packageInfo: '70 PZA', price: 4.10 }
    ]
  },
  {
    id: 'plo-56',
    code: 'P154',
    name: 'CHECK BALL VERTICAL DE BRONCE',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'FERRETOOLS',
    measure: '1/2"',
    packageInfo: '180 PZA',
    price: 4.90,
    description: 'Válvula check vertical de resorte y asiento de goma en bronce macizo.',
    variants: [
      { code: 'P154', measure: '1/2"', packageInfo: '180 PZA', price: 4.90 },
      { code: 'P225', measure: '3/4"', packageInfo: '120 PZA', price: 6.90 },
      { code: 'P155', measure: '1/2" De Fondo Con Filtro', packageInfo: '300 PZA', price: 5.25 }
    ]
  },
  {
    id: 'plo-57',
    code: 'AN01-12',
    name: 'UNION PVC LISA CALIBRE #40 PARA AGUA',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '1/2"',
    packageInfo: '50 PZA / 100 PZA',
    price: 0.35,
    description: 'Fabricado en Cloruro de Polivinilo (PVC-U). Certificación ASTM D2466. Presión máx 15 Bar.',
    variants: [
      { code: 'AN01-12', measure: '1/2"', packageInfo: '100 PZA', price: 0.35 },
      { code: 'AN01-34', measure: '3/4"', packageInfo: '600 PZA', price: 0.50 },
      { code: 'AN01-1', measure: '1"', packageInfo: '350 PZA', price: 0.85 },
      { code: 'AN01-1.25', measure: '1-1/4"', packageInfo: '240 PZA', price: 1.30 },
      { code: 'AN01-1.5', measure: '1-1/2"', packageInfo: '180 PZA', price: 1.70 },
      { code: 'AN01-2', measure: '2"', packageInfo: '120 PZA', price: 2.60 }
    ]
  },
  {
    id: 'plo-58',
    code: 'AN06-12',
    name: 'CODO PVC LISO 90° CALIBRE #40 PARA AGUA',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '1/2" X 90°',
    packageInfo: '50 PZA / 700 PZA',
    price: 0.40,
    description: 'Codo de 90 grados para agua a presión según norma ASTM D2466.',
    variants: [
      { code: 'AN06-12', measure: '1/2"X90°', packageInfo: '700 PZA', price: 0.40 },
      { code: 'AN06-34', measure: '3/4"X90°', packageInfo: '400 PZA', price: 0.60 },
      { code: 'AN06-1', measure: '1"X90°', packageInfo: '240 PZA', price: 0.95 },
      { code: 'AN06-2', measure: '2"X90°', packageInfo: '63 PZA', price: 2.90 },
      { code: 'C02-12', measure: '1/2" Doble Rosca', packageInfo: '650 PZA', price: 0.55 },
      { code: 'AN07-12', measure: '1/2"X45° Liso', packageInfo: '800 PZA', price: 0.45 }
    ]
  },
  {
    id: 'plo-59',
    code: 'AN03-12',
    name: 'TEE PVC LISA CALIBRE #40 PARA AGUA',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '1/2"',
    packageInfo: '50 PZA / 700 PZA',
    price: 0.50,
    description: 'Tee estándar de distribución en PVC cedula 40 agua fría.',
    variants: [
      { code: 'AN03-12', measure: '1/2"', packageInfo: '700 PZA', price: 0.50 },
      { code: 'AN03-34', measure: '3/4"', packageInfo: '400 PZA', price: 0.75 },
      { code: 'AN03-1', measure: '1"', packageInfo: '240 PZA', price: 1.20 },
      { code: 'AN03-2', measure: '2"', packageInfo: '63 PZA', price: 3.50 }
    ]
  },
  {
    id: 'plo-60',
    code: 'P037',
    name: 'FREGADOR SENCILLO ACERO INOXIDABLE',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '22" X 25" X 6"',
    packageInfo: '5 PZA',
    price: 31.00,
    description: 'Ponchera de fregador en acero inoxidable satinado de una tina de embutir.',
    variants: [
      { code: 'P037', measure: '22"X25"X6"', packageInfo: '5 PZA', price: 31.00 },
      { code: 'P038', measure: '19"X19"X6"', packageInfo: '5 PZA', price: 26.50 },
      { code: 'P072', measure: 'JGO Completo 22"X25" (Inc. Llave, Canasta, Trampa, Abasto)', packageInfo: '1 JGO', price: 46.00 }
    ]
  },
  {
    id: 'plo-61',
    code: 'P095',
    name: 'FREGADOR DOBLE ACERO INOXIDABLE',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80',
    brand: 'DEKÖ',
    measure: '33" X 19" X 6"',
    packageInfo: '5 PZA',
    price: 48.00,
    description: 'Fregador de dos tinas en acero inoxidable pulido para empotrar.',
    variants: [
      { code: 'P095', measure: '33"X19"X6" Solo Fregador', packageInfo: '5 PZA', price: 48.00 },
      { code: 'P099', measure: 'JGO Completo 33"X19" (Inc. Mezcladora 8", 2 Canastas, Trampas, Abastos)', packageInfo: '5 PZA', price: 72.00 }
    ]
  },
  {
    id: 'plo-62',
    code: 'ZX-WM-197333',
    name: 'ROLLO DE TEFLON INDUSTRIAL',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'BRICKELL',
    measure: '1/2" X 10 MTS',
    packageInfo: '1000 PZA',
    price: 0.30,
    description: 'Cinta selladora de roscas de PTFE para plomería y tuberías.',
    variants: [
      { code: 'ZX-WM-197333', measure: '1/2" X 10 MTS', packageInfo: '1000 PZA', price: 0.30 },
      { code: 'ZX-WM-197368', measure: '3/4" X 10 MTS', packageInfo: '1000 PZA', price: 0.45 }
    ]
  },
  {
    id: 'plo-63',
    code: 'P054',
    name: 'PEGAMENTO PVC ERA LATA CHICA AZUL',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'ERA',
    measure: '4" ONZ',
    packageInfo: '48 PZA',
    price: 2.10,
    description: 'Cemento solvente azul de secado ultra rápido para tuberías de PVC hasta 4".'
  },
  {
    id: 'plo-64',
    code: 'P053',
    name: 'PEGAMENTO PVC GRIVEN LATA AZUL',
    category: 'plomeria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'GRIVEN',
    measure: '4" ONZ (0.118 Lt)',
    packageInfo: '48 PZA',
    price: 1.95,
    description: 'Cemento solvente súper fuerte para tuberías y conexiones de PVC para agua.'
  },
  {
    id: 'plo-65',
    code: 'P182',
    name: 'MANGUERA PARA JARDIN REFORZADA',
    category: 'plomeria',
    imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: '1/2" X 25 FT',
    packageInfo: '10 PZA',
    price: 7.80,
    description: 'Manguera verde con refuerzo tramado en hilo de poliéster y conexiones de latón.',
    variants: [
      { code: 'P182', measure: '1/2" X 25 FT', packageInfo: '10 PZA', price: 7.80 },
      { code: 'P180', measure: '1/2" X 50 FT', packageInfo: '6 PZA', price: 13.50 },
      { code: 'P270', measure: '1/2" X 75 FT', packageInfo: '5 PZA', price: 18.90 },
      { code: 'P181', measure: '1/2" X 100 FT', packageInfo: '4 PZA', price: 23.50 }
    ]
  },

  // ==========================================
  // FERRETERÍA & HERRAMIENTAS (Pages 51-99)
  // ==========================================
  {
    id: 'fer-01',
    code: '12-AB',
    name: 'SILICON NEGRO ABRO PASTA 85G',
    category: 'ferreteria',
    imageUrl: '/images/silicon_abro.jpg',
    brand: 'ABRO',
    measure: '85G',
    packageInfo: '12 PZA',
    price: 2.30,
    description: 'Sellador de silicona RTV Black Gasket Maker para motores y aplicaciones industriales.',
    variants: [
      { code: '12-AB', measure: '85G Negro', packageInfo: '12 PZA', price: 2.30 },
      { code: '13-AB', measure: '85G Transparente', packageInfo: '12 PZA', price: 2.30 },
      { code: '14-AB', measure: '85G Blanco', packageInfo: '12 PZA', price: 2.30 },
      { code: '9-AB', measure: '85G Gris 999 Hi-Temp', packageInfo: '12 PZA', price: 2.60 }
    ]
  },
  {
    id: 'fer-02',
    code: 'ES-CW-BLK',
    name: 'PEGAMUNDO SOLDADURA EN FRIO EPOXICA ABRO',
    category: 'ferreteria',
    imageUrl: '/images/silicon_abro.jpg',
    brand: 'ABRO',
    measure: '40 ML',
    packageInfo: '12 PZA',
    price: 3.15,
    description: 'Soldadura en frío bicomponente epóxica. Resiste hasta 400 kg y temperaturas extremas. Seca en 30 minutos al sol.',
    variants: [
      { code: 'ES-CW-BLK', measure: 'Black / Negro', packageInfo: '12 PZA', price: 3.15 },
      { code: 'ES-CW-CL', measure: 'Clear / Transparente', packageInfo: '12 PZA', price: 3.15 }
    ]
  },
  {
    id: 'fer-03',
    code: 'C071',
    name: 'HILO DE CONSTRUCCION',
    category: 'ferreteria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'FERRETOOLS',
    measure: '165 MTS',
    packageInfo: '12 PQT',
    price: 1.10,
    description: 'Hilo de nylon de alta resistencia a la tensión para trazado en albañilería.',
    variants: [
      { code: 'C071', measure: '165 MTS', packageInfo: '12 PQT', price: 1.10 },
      { code: 'C046', measure: '180 MTS', packageInfo: '24 PQT', price: 1.25 },
      { code: 'HG02', measure: 'Hilo Pabilo 100 Pie', packageInfo: '24 DOC', price: 0.75 }
    ]
  },
  {
    id: 'fer-04',
    code: 'F147',
    name: 'LONA REFORZADA MULTIUSO (COLORES SURTIDOS)',
    category: 'ferreteria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'ZASC',
    measure: '6" X 8"',
    packageInfo: '36 PZA',
    price: 3.40,
    description: 'Lona impermeable de polietileno con ojales metálicos reforzados en los cuatro costados.',
    variants: [
      { code: 'F147', measure: '6" X 8"', packageInfo: '36 PZA', price: 3.40 },
      { code: 'F148', measure: '8" X 10"', packageInfo: '21 PZA', price: 5.20 },
      { code: 'F149', measure: '10" X 12"', packageInfo: '15 PZA', price: 7.90 },
      { code: 'F150', measure: '12" X 14"', packageInfo: '9 PZA', price: 10.80 },
      { code: 'F298', measure: '14" X 18"', packageInfo: '12 PZA', price: 15.50 },
      { code: 'F299', measure: '16" X 20"', packageInfo: '12 PZA', price: 19.50 }
    ]
  },
  {
    id: 'fer-05',
    code: 'F231',
    name: 'LAPIZ BICOLOR P/CARPINTERO CJA',
    category: 'ferreteria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'HARDEN',
    measure: '12 PZA',
    packageInfo: '144 PZA',
    price: 3.80,
    description: 'Lápiz de carpintero rojo/azul ovalado resistente para marcado en madera y mampostería.'
  },
  {
    id: 'fer-06',
    code: 'F196',
    name: 'BROCA P/CERRADURA 3 PZA',
    category: 'ferreteria',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&auto=format&fit=crop&q=80',
    brand: 'HARDEN',
    measure: '1/4" X 2-1/8"',
    packageInfo: '6 PZA',
    price: 6.50,
    description: 'Kit de sierra copa con broca guía para instalación de cerraduras residenciales.'
  },
  {
    id: 'fer-07',
    code: 'F080',
    name: 'JGO CHALK LINE CON TIZA',
    category: 'ferreteria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'HARDEN',
    measure: '30 M',
    packageInfo: '12 PZA',
    price: 3.95,
    description: 'Tiralíneas con cordón de 30 metros, nivel de burbuja y bote de polvo de tiza azul.'
  },
  {
    id: 'fer-08',
    code: 'F073',
    name: 'DESTORNILLADOR ESTRELLA / PLANO INDUSTRIAL',
    category: 'herramientas',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'HARDEN',
    measure: 'PH1 4" X 100MM',
    packageInfo: '12 PZA',
    price: 1.65,
    description: 'Destornillador con mango ergonómico antideslizante y punta magnética de cromo vanadio.',
    variants: [
      { code: 'F073', measure: 'Estrella PH1 4" X 100MM', packageInfo: '12 PZA', price: 1.65 },
      { code: 'F075', measure: 'Plana PH1 4" X 100MM', packageInfo: '12 PZA', price: 1.65 },
      { code: 'F270', measure: 'Estrella PH2 5" X 125MM', packageInfo: '12 PZA', price: 1.95 },
      { code: 'F271', measure: 'Plana PH2 5" X 125MM', packageInfo: '12 PZA', price: 1.95 },
      { code: 'F093', measure: 'Estrella PH2 6" X 150MM', packageInfo: '12 PZA', price: 2.25 },
      { code: 'F074', measure: 'Estrella PH3 8" X 200MM', packageInfo: '12 PZA', price: 2.80 },
      { code: 'F273', measure: '2 en 1 PH2 6X130mm', packageInfo: '72 PZA', price: 2.10 },
      { code: 'F272', measure: 'JGO Relojero 6 Pcs', packageInfo: '96 SET', price: 3.20 }
    ]
  },
  {
    id: 'fer-09',
    code: 'F077',
    name: 'BROCA ESCALONADA P/METAL HSS BLISTER',
    category: 'herramientas',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'HARDEN',
    measure: 'M4-M12 (5/23"-1/2")',
    packageInfo: '100 PZA',
    price: 5.90,
    description: 'Broca cónica escalonada de acero rápido HSS recubierta de titanio.',
    variants: [
      { code: 'F077', measure: 'M4-M12 (5/23"-1/2")', packageInfo: '100 PZA', price: 5.90 },
      { code: 'F078', measure: 'M4-M20 (5/53"-3/4")', packageInfo: '100 PZA', price: 8.90 },
      { code: 'F079', measure: 'M4-M32 (5/23"-1-1/4")', packageInfo: '100 PZA', price: 13.50 }
    ]
  },
  {
    id: 'fer-10',
    code: 'F282',
    name: 'BROCA CONCRETO SDS-PLUS BLISTER',
    category: 'herramientas',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'HARDEN',
    measure: '1/4" 6.3MM',
    packageInfo: '300 PZA',
    price: 1.40,
    description: 'Broca para rotomartillo con encastre SDS-Plus y pastilla de carburo de tungsteno.',
    variants: [
      { code: 'F282', measure: '1/4" 6.3MM', packageInfo: '300 PZA', price: 1.40 },
      { code: 'F283', measure: '5/16" 7MM', packageInfo: '200 PZA', price: 1.70 },
      { code: 'F284', measure: '3/8" 9.5MM', packageInfo: '200 PZA', price: 2.10 },
      { code: 'F285', measure: '1/2" 12MM', packageInfo: '250 PZA', price: 2.65 }
    ]
  },
  {
    id: 'fer-11',
    code: 'H079',
    name: 'REMACHADORA PROFESIONAL',
    category: 'herramientas',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'HARDEN',
    measure: '9.5"',
    packageInfo: '30 PZA',
    price: 6.90,
    description: 'Remachadora manual industrial con 4 boquillas intercambiables y llave de ajuste.'
  },
  {
    id: 'fer-12',
    code: 'F089',
    name: 'CLAVOS DE IMPACTO C/GUIA ROJA',
    category: 'ferreteria',
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&auto=format&fit=crop&q=80',
    brand: 'BRICKELL',
    measure: '3/4"',
    packageInfo: '100 PZA / 50 PQT',
    price: 3.20,
    description: 'Clavo de acero templado para pistola de impacto de fijación directa.',
    variants: [
      { code: 'F089', measure: '3/4"', packageInfo: '50 PQT', price: 3.20 },
      { code: 'F090', measure: '1"', packageInfo: '50 PQT', price: 3.60 }
    ]
  },
  {
    id: 'fer-13',
    code: 'F104',
    name: 'TACO VERDE P/PARED',
    category: 'ferreteria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'FERRETOOLS',
    measure: '1/4 X 1-1/2"',
    packageInfo: '250 PZA / 30 PQT',
    price: 2.40,
    description: 'Ramplug de polietileno con estrías antigiros para fijación en pared.',
    variants: [
      { code: 'F104', measure: 'Taco Verde 1/4x1-1/2"', packageInfo: '30 PQT', price: 2.40 },
      { code: 'F102', measure: 'Taco Azul 5/16x1-1/2"', packageInfo: '20 PQT', price: 2.80 },
      { code: 'F123', measure: 'Taco Naranja 3/8x1-1/2"', packageInfo: '14 PQT', price: 3.20 },
      { code: 'F103', measure: 'Taco Naranja 3/8x2"', packageInfo: '10 PQT', price: 3.80 }
    ]
  },
  {
    id: 'fer-14',
    code: 'F004',
    name: 'EXACTO O BISTURI GRANDE C/GOMA BLISTER',
    category: 'herramientas',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'HARDEN',
    measure: '18 MM',
    packageInfo: '144 PZA',
    price: 1.45,
    description: 'Cúter profesional con cuerpo recubierto de goma ergonómica y traba de seguridad.',
    variants: [
      { code: 'F004', measure: '18 MM C/Goma', packageInfo: '144 PZA', price: 1.45 },
      { code: 'F029', measure: 'Grande Económico', packageInfo: '80 DOC', price: 0.65 },
      { code: 'F064', measure: 'Chico Económico', packageInfo: '120 DOC', price: 0.40 },
      { code: 'F095', measure: 'Repuesto Grande 18x100mm 10 Pza', packageInfo: '240 PQT', price: 0.90 }
    ]
  },
  {
    id: 'fer-15',
    code: 'F096',
    name: 'CINTA METRICA CON GOMA REFORZADA',
    category: 'herramientas',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'HARDEN',
    measure: '3M X 16MM',
    packageInfo: '12 PZA',
    price: 1.85,
    description: 'Cinta métrica con botón de freno automático y caja protegida contra caídas.',
    variants: [
      { code: 'F096', measure: '3M X 16MM', packageInfo: '12 PZA', price: 1.85 },
      { code: 'F097', measure: '5M X 19MM', packageInfo: '12 PZA', price: 2.95 },
      { code: 'F098', measure: '7.5M X 25MM', packageInfo: '6 PZA', price: 4.80 },
      { code: 'F261', measure: 'Económica 3M X 16MM', packageInfo: '12 PZA', price: 1.10 },
      { code: 'F268', measure: 'Económica 5M X 19MM', packageInfo: '12 PZA', price: 1.80 }
    ]
  },
  {
    id: 'fer-16',
    code: 'F049',
    name: 'CANDADOS DORADOS TRI-CIRCLE BLISTER',
    category: 'ferreteria',
    imageUrl: '/images/candado_laton.jpg',
    brand: 'TRI-CIRCLE',
    measure: '20 MM',
    packageInfo: '12 PZA / 144 PZA',
    price: 1.35,
    description: 'Candado de latón macizo con arco de acero templado y 3 llaves.',
    variants: [
      { code: 'F049', measure: '20 MM', packageInfo: '144 PZA', price: 1.35 },
      { code: 'F050', measure: '25 MM', packageInfo: '144 PZA', price: 1.65 },
      { code: 'F051', measure: '32 MM', packageInfo: '72 PZA', price: 2.25 },
      { code: 'F052', measure: '38 MM', packageInfo: '72 PZA', price: 2.95 },
      { code: 'F053', measure: '50 MM', packageInfo: '60 PZA', price: 4.20 },
      { code: 'F054', measure: '63 MM', packageInfo: '36 PZA', price: 5.80 },
      { code: 'F178', measure: 'Cuello Largo 38 MM', packageInfo: '96 PZA', price: 3.40 },
      { code: 'F179', measure: 'Cuello Largo 50 MM', packageInfo: '60 PZA', price: 4.90 }
    ]
  },
  {
    id: 'fer-17',
    code: 'F253',
    name: 'BROCHA MANGO DE PLASTICO PELO NATURAL',
    category: 'ferreteria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'FERRETOOLS',
    measure: '1"',
    packageInfo: '12 PZA / 96 DOC',
    price: 0.65,
    description: 'Brocha de pintor con cerda natural de alta retención de pintura y virola metálica.',
    variants: [
      { code: 'F253', measure: '1"', packageInfo: '96 DOC', price: 0.65 },
      { code: 'F003', measure: '1-1/2"', packageInfo: '96 DOC', price: 0.85 },
      { code: 'F254', measure: '2"', packageInfo: '96 DOC', price: 1.15 },
      { code: 'F229', measure: '2-1/2"', packageInfo: '96 DOC', price: 1.45 },
      { code: 'F255', measure: '3"', packageInfo: '72 DOC', price: 1.80 },
      { code: 'F008', measure: '4"', packageInfo: '72 DOC', price: 2.45 },
      { code: 'F171', measure: '5"', packageInfo: '50 DOC', price: 3.20 }
    ]
  },
  {
    id: 'fer-18',
    code: 'F106',
    name: 'KIT PARA PINTAR COMPLETO 9" (SET 6 PIEZAS)',
    category: 'ferreteria',
    brand: 'HARDEN',
    measure: '9" Set',
    packageInfo: '12 PZA',
    price: 8.50,
    description: 'Incluye: 2 Rodillos de poliéster 9", 1 Soporte de cepillo cilíndrico 9", 1 Brocha 1", 1 Brocha 2", 1 Bandeja para pintura 9".'
  },
  {
    id: 'fer-19',
    code: 'F264',
    name: 'GUANTES PARA SOLDAR CUERO REFORZADO',
    category: 'seguridad',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
    brand: 'HARDEN',
    measure: '#13 / #16',
    packageInfo: '60 PZA',
    price: 4.80,
    description: 'Guante largo de carnaza premium resistente al calor, chispas y escoria.',
    variants: [
      { code: 'F264', measure: '#13 (33 cm)', packageInfo: '60 PZA', price: 4.80 },
      { code: 'F099', measure: '#16 (40 cm)', packageInfo: '60 PZA', price: 5.50 }
    ]
  },
  {
    id: 'fer-20',
    code: 'C057',
    name: 'SOLDADURA 6011',
    category: 'ferreteria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'FERRETOOLS',
    measure: '6011 X 1/8"',
    packageInfo: '11 LBS PQS',
    price: 18.50,
    description: 'Electrodo para soldadura por arco de penetración profunda para toda posición.',
    variants: [
      { code: 'C057', measure: '6011 X 1/8" (11 LBS)', packageInfo: '11 LBS PQS', price: 18.50 },
      { code: 'C058', measure: '6011 X 1/8" (44 LBS)', packageInfo: '44 LBS BOX', price: 65.00 },
      { code: 'C059', measure: '6011 X 3/32" (11 LBS)', packageInfo: '11 LBS PQS', price: 19.50 },
      { code: 'C067', measure: '6011 X 3/32" (44 LBS)', packageInfo: '44 LBS BOX', price: 68.00 }
    ]
  },
  {
    id: 'fer-21',
    code: 'F337',
    name: 'PALA PUNTA CUADRADA MANGO DE MADERA',
    category: 'herramientas',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: '40.3" X 11.2" X 11.22"',
    packageInfo: '6 PZA',
    price: 9.80,
    description: 'Fabricada en acero al carbono 50Mn. Grosor de cabeza 1.4 mm, mango de madera con empuñadura ergonómica.'
  },
  {
    id: 'fer-22',
    code: 'F336',
    name: 'PALA PUNTA REDONDA MANGO DE MADERA',
    category: 'herramientas',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: '40.3" X 11.4" X 8.26"',
    packageInfo: '6 PZA',
    price: 9.80,
    description: 'Pala pocera de punta redonda en acero al carbono 50Mn con mango de madera largo total 1025 mm.'
  },
  {
    id: 'fer-23',
    code: 'H107',
    name: 'ALICATE CORTE UNIVERSAL',
    category: 'herramientas',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: '6"',
    packageInfo: '60 PZA',
    price: 3.20,
    description: 'Pinza universal de electricista con mangos bimaterial aislados y filo endurecido.',
    variants: [
      { code: 'H107', measure: '6"', packageInfo: '60 PZA', price: 3.20 },
      { code: 'H108', measure: '7"', packageInfo: '60 PZA', price: 3.80 },
      { code: 'H109', measure: '8"', packageInfo: '60 PZA', price: 4.40 }
    ]
  },
  {
    id: 'fer-24',
    code: 'H112',
    name: 'ALICATE DE PRESION',
    category: 'herramientas',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: '7"',
    packageInfo: '60 PZA',
    price: 4.90,
    description: 'Pinza tipo hombre solo con mordazas curvadas y tornillo de liberación rápida.',
    variants: [
      { code: 'H112', measure: '7"', packageInfo: '60 PZA', price: 4.90 },
      { code: 'H113', measure: '10"', packageInfo: '40 PZA', price: 5.95 }
    ]
  },
  {
    id: 'fer-25',
    code: 'H116',
    name: 'LLAVES DE TUBO STILLSON',
    category: 'herramientas',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'HARDEN',
    measure: '8"',
    packageInfo: '48 PZA',
    price: 5.60,
    description: 'Llave de tubo de hierro nodular de alta resistencia con quijadas forjadas.',
    variants: [
      { code: 'H116', measure: '8"', packageInfo: '48 PZA', price: 5.60 },
      { code: 'H117', measure: '10"', packageInfo: '24 PZA', price: 7.20 },
      { code: 'H118', measure: '12"', packageInfo: '36 PZA', price: 9.80 },
      { code: 'H119', measure: '14"', packageInfo: '24 PZA', price: 12.50 }
    ]
  },
  {
    id: 'fer-26',
    code: 'H114',
    name: 'MARTILLO MANGO DE FIBRA DE VIDRIO',
    category: 'herramientas',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'HARDEN',
    measure: '16 OZ',
    packageInfo: '36 PZA',
    price: 5.80,
    description: 'Martillo de uña curva forjado en una sola pieza con mango antishock de fibra.'
  },
  {
    id: 'fer-27',
    code: 'H036',
    name: 'DISCO DE CORTE DEWALT ORIGINAL',
    category: 'herramientas',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'DEWALT',
    measure: '4-1/2" X 045" X 7/8"',
    packageInfo: '25 PZA',
    price: 1.75,
    description: 'Disco extra fino para corte de metal y acero inoxidable. Máx 13,300 RPM.',
    variants: [
      { code: 'H036', measure: '4-1/2" X 045" X 7/8"', packageInfo: '25 PZA', price: 1.75 },
      { code: 'H037', measure: '7-1/4" X 045" X 7/8"', packageInfo: '25 PQT', price: 3.20 }
    ]
  },
  {
    id: 'fer-28',
    code: 'H002',
    name: 'DISCO DIAMANTE SEGMENTADO',
    category: 'herramientas',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'BRICKELL',
    measure: '4 1/2 (115MM)',
    packageInfo: '40 PZA / 160 PZA',
    price: 3.40,
    description: 'Disco diamantado segmentado para corte en seco de concreto, ladrillo y mampostería.',
    variants: [
      { code: 'H002', measure: '4-1/2" (115mm)', packageInfo: '160 PZA', price: 3.40 },
      { code: 'H016', measure: '4-1/2" Liso Húmedo', packageInfo: '160 PZA', price: 3.20 },
      { code: 'H026', measure: '7-1/4" Segmentado', packageInfo: '40 PZA', price: 6.80 },
      { code: 'H027', measure: '7-1/4" Liso', packageInfo: '40 PZA', price: 6.50 }
    ]
  },
  {
    id: 'fer-29',
    code: 'TL2.0MMR',
    name: 'HILO CORTAGRAMA CHICO 0.80 REDONDO 33FT',
    category: 'ferreteria',
    imageUrl: '/images/canasta_fregador.jpg',
    brand: 'CRAZY TRIMMER',
    measure: '0.80 X 33FT (2.0MM 10M)',
    packageInfo: '20 PZA / 240 PZA',
    price: 0.95,
    description: 'Hilo de desmalezadora de monofilamento de nylon de alta durabilidad y resistencia al desgaste.',
    variants: [
      { code: 'TL2.0MMR', measure: '0.80 Redondo 33FT', packageInfo: '240 PZA', price: 0.95 },
      { code: 'TL2.0MMSQ', measure: '0.80 Cuadrado 33FT', packageInfo: '192 PZA', price: 1.05 },
      { code: 'TL2.4MMR', measure: '0.95 Redondo 33FT', packageInfo: '192 PZA', price: 1.15 },
      { code: 'TL2.7MMR', measure: '105 Redondo 33FT', packageInfo: '168 PZA', price: 1.35 },
      { code: 'TL3.3MMR', measure: '130 Redondo 33FT', packageInfo: '144 PZA', price: 1.65 },
      { code: 'TL2.4MMC1LB', measure: '1 Libra 0.95 Cuadrado (285 FT)', packageInfo: '20 PZA', price: 8.90 },
      { code: 'TL2.7MMC1LB', measure: '1 Libra 105 Cuadrado (285 FT)', packageInfo: '20 PZA', price: 9.80 }
    ]
  },
  {
    id: 'fer-30',
    code: 'HSMG-700-RED',
    name: 'GRASA EN TUBO MULTIPROPOSITO ABRO',
    category: 'aditivos',
    imageUrl: '/images/silicon_abro.jpg',
    brand: 'ABRO',
    measure: '14 OZ',
    packageInfo: '10 PZA',
    price: 3.75,
    description: 'Grasa lubricante automotriz e industrial multipropósito en cartucho estándar para grasera.',
    variants: [
      { code: 'HSMG-700-AMBER', measure: '14 OZ Ámbar', packageInfo: '10 PZA', price: 3.75 },
      { code: 'HSMG-700-RED', measure: '14 OZ Roja EP', packageInfo: '10 PZA', price: 3.95 },
      { code: 'HSMG-800-NEGRA', measure: '14 OZ Negra con Moly', packageInfo: '10 PZA', price: 4.25 }
    ]
  },

  // ==========================================
  // ADITIVOS Y LUBRICANTES (Pages 53-54, 100)
  // ==========================================
  {
    id: 'adt-01',
    code: 'F205',
    name: 'ESPUMA EXPANSIVA DE POLIURETANO',
    category: 'aditivos',
    imageUrl: '/images/silicon_abro.jpg',
    brand: 'ZASC',
    measure: '300 ML',
    packageInfo: '12 PZA',
    price: 3.90,
    description: 'Espuma selladora y aislante acústico-térmico para marcos de puertas, ventanas y tuberías.',
    variants: [
      { code: 'F205', measure: '300 ML', packageInfo: '12 PZA', price: 3.90 },
      { code: 'F206', measure: '500 ML', packageInfo: '12 PZA', price: 5.10 }
    ]
  },
  {
    id: 'adt-02',
    code: 'F328',
    name: 'LUBRICANTE ANTIOXIDO MULTIUSOS',
    category: 'aditivos',
    imageUrl: '/images/silicon_abro.jpg',
    brand: 'ZASC',
    measure: '200 ML',
    packageInfo: '24 PZA',
    price: 2.15,
    description: 'Aerosol penetrante que afloja piezas oxidadas, desplaza la humedad y previene la corrosión.'
  },
  {
    id: 'adt-03',
    code: 'F327',
    name: 'LIMPIADOR DE CARBURADOR (CARB CLEANER)',
    category: 'aditivos',
    imageUrl: '/images/silicon_abro.jpg',
    brand: 'ZASC',
    measure: '450 ML',
    packageInfo: '12 PZA',
    price: 2.80,
    description: 'Disuelve barnices, gomas y depósitos de carbón en el cuerpo de aceleración y carburadores.'
  },
  {
    id: 'adt-04',
    code: 'F326',
    name: 'LIMPIADOR DE FRENOS (BRAKE & PARTS CLEANER)',
    category: 'aditivos',
    imageUrl: '/images/silicon_abro.jpg',
    brand: 'ZASC',
    measure: '450 ML',
    packageInfo: '12 PZA',
    price: 2.90,
    description: 'Desengrasa discos, tambores y pastillas de frenos sin dejar residuos aceitosos.'
  },
  {
    id: 'adt-05',
    code: 'F314',
    name: 'ADHESIVO Y SELLADOR PARA PARABRISAS',
    category: 'aditivos',
    imageUrl: '/images/silicon_abro.jpg',
    brand: 'ZASC',
    measure: '310 ML Cartucho',
    packageInfo: '24 PZA',
    price: 4.80,
    description: 'Poliuretano negro de alta adhesión y elasticidad para lunas de automóviles y juntas mecánicas.'
  },
  {
    id: 'adt-06',
    code: 'F317',
    name: 'HIGH TACK ADHESIVO DE MONTAJE UNIPEGA',
    category: 'aditivos',
    imageUrl: '/images/silicon_abro.jpg',
    brand: 'UNIPEGA',
    measure: '280 ML Cartucho',
    packageInfo: '24 PZA',
    price: 5.40,
    description: 'Pegamento de agarre inmediato extra fuerte con soporte de hasta 350 kg. Sin solventes, apto para superficies mojadas y resistente UV.'
  },
  {
    id: 'adt-07',
    code: 'DESG-3314',
    name: 'DESENGRASANTE INDUSTRIAL SMART',
    category: 'aditivos',
    imageUrl: '/images/silicon_abro.jpg',
    brand: 'SMART FORMULA',
    measure: '946.3 ML (32 OZ)',
    packageInfo: '6 PZA',
    price: 4.25,
    description: 'Desengrasante multiuso con atomizador gatillo para talleres mecánicos, pisos industriales y maquinaria.'
  },
  {
    id: 'adt-08',
    code: 'ABTS-250-3.2OZ',
    name: 'ACEITE 2 CICLOS ABRO MOTOR OIL',
    category: 'aditivos',
    imageUrl: '/images/silicon_abro.jpg',
    brand: 'ABRO',
    measure: '3.2 OZ',
    packageInfo: '24 PZA',
    price: 1.50,
    description: 'Aceite lubricante sintético premium para motores de 2 tiempos en motosierras y motoguadañas.',
    variants: [
      { code: 'ABTS-250-3.2OZ', measure: '3.2 OZ', packageInfo: '24 PZA', price: 1.50 },
      { code: 'ABTS-TC-W3-16OZ', measure: '16 OZ Fuera de Borda TC-W3', packageInfo: '24 PZA', price: 4.95 }
    ]
  },
  {
    id: 'adt-09',
    code: 'BF-P3-300',
    name: 'LIQUIDO DE FRENO ABRO DOT 3 HEAVY DUTY',
    category: 'aditivos',
    imageUrl: '/images/silicon_abro.jpg',
    brand: 'ABRO',
    measure: '300 ML',
    packageInfo: '24 PZA',
    price: 2.45,
    description: 'Fluido hidráulico para sistemas de frenos de disco y tambor con alto punto de ebullición.',
    variants: [
      { code: 'BF-P3-300', measure: '300 ML Auto', packageInfo: '24 PZA', price: 2.45 },
      { code: 'BF-3-M100', measure: '100 ML Moto', packageInfo: '48 PZA', price: 1.30 }
    ]
  },

  // ==========================================
  // ELECTRICIDAD (Pages 112-133)
  // ==========================================
  {
    id: 'ele-01',
    code: 'P507C',
    name: 'ROSETA DE PORCELANA SIN CADENA',
    category: 'electricidad',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
    brand: 'CUPER ELECTRIC',
    measure: 'E27 4" Base',
    packageInfo: '60 PZA',
    price: 0.95,
    description: 'Plafón cerámico para bombillo E27 resistente a altas temperaturas.',
    variants: [
      { code: 'P507C', measure: 'Sin Cadena', packageInfo: '60 PZA', price: 0.95 },
      { code: 'P507CW-1', measure: 'Con Cadena', packageInfo: '60 PZS', price: 1.45 },
      { code: 'PBL-066W', measure: 'Plástica Blanca Sin Cadena', packageInfo: '240 PZA', price: 0.60 },
      { code: 'PBL-066', measure: 'Plástica Crema Sin Cadena', packageInfo: '240 PZA', price: 0.60 }
    ]
  },
  {
    id: 'ele-02',
    code: 'E003',
    name: 'REGLETA ELECTRICA 6 ENTRADAS 2FT',
    category: 'electricidad',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
    brand: 'BRICKELL',
    measure: '15A - 125V (1875W) 2FT',
    packageInfo: '50 PZA',
    price: 4.80,
    description: 'Multitoma de 6 salidas con switch interruptor de encendido iluminado y cable 14 AWG de 2 pies.',
    variants: [
      { code: 'E003', measure: 'Color Gris', packageInfo: '50 PZA', price: 4.80 },
      { code: 'E088', measure: 'Color Blanco', packageInfo: '50 PZA', price: 4.80 },
      { code: 'PBA-P30', measure: 'Multicontacto 6 Entradas Blister', packageInfo: '12 PZS', price: 2.10 }
    ]
  },
  {
    id: 'ele-03',
    code: 'E014',
    name: 'EXTENSION ELECTRICA BLANCA DOMESTICA 13A',
    category: 'electricidad',
    imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&auto=format&fit=crop&q=80',
    brand: 'CUPER ELECTRIC',
    measure: '6 FTS (Calibre 2X18AWG)',
    packageInfo: '100 PZA',
    price: 2.20,
    description: 'Extensión para electrodomésticos con enchufe plano y 3 salidas protegidas.',
    variants: [
      { code: 'E014', measure: '6 FTS', packageInfo: '100 PZA', price: 2.20 },
      { code: 'E015', measure: '9 FTS', packageInfo: '100 PZA', price: 2.75 },
      { code: 'E016', measure: '12 FTS', packageInfo: '100 PZA', price: 3.30 },
      { code: 'E021', measure: '15 FTS', packageInfo: '100 PZA', price: 3.90 },
      { code: 'E044', measure: '20 FTS', packageInfo: '100 PZA', price: 4.90 },
      { code: 'E089', measure: '25 FTS', packageInfo: '100 PZA', price: 5.90 }
    ]
  },
  {
    id: 'ele-04',
    code: 'E029',
    name: 'EXTENSION ELECTRICA NARANJA USO PESADO 15A',
    category: 'electricidad',
    imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&auto=format&fit=crop&q=80',
    brand: 'BRICKELL',
    measure: '9 FTS (15A-125V Calibre 2X14AWG)',
    packageInfo: '50 PZA',
    price: 4.40,
    description: 'Cable de uso rudo aislado en PVC de alta visibilidad certificado RETIE.',
    variants: [
      { code: 'E029', measure: '9 FTS', packageInfo: '50 PZA', price: 4.40 },
      { code: 'E030', measure: '13 FTS', packageInfo: '50 PZA', price: 5.80 },
      { code: 'E031', measure: '19 FTS', packageInfo: '50 PZA', price: 7.90 },
      { code: 'E050', measure: '26 FTS', packageInfo: '50 PZA', price: 10.50 }
    ]
  },
  {
    id: 'ele-05',
    code: 'GL-XTURCAL1405A',
    name: 'EXTENSION AMARILLA INDUSTRIAL 1875W (CALIBRE 14)',
    category: 'electricidad',
    imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&auto=format&fit=crop&q=80',
    brand: 'CUPER ELECTRIC',
    measure: '5M 3X14 AWG',
    packageInfo: '10 PZA',
    price: 11.50,
    description: 'Conductor de cobre 100% calibrado, aditivo antiflama con doble recubrimiento y terminales moldeadas para uso rudo.',
    variants: [
      { code: 'GL-XTURCAL1405A', measure: '5M (3X14 AWG)', packageInfo: '10 PZA', price: 11.50 },
      { code: 'GL-XTURCAL1410A', measure: '10M (3X14 AWG)', packageInfo: '3 PZA', price: 19.80 }
    ]
  },
  {
    id: 'ele-06',
    code: 'E047',
    name: 'TAPE ELECTRICO PVC NEGRO 20M',
    category: 'electricidad',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
    brand: 'HARDEN',
    measure: '20M',
    packageInfo: '10 PZS',
    price: 0.85,
    description: 'Cinta aislante de PVC resistente hasta 600V con retardante a la flama.'
  },
  {
    id: 'ele-07',
    code: 'E041',
    name: 'PROBADOR DE VOLTAJE TIPO LAPIZ 190MM',
    category: 'electricidad',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
    brand: 'CUPER ELECTRIC',
    measure: '110 - 250 VAC',
    packageInfo: '24 PZA',
    price: 1.15,
    description: 'Destornillador buscapolo con indicador luminoso de neón para prueba de fase.'
  },
  {
    id: 'ele-08',
    code: 'PBP317',
    name: 'ENCHUFE MACHO 3 PATAS 110V CAUCHO INDUSTRIAL',
    category: 'electricidad',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
    brand: 'CUPER ELECTRIC',
    measure: '15A-125V-1875W',
    packageInfo: '12 PZS',
    price: 1.95,
    description: 'Clavija reforzada de hule negro y prensaestopas metálico para cable uso rudo.',
    variants: [
      { code: 'PBP317', measure: 'Macho 110V Caucho', packageInfo: '12 PZS', price: 1.95 },
      { code: 'PBP317A', measure: 'Hembra 110V Caucho', packageInfo: '12 PZS', price: 2.10 },
      { code: 'PBP29', measure: 'Macho 110V Metal', packageInfo: '12 PZS', price: 2.30 },
      { code: 'PBP31', measure: 'Hembra 110V Metal', packageInfo: '12 PZS', price: 2.45 },
      { code: 'PBP318', measure: 'Macho 220V Caucho 15A-250V', packageInfo: '12 PZS', price: 2.40 },
      { code: 'PBP318A', measure: 'Hembra 220V Caucho 15A-250V', packageInfo: '12 PZS', price: 2.60 }
    ]
  },
  {
    id: 'ele-09',
    code: 'PBE-6F',
    name: 'TOMACORRIENTE DOBLE 110V BLANCO',
    category: 'electricidad',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
    brand: 'CUPER ELECTRIC',
    measure: '15A-125V',
    packageInfo: '25 PZS',
    price: 0.95,
    description: 'Módulo de tomacorriente duplex con terminales de puesta a tierra.',
    variants: [
      { code: 'PBE-6F', measure: 'Doble Blanco', packageInfo: '25 PZS', price: 0.95 },
      { code: 'PBE-6A', measure: 'Doble Crema', packageInfo: '25 PZS', price: 0.95 },
      { code: 'PBE-4W', measure: 'Interruptor Sencillo Blanco', packageInfo: '25 PZS', price: 0.85 },
      { code: 'PBE-4M', measure: 'Interruptor Sencillo Crema', packageInfo: '25 PZS', price: 0.85 },
      { code: 'PBE-2FW', measure: 'Interruptor Doble Blanco', packageInfo: '20 PZS', price: 1.40 },
      { code: 'PBE-2EW', measure: 'Interruptor Con Toma Blanco', packageInfo: '20 PZS', price: 1.60 }
    ]
  },
  {
    id: 'ele-10',
    code: 'E095',
    name: 'BREAKER SENCILLO 1 POLO BRICKELL',
    category: 'electricidad',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
    brand: 'BRICKELL',
    measure: '20 AMP (120/240V AC)',
    packageInfo: '10 PZA',
    price: 3.40,
    description: 'Interruptor termomagnético enchufable para tablero de distribución tipo enchufable con protección IP20.',
    variants: [
      { code: 'E095', measure: '20 AMP', packageInfo: '10 PZA', price: 3.40 },
      { code: 'E096', measure: '30 AMP', packageInfo: '10 PZA', price: 3.40 },
      { code: 'E124', measure: '40 AMP', packageInfo: '10 PZS', price: 3.80 }
    ]
  },
  {
    id: 'ele-11',
    code: 'E128',
    name: 'CAJA METALICA PARA BREAKER',
    category: 'electricidad',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
    brand: 'BRICKELL',
    measure: '2 CIRCUITOS 60-AMPS',
    packageInfo: '20 PZS',
    price: 7.90,
    description: 'Centro de carga metálico con puerta frontal para empotrar o sobreponer.',
    variants: [
      { code: 'E128', measure: '2 Circuitos 60A', packageInfo: '20 PZS', price: 7.90 },
      { code: 'E101', measure: '4 Circuitos 100A', packageInfo: '20 PZS', price: 11.50 },
      { code: 'E118', measure: '6 Circuitos 100A', packageInfo: '20 PZS', price: 16.50 },
      { code: 'E125', measure: '8 Circuitos 100A', packageInfo: '10 PZS', price: 21.00 }
    ]
  },
  {
    id: 'ele-12',
    code: 'GL-PKBU12',
    name: 'SERIE MODERNA GENLIT NEGRO MATE (SWITCH / TOMA)',
    category: 'electricidad',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
    brand: 'GENLIT',
    measure: 'Apagador 250V + Toma 127V',
    packageInfo: '10 PCS',
    price: 2.80,
    description: 'Línea de lujo en plástico ABS negro mate con indicador fluorescente integrado. 1 año de garantía certificada.',
    badge: 'GENLIT NEGRO',
    variants: [
      { code: 'GL-PKBU12', measure: 'Switch Con Toma Doble Negro', packageInfo: '10 PCS', price: 2.80 },
      { code: 'GL-PKBU1A', measure: 'Switch/Placa Sencillo Negro', packageInfo: '10 PCS', price: 1.90 },
      { code: 'GL-PKBU2A', measure: 'Switch Doble Negro', packageInfo: '10 PCS', price: 2.40 },
      { code: 'GL-PKBU2C', measure: 'Toma Corriente Doble Negro', packageInfo: '10 PCS', price: 2.20 },
      { code: 'GL-PKBU3A', measure: 'Switch Triple Negro', packageInfo: '10 PCS', price: 2.95 },
      { code: 'GL-PKBUT', measure: 'Interruptor Timbre Negro', packageInfo: '10 PCS', price: 1.80 }
    ]
  },

  // ==========================================
  // SEGURIDAD INDUSTRIAL (Pages 105-106)
  // ==========================================
  {
    id: 'seg-01',
    code: 'S001',
    name: 'BOTAS DE SEGURIDAD CON PUNTERA DE ACERO',
    category: 'seguridad',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
    brand: 'HARDEN',
    measure: 'Talla 38-44',
    packageInfo: '10 PZA',
    price: 24.50,
    description: 'Entresuela y puntera de acero. Antiestático, antivibración, resistente al aceite y antideslizante con suela de poliuretano de doble densidad.',
    variants: [
      { code: 'S001', measure: 'Talla 38', packageInfo: '10 PZA', price: 24.50 },
      { code: 'S002', measure: 'Talla 39', packageInfo: '10 PZA', price: 24.50 },
      { code: 'S003', measure: 'Talla 40', packageInfo: '10 PZA', price: 24.50 },
      { code: 'S004', measure: 'Talla 41', packageInfo: '10 PZA', price: 24.50 },
      { code: 'S005', measure: 'Talla 42', packageInfo: '10 PZA', price: 24.50 },
      { code: 'S006', measure: 'Talla 43', packageInfo: '10 PZA', price: 24.50 },
      { code: 'S007', measure: 'Talla 44', packageInfo: '10 PZA', price: 24.50 }
    ]
  },
  {
    id: 'seg-02',
    code: 'F111',
    name: 'GUANTE PUNTITOS DE ALGODON',
    category: 'seguridad',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: 'Talla Única',
    packageInfo: '1 DOC / 50 DOC',
    price: 4.80,
    description: 'Guante de punto de algodón blanco con micropuntos de PVC en la palma para un agarre firme.'
  },
  {
    id: 'seg-03',
    code: 'F091',
    name: 'GUANTE BLOQUERO ROJO DE LATEX',
    category: 'seguridad',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: 'Talla 10',
    packageInfo: '10 PARES / 50 PARES',
    price: 7.90,
    description: 'Guante de hilo con recubrimiento de látex corrugado impermeable en palma y dedos para albañilería.'
  },
  {
    id: 'seg-04',
    code: 'F108',
    name: 'LENTES DE SEGURIDAD TRANSPARENTES (CE EN:166)',
    category: 'seguridad',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: '140 MM',
    packageInfo: '10 PZA',
    price: 1.25,
    description: 'Policarbonato de alto impacto con homologación CE EN:166. Antigolpes, antiarañazos y protección lateral envolvente.'
  },
  {
    id: 'seg-05',
    code: 'F252',
    name: 'LENTES DE SEGURIDAD OSCUROS (CE EN:166)',
    category: 'seguridad',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: '130 MM',
    packageInfo: '10 PZA',
    price: 1.35,
    description: 'Gafas de seguridad oscuras con filtro UV antirreflejo y montura aerodinámica envolvente.'
  },

  // ==========================================
  // CERRADURAS (Pages 107-111)
  // ==========================================
  {
    id: 'cer-01',
    code: 'F122',
    name: 'CERRADURA PARA SOLDAR VERDE',
    category: 'cerraduras',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: 'Derecha / Izquierda',
    packageInfo: '30 PZA',
    price: 8.90,
    description: 'Cerradura de sobreponer para portones metálicos con cerrojo de tres barras y cilindro de latón.',
    variants: [
      { code: 'F122-D', measure: 'Verde Derecha', packageInfo: '30 PZA', price: 8.90 },
      { code: 'F122-I', measure: 'Verde Izquierda', packageInfo: '30 PZA', price: 8.90 },
      { code: 'F304-D', measure: 'Negra Derecha', packageInfo: '30 PZA', price: 9.40 },
      { code: 'F304-I', measure: 'Negra Izquierda', packageInfo: '30 PZA', price: 9.40 }
    ]
  },
  {
    id: 'cer-02',
    code: 'FLMEM-LA',
    name: 'CERRADURA DE MANIJA RESIDENCIAL',
    category: 'cerraduras',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: 'Entrada Principal',
    packageInfo: '6 PZA',
    price: 14.50,
    description: 'Juego de manija con pestillo de alta seguridad reversible y cilindro computarizado.',
    variants: [
      { code: 'FLMEM-LA', measure: 'Latón Antiguo', packageInfo: '6 PZA', price: 14.50 },
      { code: 'FLMEM-LB', measure: 'Dorado Brillante', packageInfo: '6 PZA', price: 14.50 },
      { code: 'FLMEM-NS', measure: 'Níquel Satinada', packageInfo: '6 PZA', price: 14.80 },
      { code: 'FLMEM-NM', measure: 'Negro Mate', packageInfo: '6 PZA', price: 15.50 }
    ]
  },
  {
    id: 'cer-03',
    code: 'F086',
    name: 'CERRADURA CERROJO 2 CILINDROS (LLAVE / LLAVE)',
    category: 'cerraduras',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: 'Backset 60/70mm',
    packageInfo: '6 PZA',
    price: 7.80,
    description: 'Cerrojo de seguridad auxiliar con llave por ambos lados y escudo protector giratorio.',
    variants: [
      { code: 'F086', measure: 'Bronce', packageInfo: '6 PZA', price: 7.80 },
      { code: 'F087', measure: 'Verde', packageInfo: '6 PZA', price: 7.80 },
      { code: 'F187', measure: 'Dorada', packageInfo: '6 PZA', price: 7.80 },
      { code: 'F185', measure: 'Cromada', packageInfo: '6 PZA', price: 7.80 }
    ]
  },
  {
    id: 'cer-04',
    code: 'F010',
    name: 'CERRADURA DE BOLA (POMO)',
    category: 'cerraduras',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: 'Entrada / Recámara',
    packageInfo: '6 PZA',
    price: 5.90,
    description: 'Cerradura cilíndrica de pomo tipo bola en latón de alta resistencia con 3 llaves dentadas.',
    variants: [
      { code: 'F010', measure: 'Dorada', packageInfo: '6 PZA', price: 5.90 },
      { code: 'F116', measure: 'Bronce', packageInfo: '6 PZA', price: 5.90 },
      { code: 'F011', measure: 'Plateada', packageInfo: '6 PZA', price: 5.90 },
      { code: 'F195', measure: 'Verde', packageInfo: '6 PZA', price: 5.90 }
    ]
  },

  // ==========================================
  // CONSTRUCCIÓN (Pages 134-137)
  // ==========================================
  {
    id: 'con-01',
    code: 'F161',
    name: 'ALUMBAND TAPA GOTERA BANDA AUTOADHESIVA',
    category: 'construccion',
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&auto=format&fit=crop&q=80',
    brand: 'IMPTEK',
    measure: '1.1MM (10CM X 5M)',
    packageInfo: '24 PZA',
    price: 4.80,
    description: 'Membrana de asfalto modificado autoadhesivo protegida con lámina de aluminio reflectivo.',
    variants: [
      { code: 'F161', measure: '1.1mm (10cm x 5m)', packageInfo: '24 PZA', price: 4.80 },
      { code: 'F162', measure: '1.1mm (10cm x 10m)', packageInfo: '16 PZA', price: 8.50 },
      { code: 'F173', measure: '2.0mm (10cm x 5m)', packageInfo: '24 PZA', price: 6.20 },
      { code: 'F174', measure: '2.0mm (10cm x 10m)', packageInfo: '12 PZA', price: 11.20 }
    ]
  },
  {
    id: 'con-02',
    code: 'C060',
    name: 'CLAVO DE ALAMBRE PARA MADERA',
    category: 'construccion',
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: '1"',
    packageInfo: '44 LBS (CAJA)',
    price: 27.50,
    description: 'Clavo de acero trefilado con cabeza plana estriada para encofrados y carpintería.',
    variants: [
      { code: 'C060', measure: '1" (44 LBS)', packageInfo: '44 LBS CAJA', price: 27.50 },
      { code: 'C011', measure: '1-1/2" (44 LBS)', packageInfo: '44 LBS CAJA', price: 26.50 },
      { code: 'C006', measure: '2" (44 LBS)', packageInfo: '44 LBS CAJA', price: 25.50 },
      { code: 'C007', measure: '2-1/2" (44 LBS)', packageInfo: '44 LBS CAJA', price: 25.50 },
      { code: 'C008', measure: '3" (44 LBS)', packageInfo: '44 LBS CAJA', price: 25.50 },
      { code: 'C009', measure: '4" (44 LBS)', packageInfo: '44 LBS CAJA', price: 25.50 }
    ]
  },
  {
    id: 'con-03',
    code: 'C025',
    name: 'CLAVO DE ACERO CUADRADO PARA CONCRETO',
    category: 'construccion',
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: '2"',
    packageInfo: '44 LBS (CAJA)',
    price: 36.00,
    description: 'Clavo de acero templado acanalado de alta dureza para fijación en bloques y hormigón.',
    variants: [
      { code: 'C025', measure: '2" (44 LBS)', packageInfo: '44 LBS CAJA', price: 36.00 },
      { code: 'C026', measure: '2-1/2" (44 LBS)', packageInfo: '44 LBS CAJA', price: 36.00 },
      { code: 'C027', measure: '3" (44 LBS)', packageInfo: '44 LBS CAJA', price: 36.00 },
      { code: 'C028', measure: '4" (44 LBS)', packageInfo: '44 LBS CAJA', price: 36.00 }
    ]
  },
  {
    id: 'con-04',
    code: 'C017',
    name: 'ALAMBRE DULCE NEGRO #16',
    category: 'construccion',
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: 'Calibre 16',
    packageInfo: 'ROLLO 100 LBS',
    price: 68.00,
    description: 'Alambre recocido de gran flexibilidad para amarre de varillas de refuerzo en estructuras de concreto.',
    variants: [
      { code: 'C017', measure: 'Rollo 100 LBS', packageInfo: '100 LBS', price: 68.00 },
      { code: 'C018', measure: 'Rollo 12 LBS', packageInfo: '12 LBS', price: 9.80 }
    ]
  },
  {
    id: 'con-05',
    code: 'TRZ10',
    name: 'TORNILLO DE TECHO PUNTA DE BROCA CON ARANDELA EPDM',
    category: 'construccion',
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: '1"',
    packageInfo: '1500 PCS X CAJA',
    price: 32.00,
    description: 'Tornillo autoperforante hexagonal cincado con golilla de goma para láminas de zinc y paneles sándwich.',
    variants: [
      { code: 'TRZ10', measure: '1" (1500 pcs)', packageInfo: '1500 CAJA', price: 32.00 },
      { code: 'C047', measure: '1-1/2" (1500 pcs)', packageInfo: '1500 CAJA', price: 38.00 },
      { code: 'C004', measure: '2" (1500 pcs)', packageInfo: '1500 CAJA', price: 44.00 },
      { code: 'C005', measure: '2-1/2" (1500 pcs)', packageInfo: '1500 CAJA', price: 49.00 },
      { code: 'C049', measure: '3" (1500 pcs)', packageInfo: '1500 CAJA', price: 54.00 },
      { code: 'C042', measure: 'PQT 2" (100 pcs)', packageInfo: '100 PQT', price: 3.50 },
      { code: 'C048', measure: 'PQT 3" (100 pcs)', packageInfo: '100 PQT', price: 4.20 }
    ]
  },
  {
    id: 'con-06',
    code: 'C010',
    name: 'GRAPA U PARA CERCA GALVANIZADA',
    category: 'construccion',
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: '1"',
    packageInfo: '44 LBS (CAJA)',
    price: 31.50,
    description: 'Grapas en forma de U de acero galvanizado con púas afiladas para fijación de alambre de púas en postes de madera.',
    variants: [
      { code: 'C010', measure: '1" (44 LBS)', packageInfo: '44 LBS', price: 31.50 },
      { code: 'C037', measure: '3/4" (44 LBS)', packageInfo: '44 LBS', price: 31.50 }
    ]
  },
  {
    id: 'con-07',
    code: 'C029',
    name: 'MALLA DE REPELLO REFORZADA',
    category: 'construccion',
    imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&auto=format&fit=crop&q=80',
    brand: 'FERRETOOLS',
    measure: '1/8" X 3" X 100 FT',
    packageInfo: 'Calibre 27',
    price: 38.00,
    description: 'Malla metálica tejida galvanizada para refuerzo de revoques, repello y estuco en paredes.',
    variants: [
      { code: 'C029', measure: '1/8" X 3" X 100 (Cal 27)', packageInfo: '1 Rollo', price: 38.00 },
      { code: 'C030', measure: '1/4" X 3" X 100 (Cal 23)', packageInfo: '1 Rollo', price: 44.00 },
      { code: 'C031', measure: '3/4" X 3" X 100 (Cal 19)', packageInfo: '1 Rollo', price: 52.00 },
      { code: 'C032', measure: '1/2" X 3" X 100 (Cal 21)', packageInfo: '1 Rollo', price: 48.00 }
    ]
  }
];

export const CATEGORIES = [
  { id: 'todos', label: 'Todo el Catálogo', icon: 'Layers' },
  { id: 'plomeria', label: 'Plomería', icon: 'Droplets' },
  { id: 'ferreteria', label: 'Ferretería', icon: 'Wrench' },
  { id: 'herramientas', label: 'Herramientas', icon: 'Hammer' },
  { id: 'electricidad', label: 'Electricidad', icon: 'Zap' },
  { id: 'aditivos', label: 'Aditivos y Lubricantes', icon: 'Flame' },
  { id: 'seguridad', label: 'Seguridad', icon: 'ShieldCheck' },
  { id: 'cerraduras', label: 'Cerraduras', icon: 'Lock' },
  { id: 'construccion', label: 'Construcción', icon: 'HardHat' }
] as const;

export const COMPANY_INFO = {
  name: 'DISTRIBUIDORA FERRE-TOOL, S.A.',
  tradeName: 'FerreTools',
  slogan: 'SU DISTRIBUIDORA DE CONFIANZA',
  subSlogan: 'DISTRIBUIDOR MAYORISTA',
  ruc: '155702300-2-2021 DV2',
  address: 'Calle 15 Rio Abajo Galera IMJUSA Bodega #09 Ciudad de Panamá',
  officePhone: '830-5940',
  whatsApp1: '6278-5344',
  whatsApp2: '6234-6764',
  email: 'info@ferretoolspanama.com',
  website: 'ferretoolspanama.com',
  hours: 'Lunes a Viernes: 8:00 AM - 5:00 PM | Sábados: 8:00 AM - 1:00 PM'
};
