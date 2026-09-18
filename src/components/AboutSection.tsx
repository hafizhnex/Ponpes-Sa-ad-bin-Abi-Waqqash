import React from 'react';
import { Target, CheckCircle2, Quote, Sparkles, BookOpen } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const missions = [
    "Menyelenggarakan pendidikan berbasis nilai-nilai Islam dan akhlakul karimah.",
    "Membentuk santriwati yang memiliki ilmu pengetahuan dan keterampilan yang komprehensif.",
    "Menciptakan lingkungan belajar yang kondusif, disiplin, dan islami.",
    "Menumbuhkan semangat kemandirian dan tanggung jawab.",
    "Membiasakan pola hidup sehat, bersih, dan berwawasan lingkungan."
  ];

  return (
    <section id="tentang-kami" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FAF6F0]">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B38F23] bg-[#D4AF37]/15 px-3.5 py-1 rounded-full border border-[#D4AF37]/40 inline-block mb-3">
            Profil Pesantren
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-[#72101E]">
            TENTANG KAMI
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Membangun generasi muslimah penghafal Al-Qur'an dengan kepribadian mandiri, berkarakter, dan siap menghadapi tantangan zaman.
          </p>
        </div>

        {/* MOTTO KOTAK / BANNER */}
        <div className="relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-md shadow-[#72101E]/5 mb-10 overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-[#D4AF37]/15">
            <Quote className="w-32 h-32" />
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#72101E] text-[#F3E5AB] px-4 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-widest mb-3 border border-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              MOTTO PONDOK PESANTREN
            </div>
            <p className="font-heading font-bold text-lg sm:text-xl lg:text-2xl text-[#2B2D42] italic leading-relaxed">
              "Pemantapan aqidah, penghafalan Al-Qur'an, penguasaan bahasa Arab &amp; Inggris, serta pemahaman kitab-kitab keislaman."
            </p>
          </div>
        </div>

        {/* VISI & MISI: CARD-BASED UI DENGAN RIBBON DESIGN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* VISI CARD */}
          <div className="bg-white rounded-2xl shadow-md border border-[#E8DFD0] overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
            {/* Ribbon Header */}
            <div className="relative bg-gradient-to-r from-[#72101E] to-[#560B15] text-white px-6 py-4 border-b-4 border-[#D4AF37] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-black text-lg sm:text-xl uppercase tracking-wider text-white">
                  VISI
                </h3>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#F3E5AB] px-3 py-0.5 rounded-full border border-[#D4AF37]/50">
                Arah Tujuan
              </span>
            </div>

            {/* Visi Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
              <div className="bg-[#FAF6F0] p-6 rounded-xl border-l-4 border-[#72101E] text-gray-800">
                <p className="text-base sm:text-lg font-medium leading-relaxed italic text-[#2B2D42]">
                  "Pondok Pesantren Sa'ad bin Abi Waqqas sebagai pusat kaderisasi generasi muslimah yang beriman, berilmu, berakhlak mulia, dan bermanfaat bagi umat."
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 text-xs text-gray-500">
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span>Pondasi Kokoh Berbasis Al-Qur'an dan As-Sunnah</span>
              </div>
            </div>
          </div>

          {/* MISI CARD */}
          <div className="bg-white rounded-2xl shadow-md border border-[#E8DFD0] overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
            {/* Ribbon Header */}
            <div className="relative bg-gradient-to-r from-[#72101E] to-[#560B15] text-white px-6 py-4 border-b-4 border-[#D4AF37] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-black text-lg sm:text-xl uppercase tracking-wider text-white">
                  MISI
                </h3>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#F3E5AB] px-3 py-0.5 rounded-full border border-[#D4AF37]/50">
                5 Pilar Utama
              </span>
            </div>

            {/* Misi Content */}
            <div className="p-6 sm:p-8 flex-1">
              <ul className="space-y-3.5">
                {missions.map((misi, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#72101E]/10 border border-[#D4AF37] text-[#72101E] flex items-center justify-center font-heading font-bold text-xs mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-sm sm:text-base text-gray-700 leading-snug">
                      {misi}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
