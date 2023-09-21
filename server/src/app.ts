import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import booksRoute from './routes/books.route';

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use('/books', booksRoute); // Define your base URL, e.g., /api/books

// Handle other routes, middleware, and setup here

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
