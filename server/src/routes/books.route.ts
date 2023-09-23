import { Router } from 'express';
import { addBook } from '../controllers/books.controller';

const router = Router();

// Create a new book
router.post('/add', addBook);

export default router;
