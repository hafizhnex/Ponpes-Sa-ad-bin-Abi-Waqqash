import React, { useState } from 'react';
import { Phone, Calendar, Sparkles, Menu, X } from 'lucide-react';

interface HeaderNavProps {
  onOpenRegister: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD0]">
      {/* Top Banner Bar */}
      <div className="bg-[#580A15] text-white text-xs sm:text-sm py-2 px-4 border-b-2 border-[#D4AF37]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-[#D4AF37]/20 border border-[#D4AF37] text-[#F3E5AB] px-2.5 py-0.5 rounded-full font-semibold text-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              PSB TP 2027/2028 Khusus Putri
            </span>
            <span className="hidden md:inline text-neutral-300">|</span>
            <span className="hidden md:flex items-center gap-1 text-neutral-200">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Mulai Pendaftaran: 1 September 2026
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/6282152343540?text=Assalamu'alaikum%20Admin%20PSB%20Ponpes%20Putri%20Sa'ad%20bin%20Abi%20Waqqas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>WhatsApp Admin: <strong>0821-5234-3540</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#72101E] to-[#45070F] border-2 border-[#D4AF37] flex items-center justify-center text-amber-300 shadow-md group-hover:scale-105 transition-transform">
            <span className="text-xl">🕌</span>
          </div>
          <div>
            <div className="font-heading font-extrabold text-[#72101E] text-sm sm:text-base leading-tight tracking-wide">
              PONPES SA'AD BIN ABI WAQQAS
            </div>
            <div className="text-[11px] sm:text-xs text-[#B38F23] font-semibold tracking-wider uppercase">
              Tahfidz Takhossus Putri
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <a href="#tentang-kami" className="text-sm font-semibold text-gray-700 hover:text-[#72101E] transition-colors">
            Tentang Kami
          </a>
          <a href="#program-fasilitas" className="text-sm font-semibold text-gray-700 hover:text-[#72101E] transition-colors">
            Program & Fasilitas
          </a>
          <a href="#dokumentasi-foto" className="text-sm font-semibold text-gray-700 hover:text-[#72101E] transition-colors flex items-center gap-1">
            <span>Galeri Foto</span>
            <span className="text-[10px] bg-[#72101E] text-[#F3E5AB] px-1.5 py-0.2 rounded font-bold">Baru</span>
          </a>
          <a href="#informasi-pendaftaran" className="text-sm font-semibold text-gray-700 hover:text-[#72101E] transition-colors">
            Pendaftaran
          </a>
          <a href="#biaya-beasiswa" className="text-sm font-semibold text-gray-700 hover:text-[#72101E] transition-colors">
            Biaya & Beasiswa
          </a>
          <a href="#kontak-lokasi" className="text-sm font-semibold text-gray-700 hover:text-[#72101E] transition-colors">
            Kontak
          </a>

          <button
            onClick={onOpenRegister}
            className="inline-flex items-center justify-center gap-2 bg-[#72101E] hover:bg-[#8E1627] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border border-[#D4AF37] shadow-sm hover:shadow-md hover:shadow-[#D4AF37]/20 transition-all cursor-pointer"
          >
            Daftar Sekarang
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenRegister}
            className="bg-[#72101E] text-white text-xs font-bold px-3 py-1.5 rounded-full border border-[#D4AF37]"
          >
            Daftar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-[#72101E]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8DFD0] px-4 py-4 space-y-3 shadow-lg">
          <a
            href="#tentang-kami"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-gray-700 hover:text-[#72101E] py-1"
          >
            Tentang Kami
          </a>
          <a
            href="#program-fasilitas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-gray-700 hover:text-[#72101E] py-1"
          >
            Program & Fasilitas
          </a>
          <a
            href="#dokumentasi-foto"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-gray-700 hover:text-[#72101E] py-1"
          >
            Galeri & Kolom Foto
          </a>
          <a
            href="#informasi-pendaftaran"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-gray-700 hover:text-[#72101E] py-1"
          >
            Pendaftaran & Alur
          </a>
          <a
            href="#biaya-beasiswa"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-gray-700 hover:text-[#72101E] py-1"
          >
            Biaya & Beasiswa
          </a>
          <a
            href="#kontak-lokasi"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-gray-700 hover:text-[#72101E] py-1"
          >
            Kontak & Rekening
          </a>
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full bg-[#72101E] text-white text-center py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs border border-[#D4AF37]"
            >
              Ayo! Daftarkan Diri Sekarang!
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
