CREATE TABLE `item` (
  `itemid` int NOT NULL AUTO_INCREMENT,
  `company` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`itemid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `owner` (
  `ownerid` int NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `ownername` varchar(255) DEFAULT NULL,
  `itemid` int DEFAULT NULL,
  PRIMARY KEY (`ownerid`),
  KEY `itemid` (`itemid`),
  CONSTRAINT `itemid` FOREIGN KEY (`itemid`) REFERENCES `item` (`itemid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



