create database simulation;

use simulation;

create table Dossier_terrain(
	id_dossier int auto_increment primary key,
    date_ouverture date,
    date_cloture date,
    etat varchar(40)
);

insert into Dossier_terrain (date_ouverture, date_cloture, etat) values
(curdate(), curdate(), "traité"),
(curdate(), curdate(), "traité"),
(curdate(), curdate(), "traité"),
(curdate(), curdate(), "traité"),
(curdate(), curdate(), "nontraité"),
(curdate(), curdate(), "nontraité"),
(curdate(), curdate(), "nontraité"),
(curdate(), curdate(), "nontraité");


CREATE USER 'Abdo'@'localhost' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON simulation.* TO 'Abdo'@'localhost';


ALTER USER 'Abdo'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';




