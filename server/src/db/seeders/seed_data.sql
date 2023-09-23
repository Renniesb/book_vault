-- Insert sample user data
INSERT INTO Users (username, email, password)
VALUES
  ('user1', 'user1@example.com', 'hashed_password_1'),
  ('user2', 'user2@example.com', 'hashed_password_2');

-- Insert sample book data
INSERT INTO Books (title, author, genre, publication_year, isbn, cover_image_url, user_id)
VALUES
  ('Book 1', 'Author 1', 'Fiction', 2022, 'ISBN-1234567890', 'https://example.com/book1.jpg', 1),
  ('Book 2', 'Author 2', 'Non-Fiction', 2020, 'ISBN-9876543210', 'https://example.com/book2.jpg', 2);

-- Insert sample ratings
INSERT INTO Ratings (rating, user_id, book_id)
VALUES
  (5, 1, 1),
  (4, 2, 2);

-- Insert sample reviews
INSERT INTO Reviews (text, user_id, book_id)
VALUES
  ('Great book!', 1, 1),
  ('Interesting read.', 2, 2);
