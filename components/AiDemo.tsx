import React, { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';
import { Button } from './Button';
import { generateProfessionalDraft } from '../services/geminiService';
import { LoadingState } from '../types';

export const AiDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    
    setStatus(LoadingState.LOADING);
    try {
      const result = await generateProfessionalDraft(input);
      setOutput(result);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      setStatus(LoadingState.ERROR);
      setOutput("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-demo" className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-gold-400 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Gemini 2.5 Flash Destekli
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Yapay Zeka Asistanı ile <br />
              <span className="text-gold-500">Profesyonel İlanlar Oluşturun</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Aceleniz mi var? Kısaca not alın, yapay zeka asistanımız sizin için saniyeler içinde profesyonel, eksiksiz ve anlaşılır bir tevkil ilanı metni hazırlasın.
            </p>
            
            <div className="bg-navy-800/50 rounded-xl p-6 border border-navy-700">
              <h4 className="text-white font-semibold mb-2">Örnek Kullanım:</h4>
              <p className="text-slate-400 text-sm italic">
                "Yarın saat 10'da İstanbul Çağlayan'da 12. Aile Mahkemesi boşanma davası duruşması var, mazeret verilecek."
              </p>
            </div>
          </div>

          {/* Right Interactive Demo */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl shadow-black/20">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Hızlı Notunuzu Girin
                </label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Örn: Ankara Batı Adliyesi, yarın öğleden sonra dosya fotokopisi lazım..."
                  className="w-full h-24 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-navy-900 focus:border-navy-900 resize-none text-slate-800 placeholder-slate-400"
                />
              </div>
              
              <Button 
                onClick={handleGenerate} 
                disabled={!input.trim() || status === LoadingState.LOADING}
                fullWidth
                className="bg-gradient-to-r from-navy-900 to-navy-800"
                isLoading={status === LoadingState.LOADING}
              >
                {status === LoadingState.LOADING ? 'Oluşturuluyor...' : 'Profesyonel Metne Dönüştür'}
              </Button>

              {output && (
                <div className="mt-6 animate-fade-in">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Oluşturulan İlan Metni
                    </label>
                    <button 
                      onClick={handleCopy}
                      className="text-xs flex items-center text-navy-600 hover:text-navy-900 font-medium transition-colors"
                    >
                      {copied ? <Check className="h-3 w-3 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
                      {copied ? 'Kopyalandı' : 'Kopyala'}
                    </button>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-slate-800 text-sm leading-relaxed whitespace-pre-line">
                    {output}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};