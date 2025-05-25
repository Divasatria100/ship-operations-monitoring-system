-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 25, 2025 at 01:34 PM
-- Server version: 8.0.42
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_sodikap`
--

-- --------------------------------------------------------

--
-- Table structure for table `jadwal_pemeliharaan`
--

CREATE TABLE `jadwal_pemeliharaan` (
  `id` int NOT NULL,
  `kapal_id` int DEFAULT NULL,
  `tanggal_mulai` date DEFAULT NULL,
  `tanggal_selesai` date DEFAULT NULL,
  `status` enum('Dijadwalkan','Berjalan','Selesai','Dibatalkan') COLLATE utf8mb4_general_ci DEFAULT NULL,
  `deskripsi` text COLLATE utf8mb4_general_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kapal`
--

CREATE TABLE `kapal` (
  `id` int NOT NULL,
  `nama_kapal` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `kode_kapal` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `jenis` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tahun_pembuatan` year DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `log_pemeliharaan`
--

CREATE TABLE `log_pemeliharaan` (
  `id` int NOT NULL,
  `jadwal_id` int DEFAULT NULL,
  `teknisi_id` int DEFAULT NULL,
  `catatan` text COLLATE utf8mb4_general_ci,
  `dokumen` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tanggal_input` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notifikasi`
--

CREATE TABLE `notifikasi` (
  `id` int NOT NULL,
  `pengguna_id` int DEFAULT NULL,
  `pesan` text COLLATE utf8mb4_general_ci,
  `dibaca` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pengguna`
--

CREATE TABLE `pengguna` (
  `id` int NOT NULL,
  `nama_lengkap` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `role` enum('Teknisi Kapal','Admin Operasional','Manajer Armada') COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jadwal_pemeliharaan`
--
ALTER TABLE `jadwal_pemeliharaan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kapal_id` (`kapal_id`);

--
-- Indexes for table `kapal`
--
ALTER TABLE `kapal`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kode_kapal` (`kode_kapal`);

--
-- Indexes for table `log_pemeliharaan`
--
ALTER TABLE `log_pemeliharaan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jadwal_id` (`jadwal_id`),
  ADD KEY `teknisi_id` (`teknisi_id`);

--
-- Indexes for table `notifikasi`
--
ALTER TABLE `notifikasi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pengguna_id` (`pengguna_id`);

--
-- Indexes for table `pengguna`
--
ALTER TABLE `pengguna`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jadwal_pemeliharaan`
--
ALTER TABLE `jadwal_pemeliharaan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kapal`
--
ALTER TABLE `kapal`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `log_pemeliharaan`
--
ALTER TABLE `log_pemeliharaan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notifikasi`
--
ALTER TABLE `notifikasi`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pengguna`
--
ALTER TABLE `pengguna`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `jadwal_pemeliharaan`
--
ALTER TABLE `jadwal_pemeliharaan`
  ADD CONSTRAINT `jadwal_pemeliharaan_ibfk_1` FOREIGN KEY (`kapal_id`) REFERENCES `kapal` (`id`);

--
-- Constraints for table `log_pemeliharaan`
--
ALTER TABLE `log_pemeliharaan`
  ADD CONSTRAINT `log_pemeliharaan_ibfk_1` FOREIGN KEY (`jadwal_id`) REFERENCES `jadwal_pemeliharaan` (`id`),
  ADD CONSTRAINT `log_pemeliharaan_ibfk_2` FOREIGN KEY (`teknisi_id`) REFERENCES `pengguna` (`id`);

--
-- Constraints for table `notifikasi`
--
ALTER TABLE `notifikasi`
  ADD CONSTRAINT `notifikasi_ibfk_1` FOREIGN KEY (`pengguna_id`) REFERENCES `pengguna` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
