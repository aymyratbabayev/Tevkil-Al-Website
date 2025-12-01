import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-gold-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-navy-900/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text (Span 5 cols) */}
          <div className="lg:col-span-5 text-center lg:text-left z-10">
            <div 
              className="opacity-0 animate-fade-in-up inline-flex items-center px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-navy-800 text-sm font-medium mb-6"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="flex h-2 w-2 rounded-full bg-gold-500 mr-2"></span>
              Türkiye'nin En Kapsamlı Avukat Ağı
            </div>
            
            <h1 
              className="opacity-0 animate-fade-in-up text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight mb-6 leading-tight"
              style={{ animationDelay: '0.3s' }}
            >
              Tevkil Süreçlerinizi <br/>
              <span className="text-gold-500">
                Dijitalleştirin
              </span>
            </h1>
            
            <p 
              className="opacity-0 animate-fade-in-up text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              style={{ animationDelay: '0.5s' }}
            >
              Tevkilal.com, meslektaşlarınızla güvenle iş birliği yapmanızı sağlayan yeni nesil platformdur. İlan verin, başvurun ve süreci tek ekrandan yönetin.
            </p>
            
            <div 
              className="opacity-0 animate-fade-in-up flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              style={{ animationDelay: '0.7s' }}
            >
              <Button size="lg" className="group w-full sm:w-auto" href="https://tevkilal.com">
                Hemen İlan Ver
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" href="https://tevkilal.com">
                İlanlara Göz At
              </Button>
            </div>

            <div 
              className="opacity-0 animate-fade-in-up flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-500"
              style={{ animationDelay: '0.9s' }}
            >
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                Baro Levhası Onaylı
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                Ücretsiz Üyelik
              </div>
            </div>
          </div>

          {/* Right Column: Dashboard Image (Span 7 cols) */}
          <div 
            className="lg:col-span-7 opacity-0 animate-fade-in-up relative"
            style={{ animationDelay: '0.6s' }}
          >
            {/* Glow Effect behind the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/20 to-gold-500/20 blur-2xl transform scale-95 translate-y-4 rounded-3xl -z-10"></div>

            <div className="relative rounded-xl bg-navy-900 p-1.5 shadow-2xl ring-1 ring-slate-900/5">
              {/* Browser Frame */}
              <div className="rounded-lg overflow-hidden bg-white shadow-inner">
                 <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-red-500/30"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500/30"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400 border border-green-500/30"></div>
                    </div>
                    <div className="flex-1 bg-white rounded border border-slate-200 py-0.5 px-3 text-[10px] md:text-xs text-slate-400 text-center font-mono truncate shadow-sm">
                      https://tevkilal.com/dashboard
                    </div>
                 </div>
                 
                 {/* Main Image */}
                 <div className="relative aspect-[16/9] bg-slate-50">
                   {!imgError ? (
                     <img 
                       src="https://i.wpfc.ml/v2/0iccgn.jpg" 
                       alt="Tevkilal Dashboard Arayüzü" 
                       className="w-full h-full object-cover object-top"
                       onError={() => setImgError(true)}
                     />
                   ) : (
                     <div className="flex flex-col items-center justify-center h-full bg-slate-50 text-slate-400 p-8 text-center border-2 border-dashed border-slate-200 m-4 rounded-lg">
                       <p className="font-medium text-navy-900 mb-2">Görsel Yüklenemedi</p>
                       <p className="text-xs">Lütfen internet bağlantınızı kontrol edin.</p>
                     </div>
                   )}
                 </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block animate-bounce-slow z-20">
               <div className="flex items-center space-x-3">
                 <div className="bg-green-100 p-2.5 rounded-full shadow-sm">
                   <ShieldCheck className="h-6 w-6 text-green-600" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 font-medium">Sistem Durumu</p>
                   <p className="font-bold text-navy-900">Aktif & Güvenli</p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};