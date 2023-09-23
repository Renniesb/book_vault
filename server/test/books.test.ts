import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app';
import { Book } from '../src/db/models/Book';

describe('Books API', () => {
  beforeEach(async () => {
    // Clear the books table before each test
    await Book.destroy({ where: {} });
  });

  it('should add a new book', (done) => {
    const newBook = {
      user_id: 1,
      title: 'Sample Book',
      author: 'Sample Author',
      isbn: '1234567890',
    };

    request(app)
      .post('/books/add')
      .send(newBook)
      .expect(201)
      .end(async (err, res) => {
        if (err) return done(err);

        // Check if the book was added to the database
        const addedBook = await Book.findOne({ where: { isbn: newBook.isbn } });
        expect(addedBook).to.not.be.null;

        // Check the response body
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('title').equal(newBook.title);
        expect(res.body).to.have.property('author').equal(newBook.author);
        expect(res.body).to.have.property('isbn').equal(newBook.isbn);

        done();
      });
  });

  // Add more test cases for validation, error handling, etc.
});
