```sql 
use rudra;
select * from rudradata;
select * from studentdata;

insert into studentdata(id,name ,surname)VALUES
(1, 'Rudra', 'Vaja'),
(2, 'Rahul', 'Patel'),
(3, 'Amit', 'Shah'),
(4, 'Jay', 'Mehta'),
(5, 'Raj', 'Joshi'),
(6, 'Dev', 'Dave'),
(7, 'Harsh', 'Trivedi'),
(8, 'Karan', 'Desai'),
(9, 'Yash', 'Bhatt'),
(10, 'Akash', 'Pandya');

SET SQL_SAFE_UPDATES = 0;

DELETE FROM studentdata;

delete from studentdata where id=5;
delete from studentdata where name ='dev';
update studentdata set name=null where id=7;
select * from studentdata where name is null;
select  *from studentdata limit 9;
delete from studentdata;
SELECT COUNT(name)FROM studentdata;
update studentdata set name = 'miha' where id=7;
select count(name)from studentdata;
-- sum , min , max , avg
SELECT *FROM STUDENTDATA WHERE NAME LIKE 'RUD_A' order by ID;



SELECT * FROM STUDENTDATA WHERE NAME iN ('RUDRA','AMIT','RAVAN');

alter TABLE studentdata ADD column PRICE INT;
ALTER TABLE studentdata DROP column AGE;

UPDATE studentdata SET price = 125488786 WHERE id = 1;
UPDATE studentdata SET price = 75412 WHERE id = 2;
UPDATE studentdata SET price = 50000 WHERE id = 3;
UPDATE studentdata SET price = 75000 WHERE id = 4;
UPDATE studentdata SET price = 100000 WHERE id = 5;
UPDATE studentdata SET price = 25000 WHERE id = 6;
UPDATE studentdata SET price = 45000 WHERE id = 7;
UPDATE studentdata SET price = 85000 WHERE id = 8;
UPDATE studentdata SET price = 120000 WHERE id = 9;
UPDATE studentdata SET price = 65000 WHERE id = 10;

select *from studentdata where price between 50000 and 120000;

```

## Joins ##
``` sql
(INNER) JOIN: Returns only rows that have matching values in both tables.

LEFT (OUTER) JOIN: Returns all rows from the left table, and only the matched rows from the right table
RIGHT (OUTER) JOIN: Returns all rows from the right table, and only the matched rows from the left table
FULL (OUTER) JOIN: Returns all rows when there is a match in either the left or right table

SET SQL_SAFE_UPDATES = 0; is a MySQL command that disables Safe Update Mode for your current database connection. AND SET SQL_SAFE_UPDATES = 1 ; SAFE MODE IS ON.

create database unionexample;
use unionexample;
create table uni(
id int primary key auto_increment,
name varchar(58) not null,
payment varchar(15) not null
);

INSERT INTO uni(name, payment)
VALUES
('tanjiro', 'cash');

ALTER TABLE uni
DROP id;

ALTER TABLE uni
MODIFY id INT NOT NULL AUTO_INCREMENT;

SHOW CREATE TABLE uni;

select * from uni;

ALTER TABLE uni
MODIFY COLUMN id INT FIRST;

create table tabletwo(
studentname varchar(15) not null,
address varchar(75) not null
);
insert into tabletwo values('insouke','gujarat');

select * from tabletwo;


select * from uni union select * from tabletwo;
drop table tabletwo;

create table firstunion(
id int  primary key,
name varchar(15) not null
);
create table secondtable(
id int primary key,
name varchar(68) not null 
);
INSERT INTO firstunion (id, name)
VALUES
(1, 'Rudra'),
(2, 'Inosuke'),
(3, 'Tanjiro'),
(4, 'Zenitsu');
INSERT INTO secondtable (id, name)
VALUES
(5, 'Nezuko'),
(6, 'Giyu'),
(7, 'Akaza'),
(8, 'Rengoku');

select * from firstunion;
select * from secondtable;

select * from firstunion union select * from secondtable order by name;

update firstunion set id = 15 where id=1;




```

## Inner join

``` sql

use joints;
create database joints;
create table innerjoin(
id int primary key,
studentname varchar(15) not null,
marks int not null
);
create table innerjoins(
id int primary key
);
select * from innerjoin;



insert into innerjoin(id,studentname,marks)values(1,'rudra',85),(2,'inosuke',75),(3,'tanjiro',56);
insert into innerjoins(id)values(1),(2);
select  * from innerjoins;
select innerjoins.id ,innerjoin.studentname, innerjoin.marks
from innerjoins
join innerjoin
on innerjoins.id = innerjoin.id;



CREATE DATABASE joins_example;

USE joins_example;

CREATE TABLE students ( id INT PRIMARY KEY, studentname VARCHAR(20) NOT NULL );

CREATE TABLE marks ( id INT PRIMARY KEY, student_id INT, subject VARCHAR(20), marks INT );

INSERT INTO students (id, studentname) VALUES (1, 'Rudra'), (2, 'Inosuke'), (3, 'Tanjiro'), (4, 'Zenitsu'); -- Insert marks 
INSERT INTO marks (id, student_id, subject, marks) VALUES (101, 1, 'SQL', 85), (102, 2, 'SQL', 75), (103, 3, 'SQL', 90), (104, 5, 'SQL', 65);

SELECT * FROM students;

SELECT * FROM marks;

select students.id , students.studentname , marks.marks , marks.subject
from students
inner join marks
on students.id = marks.student_id;
```


# Advance SQl
``` sql 
use querys;
select *from sqlqr;

	select name , marks , depatment , id
	from sqlqr
	where marks > all(select marks from sqlqr where depatment='hr');


```
