import React, { useState } from 'react';
import { Camera, Sparkles, Filter, Info, Upload } from 'lucide-react';
import { PhotoCardSlot } from './PhotoCardSlot';
import { ActivityPhoto } from '../types';

export const PhotoGallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Semua');

  // Foto-foto yang disesuaikan persis dengan copy kurikulum, program, dan fasilitas pondok
  const photosData: ActivityPhoto[] = [
    {
      id: 'foto-tahfidz',
      title: "Halaqah Tahfidz & Muroja'ah Qur'an",
      category: 'Program Unggulan',
      tag: 'Target 30 Juz',
      caption: 'Kegiatan setoran ziyadah hafalan dan muroja\'ah santriwati bersama ustadzah pembimbing tahfidz bersanad.',
      suggestedDimensions: '1200 x 900 px',
      aspectRatio: '4:3',
      defaultSrc: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'foto-bahasa',
      title: 'Muhadatsah & Pembiasaan Bahasa Asing',
      category: 'Program Unggulan',
      tag: 'Bilingual Aktif',
      caption: 'Latihan percakapan aktif harian bahasa Arab dan bahasa Inggris santriwati dalam lingkungan asrama.',
      suggestedDimensions: '1200 x 900 px',
      aspectRatio: '4:3',
      defaultSrc: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'foto-turats',
      title: 'Kajian Kitab Kuning / Turats Ulama',
      category: 'Program Unggulan',
      tag: 'Pemahaman Salaf',
      caption: 'Pendalaman kaidah fiqih, aqidah, akhlaq, tajwid, dan nahwu-sharaf warisan para ulama salafush shalih.',
      suggestedDimensions: '1200 x 900 px',
      aspectRatio: '4:3',
      defaultSrc: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'foto-asrama',
      title: 'Gedung Asrama Putri Khusus & Tertutup',
      category: 'Fasilitas Pondok',
      tag: 'Aman & Tertutup',
      caption: 'Kompleks hunian asrama putri yang tenang, asri, dengan tingkat privasi tinggi dan batas penjagaan ketat.',
      suggestedDimensions: '1200 x 900 px',
      aspectRatio: '4:3',
      defaultSrc: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'foto-musholla',
      title: 'Musholla & Ruang Belajar Nyaman',
      category: 'Fasilitas Pondok',
      tag: 'Representatif',
      caption: 'Ruang ibadah sholat berjamaah, dzikir pagi-petang, serta ruang kelas pembelajaran yang sejuk dan bersih.',
      suggestedDimensions: '1200 x 900 px',
      aspectRatio: '4:3',
      defaultSrc: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'foto-tataboga',
      title: 'Ekstrakurikuler Tata Boga & Kemandirian',
      category: 'Fasilitas & Karakter',
      tag: 'Keterampilan Hidup',
      caption: 'Pelatihan seni keputrian, keterampilan tata boga (cooking/baking), serta pembentukan karakter muslimah mandiri.',
      suggestedDimensions: '1200 x 900 px',
      aspectRatio: '4:3',
      defaultSrc: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filterOptions = ['Semua', 'Program Unggulan', 'Fasilitas Pondok', 'Fasilitas & Karakter'];

  const filteredPhotos = selectedFilter === 'Semua' 
    ? photosData 
    : photosData.filter(p => p.category === selectedFilter);

  return (
    <section id="dokumentasi-foto" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FAF6F0] border-t border-[#E8DFD0]">
      <div className="max-w-6xl mx-auto">
        {/* Header Bagian */}
        <div className="text-center mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B38F23] bg-[#D4AF37]/15 px-3.5 py-1 rounded-full border border-[#D4AF37]/40 inline-block mb-3">
            Dokumentasi &amp; Galeri Aktivitas
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-[#72101E]">
            DOKUMENTASI FOTO KEGIATAN &amp; FASILITAS
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Kolom foto terstruktur yang telah disesuaikan dengan kurikulum program unggulan, kegiatan tahfidz, dan sarana pondok putri.
          </p>
        </div>

        {/* Informasi Petunjuk / Notice Pengisian Foto */}
        <div className="bg-white rounded-xl p-4 border border-[#D4AF37]/40 shadow-sm max-w-3xl mx-auto mb-8 flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-[#72101E]/10 border border-[#D4AF37] flex items-center justify-center text-[#72101E] flex-shrink-0 mt-0.5">
            <Camera className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            <span className="font-heading font-bold text-[#72101E] block mb-0.5">
              Siap Dimasukkan Foto Resmi Pondok:
            </span>
            Setiap kolom foto telah dilengkapi judul, kategori, dan deskripsi yang sesuai materi profil. Anda dapat mengklik tombol <strong>"Unggah / Ganti Foto"</strong> pada masing-masing kartu untuk memasukkan arsip foto dokumentasi asli dari perangkat Anda.
          </div>
        </div>

        {/* Filter Tombol Kategori */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <div className="flex items-center gap-1 text-xs font-bold text-gray-500 mr-1">
            <Filter className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Kategori:</span>
          </div>
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-[#72101E] text-[#F3E5AB] border border-[#D4AF37] shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-[#FAF6F0] border border-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid Kolom Foto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <PhotoCardSlot key={photo.id} photo={photo} />
          ))}
        </div>

        {/* Info Tambahan Footer Galeri */}
        <div className="mt-10 text-center text-xs text-gray-500">
          Setiap kolom foto dapat disesuaikan kembali dengan arsip kegiatan terbaru santriwati TP 2027/2028.
        </div>
      </div>
    </section>
  );
};
