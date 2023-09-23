-- Create Users Table
CREATE TABLE IF NOT EXISTS Users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Books Table
CREATE TABLE IF NOT EXISTS Books (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  genre VARCHAR(255),
  publication_year INT,
  isbn VARCHAR(13),
  cover_image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT REFERENCES Users(user_id)
);

-- Create Ratings Table
CREATE TABLE IF NOT EXISTS Ratings (
  rating_id SERIAL PRIMARY KEY,
  rating INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT REFERENCES Users(user_id),
  book_id INT REFERENCES Books(book_id)
);

-- Create Reviews Table
CREATE TABLE IF NOT EXISTS Reviews (
  review_id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT REFERENCES Users(user_id),
  book_id INT REFERENCES Books(book_id)
);
