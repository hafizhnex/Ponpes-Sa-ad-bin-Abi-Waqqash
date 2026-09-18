import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProgramsFacilitiesSection } from './components/ProgramsFacilitiesSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { RegistrationSection } from './components/RegistrationSection';
import { TuitionSection } from './components/TuitionSection';
import { FooterSection } from './components/FooterSection';
import { RegistrationModal } from './components/RegistrationModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2B2D42] selection:bg-[#72101E] selection:text-white flex flex-col font-sans">
      {/* 0. Topbar & Header Navigation */}
      <HeaderNav 
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Bagian Hero (Atas) */}
        <HeroSection onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 2. Bagian Tentang Kami (Motto, Visi & Misi) */}
        <AboutSection />

        {/* 3. Bagian Program & Fasilitas */}
        <ProgramsFacilitiesSection />

        {/* 3.1 Bagian Kolom Foto Dokumentasi & Fasilitas */}
        <PhotoGallerySection />

        {/* 4. Bagian Informasi Pendaftaran (Syarat, Waktu & Alur) */}
        <RegistrationSection onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* 5. Bagian Biaya & Beasiswa */}
        <TuitionSection />
      </main>

      {/* 6. Bagian Footer (Kontak & Pembayaran) */}
      <FooterSection />

      {/* Floating Buttons: WhatsApp Hotline */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        <a
          href="https://wa.me/6282152343540?text=Assalamu'alaikum%20Admin%20PSB%20Ponpes%20Putri%20Sa'ad%20bin%20Abi%20Waqqas"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl border-2 border-white transition-all hover:scale-110 active:scale-95 group"
          title="Hubungi Admin WhatsApp Putri"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="sr-only">WhatsApp Hotline</span>
        </a>
      </div>

      {/* Registration Modal Dialog */}
      <RegistrationModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
    </div>
  );
}
