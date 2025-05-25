import React from "react";
import { Link } from "react-router-dom";
import { FaShip, FaCalendarCheck, FaChartLine, FaClipboardCheck, FaBell } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const Home = () => {
  return (
    <div className="bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="relative bg-[#002B5B] text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/ship-maintenance.jpg')] bg-cover bg-center"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            <span className="text-[#00B4D8]">SODIKAP</span> - Solusi Digital Kapal Pemeliharaan
          </h1>
          <p className="text-xl text-center max-w-3xl mb-10">
            Tingkatkan efisiensi dan efektivitas pemeliharaan kapal Anda dengan sistem manajemen pemeliharaan kapal berbasis web yang komprehensif.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/register"
              className="px-8 py-3 bg-[#00B4D8] hover:bg-[#0096B7] rounded-md font-semibold transition-colors text-center"
            >
              Mulai Sekarang
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border-2 border-white hover:bg-white hover:text-[#002B5B] rounded-md font-semibold transition-colors text-center"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2E2E2E]">
            <span className="border-b-4 border-[#00B4D8] pb-2">Tentang SODIKAP</span>
          </h2>
          <p className="text-lg text-[#4D5E70]">
            SODIKAP adalah sistem informasi pemeliharaan kapal berbasis web yang dirancang untuk meningkatkan 
            efisiensi dan efektivitas dalam proses pemeliharaan kapal. Aplikasi ini menyediakan fitur 
            komprehensif untuk manajemen pemeliharaan kapal, termasuk penjadwalan, pencatatan aktivitas, 
            pemantauan kondisi, dan pengelolaan dokumen terkait.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform">
            <div className="bg-[#002B5B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCalendarCheck className="text-[#00B4D8] text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-[#2E2E2E]">Pemeliharaan Terencana</h3>
            <p className="text-[#6C757D]">Kurangi keterlambatan dan biaya operasional dengan jadwal pemeliharaan terencana</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform">
            <div className="bg-[#002B5B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MdSecurity className="text-[#00B4D8] text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-[#2E2E2E]">Keselamatan Terjamin</h3>
            <p className="text-[#6C757D]">Tingkatkan keselamatan kapal melalui pemantauan kondisi dan peringatan dini</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform">
            <div className="bg-[#002B5B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaChartLine className="text-[#00B4D8] text-2xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-[#2E2E2E]">Analisis Data</h3>
            <p className="text-[#6C757D]">Dapatkan insight berharga dari data pemeliharaan untuk pengambilan keputusan</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2E2E2E]">
              <span className="border-b-4 border-[#00B4D8] pb-2">Fitur Utama</span>
            </h2>
            <p className="text-lg text-[#4D5E70]">
              SODIKAP menyediakan berbagai fitur komprehensif untuk mengelola pemeliharaan kapal secara efisien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-start space-x-4">
              <div className="bg-[#002B5B] p-3 rounded-lg">
                <FaShip className="text-[#00B4D8] text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#2E2E2E]">Manajemen Pemeliharaan</h3>
                <p className="text-[#6C757D]">
                  Buat dan kelola jadwal pemeliharaan kapal, tetapkan prioritas, dan koordinasikan tugas pemeliharaan dengan efektif.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#002B5B] p-3 rounded-lg">
                <FaClipboardCheck className="text-[#00B4D8] text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#2E2E2E]">Pencatatan & Pelacakan</h3>
                <p className="text-[#6C757D]">
                  Catat dan lacak semua aktivitas pemeliharaan secara digital, termasuk upload dokumentasi dan laporan.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#002B5B] p-3 rounded-lg">
                <FaChartLine className="text-[#00B4D8] text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#2E2E2E]">Pemantauan Kondisi Kapal</h3>
                <p className="text-[#6C757D]">
                  Pantau kondisi kapal secara real-time dan lihat tren historis untuk mengidentifikasi masalah potensial sebelum menjadi kritis.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#002B5B] p-3 rounded-lg">
                <FaBell className="text-[#00B4D8] text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#2E2E2E]">Pelaporan & Analisis</h3>
                <p className="text-[#6C757D]">
                  Hasilkan laporan komprehensif dan analisis data untuk pengambilan keputusan yang lebih baik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#002B5B] to-[#004080] rounded-xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-10 md:mb-0 md:mr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap untuk meningkatkan pemeliharaan kapal Anda?
            </h2>
            <p className="text-lg text-gray-200 mb-0">
              Bergabunglah dengan SODIKAP sekarang dan rasakan manfaatnya.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/register"
              className="px-8 py-3 bg-[#00B4D8] hover:bg-[#0096B7] text-white rounded-md font-semibold transition-colors whitespace-nowrap"
            >
              Daftar Sekarang
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#002B5B] rounded-md font-semibold transition-colors whitespace-nowrap"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2E2E2E]">
              <span className="border-b-4 border-[#00B4D8] pb-2">Manfaat Menggunakan SODIKAP</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F5F5F5] p-8 rounded-lg border-l-4 border-[#00B4D8] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#2E2E2E]">Efisiensi Operasional</h3>
              <p className="text-[#6C757D]">
                Tingkatkan efisiensi melalui proses pemeliharaan yang terstruktur dan terpantau.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-8 rounded-lg border-l-4 border-[#00B4D8] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#2E2E2E]">Penghematan Biaya</h3>
              <p className="text-[#6C757D]">
                Kurangi biaya operasional dengan mencegah kerusakan besar dan mengurangi waktu nonaktif kapal.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-8 rounded-lg border-l-4 border-[#00B4D8] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#2E2E2E]">Peningkatan Keselamatan</h3>
              <p className="text-[#6C757D]">
                Tingkatkan keselamatan kapal melalui pemeliharaan yang rutin dan terarah.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-8 rounded-lg border-l-4 border-[#00B4D8] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#2E2E2E]">Kepatuhan Regulasi</h3>
              <p className="text-[#6C757D]">
                Pastikan kepatuhan pada regulasi keselamatan pelayaran dengan dokumentasi yang lengkap.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-8 rounded-lg border-l-4 border-[#00B4D8] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#2E2E2E]">Transparansi & Akuntabilitas</h3>
              <p className="text-[#6C757D]">
                Tingkatkan transparansi dan akuntabilitas dalam proses pemeliharaan kapal.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-8 rounded-lg border-l-4 border-[#00B4D8] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#2E2E2E]">Perpanjangan Umur Kapal</h3>
              <p className="text-[#6C757D]">
                Perpanjang masa pakai kapal melalui pemeliharaan preventif dan prediktif.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
