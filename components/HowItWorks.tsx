import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Üye Ol ve Profilini Oluştur",
      description: "Baro sicil numaran ile kaydını tamamla. Uzmanlık alanlarını, bağlı olduğun baroyu ve 'Profilim' sayfasındaki detayları doldurarak güven ver."
    },
    {
      number: "02",
      title: "İlan Ver veya Başvur",
      description: "Tevkil ihtiyacın için detaylı bir form oluştur veya bulunduğun adliyedeki iş fırsatlarına tek tıkla başvuruda bulun."
    },
    {
      number: "03",
      title: "İşbirliğini Başlat",
      description: "Meslektaşınla platform üzerinden anlaş, ücret detaylarını netleştir ve güvenli iletişim kanalları üzerinden süreci yönet."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-gold-500 tracking-wide uppercase">Süreç</h2>
          <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">Nasıl Çalışır?</h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Tevkilal.com karmaşık süreçleri ortadan kaldırır. Sadece 3 adımda profesyonel ağınızı genişletin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Desktop Connector Line */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              
              <div className="w-16 h-16 bg-white border-2 border-gold-500 rounded-full flex items-center justify-center text-xl font-bold text-navy-900 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                {step.number}
              </div>
              
              <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-500 transition-colors">
                {step.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};