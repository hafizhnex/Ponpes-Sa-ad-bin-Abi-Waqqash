import React, { useState, useRef } from 'react';
import { Camera, Image as ImageIcon, Upload, Eye, Check, X, RefreshCw, Sparkles, AlertCircle } from 'lucide-react';
import { ActivityPhoto } from '../types';

interface PhotoCardSlotProps {
  photo: ActivityPhoto;
  onCustomImageUploaded?: (id: string, dataUrl: string) => void;
}

export const PhotoCardSlot: React.FC<PhotoCardSlotProps> = ({ photo, onCustomImageUploaded }) => {
  const [currentImage, setCurrentImage] = useState<string | null>(photo.defaultSrc || null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCurrentImage(result);
        if (onCustomImageUploaded) {
          onCustomImageUploaded(photo.id, result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage(photo.defaultSrc || null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <div 
        id={`photo-card-${photo.id}`}
        className="group relative bg-white rounded-2xl border-2 border-[#E8DFD0] hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
      >
        {/* Slot / Frame Foto */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-[#F5EFE6] via-[#FAF6F0] to-[#E8DFD0] overflow-hidden flex items-center justify-center border-b border-[#E8DFD0]">
          {currentImage ? (
            <img 
              src={currentImage} 
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center relative">
              {/* Pattern Background Placeholder */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#72101E 1px, transparent 1px)`,
                  backgroundSize: '16px 16px'
                }}
              />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#72101E]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#72101E] mb-3 group-hover:scale-110 transition-transform">
                  <Camera className="w-7 h-7" />
                </div>
                <span className="text-xs font-heading font-black text-[#72101E] uppercase tracking-wider block mb-1">
                  KOLOM FOTO RESMI
                </span>
                <p className="text-[11px] text-gray-500 max-w-[200px] leading-tight mb-2">
                  Siap untuk foto: <br /><strong className="text-gray-700">{photo.title}</strong>
                </p>
                <div className="inline-flex items-center gap-1 text-[10px] bg-white/80 border border-[#D4AF37]/60 text-[#72101E] px-2.5 py-0.5 rounded-full font-mono">
                  <span>Rasio {photo.aspectRatio}</span>
                  <span className="text-gray-400">|</span>
                  <span>{photo.suggestedDimensions}</span>
                </div>
              </div>
            </div>
          )}

          {/* Badge Tag Kategori di Atas Foto */}
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider bg-[#72101E] text-[#F3E5AB] px-2.5 py-1 rounded-md border border-[#D4AF37] shadow-sm">
              {photo.tag}
            </span>
          </div>

          {/* Overlay Tombol Aksi Foto (Ganti / Unggah / Lihat) */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4 z-20 backdrop-blur-[2px]">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 bg-[#D4AF37] hover:bg-[#B8860B] text-[#3B050B] text-xs font-bold px-3 py-2 rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
              title="Unggah Foto dari Komputer / HP"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>{currentImage ? 'Ganti Foto' : 'Unggah Foto'}</span>
            </button>

            {currentImage && (
              <>
                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(true)}
                  className="p-2 rounded-lg bg-white/90 hover:bg-white text-gray-800 shadow-md transition-transform hover:scale-105 cursor-pointer"
                  title="Lihat Pratinjau Foto"
                >
                  <Eye className="w-4 h-4 text-[#72101E]" />
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-2 rounded-lg bg-red-600 hover:bg-red-700 text-white shadow-md transition-transform hover:scale-105 cursor-pointer"
                  title="Hapus / Reset Foto"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </>
            )}
          </div>

          {/* Hidden File Input */}
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>

        {/* Caption & Keterangan Copy yang Sesuai */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B38F23]">
                {photo.category}
              </span>
              {currentImage && (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span>Foto Terpasang</span>
                </span>
              )}
            </div>
            <h4 className="font-heading font-bold text-sm sm:text-base text-[#72101E] mb-2 leading-snug">
              {photo.title}
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              {photo.caption}
            </p>
          </div>

          {/* Slot Info Footer */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
            <span className="flex items-center gap-1 text-[#72101E]/80 font-medium">
              <ImageIcon className="w-3 h-3 text-[#D4AF37]" />
              <span>Slot ID: {photo.id}</span>
            </span>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-[#72101E] hover:text-[#B8860B] font-semibold hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>+ Masukkan Gambar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Preview Foto */}
      {isPreviewOpen && currentImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div 
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#72101E] text-white px-5 py-3.5 flex items-center justify-between border-b-2 border-[#D4AF37]">
              <div>
                <span className="text-[10px] font-bold text-[#F3E5AB] uppercase tracking-widest block">
                  {photo.category} &bull; {photo.tag}
                </span>
                <h3 className="font-heading font-bold text-base text-white">
                  {photo.title}
                </h3>
              </div>
              <button 
                onClick={() => setIsPreviewOpen(false)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img 
                src={currentImage} 
                alt={photo.title}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 bg-[#FAF6F0] border-t border-[#E8DFD0] flex items-center justify-between">
              <p className="text-xs text-gray-600 italic">
                {photo.caption}
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-xs bg-[#72101E] text-white px-3 py-1.5 rounded-lg hover:bg-[#8E1627] font-bold transition-colors ml-4 flex-shrink-0"
              >
                Ganti Gambar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
