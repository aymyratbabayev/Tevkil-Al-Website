import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            
            <div className="p-10 md:p-12 lg:p-16 text-white">
              <h2 className="text-3xl font-bold mb-6">Bizimle İletişime Geçin</h2>
              <p className="text-slate-300 mb-8 text-lg">
                Tevkilal.com hakkında sorularınız, önerileriniz veya kurumsal işbirlikleri için bize ulaşabilirsiniz.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-navy-800 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">E-posta</h4>
                    <p className="text-slate-400">iletisim@tevkilal.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-navy-800 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Telefon</h4>
                    <p className="text-slate-400">+90 (212) 555 00 00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-navy-800 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Adres</h4>
                    <p className="text-slate-400">Adalet Mah. Hukuk Cad. No:1<br/>Şişli, İstanbul</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 md:p-12 lg:p-16">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">Ad Soyad</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none transition-all" placeholder="Av. Ahmet Yılmaz" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">E-posta Adresi</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none transition-all" placeholder="ornek@hukuk.com" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">Mesajınız</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none transition-all resize-none" placeholder="Size nasıl yardımcı olabiliriz?"></textarea>
                </div>
                
                <Button fullWidth size="lg" className="group">
                  Gönder
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};