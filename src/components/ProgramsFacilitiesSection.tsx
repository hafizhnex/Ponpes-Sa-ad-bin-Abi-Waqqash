import React from 'react';
import { BookOpen, Languages, ScrollText, Users, Building, School, Utensils, Video, Sparkles, ShieldCheck } from 'lucide-react';

export const ProgramsFacilitiesSection: React.FC = () => {
  const programs = [
    {
      title: "Hafalan Al-Qur'an (Tahfidz)",
      desc: "Target Hafalan Hingga 30 Juz dengan bimbingan ustadzah bersanad dan metode mutqin.",
      icon: BookOpen,
      badge: "Target 30 Juz",
    },
    {
      title: "Penguasaan Bahasa Arab & Inggris",
      desc: "Penerapan bahasa aktif harian (Lisan & Tulisan) dalam lingkungan asrama yang kondusif.",
      icon: Languages,
      badge: "Bilingual Aktif",
    },
    {
      title: "Kajian Kitab Kuning / Turats",
      desc: "Pendalaman kaidah fiqih, aqidah, akhlaq, tajwid, dan nahwu-sharaf warisan para ulama.",
      icon: ScrollText,
      badge: "Pemahaman Salaf",
    },
    {
      title: "Program Kemandirian & Leadership",
      desc: "Pembentukan karakter muslimah tangguh, disiplin, berjiwa kepemimpinan, dan mandiri.",
      icon: Users,
      badge: "Karakter Unggul",
    },
  ];

  const facilities = [
    {
      title: "Asrama Putri Khusus & Tertutup",
      desc: "Kompleks asrama yang aman, terjaga ketat dengan batas privasi tinggi khusus santriwati.",
      icon: Building,
    },
    {
      title: "Musholla & Ruang Kelas Nyaman",
      desc: "Fasilitas ibadah dan pembelajaran yang sejuk, bersih, representatif, dan tenang.",
      icon: School,
    },
    {
      title: "Ekstrakurikuler Penunjang / Tata Boga",
      desc: "Pengembangan bakat keterampilan hidup, tata boga (cooking/baking), dan seni keputrian.",
      icon: Utensils,
    },
    {
      title: "Pengawasan CCTV 24 Jam",
      desc: "Sistem keamanan kamera pemantau di seluruh sudut area vital untuk keamanan maksimal.",
      icon: Video,
    },
  ];

  return (
    <section id="program-fasilitas" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F5EFE6]">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B38F23] bg-[#D4AF37]/15 px-3.5 py-1 rounded-full border border-[#D4AF37]/40 inline-block mb-3">
            Keunggulan &amp; Sarana
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-[#72101E]">
            PROGRAM &amp; FASILITAS
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Kurikulum terpadu dan fasilitas pendukung terlengkap yang didedikasikan sepenuhnya untuk kenyamanan santriwati putri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* KARTU PROGRAM UNGGULAN */}
          <div className="bg-white rounded-2xl shadow-md border border-[#E8DFD0] overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
            {/* Ribbon Header */}
            <div className="relative bg-gradient-to-r from-[#72101E] to-[#560B15] text-white px-6 py-4 border-b-4 border-[#D4AF37] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-black text-lg sm:text-xl uppercase tracking-wider text-white">
                  PROGRAM UNGGULAN
                </h3>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#F3E5AB] px-3 py-0.5 rounded-full border border-[#D4AF37]/50">
                Pondasi Utama
              </span>
            </div>

            {/* List Program Unggulan dengan Ikon Vektor */}
            <div className="p-6 sm:p-7 flex-1 space-y-5">
              {programs.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-3 rounded-xl bg-[#FAF6F0] hover:bg-[#FAF0E0]/60 border border-[#E8DFD0]/60 transition-colors">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#72101E] text-[#D4AF37] flex items-center justify-center shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                        <h4 className="font-heading font-bold text-sm sm:text-base text-[#72101E]">
                          {item.title}
                        </h4>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#72101E] px-2 py-0.5 rounded-md border border-[#D4AF37]/40">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* KARTU FASILITAS KHUSUS PUTRI */}
          <div className="bg-white rounded-2xl shadow-md border border-[#E8DFD0] overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
            {/* Ribbon Header */}
            <div className="relative bg-gradient-to-r from-[#72101E] to-[#560B15] text-white px-6 py-4 border-b-4 border-[#D4AF37] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-black text-lg sm:text-xl uppercase tracking-wider text-white">
                  FASILITAS KHUSUS PUTRI
                </h3>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#F3E5AB] px-3 py-0.5 rounded-full border border-[#D4AF37]/50">
                Aman &amp; Tertutup
              </span>
            </div>

            {/* List Fasilitas Khusus Putri */}
            <div className="p-6 sm:p-7 flex-1 space-y-5">
              {facilities.map((fac, idx) => {
                const IconComponent = fac.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-3 rounded-xl bg-[#FAF6F0] hover:bg-[#FAF0E0]/60 border border-[#E8DFD0]/60 transition-colors">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#72101E] to-[#560B15] text-[#D4AF37] flex items-center justify-center shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-bold text-sm sm:text-base text-[#72101E] mb-1">
                        {fac.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {fac.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
