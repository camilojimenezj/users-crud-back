CREATE DATABASE user_CRUD;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40) NOT NULL, 
  birth_date DATE NOT NULL,
  NIT NUMERIC NOT NULL
);


INSERT INTO users(name, birth_date, NIT) VALUES
  ('pueba', '1/11/1999', 1111111),
  ('pueba2', '2/10/1999', 2222222);