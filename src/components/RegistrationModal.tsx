import React, { useState } from 'react';
import { X, Send, Sparkles, CheckSquare, Phone, User, Calendar, MapPin, Award } from 'lucide-react';
import { RegistrationFormState } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<RegistrationFormState>({
    fullName: '',
    birthPlace: '',
    birthDate: '',
    parentName: '',
    parentPhone: '',
    address: '',
    programLevel: 'Wustha',
    hasActiveSibling: false,
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp Message
    const message = `*FORMULIR PENDAFTARAN SANTRIWATI BARU (PSB) TP 2027/2028*
*Ponpes Tahfidz Takhossus Putri Sa'ad bin Abi Waqqas*
------------------------------------------------
• *Nama Calon Santriwati:* ${formData.fullName}
• *Tempat, Tgl Lahir:* ${formData.birthPlace}, ${formData.birthDate}
• *Jenjang Pilihan:* Tingkat ${formData.programLevel} (Khusus Putri)
• *Nama Orang Tua/Wali:* ${formData.parentName}
• *No. WhatsApp/HP:* ${formData.parentPhone}
• *Alamat Asal:* ${formData.address}
• *Saudara Kandung Aktif di Ponpes:* ${formData.hasActiveSibling ? 'Ya (Klaim Diskon SPP Rp200.000/bln)' : 'Tidak'}
• *Catatan/Pertanyaan:* ${formData.notes || '-'}
------------------------------------------------
Bismillah, mohon informasi langkah seleksi dan pengiriman berkas selanjutnya. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6282152343540?text=${encodedMessage}`;
    
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-xl w-full border-2 border-[#D4AF37] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header Modal */}
        <div className="bg-gradient-to-r from-[#72101E] to-[#560B15] text-white p-5 border-b-4 border-[#D4AF37] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-black text-base sm:text-lg uppercase tracking-wider text-white">
                FORMULIR PENDAFTARAN ONLINE
              </h3>
              <p className="text-xs text-[#F3E5AB]">
                PSB Ponpes Putri Sa'ad bin Abi Waqqas TP 2027/2028
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <div className="bg-[#FAF6F0] p-3 rounded-xl border border-[#D4AF37]/40 text-xs text-gray-700 flex items-center gap-2">
            <Award className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
            <span>Biaya pendaftaran: <strong>GRATIS</strong>. Formulir akan diteruskan ke WhatsApp Admin resmi.</span>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#72101E] uppercase tracking-wider mb-1">
              Nama Lengkap Santriwati *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                placeholder="Contoh: Fatimah Az-Zahra"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#72101E] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#72101E] uppercase tracking-wider mb-1">
                Tempat Lahir *
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Pasir Pengaraian"
                value={formData.birthPlace}
                onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#72101E] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#72101E] uppercase tracking-wider mb-1">
                Tanggal Lahir *
              </label>
              <input
                type="date"
                required
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#72101E] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#72101E] uppercase tracking-wider mb-1">
                Jenjang Pendidikan *
              </label>
              <select
                value={formData.programLevel}
                onChange={(e) => setFormData({ ...formData, programLevel: e.target.value as 'Wustha' | 'Ulya' })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#72101E] focus:outline-none bg-white"
              >
                <option value="Wustha">Tingkat Wustha (Setingkat SMP)</option>
                <option value="Ulya">Tingkat Ulya (Setingkat SMA)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#72101E] uppercase tracking-wider mb-1">
                No. WhatsApp Orang Tua / Wali *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 081234567890"
                  value={formData.parentPhone}
                  onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#72101E] focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#72101E] uppercase tracking-wider mb-1">
              Nama Orang Tua / Wali *
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Abdullah"
              value={formData.parentName}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#72101E] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#72101E] uppercase tracking-wider mb-1">
              Alamat Domisili *
            </label>
            <textarea
              rows={2}
              required
              placeholder="Alamat lengkap asal kota/kabupaten..."
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#72101E] focus:outline-none"
            />
          </div>

          <label className="flex items-center gap-2.5 p-3 rounded-lg border border-[#D4AF37]/50 bg-[#FAF6F0] cursor-pointer">
            <input
              type="checkbox"
              checked={formData.hasActiveSibling}
              onChange={(e) => setFormData({ ...formData, hasActiveSibling: e.target.checked })}
              className="h-4 w-4 text-[#72101E] rounded focus:ring-[#72101E]"
            />
            <span className="text-xs text-gray-800">
              Ada saudara kandung yang saat ini masih aktif belajar di Ponpes Sa'ad bin Abi Waqqas (Dapatkan potongan SPP Rp200.000/bln).
            </span>
          </label>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-heading font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:opacity-95 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Pendaftaran via WhatsApp Admin</span>
            </button>
            <p className="text-[11px] text-gray-500 text-center mt-2">
              Pesan terformat otomatis ke nomor resmi Admin Putri: 0821-5234-3540
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
