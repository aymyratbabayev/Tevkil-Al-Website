import { GoogleGenAI } from "@google/genai";

// Initialize the client using process.env.API_KEY directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a professional Tevkil description based on rough notes.
 * Uses Gemini 2.5 Flash for speed and quality.
 */
export const generateProfessionalDraft = async (userInput: string): Promise<string> => {
  try {
    const prompt = `
      Sen deneyimli bir Türk avukatısın. Meslektaşın sana kaba taslak bir tevkil notu iletiyor.
      Görevin bu notu, "Tevkilal.com" platformunda yayınlanmak üzere profesyonel, net ve hukuki dile uygun bir tevkil ilanı metnine dönüştürmek.
      
      Kullanıcı Notu: "${userInput}"
      
      Lütfen sadece düzenlenmiş metni döndür. Başlık ekleme.
      Metin şu detayları içermeli (eğer notta varsa): Dosya numarası (gizli kalmalıysa belirtme), Mahkeme, Tarih/Saat, Yapılacak İşlem, Ücret Beklentisi.
      Dili saygılı ve profesyonel tut.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
        // maxOutputTokens removed to avoid potential conflicts with thinking budget and token limits
      }
    });

    return response.text || "İçerik oluşturulamadı. Lütfen tekrar deneyin.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Taslak oluşturulurken bir hata meydana geldi.");
  }
};