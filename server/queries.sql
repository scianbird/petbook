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