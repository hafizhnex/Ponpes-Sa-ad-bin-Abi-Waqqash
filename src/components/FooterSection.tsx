import React, { useState } from 'react';
import { Phone, MapPin, CreditCard, Copy, Check, MessageCircle, Share2, Sparkles, Building2 } from 'lucide-react';
import { BankAccount } from '../types';

export const FooterSection: React.FC = () => {
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  const bankAccounts: BankAccount[] = [
    {
      bank: "BNI",
      number: "1857450684",
      holder: "Yayasan Nurul Quran Saad Bin Abi Waqqas",
      color: "from-amber-600 to-orange-700",
    },
    {
      bank: "BSI",
      number: "7150749478",
      holder: "Adi Akbar (Mudir Ponpes)",
      color: "from-teal-600 to-emerald-800",
    },
  ];

  const handleCopy = (number: string, bank: string) => {
    navigator.clipboard.writeText(number);
    setCopiedBank(bank);
    setTimeout(() => {
      setCopiedBank(null);
    }, 2500);
  };

  return (
    <footer id="kontak-lokasi" className="bg-gradient-to-b from-[#4A070F] via-[#680E1B] to-[#3B050B] text-white border-t-4 border-[#D4AF37] pt-16 pb-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-12">
          {/* KOLOM 1: INFORMASI & KONTAK */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-[#D4AF37] font-heading font-extrabold text-base sm:text-lg uppercase tracking-wider border-b border-[#D4AF37]/30 pb-2">
              <Phone className="w-5 h-5 text-[#D4AF37]" />
              <span>INFORMASI &amp; KONTAK</span>
            </div>

            <div className="bg-black/25 p-4 rounded-xl border border-[#D4AF37]/30 space-y-3">
              <div>
                <span className="text-xs text-neutral-300 font-medium block">
                  WhatsApp Admin Putri:
                </span>
                <span className="text-lg sm:text-xl font-heading font-extrabold text-[#D4AF37] block mt-0.5">
                  0821-5234-3540
                </span>
              </div>

              <a
                href="https://wa.me/6282152343540?text=Assalamu'alaikum%20Admin%20PSB%20Ponpes%20Putri%20Sa'ad%20bin%20Abi%20Waqqas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 px-4 rounded-lg text-sm transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Admin WhatsApp</span>
              </a>
            </div>

            <div className="flex items-start gap-3 bg-black/20 p-4 rounded-xl border border-white/10">
              <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
              <div>
                <span className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider block mb-1">
                  Alamat Lengkap Pondok:
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  Jl. Papandayan, Dusun Kubu Manggis, Desa Rambah Tengah Utara, Kec. Rambah, Kab. Rokan Hulu, Pasir Pengaraian, Riau.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jl.+Papandayan,+Dusun+Kubu+Manggis,+Desa+Rambah+Tengah+Utara,+Kec.+Rambah,+Kab.+Rokan+Hulu,+Pasir+Pengaraian,+Riau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#F3E5AB] hover:underline mt-2"
                >
                  <span>Buka di Google Maps</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* KOLOM 2: REKENING TRANSFER */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-[#D4AF37] font-heading font-extrabold text-base sm:text-lg uppercase tracking-wider border-b border-[#D4AF37]/30 pb-2">
              <CreditCard className="w-5 h-5 text-[#D4AF37]" />
              <span>REKENING TRANSFER</span>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              Pembayaran biaya daftar ulang dan SPP resmi hanya dikirim ke rekening resmi berikut:
            </p>

            <div className="space-y-3">
              {bankAccounts.map((account) => (
                <div
                  key={account.bank}
                  className="bg-black/30 border border-[#D4AF37]/40 rounded-xl p-4 relative hover:border-[#D4AF37] transition-all"
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-heading font-black text-base text-[#D4AF37] tracking-wider">
                      BANK {account.bank}
                    </span>
                    <button
                      onClick={() => handleCopy(account.number, account.bank)}
                      className="inline-flex items-center gap-1 bg-[#D4AF37]/20 hover:bg-[#D4AF37] text-white hover:text-[#3B050B] text-xs font-semibold px-2.5 py-1 rounded transition-colors"
                      title="Salin Nomor Rekening"
                    >
                      {copiedBank === account.bank ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin Rekening</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="font-mono font-bold text-lg sm:text-xl text-white tracking-wider">
                    {account.number}
                  </div>

                  <div className="text-xs text-neutral-300 mt-1">
                    a.n {account.holder}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-[#F3E5AB]/80 italic">
              *Harap simpan bukti transfer untuk verifikasi administrasi ke WhatsApp Admin.
            </div>
          </div>

          {/* KOLOM 3: SOSIAL MEDIA & TENTANG */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-[#D4AF37] font-heading font-extrabold text-base sm:text-lg uppercase tracking-wider border-b border-[#D4AF37]/30 pb-2">
              <Share2 className="w-5 h-5 text-[#D4AF37]" />
              <span>SOSIAL MEDIA</span>
            </div>

            <div className="bg-black/25 p-4 rounded-xl border border-white/10 space-y-3">
              <div className="text-xs text-neutral-300">
                Dokumentasi santriwati, info kegiatan tahfidz, dan pengumuman resmi:
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-[#D4AF37]/30">
                <span className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider block">
                  Facebook / Instagram:
                </span>
                <span className="font-heading font-bold text-sm text-white block mt-0.5">
                  Ponpes Sa'ad bin Abi Waqqas
                </span>
              </div>
            </div>

            <div className="bg-black/20 p-4 rounded-xl border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#72101E] border border-[#D4AF37] flex items-center justify-center text-lg flex-shrink-0">
                🕌
              </div>
              <div>
                <div className="text-xs font-bold text-[#F3E5AB]">Tingkat Pendidikan</div>
                <div className="text-xs text-neutral-300">Wustha (Setingkat SMP) &amp; Ulya (Setingkat SMA)</div>
              </div>
            </div>
          </div>
        </div>

        {/* GARIS PEMBATAS */}
        <div className="border-t border-[#D4AF37]/30 pt-8 mt-4 text-center">
          {/* TEKS PENUTUP PERSIS SESUAI PROMPT */}
          <div className="max-w-3xl mx-auto mb-6">
            <div className="inline-block mb-2 text-[#D4AF37]">
              <Sparkles className="w-5 h-5 mx-auto" />
            </div>
            <p className="font-heading font-extrabold text-base sm:text-xl text-[#F3E5AB] italic tracking-wide leading-relaxed">
              "Membentuk Generasi Muslimah Penghafal Al-Qur'an, Berilmu, Berakhlak Mulia, dan Bermanfaat bagi Umat"
            </p>
          </div>

          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Pondok Pesantren Tahfidz Takhossus Putri Sa'ad bin Abi Waqqas. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};
