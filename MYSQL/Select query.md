##use rudra;
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


##