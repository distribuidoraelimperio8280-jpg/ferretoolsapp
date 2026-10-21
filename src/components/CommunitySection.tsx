import React, { useState } from 'react';
import { 
  Users, 
  MessageCircle, 
  Mail, 
  Send, 
  CheckCircle2, 
  Share2, 
  Sparkles, 
  Building2, 
  MapPin, 
  Clock, 
  PhoneCall, 
  Download,
  ShieldCheck,
  Truck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/catalogProducts';
import { FerreToolsLogo } from './BrandLogos';

export const CommunitySection: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [businessType, setBusinessType] = useState<string>('ferreteria');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email && !phone) return;
    setSubscribed(true);
  };

  return (
    <section className="w-full bg-[#0c234a] text-white pt-12 pb-16 px-4 sm:px-6 relative overflow-hidden border-t-4 border-amber-400">
      
      {/* Decorative background polygon accents echoing the PDF design */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* Main Community Banner */}
        <div className="bg-gradient-to-r from-[#0b1f3f] via-[#102a5c] to-[#0b1f3f] rounded-2xl p-6 sm:p-10 border border-blue-800/80 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Benefits */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold tracking-wide uppercase">
                <Users className="w-3.5 h-3.5" />
                <span>Red de Ferreterías y Mayoristas</span>
              </div>

              <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-wide text-white leading-tight">
                Únete a nuestra <span className="text-amber-400">Comunidad Empresarial</span> FerreTools
              </h2>

              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                Forma parte de los más de 500 distribuidores, ferreterías y contratistas en Panamá que reciben listas de precios preferenciales, primicias de contenedores y entregas prioritarias directas en su negocio.
              </p>

              {/* Badges / Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-950/60 border border-blue-800/60 text-xs">
                  <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-bold text-slate-200">Despacho en Panamá y Provincias</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-950/60 border border-blue-800/60 text-xs">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-bold text-slate-200">Precios Mayoristas Directos</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-950/60 border border-blue-800/60 text-xs">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-bold text-slate-200">Asesor de Ventas Dedicado</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Subscription Box */}
            <div className="lg:col-span-5 bg-white text-slate-900 p-6 rounded-2xl shadow-xl border border-slate-200">
              {subscribed ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-black text-xl text-blue-950 uppercase">
                    ¡Bienvenido a FerreTools!
                  </h3>
                  <p className="text-xs text-slate-600">
                    Te enviaremos los nuevos catálogos digitales actualizados y ofertas por WhatsApp / Email.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubscribed(false)}
                    className="text-xs text-blue-700 font-bold underline hover:text-blue-900"
                  >
                    Registrar otro contacto
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3.5">
                  <div className="flex items-center gap-2 text-[#0c234a]">
                    <Mail className="w-4 h-4 text-amber-500" />
                    <h3 className="font-heading font-black text-base uppercase">
                      Recibir Nuevos Catálogos Digitales
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500">
                    Suscríbete gratis para recibir las actualizaciones de inventario y nuevas líneas de productos directamente en tu móvil:
                  </p>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                      Correo Electrónico:
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tuempresa@ejemplo.com"
                      className="w-full bg-slate-50 px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                      WhatsApp Comercial:
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="6200-0000"
                      className="w-full bg-slate-50 px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                      Tipo de Negocio:
                    </label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full bg-slate-50 px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-amber-400 focus:outline-hidden text-slate-700"
                    >
                      <option value="ferreteria">Ferretería / Depósito</option>
                      <option value="constructora">Constructora / Contratista</option>
                      <option value="plomeria">Taller de Plomería / Electricidad</option>
                      <option value="revendedor">Revendedor Mayorista</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#0c234a] hover:bg-blue-900 text-amber-300 py-2.5 px-4 rounded-xl font-heading font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>Suscribirme a Novedades y Catálogo</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Corporate Footer Information & Direct Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t border-blue-900/60 text-xs text-slate-300">
          
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-3">
            <FerreToolsLogo size="md" />
            <p className="text-slate-400 text-xs leading-relaxed mt-2">
              Importadores y distribuidores mayoristas de materiales de plomería, herramientas, ferretería, electricidad, aditivos y seguridad industrial en la República de Panamá.
            </p>
            <div className="font-bold text-amber-400 text-xs">
              RUC: {COMPANY_INFO.ruc}
            </div>
          </div>

          {/* Col 2: Bodega & Ubicación */}
          <div className="space-y-2">
            <h4 className="font-heading font-black text-sm uppercase text-amber-300 tracking-wider">
              Bodega y Oficinas
            </h4>
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 pt-1">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{COMPANY_INFO.hours}</span>
            </div>
          </div>

          {/* Col 3: Canales de Atención Inmediata */}
          <div className="space-y-2">
            <h4 className="font-heading font-black text-sm uppercase text-amber-300 tracking-wider">
              Atención Telefónica y WhatsApp
            </h4>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Tel. Oficina: <strong>{COMPANY_INFO.officePhone}</strong></span>
            </div>
            <div className="space-y-1 pt-1">
              <a 
                href={`https://wa.me/507${COMPANY_INFO.whatsApp1.replace('-', '')}?text=Hola%20FerreTools`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp 1: {COMPANY_INFO.whatsApp1}</span>
              </a>
              <a 
                href={`https://wa.me/507${COMPANY_INFO.whatsApp2.replace('-', '')}?text=Hola%20FerreTools`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp 2: {COMPANY_INFO.whatsApp2}</span>
              </a>
            </div>
          </div>

          {/* Col 4: Redes & Canales Digitales */}
          <div className="space-y-3">
            <h4 className="font-heading font-black text-sm uppercase text-amber-300 tracking-wider">
              Comunidad y Redes
            </h4>
            <p className="text-slate-400">
              Síguenos en nuestros canales para lanzamientos de contenedores y promociones semanales:
            </p>
            <div className="flex items-center gap-2">
              <a 
                href={`https://wa.me/507${COMPANY_INFO.whatsApp1.replace('-', '')}`}
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                title="Canal WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-2 rounded-lg bg-blue-900 text-amber-300 hover:bg-blue-800 transition-colors"
                title="Enviar Correo Electrónico"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href={`https://${COMPANY_INFO.website}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition-colors"
                title="Sitio Web Oficial"
              >
                <Building2 className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              © {new Date().getFullYear()} DISTRIBUIDORA FERRE-TOOL, S.A. Todos los derechos reservados.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
