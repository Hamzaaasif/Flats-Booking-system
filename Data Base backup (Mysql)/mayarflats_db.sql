-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2020 at 08:09 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mayarflats_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `applicant_email`
--

CREATE TABLE `applicant_email` (
  `id` int(11) NOT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `applicant_info`
--

CREATE TABLE `applicant_info` (
  `id` int(11) NOT NULL,
  `appli_name` varchar(50) NOT NULL,
  `appli_father_name` varchar(50) NOT NULL,
  `appli_DOB` varchar(50) NOT NULL,
  `appli_CNIC` varchar(50) NOT NULL,
  `appli_postal_add` varchar(50) DEFAULT NULL,
  `appli_address` varchar(500) NOT NULL,
  `appli_nationality` varchar(50) NOT NULL,
  `appli_occupation` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `applicant_info`
--

INSERT INTO `applicant_info` (`id`, `appli_name`, `appli_father_name`, `appli_DOB`, `appli_CNIC`, `appli_postal_add`, `appli_address`, `appli_nationality`, `appli_occupation`) VALUES
(17, 'Hamza Asif', 'M. asif kamal', '1996-12-26', '4220168581427', NULL, 'shamsi society', 'pakistani', 'student'),
(18, 'Osama ahmed', 'M. Ahmed', '1997-02-12', '4225898562147', NULL, 'gulshan e iqbal', 'pakistani', 'student');

-- --------------------------------------------------------

--
-- Table structure for table `applicant_mobile`
--

CREATE TABLE `applicant_mobile` (
  `id` int(11) NOT NULL,
  `appli_mobile` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `flat_no` varchar(50) NOT NULL,
  `owner_cnic` varchar(50) NOT NULL,
  `owner_name` varchar(50) NOT NULL,
  `total_amount` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`flat_no`, `owner_cnic`, `owner_name`, `total_amount`) VALUES
('A-1', '4225898562147', 'Osama ahmed', 1325000),
('B-15', '4220168581427', 'Hamza Asif', 14485000);

-- --------------------------------------------------------

--
-- Table structure for table `flats_details`
--

CREATE TABLE `flats_details` (
  `flat_num` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `floor` int(11) NOT NULL,
  `covered_area` double NOT NULL,
  `price` double NOT NULL,
  `isbooked` tinyint(1) NOT NULL DEFAULT 0,
  `iscorner` tinyint(1) NOT NULL DEFAULT 0,
  `iswestopen` tinyint(1) NOT NULL DEFAULT 0,
  `isroadfacing` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `flats_details`
--

INSERT INTO `flats_details` (`flat_num`, `type`, `floor`, `covered_area`, `price`, `isbooked`, `iscorner`, `iswestopen`, `isroadfacing`) VALUES
('A-1', 'A', 1, 2100, 1350000, 1, 1, 0, 0),
('B-15', 'B', 15, 2510, 14500000, 1, 0, 1, 1),
('C-12', 'C', 12, 1250, 8900000, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `installments`
--

CREATE TABLE `installments` (
  `inst_id` int(11) NOT NULL,
  `inst_amount` double NOT NULL,
  `inst_flatno` varchar(100) NOT NULL,
  `inst_CNIC` int(11) DEFAULT NULL,
  `inst_date` varchar(50) NOT NULL,
  `inst_owner` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `installments`
--

INSERT INTO `installments` (`inst_id`, `inst_amount`, `inst_flatno`, `inst_CNIC`, `inst_date`, `inst_owner`) VALUES
(11, 120000, 'B-15', 2147483647, '2020-08-10', 'Hamza Asif'),
(12, 50000, 'B-15', 2147483647, '2020-02-14', 'Hamza Asif'),
(13, 200000, 'A-1', 2147483647, '2010-05-07', 'Osama ahmed'),
(14, 150000, 'A-1', 2147483647, '2015-08-05', 'Osama ahmed'),
(15, 120000, 'A-1', 2147483647, '2012-05-15', 'Osama ahmed');

-- --------------------------------------------------------

--
-- Table structure for table `kin_info`
--

CREATE TABLE `kin_info` (
  `id` int(11) NOT NULL,
  `kin_name` varchar(50) NOT NULL,
  `kin_relation` varchar(50) NOT NULL,
  `kin_CNIC` varchar(50) NOT NULL,
  `kin_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kin_info`
--

INSERT INTO `kin_info` (`id`, `kin_name`, `kin_relation`, `kin_CNIC`, `kin_address`) VALUES
(17, 'Billal kamal', 'Brother', '4220168581427', 'shamsi society'),
(18, 'Ahmed', 'Father', '4887521458964', 'gulshan e iqbal');

-- --------------------------------------------------------

--
-- Table structure for table `query_cust`
--

CREATE TABLE `query_cust` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `mob_no` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `query_cust`
--

INSERT INTO `query_cust` (`id`, `name`, `mob_no`, `email`) VALUES
(27, 'hamza', '03233256861', 'hamza@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `name` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `salt` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`name`, `user_id`, `email`, `password`, `salt`) VALUES
('hamza asif', 1, '11@gmail.com', '28bd079ad884c85709205c4a667212c2cd9f8f2d', 'c47a7960-d985-11ea-9a0c-ff40cd73c695'),
('hamza asif', 2, 'admin@gmail.com', '51b52504413ae9dd7711e3fac535bb2db3164336', 'd1a5dd70-dadc-11ea-805f-b7e9db527b34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applicant_email`
--
ALTER TABLE `applicant_email`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Foreign key` (`id`) USING BTREE;

--
-- Indexes for table `applicant_info`
--
ALTER TABLE `applicant_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `appli_CNIC` (`appli_CNIC`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `applicant_mobile`
--
ALTER TABLE `applicant_mobile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`flat_no`);

--
-- Indexes for table `flats_details`
--
ALTER TABLE `flats_details`
  ADD PRIMARY KEY (`flat_num`),
  ADD UNIQUE KEY `id` (`flat_num`);

--
-- Indexes for table `installments`
--
ALTER TABLE `installments`
  ADD PRIMARY KEY (`inst_id`);

--
-- Indexes for table `kin_info`
--
ALTER TABLE `kin_info`
  ADD UNIQUE KEY `kin_CNIC` (`kin_CNIC`),
  ADD KEY `Foreign key` (`id`) USING BTREE;

--
-- Indexes for table `query_cust`
--
ALTER TABLE `query_cust`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applicant_info`
--
ALTER TABLE `applicant_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `installments`
--
ALTER TABLE `installments`
  MODIFY `inst_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `query_cust`
--
ALTER TABLE `query_cust`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `applicant_email`
--
ALTER TABLE `applicant_email`
  ADD CONSTRAINT `applicant_email_ibfk_1` FOREIGN KEY (`id`) REFERENCES `applicant_info` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `applicant_mobile`
--
ALTER TABLE `applicant_mobile`
  ADD CONSTRAINT `Foreign key` FOREIGN KEY (`id`) REFERENCES `applicant_info` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `kin_info`
--
ALTER TABLE `kin_info`
  ADD CONSTRAINT `kin_info_ibfk_1` FOREIGN KEY (`id`) REFERENCES `applicant_info` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
