create database streact;

use streact;

create table stagiaire(
	id int auto_increment primary key,
    nom varchar(50),
    prenom varchar(50),
    image text
);
drop table stagiaire;

CREATE USER 'khalid'@'localhost' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON streact.* TO 'khalid'@'localhost';


ALTER USER 'khalid'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';