-- --------------------------------------------------------
-- Vært:                         127.0.0.1
-- Server-version:               10.1.36-MariaDB - mariadb.org binary distribution
-- ServerOS:                     Win32
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for kaffemaskine
CREATE DATABASE IF NOT EXISTS `kaffemaskine` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `kaffemaskine`;

-- Dumping structure for tabel kaffemaskine.brygfunktioner
CREATE TABLE IF NOT EXISTS `brygfunktioner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `navn` varchar(100) NOT NULL,
  `beskrivelse` text NOT NULL,
  `tid` int(11) NOT NULL,
  `pun` text,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table kaffemaskine.brygfunktioner: ~10 rows (approximately)
/*!40000 ALTER TABLE `brygfunktioner` DISABLE KEYS */;
INSERT INTO `brygfunktioner` (`id`, `navn`, `beskrivelse`, `tid`, `pun`, `created`, `modified`) VALUES
	(1, 'Kaffe', 'Sort kaffe uden sukker og mælk', 10, NULL, '2018-12-17 14:42:08', '2018-12-17 14:42:08'),
	(2, 'Kaffe med sukker', 'Sort kaffe med sukker', 12, NULL, '2018-12-17 14:42:08', '2018-12-17 14:42:08'),
	(3, 'Kaffe med mælk', 'Sort kaffe med mælk', 12, NULL, '2018-12-17 14:42:08', '2018-12-17 14:42:08'),
	(4, 'Espresso', 'Halv kop med ekstra stærk kaffe', 10, NULL, '2018-12-17 14:42:08', '2018-12-17 14:42:08'),
	(5, 'Mocca', 'Kvalitets kaffe fusioneret med kakao', 15, NULL, '2018-12-17 14:42:08', '2018-12-17 14:42:08'),
	(6, 'Wiener melange', 'En herlig blanding af kaffe med mælk, sukker blandet med kakao', 15, NULL, '2018-12-17 14:42:08', '2018-12-17 14:42:08'),
	(7, 'Cappuccino', 'Espresso med skummet varm mælk', 15, NULL, '2018-12-17 14:42:08', '2018-12-17 14:42:08'),
	(8, 'Cafelatte', 'Kaffe med 2/3 dele mælk', 15, NULL, '2018-12-17 14:42:08', '2018-12-17 14:42:08'),
	(9, 'Kakao', 'Varm kakao lavet på vand', 10, NULL, '2018-12-17 14:42:08', '2018-12-17 14:42:08'),
	(10, 'Varmt vand', 'Kogende vand 99 grader... Hot, hot og hot.', 6, NULL, '2018-12-17 14:42:08', '2018-12-17 14:42:08');
/*!40000 ALTER TABLE `brygfunktioner` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
