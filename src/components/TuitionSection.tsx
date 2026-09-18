import React, { useState } from 'react';
import { Tag, Sparkles, Check, Calculator, MessageCircle, AlertCircle } from 'lucide-react';

export const TuitionSection: React.FC = () => {
  // State for interactive fee calculator
  const [isFirstApplicant, setIsFirstApplicant] = useState<boolean>(true);
  const [hasSiblingActive, setHasSiblingActive] = useState<boolean>(false);

  const baseEntranceFee = 3100000;
  const entranceDiscount = isFirstApplicant ? 100000 : 0;
  const finalEntranceFee = baseEntranceFee - entranceDiscount;

  const baseMonthlyFee = 650000;
  const monthlyDiscount = hasSiblingActive ? 200000 : 0;
  const finalMonthlyFee = baseMonthlyFee - monthlyDiscount;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="biaya-beasiswa" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F5EFE6]">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B38F23] bg-[#D4AF37]/15 px-3.5 py-1 rounded-full border border-[#D4AF37]/40 inline-block mb-3">
            Transparan &amp; Terjangkau
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-[#72101E]">
            BIAYA &amp; BEASISWA
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Komitmen kami menghadirkan pendidikan Al-Qur'an berkualitas dengan pembiayaan yang transparan, berkah, dan program beasiswa potongan biaya.
          </p>
        </div>

        {/* POTONGAN BIAYA / BEASISWA BANNER */}
        <div className="bg-gradient-to-br from-white to-[#FDFBF7] rounded-2xl p-6 sm:p-7 border-2 border-[#D4AF37] shadow-md mb-10">
          <div className="flex items-center gap-2.5 text-[#72101E] font-heading font-extrabold text-base sm:text-lg uppercase tracking-wider border-b border-[#D4AF37]/40 pb-3 mb-5">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <span>POTONGAN BIAYA / BEASISWA</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#E8DFD0] flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#72101E] text-[#D4AF37] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#72101E] block mb-0.5">
                  PENDAFTAR PERTAMA
                </span>
                <div className="font-heading font-extrabold text-lg text-[#2B2D42]">
                  Potongan Rp100.000
                </div>
                <p className="text-xs text-gray-600 mt-0.5">
                  Dipotong langsung dari total uang masuk pendaftaran.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#E8DFD0] flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#72101E] text-[#D4AF37] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#72101E] block mb-0.5">
                  SAUDARA KANDUNG AKTIF
                </span>
                <div className="font-heading font-extrabold text-lg text-[#2B2D42]">
                  Potongan SPP Rp200.000 /bulan
                </div>
                <p className="text-xs text-gray-600 mt-0.5">
                  Keringanan biaya operasional bulanan santriwati aktif.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 KARTU RINCIAN BIAYA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* 1. BIAYA PENDAFTARAN */}
          <div className="bg-white rounded-2xl shadow-md border border-[#E8DFD0] overflow-hidden flex flex-col">
            <div className="bg-[#72101E] text-white py-3.5 px-4 text-center border-b-2 border-[#D4AF37]">
              <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider">
                BIAYA PENDAFTARAN
              </h4>
            </div>
            <div className="p-6 text-center flex-1 flex flex-col justify-between">
              <div>
                <div className="inline-block bg-emerald-600 text-white font-heading font-extrabold text-2xl px-6 py-2 rounded-full mb-3 shadow-sm">
                  GRATIS
                </div>
                <div className="text-xs font-semibold text-gray-500 mb-4">
                  Bebas biaya formulir &amp; registrasi
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Calon santriwati dapat langsung mengisi formulir dan mengirim berkas tanpa dipungut biaya pendaftaran.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <Check className="w-4 h-4" />
                <span>Tanpa Biaya Tersembunyi</span>
              </div>
            </div>
          </div>

          {/* 2. BIAYA MASUK (HIGHLIGHTED) */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-[#D4AF37] overflow-hidden flex flex-col relative transform md:-translate-y-2">
            <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#3B050B] text-[10px] font-black uppercase px-3 py-1 rounded-bl-lg tracking-wider">
              UTAMA / TERMASUK LENGKAP
            </div>
            <div className="bg-gradient-to-r from-[#72101E] to-[#560B15] text-white py-3.5 px-4 text-center border-b-2 border-[#D4AF37]">
              <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider">
                BIAYA MASUK
              </h4>
            </div>
            <div className="p-6 text-center flex-1 flex flex-col justify-between">
              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-[#72101E] mb-1">
                  Rp 3.100.000,-
                </div>
                <div className="text-xs font-semibold text-gray-500 mb-4">
                  Dibayarkan saat konfirmasi daftar ulang
                </div>
                <div className="bg-[#FAF6F0] p-3.5 rounded-xl border border-[#E8DFD0] text-left text-xs text-gray-700 space-y-1.5">
                  <div className="font-bold text-[#72101E] text-xs uppercase mb-1">
                    Sudah Termasuk:
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Kitab &amp; Buku Pembelajaran</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Lemari Asrama Pribadi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Perlengkapan Makan Pribadi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Seragam Lengkap Santriwati</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-[11px] text-[#B38F23] font-semibold">
                *Tersedia potongan Rp100.000 untuk Pendaftar Pertama
              </div>
            </div>
          </div>

          {/* 3. SPP BULANAN */}
          <div className="bg-white rounded-2xl shadow-md border border-[#E8DFD0] overflow-hidden flex flex-col">
            <div className="bg-[#72101E] text-white py-3.5 px-4 text-center border-b-2 border-[#D4AF37]">
              <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider">
                SPP BULANAN
              </h4>
            </div>
            <div className="p-6 text-center flex-1 flex flex-col justify-between">
              <div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-[#72101E] mb-1">
                  Rp 650.000,-
                </div>
                <div className="text-xs font-semibold text-gray-500 mb-4">
                  / santriwati setiap bulan
                </div>
                <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#E8DFD0] text-xs text-gray-700 leading-relaxed text-left">
                  <span className="font-bold text-[#72101E] block mb-1">Keringanan Khusus:</span>
                  Menjadi <strong className="text-emerald-700 font-bold">Rp450.000,-/bulan</strong> untuk santriwati yang memiliki saudara kandung aktif belajar di pondok pesantren.
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-1.5 text-xs text-gray-500">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Katering &amp; Operasional Terpadu</span>
              </div>
            </div>
          </div>
        </div>

        {/* KALKULATOR / SIMULASI ESTIMASI BIAYA */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFD0] shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8DFD0] pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#72101E] text-[#D4AF37] flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg uppercase tracking-wide text-[#72101E]">
                  SIMULASI ESTIMASI BIAYA
                </h3>
                <p className="text-xs text-gray-500">
                  Hitung perkiraan biaya masuk &amp; SPP setelah potongan beasiswa
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
              <AlertCircle className="w-4 h-4" />
              <span>Simulasi Instan</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Opsi Checkbox */}
            <div className="space-y-4">
              <label className="flex items-start gap-3 p-3.5 rounded-xl border border-[#E8DFD0] bg-[#FAF6F0] hover:bg-[#FAF0E0]/60 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={isFirstApplicant}
                  onChange={(e) => setIsFirstApplicant(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded text-[#72101E] focus:ring-[#72101E]"
                />
                <div>
                  <div className="font-heading font-bold text-sm text-[#72101E]">
                    Pendaftar Pertama
                  </div>
                  <div className="text-xs text-gray-600">
                    Mendapatkan potongan <strong>Rp100.000</strong> dari uang masuk.
                  </div>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3.5 rounded-xl border border-[#E8DFD0] bg-[#FAF6F0] hover:bg-[#FAF0E0]/60 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={hasSiblingActive}
                  onChange={(e) => setHasSiblingActive(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded text-[#72101E] focus:ring-[#72101E]"
                />
                <div>
                  <div className="font-heading font-bold text-sm text-[#72101E]">
                    Memiliki Saudara Kandung Aktif di Ponpes
                  </div>
                  <div className="text-xs text-gray-600">
                    Mendapatkan potongan SPP <strong>Rp200.000/bulan</strong> (SPP menjadi Rp450.000/bln).
                  </div>
                </div>
              </label>
            </div>

            {/* Hasil Perhitungan */}
            <div className="bg-[#FAF6F0] rounded-xl p-5 border-2 border-[#D4AF37] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-gray-600">Biaya Pendaftaran:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">GRATIS</span>
                </div>

                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <div>
                    <span className="text-gray-700 font-medium">Biaya Masuk Daftar Ulang:</span>
                    {isFirstApplicant && (
                      <span className="block text-[11px] text-emerald-700">Hemat Rp100.000</span>
                    )}
                  </div>
                  <span className="font-heading font-bold text-base text-[#72101E]">
                    {formatRupiah(finalEntranceFee)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs sm:text-sm pt-2 border-t border-[#E8DFD0]">
                  <div>
                    <span className="text-gray-700 font-medium">SPP Bulanan:</span>
                    {hasSiblingActive && (
                      <span className="block text-[11px] text-emerald-700">Hemat Rp200.000/bln</span>
                    )}
                  </div>
                  <span className="font-heading font-bold text-base text-[#72101E]">
                    {formatRupiah(finalMonthlyFee)} <span className="text-xs font-normal text-gray-500">/bln</span>
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E8DFD0] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-gray-500">
                  Konsultasikan metode pembayaran berkala ke Admin:
                </span>
                <a
                  href={`https://wa.me/6282152343540?text=Assalamu'alaikum%20Admin%20PSB,%20saya%20ingin%20konsultasi%20biaya%20masuk%20${finalEntranceFee}%20dan%20SPP%20${finalMonthlyFee}/bulan.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konfirmasi via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
