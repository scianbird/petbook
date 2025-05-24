-- I want to have a table in my database for the data that users will log
-- First, I need to create the table (including a primary key)

/* CREATE TABLE petbook (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_name VARCHAR(255),
  favourite_pet VARCHAR(255),
  user_comment TEXT
); */

-- When running: Success. No rows returned & the table is created in my database
-- For testing/styling the appending of the comments, I will insert some test data into the table: 

/* 
INSERT INTO petbook (user_name, favourite_pet, user_comment)
VALUES ('Natasha', 'William', 'William you are so handsome!'),
('Claire', 'Toad', 'I know you arent supposed to choose favourites... but this form is asking me to!'), */

--Success. No rows returned + the data is now correctly in my table


/* reading this https://www.w3schools.com/sql/sql_ref_sqlserver.asp
(+ my excel experience) allowed me to format this in order to show the "vote" results 
SELECT favourite_pet, COUNT(favourite_pet)
FROM petbook
GROUP BY favourite_pet

a table was returned counting the number of times each pet name showed up in the table - since the entry for that element has set options, this ensures that there will never be "bad" data eg toad instead of Toad 