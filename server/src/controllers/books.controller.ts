import { Request, Response } from 'express';
import { Book } from '../db/models/Book';


export const addBook = async (req: Request, res: Response) => {
  const { title, author, isbn, user_id } = req.body;

  if (!title || !author || !isbn || !user_id) {
    return res.status(400).json({ message: 'Title, author, isbn, and user_id are required' });
  }

  try {
    const newBook = await Book.create({ title, author, isbn,user_id });
    return res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error adding the book to the database' });
  }
};
