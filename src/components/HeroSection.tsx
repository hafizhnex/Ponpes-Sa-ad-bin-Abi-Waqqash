import React from 'react';
import { Award, BookOpen, CheckCircle, ArrowRight, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';

interface HeroSectionProps {
  onOpenRegister: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#580A15] via-[#72101E] to-[#45070F] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 border-b-4 border-[#D4AF37] overflow-hidden">
      {/* Decorative Islamic Geometric Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1.5px, transparent 1.5px)`,
          backgroundSize: '28px 28px'
        }}
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Nama Institusi */}
        <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-[#D4AF37]/60 text-[#F3E5AB] px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 shadow-inner">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Pondok Pesantren Tahfidz Takhossus Putri Sa'ad bin Abi Waqqas</span>
        </div>

        {/* Judul Utama */}
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white mb-4 leading-tight drop-shadow-md">
          PSB - Penerimaan Santriwati Baru <br />
          <span className="text-[#D4AF37] inline-block mt-1 sm:mt-2">
            Tahun Pelajaran 2027/2028
          </span>
        </h1>

        {/* Sub-judul */}
        <p className="text-lg sm:text-2xl font-semibold text-[#FAF6F0] mb-8 tracking-wide font-sans">
          Tingkat Wustha / Ulya <span className="text-[#F3E5AB] font-bold">(Khusus Putri)</span>
        </p>

        {/* Lencana / Badge: Hafalan Al-Qur'an 30 Juz */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#D4AF37]/25 to-[#D4AF37]/10 border-2 border-[#D4AF37] text-white px-5 py-2.5 rounded-full font-heading font-bold text-sm sm:text-base shadow-lg shadow-black/20">
            <Award className="w-5 h-5 text-[#D4AF37]" />
            <span>Hafalan Al-Qur'an 30 Juz</span>
          </div>

          <div className="inline-flex items-center gap-2.5 bg-black/20 border border-[#D4AF37]/40 text-[#FAF6F0] px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold">
            <BookOpen className="w-4 h-4 text-[#D4AF37]" />
            <span>Kajian Kitab Turats & Bahasa Asing</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-black/20 border border-[#D4AF37]/40 text-[#FAF6F0] px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Asrama Putri Tertutup & Nyaman</span>
          </div>
        </div>

        {/* Tombol CTA Utama */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#B8860B] text-[#3B050B] font-heading font-black text-base sm:text-lg uppercase tracking-wider px-8 py-4 rounded-full border-2 border-[#FFF8DC] shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/40 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Ayo! Daftarkan Diri Sekarang! (Kuota Terbatas)</span>
            <ArrowRight className="w-5 h-5 text-[#3B050B]" />
          </button>

          <a
            href="https://wa.me/6282152343540?text=Assalamu'alaikum%20Admin%20PSB%20Ponpes%20Putri%20Sa'ad%20bin%20Abi%20Waqqas,%20saya%20ingin%20konsultasi%20pendaftaran%20santriwati%20baru."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full border border-white/30 backdrop-blur-sm transition-all"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span>Chat WhatsApp Admin</span>
          </a>
        </div>

        {/* Highlight Banner / Quick Notice */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#F3E5AB] bg-black/25 px-4 py-1.5 rounded-full border border-[#D4AF37]/30">
          <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
          <span>Biaya Pendaftaran: <strong className="text-white">GRATIS</strong> | Pendaftaran Dibuka Mulai: <strong className="text-white">1 September 2026</strong></span>
        </div>
      </div>
    </section>
  );
};
