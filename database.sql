-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2019 at 12:21 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `team3d`
CREATE DATABASE IF NOT EXISTS `team3d` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `team3d`;
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `uidUser` tinytext NOT NULL,
  `emailUsers` tinytext NOT NULL,
  `pwdUsers` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idUser`, `uidUser`, `emailUsers`, `pwdUsers`) VALUES
(1, 'teamthree', 'teamthree@hotmail.co.uk', '$2y$10$.K6rMZjormXm10M49gSy3OBZ.RCwAvaGVqmimAcbfyEmXPf6ZhyHq'),
(2, 'test', 'test@hotmail.com', '$2y$10$4ug9TVPVWK/0pBqrGwTiauubnUG1njOI8HKHxOQMuBSXILYNf98Ee'),
(3, 'newuser', 'newuser@hotmail.co.uk', '$2y$10$Q/TiXxyHQRDXLHZtmokpzuzWq.bGuj9ILYo3c998bpQRNMVlIGhNS'),
(4, 'teamthreet', 'hvdjd@hotmail.co.uk', '$2y$10$HVGo7siZdFIzO820ONssT./9yXFU8s2cV4WBsBuieDSX54vq5Mg5G');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE TABLE `feedback` (
  `idFeedback` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idLocation` int(11) NOT NULL,
  `location`char NOT NULL,
  `address`char NOT NULL,
  `coordinates` float( 10, 6 ),
  `fbDescription`char NOT NULL,
  `date/time` Datetime NOT NULL,
  `rating` float NOT NULL
)

ALTER TABLE `feedback`
  ADD PRIMARY KEY (`idFeedback`);

CREATE TABLE `location` (
  `locationid` int(11) NOT NULL,
  `location` char NOT NULL,
  `address` char NOT NULL,
  `coodinates` float( 10, 6 )NOT NULL,
  `overallRating` float NOT NULL,
)

ALTER TABLE `location`
  ADD PRIMARY KEY (`idLocation`);
