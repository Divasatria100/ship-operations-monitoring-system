import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShip, FaCalendarCheck, FaChartLine, FaClipboardCheck, FaBell, FaAngleRight } from "react-icons/fa";
import { MdSecurity, MdSpeed } from "react-icons/md";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#F5F5F5] pt-[72px] md:pt-[60px]">
      {/* Hero Section - Enhanced with overlay gradient */}
      <section className="relative bg-[#002B5B] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B5B]/90 to-[#002B5B]/70"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('/images/ship-maintenance.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#002B5B]/90"></div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-28 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight">
              <span className="text-[#00B4D8] drop-shadow-lg">SODIKAP</span> - Solusi Digital <br className="hidden sm:block" />
              Kapal Pemeliharaan
            </h1>
            <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto mb-8 text-gray-100">
              Tingkatkan efisiensi dan efektivitas pemeliharaan kapal Anda dengan sistem manajemen pemeliharaan kapal berbasis web yang komprehensif.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-md mx-auto"
          >
            <Link
              to="/register"
              className="group flex items-center justify-center px-8 py-3.5 bg-[#00B4D8] hover:bg-[#0096B7] rounded-md font-semibold transition-all duration-300 transform hover:scale-105 text-center"
            >
              <span>Mulai Sekarang</span>
              <FaAngleRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/about"
              className="group flex items-center justify-center px-8 py-3.5 border-2 border-white hover:bg-white hover:text-[#002B5B] rounded-md font-semibold transition-all duration-300 transform hover:scale-105 text-center"
            >
              <span>Pelajari Lebih Lanjut</span>
              <FaAngleRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
          
          {/* Added floating shape decorations */}
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#00B4D8]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 -right-20 w-60 h-60 bg-[#00B4D8]/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Overview Section - Improved spacing and animations */}
      <section className="py-16 md:py-24 container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#2E2E2E]">
              <span className="border-b-4 border-[#00B4D8] pb-2">Tentang SODIKAP</span>
            </h2>
            <p className="text-base sm:text-lg text-[#4D5E70] px-4">
              SODIKAP adalah sistem informasi pemeliharaan kapal berbasis web yang dirancang untuk meningkatkan 
              efisiensi dan efektivitas dalam proses pemeliharaan kapal. Aplikasi ini menyediakan fitur 
              komprehensif untuk manajemen pemeliharaan kapal, termasuk penjadwalan, pencatatan aktivitas, 
              pemantauan kondisi, dan pengelolaan dokumen terkait.
            </p>
          </motion.div>
        </div>

        {/* Stats - Enhanced with animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-[#002B5B] to-[#003a75] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaCalendarCheck className="text-[#00B4D8] text-2xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#2E2E2E]">Pemeliharaan Terencana</h3>
            <p className="text-[#6C757D] text-sm md:text-base">
              Kurangi keterlambatan dan biaya operasional dengan jadwal pemeliharaan terencana yang efektif
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-[#002B5B] to-[#003a75] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <MdSecurity className="text-[#00B4D8] text-2xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#2E2E2E]">Keselamatan Terjamin</h3>
            <p className="text-[#6C757D] text-sm md:text-base">
              Tingkatkan keselamatan kapal melalui pemantauan kondisi dan sistem peringatan dini
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 sm:col-span-2 md:col-span-1"
          >
            <div className="bg-gradient-to-br from-[#002B5B] to-[#003a75] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaChartLine className="text-[#00B4D8] text-2xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#2E2E2E]">Analisis Data</h3>
            <p className="text-[#6C757D] text-sm md:text-base">
              Dapatkan insight berharga dari data pemeliharaan untuk pengambilan keputusan strategis
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Enhanced with better layout */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#00B4D8]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#002B5B]/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#2E2E2E]">
              <span className="border-b-4 border-[#00B4D8] pb-2">Fitur Utama</span>
            </h2>
            <p className="text-base sm:text-lg text-[#4D5E70]">
              SODIKAP menyediakan berbagai fitur komprehensif untuk mengelola pemeliharaan kapal secara efisien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start space-x-4 group"
            >
              <div className="bg-gradient-to-br from-[#002B5B] to-[#003a75] p-4 rounded-lg flex-shrink-0 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 transform">
                <FaShip className="text-[#00B4D8] text-2xl md:text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#2E2E2E] group-hover:text-[#002B5B] transition-colors">
                  Manajemen Pemeliharaan
                </h3>
                <p className="text-[#6C757D] text-sm md:text-base">
                  Buat dan kelola jadwal pemeliharaan kapal, tetapkan prioritas, dan koordinasikan tugas pemeliharaan dengan efektif dan efisien.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start space-x-4 group"
            >
              <div className="bg-gradient-to-br from-[#002B5B] to-[#003a75] p-4 rounded-lg flex-shrink-0 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 transform">
                <FaClipboardCheck className="text-[#00B4D8] text-2xl md:text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#2E2E2E] group-hover:text-[#002B5B] transition-colors">
                  Pencatatan & Pelacakan
                </h3>
                <p className="text-[#6C757D] text-sm md:text-base">
                  Catat dan lacak semua aktivitas pemeliharaan secara digital, termasuk upload dokumentasi dan laporan yang terstruktur.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start space-x-4 group"
            >
              <div className="bg-gradient-to-br from-[#002B5B] to-[#003a75] p-4 rounded-lg flex-shrink-0 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 transform">
                <MdSpeed className="text-[#00B4D8] text-2xl md:text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#2E2E2E] group-hover:text-[#002B5B] transition-colors">
                  Pemantauan Kondisi Kapal
                </h3>
                <p className="text-[#6C757D] text-sm md:text-base">
                  Pantau kondisi kapal secara real-time dan lihat tren historis untuk mengidentifikasi masalah potensial sebelum menjadi kritis.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start space-x-4 group"
            >
              <div className="bg-gradient-to-br from-[#002B5B] to-[#003a75] p-4 rounded-lg flex-shrink-0 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 transform">
                <FaBell className="text-[#00B4D8] text-2xl md:text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#2E2E2E] group-hover:text-[#002B5B] transition-colors">
                  Pelaporan & Analisis
                </h3>
                <p className="text-[#6C757D] text-sm md:text-base">
                  Hasilkan laporan komprehensif dan analisis data untuk pengambilan keputusan yang lebih baik dan terukur.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with better mobile layout */}
      <section className="py-12 md:py-20 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-[#002B5B] to-[#004080] rounded-2xl p-6 sm:p-10 md:p-14 overflow-hidden relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#00B4D8]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#00B4D8]/10 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Siap untuk meningkatkan pemeliharaan kapal Anda?
              </h2>
              <p className="text-base sm:text-lg text-gray-200 mb-0">
                Bergabunglah dengan SODIKAP sekarang dan rasakan manfaatnya.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/register"
                className="group flex items-center justify-center px-8 py-3.5 bg-[#00B4D8] hover:bg-[#0096B7] text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                <span>Daftar Sekarang</span>
                <FaAngleRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group flex items-center justify-center px-8 py-3.5 border-2 border-white text-white hover:bg-white hover:text-[#002B5B] rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                <span>Hubungi Kami</span>
                <FaAngleRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section - Enhanced with better visual design */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#2E2E2E]">
              <span className="border-b-4 border-[#00B4D8] pb-2">Manfaat Menggunakan SODIKAP</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Efisiensi Operasional",
                description: "Tingkatkan efisiensi melalui proses pemeliharaan yang terstruktur dan terpantau.",
                delay: 0.1
              },
              {
                title: "Penghematan Biaya",
                description: "Kurangi biaya operasional dengan mencegah kerusakan besar dan mengurangi waktu nonaktif kapal.",
                delay: 0.2
              },
              {
                title: "Peningkatan Keselamatan",
                description: "Tingkatkan keselamatan kapal melalui pemeliharaan yang rutin dan terarah.",
                delay: 0.3
              },
              {
                title: "Kepatuhan Regulasi",
                description: "Pastikan kepatuhan pada regulasi keselamatan pelayaran dengan dokumentasi yang lengkap.",
                delay: 0.4
              },
              {
                title: "Transparansi & Akuntabilitas",
                description: "Tingkatkan transparansi dan akuntabilitas dalam proses pemeliharaan kapal.",
                delay: 0.5
              },
              {
                title: "Perpanjangan Umur Kapal",
                description: "Perpanjang masa pakai kapal melalui pemeliharaan preventif dan prediktif.",
                delay: 0.6
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: benefit.delay }}
                className="bg-[#F5F5F5] p-6 md:p-8 rounded-xl border-l-4 border-[#00B4D8] hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#2E2E2E] group-hover:text-[#002B5B] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-[#6C757D] text-sm md:text-base">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
