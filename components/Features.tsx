import React from 'react';
import { FileText, MessageSquare, HandCoins, HelpCircle, UserCheck, MapPin } from 'lucide-react';
import { FeatureItem } from '../types';

export const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      title: "Hızlı İlan Oluşturma",
      description: "İhtiyaç duyduğunuz hukuki desteği bulmak için saniyeler içinde detaylı tevkil ilanı oluşturun.",
      icon: <FileText className="h-6 w-6 text-white" />,
    },
    {
      title: "Meslektaşa Sor",
      description: "Hukuki konularda takıldığınız noktaları platform üzerinden anonim olarak meslektaşlarınıza danışın.",
      icon: <HelpCircle className="h-6 w-6 text-white" />,
    },
    {
      title: "Detaylı Profil",
      description: "Uzmanlık alanlarınız ve geçmiş işlerinizle profilinizi bir dijital kartvizite dönüştürün.",
      icon: <UserCheck className="h-6 w-6 text-white" />,
    },
    {
      title: "Şeffaf Ücretlendirme",
      description: "Tevkil ücreti ve yol masrafı gibi detayları baştan belirleyerek sürprizlerden kaçının.",
      icon: <HandCoins className="h-6 w-6 text-white" />,
    },
    {
      title: "Güvenli Mesajlaşma",
      description: "Kişisel numaranızı paylaşmadan, uygulama içi güvenli mesajlaşma ile dosya detaylarını görüşün.",
      icon: <MessageSquare className="h-6 w-6 text-white" />,
    },
    {
      title: "Akıllı Eşleşme",
      description: "Adliye ve konum bazlı filtreleme ile en yakın ve uygun avukata anında ulaşın.",
      icon: <MapPin className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-gold-500 tracking-wide uppercase">Özellikler</h2>
          <p className="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Tüm İhtiyaçlarınız Tek Platformda
          </p>
          <p className="mt-4 text-xl text-slate-500">
            Tevkilal.com, mesleki dayanışmayı dijital çağa taşıyor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-slate-100">
              <div className="bg-navy-900 p-3 rounded-lg shadow-md mb-5 group-hover:bg-gold-500 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};