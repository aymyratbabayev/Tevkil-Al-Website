import React, { useState } from 'react';
import { FilePlus, LayoutDashboard, Users, UserCircle } from 'lucide-react';

interface ShowcaseTab {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export const AppShowcase: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('create');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  const tabs: ShowcaseTab[] = [
    {
      id: 'create',
      title: 'Tevkil Oluştur',
      description: 'Detaylı form yapısı ile adliye, tarih, ücret ve işlem detaylarını saniyeler içinde girin.',
      icon: <FilePlus className="w-5 h-5" />,
      image: 'https://i.wpfc.ml/v2/0iccbn.jpg'
    },
    {
      id: 'my_tevkils',
      title: 'Tevkillerim',
      description: 'Başvurularınızı ve ilanlarınızı tek bir listede, durum çubukları ve detaylarla görüntüleyin.',
      icon: <LayoutDashboard className="w-5 h-5" />,
      image: 'https://i.wpfc.ml/v2/0icbw5.jpg'
    },
    {
      id: 'qa',
      title: 'Meslektaşa Sor',
      description: 'Hukuki sorularınızı meslektaşlarınıza danışın, bilgi paylaşım ağına katılın.',
      icon: <Users className="w-5 h-5" />,
      image: 'https://i.wpfc.ml/v2/0icc56.jpg'
    },
    {
      id: 'profile',
      title: 'Profil Yönetimi',
      description: 'Uzmanlık alanlarınız, iletişim bilgileriniz ve doluluk oranınızla profesyonel vitrininizi oluşturun.',
      icon: <UserCircle className="w-5 h-5" />,
      image: 'https://i.wpfc.ml/v2/0iccex.jpg'
    }
  ];

  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];
  const isError = imgErrors[activeTab.id];

  return (
    <section className="py-20 bg-navy-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-gold-500 tracking-wide uppercase">Platform Turu</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Arayüzü Keşfedin
          </p>
          <p className="mt-4 text-xl text-slate-300">
            Karmaşık süreçleri sadeleştiren, kullanıcı dostu ve modern arayüzümüzü yakından inceleyin.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Tabs Navigation (Left Side) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`text-left p-4 rounded-xl transition-all duration-300 border flex items-start group ${
                  activeTabId === tab.id
                    ? 'bg-white/10 border-gold-500 shadow-lg'
                    : 'bg-transparent border-transparent hover:bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <div className={`p-2 rounded-lg mr-4 mt-1 ${activeTabId === tab.id ? 'bg-gold-500 text-white' : 'bg-navy-800 text-slate-400 group-hover:text-white'}`}>
                  {tab.icon}
                </div>
                <div>
                  <h3 className={`font-bold text-lg ${activeTabId === tab.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {tab.title}
                  </h3>
                  <p className={`text-sm mt-1 leading-relaxed ${activeTabId === tab.id ? 'text-slate-200' : 'text-slate-500'}`}>
                    {tab.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Image Showcase (Right Side) */}
          <div className="lg:col-span-8 relative">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gold-500/20 blur-2xl rounded-full opacity-50"></div>
            
            <div className="relative bg-slate-800 rounded-xl border border-slate-700 shadow-2xl overflow-hidden transform transition-all duration-500">
              {/* Browser Header */}
              <div className="bg-navy-950 px-4 py-3 flex items-center space-x-2 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 bg-navy-800 px-3 py-1 rounded-md text-xs text-slate-400 flex-1 flex justify-between items-center font-mono">
                  <span>tevkilal.com/app/{activeTab.id}</span>
                  <div className="w-4 h-4 rounded-full border border-slate-500"></div>
                </div>
              </div>

              {/* Image Content */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden group">
                {!isError ? (
                  <img
                    key={activeTab.image}
                    src={activeTab.image}
                    alt={activeTab.title}
                    className="w-full h-full object-cover object-top animate-fade-in shadow-inner"
                    onError={() => handleImageError(activeTab.id)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full bg-slate-800 text-slate-400 p-8 text-center">
                    <p className="font-bold text-white mb-2">Görsel Yüklenemedi</p>
                    <p className="text-sm">Lütfen internet bağlantınızı kontrol edin.</p>
                  </div>
                )}
                
                {/* Hover Overlay */}
                {!isError && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none"></div>
                )}
              </div>
            </div>
            
            {/* Caption */}
            <div className="mt-4 flex justify-end text-sm text-slate-400 italic">
              * Arayüz tasarımı
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};