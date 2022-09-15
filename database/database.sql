CREATE DATABASE user_CRUD;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40) NOT NULL, 
  birth DATE NOT NULL,
  nit INT NOT NULL
);


INSERT INTO users(name, birth, NIT) VALUES
  ('pueba', '1/11/1999', 1111111),
  ('pueba2', '2/10/1999', 2222222);