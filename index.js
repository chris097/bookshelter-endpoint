const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json());

//Get all books
app.get("/books", async(req, res) => {
  try {
    const allBooks = await pool.query("SELECT * FROM bookshop");

    res.json(allBooks.rows)
  } catch (error) {
    console.error(err.message);
  }
});

//Get a book
app.get("/books/:id", async(req, res) => {
  try {
    const { id } = req.params;
      const book = await pool.query("SELECT * FROM bookshop WHERE book_id = $1", [
        id
      ]);

      res.json(book.rows);
  } catch (error) {
    console.log(error.message)
  }
})

// Post a book



app.listen(4040, () => {
  console.log("Server listening to port 4040...")
})