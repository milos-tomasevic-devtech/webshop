-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 29, 2014 at 12:44 
-- Server version: 5.5.39
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `webshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE IF NOT EXISTS `cart` (
`id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
`id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
`id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date_ordered` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE IF NOT EXISTS `order_details` (
`id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
`id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `thumbnail_url` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `thumbnail_url`, `image_url`, `category_id`, `price`) VALUES
(1, 'PHP Objects, Patterns and Practice', '', 'http://ecx.images-amazon.com/images/I/51yMerQZlQL._SL150_.jpg', '', 0, '24.59'),
(2, 'PHP Cookbook', '', 'http://ecx.images-amazon.com/images/I/51xoxfU7GxL._SL150_.jpg', '', 0, '29.49'),
(3, 'Programming PHP', '', 'http://ecx.images-amazon.com/images/I/51HndtRqX1L._SL150_.jpg', '', 0, '17.59'),
(4, 'PHP and MySQL Web Development', '', 'http://ecx.images-amazon.com/images/I/51AigeIv7OL._SL150_.jpg', '', 0, '32.59'),
(5, 'Strathwood Basics Folding Hardwood', '', 'http://ecx.images-amazon.com/images/I/311AstmFU4L._SL150_.jpg', '', 0, '75.99'),
(6, 'Strathwood Basics Folding Hardwood', '', 'http://ecx.images-amazon.com/images/I/41P3CFGBD7L._SL150_.jpg', '', 0, '49.59'),
(7, 'Strathwood Griffen All-Weather', '', 'http://ecx.images-amazon.com/images/I/41Sz9RYeP3L._SL150_.jpg', '', 0, '379.59'),
(8, 'Strathwood Rawley Swivel Rocker', '', 'http://ecx.images-amazon.com/images/I/41akzlK8TVL._SL150_.jpg', '', 0, '24.59');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
