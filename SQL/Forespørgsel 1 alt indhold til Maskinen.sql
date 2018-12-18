#CREATE DATABASE Kaffemaskine;

#USE Kaffemaskine;

/*CREATE TABLE BrygFunktioner
(
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	navn VARCHAR(100) NOT NULL,
	beskrivelse TEXT NOT NULL,
	tid INT NOT NULL,
	pun TEXT,
	created DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
	modified DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);*/

INSERT INTO brygfunktioner(navn, beskrivelse, tid) VALUES
("Kaffe", "Sort kaffe uden sukker og mælk", 10),
("Kaffe med sukker", "Sort kaffe med sukker", 12),
("Kaffe med mælk", "Sort kaffe med mælk", 12),
("Espresso", "Halv kop med ekstra stærk kaffe", 10),
("Mocca", "Kvalitets kaffe fusioneret med kakao", 15),
("Wiener melange", "En herlig blanding af kaffe med mælk, sukker blandet med kakao", 15),
("Cappuccino", "Espresso med skummet varm mælk", 15),
("Cafelatte", "Kaffe med 2/3 dele mælk", 15),
("Kakao", "Varm kakao lavet på vand", 10),
("Varmt vand", "Kogende vand 99 grader... Hot, hot og hot.", 6);