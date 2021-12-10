CREATE DATABASE bookshelter;

CREATE TABLE bookstore(
  book_id SERIAL PRIMARY KEY,
  book_name VARCHAR(255) NOT NULL,
  book_author VARCHAR(255) NOT NULL,
  book_url TEXT NOT NULL,
  book_publisher VARCHAR(255) NOT NULL,
  book_year INTEGER NOT NULL,
  book_description TEXT NOT NULL,
  book_category VARCHAR(255) NOT NULL,
);
