import React from 'react';
import { FileCheck, Calendar, Clock, GraduationCap, MapPin, Send, CheckSquare2, BellRing, UserCheck, ArrowRight } from 'lucide-react';

interface RegistrationSectionProps {
  onOpenRegister: () => void;
}

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({ onOpenRegister }) => {
  const requirements = [
    "Muslimah & Sehat Jasmani Rohani",
    "Fotocopy Akta Kelahiran (1 lembar)",
    "Fotocopy Kartu Keluarga (1 lembar)",
    "Pasfoto warna ukuran 3x4 (3 lembar)",
    "Fotocopy Raport 2 tahun terakhir (1 rangkap)",
  ];

  const steps = [
    {
      step: 1,
      title: "Offline",
      desc: "Pendaftar datang langsung ke pondok membawa berkas.",
      icon: MapPin,
      badge: "Kunjungan Langsung",
    },
    {
      step: 2,
      title: "Online",
      desc: "Mengirim berkas pendaftaran via WhatsApp Admin.",
      icon: Send,
      badge: "WhatsApp Admin",
    },
    {
      step: 3,
      title: "Seleksi",
      desc: "Mengikuti tes seleksi (Offline / Online).",
      icon: CheckSquare2,
      badge: "Uji Kemampuan",
    },
    {
      step: 4,
      title: "Pengumuman",
      desc: "Diumumkan 2 hari setelah tes.",
      icon: BellRing,
      badge: "H+2 Hasil Tes",
    },
    {
      step: 5,
      title: "Daftar Ulang",
      desc: "Konfirmasi dan pembayaran biaya masuk.",
      icon: UserCheck,
      badge: "Resmi Diterima",
    },
  ];

  return (
    <section id="informasi-pendaftaran" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FAF6F0]">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B38F23] bg-[#D4AF37]/15 px-3.5 py-1 rounded-full border border-[#D4AF37]/40 inline-block mb-3">
            Syarat, Waktu &amp; Alur
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-[#72101E]">
            INFORMASI PENDAFTARAN
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Panduan lengkap persyaratan dokumen, jadwal operasional pelayanan, serta 5 langkah mudah alur penerimaan santriwati.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* KOLOM KIRI: SYARAT & WAKTU (5 / 12) */}
          <div className="lg:col-span-5 space-y-8">
            {/* SYARAT PENDAFTARAN CARD */}
            <div className="bg-white rounded-2xl shadow-md border border-[#E8DFD0] overflow-hidden">
              {/* Ribbon Header */}
              <div className="relative bg-gradient-to-r from-[#72101E] to-[#560B15] text-white px-5 py-3.5 border-b-4 border-[#D4AF37] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-black text-base sm:text-lg uppercase tracking-wider text-white">
                    SYARAT PENDAFTARAN
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#F3E5AB] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/50">
                  Dokumen
                </span>
              </div>

              {/* Requirement Items with Vector Icons */}
              <div className="p-6">
                <ul className="space-y-3.5">
                  {requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#72101E]/10 border border-[#D4AF37] text-[#72101E] flex items-center justify-center mt-0.5">
                        <CheckSquare2 className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-sm text-gray-700 leading-snug">
                        {req}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* WAKTU PENDAFTARAN CARD */}
            <div className="bg-white rounded-2xl shadow-md border border-[#E8DFD0] overflow-hidden">
              {/* Ribbon Header */}
              <div className="relative bg-gradient-to-r from-[#72101E] to-[#560B15] text-white px-5 py-3.5 border-b-4 border-[#D4AF37] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-black text-base sm:text-lg uppercase tracking-wider text-white">
                    WAKTU PENDAFTARAN
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#F3E5AB] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/50">
                  Jadwal Resmi
                </span>
              </div>

              {/* Content Waktu */}
              <div className="p-5 space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3 bg-[#FAF6F0] rounded-xl border border-[#E8DFD0]">
                  <Calendar className="w-5 h-5 text-[#72101E] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#72101E] uppercase text-xs">Mulai Pendaftaran:</div>
                    <div className="text-gray-800 font-semibold text-sm">1 September 2026</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#FAF6F0] rounded-xl border border-[#E8DFD0]">
                  <Clock className="w-5 h-5 text-[#72101E] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#72101E] uppercase text-xs">Waktu Pelayanan:</div>
                    <div className="text-gray-800 font-semibold text-sm">Pukul 08.00 - 15.00 WIB</div>
                    <div className="text-gray-500 text-[11px]">(Setiap hari, kecuali Jumat)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#FAF6F0] rounded-xl border border-[#E8DFD0]">
                  <GraduationCap className="w-5 h-5 text-[#72101E] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#72101E] uppercase text-xs">Mulai Belajar (KBM):</div>
                    <div className="text-[#72101E] font-bold text-sm">Juli 2027</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: ALUR PENDAFTARAN (7 / 12) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-md border border-[#E8DFD0] overflow-hidden h-full flex flex-col">
              {/* Ribbon Header */}
              <div className="relative bg-gradient-to-r from-[#72101E] to-[#560B15] text-white px-6 py-4 border-b-4 border-[#D4AF37] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-black text-lg sm:text-xl uppercase tracking-wider text-white">
                    ALUR PENDAFTARAN
                  </h3>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#F3E5AB] px-3 py-0.5 rounded-full border border-[#D4AF37]/50">
                  5 Tahapan
                </span>
              </div>

              {/* Timeline Steps */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                {steps.map((item) => {
                  const StepIcon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="group flex items-start gap-4 p-4 rounded-xl bg-[#FAF6F0] hover:bg-[#FAF0E0]/80 border-l-4 border-l-[#72101E] hover:border-l-[#D4AF37] border-y border-r border-[#E8DFD0] transition-all"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#72101E] border-2 border-[#D4AF37] text-white flex items-center justify-center font-heading font-extrabold text-sm shadow-sm group-hover:scale-105 transition-transform">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="font-heading font-bold text-base text-[#72101E]">
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-gray-700 px-2 py-0.5 rounded border border-[#E8DFD0]">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Callout Action */}
                <div className="pt-2">
                  <button
                    onClick={onOpenRegister}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#72101E] hover:bg-[#8E1627] text-white font-heading font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 border border-[#D4AF37] shadow-md transition-all cursor-pointer"
                  >
                    <span>Mulai Pendaftaran Online Sekarang</span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
