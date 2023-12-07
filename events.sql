-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 07, 2023 at 10:25 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ruckadb`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int NOT NULL,
  `eventName` varchar(50) NOT NULL,
  `eventDescription` text NOT NULL,
  `startDate` timestamp NULL DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `startTime` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `endTime` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `contactPhone` int NOT NULL,
  `contactEmail` varchar(50) NOT NULL,
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `color` varchar(7) NOT NULL,
  `bgImage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `eventName`, `eventDescription`, `startDate`, `endDate`, `startTime`, `endTime`, `contactPhone`, `contactEmail`, `logo`, `color`, `bgImage`) VALUES
(16, 'Šis ir notikuma nosaukums.', 'Šis ir notikuma apraksts. Šis ir notikums.', '2023-12-12 22:00:00', NULL, '18:10', '', 12345678, 'ruckasm@gmail.com', 'rucka_9e004f.png', '#8f9a50', 'e97c85e2-3515-4eab-94c3-53489bfa73a6.jpg'),
(17, 'a', 'dkjgfbjkxghblugzhkhglk.zdfhlzjk', '2023-12-14 22:00:00', NULL, '07:10', NULL, 12345678, 'ruckasm@gmail.com', 'rucka_8f9a50.png', '#8f9a50', '7cf0ea47-3829-4ef1-b391-79fdee56ba94'),
(18, 'Red.', 'SUGFHLFHli Zl iusdhfzlf o;zdfoi hziflh gflzgf ulz.', '2023-12-17 22:00:00', NULL, '04:10', NULL, 12345678, 'ruckasm@gmail.com', 'rucka_9e004f.png', '#8f9a50', 'f1c5f246-b639-4c1d-ae53-dd101dfe0c8f.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
