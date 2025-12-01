import React, { useState } from 'react';
import { Scale, Instagram, Twitter, Linkedin } from 'lucide-react';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' as React.ReactNode });
  const [logoError, setLogoError] = useState(false);

  const openModal = (type: 'terms' | 'privacy' | 'kvkk' | 'consent') => {
    let title = '';
    let content: React.ReactNode = '';

    switch (type) {
      case 'privacy':
        title = 'Gizlilik Politikası (TevkilAl.com)';
        content = (
          <div className="space-y-4">
            <p className="text-sm text-slate-500">Son Güncelleme: 23.11.2025</p>
            <p>TevkilAl.com olarak, kullanıcılarımızın kişisel verilerinin güvenliği ve gizliliği bizim için büyük önem taşımaktadır. Bu Gizlilik Politikası; uygulama, web sitesi ve tüm hizmetlerimizi kullanırken elde edilen bilgilerin nasıl toplandığını, işlendiğini, korunduğunu ve saklandığını açıklamaktadır.</p>
            
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm">
              <strong>Şirket Bilgileri</strong><br/>
              Öz Ateşler Group İthalat İhracat Sanayi ve Ticaret Limited Şirketi<br/>
              Gülbaharhatun mah. Meydan cad. No:33 P.K.: 60100 MERKEZ / TOKAT<br/>
              Telefon: 0 542 285 77 05 | GSM: 0 552 476 60 35<br/>
              Whatsapp: 0 552 476 60 35 | E-Posta: info@atesler60.com
            </div>

            <h4 className="font-bold text-navy-900 text-lg mt-4">1. Toplanan Kişisel Veriler</h4>
            <p>TevkilAl, avukatların tevkil paylaşımı yapabilmesi amacıyla aşağıdaki verileri işleyebilir:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ad, soyad</li>
              <li>Baro ve sicil numarası</li>
              <li>Telefon numarası</li>
              <li>E-posta adresi</li>
              <li>Şehir / konum bilgisi</li>
              <li>Profil fotoğrafı (opsiyonel)</li>
              <li>Tevkil ilanı bilgileri</li>
              <li>Kullanıcı işlem kayıtları</li>
              <li>Cihaz bilgileri, IP adresi</li>
            </ul>

            <h4 className="font-bold text-navy-900 text-lg mt-4">2. Verilerin İşlenme Amaçları</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Üyelik ve kimlik doğrulama</li>
              <li>Avukatlar arası tevkil ilanlarının yayınlanması</li>
              <li>Tevkil başvurularının eşleşmesi</li>
              <li>Uygulama içi güvenliği sağlama</li>
              <li>Sistem performansının artırılması</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            </ul>

            <h4 className="font-bold text-navy-900 text-lg mt-4">3. Verilerin Aktarılması</h4>
            <p>Veriler yalnızca; yasal zorunluluk halinde, kullanıcının açık onayı ile, tevkil sürecinin yürütülmesi için diğer avukatlara veya teknik altyapı sağlayıcılarına aktarılabilir. <strong>Veriler hiçbir şekilde satılmaz.</strong></p>

            <h4 className="font-bold text-navy-900 text-lg mt-4">4. Çerez Politikası</h4>
            <p>Web sitemiz kullanıcı deneyimini artırmak için zorunlu ve analiz çerezleri kullanabilir.</p>

            <h4 className="font-bold text-navy-900 text-lg mt-4">5. Veri Saklama Süreleri</h4>
            <p>KVKK’ya ve ilgili mevzuata uygun şekilde saklanır, süre dolduğunda silinir.</p>

            <h4 className="font-bold text-navy-900 text-lg mt-4">6. Kullanıcı Hakları (KVKK 11)</h4>
            <p>Kullanıcılar; Kişisel veri işlenip işlenmediğini öğrenme, Düzeltme talep etme, Silinmesini isteme, İşlemeye itiraz etme, Veri taşınabilirliği talep etme haklarına sahiptir.</p>
            
            <p className="mt-4 font-medium">📩 Başvurular: <a href="mailto:info@atesler60.com" className="text-navy-900 underline">info@atesler60.com</a></p>
          </div>
        );
        break;

      case 'terms':
        title = 'Kullanım ve Üyelik Sözleşmesi (TevkilAl.com)';
        content = (
          <div className="space-y-4">
            <p className="text-sm text-slate-500">Son Güncelleme: 23.11.2025</p>
            <p>Bu sözleşme; TevkilAl platformunu kullanan avukatlar ile <strong>Öz Ateşler Group İthalat İhracat Sanayi ve Ticaret Limited Şirketi</strong> arasında düzenlenmiştir.</p>

            <h4 className="font-bold text-navy-900 text-lg mt-4">1. Taraflar</h4>
            <p><strong>“Hizmet Sağlayıcı”:</strong> Öz Ateşler Group İthalat İhracat Sanayi ve Ticaret Limited Şirketi<br/>
            <strong>“Kullanıcı”:</strong> TevkilAl’a kayıt olan her avukat</p>

            <h4 className="font-bold text-navy-900 text-lg mt-4">2. Hizmet Tanımı</h4>
            <p>TevkilAl, avukatların duruşma, keşif, evrak teslimi gibi işlerini diğer avukatlara devredebileceği, ilan oluşturabileceği ve bunlara başvurabileceği bir platformdur.</p>

            <h4 className="font-bold text-navy-900 text-lg mt-4">3. Üyelik Şartları</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Yalnızca ruhsatlı avukatlar üye olabilir.</li>
              <li>Kullanıcı bilgilerini doğru şekilde beyan etmek zorundadır.</li>
              <li>Sahte hesap oluşturulması yasaktır.</li>
            </ul>

            <h4 className="font-bold text-navy-900 text-lg mt-4">4. Kullanıcı Yükümlülükleri</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Platformu hukuka uygun şekilde kullanmak</li>
              <li>Gerçek ve doğru tevkil ilanı oluşturmak</li>
              <li>Diğer avukatlara karşı saygılı davranmak</li>
              <li>Ödeme, kabul ve iş teslim süreçlerini doğru yürütmek</li>
            </ul>

            <h4 className="font-bold text-navy-900 text-lg mt-4">5. Hizmet Sağlayıcının Yetkileri</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Kurallara aykırı davranan kullanıcıyı engelleme</li>
              <li>İlanları inceleme veya kaldırma</li>
              <li>Teknik bakım ve güncellemeleri yapma</li>
            </ul>

            <h4 className="font-bold text-navy-900 text-lg mt-4">6. Ücretlendirme</h4>
            <p>TevkilAl temel kullanım ücreti alabilir veya ücretsiz olabilir. İleride ücretlendirme değişikliği yapılması halinde kullanıcılar bilgilendirilir.</p>

            <h4 className="font-bold text-navy-900 text-lg mt-4">7. Sorumluluk Reddi</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tevkil ilişkisi tamamen avukatlar arasındadır.</li>
              <li>Şirket, kullanıcılar arasındaki hukuki ilişki ve anlaşmazlıklardan sorumlu değildir.</li>
              <li>Platform yalnızca aracılık hizmeti sunar.</li>
            </ul>

            <h4 className="font-bold text-navy-900 text-lg mt-4">8. Fesih</h4>
            <p>Kullanıcı hesabını istediği zaman silebilir. Hizmet sağlayıcı kurallara aykırı davranılması halinde üyeliği sonlandırabilir.</p>
          </div>
        );
        break;

      case 'kvkk':
        title = 'KVKK Aydınlatma Metni (TevkilAl.com)';
        content = (
          <div className="space-y-4">
            <p><strong>Veri Sorumlusu:</strong> Öz Ateşler Group İthalat İhracat Sanayi ve Ticaret Limited Şirketi</p>

            <h4 className="font-bold text-navy-900 text-lg mt-4">1. Veri Sorumlusu Bilgileri</h4>
            <p>Adres: Gülbaharhatun mah. Meydan cad. No:33, 60100 Merkez/Tokat<br/>
            E-posta: info@atesler60.com<br/>
            Telefon: 0542 285 77 05</p>

            <h4 className="font-bold text-navy-900 text-lg mt-4">2. Kişisel Verilerin Hangi Amaçla İşleneceği</h4>
            <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Üyelik ve kimlik doğrulama</li>
              <li>Tevkil ilanı oluşturma ve paylaşma</li>
              <li>Avukatlar arası iletişim sağlama</li>
              <li>Güvenli kullanım ve teknik altyapı sağlama</li>
              <li>Yasal raporlama ve yükümlülükler</li>
            </ul>

            <h4 className="font-bold text-navy-900 text-lg mt-4">3. Toplanan Kişisel Veri Kategorileri</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Kimlik bilgileri</li>
              <li>İletişim bilgileri</li>
              <li>Mesleki bilgiler (baro, sicil no)</li>
              <li>İşlem bilgileri</li>
              <li>Lokasyon bilgisi</li>
              <li>Kullanıcı içerikleri (ilan, mesajlaşma vb.)</li>
            </ul>

            <h4 className="font-bold text-navy-900 text-lg mt-4">4. Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Yargı makamları</li>
              <li>Yetkili kurumlar</li>
              <li>Teknik hizmet sağlayıcılar</li>
              <li>Tevkil sürecinde diğer avukatlar</li>
            </ul>

            <h4 className="font-bold text-navy-900 text-lg mt-4">5. Toplama Yöntemi ve Hukuki Sebebi</h4>
            <p>Veriler; platform üyelik formu, ilan oluşturma ekranı, iletişim araçları ve çerezler aracılığıyla toplanmaktadır. Hukuki dayanaklar: KVKK m.5 ve m.6.</p>

            <h4 className="font-bold text-navy-900 text-lg mt-4">6. Haklarınız</h4>
            <p>KVKK 11. madde kapsamındaki tüm haklarınızı kullanabilirsiniz.</p>
            <p className="mt-2 font-medium">Başvuru: <a href="mailto:info@atesler60.com" className="text-navy-900 underline">info@atesler60.com</a></p>
          </div>
        );
        break;

      case 'consent':
        title = 'Açık Rıza Metni (TevkilAl.com)';
        content = (
          <div className="space-y-4">
            <p className="font-medium">TevkilAl platformunu kullanırken, aşağıdaki kişisel verilerin işlenmesine açık rızam olduğunu kabul ederim:</p>
            <ul className="list-disc pl-5 space-y-3">
              <li>Baro ve sicil numaramın doğrulanması</li>
              <li>Profil bilgilerimin diğer avukatlar tarafından görülebilmesi</li>
              <li>Tevkil ilanı ve başvuru bilgilerimin işlenmesi</li>
              <li>Konum bilgilerimin filtreleme amacıyla kullanılması</li>
              <li>Uygulama içi mesajlaşma kayıtlarının güvenlik için saklanması</li>
            </ul>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-6">
              <p className="font-bold text-navy-900">Açık rıza her zaman geri çekilebilir:</p>
              <p>📩 <a href="mailto:info@atesler60.com" className="text-navy-900 underline">info@atesler60.com</a></p>
            </div>
          </div>
        );
        break;
    }

    setModalContent({ title, content });
    setModalOpen(true);
  };

  return (
    <>
      <footer className="bg-navy-900 text-slate-300 py-12 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                {!logoError ? (
                    <img 
                    src="https://www.tevkilal.com/_assets/v11/785dc8be9b1b19aa2064a1ddc7bdbd557841684c.png" 
                    alt="Logo" 
                    className="h-8 w-8 rounded mr-2 object-cover"
                    onError={() => setLogoError(true)}
                    />
                ) : (
                    <Scale className="h-6 w-6 text-gold-500 mr-2" />
                )}
                <span className="font-bold text-xl text-white">Tevkil<span className="text-gold-500">al</span></span>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Avukatlar arası güvenilir yardımlaşma, tevkil paylaşımı ve iletişim platformu.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gold-500 transition-colors"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="hover:text-gold-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="hover:text-gold-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Hızlı Erişim</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gold-500 transition-colors">Ana Sayfa</a></li>
                <li><a href="#features" className="hover:text-gold-500 transition-colors">Özellikler</a></li>
                <li><a href="#how-it-works" className="hover:text-gold-500 transition-colors">Nasıl Çalışır?</a></li>
                <li><a href="#ai-demo" className="hover:text-gold-500 transition-colors">Yapay Zeka Asistanı</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Hukuki</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => openModal('terms')} className="hover:text-gold-500 transition-colors text-left">
                    Kullanım ve Üyelik Sözleşmesi
                  </button>
                </li>
                <li>
                  <button onClick={() => openModal('privacy')} className="hover:text-gold-500 transition-colors text-left">
                    Gizlilik Politikası
                  </button>
                </li>
                <li>
                  <button onClick={() => openModal('kvkk')} className="hover:text-gold-500 transition-colors text-left">
                    KVKK Aydınlatma Metni
                  </button>
                </li>
                <li>
                  <button onClick={() => openModal('consent')} className="hover:text-gold-500 transition-colors text-left">
                    Açık Rıza Metni
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Uygulamayı İndir</h3>
              <p className="text-sm text-slate-400 mb-4">Çok yakında iOS ve Android marketlerde.</p>
              <div className="flex flex-col space-y-2">
                 <button className="bg-navy-800 hover:bg-navy-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center border border-navy-700">
                   App Store'dan İndir
                 </button>
                 <button className="bg-navy-800 hover:bg-navy-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center border border-navy-700">
                   Google Play'den İndir
                 </button>
              </div>
            </div>

          </div>
          
          <div className="border-t border-navy-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Tevkilal.com - Öz Ateşler Group. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

      <LegalModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title={modalContent.title} 
        content={modalContent.content}
      />
    </>
  );
};