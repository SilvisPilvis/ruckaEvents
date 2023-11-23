-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 23, 2023 at 05:18 PM
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
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `contactPhone` int NOT NULL,
  `contactEmail` varchar(50) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `color` varchar(7) NOT NULL,
  `bgImage` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `eventName`, `eventDescription`, `startDate`, `endDate`, `contactPhone`, `contactEmail`, `logo`, `color`, `bgImage`) VALUES
(1, 'Test Event', 'This is a test Description. This is a test Description. This is a test Description. This is a test Description. This is a test Description. This is a test Description. This is a test Description. This is a test Description. This is a test Description.', '2023-11-22', '2023-11-23', 29437258, 'ruckasm@gmail.com', 'rucka_9e004f.png', '#9e004f', 'muiza.jpg'),
(2, 'Test Event 2', 'This is a test Description. This is a test Description. This is a test Description. This is a test Description. This is a test Description. This is a test Description. This is a test Description. This is a test Description. This is a test Description.', '2023-11-22', '2023-11-23', 29437258, 'ruckasm@gmail.com', 'rucka_9e004f.png', '#9e004f', 'muiza.jpg'),
(14, 'p', 'p', NULL, NULL, 135, 'a@a', 'rucka_616359.png', '#8f9a50', 'IPb21_SL_Komponentes.drawio.png'),
(15, 'Image.', 'Donut.', NULL, NULL, 388, 'ruckasm@gmail.com', 'rucka_9e004f.png', '#8f9a50', 'e875949e-caf1-4007-a0c0-472ef1b3a414.jpg');

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
